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

/** Only `es-MX` in V1; the field exists for Spanish-LATAM readiness (FR-021/FR-027). */
export type Locale = "es-MX";

export const LOCALES: readonly Locale[] = ["es-MX"] as const;

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
}

export interface AuthorLink {
  label: string;
  url: string;
}

export interface Author {
  id: string;
  slug: string;
  name: string;
  role?: string;
  credentials?: string;
  bio?: string;
  avatar?: ImageRef;
  links?: AuthorLink[];
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
