import {
  AWINTURA_CARD_AFFILIATE_URL,
  BETSSON_MX_HOME_URL,
  MELBET_AFFILIATE_URL,
  MELBET_PROMO_CODE,
  MOSTBET_PLAYERS_AFFILIATE_URL,
  MOSTBET_PROMO_CODE,
  ONE_XBET_AFFILIATE_URL,
  ONE_XBET_PROMO_CODE,
} from "@/lib/affiliate/constants";

export type FiatCardTheme =
  | "betsson"
  | "onexbet"
  | "mostbet"
  | "awintura"
  | "melbet";

export type FiatTopEntry = {
  operatorId: string;
  name: string;
  badge: string;
  purpose: string;
  summary: string;
  /** Preferred fiat payment names when present in central data. */
  paymentPriority: readonly string[];
  ctaLabel: string;
  ctaHref: string;
  promoCode?: string;
  offerFallback: string;
  theme: FiatCardTheme;
  featured?: boolean;
  position: number;
};

/** Main TOP-5 fiat recommendations — shared by ranking and comparison. */
export const FIAT_TOP_FIVE: readonly FiatTopEntry[] = [
  {
    operatorId: "betsson",
    name: "Betsson México",
    badge: "TOP FIAT MÉXICO",
    purpose: "Pagos locales y casino",
    summary:
      "Casino, live casino y apuestas con OXXO, SPEI, tarjetas y métodos tradicionales según disponibilidad.",
    paymentPriority: ["OXXO", "SPEI", "Visa", "Mastercard"],
    ctaLabel: "Entrar a Betsson MX",
    ctaHref: BETSSON_MX_HOME_URL,
    offerFallback: "Hasta $15,000 MXN + 200 giros gratis",
    theme: "betsson",
    featured: true,
    position: 1,
  },
  {
    operatorId: "1xbet",
    name: "1xBet México",
    badge: "CASINO + APUESTAS",
    purpose: "Paquete de casino",
    summary: "Casino online, slots, live casino y sportsbook dentro de una sola cuenta.",
    paymentPriority: ["MXN", "OXXO", "SPEI", "Visa"],
    ctaLabel: "Ver paquete 1xBet",
    ctaHref: ONE_XBET_AFFILIATE_URL,
    promoCode: ONE_XBET_PROMO_CODE,
    offerFallback: "Hasta 40,000 MXN + 150 giros gratis según términos",
    theme: "onexbet",
    position: 2,
  },
  {
    operatorId: "mostbet",
    name: "Mostbet",
    badge: "CASINO + SPORTS",
    purpose: "Casino, apuestas y aplicación",
    summary:
      "Casino, live casino, slots, poker, esports y sportsbook dentro de una plataforma internacional.",
    paymentPriority: ["Visa", "Mastercard", "OXXO", "SPEI"],
    ctaLabel: "Visitar Mostbet",
    ctaHref: MOSTBET_PLAYERS_AFFILIATE_URL,
    promoCode: MOSTBET_PROMO_CODE,
    offerFallback: "125% + 250 FS según campaña",
    theme: "mostbet",
    position: 3,
  },
  {
    operatorId: "awintura",
    name: "Awintura",
    badge: "CASINO MIXTO",
    purpose: "Casino, live y sportsbook",
    summary:
      "Casino, slots, live casino, mesas y sportsbook con métodos fiat y algunas opciones crypto según mercado.",
    paymentPriority: ["Visa", "Mastercard"],
    ctaLabel: "Visitar Awintura",
    ctaHref: AWINTURA_CARD_AFFILIATE_URL,
    offerFallback: "Hasta $60,000 + 250 FS + 200% freebets según campaña y GEO",
    theme: "awintura",
    position: 4,
  },
  {
    operatorId: "melbet",
    name: "Melbet",
    badge: "CASINO + APUESTAS",
    purpose: "Casino, live y fast games",
    summary:
      "Casino online, slots, live casino, fast games y sportsbook dentro de una sola cuenta.",
    paymentPriority: [],
    ctaLabel: "Visitar casino Melbet",
    ctaHref: MELBET_AFFILIATE_URL,
    promoCode: MELBET_PROMO_CODE,
    offerFallback: "Promociones de casino según términos vigentes",
    theme: "melbet",
    position: 5,
  },
] as const;

export const FIAT_LOCAL_REFERENCE_IDS = ["caliente", "codere"] as const;
