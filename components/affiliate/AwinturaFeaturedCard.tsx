import { AWINTURA_CARD_AFFILIATE_URL } from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const AWINTURA_COMPACT_TERMS =
  "La creatividad de campaña suministrada muestra hasta $60,000, 250 FS y 200% freebets. La moneda, importe, depósitos elegibles, rollover, juegos, cuotas, vencimiento y disponibilidad dependen de la campaña, cuenta, GEO y términos oficiales.";

const AWINTURA_FULL_TERMS =
  "La campaña suministrada para JugadaMax muestra hasta $60,000, 250 free spins y 200% freebets. Las páginas públicas de Awintura muestran otras estructuras y cifras según país, moneda y cuenta. Confirma la promoción activa, moneda, depósito mínimo, wagering, cuotas, juegos válidos, vencimiento, límites y condiciones antes de depositar o apostar.";

const AWINTURA_SPORTSBOOK_TERMS =
  "Freebets, cuotas mínimas, rollover, eventos elegibles, vencimiento, pagos y disponibilidad dependen de la campaña, cuenta, GEO y términos oficiales.";

const AWINTURA_RESPONSIBLE = "18+ | Juega con responsabilidad";

const AWINTURA_LOGO = {
  src: "/operators/awintura.svg",
  alt: "Awintura",
  width: 120,
  height: 48,
} as const;

type AwinturaContext = "casino" | "bonus" | "sportsbook" | "review";

export type AwinturaFeaturedCardProps = {
  context: AwinturaContext;
  className?: string;
};

const CONTEXT_CONFIG: Record<
  AwinturaContext,
  Omit<OfferCardProps, "operatorName" | "operatorId" | "responsibleNote" | "logo">
> = {
  casino: {
    badge: "Casino mixto internacional",
    headline: "Awintura: casino, live games y apuestas",
    subheadline: "Slots, mesas, promociones y sportsbook en una sola cuenta",
    offerText: "Hasta $60,000 + 250 FS + 200% freebets según campaña",
    paymentBadges: ["Tarjetas", "E-wallets", "Crypto", "Sportsbook"],
    featureBullets: [
      "Casino, slots, live casino y juegos de mesa",
      "Sportsbook y freebets dentro de la misma cuenta",
      "Métodos fiat y crypto según país y cajero",
      "VIP, torneos, logros y Wheel of Fortune",
    ],
    primaryCtaLabel: "Visitar Awintura",
    primaryCtaHref: AWINTURA_CARD_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/awintura",
    termsNote: AWINTURA_COMPACT_TERMS,
    visual: {
      eyebrow: "WELCOME CAMPAIGN",
      title: "$60,000 + 250 FS",
      subtitle: "+200% freebets · según campaña",
      chips: ["Casino", "250 FS", "Freebets"],
      variant: "awintura",
      compact: true,
    },
    visualVariant: "mexico",
    mobileMaxBullets: 3,
    className: "mt-4",
  },
  bonus: {
    badge: "Bono casino + sport",
    headline: "Awintura: welcome bonus, free spins y freebets",
    subheadline: "Casino, sportsbook y promociones variables por GEO",
    offerText: "Hasta $60,000 + 250 FS + 200% freebets según campaña",
    paymentBadges: ["Casino Bonus", "Free Spins", "Freebets", "Multi-currency"],
    featureBullets: [
      "Hasta $60,000 según creatividad de campaña",
      "Hasta 250 FS sujetos a depósito y términos",
      "Hasta 200% freebets para sportsbook según campaña",
      "Activa la promoción antes de depositar",
      "Confirma rollover, cuotas, juegos y límites",
    ],
    primaryCtaLabel: "Ver promoción Awintura",
    primaryCtaHref: AWINTURA_CARD_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/awintura",
    termsNote: AWINTURA_FULL_TERMS,
    visual: {
      eyebrow: "WELCOME BONUS",
      title: "$60,000 + 250 FS",
      subtitle: "Casino bonus + 200% freebets",
      chips: ["250 FS", "200%", "Casino + Sport"],
      variant: "awintura",
      compact: false,
    },
    visualVariant: "mexico",
    mobileMaxBullets: 3,
    className: "mt-4",
  },
  sportsbook: {
    badge: "Casino + apuestas",
    headline: "Awintura: sportsbook y casino internacional",
    subheadline: "Mercados deportivos, freebets, slots y live casino",
    offerText: "Hasta 200% freebets según campaña vigente",
    paymentBadges: ["Sportsbook", "Casino", "Tarjetas", "Crypto"],
    featureBullets: [
      "Sportsbook y casino en una sola cuenta",
      "Freebets y promociones deportivas según términos",
      "Slots, live casino, mesas y juegos instantáneos",
      "Disponibilidad y mercados dependen de jurisdicción",
    ],
    primaryCtaLabel: "Ver Awintura",
    primaryCtaHref: AWINTURA_CARD_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/awintura",
    termsNote: AWINTURA_SPORTSBOOK_TERMS,
    visual: {
      eyebrow: "SPORT + CASINO",
      title: "Hasta 200% freebets",
      subtitle: "Campaña variable · términos aplican",
      chips: ["Sport", "Freebet", "Casino"],
      variant: "awintura",
      compact: true,
    },
    visualVariant: "mexico",
    mobileMaxBullets: 3,
    className: "mt-4",
  },
  review: {
    badge: "Casino fiat + sportsbook",
    headline: "Awintura: casino, bonos, pagos y apuestas",
    subheadline: "Operador internacional mixto para comparar desde México",
    offerText: "Hasta $60,000 + 250 FS + 200% freebets según campaña",
    paymentBadges: ["Tarjetas", "E-wallets", "Crypto", "Sportsbook"],
    featureBullets: [
      "Casino, live casino, mesas y juegos instantáneos",
      "Sportsbook y balances de freebet",
      "Métodos fiat y crypto según disponibilidad",
      "Licencia Curaçao y términos por jurisdicción",
    ],
    primaryCtaLabel: "Visitar Awintura",
    primaryCtaHref: AWINTURA_CARD_AFFILIATE_URL,
    secondaryCtaLabel: "Comparar casinos fiat",
    secondaryCtaHref: "/casinos-fiat",
    termsNote: AWINTURA_FULL_TERMS,
    visual: {
      eyebrow: "AWINTURA WELCOME",
      title: "$60,000 + 250 FS",
      subtitle: "+200% freebets · campaña variable",
      chips: ["Casino", "Sport", "250 FS"],
      variant: "awintura",
      compact: false,
    },
    visualVariant: "mexico",
    mobileMaxBullets: 4,
  },
};

/** Branded Awintura offer card for Spanish/MX casino, bonus, sportsbook and review surfaces. */
export function AwinturaFeaturedCard({ context, className }: AwinturaFeaturedCardProps) {
  const config = CONTEXT_CONFIG[context];

  return (
    <OfferCard
      operatorName="Awintura"
      operatorId="awintura"
      logo={AWINTURA_LOGO}
      responsibleNote={AWINTURA_RESPONSIBLE}
      {...config}
      headingLevel={context === "review" ? "h2" : "h3"}
      className={className ?? config.className}
    />
  );
}
