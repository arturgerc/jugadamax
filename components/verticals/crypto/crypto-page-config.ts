import {
  ANONYMOUS_CASINO_AFFILIATE_URL,
  BETFURY_AFFILIATE_URL,
  BETFURY_PROMO_CODE,
  BCGAME_MX_OFFICIAL_URL,
  BITCASINO_REGISTRATION_AFFILIATE_URL,
  ETHCASINO_AFFILIATE_URL,
  FIVEHUNDRED_CASINO_GLOBAL_AFFILIATE_URL,
  GAMDOM_GLOBAL_AFFILIATE_URL,
  LTCCASINO_AFFILIATE_URL,
  MELLSTROY_GLOBAL_AFFILIATE_URL,
  MELLSTROY_PROMO_CODE,
  RAINBET_REFERRAL_URL,
  ROOBET_MX_CASINO_AFFILIATE_URL,
  SPORTSBETIO_REGISTRATION_AFFILIATE_URL,
  STAKE_MX_OFFICIAL_URL,
  VODKABET_AFFILIATE_URL,
  VODKABET_PROMO_CODE,
} from "@/lib/affiliate/constants";

export type CryptoCardTheme =
  | "anonymous"
  | "bitcasino"
  | "ltccasino"
  | "ethcasino"
  | "sportsbetio"
  | "roobet"
  | "betfury"
  | "vodkabet"
  | "mellstroy";

export type CryptoTopEntry = {
  operatorId: string;
  name: string;
  secondaryName?: string;
  badge: string;
  purpose: string;
  summary: string;
  chips: readonly string[];
  kycLabel: string;
  ctaLabel: string;
  ctaHref: string;
  reviewHref: string;
  theme: CryptoCardTheme;
  featured?: boolean;
  position: number;
};

export type CryptoPromoTheme = "betfury" | "vodkabet" | "mellstroy";

export type CryptoPromoEntry = {
  operatorId: string;
  offerTitle: string;
  promoCode: string;
  chips: readonly [string, string, string];
  termsLine: string;
  ctaLabel: string;
  ctaHref: string;
  reviewHref: string;
  theme: CryptoPromoTheme;
  position: number;
};

export type CryptoSecondaryEntry = {
  operatorId: string;
  label: string;
  badge: string;
  ctaLabel: string;
  ctaHref: string;
  reviewHref: string;
  affiliate: boolean;
  position: number;
};

/** Main TOP-6 crypto recommendations — shared by ranking and comparison. */
export const CRYPTO_TOP_SIX: readonly CryptoTopEntry[] = [
  {
    operatorId: "cryptocasino",
    name: "Anonymous Casino",
    secondaryName: "CryptoCasino.CC",
    badge: "TOP CRIPTO SIN KYC",
    purpose: "Privacidad y cripto",
    summary:
      "Registro con email y contraseña, política pública sin KYC, slots, juegos cripto y live casino.",
    chips: ["Sin KYC", "BTC / ETH", "Juegos cripto"],
    kycLabel: "Sin KYC según operador",
    ctaLabel: "Registrarse",
    ctaHref: ANONYMOUS_CASINO_AFFILIATE_URL,
    reviewHref: "/reviews/cryptocasino",
    theme: "anonymous",
    featured: true,
    position: 1,
  },
  {
    operatorId: "bitcasino",
    name: "Bitcasino.io",
    badge: "CASINO CRIPTO",
    purpose: "Casino, Originals y live",
    summary:
      "Slots, Originals, jackpots, promociones y casino en vivo para usuarios de criptomonedas.",
    chips: ["BTC / USDT", "Originals", "Live Casino"],
    kycLabel: "Verificación según términos",
    ctaLabel: "Visitar Bitcasino",
    ctaHref: BITCASINO_REGISTRATION_AFFILIATE_URL,
    reviewHref: "/reviews/bitcasino",
    theme: "bitcasino",
    position: 2,
  },
  {
    operatorId: "ltccasino",
    name: "LTC Casino",
    badge: "LITECOIN SIN KYC",
    purpose: "Privacidad y Litecoin",
    summary: "Casino cripto orientado a Litecoin, registro por email y política pública sin KYC.",
    chips: ["Sin KYC", "LTC", "Solo cripto"],
    kycLabel: "Sin KYC según operador",
    ctaLabel: "Registrarse",
    ctaHref: LTCCASINO_AFFILIATE_URL,
    reviewHref: "/reviews/ltccasino",
    theme: "ltccasino",
    position: 3,
  },
  {
    operatorId: "ethcasino",
    name: "ETH Casino",
    badge: "ETHEREUM SIN KYC",
    purpose: "Ethereum y privacidad",
    summary: "Ethereum-first, registro por email, slots, juegos cripto y política pública sin KYC.",
    chips: ["Sin KYC", "ETH", "Live Casino"],
    kycLabel: "Sin KYC según operador",
    ctaLabel: "Registrarse",
    ctaHref: ETHCASINO_AFFILIATE_URL,
    reviewHref: "/reviews/ethcasino",
    theme: "ethcasino",
    position: 4,
  },
  {
    operatorId: "sportsbetio",
    name: "Sportsbet.io",
    badge: "CASINO CRIPTO + DEPORTES",
    purpose: "Casino y sportsbook",
    summary: "Sportsbook cripto, live betting, slots, Originals y casino en vivo.",
    chips: ["USDT", "Sports", "Casino"],
    kycLabel: "Verificación según términos",
    ctaLabel: "Visitar Sportsbet.io",
    ctaHref: SPORTSBETIO_REGISTRATION_AFFILIATE_URL,
    reviewHref: "/reviews/sportsbet-io",
    theme: "sportsbetio",
    position: 5,
  },
  {
    operatorId: "roobet",
    name: "Roobet",
    badge: "CRIPTO + SPORTSBOOK",
    purpose: "Casino, promociones y sportsbook",
    summary: "Slots, live casino, Originals, promociones rotativas y apuestas en una cuenta.",
    chips: ["Cripto", "Casino", "Sportsbook"],
    kycLabel: "Verificación según términos",
    ctaLabel: "Visitar Roobet",
    ctaHref: ROOBET_MX_CASINO_AFFILIATE_URL,
    reviewHref: "/reviews/roobet",
    theme: "roobet",
    position: 6,
  },
] as const;

export const CRYPTO_PROMOTIONS: readonly CryptoPromoEntry[] = [
  {
    operatorId: "betfury",
    offerTitle: "Hasta 590% + Free Spins según términos oficiales",
    promoCode: BETFURY_PROMO_CODE,
    chips: ["Bonus Cabinet", "Free Spins", "Cashback"],
    termsLine:
      "Porcentajes, free spins, cashback, wagering y elegibilidad dependen de los términos oficiales.",
    ctaLabel: "Ver oferta BetFury",
    ctaHref: BETFURY_AFFILIATE_URL,
    reviewHref: "/reviews/betfury",
    theme: "betfury",
    position: 1,
  },
  {
    operatorId: "vodkabet",
    offerTitle: "125% + hasta 300 FS según campaña",
    promoCode: VODKABET_PROMO_CODE,
    chips: ["125%", "300 FS", "Cripto"],
    termsLine:
      "Importe, free spins, depósito mínimo, wagering, juegos y elegibilidad dependen de la campaña y términos.",
    ctaLabel: "Ver oferta Vodka.bet",
    ctaHref: VODKABET_AFFILIATE_URL,
    reviewHref: "/reviews/vodka-bet",
    theme: "vodkabet",
    position: 2,
  },
  {
    operatorId: "mellstroy",
    offerTitle: "Hasta 660% + 400 FS según campaña vigente",
    promoCode: MELLSTROY_PROMO_CODE,
    chips: ["Cripto", "400 FS", "Fortune Wheel"],
    termsLine:
      "Bonos, free spins, pagos, KYC, juegos, disponibilidad y wagering dependen de la campaña y términos.",
    ctaLabel: "Ver oferta Mellstroy",
    ctaHref: MELLSTROY_GLOBAL_AFFILIATE_URL,
    reviewHref: "/reviews/mellstroy",
    theme: "mellstroy",
    position: 3,
  },
] as const;

export const CRYPTO_INTERNATIONAL_ALTERNATIVES: readonly CryptoSecondaryEntry[] = [
  {
    operatorId: "500-casino",
    label: "Casino cripto, slots y sportsbook",
    badge: "Cobertura internacional",
    ctaLabel: "Visitar",
    ctaHref: FIVEHUNDRED_CASINO_GLOBAL_AFFILIATE_URL,
    reviewHref: "/reviews/500-casino",
    affiliate: true,
    position: 1,
  },
  {
    operatorId: "gamdom",
    label: "Casino cripto, Originals y sportsbook",
    badge: "Cobertura internacional",
    ctaLabel: "Visitar",
    ctaHref: GAMDOM_GLOBAL_AFFILIATE_URL,
    reviewHref: "/reviews/gamdom",
    affiliate: true,
    position: 2,
  },
  {
    operatorId: "rainbet",
    label: "Casino cripto, rewards y sportsbook",
    badge: "Cobertura internacional",
    ctaLabel: "Visitar",
    ctaHref: RAINBET_REFERRAL_URL,
    reviewHref: "/reviews/rainbet",
    affiliate: true,
    position: 3,
  },
] as const;

export const CRYPTO_EDITORIAL_REFERENCES: readonly CryptoSecondaryEntry[] = [
  {
    operatorId: "stake",
    label: "Casino cripto y sportsbook",
    badge: "Referencia editorial",
    ctaLabel: "Ver sitio oficial México",
    ctaHref: STAKE_MX_OFFICIAL_URL,
    reviewHref: "/reviews/stake",
    affiliate: false,
    position: 1,
  },
  {
    operatorId: "bcgame",
    label: "Casino cripto, Originals y sportsbook",
    badge: "Referencia editorial",
    ctaLabel: "Ver sitio oficial BC.Game MX",
    ctaHref: BCGAME_MX_OFFICIAL_URL,
    reviewHref: "/reviews/bcgame",
    affiliate: false,
    position: 2,
  },
] as const;

export const CRYPTO_NO_KYC_CROSSLINK_IDS = [
  "cryptocasino",
  "ethcasino",
  "ltccasino",
] as const;
