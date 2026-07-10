import { MELLSTROY_GLOBAL_AFFILIATE_URL } from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const MELLSTROY_TERMS =
  "Bonos, porcentajes, free spins, cashback, premios, juegos elegibles, pagos, retiros, verificación y disponibilidad dependen de los términos oficiales de Mellstroy y de tu jurisdicción.";

const MELLSTROY_RESPONSIBLE = "18+ | Juega con responsabilidad";

const MELLSTROY_LOGO = {
  src: "/operators/mellstroy.svg",
  alt: "Mellstroy",
  width: 120,
  height: 48,
} as const;

type MellstroyContext = "crypto" | "bonus" | "review";

export type MellstroyFeaturedCardProps = {
  context: MellstroyContext;
  className?: string;
};

const CONTEXT_CONFIG: Record<
  MellstroyContext,
  Omit<OfferCardProps, "operatorName" | "operatorId" | "responsibleNote" | "logo">
> = {
  crypto: {
    badge: "Casino crypto",
    headline: "Mellstroy: casino crypto, bonos y promociones",
    subheadline: "Slots, live casino, pagos crypto y sportsbook adicional",
    offerText: "Hasta 660% + 400 FS según promoción vigente",
    paymentBadges: ["USDT", "Crypto", "Casino", "Sportsbook"],
    featureBullets: [
      "Página de promociones: hasta 660% + 400 FS",
      "Otra creatividad de registro muestra 550% + 400 FS",
      "Cashback de hasta 30% según promoción",
      "20 FS por verificar el teléfono según elegibilidad",
      "Slots, live casino, Fortune Wheel y sportsbook adicional",
    ],
    primaryCtaLabel: "Ver oferta Mellstroy",
    primaryCtaHref: MELLSTROY_GLOBAL_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/mellstroy",
    termsNote: MELLSTROY_TERMS,
    visual: {
      eyebrow: "WELCOME BONUS",
      title: "Hasta 660% + 400 FS",
      subtitle: "La oferta puede variar por campaña y términos",
      chips: ["Crypto", "400 FS", "Cashback"],
      variant: "mellstroy",
      compact: true,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 3,
  },
  bonus: {
    badge: "Promociones crypto",
    headline: "Mellstroy: bono de bienvenida y recompensas",
    subheadline: "Free spins, cashback, wheel y promociones activas",
    offerText: "Hasta 660% + 400 FS según promoción vigente",
    paymentBadges: ["Crypto", "Free Spins", "Cashback"],
    featureBullets: [
      "Página de promociones: hasta 660% + 400 FS",
      "Creatividad de registro suministrada: 550% + 400 FS",
      "Hasta 30% cashback visible en la promoción",
      "20 FS por verificación telefónica según elegibilidad",
      "Free spins semanales y Lucky Wheel según términos",
    ],
    primaryCtaLabel: "Ver promociones Mellstroy",
    primaryCtaHref: MELLSTROY_GLOBAL_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/mellstroy",
    termsNote: MELLSTROY_TERMS,
    visual: {
      eyebrow: "CASINO PROMOS",
      title: "Hasta 660% + 400 FS",
      subtitle: "Confirma la oferta activa durante el registro",
      chips: ["400 FS", "Cashback", "Wheel"],
      variant: "mellstroy",
      compact: true,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 3,
    className: "mt-4",
  },
  review: {
    badge: "Casino crypto",
    headline: "Mellstroy: casino crypto, bonos y promociones",
    subheadline: "Slots, live casino, pagos crypto y sportsbook adicional",
    offerText: "Hasta 660% + 400 FS según promoción vigente",
    paymentBadges: ["USDT", "Casino", "Sportsbook", "Free Spins"],
    featureBullets: [
      "Casino, sport, live casino y Fortune Wheel",
      "Promoción principal visible de hasta 660% + 400 FS",
      "Cashback, free spins y promociones adicionales",
      "Revisa wagering, elegibilidad, KYC y disponibilidad",
    ],
    primaryCtaLabel: "Ver oferta Mellstroy",
    primaryCtaHref: MELLSTROY_GLOBAL_AFFILIATE_URL,
    secondaryCtaLabel: "Comparar casinos crypto",
    secondaryCtaHref: "/casinos-crypto",
    termsNote: MELLSTROY_TERMS,
    visual: {
      eyebrow: "MELLSTROY CASINO",
      title: "Hasta 660% + 400 FS",
      subtitle: "Promoción variable según campaña",
      chips: ["Crypto", "Casino", "400 FS"],
      variant: "mellstroy",
      compact: true,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 3,
  },
};

/**
 * Unified Mellstroy featured offer card — aubergine/violet identity across
 * crypto, bonus and review surfaces.
 */
export function MellstroyFeaturedCard({ context, className }: MellstroyFeaturedCardProps) {
  const config = CONTEXT_CONFIG[context];

  return (
    <OfferCard
      operatorName="Mellstroy"
      operatorId="mellstroy"
      logo={MELLSTROY_LOGO}
      responsibleNote={MELLSTROY_RESPONSIBLE}
      {...config}
      className={className ?? config.className}
    />
  );
}
