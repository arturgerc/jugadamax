import {
  EN_GUIDE_CATEGORY_META,
  EN_GUIDE_HUB_RESOURCES,
  EN_GUIDE_KIND_LABELS,
  type EnGuideHubCategory,
  type EnGuideHubResource,
  type EnGuideHubResourceKind,
} from "@/components/verticals/guides/en/en-guide-hub-config";
import { estimateReadingMinutes } from "@/components/verticals/guides/guide-hub-data";
import { getAuthorById } from "@/lib/content";
import {
  getGlobalCasinoById,
  getGlobalGuideBySlug,
} from "@/lib/content/global";
import type { Article, Author, Casino, ImageRef } from "@/types/content";

export type ResolvedEnGuideCard = {
  resource: EnGuideHubResource;
  kind: EnGuideHubResourceKind;
  kindLabel: string;
  category: EnGuideHubCategory;
  categoryLabel: string;
  categoryAccent: string;
  fallbackClass: string;
  title: string;
  summary: string;
  href: string;
  /** Present only for real English guide articles. */
  article?: Article;
  author?: Author;
  readingMinutes?: number;
  displayDateIso?: string;
  displayDateKind?: "updated" | "published";
  coverImage?: ImageRef;
  casino?: Casino;
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

/** Deterministic en short date — avoids Intl hydration mismatches. */
export function formatEnGuideDate(iso: string): string {
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

function resolveResource(resource: EnGuideHubResource): ResolvedEnGuideCard | null {
  const meta = EN_GUIDE_CATEGORY_META[resource.category];
  const base = {
    resource,
    kind: resource.kind,
    kindLabel: EN_GUIDE_KIND_LABELS[resource.kind],
    category: resource.category,
    categoryLabel: meta.label,
    categoryAccent: meta.accent,
    fallbackClass: meta.fallback,
    title: resource.title,
    summary: resource.summary,
    href: resource.href,
  };

  if (resource.kind === "guide" && resource.guideSlug) {
    const article = getGlobalGuideBySlug(resource.guideSlug);
    if (!article) return null;
    const author = getAuthorById(article.authorId);
    if (!author) return null;
    const displayDateIso = article.updatedAt ?? article.publishedAt;
    const displayDateKind = article.updatedAt ? "updated" : "published";

    return {
      ...base,
      title: article.title,
      summary: article.summary,
      href: `/en/guides/${article.slug}`,
      article,
      author,
      readingMinutes: estimateReadingMinutes(article.body),
      displayDateIso,
      displayDateKind,
      coverImage: article.coverImage,
    };
  }

  const casino = resource.operatorId
    ? getGlobalCasinoById(resource.operatorId)
    : undefined;

  return {
    ...base,
    coverImage: resource.coverImage,
    casino,
  };
}

export function resolveEnGuideById(id: string): ResolvedEnGuideCard | null {
  const resource = EN_GUIDE_HUB_RESOURCES.find((item) => item.id === id);
  if (!resource) return null;
  return resolveResource(resource);
}

export function resolveEnGuidesByCategory(
  category: EnGuideHubCategory,
): ResolvedEnGuideCard[] {
  return EN_GUIDE_HUB_RESOURCES.filter((e) => e.category === category).flatMap(
    (e) => {
      const resolved = resolveResource(e);
      return resolved ? [resolved] : [];
    },
  );
}

export function resolveEnFeaturedGuide(): ResolvedEnGuideCard | null {
  const featured = EN_GUIDE_HUB_RESOURCES.find((e) => e.featured);
  return featured ? resolveResource(featured) : null;
}

/** Latest updates list — real English guides only (no fabricated rows). */
export function resolveEnLatestGuideUpdates(limit = 4): ResolvedEnGuideCard[] {
  return EN_GUIDE_HUB_RESOURCES.filter((e) => e.kind === "guide")
    .flatMap((e) => {
      const resolved = resolveResource(e);
      return resolved ? [resolved] : [];
    })
    .sort(
      (a, b) =>
        Date.parse(b.displayDateIso ?? "") - Date.parse(a.displayDateIso ?? ""),
    )
    .slice(0, limit);
}
