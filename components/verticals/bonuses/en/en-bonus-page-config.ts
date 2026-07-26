/**

 * English `/en/bonuses` configuration.

 * Explicit allowlist — do not pull Spanish /bonos inventory blindly.

 * Includes English-only XON.BET and Slotoro; excludes Spanish-only Awintura.

 */



import {

  BETFURY_AFFILIATE_URL,

  BETFURY_PROMO_CODE,

  BETSSON_MX_CASINO_WELCOME_URL,

  BITCASINO_PROMO_AFFILIATE_URL,

  GAMDOM_GLOBAL_AFFILIATE_URL,

  MELBET_AFFILIATE_URL,

  MELBET_PROMO_CODE,

  MELLSTROY_GLOBAL_AFFILIATE_URL,

  MELLSTROY_PROMO_CODE,

  MOSTBET_PLAYERS_AFFILIATE_URL,

  MOSTBET_PROMO_CODE,

  ONE_XBET_AFFILIATE_URL,

  ONE_XBET_PROMO_CODE,

  SLOTORO_MAIN_AFFILIATE_URL,

  SPORTSBETIO_REGISTRATION_AFFILIATE_URL,

  VODKABET_AFFILIATE_URL,

  VODKABET_PROMO_CODE,

  XONBET_GLOBAL_AFFILIATE_URL,

} from "@/lib/affiliate/constants";

import type { BonusDirectoryGroup } from "@/types/content";



/** Page-level update date for /en/bonuses — not individual offer verification. */

export const EN_BONUS_PAGE_UPDATED_AT = "2026-07-26";



export type EnBonusDirectoryGroup = BonusDirectoryGroup;



export type EnBonusEntry = {

  id: string;

  operatorId: string;

  operatorName: string;

  /** Featured TOP-3 order (1–3). Omit for directory-only. */

  featuredPosition?: 1 | 2 | 3;

  /** Directory group when not featured. */

  directoryGroup?: EnBonusDirectoryGroup;

  badge?: string;

  offerText: string;

  productLabel: string;

  minDeposit: string;

  wagering: string;

  validity: string;

  statusLabel: string;

  terms: string;

  promoCode?: string;

  ctaLabel: string;

  ctaHref: string;

};



/**

 * Full English bonus allowlist.

 * Featured TOP-3: Betsson, XON.BET, Slotoro (not repeated in directory).

 * Awintura intentionally omitted (Spanish-only surface).

 */

export const EN_BONUS_ENTRIES: readonly EnBonusEntry[] = [

  {

    id: "en-betsson-welcome",

    operatorId: "betsson",

    operatorName: "Betsson Mexico",

    featuredPosition: 1,

    badge: "Mexico-facing",

    offerText: "Up to $15,000 MXN + 200 free spins",

    productLabel: "Fiat casino MX",

    minDeposit: "From $200 MXN (SPEI from $100 per terms)",

    wagering: "Not published",

    validity: "Validity not published",

    statusLabel: "Variable offer",

    terms:

      "Promotion published by Betsson Mexico. Bonuses, spins, payments, verification and withdrawals depend on official operator terms and your jurisdiction.",

    ctaLabel: "View Betsson offer",

    ctaHref: BETSSON_MX_CASINO_WELCOME_URL,

  },

  {

    id: "en-xonbet-welcome",

    operatorId: "xonbet",

    operatorName: "XON.BET",

    featuredPosition: 2,

    badge: "English-only",

    offerText: "Up to 500% across the first 4 deposits",

    productLabel: "Multi-currency casino",

    minDeposit: "Not published",

    wagering: "Not published",

    validity: "Validity not published",

    statusLabel: "Variable offer",

    terms:

      "Four-deposit welcome structure with geo-specific caps. Currency, wagering, eligible games and cashback requirements vary by country, currency, campaign and account.",

    ctaLabel: "View XON.BET offer",

    ctaHref: XONBET_GLOBAL_AFFILIATE_URL,

  },

  {

    id: "en-slotoro-welcome",

    operatorId: "slotoro",

    operatorName: "Slotoro Casino",

    featuredPosition: 3,

    badge: "English-only",

    offerText: "Up to 2,500 + 250 FS across 3 deposits",

    productLabel: "Fiat casino + sports",

    minDeposit: "Not published",

    wagering: "40x (published package terms)",

    validity: "Five-day wagering window (published package terms)",

    statusLabel: "Variable offer",

    terms:

      "Three-deposit package with up to 250 free spins. Currency caps, spin titles, minimum deposits and eligibility may vary by country and account. Confirm the live offer after redirect.",

    ctaLabel: "View Slotoro welcome offer",

    ctaHref: SLOTORO_MAIN_AFFILIATE_URL,

  },

  {

    id: "en-1xbet-welcome",

    operatorId: "1xbet",

    operatorName: "1xBet",

    directoryGroup: "casino-mx",

    offerText: "Up to 40,000 MXN + 150 free spins",

    productLabel: "Casino package",

    minDeposit: "Not published",

    wagering: "Not published",

    validity: "Validity not published",

    statusLabel: "Variable offer",

    terms:

      "Package shown for eligible new users. Eligible deposits, wagering, games, limits, expiry, verification and jurisdiction apply. Confirm the live promotion before depositing.",

    promoCode: ONE_XBET_PROMO_CODE,

    ctaLabel: "View 1xBet package",

    ctaHref: ONE_XBET_AFFILIATE_URL,

  },

  {

    id: "en-betfury-welcome",

    operatorId: "betfury",

    operatorName: "BetFury",

    directoryGroup: "crypto-rewards",

    badge: "Crypto · rewards",

    offerText: "Up to 590% + free spins subject to official terms",

    productLabel: "Crypto · rewards",

    minDeposit: "Not published",

    wagering: "Not published",

    validity: "Validity not published",

    statusLabel: "Variable offer",

    terms:

      "Visible Bonus Cabinet promotion. Bonuses, free spins, cashback, withdrawals and verification depend on BetFury official terms.",

    promoCode: BETFURY_PROMO_CODE,

    ctaLabel: "View BetFury bonuses",

    ctaHref: BETFURY_AFFILIATE_URL,

  },

  {

    id: "en-bitcasino-welcome",

    operatorId: "bitcasino",

    operatorName: "Bitcasino.io",

    directoryGroup: "crypto-rewards",

    badge: "Crypto casino",

    offerText: "Up to 5,000 USDT across three deposit bonuses",

    productLabel: "Crypto casino",

    minDeposit: "Not published",

    wagering: "Not published",

    validity: "Validity not published",

    statusLabel: "Variable offer",

    terms:

      "First deposit 100% up to 1,500 USDT; second 50% up to 2,000 USDT; third 100% up to 1,500 USDT. Activation, currency, wagering, games, expiry, KYC and availability depend on account, GEO and live terms.",

    ctaLabel: "View Bitcasino offer",

    ctaHref: BITCASINO_PROMO_AFFILIATE_URL,

  },

  {

    id: "en-gamdom-rewards",

    operatorId: "gamdom",

    operatorName: "Gamdom",

    directoryGroup: "crypto-rewards",

    offerText: "15% elevated rakeback for 7 days (Rewards campaign)",

    productLabel: "Rewards / rakeback",

    minDeposit: "Not published",

    wagering: "Not published",

    validity: "7-day campaign window (per live terms)",

    statusLabel: "Variable offer",

    terms:

      "Rewards campaign published by Gamdom. Elevated rakeback, duration, eligibility, games, limits and availability depend on campaign, account, GEO and official terms.",

    ctaLabel: "View Gamdom Rewards",

    ctaHref: GAMDOM_GLOBAL_AFFILIATE_URL,

  },

  {

    id: "en-melbet-sports",

    operatorId: "melbet",

    operatorName: "Melbet",

    directoryGroup: "sports-mixed",

    offerText: "Up to MX$17,500 across 4 sports deposits",

    productLabel: "Sports betting",

    minDeposit: "MX$100",

    wagering: "5x (sports, per published terms)",

    validity: "Validity not published",

    statusLabel: "Variable offer",

    terms:

      "Tiered sports package for the first four eligible deposits. Minimum odds, expiry, verification, eligible markets and operator restrictions apply.",

    promoCode: MELBET_PROMO_CODE,

    ctaLabel: "View Melbet offer",

    ctaHref: MELBET_AFFILIATE_URL,

  },

  {

    id: "en-mellstroy-welcome",

    operatorId: "mellstroy",

    operatorName: "Mellstroy",

    directoryGroup: "crypto-rewards",

    offerText: "Up to 660% + 400 FS subject to campaign",

    productLabel: "Crypto casino",

    minDeposit: "Not published",

    wagering: "Not published",

    validity: "Validity not published",

    statusLabel: "Variable offer",

    terms:

      "Campaign creatives may show different percentages. Confirm percentages, eligible deposits, wagering, games, limits and expiry before depositing.",

    promoCode: MELLSTROY_PROMO_CODE,

    ctaLabel: "View Mellstroy offer",

    ctaHref: MELLSTROY_GLOBAL_AFFILIATE_URL,

  },

  {

    id: "en-mostbet-welcome",

    operatorId: "mostbet",

    operatorName: "Mostbet",

    directoryGroup: "casino-mx",

    offerText: "125% + 250 FS on first deposit subject to campaign",

    productLabel: "Casino or Sports",

    minDeposit: "Not published",

    wagering: "Not published",

    validity: "Validity not published",

    statusLabel: "Variable offer",

    terms:

      "Campaign landing may allow Casino or Sports selection. Maximum amount, currency, minimum deposit, wagering, free spins, markets, KYC and availability depend on campaign, account, GEO and live terms.",

    promoCode: MOSTBET_PROMO_CODE,

    ctaLabel: "View Mostbet offer",

    ctaHref: MOSTBET_PLAYERS_AFFILIATE_URL,

  },

  {

    id: "en-sportsbetio-welcome",

    operatorId: "sportsbetio",

    operatorName: "Sportsbet.io",

    directoryGroup: "sports-mixed",

    offerText: "100% up to 300 USDT for Sports or Casino",

    productLabel: "Sports or Casino",

    minDeposit: "10 USDT",

    wagering: "15x Sports / 40x Casino",

    validity: "Validity not published",

    statusLabel: "Variable offer",

    terms:

      "Choose Sports or Casino path. Activation, markets, games, expiry, KYC, payments and availability depend on account, GEO and live terms.",

    ctaLabel: "View Sportsbet.io offer",

    ctaHref: SPORTSBETIO_REGISTRATION_AFFILIATE_URL,

  },

  {

    id: "en-vodkabet-welcome",

    operatorId: "vodkabet",

    operatorName: "Vodka.bet",

    directoryGroup: "crypto-rewards",

    offerText: "125% + up to 300 FS subject to campaign",

    productLabel: "Crypto casino",

    minDeposit: "Not published",

    wagering: "Not published",

    validity: "Validity not published",

    statusLabel: "Variable offer",

    terms:

      "Promo code JUGADAMAX. Creatives may also show crypto deposit extras and Telegram spins. Confirm minimum deposit, wagering, games, expiry and limits in official terms.",

    promoCode: VODKABET_PROMO_CODE,

    ctaLabel: "View Vodka.bet offer",

    ctaHref: VODKABET_AFFILIATE_URL,

  },

] as const;



/**

 * Mandatory comparison table order (12 rows). Do not alphabetically sort.

 */

export const EN_BONUS_COMPARISON_ORDER: readonly string[] = [

  "en-betsson-welcome",

  "en-xonbet-welcome",

  "en-slotoro-welcome",

  "en-1xbet-welcome",

  "en-betfury-welcome",

  "en-bitcasino-welcome",

  "en-gamdom-rewards",

  "en-melbet-sports",

  "en-mellstroy-welcome",

  "en-mostbet-welcome",

  "en-sportsbetio-welcome",

  "en-vodkabet-welcome",

] as const;



/** Directory group order within each section (entry ids). */

export const EN_BONUS_DIRECTORY_ORDER: Record<

  EnBonusDirectoryGroup,

  readonly string[]

> = {

  "casino-mx": ["en-1xbet-welcome", "en-mostbet-welcome"],

  "crypto-rewards": [

    "en-betfury-welcome",

    "en-bitcasino-welcome",

    "en-gamdom-rewards",

    "en-mellstroy-welcome",

    "en-vodkabet-welcome",

  ],

  "sports-mixed": ["en-melbet-sports", "en-sportsbetio-welcome"],

};



export const EN_BONUS_FEATURED = EN_BONUS_ENTRIES.filter(

  (e) => e.featuredPosition !== undefined,

).sort((a, b) => (a.featuredPosition ?? 0) - (b.featuredPosition ?? 0));



export const EN_BONUS_DIRECTORY_SECTIONS: readonly {

  group: EnBonusDirectoryGroup;

  heading: string;

  description: string;

  sectionId: string;

  eyebrow: string;

}[] = [

  {

    group: "casino-mx",

    heading: "Casino and multi-currency offers",

    description:

      "Casino and mixed promotions with traditional payments or multi-currency cashier framing.",

    sectionId: "bonuses-casino-fiat",

    eyebrow: "Casino · Multi-currency",

  },

  {

    group: "crypto-rewards",

    heading: "Crypto and rewards",

    description:

      "Crypto bonuses, free spins and rewards or rakeback programmes subject to live campaign terms.",

    sectionId: "bonuses-crypto-rewards",

    eyebrow: "Crypto · Rewards",

  },

  {

    group: "sports-mixed",

    heading: "Betting and mixed products",

    description:

      "Sportsbook promotions or landings where you can choose casino or sports before depositing.",

    sectionId: "bonuses-sports-mixed",

    eyebrow: "Betting · Mixed",

  },

] as const;



export const EN_BONUS_RELATED_LINKS = [

  { label: "Crypto casinos", href: "/en/casinos-crypto" },

  { label: "Fiat casinos", href: "/en/casinos-fiat" },

  { label: "No-KYC casinos", href: "/en/casinos-no-kyc" },

  { label: "Sports betting", href: "/en/betting" },

  { label: "Reviews", href: "/en/reviews" },

  { label: "Guides", href: "/en/guides" },

] as const;
