/**
 * Market-aware operator outbound link model.
 *
 * Separates Mexico informational links from global affiliate links so Spanish/MX
 * pages never send users to global Stake.com or unapproved BC.Game destinations.
 */

export type Market = "mx" | "global";

export type OperatorLinkRel = "sponsored nofollow noopener noreferrer" | "nofollow noopener noreferrer";

export interface OperatorLink {
  market: Market;
  url: string;
  label: string;
  isAffiliate: boolean;
  rel: OperatorLinkRel;
  /** Jurisdiction or availability note shown near the CTA when needed. */
  geoWarning?: string;
}
