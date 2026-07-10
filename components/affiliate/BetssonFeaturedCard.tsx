import {
  BETSSON_MX_APUESTAS_URL,
  BETSSON_MX_CASINO_WELCOME_URL,
  BETSSON_MX_HOME_URL,
} from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const BETSSON_LOGO = {
  src: "/operators/betsson.svg",
  alt: "Betsson",
  width: 80,
  height: 40,
} as const;

const BETSSON_RESPONSIBLE_NOTE = "18+ | Juega con responsabilidad";

const BETSSON_TERMS_CASINO =
  "Promoción publicada por Betsson MX. Bonos, giros, métodos de pago, verificación y retiros dependen de los términos oficiales del operador y de tu jurisdicción.";

const BETSSON_TERMS_GENERAL =
  "Bonos, métodos de pago, verificación y retiros dependen de los términos oficiales de Betsson MX y de tu jurisdicción.";

const CASINO_VISUAL_PANEL = {
  eyebrow: "Casino welcome offer",
  title: "Hasta $15,000 MXN + 200 giros gratis",
  subtitle: "+25 giros extra en la app",
  variant: "betsson" as const,
};

const SPORTSBOOK_VISUAL_PANEL = {
  eyebrow: "Sportsbook MX",
  title: "Apuestas deportivas + casino",
  subtitle: "Mercados y promociones según términos",
  chips: ["Liga MX", "Fútbol", "OXXO", "SPEI"],
  variant: "betsson" as const,
};

const SPORTSBOOK_BADGE_CLASS =
  "border-emerald-500/30 bg-emerald-500/10 text-emerald-400";

type BetssonContext = "homepage" | "fiat" | "sportsbook";

export type BetssonFeaturedCardProps = {
  context: BetssonContext;
  className?: string;
};

const CONTEXT_CONFIG: Record<
  BetssonContext,
  Omit<
    OfferCardProps,
    "operatorName" | "operatorId" | "logo" | "visualVariant" | "responsibleNote"
  >
> = {
  homepage: {
    badge: "Oferta fiat destacada",
    headline: "Betsson MX: bono de casino y pagos locales",
    subheadline: "Casino online y apuestas para usuarios de México",
    offerText: "Hasta $15,000 MXN + 200 giros gratis",
    paymentBadges: ["Visa", "Mastercard", "OXXO", "SPEI"],
    featureBullets: [
      "Promoción de bienvenida publicada por Betsson MX",
      "+25 giros gratis extra si usas la app, según términos oficiales",
      "Pagos locales como OXXO y SPEI según términos",
      "Revisa requisitos de apuesta, límites y elegibilidad",
    ],
    primaryCtaLabel: "Ver bono Betsson",
    primaryCtaHref: BETSSON_MX_CASINO_WELCOME_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/betsson",
    termsNote: BETSSON_TERMS_CASINO,
    visual: {
      ...CASINO_VISUAL_PANEL,
      chips: ["OXXO", "SPEI", "Visa", "Mastercard"],
    },
    mobileMaxBullets: 3,
    className: "mb-4 p-4 sm:p-5",
  },
  fiat: {
    badge: "Partner fiat aprobado",
    headline: "Betsson MX: casino online y pagos locales",
    subheadline: "Casino, bonos y métodos de pago para usuarios de México",
    offerText: "Hasta $15,000 MXN + 200 giros gratis",
    paymentBadges: ["Visa", "Mastercard", "OXXO", "SPEI"],
    featureBullets: [
      "Casino online y apuestas deportivas",
      "Métodos de pago populares en México",
      "Promoción de bienvenida según términos oficiales",
      "Revisa bonos, límites y verificación antes de registrarte",
    ],
    primaryCtaLabel: "Entrar a Betsson MX",
    primaryCtaHref: BETSSON_MX_HOME_URL,
    secondaryCtaLabel: "Ver bono Betsson",
    secondaryCtaHref: BETSSON_MX_CASINO_WELCOME_URL,
    tertiaryCtaLabel: "Leer reseña",
    tertiaryCtaHref: "/reviews/betsson",
    termsNote: BETSSON_TERMS_GENERAL,
    visual: {
      ...CASINO_VISUAL_PANEL,
      chips: ["OXXO", "SPEI", "Visa"],
    },
    className: "mt-4",
  },
  sportsbook: {
    badge: "Sportsbook MX",
    badgeClassName: SPORTSBOOK_BADGE_CLASS,
    headline: "Betsson MX para apuestas deportivas",
    subheadline: "Casino y sportsbook en una sola cuenta",
    offerText: "Apuestas deportivas y casino en una sola cuenta",
    paymentBadges: ["Liga MX", "Fútbol", "OXXO", "SPEI", "Visa"],
    featureBullets: [
      "Apuestas deportivas y casino online",
      "Mercados de fútbol y deportes populares",
      "Métodos de pago locales según términos",
      "Revisa bonos, límites y verificación",
    ],
    primaryCtaLabel: "Ver apuestas en Betsson MX",
    primaryCtaHref: BETSSON_MX_APUESTAS_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/betsson",
    termsNote: BETSSON_TERMS_GENERAL,
    visual: SPORTSBOOK_VISUAL_PANEL,
    className: "mt-4",
  },
};

/**
 * Unified Betsson featured offer card — consistent navy/orange/gold identity
 * across homepage, fiat and sportsbook surfaces with context-specific copy.
 */
export function BetssonFeaturedCard({ context, className }: BetssonFeaturedCardProps) {
  const config = CONTEXT_CONFIG[context];

  return (
    <OfferCard
      operatorName="Betsson"
      operatorId="betsson"
      logo={BETSSON_LOGO}
      visualVariant="fiat"
      responsibleNote={BETSSON_RESPONSIBLE_NOTE}
      {...config}
      className={className ?? config.className}
    />
  );
}
