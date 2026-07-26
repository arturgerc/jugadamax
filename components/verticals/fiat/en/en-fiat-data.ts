import type { Casino } from "@/types/content";
import type { EnFiatTopEntry } from "@/components/verticals/fiat/en/en-fiat-page-config";
import { getCasinoById, getBonusesForCasino } from "@/lib/content";
import {
  getGlobalCasinoById,
  getGlobalReviewForCasino,
} from "@/lib/content/global";

/** Prefer global casino records; fall back to MX/canonical for logos/payments. */
export function resolveEnFiatCasino(operatorId: string): Casino | undefined {
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
  };
}

export function getEnFiatEditorialRating(casinoId: string): number | undefined {
  const rating = getGlobalReviewForCasino(casinoId)?.rating;
  return typeof rating === "number" && Number.isFinite(rating) ? rating : undefined;
}

/** English “Read review” only when a real /en/reviews route exists. */
export function getEnFiatReviewHref(casinoId: string): string | undefined {
  const slug = getGlobalReviewForCasino(casinoId)?.slug;
  return slug ? `/en/reviews/${slug}` : undefined;
}

/**
 * Prefer curated payment names that exist on the resolved casino record (fiat first).
 * Falls back to remaining fiat methods. Never fabricates names.
 */
export function getEnFiatPaymentNames(
  casinoId: string,
  priority: readonly string[] = [],
  limit = 4,
): string[] {
  const payments = resolveEnFiatCasino(casinoId)?.payments ?? [];
  const fiat = payments.filter((p) => p.kind === "fiat").map((p) => p.name);
  if (fiat.length === 0) {
    return payments.map((p) => p.name).slice(0, limit);
  }

  const selected: string[] = [];
  for (const name of priority) {
    if (fiat.includes(name) && !selected.includes(name)) selected.push(name);
    if (selected.length >= limit) return selected;
  }
  for (const name of fiat) {
    if (!selected.includes(name)) selected.push(name);
    if (selected.length >= limit) break;
  }
  return selected;
}

/**
 * Prefer a concrete active bonus title when useful; otherwise curated English fallback.
 * Melbet sportsbook packages are not treated as casino guarantees.
 */
export function getEnFiatOfferTitle(entry: EnFiatTopEntry): string {
  const active = getBonusesForCasino(entry.operatorId).find((b) => b.active);
  if (!active?.title) return entry.offerFallback;

  if (entry.operatorId === "melbet" && active.type === "welcome") {
    const lower = active.title.toLowerCase();
    if (lower.includes("deportivo") || lower.includes("sports")) {
      return entry.offerFallback;
    }
  }

  if (
    entry.operatorId === "betsson" &&
    active.title.toLowerCase().includes("consulta la promoción")
  ) {
    return entry.offerFallback;
  }

  return active.title;
}
