import {
  ONE_XBET_AFFILIATE_URL,
  ONE_XBET_PROMO_CODE,
} from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const ONEXBET_TERMS =
  "Bonos, giros gratis, juegos elegibles, requisitos de apuesta, pagos, retiros, verificación y disponibilidad dependen de los términos oficiales de 1xBet y de tu jurisdicción.";

const ONEXBET_RESPONSIBLE = "18+ | Juega con responsabilidad";

const PROMO_LABEL = `Código promocional: ${ONE_XBET_PROMO_CODE}`;

const PROMO_REGISTRATION_BULLET =
  "Introduce el código durante el registro cuando corresponda";

const ONEXBET_LOGO = {
  src: "/operators/1xbet.svg",
  alt: "1xBet",
  width: 96,
  height: 48,
} as const;

type OneXBetContext = "casino" | "sportsbook" | "bonus" | "review";

export type OneXBetFeaturedCardProps = {
  context: OneXBetContext;
  className?: string;
};

const CASINO_VISUAL = {
  eyebrow: "PAQUETE DE BIENVENIDA",
  title: "Hasta 40,000 MXN + 150 giros gratis",
  subtitle: "Oferta para nuevos usuarios · aplican términos",
  chips: ["Casino", "150 FS", "MXN"],
  variant: "onexbet" as const,
  compact: true,
};

const SPORTSBOOK_VISUAL = {
  eyebrow: "SPORT + CASINO",
  title: "Apuestas deportivas y casino",
  subtitle: PROMO_LABEL,
  chips: ["Liga MX", "Live", "Casino"],
  variant: "onexbet" as const,
  compact: true,
};

const CONTEXT_CONFIG: Record<
  OneXBetContext,
  Omit<OfferCardProps, "operatorName" | "operatorId" | "promoCode" | "responsibleNote">
> = {
  casino: {
    badge: "Casino + apuestas",
    headline: "1xBet MX: casino online y sportsbook",
    subheadline: "Slots, casino en vivo, apuestas y promociones en una sola cuenta",
    offerText: "Paquete de bienvenida: hasta 40,000 MXN + 150 giros gratis",
    paymentBadges: ["MXN", "OXXO", "SPEI", "Visa", "Crypto"],
    featureBullets: [
      "Paquete de bienvenida mostrado para nuevos usuarios",
      "Hasta 40,000 MXN + 150 giros gratis según términos",
      "Slots, casino en vivo y juegos de mesa",
      "Sportsbook incluido en la misma cuenta",
      "Revisa depósitos elegibles, wagering, juegos, límites y vencimiento",
    ],
    primaryCtaLabel: "Ver paquete 1xBet",
    primaryCtaHref: ONE_XBET_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/1xbet",
    termsNote: ONEXBET_TERMS,
    visual: CASINO_VISUAL,
    visualVariant: "mexico",
    mobileMaxBullets: 3,
    className: "mt-4",
  },
  sportsbook: {
    badge: "Sportsbook internacional",
    headline: "1xBet MX para apuestas deportivas",
    subheadline: "Fútbol, Liga MX, apuestas en vivo, eSports y casino",
    offerText: "Bono de primer depósito según términos vigentes",
    paymentBadges: ["Liga MX", "Fútbol", "En vivo", "eSports", "Casino"],
    featureBullets: [
      "Mercados de fútbol y deportes internacionales",
      "Apuestas en vivo y estadísticas durante eventos",
      "eSports y deportes adicionales según disponibilidad",
      "Casino y sportsbook en una misma cuenta",
      "Revisa cuota mínima, rollover, límites, KYC y vigencia",
    ],
    primaryCtaLabel: "Ver apuestas 1xBet",
    primaryCtaHref: ONE_XBET_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/1xbet",
    termsNote: ONEXBET_TERMS,
    visual: SPORTSBOOK_VISUAL,
    visualVariant: "mexico",
    mobileMaxBullets: 3,
    className: "mt-4",
  },
  bonus: {
    badge: "Paquete para nuevos usuarios",
    headline: "Paquete de bienvenida de 1xBet",
    subheadline: "Casino, giros gratis y promociones ligadas a depósitos",
    offerText: "Hasta 40,000 MXN + 150 giros gratis",
    paymentBadges: ["MXN", "Casino", "150 FS"],
    featureBullets: [
      "Oferta mostrada en el registro para nuevos usuarios",
      "El paquete puede estar vinculado a varios depósitos",
      PROMO_REGISTRATION_BULLET,
      "Confirma porcentajes, depósitos elegibles y wagering antes de depositar",
    ],
    primaryCtaLabel: "Ver oferta 1xBet",
    primaryCtaHref: ONE_XBET_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/1xbet",
    termsNote: ONEXBET_TERMS,
    visual: CASINO_VISUAL,
    visualVariant: "mexico",
    mobileMaxBullets: 3,
    className: "mt-4",
  },
  review: {
    badge: "Casino + apuestas",
    headline: "1xBet MX: paquete de bienvenida y sportsbook",
    subheadline: "Promociones para nuevos usuarios según términos oficiales",
    offerText: "Paquete de bienvenida: hasta 40,000 MXN + 150 giros gratis",
    paymentBadges: ["MXN", "OXXO", "SPEI", "Visa"],
    featureBullets: [
      "Paquete de bienvenida mostrado para nuevos usuarios elegibles",
      "Hasta 40,000 MXN + 150 giros gratis según términos",
      PROMO_REGISTRATION_BULLET,
      "Revisa depósitos elegibles, wagering y reglas de retiro",
    ],
    primaryCtaLabel: "Ver paquete 1xBet",
    primaryCtaHref: ONE_XBET_AFFILIATE_URL,
    secondaryCtaLabel: "Ver apuestas deportivas",
    secondaryCtaHref: "/apuestas",
    termsNote: ONEXBET_TERMS,
    visual: CASINO_VISUAL,
    visualVariant: "mexico",
    mobileMaxBullets: 3,
  },
};

/**
 * Unified 1xBet featured offer card — consistent navy/blue identity across
 * casino, sportsbook, bonus and review surfaces.
 */
export function OneXBetFeaturedCard({ context, className }: OneXBetFeaturedCardProps) {
  const config = CONTEXT_CONFIG[context];

  return (
    <OfferCard
      operatorName="1xBet"
      operatorId="1xbet"
      promoCode={ONE_XBET_PROMO_CODE}
      logo={ONEXBET_LOGO}
      responsibleNote={ONEXBET_RESPONSIBLE}
      {...config}
      headingLevel={context === "review" ? "h2" : "h3"}
      className={className ?? config.className}
    />
  );
}
