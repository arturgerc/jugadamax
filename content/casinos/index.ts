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
      notes: "Operador con permiso vigente de la Secretaría de Gobernación en México.",
    },
    bonusIds: ["caliente-welcome"],
    affiliateUrl: "https://www.caliente.mx",
    summary:
      "Casa de casino y apuestas con licencia en México y métodos de pago locales.",
    locale: "es-MX",
  },
  {
    id: "codere",
    slug: "codere",
    name: "Codere",
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
      notes: "Operador de apuestas deportivas con permiso vigente en México.",
    },
    bonusIds: ["codere-welcome"],
    affiliateUrl: "https://www.codere.mx",
    summary:
      "Apuestas deportivas con presencia establecida en México y pagos locales.",
    locale: "es-MX",
  },
];
