import { GAMDOM_GLOBAL_AFFILIATE_URL } from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const GAMDOM_COMPACT_TERMS =
  "Promoción, elegibilidad y disponibilidad según términos oficiales y jurisdicción.";

const GAMDOM_FULL_TERMS =
  "Oferta de bienvenida visible para nuevos usuarios elegibles. Debe reclamarse desde Rewards durante las primeras 6 horas tras el registro. La activación, el cálculo del rakeback, la disponibilidad y las condiciones dependen de los términos oficiales de Gamdom y de tu jurisdicción.";

const GAMDOM_RESPONSIBLE = "18+ | Juega con responsabilidad";

const GAMDOM_LOGO = {
  src: "/operators/gamdom.svg",
  alt: "Gamdom",
  width: 120,
  height: 48,
} as const;

type GamdomContext = "homepage" | "crypto" | "bonus" | "review";

export type GamdomFeaturedCardProps = {
  context: GamdomContext;
  className?: string;
};

const CONTEXT_CONFIG: Record<
  GamdomContext,
  Omit<OfferCardProps, "operatorName" | "operatorId" | "responsibleNote" | "logo">
> = {
  homepage: {
    badge: "Crypto + Rewards",
    headline: "Gamdom",
    subheadline: "Casino crypto, sportsbook y Originals",
    offerText: "15% rakeback por 7 días según elegibilidad",
    paymentBadges: ["Crypto", "Originals", "Rewards"],
    featureBullets: [
      "Casino, sportsbook y juegos Originals",
      "15% rakeback por 7 días según términos",
    ],
    primaryCtaLabel: "Visitar Gamdom",
    primaryCtaHref: GAMDOM_GLOBAL_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/gamdom",
    termsNote: GAMDOM_COMPACT_TERMS,
    visual: {
      eyebrow: "WELCOME REWARDS",
      title: "15% rakeback",
      subtitle: "7 días · según términos",
      chips: ["Rewards", "7 días"],
      variant: "gamdom",
      compact: true,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 2,
    emphasis: "comparison-secondary",
    compactComparison: true,
    className: "h-fit self-start p-3 sm:p-4",
  },
  crypto: {
    badge: "Crypto internacional",
    headline: "Gamdom",
    subheadline: "Casino crypto, sportsbook y Rewards",
    offerText: "15% rakeback por 7 días según elegibilidad",
    paymentBadges: ["Crypto", "Originals", "Sportsbook"],
    featureBullets: [
      "Casino, sportsbook y juegos Originals",
      "Rewards y promociones según términos",
    ],
    primaryCtaLabel: "Visitar Gamdom",
    primaryCtaHref: GAMDOM_GLOBAL_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/gamdom",
    termsNote: GAMDOM_COMPACT_TERMS,
    visual: {
      eyebrow: "WELCOME OFFER",
      title: "15% rakeback",
      subtitle: "7 días · según términos",
      chips: ["Rewards", "7 días"],
      variant: "gamdom",
      compact: true,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 2,
    emphasis: "comparison-secondary",
    compactComparison: true,
    className: "h-fit self-start p-3 sm:p-4",
  },
  bonus: {
    badge: "Welcome Rewards",
    headline: "Gamdom: welcome offer y promociones Rewards",
    subheadline: "Rakeback, casino, sportsbook y campañas rotativas",
    offerText: "Rakeback elevado al 15% durante 7 días",
    paymentBadges: ["Rakeback", "Rewards", "Casino", "Sportsbook"],
    featureBullets: [
      "Oferta visible para nuevos usuarios elegibles",
      "Debe reclamarse desde Rewards durante las primeras 6 horas",
      "Rakeback elevado al 15% durante los siguientes 7 días",
      "Promociones rotativas de casino, sportsbook y Rewards",
      "Gamdom puede modificar o finalizar campañas según sus términos",
    ],
    primaryCtaLabel: "Ver oferta Gamdom",
    primaryCtaHref: GAMDOM_GLOBAL_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/gamdom",
    termsNote: GAMDOM_FULL_TERMS,
    visual: {
      eyebrow: "WELCOME REWARDS",
      title: "15% rakeback",
      subtitle: "7 días · activación desde Rewards",
      chips: ["15%", "7 días", "Rewards"],
      variant: "gamdom",
      compact: false,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 3,
    className: "mt-4",
  },
  review: {
    badge: "Crypto + Rewards",
    headline: "Gamdom: casino, sportsbook, Originals y Rewards",
    subheadline: "Operador crypto internacional con promociones rotativas",
    offerText: "15% rakeback por 7 días según elegibilidad",
    paymentBadges: ["Crypto", "Originals", "Sportsbook", "Rewards"],
    featureBullets: [
      "Casino, sportsbook y juegos Originals",
      "Welcome offer para nuevos usuarios elegibles",
      "Debe reclamarse desde Rewards durante las primeras 6 horas",
      "Promociones rotativas según términos oficiales",
    ],
    primaryCtaLabel: "Visitar Gamdom",
    primaryCtaHref: GAMDOM_GLOBAL_AFFILIATE_URL,
    secondaryCtaLabel: "Comparar casinos crypto",
    secondaryCtaHref: "/casinos-crypto",
    termsNote: GAMDOM_FULL_TERMS,
    visual: {
      eyebrow: "WELCOME REWARDS",
      title: "15% rakeback",
      subtitle: "7 días · activación desde Rewards",
      chips: ["15%", "7 días", "Rewards"],
      variant: "gamdom",
      compact: false,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 4,
    headingLevel: "h2",
  },
};

/**
 * Unified Gamdom featured offer card — emerald Rewards identity across
 * homepage, crypto ranking, bonus and review surfaces.
 */
export function GamdomFeaturedCard({ context, className }: GamdomFeaturedCardProps) {
  const config = CONTEXT_CONFIG[context];

  return (
    <OfferCard
      operatorName="Gamdom"
      operatorId="gamdom"
      logo={GAMDOM_LOGO}
      responsibleNote={GAMDOM_RESPONSIBLE}
      {...config}
      className={className ?? config.className}
    />
  );
}
