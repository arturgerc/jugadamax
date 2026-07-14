import { SPORTSBETIO_WORLD_CUP_TOURNAMENT_END } from "@/lib/affiliate/constants";

/** Server-side check — avoids client Date.now hydration mismatch. */
export function isSportsbetWorldCupCampaignActive(referenceDate?: Date): boolean {
  const now = referenceDate ?? new Date();
  const end = new Date(SPORTSBETIO_WORLD_CUP_TOURNAMENT_END);
  return now.getTime() < end.getTime();
}
