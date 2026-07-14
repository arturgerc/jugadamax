/**
 * Unified operator public-surface policy (P11-2).
 *
 * Single source of truth for which operators may appear on which surfaces,
 * whether outbound CTAs/affiliate links are allowed, and editorial status.
 * Do not add operators to money pages without updating this registry first.
 */

import { BETFURY_PROMO_CODE } from "@/lib/affiliate/constants";

export type OperatorPublicStatus =
  | "active-affiliate"
  | "active-referral"
  | "official-trust"
  | "pending-partner"
  | "editorial-hold"
  | "rejected";

export type OperatorSurface =
  | "homepage"
  | "casinos-crypto"
  | "casinos-fiat"
  | "bonos"
  | "apuestas"
  | "reviews"
  | "sitemap"
  | "english-global";

export type OperatorPolicy = {
  id: string;
  name: string;
  publicStatus: OperatorPublicStatus;
  allowedSurfaces: readonly OperatorSurface[];
  ctaAllowed: boolean;
  affiliateAllowed: boolean;
  notes?: string;
};

const OPERATOR_POLICIES: Record<string, OperatorPolicy> = {
  "500-casino": {
    id: "500-casino",
    name: "500 Casino",
    publicStatus: "active-affiliate",
    allowedSurfaces: ["homepage", "casinos-crypto", "bonos", "reviews", "sitemap", "english-global"],
    ctaAllowed: true,
    affiliateAllowed: true,
  },
  gamdom: {
    id: "gamdom",
    name: "Gamdom",
    publicStatus: "active-affiliate",
    allowedSurfaces: ["homepage", "casinos-crypto", "bonos", "reviews", "sitemap", "english-global"],
    ctaAllowed: true,
    affiliateAllowed: true,
  },
  betfury: {
    id: "betfury",
    name: "BetFury",
    publicStatus: "active-referral",
    allowedSurfaces: ["homepage", "casinos-crypto", "bonos", "reviews", "sitemap"],
    ctaAllowed: true,
    affiliateAllowed: true,
    notes: `Active referral link; promo code ${BETFURY_PROMO_CODE} confirmed for JugadaMax campaigns.`,
  },
  roobet: {
    id: "roobet",
    name: "Roobet",
    publicStatus: "active-affiliate",
    allowedSurfaces: ["casinos-crypto", "bonos", "reviews", "sitemap", "english-global"],
    ctaAllowed: true,
    affiliateAllowed: true,
    notes:
      "Approved affiliate links active. Mexico casino CTAs use the direct casino landing; global content uses the general brand landing. Roobet is classified as an international crypto casino with sportsbook additional. Promotions, availability, KYC, payments and withdrawals depend on jurisdiction and official terms.",
  },
  rainbet: {
    id: "rainbet",
    name: "Rainbet",
    publicStatus: "active-referral",
    allowedSurfaces: ["casinos-crypto", "reviews", "sitemap"],
    ctaAllowed: true,
    affiliateAllowed: true,
    notes: "Lower priority vs primary Mexico crypto partners.",
  },
  mellstroy: {
    id: "mellstroy",
    name: "Mellstroy",
    publicStatus: "active-affiliate",
    allowedSurfaces: ["casinos-crypto", "bonos", "reviews", "sitemap", "english-global"],
    ctaAllowed: true,
    affiliateAllowed: true,
    notes: "Lower/grey priority; not a primary homepage offer.",
  },
  stake: {
    id: "stake",
    name: "Stake",
    publicStatus: "official-trust",
    allowedSurfaces: ["homepage", "casinos-crypto", "reviews", "sitemap", "english-global"],
    ctaAllowed: true,
    affiliateAllowed: false,
    notes: "Mexico pages use official stake.mx logic via operator-links, not seed affiliate fallback.",
  },
  bcgame: {
    id: "bcgame",
    name: "BC.Game",
    publicStatus: "official-trust",
    allowedSurfaces: ["casinos-crypto", "reviews", "sitemap", "english-global"],
    ctaAllowed: true,
    affiliateAllowed: false,
    notes:
      "BC.Game MX uses official non-affiliate domain (bcgame.mx) on Spanish/MX pages. English/global may use global affiliate ref.",
  },
  betsson: {
    id: "betsson",
    name: "Betsson",
    publicStatus: "active-affiliate",
    allowedSurfaces: ["homepage", "casinos-fiat", "bonos", "apuestas", "reviews", "sitemap"],
    ctaAllowed: true,
    affiliateAllowed: true,
    notes: "Outbound links resolved via BETSSON_MX_* constants on vertical pages.",
  },
  "1xbet": {
    id: "1xbet",
    name: "1xBet",
    publicStatus: "active-affiliate",
    allowedSurfaces: ["casinos-fiat", "bonos", "apuestas", "reviews", "sitemap"],
    ctaAllowed: true,
    affiliateAllowed: true,
    notes: "Mixed operator (casino + sportsbook); promo code 1x_5259707 confirmed for Mexico campaigns.",
  },
  melbet: {
    id: "melbet",
    name: "Melbet",
    publicStatus: "active-affiliate",
    allowedSurfaces: ["casinos-fiat", "bonos", "apuestas", "reviews", "sitemap"],
    ctaAllowed: true,
    affiliateAllowed: true,
    notes: "Mixed operator (casino + sportsbook); promo code ml_2958499 confirmed for Mexico campaigns.",
  },
  awintura: {
    id: "awintura",
    name: "Awintura",
    publicStatus: "active-affiliate",
    allowedSurfaces: ["casinos-fiat", "bonos", "apuestas", "reviews", "sitemap"],
    ctaAllowed: true,
    affiliateAllowed: true,
    notes:
      "Active Mexico/LATAM affiliate campaign. International mixed operator: fiat/multi-currency casino with sportsbook additional and selected crypto payment methods. Card CTAs use the information landing; only the final review CTA uses direct registration.",
  },
  mostbet: {
    id: "mostbet",
    name: "Mostbet",
    publicStatus: "active-affiliate",
    allowedSurfaces: ["casinos-fiat", "apuestas", "bonos", "reviews", "sitemap"],
    ctaAllowed: true,
    affiliateAllowed: true,
    notes:
      "Active Spanish/MX affiliate campaign. Mixed fiat/multi-currency casino and sportsbook. Main web CTAs use the player landing; the app link is limited to the dedicated review app section. Not classified in casinos-crypto and not presented as locally licensed in Mexico.",
  },
  codere: {
    id: "codere",
    name: "Codere",
    publicStatus: "pending-partner",
    allowedSurfaces: ["casinos-fiat", "apuestas", "reviews", "sitemap"],
    ctaAllowed: false,
    affiliateAllowed: false,
    notes: "Codere pending partner — no external CTA; internal review only.",
  },
  caliente: {
    id: "caliente",
    name: "Caliente",
    publicStatus: "pending-partner",
    allowedSurfaces: ["casinos-fiat", "reviews", "sitemap"],
    ctaAllowed: false,
    affiliateAllowed: false,
    notes: "Caliente pending partner — no external CTA; editorial/internal only.",
  },
  cryptocasino: {
    id: "cryptocasino",
    name: "CryptoCasino.CC",
    publicStatus: "editorial-hold",
    allowedSurfaces: ["reviews", "sitemap"],
    ctaAllowed: false,
    affiliateAllowed: false,
    notes: "Editorial hold — hidden from homepage and money pages.",
  },
  ethcasino: {
    id: "ethcasino",
    name: "ETH Casino",
    publicStatus: "editorial-hold",
    allowedSurfaces: ["reviews", "sitemap"],
    ctaAllowed: false,
    affiliateAllowed: false,
    notes: "Editorial hold — hidden from homepage and money pages.",
  },
  ltccasino: {
    id: "ltccasino",
    name: "LTC Casino",
    publicStatus: "editorial-hold",
    allowedSurfaces: ["reviews", "sitemap"],
    ctaAllowed: false,
    affiliateAllowed: false,
    notes: "Editorial hold — hidden from homepage and money pages.",
  },
  bitcasino: {
    id: "bitcasino",
    name: "Bitcasino.io",
    publicStatus: "rejected",
    allowedSurfaces: [],
    ctaAllowed: false,
    affiliateAllowed: false,
    notes: "Bitcasino rejected — do not render.",
  },
  xonbet: {
    id: "xonbet",
    name: "XON.BET",
    publicStatus: "active-affiliate",
    allowedSurfaces: ["english-global", "reviews", "sitemap"],
    ctaAllowed: true,
    affiliateAllowed: true,
    notes:
      "English/global fiat casino only. Partner-reported GEOs exclude New Zealand targeting. Casino product only on JugadaMax — no sportsbook surfaces.",
  },
  slotoro: {
    id: "slotoro",
    name: "Slotoro Casino",
    publicStatus: "active-affiliate",
    allowedSurfaces: ["english-global", "reviews", "sitemap"],
    ctaAllowed: true,
    affiliateAllowed: true,
    notes:
      "Active global affiliate campaign. Fiat / multi-currency casino with sportsbook as an additional product. Current official restricted-country list applies. Main and bonus landings are configured separately.",
  },
  vodkabet: {
    id: "vodkabet",
    name: "Vodka.bet",
    publicStatus: "active-affiliate",
    allowedSurfaces: ["casinos-crypto", "bonos", "reviews", "sitemap"],
    ctaAllowed: true,
    affiliateAllowed: true,
    notes:
      "Active JugadaMax affiliate campaign. International crypto-oriented casino with sportsbook as an additional product. Promo code JUGADAMAX. Licence, payments, KYC, withdrawals and jurisdiction availability require verification.",
  },
  sportsbetio: {
    id: "sportsbetio",
    name: "Sportsbet.io",
    publicStatus: "active-affiliate",
    allowedSurfaces: ["casinos-crypto", "apuestas", "bonos", "reviews", "sitemap"],
    ctaAllowed: true,
    affiliateAllowed: true,
    notes:
      "Active Spanish/MX affiliate campaign. Crypto-first sportsbook with substantial crypto casino coverage. General registration, sportsbook and temporary tournament links are mapped separately. Not presented as locally licensed in Mexico.",
  },
};

export function getOperatorPolicy(operatorId: string): OperatorPolicy | undefined {
  return OPERATOR_POLICIES[operatorId];
}

export function getOperatorPublicStatus(operatorId: string): OperatorPublicStatus | undefined {
  return OPERATOR_POLICIES[operatorId]?.publicStatus;
}

export function isOperatorAllowedOnSurface(operatorId: string, surface: OperatorSurface): boolean {
  const policy = OPERATOR_POLICIES[operatorId];
  if (!policy || policy.publicStatus === "rejected") return false;
  return policy.allowedSurfaces.includes(surface);
}

export function isOperatorCtaAllowed(operatorId: string): boolean {
  return OPERATOR_POLICIES[operatorId]?.ctaAllowed ?? false;
}

export function isOperatorAffiliateAllowed(operatorId: string): boolean {
  return OPERATOR_POLICIES[operatorId]?.affiliateAllowed ?? false;
}

/** Filter seed/inline casino records for a public surface. Unknown IDs are excluded. */
export function filterCasinosForSurface<T extends { id: string }>(
  casinos: T[],
  surface: OperatorSurface,
): T[] {
  return casinos.filter((casino) => isOperatorAllowedOnSurface(casino.id, surface));
}

/** Filter review records for a public surface (e.g. reviews index, sitemap). */
export function filterReviewsForSurface<T extends { casinoId: string }>(
  reviews: T[],
  surface: OperatorSurface,
): T[] {
  return reviews.filter((review) => isOperatorAllowedOnSurface(review.casinoId, surface));
}
