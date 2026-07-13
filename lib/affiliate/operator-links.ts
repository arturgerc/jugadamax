import type { Casino } from "@/types/content";
import type { Market, OperatorLink } from "@/types/operator-links";
import {
  isOperatorAffiliateAllowed,
  isOperatorCtaAllowed,
} from "@/content/operators/status";
import {
  BCGAME_GLOBAL_AFFILIATE_URL,
  BCGAME_MX_OFFICIAL_URL,
  FIVEHUNDRED_CASINO_GLOBAL_AFFILIATE_URL,
  GAMDOM_GLOBAL_AFFILIATE_URL,
  MELLSTROY_GLOBAL_AFFILIATE_URL,
  RAINBET_REFERRAL_URL,
  ROOBET_GLOBAL_AFFILIATE_URL,
  STAKE_GLOBAL_AFFILIATE_URL,
  STAKE_MX_OFFICIAL_URL,
  AWINTURA_CARD_AFFILIATE_URL,
  SLOTORO_MAIN_AFFILIATE_URL,
  VODKABET_AFFILIATE_URL,
  XONBET_GLOBAL_AFFILIATE_URL,
} from "@/lib/affiliate/constants";

function stakeMxLink(): OperatorLink {
  return {
    market: "mx",
    url: STAKE_MX_OFFICIAL_URL,
    label: "Ver sitio oficial en México",
    isAffiliate: false,
    rel: "nofollow noopener noreferrer",
  };
}

function stakeGlobalLink(): OperatorLink | undefined {
  if (!STAKE_GLOBAL_AFFILIATE_URL) return undefined;
  return {
    market: "global",
    url: STAKE_GLOBAL_AFFILIATE_URL,
    label: "Visit Stake",
    isAffiliate: true,
    rel: "sponsored nofollow noopener noreferrer",
    geoWarning:
      "Not available in restricted jurisdictions. Check official terms before registering.",
  };
}

function bcgameMxLink(): OperatorLink | undefined {
  if (!BCGAME_MX_OFFICIAL_URL) return undefined;
  // BC.Game MX uses official non-affiliate domain (bcgame.mx).
  return {
    market: "mx",
    url: BCGAME_MX_OFFICIAL_URL,
    label: "Ver sitio oficial BC.Game MX",
    isAffiliate: false,
    rel: "nofollow noopener noreferrer",
  };
}

function bcgameGlobalLink(): OperatorLink | undefined {
  if (!BCGAME_GLOBAL_AFFILIATE_URL) return undefined;
  return {
    market: "global",
    url: BCGAME_GLOBAL_AFFILIATE_URL,
    label: "Visit BC.Game",
    isAffiliate: true,
    rel: "sponsored nofollow noopener noreferrer",
    geoWarning: "Availability depends on your jurisdiction and official terms.",
  };
}

function fiveHundredCasinoGlobalLink(): OperatorLink | undefined {
  if (!FIVEHUNDRED_CASINO_GLOBAL_AFFILIATE_URL) return undefined;
  return {
    market: "global",
    url: FIVEHUNDRED_CASINO_GLOBAL_AFFILIATE_URL,
    label: "Visit 500 Casino",
    isAffiliate: true,
    rel: "sponsored nofollow noopener noreferrer",
    geoWarning: "Availability depends on your jurisdiction and official operator terms.",
  };
}

function roobetGlobalLink(): OperatorLink | undefined {
  if (!ROOBET_GLOBAL_AFFILIATE_URL) return undefined;
  return {
    market: "global",
    url: ROOBET_GLOBAL_AFFILIATE_URL,
    label: "Visit Roobet",
    isAffiliate: true,
    rel: "sponsored nofollow noopener noreferrer",
    geoWarning: "Availability depends on your jurisdiction and official operator terms.",
  };
}

function gamdomGlobalLink(): OperatorLink | undefined {
  if (!GAMDOM_GLOBAL_AFFILIATE_URL) return undefined;
  return {
    market: "global",
    url: GAMDOM_GLOBAL_AFFILIATE_URL,
    label: "Visit Gamdom",
    isAffiliate: true,
    rel: "sponsored nofollow noopener noreferrer",
    geoWarning: "Availability depends on your jurisdiction and official operator terms.",
  };
}

function mellstroyGlobalLink(): OperatorLink | undefined {
  if (!MELLSTROY_GLOBAL_AFFILIATE_URL) return undefined;
  return {
    market: "global",
    url: MELLSTROY_GLOBAL_AFFILIATE_URL,
    label: "Visit Mellstroy",
    isAffiliate: true,
    rel: "sponsored nofollow noopener noreferrer",
    geoWarning: "Availability depends on your jurisdiction and official operator terms.",
  };
}

function rainbetGlobalLink(): OperatorLink | undefined {
  if (!RAINBET_REFERRAL_URL) return undefined;
  return {
    market: "global",
    url: RAINBET_REFERRAL_URL,
    label: "Visit Rainbet",
    isAffiliate: true,
    rel: "sponsored nofollow noopener noreferrer",
    geoWarning: "Availability depends on your jurisdiction and official operator terms.",
  };
}

const XONBET_CANADA_GEO_WARNING =
  "Partner availability includes Canada, but online gambling rules are provincial. JugadaMax does not present XON.BET as an Ontario-registered operator. Check applicable provincial rules and the operator's current terms before registering.";

const VODKABET_MX_GEO_WARNING =
  "Vodka.bet se presenta como operador internacional. La disponibilidad, promociones, pagos y acceso dependen de tu jurisdicción y de los términos oficiales. JugadaMax no afirma disponibilidad legal o local para México.";

const AWINTURA_MX_GEO_WARNING =
  "Operador internacional. La disponibilidad, pagos, promociones y sportsbook dependen de tu jurisdicción y de los términos oficiales.";

function awinturaMxLink(): OperatorLink | undefined {
  if (!AWINTURA_CARD_AFFILIATE_URL) return undefined;
  return {
    market: "mx",
    url: AWINTURA_CARD_AFFILIATE_URL,
    label: "Visitar Awintura",
    isAffiliate: true,
    rel: "sponsored nofollow noopener noreferrer",
    geoWarning: AWINTURA_MX_GEO_WARNING,
  };
}

const SLOTORO_GLOBAL_GEO_WARNING =
  "Slotoro availability depends on the player's jurisdiction and the operator's current restricted-country list. Several major markets are restricted. Check local law and live Slotoro terms before registering. Do not use a VPN or false location information.";

function slotoroGlobalLink(): OperatorLink | undefined {
  if (!SLOTORO_MAIN_AFFILIATE_URL) return undefined;
  return {
    market: "global",
    url: SLOTORO_MAIN_AFFILIATE_URL,
    label: "Visit Slotoro",
    isAffiliate: true,
    rel: "sponsored nofollow noopener noreferrer",
    geoWarning: SLOTORO_GLOBAL_GEO_WARNING,
  };
}

function vodkabetMxLink(): OperatorLink | undefined {
  if (!VODKABET_AFFILIATE_URL) return undefined;
  return {
    market: "mx",
    url: VODKABET_AFFILIATE_URL,
    label: "Ver oferta Vodka.bet",
    isAffiliate: true,
    rel: "sponsored nofollow noopener noreferrer",
    geoWarning: VODKABET_MX_GEO_WARNING,
  };
}

function xonbetGlobalLink(): OperatorLink | undefined {
  if (!XONBET_GLOBAL_AFFILIATE_URL) return undefined;
  return {
    market: "global",
    url: XONBET_GLOBAL_AFFILIATE_URL,
    label: "Visit XON.BET",
    isAffiliate: true,
    rel: "sponsored nofollow noopener noreferrer",
    geoWarning: `${XONBET_CANADA_GEO_WARNING} Partner-reported availability is not a legal guarantee — local law and operator terms apply.`,
  };
}

const CONFIGURED_LINKS: Partial<Record<string, Partial<Record<Market, OperatorLink | undefined>>>> = {
  stake: {
    mx: stakeMxLink(),
    global: stakeGlobalLink(),
  },
  bcgame: {
    mx: bcgameMxLink(),
    global: bcgameGlobalLink(),
  },
  "500-casino": {
    global: fiveHundredCasinoGlobalLink(),
  },
  roobet: {
    global: roobetGlobalLink(),
  },
  gamdom: {
    global: gamdomGlobalLink(),
  },
  mellstroy: {
    global: mellstroyGlobalLink(),
  },
  rainbet: {
    global: rainbetGlobalLink(),
  },
  xonbet: {
    global: xonbetGlobalLink(),
  },
  slotoro: {
    global: slotoroGlobalLink(),
  },
  vodkabet: {
    mx: vodkabetMxLink(),
  },
  awintura: {
    mx: awinturaMxLink(),
  },
};

/** Returns a market-specific operator link when configured; undefined otherwise. */
export function resolveOperatorLink(operatorId: string, market: Market): OperatorLink | undefined {
  return CONFIGURED_LINKS[operatorId]?.[market];
}

/**
 * Outbound link for a casino card or review CTA.
 *
 * Configured market links (Stake, BC.Game, etc.) win first. Seed `affiliateUrl`
 * fallback on Mexico pages only when operator policy allows CTA + affiliate.
 */
export function getCasinoOutboundLink(casino: Casino, market: Market): OperatorLink | undefined {
  if (!isOperatorCtaAllowed(casino.id)) return undefined;

  const configured = resolveOperatorLink(casino.id, market);
  if (configured) return configured;

  if (
    market === "mx" &&
    casino.affiliateUrl &&
    isOperatorAffiliateAllowed(casino.id)
  ) {
    return {
      market: "mx",
      url: casino.affiliateUrl,
      label: "Visitar sitio",
      isAffiliate: true,
      rel: "sponsored nofollow noopener noreferrer",
    };
  }

  return undefined;
}

/** Operator IDs with missing affiliate URLs for the current deployment. */
export function getMissingAffiliateUrls(): string[] {
  const missing: string[] = [];
  if (!STAKE_GLOBAL_AFFILIATE_URL) missing.push("STAKE_GLOBAL_AFFILIATE_URL");
  if (!BCGAME_MX_OFFICIAL_URL) missing.push("BCGAME_MX_OFFICIAL_URL");
  if (!BCGAME_GLOBAL_AFFILIATE_URL) missing.push("BCGAME_GLOBAL_AFFILIATE_URL");
  return missing;
}
