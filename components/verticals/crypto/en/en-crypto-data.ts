import { getGlobalReviewForCasino } from "@/lib/content/global";

/** English “Read review” only when a real /en/reviews route exists. */
export function getEnCryptoReviewHref(casinoId: string): string | undefined {
  const review = getGlobalReviewForCasino(casinoId);
  return review?.slug ? `/en/reviews/${review.slug}` : undefined;
}
