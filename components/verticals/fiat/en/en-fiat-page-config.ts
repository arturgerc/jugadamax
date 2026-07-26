/**
 * English /en/casinos-fiat page configuration.
 * Structural parity with Spanish /casinos-fiat; global-market copy and CTAs.
 * Outbound URLs resolve via resolveOperatorLink(..., "global") — do not hardcode affiliate URLs.
 *
 * Approved TOP order (do not reorder without owner approval):
 * 1. Betsson Mexico (featured)
 * 2. 1xBet
 * 3. XON.BET
 * 4. Slotoro Casino
 * 5. Mostbet
 * 6. Melbet
 */

import {
  MELBET_PROMO_CODE,
  MOSTBET_PROMO_CODE,
  ONE_XBET_PROMO_CODE,
} from "@/lib/affiliate/constants";
import { resolveOperatorLink } from "@/lib/affiliate/operator-links";

export type EnFiatCardTheme =
  | "betsson"
  | "xonbet"
  | "slotoro"
  | "onexbet"
  | "mostbet"
  | "melbet";

export type EnFiatTopEntry = {
  operatorId: string;
  name: string;
  badge: string;
  purpose: string;
  summary: string;
  /** Preferred fiat payment names when present in central data. */
  paymentPriority: readonly string[];
  ctaLabel: string;
  promoCode?: string;
  offerFallback: string;
  theme: EnFiatCardTheme;
  featured?: boolean;
  position: number;
};

/** Main TOP-6 fiat recommendations — shared by ranking and comparison. */
export const EN_FIAT_TOP_SIX: readonly EnFiatTopEntry[] = [
  {
    operatorId: "betsson",
    name: "Betsson Mexico",
    badge: "TOP FIAT · MEXICO",
    purpose: "Local payments and casino",
    summary:
      "Mexico-facing fiat casino and sportsbook with OXXO, SPEI, cards and traditional methods where available. Not presented as a universal multi-country guarantee.",
    paymentPriority: ["OXXO", "SPEI", "Visa", "Mastercard"],
    ctaLabel: "Visit Betsson Mexico",
    offerFallback: "Check the current Betsson Mexico welcome offer",
    theme: "betsson",
    featured: true,
    position: 1,
  },
  {
    operatorId: "1xbet",
    name: "1xBet",
    badge: "CASINO + SPORTSBOOK",
    purpose: "Mixed international account",
    summary:
      "Online casino, slots, live casino and sportsbook in one account. Payments and promotions vary by jurisdiction and live operator terms.",
    paymentPriority: ["Visa", "Mastercard", "Skrill", "Neteller"],
    ctaLabel: "Visit 1xBet",
    promoCode: ONE_XBET_PROMO_CODE,
    offerFallback: "Casino welcome package subject to GEO and live terms",
    theme: "onexbet",
    position: 2,
  },
  {
    operatorId: "xonbet",
    name: "XON.BET",
    badge: "MULTI-CURRENCY CASINO",
    purpose: "Casino, cards & e-wallets",
    summary:
      "International multi-currency casino with slots, live games, tournaments and loyalty features. Cards, e-wallets and selected crypto where enabled — availability varies by GEO.",
    paymentPriority: ["Visa", "Mastercard", "Interac", "Skrill"],
    ctaLabel: "Visit XON.BET",
    offerFallback: "Four-deposit welcome package subject to GEO and live terms",
    theme: "xonbet",
    position: 3,
  },
  {
    operatorId: "slotoro",
    name: "Slotoro Casino",
    badge: "FIAT CASINO + SPORTS",
    purpose: "Casino with sportsbook add-on",
    summary:
      "Fiat-led multi-currency casino with live games, tournaments and loyalty features. Sportsbook is an additional product. Methods and offers depend on country and account.",
    paymentPriority: ["Visa", "Mastercard", "Interac", "Skrill"],
    ctaLabel: "Visit Slotoro",
    offerFallback: "Welcome package with free spins subject to live terms",
    theme: "slotoro",
    position: 4,
  },
  {
    operatorId: "mostbet",
    name: "Mostbet",
    badge: "CASINO + SPORTS + APP",
    purpose: "Casino, betting and app",
    summary:
      "Sportsbook, casino, live casino, poker and esports in a broad international stack. Web and app access depend on distribution and jurisdiction.",
    paymentPriority: ["Visa", "Mastercard", "Skrill", "Bitcoin"],
    ctaLabel: "Visit Mostbet",
    promoCode: MOSTBET_PROMO_CODE,
    offerFallback: "125% + free spins subject to campaign and live terms",
    theme: "mostbet",
    position: 5,
  },
  {
    operatorId: "melbet",
    name: "Melbet",
    badge: "CASINO + SPORTSBOOK",
    purpose: "Casino, live and fast games",
    summary:
      "Sportsbook plus online casino, slots, live casino and fast games in one account. Promotions and payments depend on GEO and live terms.",
    paymentPriority: ["Visa", "Mastercard", "Skrill", "Neteller"],
    ctaLabel: "Visit Melbet",
    promoCode: MELBET_PROMO_CODE,
    offerFallback: "Casino promotions subject to live terms",
    theme: "melbet",
    position: 6,
  },
] as const;

export const EN_FIAT_LOCAL_REFERENCE_IDS = ["caliente", "codere"] as const;

export const EN_FIAT_RELATED_LINKS = [
  { label: "Crypto casinos", href: "/en/casinos-crypto" },
  { label: "No-KYC casinos", href: "/en/casinos-no-kyc" },
  { label: "Sports betting", href: "/en/betting" },
  { label: "Guides", href: "/en/guides" },
  { label: "Reviews", href: "/en/reviews" },
] as const;

export function resolveEnFiatCtaHref(operatorId: string): string | undefined {
  return resolveOperatorLink(operatorId, "global")?.url;
}
