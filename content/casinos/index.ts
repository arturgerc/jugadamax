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
      licenseName: "Dominio local para México: stake.mx",
      notes:
        "Licencia y disponibilidad informadas por el operador para el dominio local de México; pendiente de verificación editorial.",
    },
    bonusIds: ["stake-welcome"],
    affiliateUrl: "https://stake.mx",
    summary:
      "Stake México combina casino online y apuestas deportivas para jugadores en México. La disponibilidad, pagos, límites y verificaciones dependen del dominio local y de las condiciones vigentes del operador.",
    locale: "es-MX",
  },
  {
    id: "bitcasino",
    slug: "bitcasino",
    name: "Bitcasino.io",
    logo: {
      src: "/operators/bitcasino.svg",
      alt: "Bitcasino.io",
      width: 80,
      height: 40,
    },
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 2 },
    payments: [
      { name: "Bitcoin", kind: "crypto" },
      { name: "Ethereum", kind: "crypto" },
      { name: "USDT", kind: "crypto" },
      { name: "Litecoin", kind: "crypto" },
    ],
    licensing: {
      licenseName: "Curaçao / CGA",
      notes:
        "Operador internacional con licencia CGA / Curaçao informada por el sitio oficial. No es licencia local SEGOB México; revisa términos y disponibilidad regional.",
    },
    bonusIds: ["bitcasino-welcome"],
    affiliateUrl: "https://bitcasino.io/",
    summary:
      "Casino crypto internacional con enfoque en Bitcoin, stablecoins y juegos en vivo. Para México y LATAM, JugadaMax lo presenta como alternativa crypto/offshore; disponibilidad, verificación, límites, bonos y retiros deben revisarse en el sitio oficial.",
    locale: "es-MX",
  },
  {
    id: "cryptocasino",
    slug: "cryptocasino",
    name: "CryptoCasino.CC",
    logo: {
      src: "/operators/cryptocasino.svg",
      alt: "CryptoCasino.CC",
      width: 80,
      height: 40,
    },
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 3 },
    payments: [
      { name: "Bitcoin", kind: "crypto" },
      { name: "Ethereum", kind: "crypto" },
      { name: "USDT", kind: "crypto" },
      { name: "Solana", kind: "crypto" },
      { name: "Dogecoin", kind: "crypto" },
      { name: "USDC", kind: "crypto" },
      { name: "XRP", kind: "crypto" },
      { name: "Litecoin", kind: "crypto" },
    ],
    licensing: {
      licenseName: "Licencia no verificada por JugadaMax",
      notes:
        "Licencia, disponibilidad, verificación, límites y condiciones deben revisarse en el sitio oficial.",
    },
    bonusIds: ["cryptocasino-welcome"],
    affiliateUrl: "https://www.cryptocasino.cc/",
    summary:
      "CryptoCasino.CC es un casino crypto orientado a jugadores que priorizan privacidad y pagos con criptomonedas como Bitcoin, Ethereum, USDT, Solana, Dogecoin, USDC, XRP y Litecoin. JugadaMax recomienda verificar disponibilidad para México, requisitos de verificación, límites, comisiones y tiempos de retiro antes de registrarse.",
    locale: "es-MX",
  },
  {
    id: "ethcasino",
    slug: "ethcasino",
    name: "ETH Casino",
    logo: {
      src: "/operators/ethcasino.jpg",
      alt: "ETH Casino",
      width: 80,
      height: 40,
    },
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 4 },
    payments: [
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
      { name: "Litecoin", kind: "crypto" },
    ],
    licensing: {
      licenseName: "Licencia no verificada por JugadaMax",
      notes:
        "Licencia, disponibilidad, verificación, límites y condiciones deben revisarse en el sitio oficial.",
    },
    bonusIds: ["ethcasino-welcome"],
    affiliateUrl: "https://www.ethcasino.io/",
    summary:
      "ETH Casino es un casino crypto enfocado en Ethereum y pagos con criptomonedas. El operador promociona una experiencia orientada a privacidad y registro sencillo, pero JugadaMax recomienda verificar disponibilidad para México, requisitos de verificación, límites, comisiones y tiempos de retiro antes de registrarse.",
    locale: "es-MX",
  },
  {
    id: "ltccasino",
    slug: "ltccasino",
    name: "LTC Casino",
    logo: {
      src: "/operators/ltccasino.jpg",
      alt: "LTC Casino",
      width: 80,
      height: 40,
    },
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 5 },
    payments: [
      { name: "Litecoin", kind: "crypto" },
      { name: "Bitcoin", kind: "crypto" },
      { name: "Ethereum", kind: "crypto" },
      { name: "USDT", kind: "crypto" },
    ],
    licensing: {
      licenseName: "Licencia no verificada por JugadaMax",
      notes:
        "Licencia, disponibilidad, verificación, límites y condiciones deben revisarse en el sitio oficial.",
    },
    bonusIds: ["ltccasino-welcome"],
    affiliateUrl: "https://www.ltccasino.io/",
    summary:
      "LTC Casino es un casino crypto con enfoque en Litecoin y pagos con criptomonedas. JugadaMax lo presenta como candidato de privacidad dentro del segmento crypto, pero recomienda revisar disponibilidad para México, requisitos de verificación, límites, comisiones y tiempos de retiro antes de registrarse.",
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
  {
    id: "betsson",
    slug: "betsson",
    name: "Betsson",
    logo: {
      src: "/operators/betsson.svg",
      alt: "Betsson",
      width: 80,
      height: 40,
    },
    verticals: ["fiat-casino", "sportsbook"],
    rankByVertical: { "fiat-casino": 2, sportsbook: 3 },
    payments: [
      { name: "Visa", kind: "fiat" },
      { name: "Mastercard", kind: "fiat" },
      { name: "OXXO", kind: "fiat" },
      { name: "SPEI", kind: "fiat" },
    ],
    licensing: {
      licenseName: "SEGOB (México)",
      notes:
        "Licencia informada por el operador: SEGOB (México); pendiente de verificación editorial.",
    },
    bonusIds: ["betsson-welcome"],
    affiliateUrl: "https://www.betsson.mx/",
    summary:
      "Casino y casa de apuestas con presencia en México, métodos de pago locales y productos de casino y apuestas deportivas.",
    locale: "es-MX",
  },
];
