import type { Casino } from "@/types/content";

/**
 * Seed casino/operator records (FR-025/FR-026).
 *
 * Authenticity (Constitution Principle V): no fabricated ratings, winners, or
 * proof. Editorial `rating` is intentionally omitted here — it is only shown
 * once a named, authored Review exists. Summaries and licensing notes are
 * neutral and factual; `affiliateUrl` points to the operator's official site as
 * a placeholder until real affiliate destinations are configured.
 */
export const casinos: Casino[] = [
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
      licenseName: "Curazao",
      notes: "Casino crypto internacional con soporte para múltiples criptomonedas.",
    },
    bonusIds: ["stake-welcome"],
    affiliateUrl: "https://stake.com",
    summary:
      "Casino crypto internacional con amplia variedad de juegos y pagos en criptomonedas.",
    locale: "es-MX",
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
    rankByVertical: { "fiat-casino": 1, sportsbook: 2 },
    payments: [
      { name: "Visa", kind: "fiat" },
      { name: "Mastercard", kind: "fiat" },
      { name: "OXXO", kind: "fiat" },
      { name: "SPEI", kind: "fiat" },
    ],
    licensing: {
      licenseName: "SEGOB (México)",
      notes:
        "Según información declarada por el operador, cuenta con permiso de la Secretaría de Gobernación (SEGOB) en México; pendiente de verificación editorial.",
    },
    bonusIds: ["caliente-welcome"],
    affiliateUrl: "https://www.caliente.mx",
    summary:
      "Casa de casino y apuestas con métodos de pago locales en México; licencia informada por el operador.",
    locale: "es-MX",
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
    verticals: ["sportsbook"],
    rankByVertical: { sportsbook: 1 },
    payments: [
      { name: "Visa", kind: "fiat" },
      { name: "Mastercard", kind: "fiat" },
      { name: "OXXO", kind: "fiat" },
      { name: "SPEI", kind: "fiat" },
    ],
    licensing: {
      licenseName: "SEGOB (México)",
      notes:
        "Según información declarada por el operador, cuenta con permiso para apuestas deportivas en México; pendiente de verificación editorial.",
    },
    bonusIds: ["codere-welcome"],
    affiliateUrl: "https://www.codere.mx",
    summary:
      "Apuestas deportivas con métodos de pago locales en México; información declarada por el operador.",
    locale: "es-MX",
  },
];
