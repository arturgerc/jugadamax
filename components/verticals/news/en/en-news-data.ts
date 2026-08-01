import {
  EN_NEWS_CATEGORY_ACCENTS,
  EN_NEWS_CATEGORY_LABELS,
  EN_NEWS_KIND_ACCENTS,
  EN_NEWS_KIND_LABELS,
} from "@/components/verticals/news/en/en-news-config";
import { getAuthorById } from "@/lib/content";
import { getGlobalNews } from "@/lib/content/global";
import type {
  Article,
  Author,
  NewsCategory,
  NewsKind,
} from "@/types/content";

export type EnResolvedNewsCard = {
  article: Article;
  author: Author;
  authorDisplayName: string;
  href: string;
  newsKind: NewsKind;
  newsKindLabel: string;
  newsKindAccent: string;
  newsCategory: NewsCategory;
  newsCategoryLabel: string;
  newsCategoryAccent: string;
  displayDateIso: string;
  displayDateKind: "updated" | "published";
  readingMinutes: number;
  featured: boolean;
};

const EN_SHORT_MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

export function formatEnNewsDate(iso: string): string {
  const datePart = iso.slice(0, 10);
  const [yearStr, monthStr, dayStr] = datePart.split("-");
  const year = Number(yearStr);
  const month = Number(monthStr);
  const day = Number(dayStr);
  if (!year || !month || !day || month < 1 || month > 12) {
    return datePart;
  }
  return `${day} ${EN_SHORT_MONTHS[month - 1]} ${year}`;
}

export function estimateEnNewsReadingMinutes(body: string): number {
  const words = body
    .replace(/##+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function sortEnNewsNewest(a: Article, b: Article): number {
  const publishedDifference =
    Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
  if (publishedDifference !== 0) return publishedDifference;
  const updatedDifference =
    Date.parse(b.updatedAt ?? b.publishedAt) -
    Date.parse(a.updatedAt ?? a.publishedAt);
  if (updatedDifference !== 0) return updatedDifference;
  return a.title.localeCompare(b.title, "en");
}

function authorDisplayName(author: Author): string {
  if (author.id === "redaccion-jugadamax") return "JugadaMax Editorial";
  return author.name;
}

export function resolveEnNewsCard(article: Article): EnResolvedNewsCard | null {
  if (article.type !== "news") return null;
  const author = getAuthorById(article.authorId);
  if (!author) return null;

  const newsKind: NewsKind = article.newsKind ?? "noticia";
  const newsCategory: NewsCategory = article.newsCategory ?? "actualidad";
  const hasRealUpdate =
    Boolean(article.updatedAt) && article.updatedAt !== article.publishedAt;

  return {
    article,
    author,
    authorDisplayName: authorDisplayName(author),
    href: `/en/news/${article.slug}`,
    newsKind,
    newsKindLabel: EN_NEWS_KIND_LABELS[newsKind],
    newsKindAccent: EN_NEWS_KIND_ACCENTS[newsKind],
    newsCategory,
    newsCategoryLabel: EN_NEWS_CATEGORY_LABELS[newsCategory],
    newsCategoryAccent: EN_NEWS_CATEGORY_ACCENTS[newsCategory],
    displayDateIso: hasRealUpdate
      ? (article.updatedAt as string)
      : article.publishedAt,
    displayDateKind: hasRealUpdate ? "updated" : "published",
    readingMinutes: estimateEnNewsReadingMinutes(article.body),
    featured: Boolean(article.featured),
  };
}

export function resolveAllEnNewsCards(): EnResolvedNewsCard[] {
  return getGlobalNews()
    .slice()
    .sort(sortEnNewsNewest)
    .flatMap((article) => {
      const resolved = resolveEnNewsCard(article);
      return resolved ? [resolved] : [];
    });
}

export function resolveEnFeaturedNews(limit = 2): EnResolvedNewsCard[] {
  const featured = resolveAllEnNewsCards().filter((card) => card.featured);
  if (featured.length > 0) return featured.slice(0, limit);
  return resolveAllEnNewsCards().slice(0, limit);
}

export function resolveEnNewsByCategory(
  category: NewsCategory,
): EnResolvedNewsCard[] {
  return resolveAllEnNewsCards().filter(
    (card) => card.newsCategory === category,
  );
}

export function parseEnNewsCategory(
  value: string | string[] | undefined,
): NewsCategory | "all" {
  const raw = (Array.isArray(value) ? value[0] : value)?.trim();
  if (
    raw === "actualidad" ||
    raw === "regulacion" ||
    raw === "crypto" ||
    raw === "casinos" ||
    raw === "apuestas" ||
    raw === "bonos" ||
    raw === "pagos" ||
    raw === "industria" ||
    raw === "jugadamax" ||
    raw === "all"
  ) {
    return raw === "all" ? "all" : raw;
  }
  return "all";
}

export function resolveEnNewsDirectory(options?: {
  category?: NewsCategory | "all";
}): EnResolvedNewsCard[] {
  const category = options?.category ?? "all";
  const all = resolveAllEnNewsCards();
  if (category === "all") return all;
  return all.filter((card) => card.newsCategory === category);
}

export function resolveEnRelatedNews(
  article: Article,
  limit = 3,
): EnResolvedNewsCard[] {
  return resolveAllEnNewsCards()
    .filter((card) => card.article.id !== article.id)
    .filter((card) => {
      if (article.newsCategory && card.newsCategory === article.newsCategory) {
        return true;
      }
      if (article.newsKind && card.newsKind === article.newsKind) {
        return true;
      }
      return false;
    })
    .slice(0, limit);
}
