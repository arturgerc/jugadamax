import {
  AWINTURA_CARD_AFFILIATE_URL,
  BETSSON_MX_APUESTAS_URL,
  MELBET_AFFILIATE_URL,
  MELBET_PROMO_CODE,
  MOSTBET_PLAYERS_AFFILIATE_URL,
  MOSTBET_PROMO_CODE,
  ONE_XBET_AFFILIATE_URL,
  ONE_XBET_PROMO_CODE,
  SPORTSBETIO_BETTING_AFFILIATE_URL,
} from "@/lib/affiliate/constants";

export type BettingCardTheme =
  | "betsson"
  | "onexbet"
  | "melbet"
  | "mostbet"
  | "awintura"
  | "sportsbet";

export type BettingTier = "primary" | "secondary";

export type BettingOperatorEntry = {
  operatorId: string;
  name: string;
  badge: string;
  purpose: string;
  summary: string;
  paymentPriority: readonly string[];
  ctaLabel: string;
  ctaHref: string;
  promoCode?: string;
  /** Sports-oriented fallback when no suitable central bonus exists. */
  offerFallback: string;
  /** Clarifies casino vs sportsbook when offers can mix. */
  offerProductNote?: string;
  theme: BettingCardTheme;
  featured?: boolean;
  /** Internal analytics position only — never shown as a public rank. */
  position: number;
  tier: BettingTier;
};

/**
 * Main commercial selection for /apuestas — 3 primary + 3 secondary.
 * Curated editorial grouping (not automatic rating sort).
 * Codere is local-reference only. Caliente is excluded.
 */
export const BETTING_ACTIVE_SIX: readonly BettingOperatorEntry[] = [
  {
    operatorId: "betsson",
    name: "Betsson México",
    badge: "Partner México",
    purpose: "Apuestas con pagos locales",
    summary:
      "Sportsbook y productos mixtos con OXXO, SPEI y tarjetas según disponibilidad del operador en México.",
    paymentPriority: ["OXXO", "SPEI", "Visa", "Mastercard"],
    ctaLabel: "Entrar a Betsson Apuestas",
    ctaHref: BETSSON_MX_APUESTAS_URL,
    offerFallback: "Promociones deportivas según términos vigentes en Betsson MX",
    offerProductNote: "Revisa si la promoción aplica a apuestas o casino.",
    theme: "betsson",
    featured: true,
    position: 1,
    tier: "primary",
  },
  {
    operatorId: "1xbet",
    name: "1xBet",
    badge: "Sportsbook internacional",
    purpose: "Mercados y cuotas amplias",
    summary:
      "Operador mixto internacional con sportsbook y casino. Confirma disponibilidad, cuotas y verificación según tu ubicación.",
    paymentPriority: ["MXN", "OXXO", "SPEI", "Visa", "Bitcoin"],
    ctaLabel: "Visitar 1xBet",
    ctaHref: ONE_XBET_AFFILIATE_URL,
    promoCode: ONE_XBET_PROMO_CODE,
    offerFallback: "Promociones según términos vigentes; confirma si aplican a deportes o casino",
    offerProductNote: "Puede incluir ofertas de casino y deportes.",
    theme: "onexbet",
    position: 2,
    tier: "primary",
  },
  {
    operatorId: "sportsbetio",
    name: "Sportsbet.io",
    badge: "Crypto sportsbook",
    purpose: "Apuestas con crypto",
    summary:
      "Sportsbook crypto internacional con casino adicional. No implica licencia local mexicana; confirma GEO y términos.",
    paymentPriority: ["Bitcoin", "Ethereum", "USDT", "USDC"],
    ctaLabel: "Visitar Sportsbet.io",
    ctaHref: SPORTSBETIO_BETTING_AFFILIATE_URL,
    offerFallback: "Bienvenida Champions según términos (Sports / Casino)",
    offerProductNote: "Wagering y producto dependen de la ruta elegida.",
    theme: "sportsbet",
    position: 3,
    tier: "primary",
  },
  {
    operatorId: "melbet",
    name: "Melbet",
    badge: "Bono deportivo informado",
    purpose: "Paquete de apuestas",
    summary:
      "Sportsbook y casino en una cuenta. Útil para comparar bonos deportivos, cuotas mínimas y rollover publicados.",
    paymentPriority: [],
    ctaLabel: "Visitar Melbet",
    ctaHref: MELBET_AFFILIATE_URL,
    promoCode: MELBET_PROMO_CODE,
    offerFallback: "Bono deportivo según términos vigentes",
    theme: "melbet",
    position: 4,
    tier: "secondary",
  },
  {
    operatorId: "awintura",
    name: "Awintura",
    badge: "Mixto internacional",
    purpose: "Sportsbook y casino",
    summary:
      "Casino, live y sportsbook con métodos fiat y algunas opciones crypto según mercado y términos.",
    paymentPriority: ["Visa", "Mastercard", "Bitcoin", "Tether"],
    ctaLabel: "Visitar Awintura",
    ctaHref: AWINTURA_CARD_AFFILIATE_URL,
    offerFallback: "Hasta $60,000 + 250 FS + 200% freebets según campaña y GEO",
    offerProductNote: "Puede combinar casino y freebets deportivos.",
    theme: "awintura",
    position: 5,
    tier: "secondary",
  },
  {
    operatorId: "mostbet",
    name: "Mostbet",
    badge: "Casino + Sports",
    purpose: "Plataforma mixta",
    summary:
      "Operador internacional con sportsbook y casino. La landing puede ofrecer rutas Casino o Sports según campaña.",
    paymentPriority: ["Visa", "Mastercard", "OXXO", "SPEI", "Bitcoin", "USDT"],
    ctaLabel: "Visitar Mostbet",
    ctaHref: MOSTBET_PLAYERS_AFFILIATE_URL,
    promoCode: MOSTBET_PROMO_CODE,
    offerFallback: "125% + 250 FS según campaña (Casino o Sports)",
    offerProductNote: "Confirma si eliges la ruta de apuestas o casino.",
    theme: "mostbet",
    position: 6,
    tier: "secondary",
  },
] as const;

export const BETTING_PRIMARY = BETTING_ACTIVE_SIX.filter((e) => e.tier === "primary");
export const BETTING_SECONDARY = BETTING_ACTIVE_SIX.filter((e) => e.tier === "secondary");

/** Local editorial reference only — no affiliate CTA. */
export const BETTING_LOCAL_REFERENCE_ID = "codere" as const;

export const BETTING_QUICK_LINKS = [
  { label: "Selección principal", href: "#seleccion-principal" },
  { label: "Más operadores", href: "#operadores-adicionales" },
  { label: "Comparativa", href: "#comparativa-apuestas" },
  { label: "Bonos deportivos", href: "#bonos-deportivos" },
  { label: "Pagos y KYC", href: "#pagos-apuestas" },
  { label: "Metodología", href: "#como-evaluamos-apuestas" },
] as const;

/** Mobile-only subset — keeps the first card higher in the viewport. */
export const BETTING_QUICK_LINKS_MOBILE = [
  { label: "Selección principal", href: "#seleccion-principal" },
  { label: "Comparativa", href: "#comparativa-apuestas" },
  { label: "Bonos deportivos", href: "#bonos-deportivos" },
  { label: "Pagos y KYC", href: "#pagos-apuestas" },
] as const;
