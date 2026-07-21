import {
  MELLSTROY_GLOBAL_AFFILIATE_URL,
  MELLSTROY_PROMO_CODE,
} from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const MELLSTROY_TERMS =
  "Bonos, porcentajes, free spins, cashback, premios, juegos elegibles, pagos, retiros, verificación y disponibilidad dependen de los términos oficiales de Mellstroy y de tu jurisdicción.";

const MELLSTROY_COMPACT_CRYPTO_TERMS =
  "Bonos, pagos, retiros y disponibilidad dependen de los términos oficiales y de tu jurisdicción.";

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
  fillHeight?: boolean;
};

const CONTEXT_CONFIG: Record<
  MellstroyContext,
  Omit<
    OfferCardProps,
    "operatorName" | "operatorId" | "responsibleNote" | "logo" | "promoCode"
  >
> = {
  crypto: {
    badge: "Casino crypto",
    headline: "Mellstroy",
    subheadline: "Casino crypto con bonos y promociones",
    offerText: "Hasta 660% + 400 FS según promoción vigente",
    paymentBadges: ["USDT", "Casino", "400 FS"],
    featureBullets: [
      "Hasta 660% + 400 FS según la oferta vigente",
      `Slots, live casino y código ${MELLSTROY_PROMO_CODE}`,
      "Revisa bonos, KYC y disponibilidad",
    ],
    primaryCtaLabel: "Ver oferta Mellstroy",
    primaryCtaHref: MELLSTROY_GLOBAL_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/mellstroy",
    termsNote: MELLSTROY_COMPACT_CRYPTO_TERMS,
    visual: {
      eyebrow: "WELCOME BONUS",
      title: "Hasta 660% + 400 FS",
      subtitle: `Código ${MELLSTROY_PROMO_CODE} · oferta variable`,
      chips: ["Crypto", "400 FS"],
      variant: "mellstroy",
      compact: true,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 2,
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
      `Código promocional: ${MELLSTROY_PROMO_CODE}`,
    ],
    primaryCtaLabel: "Ver promociones Mellstroy",
    primaryCtaHref: MELLSTROY_GLOBAL_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/mellstroy",
    termsNote: MELLSTROY_TERMS,
    visual: {
      eyebrow: "CASINO PROMOS",
      title: "Hasta 660% + 400 FS",
      subtitle: `Código ${MELLSTROY_PROMO_CODE} · oferta variable`,
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
      `Código promocional confirmado: ${MELLSTROY_PROMO_CODE}`,
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
      subtitle: `Código ${MELLSTROY_PROMO_CODE} · oferta variable`,
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
export function MellstroyFeaturedCard({
  context,
  className,
  fillHeight,
}: MellstroyFeaturedCardProps) {
  const config = CONTEXT_CONFIG[context];

  return (
    <OfferCard
      operatorName="Mellstroy"
      operatorId="mellstroy"
      logo={MELLSTROY_LOGO}
      promoCode={MELLSTROY_PROMO_CODE}
      responsibleNote={MELLSTROY_RESPONSIBLE}
      {...config}
      headingLevel={context === "review" ? "h2" : "h3"}
      fillHeight={fillHeight}
      className={className ?? config.className}
    />
  );
}
