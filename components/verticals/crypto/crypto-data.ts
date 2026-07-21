import { getCasinoById, getReviewForCasino } from "@/lib/content";

/** Editorial rating from the published review; omit when missing. */
export function getCryptoEditorialRating(casinoId: string): number | undefined {
  const rating = getReviewForCasino(casinoId)?.rating;
  return typeof rating === "number" && Number.isFinite(rating) ? rating : undefined;
}

/** Up to four crypto payment names from the central casino record. */
export function getCryptoPaymentNames(casinoId: string, limit = 4): string[] {
  const payments = getCasinoById(casinoId)?.payments ?? [];
  return payments
    .filter((p) => p.kind === "crypto")
    .map((p) => p.name)
    .slice(0, limit);
}
