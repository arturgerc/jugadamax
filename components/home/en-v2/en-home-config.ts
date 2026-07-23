/**
 * English Homepage V2 configuration.
 * Curated allowlist only — do not expand without explicit approval.
 */

import type { CasinoCardTheme } from "@/components/home/HomepageCasinoCard";
import { resolveOperatorLink } from "@/lib/affiliate/operator-links";

export const EN_HOME_ALLOWLIST = [
  "cryptocasino",
  "bitcasino",
  "sportsbetio",
  "betsson",
] as const;

export type EnHomeOperatorId = (typeof EN_HOME_ALLOWLIST)[number];

export type EnHomeRankingEntry = {
  operatorId: EnHomeOperatorId;
  name: string;
  secondaryName?: string;
  badge: string;
  purpose: string;
  summary: string;
  chips: readonly string[];
  ctaLabel: string;
  theme: CasinoCardTheme;
  featured?: boolean;
  position: number;
};

/** Exact curated English homepage recommended operators (order matters). */
export const EN_HOME_RANKING: readonly EnHomeRankingEntry[] = [
  {
    operatorId: "cryptocasino",
    name: "Anonymous Casino",
    secondaryName: "CryptoCasino.CC",
    badge: "NO-KYC FOCUS",
    purpose: "Privacy-focused crypto",
    summary:
      "Email/password registration positioning with a public no-KYC policy and crypto payments. Availability and checks still depend on jurisdiction and live terms.",
    chips: ["No-KYC focus", "BTC / ETH", "Crypto games"],
    ctaLabel: "Visit Anonymous Casino",
    theme: "anonymous",
    featured: true,
    position: 1,
  },
  {
    operatorId: "bitcasino",
    name: "Bitcasino.io",
    badge: "CRYPTO CASINO",
    purpose: "Originals & live casino",
    summary:
      "Crypto casino coverage with slots, Originals and live tables. Promotions and payments vary by account and jurisdiction.",
    chips: ["BTC / USDT", "Originals", "Live Casino"],
    ctaLabel: "Visit Bitcasino.io",
    theme: "bitcasino",
    position: 2,
  },
  {
    operatorId: "sportsbetio",
    name: "Sportsbet.io",
    badge: "CRYPTO SPORTS + CASINO",
    purpose: "Sportsbook & casino",
    summary:
      "Crypto sportsbook with live betting plus a casino product. Markets, bonuses and KYC depend on official terms.",
    chips: ["USDT", "Sports", "Casino"],
    ctaLabel: "Visit Sportsbet.io",
    theme: "sportsbetio",
    position: 3,
  },
  {
    operatorId: "betsson",
    name: "Betsson Mexico",
    badge: "FIAT · MEXICO",
    purpose: "Mexico-facing fiat",
    summary:
      "Mexico-oriented fiat casino and sportsbook with local payment framing. Not presented as a global multi-country guarantee.",
    chips: ["OXXO", "SPEI", "Cards"],
    ctaLabel: "Visit Betsson Mexico",
    theme: "betsson",
    position: 4,
  },
] as const;

export type EnHomePromoConfig = {
  casinoId: EnHomeOperatorId;
  offerTitle: string;
  chips: readonly [string, string, string];
  termsLine: string;
  ctaLabel: string;
  theme: "bitcasino" | "sportsbetio" | "betsson";
  position: number;
};

/** Active promotions limited to the English homepage allowlist. */
export const EN_HOME_PROMOS: readonly EnHomePromoConfig[] = [
  {
    casinoId: "bitcasino",
    offerTitle: "Up to 5,000 USDT across three deposit bonuses",
    chips: ["Crypto casino", "3 deposits", "USDT"],
    termsLine:
      "Activation, currency, minimum deposit, wagering, eligible games, expiry, KYC and availability depend on account, GEO and live Bitcasino terms.",
    ctaLabel: "View Bitcasino offer",
    theme: "bitcasino",
    position: 1,
  },
  {
    casinoId: "sportsbetio",
    offerTitle: "100% up to 300 USDT for Sports or Casino",
    chips: ["Sports or Casino", "10 USDT min", "USDT"],
    termsLine:
      "Published wagering differs by product. Activation, markets, games, expiry, KYC and availability depend on account, GEO and live Sportsbet.io terms.",
    ctaLabel: "View Sportsbet.io offer",
    theme: "sportsbetio",
    position: 2,
  },
  {
    casinoId: "betsson",
    offerTitle: "Check the current Betsson Mexico welcome offer",
    chips: ["Fiat Mexico", "Casino", "Local payments"],
    termsLine:
      "Mexico-facing promotion. Bonus amounts, payment methods, verification and withdrawals depend on Betsson Mexico official terms and your jurisdiction.",
    ctaLabel: "View Betsson Mexico offer",
    theme: "betsson",
    position: 3,
  },
] as const;

export function resolveEnHomeCtaHref(operatorId: EnHomeOperatorId): string | undefined {
  return resolveOperatorLink(operatorId, "global")?.url;
}

export const EN_HOME_CATEGORIES = [
  {
    label: "Crypto Casinos",
    href: "/en/casinos-crypto",
    description: "Crypto payments, privacy framing and operator checklists",
    icon: "crypto" as const,
  },
  {
    label: "No-KYC",
    href: "#anonymous-casino",
    description: "Privacy-focused crypto casino discovery on this page",
    icon: "shield" as const,
  },
  {
    label: "Fiat Casinos",
    href: "/en/casinos-fiat",
    description: "Multi-currency and fiat casino editorial coverage",
    icon: "fiat" as const,
  },
  {
    label: "Bonuses",
    href: "#active-promotions",
    description: "Active promotions from the curated English homepage operators",
    icon: "bonus" as const,
  },
] as const;

export const EN_HOME_SECONDARY_LINKS = [
  { label: "Reviews", href: "/en/reviews" },
  { label: "Guides", href: "/en/guides" },
  { label: "News", href: "/en/news" },
  { label: "Betting", href: "/en/betting" },
  { label: "How we review", href: "/en/how-we-review" },
] as const;

export type EnMoreOptionsOperator = {
  operatorId: string;
  label: string;
  /** Prefer English global review ratings when true. */
  ratingSource: "global" | "canonical";
  displayName?: string;
  marketBadge?: string;
};

export type EnMoreOptionsPanel = {
  id: string;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  theme: string;
  operators: readonly EnMoreOptionsOperator[];
};

/** Compact lower comparison panels — separate from the recommended shortlist. */
export const EN_HOME_MORE_OPTIONS: readonly EnMoreOptionsPanel[] = [
  {
    id: "crypto",
    heading: "Crypto casinos",
    description: "Global crypto casino options with jurisdiction-aware editorial coverage.",
    ctaLabel: "View crypto casinos",
    ctaHref: "/en/casinos-crypto",
    theme:
      "border-violet-500/20 bg-gradient-to-b from-[#12102a]/70 via-[#111417]/80 to-[#0A1931]/90",
    operators: [
      {
        operatorId: "stake",
        label: "Crypto casino & sportsbook",
        ratingSource: "global",
      },
      {
        operatorId: "bcgame",
        label: "Crypto casino overview",
        ratingSource: "global",
      },
    ],
  },
  {
    id: "fiat",
    heading: "Fiat casinos",
    description: "Fiat and multi-currency casino options for international readers.",
    ctaLabel: "View fiat casinos",
    ctaHref: "/en/casinos-fiat",
    theme:
      "border-amber-500/20 bg-gradient-to-b from-[#161208]/60 via-[#111417]/80 to-[#0A1931]/90",
    operators: [
      {
        operatorId: "xonbet",
        label: "Multi-currency fiat casino",
        ratingSource: "global",
      },
      {
        operatorId: "slotoro",
        label: "Fiat casino with sportsbook",
        ratingSource: "global",
        displayName: "Slotoro Casino",
      },
    ],
  },
  {
    id: "betting",
    heading: "Sports betting",
    description: "Sportsbook and mixed casino operators for different market contexts.",
    ctaLabel: "View betting coverage",
    ctaHref: "/en/betting",
    theme:
      "border-emerald-500/15 bg-gradient-to-b from-[#0d1512]/60 via-[#111417]/70 to-[#0A1931]/90",
    operators: [
      {
        operatorId: "sportsbetio",
        label: "International crypto sportsbook & casino",
        ratingSource: "canonical",
        displayName: "Sportsbet.io",
      },
      {
        operatorId: "betsson",
        label: "Mexico-facing fiat casino & sportsbook",
        ratingSource: "canonical",
        displayName: "Betsson Mexico",
        marketBadge: "Mexico only",
      },
    ],
  },
] as const;

export const EN_HOME_FAQ = [
  {
    question: "Is JugadaMax a casino?",
    answer:
      "No. JugadaMax is an editorial and comparison media project. We do not accept deposits, process bets or operate games.",
  },
  {
    question: "How are homepage recommendations ordered?",
    answer:
      "The English homepage uses a curated editorial allowlist. Order reflects product fit and editorial judgement — not a universal ranking or guaranteed outcome.",
  },
  {
    question: "Does JugadaMax earn affiliate commissions?",
    answer:
      "Some outbound links are affiliate links. That does not add a direct cost for the reader and does not remove the need to check operator terms.",
  },
  {
    question: "What does no-KYC focus mean here?",
    answer:
      "It refers to operators that publicly market reduced document checks in the usual flow. It is not absolute anonymity — email, device, IP, wallets and compliance triggers can still apply.",
  },
  {
    question: "Can I play from any country?",
    answer:
      "Not necessarily. Availability depends on the operator, your jurisdiction and live official terms. Do not use VPNs or false location data to bypass restrictions.",
  },
] as const;
