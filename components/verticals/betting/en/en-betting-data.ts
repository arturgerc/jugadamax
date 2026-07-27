import {
  EN_BETTING_ACTIVE_SIX,
  type EnBettingOperatorEntry,
} from "@/components/verticals/betting/en/en-betting-page-config";
import {
  isOperatorAllowedOnSurface,
  isOperatorCtaAllowed,
} from "@/content/operators/status";
import { getCasinoById } from "@/lib/content";
import {
  getGlobalCasinoById,
  getGlobalReviewForCasino,
} from "@/lib/content/global";
import type { Casino, ImageRef } from "@/types/content";

export type ResolvedEnBettingCard = EnBettingOperatorEntry & {
  casino: Casino;
  logo?: ImageRef;
  rating?: number;
  reviewHref: string;
  paymentNames: string[];
  offerTitle: string;
  offerProductLabel?: string;
};

/** Prefer global casino records; fall back to MX/canonical for logos/payments. */
export function resolveEnBettingCasino(operatorId: string): Casino | undefined {
  const globalCasino = getGlobalCasinoById(operatorId);
  const mxCasino = getCasinoById(operatorId);
  if (!globalCasino && !mxCasino) return undefined;
  if (!globalCasino) return mxCasino;
  if (!mxCasino) return globalCasino;
  return {
    ...globalCasino,
    logo: globalCasino.logo ?? mxCasino.logo,
    payments:
      globalCasino.payments && globalCasino.payments.length > 0
        ? globalCasino.payments
        : mxCasino.payments,
    licensing: globalCasino.licensing ?? mxCasino.licensing,
  };
}

export function getEnBettingEditorialRating(casinoId: string): number | undefined {
  const rating = getGlobalReviewForCasino(casinoId)?.rating;
  return typeof rating === "number" && Number.isFinite(rating) ? rating : undefined;
}

/** English “Read review” only when a real /en/reviews route exists. */
export function getEnBettingReviewHref(casinoId: string): string | undefined {
  const slug = getGlobalReviewForCasino(casinoId)?.slug;
  return slug ? `/en/reviews/${slug}` : undefined;
}

/**
 * Prefer curated payment names that exist on the resolved casino record.
 * Never fabricates methods.
 */
export function getEnBettingPaymentNames(
  casinoId: string,
  priority: readonly string[] = [],
  limit = 4,
): string[] {
  const payments = resolveEnBettingCasino(casinoId)?.payments ?? [];
  const names = payments.map((p) => p.name);
  if (names.length === 0) return [];

  const selected: string[] = [];
  for (const name of priority) {
    if (names.includes(name) && !selected.includes(name)) selected.push(name);
    if (selected.length >= limit) return selected;
  }
  for (const name of names) {
    if (!selected.includes(name)) selected.push(name);
    if (selected.length >= limit) break;
  }
  return selected;
}

/**
 * Prefer curated English sports-oriented fallbacks on /en/betting.
 * Central Spanish bonus titles are not used as primary English card copy.
 */
export function getEnBettingOfferTitle(entry: EnBettingOperatorEntry): {
  title: string;
  productLabel?: string;
} {
  return {
    title: entry.offerFallback,
    productLabel: entry.offerProductNote,
  };
}

export function uniqueEnBettingPayments(operatorIds: readonly string[]): string[] {
  const names = new Set<string>();
  for (const id of operatorIds) {
    for (const p of resolveEnBettingCasino(id)?.payments ?? []) {
      names.add(p.name);
    }
  }
  return [...names];
}

/**
 * Resolve curated EN betting cards only when policy + EN review + casino exist.
 * Fail gracefully (omit) if a configured operator is missing or blocked.
 */
export function resolveEnBettingCards(
  entries: readonly EnBettingOperatorEntry[] = EN_BETTING_ACTIVE_SIX,
): ResolvedEnBettingCard[] {
  return entries.flatMap((entry) => {
    if (!isOperatorAllowedOnSurface(entry.operatorId, "english-global")) return [];
    if (!isOperatorCtaAllowed(entry.operatorId)) return [];

    const casino = resolveEnBettingCasino(entry.operatorId);
    const reviewHref = getEnBettingReviewHref(entry.operatorId);
    if (!casino || !reviewHref) return [];

    const offer = getEnBettingOfferTitle(entry);

    return [
      {
        ...entry,
        casino,
        logo: casino.logo,
        rating: getEnBettingEditorialRating(entry.operatorId),
        reviewHref,
        paymentNames: getEnBettingPaymentNames(entry.operatorId, entry.paymentPriority),
        offerTitle: offer.title,
        offerProductLabel: offer.productLabel,
      },
    ];
  });
}

export type EnBettingBonusRow = {
  operatorId: string;
  operatorName: string;
  title: string;
  productLabel: string;
  terms?: string;
  reviewHref: string;
};

/** Exact four-operator sports-bonus section parity with Spanish /apuestas. */
const EN_BETTING_BONUS_SECTION_ORDER = [
  "sportsbetio",
  "melbet",
  "awintura",
  "mostbet",
] as const;

const EN_BETTING_BONUS_TERMS: Record<(typeof EN_BETTING_BONUS_SECTION_ORDER)[number], string> = {
  sportsbetio:
    "Minimum deposit: 10 USDT. Published wagering: 15x for Sports and 40x for Casino. Activation, markets, eligible games, expiry, KYC, payments and availability depend on the account, location and current terms.",
  melbet:
    "Package for the first four eligible deposits: 100% up to MX$7,000, 50% up to MX$3,500, 25% up to MX$3,500 and 25% up to MX$3,500. Minimum deposit: MX$100. Published wagering: 5x. Minimum odds, validity, verification, eligible markets and operator restrictions apply.",
  awintura:
    "Currency, amounts, eligible deposits, wagering, minimum odds, games, limits, expiry and availability depend on the active campaign, account, location and official terms.",
  mostbet:
    "The supplied landing may allow the user to choose Casino or Sports. Maximum amount, currency, minimum deposit, wagering, free spins, games, markets, minimum odds, expiry, KYC and availability depend on the campaign, account, location and current terms.",
};

const EN_BETTING_BONUS_PRODUCT_LABEL: Record<
  (typeof EN_BETTING_BONUS_SECTION_ORDER)[number],
  string
> = {
  sportsbetio: "Sports or Casino",
  melbet: "Sports",
  awintura: "Casino + sports",
  mostbet: "Casino or Sports",
};

/**
 * Sports-bonus education rows for /en/betting — fixed four-operator set with English terms.
 * Betsson Mexico and 1xBet remain on cards/comparison but are excluded here.
 */
export function resolveEnBettingBonusRows(): EnBettingBonusRow[] {
  return EN_BETTING_BONUS_SECTION_ORDER.flatMap((operatorId) => {
    if (!isOperatorAllowedOnSurface(operatorId, "english-global")) return [];

    const entry = EN_BETTING_ACTIVE_SIX.find((e) => e.operatorId === operatorId);
    const reviewHref = getEnBettingReviewHref(operatorId);
    if (!entry || !reviewHref) return [];

    return [
      {
        operatorId,
        operatorName: entry.name,
        title: entry.offerFallback,
        productLabel: EN_BETTING_BONUS_PRODUCT_LABEL[operatorId],
        terms: EN_BETTING_BONUS_TERMS[operatorId],
        reviewHref,
      },
    ];
  });
}
