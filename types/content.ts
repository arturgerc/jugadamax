/**
 * JugadaMax V1 content model types.
 *
 * Storage-agnostic entity definitions for the file-based content collections.
 * See specs/001-v1-launch/data-model.md for field-level rules.
 */

export type Vertical = "crypto-casino" | "fiat-casino" | "sportsbook";

export const VERTICALS: readonly Vertical[] = [
  "crypto-casino",
  "fiat-casino",
  "sportsbook",
] as const;

/** `es-MX` for Mexico-first Spanish; `en` for English/global editorial pages. */
export type Locale = "es-MX" | "en";

export const LOCALES: readonly Locale[] = ["es-MX", "en"] as const;

export type BonusType =
  | "welcome"
  | "deposit-match"
  | "no-deposit"
  | "free-bet"
  | "cashback"
  | "reload"
  | "other";

export const BONUS_TYPES: readonly BonusType[] = [
  "welcome",
  "deposit-match",
  "no-deposit",
  "free-bet",
  "cashback",
  "reload",
  "other",
] as const;

/** Product surface for bonus directory and comparison. */
export type BonusProduct = "casino" | "sportsbook" | "mixed" | "rewards";

export const BONUS_PRODUCTS: readonly BonusProduct[] = [
  "casino",
  "sportsbook",
  "mixed",
  "rewards",
] as const;

export type BonusMarket = "mx" | "latam" | "global";

export const BONUS_MARKETS: readonly BonusMarket[] = ["mx", "latam", "global"] as const;

/**
 * Editorial freshness status for a bonus record.
 * Do not treat as operator verification of payouts or licences.
 */
export type BonusStatus =
  | "active-verified"
  | "active-variable"
  | "expiring"
  | "expired"
  | "paused"
  | "pending-verification";

export const BONUS_STATUSES: readonly BonusStatus[] = [
  "active-verified",
  "active-variable",
  "expiring",
  "expired",
  "paused",
  "pending-verification",
] as const;

/** Grouping used by the Spanish /bonos directory. */
export type BonusDirectoryGroup = "casino-mx" | "crypto-rewards" | "sports-mixed";

export const BONUS_DIRECTORY_GROUPS: readonly BonusDirectoryGroup[] = [
  "casino-mx",
  "crypto-rewards",
  "sports-mixed",
] as const;

export type PaymentKind = "crypto" | "fiat";

export const PAYMENT_KINDS: readonly PaymentKind[] = ["crypto", "fiat"] as const;

export type ArticleType = "guide" | "news";

export const ARTICLE_TYPES: readonly ArticleType[] = ["guide", "news"] as const;

export interface ImageRef {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface PaymentMethod {
  name: string;
  kind: PaymentKind;
  icon?: ImageRef;
}

export interface TrustInfo {
  licenseName?: string;
  licenseRef?: string;
  notes?: string;
}

export interface Casino {
  id: string;
  slug: string;
  name: string;
  logo?: ImageRef;
  /** Non-empty; controls which ranking pages list the operator (FR-026). */
  verticals: Vertical[];
  /** Editorial rating (0–5). Only rendered when an authored Review exists; never aggregated. */
  rating?: number;
  /** Per-vertical rank position; source of ranking order. Keys must be a subset of `verticals`. */
  rankByVertical: Partial<Record<Vertical, number>>;
  payments?: PaymentMethod[];
  licensing?: TrustInfo;
  bonusIds?: string[];
  /** Outbound affiliate destination; when absent, CTAs degrade gracefully. */
  affiliateUrl?: string;
  establishedYear?: number;
  summary?: string;
  locale: Locale;
}

export interface Bonus {
  id: string;
  casinoId: string;
  title: string;
  type: BonusType;
  terms?: string;
  wagering?: string;
  /** ISO date; omit if evergreen. No fabricated urgency derived from this field. */
  validUntil?: string;
  active: boolean;
  /** Optional product classification for directory / comparison surfaces. */
  product?: BonusProduct;
  market?: BonusMarket;
  status?: BonusStatus;
  /**
   * Published offer line for UI when richer than `title`.
   * Must not invent amounts — only copy already published by the operator/editorial.
   */
  offerLabel?: string;
  /** Minimum deposit when published by the operator; omit if unknown. */
  minDeposit?: string;
  /** Short Spanish product label for comparison tables. */
  productLabel?: string;
  /** Directory group on /bonos; omit if not listed there. */
  directoryGroup?: BonusDirectoryGroup;
  /** Featured position on /bonos (1–3); omit if not featured. */
  featuredPosition?: number;
}

export interface AuthorLink {
  label: string;
  url: string;
}

export type AuthorKind = "person" | "organization";

export const AUTHOR_KINDS: readonly AuthorKind[] = ["person", "organization"] as const;

export interface Author {
  id: string;
  slug: string;
  name: string;
  role?: string;
  credentials?: string;
  bio?: string;
  avatar?: ImageRef;
  links?: AuthorLink[];
  /** person vs editorial organization desk */
  kind?: AuthorKind;
  /** Short specialty labels for author profile pages */
  specialties?: string[];
}

export interface ReviewRelatedLink {
  label: string;
  url: string;
  kind?: "website" | "blog" | "streaming" | "community";
  subtitle?: string;
}

export interface Review {
  id: string;
  casinoId: string;
  authorId: string;
  slug: string;
  title: string;
  verdict: string;
  /** Editorial rating (0–5); author-attributed, never presented as aggregated. */
  rating: number;
  pros: string[];
  cons: string[];
  body: string;
  paymentsSummary?: string;
  trustSummary?: string;
  /** ISO date. */
  publishedAt: string;
  /** ISO date. */
  updatedAt?: string;
  /** Optional locale for LATAM localization readiness (FR-021/FR-027). */
  locale?: Locale;
  /** Optional neutral external resources; never presented as ownership proof. */
  relatedLinks?: ReviewRelatedLink[];
}

export interface Article {
  id: string;
  slug: string;
  type: ArticleType;
  title: string;
  summary: string;
  body: string;
  authorId: string;
  coverImage?: ImageRef;
  tags?: string[];
  /** ISO date. */
  publishedAt: string;
  /** ISO date. */
  updatedAt?: string;
  locale: Locale;
}
