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
];
