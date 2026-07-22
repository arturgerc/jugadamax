import {
  GUIDE_CATEGORY_META,
  GUIDE_HUB_ENTRIES,
  type GuideHubCategory,
  type GuideHubEntry,
} from "@/components/verticals/guides/guide-hub-config";
import { getArticleBySlug, getAuthorById, getCasinoById } from "@/lib/content";
import type { Article, Author, Casino, ImageRef } from "@/types/content";

export type ResolvedGuideCard = {
  entry: GuideHubEntry;
  article: Article;
  author: Author;
  category: GuideHubCategory;
  categoryLabel: string;
  categoryAccent: string;
  fallbackClass: string;
  readingMinutes: number;
  displayDateIso: string;
  displayDateKind: "updated" | "published";
  href: string;
  coverImage?: ImageRef;
  /** Linked casino for operator-research fallback visuals. */
  casino?: Casino;
};

/** ~200 words/minute, minimum 1, rounded up. */
export function estimateReadingMinutes(body: string): number {
  const words = body
    .replace(/##+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

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
export function formatGuideDate(iso: string): string {
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

export function resolveGuideBySlug(slug: string): ResolvedGuideCard | null {
  const entry = GUIDE_HUB_ENTRIES.find((item) => item.slug === slug);
  if (!entry) return null;

  const article = getArticleBySlug("guide", slug);
  if (!article) return null;

  const author = getAuthorById(article.authorId);
  if (!author) return null;

  const meta = GUIDE_CATEGORY_META[entry.category];
  const displayDateIso = article.updatedAt ?? article.publishedAt;
  const displayDateKind = article.updatedAt ? "updated" : "published";

  const casino = entry.operatorId
    ? getCasinoById(entry.operatorId)
    : undefined;

  return {
    entry,
    article,
    author,
    category: entry.category,
    categoryLabel: meta.label,
    categoryAccent: meta.accent,
    fallbackClass: meta.fallback,
    readingMinutes: estimateReadingMinutes(article.body),
    displayDateIso,
    displayDateKind,
    href: `/guias/${article.slug}`,
    coverImage: article.coverImage,
    casino,
  };
}

export function resolveGuidesByCategory(
  category: GuideHubCategory,
): ResolvedGuideCard[] {
  return GUIDE_HUB_ENTRIES.filter((e) => e.category === category).flatMap((e) => {
    const resolved = resolveGuideBySlug(e.slug);
    return resolved ? [resolved] : [];
  });
}

export function resolveFeaturedGuide(): ResolvedGuideCard | null {
  const featured = GUIDE_HUB_ENTRIES.find((e) => e.featured);
  return featured ? resolveGuideBySlug(featured.slug) : null;
}

export function resolveLatestGuideUpdates(limit = 4): ResolvedGuideCard[] {
  return GUIDE_HUB_ENTRIES.flatMap((e) => {
    const resolved = resolveGuideBySlug(e.slug);
    return resolved ? [resolved] : [];
  })
    .sort(
      (a, b) =>
        Date.parse(b.displayDateIso) - Date.parse(a.displayDateIso),
    )
    .slice(0, limit);
}
