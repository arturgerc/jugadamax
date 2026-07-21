import { VODKABET_AFFILIATE_URL, VODKABET_PROMO_CODE } from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const VODKABET_CAMPAIGN_TERMS =
  "Las creatividades de campaña suministradas muestran 125% en el primer depósito, hasta 300 FS, +2% para depósitos crypto y 50 FS por vincular Telegram. La elegibilidad, depósito mínimo, wagering, juegos válidos, vencimiento, disponibilidad y condiciones pueden variar por campaña, cuenta, GEO y términos oficiales.";

const VODKABET_RESPONSIBLE = "18+ | Juega con responsabilidad";

const VODKABET_LOGO = {
  src: "/operators/vodkabet.svg",
  alt: "Vodka.bet",
  width: 120,
  height: 48,
} as const;

type VodkabetContext = "crypto" | "bonus" | "review";

export type VodkabetFeaturedCardProps = {
  context: VodkabetContext;
  className?: string;
};

const CONTEXT_CONFIG: Record<
  VodkabetContext,
  Omit<OfferCardProps, "operatorName" | "operatorId" | "responsibleNote" | "logo" | "promoCode">
> = {
  crypto: {
    badge: "Casino crypto internacional",
    headline: "Vodka.bet: casino, slots y promociones",
    subheadline: `Sportsbook adicional, depósitos crypto y código ${VODKABET_PROMO_CODE}`,
    offerText: "125% + hasta 300 FS según campaña vigente",
    paymentBadges: ["Crypto", "Slots", "Live Casino", "Free Spins"],
    featureBullets: [
      "125% en el primer depósito según campaña vigente",
      "Hasta 300 FS por depósito según términos",
      "+2% para depósitos crypto según elegibilidad",
      "+50 FS por vincular Telegram según condiciones",
    ],
    primaryCtaLabel: "Ver oferta Vodka.bet",
    primaryCtaHref: VODKABET_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/vodka-bet",
    termsNote: VODKABET_CAMPAIGN_TERMS,
    visual: {
      eyebrow: `PROMO ${VODKABET_PROMO_CODE}`,
      title: "125% + hasta 300 FS",
      subtitle: "+2% crypto · +50 FS Telegram",
      chips: [VODKABET_PROMO_CODE, "125%", "300 FS"],
      variant: "vodkabet",
      compact: true,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 3,
  },
  bonus: {
    badge: "Promo crypto",
    headline: "Vodka.bet: bono de bienvenida y extras crypto",
    subheadline: "125%, hasta 300 FS, extra crypto y recompensa Telegram",
    offerText: "125% + hasta 300 FS según campaña vigente",
    paymentBadges: ["Crypto", "Free Spins", "Promo Code", "Telegram"],
    featureBullets: [
      "125% en el primer depósito según creatividad de campaña",
      "Hasta 300 FS vinculados a depósitos según términos",
      "+2% adicional para depósitos crypto según elegibilidad",
      "+50 FS por vincular Telegram según condiciones",
      "Confirma wagering, depósito mínimo, juegos y vencimiento",
    ],
    primaryCtaLabel: "Ver promoción Vodka.bet",
    primaryCtaHref: VODKABET_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/vodka-bet",
    termsNote: VODKABET_CAMPAIGN_TERMS,
    visual: {
      eyebrow: "WELCOME PROMO",
      title: "125% + 300 FS",
      subtitle: `Código ${VODKABET_PROMO_CODE}`,
      chips: ["125%", "300 FS", "+2% Crypto"],
      variant: "vodkabet",
      compact: true,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 3,
    className: "mt-4",
  },
  review: {
    badge: "Casino crypto internacional",
    headline: `Vodka.bet: bono ${VODKABET_PROMO_CODE}, free spins y depósitos crypto`,
    subheadline: "Slots, live casino, jackpots y sportsbook adicional",
    offerText: "125% + hasta 300 FS según campaña vigente",
    paymentBadges: ["Crypto", "Free Spins", "Promo Code", "Telegram"],
    featureBullets: [
      "125% + hasta 300 FS según creatividades de campaña",
      "+2% para depósitos crypto según elegibilidad",
      "+50 FS por vincular Telegram según condiciones",
      "Confirma wagering, depósito mínimo, juegos y vencimiento",
    ],
    primaryCtaLabel: "Ver oferta Vodka.bet",
    primaryCtaHref: VODKABET_AFFILIATE_URL,
    secondaryCtaLabel: "Comparar casinos crypto",
    secondaryCtaHref: "/casinos-crypto",
    termsNote: VODKABET_CAMPAIGN_TERMS,
    visual: {
      eyebrow: `PROMO ${VODKABET_PROMO_CODE}`,
      title: "125% + 300 FS",
      subtitle: `Código ${VODKABET_PROMO_CODE} · según términos`,
      chips: ["125%", "300 FS", "+2% Crypto"],
      variant: "vodkabet",
      compact: false,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 4,
    headingLevel: "h2",
  },
};

/** Branded Vodka.bet offer card for Spanish crypto, bonus and review surfaces. */
export function VodkabetFeaturedCard({ context, className }: VodkabetFeaturedCardProps) {
  const config = CONTEXT_CONFIG[context];

  return (
    <OfferCard
      operatorName="Vodka.bet"
      operatorId="vodkabet"
      logo={VODKABET_LOGO}
      promoCode={VODKABET_PROMO_CODE}
      responsibleNote={VODKABET_RESPONSIBLE}
      {...config}
      className={className ?? config.className}
    />
  );
}
