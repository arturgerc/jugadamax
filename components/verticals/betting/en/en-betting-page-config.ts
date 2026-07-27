import {
  AWINTURA_CARD_AFFILIATE_URL,
  BETSSON_MX_APUESTAS_URL,
  MELBET_AFFILIATE_URL,
  MELBET_PROMO_CODE,
  MOSTBET_PLAYERS_AFFILIATE_URL,
  MOSTBET_PROMO_CODE,
  ONE_XBET_AFFILIATE_URL,
  ONE_XBET_PROMO_CODE,
  SPORTSBETIO_BETTING_AFFILIATE_URL,
} from "@/lib/affiliate/constants";
import type {
  BettingCardTheme,
  BettingOperatorEntry,
  BettingTier,
} from "@/components/verticals/betting/betting-page-config";

export type EnBettingOperatorEntry = BettingOperatorEntry;

export type { BettingCardTheme, BettingTier };

/**
 * Main commercial selection for /en/betting — 3 primary + 3 secondary.
 * Same operator set as Spanish /apuestas; English copy and global review routes.
 * Codere is local-reference only. Caliente is excluded.
 */
export const EN_BETTING_ACTIVE_SIX: readonly EnBettingOperatorEntry[] = [
  {
    operatorId: "betsson",
    name: "Betsson Mexico",
    badge: "Mexico partner",
    purpose: "Betting with local payments",
    summary:
      "Sportsbook and mixed products with OXXO, SPEI and cards where the operator enables them for Mexico-facing accounts. Confirm availability and live terms for your jurisdiction.",
    paymentPriority: ["OXXO", "SPEI", "Visa", "Mastercard"],
    ctaLabel: "Visit Betsson Mexico",
    ctaHref: BETSSON_MX_APUESTAS_URL,
    offerFallback: "Sports promotions subject to current Betsson Mexico terms",
    offerProductNote: "Confirm whether the promotion applies to sports or casino.",
    theme: "betsson",
    featured: true,
    position: 1,
    tier: "primary",
  },
  {
    operatorId: "1xbet",
    name: "1xBet",
    badge: "International sportsbook",
    purpose: "Broad markets and odds",
    summary:
      "International mixed operator with sportsbook and casino. Confirm availability, odds and verification requirements for your location.",
    paymentPriority: ["MXN", "OXXO", "SPEI", "Visa", "Bitcoin"],
    ctaLabel: "Visit 1xBet",
    ctaHref: ONE_XBET_AFFILIATE_URL,
    promoCode: ONE_XBET_PROMO_CODE,
    offerFallback:
      "Promotions subject to live terms; confirm whether they apply to sports or casino",
    offerProductNote: "May include casino and sports offers.",
    theme: "onexbet",
    position: 2,
    tier: "primary",
  },
  {
    operatorId: "sportsbetio",
    name: "Sportsbet.io",
    badge: "Crypto sportsbook",
    purpose: "Betting with crypto",
    summary:
      "International crypto sportsbook with an additional casino. Does not imply a local Mexican licence — confirm GEO and terms before registering.",
    paymentPriority: ["Bitcoin", "Ethereum", "USDT", "USDC"],
    ctaLabel: "Visit Sportsbet.io",
    ctaHref: SPORTSBETIO_BETTING_AFFILIATE_URL,
    offerFallback: "Champions welcome offer subject to terms (Sports / Casino)",
    offerProductNote: "Wagering and product depend on the path you choose.",
    theme: "sportsbet",
    position: 3,
    tier: "primary",
  },
  {
    operatorId: "melbet",
    name: "Melbet",
    badge: "Sports bonus focus",
    purpose: "Sports betting package",
    summary:
      "Sportsbook and casino in one account. Useful for comparing published sports bonuses, minimum odds and rollover rules.",
    paymentPriority: [],
    ctaLabel: "Visit Melbet",
    ctaHref: MELBET_AFFILIATE_URL,
    promoCode: MELBET_PROMO_CODE,
    offerFallback: "Sports bonus subject to live terms",
    theme: "melbet",
    position: 4,
    tier: "secondary",
  },
  {
    operatorId: "awintura",
    name: "Awintura",
    badge: "International mixed",
    purpose: "Sportsbook and casino",
    summary:
      "Casino, live and sportsbook with fiat methods and some crypto options depending on market and terms.",
    paymentPriority: ["Visa", "Mastercard", "Bitcoin", "Tether"],
    ctaLabel: "Visit Awintura",
    ctaHref: AWINTURA_CARD_AFFILIATE_URL,
    offerFallback: "Up to $60,000 + 250 FS + 200% freebets depending on campaign and GEO",
    offerProductNote: "May combine casino offers and sports freebets.",
    theme: "awintura",
    position: 5,
    tier: "secondary",
  },
  {
    operatorId: "mostbet",
    name: "Mostbet",
    badge: "Casino + Sports",
    purpose: "Mixed platform",
    summary:
      "International operator with sportsbook and casino. Landing pages may offer Casino or Sports routes depending on campaign.",
    paymentPriority: ["Visa", "Mastercard", "OXXO", "SPEI", "Bitcoin", "USDT"],
    ctaLabel: "Visit Mostbet",
    ctaHref: MOSTBET_PLAYERS_AFFILIATE_URL,
    promoCode: MOSTBET_PROMO_CODE,
    offerFallback: "125% + 250 FS depending on campaign (Casino or Sports)",
    offerProductNote: "Confirm whether you choose the sports or casino route.",
    theme: "mostbet",
    position: 6,
    tier: "secondary",
  },
] as const;

export const EN_BETTING_PRIMARY = EN_BETTING_ACTIVE_SIX.filter((e) => e.tier === "primary");
export const EN_BETTING_SECONDARY = EN_BETTING_ACTIVE_SIX.filter((e) => e.tier === "secondary");

/** Local editorial reference only — no affiliate CTA. */
export const EN_BETTING_LOCAL_REFERENCE_ID = "codere" as const;

export const EN_BETTING_QUICK_LINKS = [
  { label: "Main selection", href: "#main-selection" },
  { label: "More operators", href: "#additional-operators" },
  { label: "Comparison", href: "#betting-comparison" },
  { label: "Sports bonuses", href: "#sports-bonuses" },
  { label: "Payments & KYC", href: "#betting-payments" },
  { label: "Methodology", href: "#how-we-review-betting" },
] as const;

/** Mobile-only subset — keeps the first card higher in the viewport. */
export const EN_BETTING_QUICK_LINKS_MOBILE = [
  { label: "Main selection", href: "#main-selection" },
  { label: "Comparison", href: "#betting-comparison" },
  { label: "Sports bonuses", href: "#sports-bonuses" },
  { label: "Payments & KYC", href: "#betting-payments" },
] as const;
