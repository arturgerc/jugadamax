import type { Casino } from "@/types/content";
import type { Market, OperatorLink } from "@/types/operator-links";
import {
  BCGAME_GLOBAL_AFFILIATE_URL,
  BCGAME_MX_OFFICIAL_URL,
  FIVEHUNDRED_CASINO_GLOBAL_AFFILIATE_URL,
  GAMDOM_GLOBAL_AFFILIATE_URL,
  MELLSTROY_GLOBAL_AFFILIATE_URL,
  ROOBET_GLOBAL_AFFILIATE_URL,
  STAKE_GLOBAL_AFFILIATE_URL,
  STAKE_MX_OFFICIAL_URL,
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
  return {
    market: "mx",
    url: BCGAME_MX_OFFICIAL_URL,
    label: "Ver sitio oficial",
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
};

/** Returns a market-specific operator link when configured; undefined otherwise. */
export function resolveOperatorLink(operatorId: string, market: Market): OperatorLink | undefined {
  return CONFIGURED_LINKS[operatorId]?.[market];
}

/**
 * Outbound link for a casino card or review CTA.
 *
 * Prefers configured market links for Stake/BC.Game. Falls back to `affiliateUrl`
 * on Mexico pages only for other operators — never overwrites existing values.
 */
export function getCasinoOutboundLink(casino: Casino, market: Market): OperatorLink | undefined {
  const configured = resolveOperatorLink(casino.id, market);
  if (configured) return configured;

  if (market === "mx" && casino.affiliateUrl) {
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
