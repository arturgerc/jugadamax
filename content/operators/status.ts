/**
 * Unified operator public-surface policy (P11-2).
 *
 * Single source of truth for which operators may appear on which surfaces,
 * whether outbound CTAs/affiliate links are allowed, and editorial status.
 * Do not add operators to money pages without updating this registry first.
 */

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
    notes:
      "Active referral link; promo code d9lksw0db confirmed for JugadaMax campaigns.",
  },
  roobet: {
    id: "roobet",
    name: "Roobet",
    publicStatus: "active-referral",
    allowedSurfaces: ["casinos-crypto", "bonos", "reviews", "sitemap", "english-global"],
    ctaAllowed: true,
    affiliateAllowed: true,
    notes: "Referral active; full affiliate terms still pending.",
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
    notes: "Lower/grey/social priority; not a primary homepage offer.",
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
    notes: "Mixed operator (casino + sportsbook); not crypto-first.",
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
