import {

  EN_BONUS_COMPARISON_ORDER,

  EN_BONUS_DIRECTORY_ORDER,

  EN_BONUS_DIRECTORY_SECTIONS,

  EN_BONUS_ENTRIES,

  EN_BONUS_FEATURED,

  type EnBonusDirectoryGroup,

  type EnBonusEntry,

} from "@/components/verticals/bonuses/en/en-bonus-page-config";

import { getCasinoById } from "@/lib/content";

import { getGlobalCasinoById, getGlobalReviewForCasino } from "@/lib/content/global";

import type { ImageRef } from "@/types/content";



export type ResolvedEnBonusRow = {

  entry: EnBonusEntry;

  casinoId: string;

  operatorName: string;

  logo?: ImageRef;

  reviewHref?: string;

  offerText: string;

  productLabel: string;

  minDeposit: string;

  wagering: string;

  validity: string;

  statusLabel: string;

  terms: string;

  promoCode?: string;

  ctaLabel: string;

  ctaHref: string;

  badge?: string;

};



function resolveRow(entry: EnBonusEntry): ResolvedEnBonusRow | null {

  const casino = getGlobalCasinoById(entry.operatorId) ?? getCasinoById(entry.operatorId);

  if (!casino) return null;



  const enReview = getGlobalReviewForCasino(entry.operatorId);



  return {

    entry,

    casinoId: casino.id,

    operatorName: entry.operatorName || casino.name,

    logo: casino.logo,

    reviewHref: enReview?.slug ? `/en/reviews/${enReview.slug}` : undefined,

    offerText: entry.offerText,

    productLabel: entry.productLabel,

    minDeposit: entry.minDeposit,

    wagering: entry.wagering,

    validity: entry.validity,

    statusLabel: entry.statusLabel,

    terms: entry.terms,

    promoCode: entry.promoCode,

    ctaLabel: entry.ctaLabel,

    ctaHref: entry.ctaHref,

    badge: entry.badge,

  };

}



export function resolveEnFeaturedBonuses(): ResolvedEnBonusRow[] {

  return EN_BONUS_FEATURED.flatMap((entry) => {

    const row = resolveRow(entry);

    return row ? [row] : [];

  });

}



export function resolveEnDirectoryGroup(

  group: EnBonusDirectoryGroup,

): ResolvedEnBonusRow[] {

  const featuredIds = new Set(EN_BONUS_FEATURED.map((f) => f.id));

  const order = EN_BONUS_DIRECTORY_ORDER[group];

  const byId = new Map(EN_BONUS_ENTRIES.map((e) => [e.id, e]));



  return order.flatMap((id) => {

    const entry = byId.get(id);

    if (!entry || entry.directoryGroup !== group || featuredIds.has(entry.id)) {

      return [];

    }

    const row = resolveRow(entry);

    return row ? [row] : [];

  });

}



export function resolveEnComparisonRows(): ResolvedEnBonusRow[] {

  const byId = new Map(EN_BONUS_ENTRIES.map((e) => [e.id, e]));



  return EN_BONUS_COMPARISON_ORDER.flatMap((id) => {

    const entry = byId.get(id);

    if (!entry) return [];

    const row = resolveRow(entry);

    return row ? [row] : [];

  });

}



export function enBonusDirectorySections() {

  return EN_BONUS_DIRECTORY_SECTIONS;

}
