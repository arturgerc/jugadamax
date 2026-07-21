import type { Casino } from "@/types/content";
import {
  BETFURY_AFFILIATE_URL,
  FIVEHUNDRED_CASINO_GLOBAL_AFFILIATE_URL,
  GAMDOM_GLOBAL_AFFILIATE_URL,
  ONE_XBET_AFFILIATE_URL,
  RAINBET_REFERRAL_URL,
  MELBET_AFFILIATE_URL,
  MELLSTROY_GLOBAL_AFFILIATE_URL,
  AWINTURA_CARD_AFFILIATE_URL,
  MOSTBET_PLAYERS_AFFILIATE_URL,
  SPORTSBETIO_REGISTRATION_AFFILIATE_URL,
  BITCASINO_REGISTRATION_AFFILIATE_URL,
  LTCCASINO_AFFILIATE_URL,
  ETHCASINO_AFFILIATE_URL,
  ANONYMOUS_CASINO_AFFILIATE_URL,
  ROOBET_MX_CASINO_AFFILIATE_URL,
  VODKABET_AFFILIATE_URL,
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
    name: "Anonymous Casino",
    logo: {
      src: "/operators/anonymous.png",
      alt: "Anonymous Casino",
      width: 180,
      height: 56,
    },
    verticals: ["crypto-casino"],
    rankByVertical: {},
    affiliateUrl: ANONYMOUS_CASINO_AFFILIATE_URL,
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
      licenseName:
        "Sin licencia de juego verificada independientemente por JugadaMax",
      notes:
        "Anonymous Casino opera públicamente en CryptoCasino.CC como casino crypto internacional sin KYC. JugadaMax no confirma licencia local mexicana ni una licencia offshore vigente. Revisa Terms, jurisdicción, límites, controles antifraude y políticas actuales después del redirect.",
    },
    bonusIds: [],
    summary:
      "Anonymous Casino, disponible en CryptoCasino.CC, es un casino crypto orientado a privacidad y registro sin KYC. El formulario público utiliza email y contraseña y admite BTC, ETH, XRP, USDT, SOL, DOGE, USDC y LTC. Su propuesta principal es acceso sencillo, crypto games, slots y live casino, no un bono garantizado.",
    locale: "es-MX",
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
    affiliateUrl: ETHCASINO_AFFILIATE_URL,
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
      licenseName:
        "Sin licencia de juego verificada independientemente por JugadaMax",
      notes:
        "ETH Casino se presenta como casino crypto internacional sin KYC. JugadaMax no confirma licencia local mexicana ni una licencia internacional vigente. Revisa términos, jurisdicción, límites, controles antifraude y políticas actuales después del redirect.",
    },
    bonusIds: [],
    summary:
      "ETH Casino es un casino crypto centrado en Ethereum y una política pública sin KYC. El registro descrito utiliza email y contraseña, y el operador acepta ETH, BTC, USDT y otras criptomonedas. Su propuesta principal es privacidad, pagos desde wallets, slots, juegos crypto y live casino, no bonos de bienvenida.",
    locale: "es-MX",
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
    affiliateUrl: LTCCASINO_AFFILIATE_URL,
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
      licenseName:
        "Licencia declarada por el operador — no verificada independientemente por JugadaMax",
      notes:
        "LTC Casino se presenta como casino crypto internacional. JugadaMax no confirma una licencia local mexicana ni garantiza el estado vigente de una licencia offshore. Revisa footer, términos, jurisdicción, límites y políticas actuales después del redirect.",
    },
    bonusIds: [],
    summary:
      "LTC Casino es un casino crypto orientado a privacidad y registro sin KYC según su FAQ público. Permite registrarse con email y contraseña y acepta Litecoin, Bitcoin, Ethereum, USDT y otras criptomonedas. No se promociona como casino de bonos: su propuesta principal es acceso sencillo, juegos crypto y pagos desde wallets.",
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
    id: "roobet",
    slug: "roobet",
    name: "Roobet",
    logo: {
      src: "/operators/roobet.svg",
      alt: "Roobet",
      width: 120,
      height: 48,
    },
    verticals: ["crypto-casino"],
    rankByVertical: {},
    rating: 4.1,
    affiliateUrl: ROOBET_MX_CASINO_AFFILIATE_URL,
    payments: [
      { name: "Bitcoin", kind: "crypto" },
      { name: "Ethereum", kind: "crypto" },
      { name: "USDT", kind: "crypto" },
      { name: "USDC", kind: "crypto" },
      { name: "Litecoin", kind: "crypto" },
      { name: "XRP", kind: "crypto" },
    ],
    licensing: {
      licenseName: "Curaçao / Anjouan — verificar términos vigentes",
      notes:
        "Fuentes externas identifican a Raw Entertainment B.V. y licencias de Curaçao y Anjouan. JugadaMax recomienda confirmar la entidad, los números de licencia, restricciones regionales, KYC y políticas vigentes directamente en Roobet antes de registrarte.",
    },
    summary:
      "Roobet es un casino crypto internacional con slots, live casino, sportsbook, promociones rotativas y campañas VIP. Para usuarios de México, JugadaMax lo presenta como candidato internacional de comparación; la disponibilidad, promociones, pagos, KYC y retiros dependen de los términos oficiales y de la jurisdicción.",
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
    id: "awintura",
    slug: "awintura",
    name: "Awintura",
    logo: {
      src: "/operators/awintura.svg",
      alt: "Awintura",
      width: 120,
      height: 48,
    },
    verticals: ["fiat-casino", "sportsbook"],
    rankByVertical: {},
    rating: 4.1,
    affiliateUrl: AWINTURA_CARD_AFFILIATE_URL,
    payments: [
      { name: "Visa", kind: "fiat" },
      { name: "Mastercard", kind: "fiat" },
      { name: "Bitcoin", kind: "crypto" },
      { name: "Tether", kind: "crypto" },
      { name: "Binance Pay", kind: "crypto" },
    ],
    licensing: {
      licenseName: "Curaçao — OGL/2024/686/0183",
      notes:
        "Awintura is operated by Wiraon B.V. (registration 146886). Briantie Limited (HE 385770) acts as payment agent. This is not a local Mexican licence. Availability, payments, sportsbook access and promotions depend on jurisdiction and account.",
    },
    bonusIds: ["awintura-welcome"],
    summary:
      "Awintura es un operador internacional mixto con casino, slots, live casino, juegos de mesa, promociones, sportsbook, VIP y funciones de gamificación. Admite métodos fiat y algunas opciones crypto según país y cuenta. La campaña JugadaMax muestra hasta $60,000, 250 FS y 200% freebets según términos.",
    locale: "es-MX",
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
    rating: 3.8,
    affiliateUrl: MOSTBET_PLAYERS_AFFILIATE_URL,
    payments: [
      { name: "Visa", kind: "fiat" },
      { name: "Mastercard", kind: "fiat" },
      { name: "OXXO", kind: "fiat" },
      { name: "SPEI", kind: "fiat" },
      { name: "Bitcoin", kind: "crypto" },
      { name: "USDT", kind: "crypto" },
    ],
    licensing: {
      licenseName: "Curaçao — confirmar licencia vigente en términos oficiales",
      notes:
        "Fuentes externas identifican a Bizbon N.V. y la licencia OGL/2024/597/0249 de Curaçao. Esto no equivale a licencia local mexicana. Verifica entidad, licencia, restricciones, KYC y términos actuales directamente en Mostbet.",
    },
    bonusIds: ["mostbet-first-deposit"],
    summary:
      "Mostbet es un operador internacional mixto con sportsbook, casino, live casino, poker, esports y juegos instantáneos. La landing afiliada muestra 125% + 250 FS para el primer depósito con selección Casino o Sports. La moneda, condiciones, pagos y disponibilidad dependen de la cuenta, GEO y términos vigentes.",
    locale: "es-MX",
  },
  {
    id: "sportsbetio",
    slug: "sportsbet-io",
    name: "Sportsbet.io",
    logo: {
      src: "/operators/sportsbet.svg",
      alt: "Sportsbet.io",
      width: 120,
      height: 48,
    },
    verticals: ["crypto-casino", "sportsbook"],
    rankByVertical: {},
    rating: 4.0,
    affiliateUrl: SPORTSBETIO_REGISTRATION_AFFILIATE_URL,
    payments: [
      { name: "Bitcoin", kind: "crypto" },
      { name: "Ethereum", kind: "crypto" },
      { name: "USDT", kind: "crypto" },
      { name: "USDC", kind: "crypto" },
      { name: "Litecoin", kind: "crypto" },
      { name: "XRP", kind: "crypto" },
    ],
    licensing: {
      licenseName: "Curaçao — OGL/2023/110/0072",
      notes:
        "Sportsbet.io es operado por mBet Solutions N.V. bajo supervisión de Curaçao Gaming Authority. mProcessing Solutions Ltd gestiona algunos métodos de pago. Esto no equivale a licencia local mexicana. Revisa restricciones, KYC, promociones y términos vigentes.",
    },
    bonusIds: ["sportsbetio-champions-welcome"],
    summary:
      "Sportsbet.io es un sportsbook crypto internacional con casino, live casino, slots, Originals, torneos y VIP. El Champions Welcome Bonus publicado ofrece 100% hasta 300 USDT para Sports o Casino, sujeto a depósito mínimo, wagering, cuenta, GEO y términos oficiales.",
    locale: "es-MX",
  },
  {
    id: "bitcasino",
    slug: "bitcasino",
    name: "Bitcasino.io",
    logo: {
      src: "/operators/bitcasino.svg",
      alt: "Bitcasino.io",
      width: 120,
      height: 48,
    },
    verticals: ["crypto-casino"],
    rankByVertical: {},
    rating: 4.0,
    affiliateUrl: BITCASINO_REGISTRATION_AFFILIATE_URL,
    payments: [
      { name: "Bitcoin", kind: "crypto" },
      { name: "Ethereum", kind: "crypto" },
      { name: "USDT", kind: "crypto" },
      { name: "TRX", kind: "crypto" },
    ],
    licensing: {
      licenseName: "Curaçao — OGL/2023/111/0069",
      notes:
        "Bitcasino.io es operado por Moon Technologies B.V. bajo licencia Curaçao Gaming Authority OGL/2023/111/0069 según información oficial publicada. Esto no equivale a licencia local mexicana. Verifica entidad, licencia vigente, restricciones, KYC y términos actuales.",
    },
    bonusIds: ["bitcasino-three-deposit-welcome"],
    summary:
      "Bitcasino.io es un casino crypto internacional con slots, live casino, Originals, jackpots y promociones. La campaña suministrada anuncia hasta 5,000 USDT repartidos en tres bonos de depósito, sujeto a cuenta, GEO, wagering y términos oficiales.",
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
  {
    id: "bcgame",
    slug: "bcgame",
    name: "BC.Game",
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 9 },
    payments: [
      { name: "Bitcoin", kind: "crypto" },
      { name: "Ethereum", kind: "crypto" },
      { name: "USDT", kind: "crypto" },
    ],
    licensing: {
      licenseName: "Licencia internacional (según fuentes externas)",
      notes:
        "Fuentes externas identifican a Twocent Technology Limited y licencia de Anjouan. No equivale a licencia local mexicana. Verifica entidad, licencia vigente y restricciones en el sitio oficial.",
    },
    summary:
      "BC.Game es un casino crypto internacional con slots, live casino, crash, Originals y sportsbook. JugadaMax lo incluye como comparación editorial sin campaña afiliada para México; pagos, KYC, bonos y retiros dependen de términos oficiales.",
    locale: "es-MX",
  },
  {
    id: "vodkabet",
    slug: "vodka-bet",
    name: "Vodka.bet",
    logo: {
      src: "/operators/vodkabet.svg",
      alt: "Vodka.bet",
      width: 120,
      height: 48,
    },
    verticals: ["crypto-casino"],
    rankByVertical: {},
    rating: 3.6,
    affiliateUrl: VODKABET_AFFILIATE_URL,
    payments: [{ name: "Crypto", kind: "crypto" }],
    licensing: {
      licenseName: "Licencia no verificada por JugadaMax",
      notes:
        "Vodka.bet se presenta como operador internacional. JugadaMax no ha verificado una licencia mexicana ni una entidad operadora local. Revisa licencia publicada, jurisdicción, KYC, pagos, límites y términos directamente en el operador.",
    },
    bonusIds: ["vodkabet-welcome"],
    summary:
      "Vodka.bet es un casino internacional con slots, live casino, juegos de mesa, jackpots y sportsbook adicional. La campaña JUGADAMAX muestra 125% en el primer depósito, hasta 300 FS, un extra para depósitos crypto y free spins vinculados a Telegram, todo sujeto a términos, elegibilidad y jurisdicción.",
    locale: "es-MX",
  },
];
