import { getBonusesForCasino, getCasinoById, getReviewForCasino } from "@/lib/content";
import type { FiatTopEntry } from "@/components/verticals/fiat/fiat-page-config";

export function getFiatEditorialRating(casinoId: string): number | undefined {
  const rating = getReviewForCasino(casinoId)?.rating;
  return typeof rating === "number" && Number.isFinite(rating) ? rating : undefined;
}

export function getFiatReviewHref(casinoId: string): string | undefined {
  const slug = getReviewForCasino(casinoId)?.slug;
  return slug ? `/reviews/${slug}` : undefined;
}

/**
 * Prefer curated payment names that exist on the casino record (fiat first).
 * Falls back to remaining fiat methods. Never fabricates names.
 */
export function getFiatPaymentNames(
  casinoId: string,
  priority: readonly string[] = [],
  limit = 4,
): string[] {
  const payments = getCasinoById(casinoId)?.payments ?? [];
  const fiat = payments.filter((p) => p.kind === "fiat").map((p) => p.name);
  if (fiat.length === 0) return [];

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
 * Active offer title from central bonuses, with curated fallback.
 * Melbet sportsbook packages are not treated as casino guarantees —
 * use fallback when the only active bonus is sportsbook-type.
 */
export function getFiatOfferTitle(entry: FiatTopEntry): string {
  const active = getBonusesForCasino(entry.operatorId).find((b) => b.active);
  if (!active?.title) return entry.offerFallback;

  if (entry.operatorId === "melbet" && active.type === "welcome") {
    const lower = active.title.toLowerCase();
    if (lower.includes("deportivo") || lower.includes("sports")) {
      return entry.offerFallback;
    }
  }

  // Prefer a concrete published offer over the generic Betsson placeholder.
  if (
    entry.operatorId === "betsson" &&
    active.title.toLowerCase().includes("consulta la promoción")
  ) {
    return entry.offerFallback;
  }

  return active.title;
}
