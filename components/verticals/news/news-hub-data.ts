import {
  NEWS_CATEGORY_ACCENTS,
  NEWS_CATEGORY_LABELS,
  NEWS_KIND_ACCENTS,
  NEWS_KIND_LABELS,
} from "@/components/verticals/news/news-hub-config";
import { getArticles, getAuthorById } from "@/lib/content";
import type {
  Article,
  Author,
  NewsCategory,
  NewsKind,
} from "@/types/content";

export type ResolvedNewsCard = {
  article: Article;
  author: Author;
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

const ES_MX_SHORT_MONTHS = [
  "ene",
  "feb",
  "mar",
  "abr",
  "may",
  "jun",
  "jul",
  "ago",
  "sep",
  "oct",
  "nov",
  "dic",
] as const;

/** Deterministic es-MX short date — avoids Intl hydration mismatches. */
export function formatNewsDate(iso: string): string {
  const datePart = iso.slice(0, 10);
  const [yearStr, monthStr, dayStr] = datePart.split("-");
  const year = Number(yearStr);
  const month = Number(monthStr);
  const day = Number(dayStr);
  if (!year || !month || !day || month < 1 || month > 12) {
    return datePart;
  }
  return `${day} ${ES_MX_SHORT_MONTHS[month - 1]} ${year}`;
}

export function estimateNewsReadingMinutes(body: string): number {
  const words = body
    .replace(/##+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function sortNewsRecientes(a: Article, b: Article): number {
  const publishedDifference =
    Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
  if (publishedDifference !== 0) return publishedDifference;
  const updatedDifference =
    Date.parse(b.updatedAt ?? b.publishedAt) -
    Date.parse(a.updatedAt ?? a.publishedAt);
  if (updatedDifference !== 0) return updatedDifference;
  return a.title.localeCompare(b.title, "es");
}

export function resolveNewsCard(article: Article): ResolvedNewsCard | null {
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
    href: `/noticias/${article.slug}`,
    newsKind,
    newsKindLabel: NEWS_KIND_LABELS[newsKind],
    newsKindAccent: NEWS_KIND_ACCENTS[newsKind],
    newsCategory,
    newsCategoryLabel: NEWS_CATEGORY_LABELS[newsCategory],
    newsCategoryAccent: NEWS_CATEGORY_ACCENTS[newsCategory],
    displayDateIso: hasRealUpdate
      ? (article.updatedAt as string)
      : article.publishedAt,
    displayDateKind: hasRealUpdate ? "updated" : "published",
    readingMinutes: estimateNewsReadingMinutes(article.body),
    featured: Boolean(article.featured),
  };
}

export function resolveAllNewsCards(): ResolvedNewsCard[] {
  return getArticles("news")
    .slice()
    .sort(sortNewsRecientes)
    .flatMap((article) => {
      const resolved = resolveNewsCard(article);
      return resolved ? [resolved] : [];
    });
}

export function resolveFeaturedNews(limit = 2): ResolvedNewsCard[] {
  const featured = resolveAllNewsCards().filter((card) => card.featured);
  if (featured.length > 0) return featured.slice(0, limit);
  return resolveAllNewsCards().slice(0, limit);
}

export function resolveNewsByCategory(
  category: NewsCategory,
): ResolvedNewsCard[] {
  return resolveAllNewsCards().filter(
    (card) => card.newsCategory === category,
  );
}

export function parseNewsCategory(
  value: string | string[] | undefined,
): NewsCategory | "todas" {
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
    raw === "jugadamax"
  ) {
    return raw;
  }
  return "todas";
}

export function resolveNewsDirectory(options?: {
  category?: NewsCategory | "todas";
}): ResolvedNewsCard[] {
  const category = options?.category ?? "todas";
  const all = resolveAllNewsCards();
  if (category === "todas") return all;
  return all.filter((card) => card.newsCategory === category);
}

export function resolveRelatedNews(
  article: Article,
  limit = 3,
): ResolvedNewsCard[] {
  return resolveAllNewsCards()
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
