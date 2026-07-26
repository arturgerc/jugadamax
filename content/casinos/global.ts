import type { Casino } from "@/types/content";

/**
 * Global (English) crypto casino records for /en pages.
 *
 * No fabricated affiliate URLs. Stake and BC.Game outbound links are resolved
 * via lib/affiliate/operator-links.ts at render time.
 */
export const globalCasinos: Casino[] = [
  {
    id: "stake",
    slug: "stake",
    name: "Stake",
    logo: {
      src: "/operators/stake.svg",
      alt: "Stake",
      width: 80,
      height: 40,
    },
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 1 },
    payments: [
      { name: "Bitcoin", kind: "crypto" },
      { name: "Ethereum", kind: "crypto" },
      { name: "USDT", kind: "crypto" },
      { name: "Litecoin", kind: "crypto" },
    ],
    licensing: {
      licenseName: "Varies by jurisdiction",
      notes:
        "Stake.com operates under licensing and terms that vary by region. Availability is restricted in many jurisdictions — check official terms before registering.",
    },
    summary:
      "Stake.com is a well-known crypto casino and sportsbook brand. Availability, payments, verification and limits depend on your jurisdiction and the operator's current terms.",
    locale: "en",
  },
  {
    id: "bcgame",
    slug: "bcgame",
    name: "BC.Game",
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 2 },
    payments: [
      { name: "Bitcoin", kind: "crypto" },
      { name: "Ethereum", kind: "crypto" },
      { name: "USDT", kind: "crypto" },
      { name: "Litecoin", kind: "crypto" },
    ],
    licensing: {
      licenseName: "Varies by jurisdiction",
      notes:
        "BC.Game publishes licensing and terms information on its official site. Availability depends on your jurisdiction — verify official terms before registering.",
    },
    summary:
      "BC.Game is a crypto-first casino platform with a broad token list and provably fair games. Availability, verification requirements and payment options vary by jurisdiction.",
    locale: "en",
  },
  {
    id: "xonbet",
    slug: "xonbet",
    name: "XON.BET",
    logo: {
      src: "/operators/xonbet.svg",
      alt: "XON.BET",
      width: 120,
      height: 48,
    },
    verticals: ["fiat-casino"],
    rankByVertical: { "fiat-casino": 1 },
    rating: 3.7,
    payments: [
      { name: "Visa", kind: "fiat" },
      { name: "Mastercard", kind: "fiat" },
      { name: "Interac", kind: "fiat" },
      { name: "Skrill", kind: "fiat" },
      { name: "Bitcoin", kind: "crypto" },
      { name: "USDT", kind: "crypto" },
    ],
    licensing: {
      licenseName: "Curaçao Gaming Authority — OGL/2024/1056/0702",
      notes:
        "XON.BET is operated by Inextro B.V. under an active Curaçao Gaming Authority licence. Beriston Ltd. acts as payment agent. This is not a local licence for Canada, Germany, Sweden, Denmark or other target markets. Availability and local legality must be checked separately.",
    },
    summary:
      "XON.BET is a multi-currency online casino with slots, live casino, tournaments, loyalty features and both fiat and selected crypto payment options. Its welcome package and payment methods vary by country, currency and account.",
    locale: "en",
  },
  {
    id: "slotoro",
    slug: "slotoro",
    name: "Slotoro Casino",
    logo: {
      src: "/operators/slotoro.svg",
      alt: "Slotoro Casino",
      width: 120,
      height: 48,
    },
    verticals: ["fiat-casino"],
    rankByVertical: { "fiat-casino": 2 },
    rating: 4.1,
    payments: [
      { name: "Visa", kind: "fiat" },
      { name: "Mastercard", kind: "fiat" },
      { name: "Interac", kind: "fiat" },
      { name: "Skrill", kind: "fiat" },
      { name: "Neteller", kind: "fiat" },
      { name: "MiFinity", kind: "fiat" },
    ],
    licensing: {
      licenseName: "Curaçao — OGL/2024/686/0183",
      notes:
        "Slotoro is operated by Wiraon B.V. (registration 146886). Official terms list Briantie Limited (HE 385770) as payment agent. This Curaçao licence is not local authorisation in every market. Check the current restricted-country list and local law.",
    },
    summary:
      "Slotoro is a fiat-led multi-currency online casino with slots, live casino, table games, tournaments, Wheel of Fortune, VIP and loyalty features. Sportsbook is available as an additional product. The welcome package and payment methods vary by country and account.",
    locale: "en",
  },
  {
    id: "cryptocasino",
    slug: "cryptocasino",
    name: "Anonymous Casino",
    logo: {
      src: "/operators/anonymous.png",
      alt: "Anonymous Casino",
      width: 180,
      height: 56,
    },
    verticals: ["crypto-casino"],
    rankByVertical: {},
    payments: [
      { name: "Bitcoin", kind: "crypto" },
      { name: "Ethereum", kind: "crypto" },
      { name: "XRP", kind: "crypto" },
      { name: "USDT", kind: "crypto" },
      { name: "Solana", kind: "crypto" },
      { name: "Dogecoin", kind: "crypto" },
      { name: "USDC", kind: "crypto" },
      { name: "Litecoin", kind: "crypto" },
    ],
    licensing: {
      licenseName: "No independently verified gambling licence by JugadaMax",
      notes:
        "Anonymous Casino operates publicly on CryptoCasino.CC as an international crypto casino with a public no-KYC policy claim. JugadaMax does not confirm a local licence for every market or a currently verified offshore licence. Availability, Terms, limits, fraud controls and withdrawal rules depend on jurisdiction and live operator policy.",
    },
    summary:
      "Anonymous Casino (CryptoCasino.CC) is a privacy-oriented crypto casino with email/password registration and a public no-KYC policy. Supported assets include BTC, ETH, XRP, USDT, SOL, DOGE, USDC and LTC. Product focus is crypto games, slots and live casino — not a guaranteed bonus.",
    locale: "en",
  },
  {
    id: "ethcasino",
    slug: "ethcasino",
    name: "ETH Casino",
    logo: {
      src: "/operators/ethcasino.svg",
      alt: "ETH Casino",
      width: 140,
      height: 56,
    },
    verticals: ["crypto-casino"],
    rankByVertical: {},
    payments: [
      { name: "Ethereum", kind: "crypto" },
      { name: "Bitcoin", kind: "crypto" },
      { name: "XRP", kind: "crypto" },
      { name: "USDT", kind: "crypto" },
      { name: "Solana", kind: "crypto" },
      { name: "BNB", kind: "crypto" },
      { name: "Dogecoin", kind: "crypto" },
      { name: "Cardano", kind: "crypto" },
      { name: "USDC", kind: "crypto" },
      { name: "TRX", kind: "crypto" },
      { name: "Litecoin", kind: "crypto" },
    ],
    licensing: {
      licenseName: "No independently verified gambling licence by JugadaMax",
      notes:
        "ETH Casino presents itself as an international crypto casino with a public no-KYC policy. JugadaMax does not confirm a local licence for every market or a currently verified international licence. Availability, Terms, limits, fraud controls and withdrawals depend on jurisdiction and live operator policy.",
    },
    summary:
      "ETH Casino is an Ethereum-focused crypto casino with email/password registration and a public no-KYC policy. It accepts ETH, BTC, USDT and additional cryptocurrencies, with slots, crypto games and live casino. Availability and verification rules depend on jurisdiction and live Terms.",
    locale: "en",
  },
  {
    id: "ltccasino",
    slug: "ltccasino",
    name: "LTC Casino",
    logo: {
      src: "/operators/ltccasino.png",
      alt: "LTC Casino",
      width: 120,
      height: 48,
    },
    verticals: ["crypto-casino"],
    rankByVertical: {},
    payments: [
      { name: "Litecoin", kind: "crypto" },
      { name: "Bitcoin", kind: "crypto" },
      { name: "Ethereum", kind: "crypto" },
      { name: "XRP", kind: "crypto" },
      { name: "USDT", kind: "crypto" },
      { name: "Solana", kind: "crypto" },
      { name: "BNB", kind: "crypto" },
      { name: "Dogecoin", kind: "crypto" },
      { name: "Cardano", kind: "crypto" },
      { name: "USDC", kind: "crypto" },
      { name: "TRX", kind: "crypto" },
    ],
    licensing: {
      licenseName: "Operator-declared licence — not independently verified by JugadaMax",
      notes:
        "LTC Casino presents itself as an international crypto casino. JugadaMax does not confirm a local licence for every market or guarantee the current status of any offshore licence. Availability, footer claims, Terms, limits and policies must be checked after redirect.",
    },
    summary:
      "LTC Casino is a Litecoin-oriented crypto casino with email/password registration and a public no-KYC policy per its FAQ. It accepts Litecoin, Bitcoin, Ethereum, USDT and other cryptocurrencies, with slots, live casino and instant crypto games. Availability depends on jurisdiction and live Terms.",
    locale: "en",
  },
  {
    id: "betsson",
    slug: "betsson",
    name: "Betsson Mexico",
    logo: {
      src: "/operators/betsson.svg",
      alt: "Betsson Mexico",
      width: 80,
      height: 40,
    },
    verticals: ["fiat-casino", "sportsbook"],
    rankByVertical: {},
    payments: [
      { name: "Visa", kind: "fiat" },
      { name: "Mastercard", kind: "fiat" },
      { name: "OXXO", kind: "fiat" },
      { name: "SPEI", kind: "fiat" },
    ],
    licensing: {
      licenseName: "SEGOB (Mexico) — operator-reported",
      notes:
        "Mexico-facing fiat casino and sportsbook. Operator reports local Mexican authorisation framing. Confirm current licence notes, product access and terms on official Betsson Mexico surfaces. Not presented as a universal multi-country guarantee.",
    },
    summary:
      "Betsson Mexico is a Mexico-facing fiat casino and sportsbook with local payment framing (OXXO, SPEI, cards where available). On English JugadaMax pages it leads the fiat ranking as a Mexico-market option — not a global availability claim.",
    locale: "en",
  },
  {
    id: "1xbet",
    slug: "1xbet",
    name: "1xBet",
    logo: {
      src: "/operators/1xbet.svg",
      alt: "1xBet",
      width: 96,
      height: 48,
    },
    verticals: ["fiat-casino", "sportsbook"],
    rankByVertical: {},
    payments: [
      { name: "Visa", kind: "fiat" },
      { name: "Mastercard", kind: "fiat" },
      { name: "Skrill", kind: "fiat" },
      { name: "Neteller", kind: "fiat" },
      { name: "Bitcoin", kind: "crypto" },
      { name: "USDT", kind: "crypto" },
    ],
    licensing: {
      licenseName: "Licence not independently verified by JugadaMax",
      notes:
        "International mixed casino + sportsbook operator. Licensing, availability, verification, limits, bonuses and withdrawals must be checked in official operator terms for your jurisdiction.",
    },
    summary:
      "1xBet is an international mixed operator with online casino, live casino, slots and sportsbook in one account. Promotions, payments and access depend on GEO, account status and live terms.",
    locale: "en",
  },
  {
    id: "mostbet",
    slug: "mostbet",
    name: "Mostbet",
    logo: {
      src: "/operators/mostbet.webp",
      alt: "Mostbet",
      width: 120,
      height: 48,
    },
    verticals: ["fiat-casino", "sportsbook"],
    rankByVertical: {},
    payments: [
      { name: "Visa", kind: "fiat" },
      { name: "Mastercard", kind: "fiat" },
      { name: "Skrill", kind: "fiat" },
      { name: "Bitcoin", kind: "crypto" },
      { name: "USDT", kind: "crypto" },
    ],
    licensing: {
      licenseName: "Curaçao — confirm live licence on official terms",
      notes:
        "External sources identify Bizbon N.V. and Curaçao licence framing. This is not a local licence for every market. Verify entity, licence, restrictions, KYC and current terms on Mostbet.",
    },
    summary:
      "Mostbet is an international mixed operator with sportsbook, casino, live casino, poker, esports and instant games. First-deposit campaigns, currency, payments and availability depend on account, GEO and live terms.",
    locale: "en",
  },
  {
    id: "melbet",
    slug: "melbet",
    name: "Melbet",
    logo: {
      src: "/operators/melbet.svg",
      alt: "Melbet",
      width: 120,
      height: 48,
    },
    verticals: ["fiat-casino", "sportsbook"],
    rankByVertical: {},
    payments: [
      { name: "Visa", kind: "fiat" },
      { name: "Mastercard", kind: "fiat" },
      { name: "Skrill", kind: "fiat" },
      { name: "Neteller", kind: "fiat" },
      { name: "Bitcoin", kind: "crypto" },
    ],
    licensing: {
      licenseName: "Licence not independently verified by JugadaMax",
      notes:
        "International mixed casino + sportsbook operator. Licensing, availability, verification, limits, bonuses and withdrawals must be checked in official operator terms for your jurisdiction.",
    },
    summary:
      "Melbet is an international mixed operator with sportsbook, online casino, slots, live casino and fast games in one account. Promotions, payments and access depend on GEO, account status and live terms.",
    locale: "en",
  },
  {
    id: "caliente",
    slug: "caliente",
    name: "Caliente",
    logo: {
      src: "/operators/caliente.png",
      alt: "Caliente",
      width: 80,
      height: 40,
    },
    verticals: ["fiat-casino", "sportsbook"],
    rankByVertical: {},
    payments: [
      { name: "Visa", kind: "fiat" },
      { name: "Mastercard", kind: "fiat" },
      { name: "OXXO", kind: "fiat" },
      { name: "SPEI", kind: "fiat" },
    ],
    licensing: {
      licenseName: "SEGOB (Mexico) — operator-reported",
      notes:
        "Mexico-market editorial reference. Operator reports local Mexican authorisation. Confirm current licence framing, product access and terms on the official site. Not presented as a global multi-country guarantee.",
    },
    summary:
      "Caliente is a Mexico-facing sportsbook and online casino brand with local payment framing. Included on JugadaMax English pages as a Mexico-market editorial reference — not as a universal international recommendation.",
    locale: "en",
  },
  {
    id: "codere",
    slug: "codere",
    name: "Codere",
    logo: {
      src: "/operators/codere.png",
      alt: "Codere",
      width: 80,
      height: 40,
    },
    verticals: ["fiat-casino", "sportsbook"],
    rankByVertical: {},
    payments: [
      { name: "Visa", kind: "fiat" },
      { name: "Mastercard", kind: "fiat" },
      { name: "OXXO", kind: "fiat" },
      { name: "SPEI", kind: "fiat" },
    ],
    licensing: {
      licenseName: "SEGOB (Mexico) — operator-reported",
      notes:
        "Mexico-market editorial reference. Operator reports local Mexican authorisation. Confirm current licence framing, product access and terms on the official site. Partner/affiliate status may be pending on JugadaMax.",
    },
    summary:
      "Codere is a Mexico-facing sportsbook and online casino brand with local payment framing. Included on JugadaMax English pages as a Mexico-market editorial reference for comparison — not as an active global affiliate campaign.",
    locale: "en",
  },
];
