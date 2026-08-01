import {
  EN_NO_KYC_OPERATOR_IDS,
  EN_REVIEW_HUB_DEFAULT_VISIBLE,
  EN_REVIEW_HUB_HIGHLIGHT_IDS,
  EN_REVIEW_HUB_HIGHLIGHT_PRIMARY_IDS,
  EN_REVIEW_HUB_HIGHLIGHT_SECONDARY_IDS,
  type EnReviewHubCategory,
  type EnReviewHubSort,
} from "@/components/verticals/reviews/en/en-reviews-config";
import {
  filterReviewsForSurface,
  getOperatorPublicStatus,
  type OperatorPublicStatus,
} from "@/content/operators/status";
import { getAuthorById } from "@/lib/content";
import {
  getGlobalCasinoById,
  getGlobalReviews,
} from "@/lib/content/global";
import type { Author, Casino, ImageRef, Review, Vertical } from "@/types/content";

export type EnReviewHubBadge = {
  label: string;
  accent: string;
};

export type EnResolvedReviewCard = {
  review: Review;
  casino: Casino;
  author: Author;
  href: string;
  operatorName: string;
  authorDisplayName: string;
  logo?: ImageRef;
  rating: number;
  categoryBadges: EnReviewHubBadge[];
  statusBadge: EnReviewHubBadge | null;
  primaryCategory: Exclude<EnReviewHubCategory, "all">;
  categories: Exclude<EnReviewHubCategory, "all">[];
  displayDateIso: string;
  displayDateKind: "updated" | "published";
  readingMinutes: number;
  publicStatus: OperatorPublicStatus | undefined;
};

const NO_KYC_SET = new Set<string>(EN_NO_KYC_OPERATOR_IDS);
const HIGHLIGHT_SET = new Set<string>(EN_REVIEW_HUB_HIGHLIGHT_IDS);

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

/** Deterministic English short date — avoids Intl hydration mismatches. */
export function formatEnReviewHubDate(iso: string): string {
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

/** ~200 words/minute, minimum 1, rounded up. */
export function estimateEnReviewReadingMinutes(body: string): number {
  const words = body
    .replace(/##+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function categoryBadgesFor(
  categories: Exclude<EnReviewHubCategory, "all">[],
): EnReviewHubBadge[] {
  const meta: Record<Exclude<EnReviewHubCategory, "all">, EnReviewHubBadge> = {
    crypto: {
      label: "Crypto",
      accent: "border-cyan-400/30 bg-cyan-500/10 text-cyan-200",
    },
    fiat: {
      label: "Fiat",
      accent: "border-primary/30 bg-primary/10 text-primary",
    },
    "no-kyc": {
      label: "No-KYC",
      accent: "border-rose-400/30 bg-rose-500/10 text-rose-200",
    },
    sportsbooks: {
      label: "Sportsbook",
      accent: "border-emerald-400/30 bg-emerald-500/10 text-emerald-200",
    },
  };
  return categories.map((id) => meta[id]);
}

function statusBadgeFor(
  casinoId: string,
  status: OperatorPublicStatus | undefined,
): EnReviewHubBadge | null {
  if (casinoId === "bcgame") {
    return {
      label: "Editorial reference",
      accent: "border-accent/35 bg-accent/10 text-accent",
    };
  }
  if (status === "official-trust") {
    return {
      label: "Official reference",
      accent: "border-accent/35 bg-accent/10 text-accent",
    };
  }
  if (status === "pending-partner") {
    return {
      label: "Partner pending",
      accent: "border-amber-400/35 bg-amber-500/10 text-amber-200",
    };
  }
  return null;
}

function resolveCategories(
  casino: Casino,
): Exclude<EnReviewHubCategory, "all">[] {
  const categories: Exclude<EnReviewHubCategory, "all">[] = [];
  const verticals = casino.verticals as Vertical[];

  if (verticals.includes("crypto-casino")) categories.push("crypto");
  if (verticals.includes("fiat-casino")) categories.push("fiat");
  if (NO_KYC_SET.has(casino.id)) categories.push("no-kyc");
  if (verticals.includes("sportsbook")) categories.push("sportsbooks");

  return categories;
}

function primaryCategory(
  categories: Exclude<EnReviewHubCategory, "all">[],
): Exclude<EnReviewHubCategory, "all"> {
  if (categories.includes("no-kyc")) return "no-kyc";
  if (categories.includes("crypto")) return "crypto";
  if (categories.includes("fiat")) return "fiat";
  if (categories.includes("sportsbooks")) return "sportsbooks";
  return "crypto";
}

function authorDisplayName(author: Author): string {
  if (author.id === "redaccion-jugadamax") return "JugadaMax Editorial";
  return author.name;
}

export function parseEnReviewHubCategory(
  value: string | string[] | undefined,
): EnReviewHubCategory {
  const raw = (Array.isArray(value) ? value[0] : value)?.trim();
  if (
    raw === "crypto" ||
    raw === "fiat" ||
    raw === "no-kyc" ||
    raw === "sportsbooks" ||
    raw === "all"
  ) {
    return raw;
  }
  return "all";
}

export function parseEnReviewHubSort(
  value: string | string[] | undefined,
): EnReviewHubSort {
  const raw = (Array.isArray(value) ? value[0] : value)?.trim();
  if (raw === "highest" || raw === "name" || raw === "newest") {
    return raw;
  }
  return "newest";
}

export function parseEnReviewHubQuery(
  value: string | string[] | undefined,
): string {
  const raw = Array.isArray(value) ? value[0] : value;
  return (raw ?? "").trim();
}

/** Default directory sort: publishedAt desc → updatedAt desc → title. */
export function sortEnReviewsNewest(a: Review, b: Review): number {
  const publishedDifference =
    Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
  if (publishedDifference !== 0) return publishedDifference;

  const updatedDifference =
    Date.parse(b.updatedAt ?? b.publishedAt) -
    Date.parse(a.updatedAt ?? a.publishedAt);
  if (updatedDifference !== 0) return updatedDifference;

  return a.title.localeCompare(b.title, "en");
}

function sortResolved(
  items: EnResolvedReviewCard[],
  sort: EnReviewHubSort,
): EnResolvedReviewCard[] {
  const next = items.slice();
  if (sort === "highest") {
    next.sort((a, b) => {
      const ratingDiff = b.rating - a.rating;
      if (ratingDiff !== 0) return ratingDiff;
      return sortEnReviewsNewest(a.review, b.review);
    });
    return next;
  }
  if (sort === "name") {
    next.sort((a, b) =>
      a.operatorName.localeCompare(b.operatorName, "en", {
        sensitivity: "base",
      }),
    );
    return next;
  }
  next.sort((a, b) => sortEnReviewsNewest(a.review, b.review));
  return next;
}

export function resolveEnReviewCard(
  review: Review,
): EnResolvedReviewCard | null {
  const casino = getGlobalCasinoById(review.casinoId);
  const author = getAuthorById(review.authorId);
  if (!casino || !author) return null;

  const categories = resolveCategories(casino);
  const publicStatus = getOperatorPublicStatus(casino.id);
  const hasRealUpdate =
    Boolean(review.updatedAt) && review.updatedAt !== review.publishedAt;

  return {
    review,
    casino,
    author,
    href: `/en/reviews/${review.slug}`,
    operatorName: casino.name,
    authorDisplayName: authorDisplayName(author),
    logo: casino.logo,
    rating: review.rating,
    categoryBadges: categoryBadgesFor(categories),
    statusBadge: statusBadgeFor(casino.id, publicStatus),
    primaryCategory: primaryCategory(categories),
    categories,
    displayDateIso: hasRealUpdate
      ? (review.updatedAt as string)
      : review.publishedAt,
    displayDateKind: hasRealUpdate ? "updated" : "published",
    readingMinutes: estimateEnReviewReadingMinutes(review.body),
    publicStatus,
  };
}

export function resolveAllEnReviewCards(): EnResolvedReviewCard[] {
  return filterReviewsForSurface(getGlobalReviews(), "english-global")
    .slice()
    .sort(sortEnReviewsNewest)
    .flatMap((review) => {
      const resolved = resolveEnReviewCard(review);
      return resolved ? [resolved] : [];
    });
}

export function isEnHighlightedCasinoId(casinoId: string): boolean {
  return HIGHLIGHT_SET.has(casinoId);
}

function resolveHighlightCards(
  ids: readonly string[],
): EnResolvedReviewCard[] {
  const byCasino = new Map(
    resolveAllEnReviewCards().map((card) => [card.casino.id, card]),
  );
  return ids.flatMap((id) => {
    const card = byCasino.get(id);
    return card ? [card] : [];
  });
}

export function resolveEnHighlightedReviews(): {
  primary: EnResolvedReviewCard[];
  secondary: EnResolvedReviewCard[];
} {
  return {
    primary: resolveHighlightCards(EN_REVIEW_HUB_HIGHLIGHT_PRIMARY_IDS),
    secondary: resolveHighlightCards(EN_REVIEW_HUB_HIGHLIGHT_SECONDARY_IDS),
  };
}

export function countEnReviewsByCategory(
  category: Exclude<EnReviewHubCategory, "all">,
): number {
  return resolveAllEnReviewCards().filter((card) =>
    card.categories.includes(category),
  ).length;
}

export type EnReviewDirectoryResult = {
  items: EnResolvedReviewCard[];
  collapsedItems: EnResolvedReviewCard[];
  totalMatched: number;
  visibleCount: number;
  collapsedCount: number;
  isDefaultView: boolean;
  category: EnReviewHubCategory;
  sort: EnReviewHubSort;
  query: string;
};

export function resolveEnReviewDirectory(options: {
  category?: EnReviewHubCategory;
  sort?: EnReviewHubSort;
  query?: string;
  defaultVisible?: number;
}): EnReviewDirectoryResult {
  const category = options.category ?? "all";
  const sort = options.sort ?? "newest";
  const query = (options.query ?? "").trim().toLowerCase();
  const defaultVisible =
    options.defaultVisible ?? EN_REVIEW_HUB_DEFAULT_VISIBLE;

  let items = resolveAllEnReviewCards();

  if (category !== "all") {
    items = items.filter((card) => card.categories.includes(category));
  }

  if (query) {
    items = items.filter((card) => {
      const haystack = [
        card.operatorName,
        card.review.title,
        card.review.verdict,
        card.review.slug,
        casinoSummary(card.casino),
        ...card.categoryBadges.map((b) => b.label),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }

  items = sortResolved(items, sort);

  const isDefaultView =
    category === "all" && query.length === 0 && sort === "newest";

  if (isDefaultView) {
    const remaining = items.filter(
      (card) => !isEnHighlightedCasinoId(card.casino.id),
    );
    const visible = remaining.slice(0, defaultVisible);
    const collapsed = remaining.slice(defaultVisible);

    return {
      items: visible,
      collapsedItems: collapsed,
      totalMatched: remaining.length,
      visibleCount: visible.length,
      collapsedCount: collapsed.length,
      isDefaultView: true,
      category,
      sort,
      query: options.query ?? "",
    };
  }

  return {
    items,
    collapsedItems: [],
    totalMatched: items.length,
    visibleCount: items.length,
    collapsedCount: 0,
    isDefaultView: false,
    category,
    sort,
    query: options.query ?? "",
  };
}

function casinoSummary(casino: Casino): string {
  return casino.summary ?? "";
}

export function buildEnReviewsQueryHref(params: {
  q?: string;
  category?: EnReviewHubCategory;
  sort?: EnReviewHubSort;
  hash?: string;
}): string {
  const search = new URLSearchParams();
  if (params.q?.trim()) search.set("q", params.q.trim());
  if (params.category && params.category !== "all") {
    search.set("category", params.category);
  }
  if (params.sort && params.sort !== "newest") {
    search.set("sort", params.sort);
  }

  const qs = search.toString();
  const hash = params.hash ?? "";
  return qs ? `/en/reviews?${qs}${hash}` : `/en/reviews${hash || ""}`;
}
