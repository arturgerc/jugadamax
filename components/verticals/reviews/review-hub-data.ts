import {
  NO_KYC_OPERATOR_IDS,
  REVIEW_HUB_DEFAULT_VISIBLE,
  REVIEW_HUB_HIGHLIGHT_IDS,
  REVIEW_HUB_HIGHLIGHT_PRIMARY_IDS,
  REVIEW_HUB_HIGHLIGHT_SECONDARY_IDS,
  type ReviewHubCategory,
  type ReviewHubSort,
} from "@/components/verticals/reviews/review-hub-config";
import {
  filterReviewsForSurface,
  getOperatorPublicStatus,
  type OperatorPublicStatus,
} from "@/content/operators/status";
import {
  getAuthorById,
  getCasinoById,
  getReviews,
} from "@/lib/content";
import type { Author, Casino, ImageRef, Review, Vertical } from "@/types/content";

export type ReviewHubBadge = {
  label: string;
  accent: string;
};

export type ResolvedReviewCard = {
  review: Review;
  casino: Casino;
  author: Author;
  href: string;
  operatorName: string;
  logo?: ImageRef;
  rating: number;
  categoryBadges: ReviewHubBadge[];
  statusBadge: ReviewHubBadge | null;
  primaryCategory: Exclude<ReviewHubCategory, "todas">;
  categories: Exclude<ReviewHubCategory, "todas">[];
  displayDateIso: string;
  displayDateKind: "updated" | "published";
  readingMinutes: number;
  publicStatus: OperatorPublicStatus | undefined;
};

const NO_KYC_SET = new Set<string>(NO_KYC_OPERATOR_IDS);
const HIGHLIGHT_SET = new Set<string>(REVIEW_HUB_HIGHLIGHT_IDS);

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
export function formatReviewHubDate(iso: string): string {
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

/** ~200 words/minute, minimum 1, rounded up. */
export function estimateReviewReadingMinutes(body: string): number {
  const words = body
    .replace(/##+/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

function categoryBadgesFor(
  categories: Exclude<ReviewHubCategory, "todas">[],
): ReviewHubBadge[] {
  const meta: Record<Exclude<ReviewHubCategory, "todas">, ReviewHubBadge> = {
    crypto: {
      label: "Crypto",
      accent: "border-cyan-400/30 bg-cyan-500/10 text-cyan-200",
    },
    fiat: {
      label: "Fiat",
      accent: "border-primary/30 bg-primary/10 text-primary",
    },
    "sin-kyc": {
      label: "Sin KYC",
      accent: "border-rose-400/30 bg-rose-500/10 text-rose-200",
    },
    apuestas: {
      label: "Apuestas",
      accent: "border-emerald-400/30 bg-emerald-500/10 text-emerald-200",
    },
  };
  return categories.map((id) => meta[id]);
}

function statusBadgeFor(
  casinoId: string,
  status: OperatorPublicStatus | undefined,
): ReviewHubBadge | null {
  if (casinoId === "bcgame") {
    return {
      label: "Referencia editorial",
      accent: "border-accent/35 bg-accent/10 text-accent",
    };
  }
  if (status === "official-trust") {
    return {
      label: "Referencia oficial",
      accent: "border-accent/35 bg-accent/10 text-accent",
    };
  }
  if (status === "pending-partner") {
    return {
      label: "Socio pendiente",
      accent: "border-amber-400/35 bg-amber-500/10 text-amber-200",
    };
  }
  return null;
}

function resolveCategories(
  casino: Casino,
): Exclude<ReviewHubCategory, "todas">[] {
  const categories: Exclude<ReviewHubCategory, "todas">[] = [];
  const verticals = casino.verticals as Vertical[];

  if (verticals.includes("crypto-casino")) categories.push("crypto");
  if (verticals.includes("fiat-casino")) categories.push("fiat");
  if (NO_KYC_SET.has(casino.id)) categories.push("sin-kyc");
  if (verticals.includes("sportsbook")) categories.push("apuestas");

  return categories;
}

function primaryCategory(
  categories: Exclude<ReviewHubCategory, "todas">[],
): Exclude<ReviewHubCategory, "todas"> {
  if (categories.includes("sin-kyc")) return "sin-kyc";
  if (categories.includes("crypto")) return "crypto";
  if (categories.includes("fiat")) return "fiat";
  if (categories.includes("apuestas")) return "apuestas";
  return "crypto";
}

export function parseReviewHubCategory(
  value: string | string[] | undefined,
): ReviewHubCategory {
  const raw = (Array.isArray(value) ? value[0] : value)?.trim();
  if (
    raw === "crypto" ||
    raw === "fiat" ||
    raw === "sin-kyc" ||
    raw === "apuestas" ||
    raw === "todas"
  ) {
    return raw;
  }
  return "todas";
}

export function parseReviewHubSort(
  value: string | string[] | undefined,
): ReviewHubSort {
  const raw = (Array.isArray(value) ? value[0] : value)?.trim();
  if (raw === "calificacion" || raw === "nombre" || raw === "recientes") {
    return raw;
  }
  return "recientes";
}

export function parseReviewHubQuery(
  value: string | string[] | undefined,
): string {
  const raw = Array.isArray(value) ? value[0] : value;
  return (raw ?? "").trim();
}

/** Default directory sort: publishedAt desc → updatedAt desc → title. */
export function sortReviewsRecientes(a: Review, b: Review): number {
  const publishedDifference =
    Date.parse(b.publishedAt) - Date.parse(a.publishedAt);
  if (publishedDifference !== 0) return publishedDifference;

  const updatedDifference =
    Date.parse(b.updatedAt ?? b.publishedAt) -
    Date.parse(a.updatedAt ?? a.publishedAt);
  if (updatedDifference !== 0) return updatedDifference;

  return a.title.localeCompare(b.title, "es");
}

function sortResolved(
  items: ResolvedReviewCard[],
  sort: ReviewHubSort,
): ResolvedReviewCard[] {
  const next = items.slice();
  if (sort === "calificacion") {
    next.sort((a, b) => {
      const ratingDiff = b.rating - a.rating;
      if (ratingDiff !== 0) return ratingDiff;
      return sortReviewsRecientes(a.review, b.review);
    });
    return next;
  }
  if (sort === "nombre") {
    next.sort((a, b) =>
      a.operatorName.localeCompare(b.operatorName, "es", {
        sensitivity: "base",
      }),
    );
    return next;
  }
  next.sort((a, b) => sortReviewsRecientes(a.review, b.review));
  return next;
}

export function resolveReviewCard(
  review: Review,
): ResolvedReviewCard | null {
  const casino = getCasinoById(review.casinoId);
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
    href: `/reviews/${review.slug}`,
    operatorName: casino.name,
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
    readingMinutes: estimateReviewReadingMinutes(review.body),
    publicStatus,
  };
}

export function resolveAllReviewCards(): ResolvedReviewCard[] {
  return filterReviewsForSurface(getReviews(), "reviews")
    .slice()
    .sort(sortReviewsRecientes)
    .flatMap((review) => {
      const resolved = resolveReviewCard(review);
      return resolved ? [resolved] : [];
    });
}

export function isHighlightedCasinoId(casinoId: string): boolean {
  return HIGHLIGHT_SET.has(casinoId);
}

function resolveHighlightCards(
  ids: readonly string[],
): ResolvedReviewCard[] {
  const byCasino = new Map(
    resolveAllReviewCards().map((card) => [card.casino.id, card]),
  );
  return ids.flatMap((id) => {
    const card = byCasino.get(id);
    return card ? [card] : [];
  });
}

export function resolveHighlightedReviews(): {
  primary: ResolvedReviewCard[];
  secondary: ResolvedReviewCard[];
} {
  return {
    primary: resolveHighlightCards(REVIEW_HUB_HIGHLIGHT_PRIMARY_IDS),
    secondary: resolveHighlightCards(REVIEW_HUB_HIGHLIGHT_SECONDARY_IDS),
  };
}

export function resolveLatestReviewUpdates(
  limit = 4,
): ResolvedReviewCard[] {
  return resolveAllReviewCards()
    .slice()
    .sort(
      (a, b) =>
        Date.parse(b.displayDateIso) - Date.parse(a.displayDateIso),
    )
    .slice(0, limit);
}

export function countReviewsByCategory(
  category: Exclude<ReviewHubCategory, "todas">,
): number {
  return resolveAllReviewCards().filter((card) =>
    card.categories.includes(category),
  ).length;
}

export type ReviewDirectoryResult = {
  /** Visible cards in the main grid. */
  items: ResolvedReviewCard[];
  /** Remaining cards inside progressive `<details>` (default view only). */
  collapsedItems: ResolvedReviewCard[];
  totalMatched: number;
  visibleCount: number;
  collapsedCount: number;
  isDefaultView: boolean;
  category: ReviewHubCategory;
  sort: ReviewHubSort;
  query: string;
};

export function resolveReviewDirectory(options: {
  category?: ReviewHubCategory;
  sort?: ReviewHubSort;
  query?: string;
  defaultVisible?: number;
}): ReviewDirectoryResult {
  const category = options.category ?? "todas";
  const sort = options.sort ?? "recientes";
  const query = (options.query ?? "").trim().toLowerCase();
  const defaultVisible = options.defaultVisible ?? REVIEW_HUB_DEFAULT_VISIBLE;

  let items = resolveAllReviewCards();

  if (category !== "todas") {
    items = items.filter((card) => card.categories.includes(category));
  }

  if (query) {
    items = items.filter((card) => {
      const haystack = [
        card.operatorName,
        card.review.title,
        card.review.verdict,
        card.review.slug,
        ...card.categoryBadges.map((b) => b.label),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });
  }

  items = sortResolved(items, sort);

  const isDefaultView =
    category === "todas" && query.length === 0 && sort === "recientes";

  if (isDefaultView) {
    const remaining = items.filter(
      (card) => !isHighlightedCasinoId(card.casino.id),
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

export function buildReviewsQueryHref(params: {
  q?: string;
  categoria?: ReviewHubCategory;
  orden?: ReviewHubSort;
  hash?: string;
}): string {
  const search = new URLSearchParams();
  if (params.q?.trim()) search.set("q", params.q.trim());
  if (params.categoria && params.categoria !== "todas") {
    search.set("categoria", params.categoria);
  }
  if (params.orden && params.orden !== "recientes") {
    search.set("orden", params.orden);
  }

  const qs = search.toString();
  const hash = params.hash ?? "";
  return qs ? `/reviews?${qs}${hash}` : `/reviews${hash || ""}`;
}
