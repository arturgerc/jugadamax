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
];
