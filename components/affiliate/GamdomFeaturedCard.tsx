import { GAMDOM_GLOBAL_AFFILIATE_URL } from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const GAMDOM_TERMS =
  "Oferta de bienvenida visible para nuevos usuarios elegibles. Debe reclamarse desde Rewards durante las primeras 6 horas tras el registro. La activación, el cálculo del rakeback, la disponibilidad y las condiciones dependen de los términos oficiales de Gamdom y de tu jurisdicción.";

const GAMDOM_RESPONSIBLE = "18+ | Juega con responsabilidad";

const GAMDOM_LOGO = {
  src: "/operators/gamdom.svg",
  alt: "Gamdom",
  width: 120,
  height: 48,
} as const;

type GamdomContext = "homepage" | "crypto" | "bonus";

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
    subheadline: "Casino crypto, sportsbook y Rewards",
    offerText: "Rakeback elevado al 15% durante 7 días",
    paymentBadges: ["Crypto", "Originals", "Sportsbook", "Rewards"],
    featureBullets: [
      "Casino, sportsbook y juegos Originals",
      "Welcome offer disponible desde Rewards según elegibilidad",
    ],
    primaryCtaLabel: "Visitar Gamdom",
    primaryCtaHref: GAMDOM_GLOBAL_AFFILIATE_URL,
    secondaryCtaLabel: "Guía Gamdom",
    secondaryCtaHref: "/guias/gamdom-mexico-crypto",
    termsNote: GAMDOM_TERMS,
    visual: {
      eyebrow: "WELCOME REWARDS",
      title: "15% rakeback",
      subtitle: "Durante 7 días según términos",
      chips: ["Rewards", "7 días", "Crypto"],
      variant: "gamdom",
      compact: true,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 2,
    emphasis: "comparison-secondary",
  },
  crypto: {
    badge: "Crypto internacional",
    headline: "Gamdom: casino, sportsbook y Rewards",
    subheadline: "Originals, promociones rotativas y experiencia crypto-first",
    offerText: "Rakeback elevado al 15% durante 7 días",
    paymentBadges: ["Crypto", "Casino", "Sportsbook", "Rewards"],
    featureBullets: [
      "Casino, sportsbook y juegos Originals en una sola cuenta",
      "Rakeback elevado al 15% durante 7 días para nuevos usuarios elegibles",
      "Debe reclamarse desde Rewards durante las primeras 6 horas",
      "Promociones rotativas de casino y sportsbook según términos",
    ],
    primaryCtaLabel: "Visitar Gamdom",
    primaryCtaHref: GAMDOM_GLOBAL_AFFILIATE_URL,
    secondaryCtaLabel: "Leer guía",
    secondaryCtaHref: "/guias/gamdom-mexico-crypto",
    termsNote: GAMDOM_TERMS,
    visual: {
      eyebrow: "WELCOME OFFER",
      title: "15% rakeback · 7 días",
      subtitle: "Actívalo desde Rewards según elegibilidad",
      chips: ["Rewards", "Originals", "Sports"],
      variant: "gamdom",
      compact: true,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 2,
    emphasis: "comparison-secondary",
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
    secondaryCtaLabel: "Leer guía Gamdom",
    secondaryCtaHref: "/guias/gamdom-mexico-crypto",
    termsNote: GAMDOM_TERMS,
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
};

/**
 * Unified Gamdom featured offer card — emerald Rewards identity across
 * homepage, crypto ranking and bonus surfaces.
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
