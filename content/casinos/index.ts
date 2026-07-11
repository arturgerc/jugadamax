import type { Casino } from "@/types/content";
import {
  BETFURY_AFFILIATE_URL,
  FIVEHUNDRED_CASINO_GLOBAL_AFFILIATE_URL,
  GAMDOM_GLOBAL_AFFILIATE_URL,
  ONE_XBET_AFFILIATE_URL,
  RAINBET_REFERRAL_URL,
  MELBET_AFFILIATE_URL,
  MELLSTROY_GLOBAL_AFFILIATE_URL,
} from "@/lib/affiliate/constants";

/**
 * Seed casino/operator records (FR-025/FR-026).
 *
 * Authenticity (Constitution Principle V): no fabricated ratings, winners, or
 * proof. Editorial `rating` is intentionally omitted here — it is only shown
 * once a named, authored Review exists. Summaries and licensing notes are
 * neutral and factual. `affiliateUrl` is only set when an approved tracking link
 * exists; editorial/pending operators omit it so fallback CTAs cannot fire.
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
    rankByVertical: { "crypto-casino": 2 },
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
    // Outbound link resolved via operator-links (STAKE_MX_OFFICIAL_URL).
    summary:
      "Stake México combina casino online y apuestas deportivas para jugadores en México. La disponibilidad, pagos, límites y verificaciones dependen del dominio local y de las condiciones vigentes del operador.",
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
        "Licencia, entidad operadora, disponibilidad, verificación, límites y condiciones deben revisarse en el sitio oficial. No es licencia local SEGOB México.",
    },
    bonusIds: ["cryptocasino-welcome"],
    // Editorial only — no approved tracking link.
    summary:
      "CryptoCasino.CC es un casino crypto con enfoque en Bitcoin, Ethereum, USDT, Solana y pagos desde wallets. Para México y LATAM, JugadaMax lo presenta como candidato crypto/offshore orientado a privacidad y registro sencillo; disponibilidad, verificación, límites, bonos y retiros deben revisarse en el sitio oficial.",
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
        "El sitio publica términos sobre pagos, cashouts, anti-fraud policy y responsabilidad del jugador. No es licencia local SEGOB México; revisa términos y disponibilidad regional.",
    },
    bonusIds: ["ethcasino-welcome"],
    // Editorial only — no approved tracking link.
    summary:
      "ETH Casino es un casino crypto con enfoque en Ethereum, stablecoins y juegos en vivo. Para México y LATAM, JugadaMax lo presenta como candidato crypto/offshore; disponibilidad, verificación, límites, bonos y retiros deben revisarse en el sitio oficial.",
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
    // Editorial only — no approved tracking link.
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
        "Licencia informada por el operador para México; revisa términos y condiciones vigentes en el sitio oficial.",
    },
    bonusIds: ["caliente-welcome"],
    // Editorial only — no approved affiliate link yet.
    summary:
      "Casino online y casa de apuestas con enfoque local para México. Destaca por apuestas deportivas, casino, slots, pagos mexicanos y métodos como tarjetas, OXXO/OXXOPay y SPEI según la información publicada por el operador.",
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
        "Licencia informada por el operador para México; revisa términos y condiciones vigentes en el sitio oficial.",
    },
    bonusIds: ["codere-welcome"],
    // Editorial only — partner pending; internal review at /reviews/codere.
    summary:
      "Casa de apuestas y casino online con enfoque local para México. Destaca por apuestas deportivas, fútbol, métodos de pago mexicanos y experiencia orientada a usuarios que prefieren pesos mexicanos frente a casinos crypto/offshore.",
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
        "Licencia informada por el operador para México; revisa términos y condiciones vigentes en el sitio oficial.",
    },
    bonusIds: ["betsson-welcome"],
    // Outbound links resolved on vertical pages via BETSSON_MX_* constants.
    summary:
      "Casino online y casa de apuestas con marca internacional y enfoque para México. Puede encajar para usuarios que buscan apuestas deportivas, casino, slots, pagos locales y una experiencia fiat frente a casinos crypto/offshore.",
    locale: "es-MX",
  },
  {
    id: "500-casino",
    slug: "500-casino",
    name: "500 Casino",
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 6 },
    affiliateUrl: FIVEHUNDRED_CASINO_GLOBAL_AFFILIATE_URL,
    payments: [
      { name: "Bitcoin", kind: "crypto" },
      { name: "Ethereum", kind: "crypto" },
      { name: "USDT", kind: "crypto" },
    ],
    licensing: {
      licenseName: "Licencia no verificada por JugadaMax",
      notes:
        "Licencia, disponibilidad, verificación, límites, bonos y retiros deben revisarse en los términos oficiales del operador.",
    },
    bonusIds: ["500-casino-welcome"],
    summary:
      "500 Casino es un candidato crypto internacional con slots, live casino, sportsbook y promociones visibles. JugadaMax lo presenta como alternativa de comparación por debajo de BetFury; revisa términos, pagos, verificación y jurisdicción antes de registrarte.",
    locale: "es-MX",
  },
  {
    id: "gamdom",
    slug: "gamdom",
    name: "Gamdom",
    logo: {
      src: "/operators/gamdom.svg",
      alt: "Gamdom",
      width: 120,
      height: 48,
    },
    verticals: ["crypto-casino"],
    rankByVertical: {},
    rating: 4.2,
    affiliateUrl: GAMDOM_GLOBAL_AFFILIATE_URL,
    licensing: {
      licenseName: "Licencia no verificada por JugadaMax",
      notes:
        "Gamdom es un operador crypto internacional. JugadaMax no verifica licencia local mexicana, disponibilidad regional, KYC, pagos, retiros ni condiciones promocionales; revisa entidad operadora, restricciones y términos oficiales antes de registrarte.",
    },
    summary:
      "Gamdom es un operador crypto internacional con casino, sportsbook, juegos Originals, Rewards y promociones rotativas. Para usuarios de México/LATAM, JugadaMax lo presenta como una alternativa crypto internacional; disponibilidad, pagos, verificación y promociones dependen de los términos oficiales y de la jurisdicción.",
    locale: "es-MX",
  },
  {
    id: "rainbet",
    slug: "rainbet",
    name: "Rainbet",
    logo: {
      src: "/operators/rainbet.png",
      alt: "Rainbet",
      width: 80,
      height: 40,
    },
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 8 },
    affiliateUrl: RAINBET_REFERRAL_URL,
    payments: [
      { name: "Bitcoin", kind: "crypto" },
      { name: "Ethereum", kind: "crypto" },
      { name: "Litecoin", kind: "crypto" },
      { name: "XRP", kind: "crypto" },
      { name: "Solana", kind: "crypto" },
      { name: "TRX", kind: "crypto" },
      { name: "BNB", kind: "crypto" },
      { name: "USDT", kind: "crypto" },
      { name: "USDC", kind: "crypto" },
    ],
    licensing: {
      licenseName: "Información publicada por el operador (RBGAMING N.V.)",
      notes:
        "Rainbet indica operar como marca de RBGAMING N.V. con dirección en Hamchako, Mustamudu, Isla Autónoma de Anjouan, Unión de Comoros, según información del sitio. JugadaMax no verifica fuerza regulatoria ni disponibilidad para México; revisa términos, jurisdicción, KYC y políticas oficiales antes de registrarte.",
    },
    bonusIds: ["rainbet-promotions"],
    summary:
      "Rainbet es un casino crypto internacional con slots, juegos en vivo, sportsbook y títulos Originals. Puede funcionar como alternativa de comparación para usuarios de México/LATAM que buscan una experiencia centrada en criptomonedas, siempre revisando términos oficiales, disponibilidad regional, KYC y métodos de pago.",
    locale: "es-MX",
  },
  {
    id: "betfury",
    slug: "betfury",
    name: "BetFury",
    logo: {
      src: "/operators/betfury.svg",
      alt: "BetFury",
      width: 80,
      height: 40,
    },
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 1 },
    affiliateUrl: BETFURY_AFFILIATE_URL,
    payments: [
      { name: "BFG", kind: "crypto" },
      { name: "Bitcoin", kind: "crypto" },
      { name: "Ethereum", kind: "crypto" },
      { name: "USDT", kind: "crypto" },
    ],
    licensing: {
      licenseName: "Licencia no verificada por JugadaMax",
      notes:
        "Licencia, disponibilidad, verificación, límites, bonos y retiros deben revisarse en los términos oficiales del operador.",
    },
    bonusIds: ["betfury-welcome"],
    summary:
      "BetFury es un casino crypto gamificado con Bonus Cabinet, Free Spins, cashback, rakeback y promociones por nivel. Para usuarios de México/LATAM, JugadaMax lo presenta como partner crypto destacado; bonos, pagos, verificación y disponibilidad dependen de los términos oficiales y de tu jurisdicción.",
    locale: "es-MX",
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
    rankByVertical: { "fiat-casino": 4, sportsbook: 4 },
    affiliateUrl: ONE_XBET_AFFILIATE_URL,
    payments: [
      { name: "MXN", kind: "fiat" },
      { name: "OXXO", kind: "fiat" },
      { name: "SPEI", kind: "fiat" },
      { name: "Visa", kind: "fiat" },
      { name: "Bitcoin", kind: "crypto" },
    ],
    licensing: {
      licenseName: "Licencia no verificada por JugadaMax",
      notes:
        "Operador internacional mixto (casino + sportsbook). Licencia, disponibilidad, verificación, límites, bonos y retiros deben revisarse en los términos oficiales del operador y de tu jurisdicción.",
    },
    bonusIds: ["1xbet-casino-welcome-package"],
    summary:
      "1xBet es un operador mixto internacional con casino online, casino en vivo, slots y apuestas deportivas en una sola cuenta. Para usuarios de México/LATAM, JugadaMax lo presenta como candidato fiat/sportsbook secundario; revisa paquetes de bienvenida, pagos, verificación y términos oficiales antes de registrarte.",
    locale: "es-MX",
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
    rankByVertical: { "fiat-casino": 5, sportsbook: 5 },
    affiliateUrl: MELBET_AFFILIATE_URL,
    licensing: {
      licenseName: "Licencia no verificada por JugadaMax",
      notes:
        "Operador internacional mixto (casino + sportsbook). Licencia, disponibilidad, verificación, límites, bonos y retiros deben revisarse en los términos oficiales del operador y de tu jurisdicción.",
    },
    bonusIds: ["melbet-sportsbook-welcome"],
    summary:
      "Melbet es un operador mixto internacional con sportsbook, casino online, slots, live casino y fast games en una sola cuenta. Para usuarios de México/LATAM, JugadaMax lo presenta como candidato activo secundario tras Betsson y 1xBet; revisa bonos deportivos, promociones de casino, pagos, verificación y términos oficiales antes de registrarte.",
    locale: "es-MX",
  },
  {
    id: "mellstroy",
    slug: "mellstroy",
    name: "Mellstroy",
    logo: {
      src: "/operators/mellstroy.svg",
      alt: "Mellstroy",
      width: 120,
      height: 48,
    },
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 7 },
    affiliateUrl: MELLSTROY_GLOBAL_AFFILIATE_URL,
    payments: [{ name: "USDT", kind: "crypto" }],
    licensing: {
      licenseName: "Licencia no verificada por JugadaMax",
      notes:
        "Operador internacional de casino y sportsbook. Licencia, entidad operadora, disponibilidad para México/LATAM, verificación, bonos, pagos y retiros deben confirmarse directamente en los términos oficiales.",
    },
    bonusIds: ["mellstroy-welcome"],
    summary:
      "Mellstroy es un casino crypto con slots, live casino, Fortune Wheel, promociones visibles y sportsbook adicional. Para usuarios de México/LATAM, JugadaMax lo mantiene como alternativa internacional de prioridad inferior a sus principales partners crypto; bonos, pagos, verificación y disponibilidad dependen de términos oficiales.",
    locale: "es-MX",
  },
];
