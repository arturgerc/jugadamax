/**
 * English /en/casinos-crypto page configuration.
 * Mirrors Spanish crypto page structure with global-market copy and CTAs.
 * Outbound URLs resolve via resolveOperatorLink(..., "global") — do not hardcode affiliate URLs here.
 */

import type { CryptoCardTheme, CryptoPromoTheme } from "@/components/verticals/crypto/crypto-page-config";
import {
  BETFURY_PROMO_CODE,
  MELLSTROY_PROMO_CODE,
  VODKABET_PROMO_CODE,
} from "@/lib/affiliate/constants";
import { resolveOperatorLink } from "@/lib/affiliate/operator-links";

export type EnCryptoTopEntry = {
  operatorId: string;
  name: string;
  secondaryName?: string;
  badge: string;
  purpose: string;
  summary: string;
  chips: readonly string[];
  kycLabel: string;
  ctaLabel: string;
  theme: CryptoCardTheme;
  featured?: boolean;
  position: number;
};

export type EnCryptoPromoEntry = {
  operatorId: string;
  offerTitle: string;
  promoCode: string;
  chips: readonly [string, string, string];
  termsLine: string;
  ctaLabel: string;
  theme: CryptoPromoTheme;
  position: number;
};

export type EnCryptoSecondaryEntry = {
  operatorId: string;
  label: string;
  badge: string;
  ctaLabel: string;
  /** When true, prefer affiliate-style CTA styling; resolved from link metadata at render. */
  preferAffiliateStyle: boolean;
  position: number;
};

/** Main TOP-6 — same operator order as Spanish /casinos-crypto. */
export const EN_CRYPTO_TOP_SIX: readonly EnCryptoTopEntry[] = [
  {
    operatorId: "cryptocasino",
    name: "Anonymous Casino",
    secondaryName: "CryptoCasino.CC",
    badge: "TOP CRYPTO · NO-KYC FOCUS",
    purpose: "Privacy & crypto",
    summary:
      "Email/password registration with a public no-KYC policy, slots, crypto games and live casino. Availability and checks still depend on jurisdiction and live terms.",
    chips: ["No-KYC focus", "BTC / ETH", "Crypto games"],
    kycLabel: "No-KYC per operator policy",
    ctaLabel: "Visit Anonymous Casino",
    theme: "anonymous",
    featured: true,
    position: 1,
  },
  {
    operatorId: "bitcasino",
    name: "Bitcasino.io",
    badge: "CRYPTO CASINO",
    purpose: "Casino, Originals & live",
    summary:
      "Slots, Originals, jackpots, promotions and live casino for crypto users. Terms and payments vary by account and jurisdiction.",
    chips: ["BTC / USDT", "Originals", "Live Casino"],
    kycLabel: "Verification per terms",
    ctaLabel: "Visit Bitcasino.io",
    theme: "bitcasino",
    position: 2,
  },
  {
    operatorId: "ltccasino",
    name: "LTC Casino",
    badge: "LITECOIN · NO-KYC FOCUS",
    purpose: "Privacy & Litecoin",
    summary:
      "Litecoin-oriented crypto casino with email registration and a public no-KYC policy. Networks and checks still depend on jurisdiction.",
    chips: ["No-KYC focus", "LTC", "Crypto-only"],
    kycLabel: "No-KYC per operator policy",
    ctaLabel: "Visit LTC Casino",
    theme: "ltccasino",
    position: 3,
  },
  {
    operatorId: "ethcasino",
    name: "ETH Casino",
    badge: "ETHEREUM · NO-KYC FOCUS",
    purpose: "Ethereum & privacy",
    summary:
      "Ethereum-first product with email registration, slots, crypto games and a public no-KYC policy. Not absolute anonymity.",
    chips: ["No-KYC focus", "ETH", "Live Casino"],
    kycLabel: "No-KYC per operator policy",
    ctaLabel: "Visit ETH Casino",
    theme: "ethcasino",
    position: 4,
  },
  {
    operatorId: "sportsbetio",
    name: "Sportsbet.io",
    badge: "CRYPTO CASINO + SPORTS",
    purpose: "Casino & sportsbook",
    summary:
      "Crypto sportsbook with live betting, slots, Originals and live casino. Markets and KYC depend on official terms.",
    chips: ["USDT", "Sports", "Casino"],
    kycLabel: "Verification per terms",
    ctaLabel: "Visit Sportsbet.io",
    theme: "sportsbetio",
    position: 5,
  },
  {
    operatorId: "roobet",
    name: "Roobet",
    badge: "CRYPTO + SPORTSBOOK",
    purpose: "Casino, promos & sportsbook",
    summary:
      "Slots, live casino, Originals, rotating promotions and sports betting in one account. Availability varies by jurisdiction.",
    chips: ["Crypto", "Casino", "Sportsbook"],
    kycLabel: "Verification per terms",
    ctaLabel: "Visit Roobet",
    theme: "roobet",
    position: 6,
  },
] as const;

export const EN_CRYPTO_PROMOTIONS: readonly EnCryptoPromoEntry[] = [
  {
    operatorId: "betfury",
    offerTitle: "Up to 590% + Free Spins subject to official terms",
    promoCode: BETFURY_PROMO_CODE,
    chips: ["Bonus Cabinet", "Free Spins", "Cashback"],
    termsLine:
      "Percentages, free spins, cashback, wagering and eligibility depend on official operator terms.",
    ctaLabel: "View BetFury offer",
    theme: "betfury",
    position: 1,
  },
  {
    operatorId: "vodkabet",
    offerTitle: "125% + up to 300 FS depending on campaign",
    promoCode: VODKABET_PROMO_CODE,
    chips: ["125%", "300 FS", "Crypto"],
    termsLine:
      "Amount, free spins, minimum deposit, wagering, games and eligibility depend on the live campaign and terms.",
    ctaLabel: "View Vodka.bet offer",
    theme: "vodkabet",
    position: 2,
  },
  {
    operatorId: "mellstroy",
    offerTitle: "Up to 660% + 400 FS depending on live campaign",
    promoCode: MELLSTROY_PROMO_CODE,
    chips: ["Crypto", "400 FS", "Fortune Wheel"],
    termsLine:
      "Bonuses, free spins, payments, KYC, games, availability and wagering depend on the live campaign and terms.",
    ctaLabel: "View Mellstroy offer",
    theme: "mellstroy",
    position: 3,
  },
] as const;

/** Larger left panel — operators with configured global tracking destinations. */
export const EN_CRYPTO_INTERNATIONAL_ALTERNATIVES: readonly EnCryptoSecondaryEntry[] = [
  {
    operatorId: "stake",
    label: "Crypto casino and sportsbook",
    badge: "Configured tracking",
    ctaLabel: "Visit Stake",
    preferAffiliateStyle: true,
    position: 1,
  },
  {
    operatorId: "bcgame",
    label: "Crypto casino, Originals and sportsbook",
    badge: "Configured tracking",
    ctaLabel: "Visit BC.Game",
    preferAffiliateStyle: true,
    position: 2,
  },
  {
    operatorId: "rainbet",
    label: "Crypto casino, rewards and sportsbook",
    badge: "International coverage",
    ctaLabel: "Visit",
    preferAffiliateStyle: true,
    position: 3,
  },
] as const;

/** Smaller right panel — additional international operators. */
export const EN_CRYPTO_EDITORIAL_REFERENCES: readonly EnCryptoSecondaryEntry[] = [
  {
    operatorId: "500-casino",
    label: "Crypto casino, slots and sportsbook",
    badge: "International coverage",
    ctaLabel: "Visit",
    preferAffiliateStyle: false,
    position: 1,
  },
  {
    operatorId: "gamdom",
    label: "Crypto casino, Originals and sportsbook",
    badge: "International coverage",
    ctaLabel: "Visit",
    preferAffiliateStyle: false,
    position: 2,
  },
] as const;

export const EN_CRYPTO_NO_KYC_CROSSLINK_IDS = [
  "cryptocasino",
  "ethcasino",
  "ltccasino",
] as const;

export const EN_CRYPTO_GUIDES = [
  {
    href: "/en/guides/best-crypto-casinos",
    title: "Best crypto casinos — checklist",
    description: "Jurisdiction, licensing, payments, bonus terms and responsible gambling.",
  },
] as const;

export const EN_CRYPTO_RELATED_LINKS = [
  { label: "Crypto guide", href: "/en/guides/best-crypto-casinos" },
  { label: "No-KYC focus", href: "/en#anonymous-casino" },
  { label: "Active promotions", href: "/en#active-promotions" },
  { label: "Fiat casinos", href: "/en/casinos-fiat" },
  { label: "Sports betting", href: "/en/betting" },
  { label: "Reviews", href: "/en/reviews" },
] as const;

/** Resolve global outbound CTA; undefined when not configured. */
export function resolveEnCryptoCtaHref(operatorId: string): string | undefined {
  return resolveOperatorLink(operatorId, "global")?.url;
}

export function resolveEnCryptoLinkIsAffiliate(operatorId: string): boolean {
  return Boolean(resolveOperatorLink(operatorId, "global")?.isAffiliate);
}
