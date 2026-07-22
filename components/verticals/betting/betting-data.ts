import {
  BETTING_ACTIVE_SIX,
  type BettingOperatorEntry,
} from "@/components/verticals/betting/betting-page-config";
import {
  isOperatorAllowedOnSurface,
  isOperatorCtaAllowed,
} from "@/content/operators/status";
import {
  getBonusesForCasino,
  getCasinoById,
  getReviewForCasino,
} from "@/lib/content";
import type { Bonus, Casino, ImageRef } from "@/types/content";

export type ResolvedBettingCard = BettingOperatorEntry & {
  casino: Casino;
  logo?: ImageRef;
  rating?: number;
  reviewHref: string;
  paymentNames: string[];
  offerTitle: string;
  offerProductLabel?: string;
};

export function getBettingEditorialRating(casinoId: string): number | undefined {
  const rating = getReviewForCasino(casinoId)?.rating;
  return typeof rating === "number" && Number.isFinite(rating) ? rating : undefined;
}

export function getBettingReviewHref(casinoId: string): string | undefined {
  const slug = getReviewForCasino(casinoId)?.slug;
  return slug ? `/reviews/${slug}` : undefined;
}

/**
 * Prefer curated payment names that exist on the casino record.
 * Never fabricates methods.
 */
export function getBettingPaymentNames(
  casinoId: string,
  priority: readonly string[] = [],
  limit = 4,
): string[] {
  const payments = getCasinoById(casinoId)?.payments ?? [];
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

function isSportsOrientedBonus(bonus: Bonus): boolean {
  if (bonus.product === "sportsbook") return true;
  if (bonus.product === "mixed") return true;
  const haystack = `${bonus.title} ${bonus.productLabel ?? ""} ${bonus.offerLabel ?? ""}`.toLowerCase();
  return (
    haystack.includes("deport") ||
    haystack.includes("sport") ||
    haystack.includes("apuesta") ||
    haystack.includes("freebet")
  );
}

/**
 * Prefer sportsbook/mixed central bonuses for the betting page.
 * Casino-only packages fall back to curated sports-oriented copy.
 */
export function getBettingOfferTitle(entry: BettingOperatorEntry): {
  title: string;
  productLabel?: string;
} {
  const bonuses = getBonusesForCasino(entry.operatorId).filter((b) => b.active);
  const sportsFirst =
    bonuses.find((b) => b.product === "sportsbook") ??
    bonuses.find((b) => isSportsOrientedBonus(b));

  if (sportsFirst?.title) {
    return {
      title: sportsFirst.title,
      productLabel: sportsFirst.productLabel ?? entry.offerProductNote,
    };
  }

  return {
    title: entry.offerFallback,
    productLabel: entry.offerProductNote,
  };
}

export function uniqueBettingPayments(operatorIds: readonly string[]): string[] {
  const names = new Set<string>();
  for (const id of operatorIds) {
    for (const p of getCasinoById(id)?.payments ?? []) {
      names.add(p.name);
    }
  }
  return [...names];
}

/**
 * Resolve curated betting cards only when policy + review + casino exist.
 * Fail gracefully (omit) if a configured operator is missing or blocked.
 */
export function resolveBettingCards(
  entries: readonly BettingOperatorEntry[] = BETTING_ACTIVE_SIX,
): ResolvedBettingCard[] {
  return entries.flatMap((entry) => {
    if (!isOperatorAllowedOnSurface(entry.operatorId, "apuestas")) return [];
    if (!isOperatorCtaAllowed(entry.operatorId)) return [];

    const casino = getCasinoById(entry.operatorId);
    const reviewHref = getBettingReviewHref(entry.operatorId);
    if (!casino || !reviewHref) return [];

    const offer = getBettingOfferTitle(entry);

    return [
      {
        ...entry,
        casino,
        logo: casino.logo,
        rating: getBettingEditorialRating(entry.operatorId),
        reviewHref,
        paymentNames: getBettingPaymentNames(entry.operatorId, entry.paymentPriority),
        offerTitle: offer.title,
        offerProductLabel: offer.productLabel,
      },
    ];
  });
}

export type BettingBonusRow = {
  operatorId: string;
  operatorName: string;
  title: string;
  productLabel: string;
  terms?: string;
  reviewHref: string;
};

/** Sports/mixed bonuses for active commercial operators — no casino-only packages. */
export function resolveBettingBonusRows(): BettingBonusRow[] {
  return BETTING_ACTIVE_SIX.flatMap((entry) => {
    if (!isOperatorAllowedOnSurface(entry.operatorId, "apuestas")) return [];
    const casino = getCasinoById(entry.operatorId);
    const reviewHref = getBettingReviewHref(entry.operatorId);
    if (!casino || !reviewHref) return [];

    const bonus =
      getBonusesForCasino(entry.operatorId)
        .filter((b) => b.active)
        .find((b) => b.product === "sportsbook" || isSportsOrientedBonus(b)) ?? null;

    if (!bonus) return [];

    return [
      {
        operatorId: entry.operatorId,
        operatorName: casino.name,
        title: bonus.title,
        productLabel:
          bonus.productLabel ??
          (bonus.product === "sportsbook"
            ? "Apuestas"
            : bonus.product === "mixed"
              ? "Casino + apuestas"
              : "Promoción"),
        terms: bonus.terms,
        reviewHref,
      },
    ];
  });
}
