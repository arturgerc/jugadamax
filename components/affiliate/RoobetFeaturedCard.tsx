import { ROOBET_MX_CASINO_AFFILIATE_URL } from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const ROOBET_PROMO_DISCLAIMER =
  "Las promociones suministradas incluyen Weekly Raffle, Drops & Wins, Crown the Champions, campañas VIP y promociones de sportsbook. Los importes, premios, entradas, wagering, mercados, eventos, elegibilidad, vencimiento y disponibilidad pueden variar por campaña, cuenta, GEO y términos oficiales.";

const ROOBET_CRYPTO_TERMS =
  "Promociones, pagos, KYC y retiros dependen de la campaña, cuenta y jurisdicción.";

const ROOBET_REVIEW_TERMS = ROOBET_PROMO_DISCLAIMER;

const ROOBET_RESPONSIBLE = "18+ | Juega con responsabilidad";

const ROOBET_LOGO = {
  src: "/operators/roobet.svg",
  alt: "Roobet",
  width: 120,
  height: 48,
} as const;

type RoobetContext = "crypto" | "review";

export type RoobetFeaturedCardProps = {
  context: RoobetContext;
  className?: string;
  fillHeight?: boolean;
};

const CONTEXT_CONFIG: Record<
  RoobetContext,
  Omit<OfferCardProps, "operatorName" | "operatorId" | "responsibleNote" | "logo">
> = {
  crypto: {
    badge: "Crypto + sportsbook",
    headline: "Roobet: casino, promociones y sportsbook",
    subheadline: "Slots, live casino y campañas rotativas",
    offerText: "Drops & Wins y promociones rotativas",
    paymentBadges: ["Crypto", "Casino", "Sportsbook"],
    featureBullets: [
      "Casino, Originals y sportsbook en una sola cuenta",
      "Promociones rotativas; revisa KYC, pagos y elegibilidad",
    ],
    primaryCtaLabel: "Visitar Roobet",
    primaryCtaHref: ROOBET_MX_CASINO_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/roobet",
    termsNote: ROOBET_CRYPTO_TERMS,
    visual: {
      eyebrow: "PROMOS ACTIVAS",
      title: "Drops & Wins",
      subtitle: "Casino · VIP · Sportsbook",
      chips: ["Casino", "VIP", "Sport"],
      variant: "roobet",
      compact: true,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 2,
    emphasis: "comparison-secondary",
    compactComparison: true,
    className: "p-3 sm:p-4",
  },
  review: {
    badge: "Casino crypto + sportsbook",
    headline: "Roobet: casino, promociones, VIP y sportsbook",
    subheadline: "Operador internacional crypto para comparar desde México",
    offerText: "Drops & Wins, Weekly Raffle y campañas rotativas",
    paymentBadges: ["Crypto", "Casino", "Sportsbook", "VIP"],
    featureBullets: [
      "Casino, live casino y Originals",
      "Weekly Raffle, Drops & Wins y campañas VIP",
      "Football Frenzy, Parlay Power Play y otras promos deportivas",
      "Licencia, KYC, pagos y disponibilidad deben verificarse",
    ],
    primaryCtaLabel: "Visitar Roobet",
    primaryCtaHref: ROOBET_MX_CASINO_AFFILIATE_URL,
    secondaryCtaLabel: "Comparar casinos crypto",
    secondaryCtaHref: "/casinos-crypto",
    termsNote: ROOBET_REVIEW_TERMS,
    visual: {
      eyebrow: "ROOBET PROMOTIONS",
      title: "Casino + Sportsbook",
      subtitle: "Drops & Wins · Weekly Raffle · VIP",
      chips: ["Casino", "VIP", "Sportsbook"],
      variant: "roobet",
      compact: false,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 4,
    headingLevel: "h2",
  },
};

/**
 * Unified Roobet featured offer card — violet/indigo brand identity across
 * crypto ranking and review surfaces.
 */
export function RoobetFeaturedCard({ context, className, fillHeight }: RoobetFeaturedCardProps) {
  const config = CONTEXT_CONFIG[context];

  return (
    <OfferCard
      operatorName="Roobet"
      operatorId="roobet"
      logo={ROOBET_LOGO}
      responsibleNote={ROOBET_RESPONSIBLE}
      {...config}
      fillHeight={fillHeight}
      className={className ?? config.className}
    />
  );
}
