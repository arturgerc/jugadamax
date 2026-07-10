import {
  MELBET_AFFILIATE_URL,
  MELBET_PROMO_CODE,
} from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const MELBET_TERMS =
  "Bonos, cuotas, mercados, juegos, pagos, retiros, verificación y disponibilidad dependen de los términos oficiales de Melbet y de tu jurisdicción.";

const MELBET_RESPONSIBLE = "18+ | Juega con responsabilidad";

const PROMO_LABEL = `Código promocional: ${MELBET_PROMO_CODE}`;

const PROMO_REGISTRATION_BULLET =
  "Introduce el código durante el registro cuando corresponda";

const MELBET_LOGO = {
  src: "/operators/melbet.svg",
  alt: "Melbet",
  width: 120,
  height: 48,
} as const;

type MelbetContext = "casino" | "sportsbook" | "bonus" | "review";

export type MelbetFeaturedCardProps = {
  context: MelbetContext;
  className?: string;
};

const CASINO_VISUAL = {
  eyebrow: "CASINO + LIVE",
  title: "Slots, live casino y apuestas",
  subtitle: "Promociones según términos vigentes",
  chips: ["Slots", "Live", "Fast Games"],
  variant: "melbet" as const,
  compact: true,
};

const SPORTSBOOK_VISUAL = {
  eyebrow: "MEGA BONO DE BIENVENIDA",
  title: "Hasta MX$17,500",
  subtitle: "4 depósitos · desde MX$100 · aplican términos",
  chips: ["100% inicial", "4 depósitos", "5x"],
  variant: "melbet" as const,
  compact: true,
};

const BONUS_VISUAL = {
  eyebrow: "4 DEPÓSITOS",
  title: "Hasta MX$17,500",
  subtitle: PROMO_LABEL,
  chips: ["MX$100 mín.", "5x", "Sportsbook"],
  variant: "melbet" as const,
  compact: true,
};

const CONTEXT_CONFIG: Record<
  MelbetContext,
  Omit<OfferCardProps, "operatorName" | "operatorId" | "promoCode" | "responsibleNote" | "logo">
> = {
  sportsbook: {
    badge: "Sportsbook + casino",
    headline: "Melbet MX: apuestas deportivas y casino",
    subheadline: "Fútbol, apuestas en vivo, eSports, slots y live casino",
    offerText: "Bono de bienvenida: hasta MX$17,500 en 4 depósitos",
    paymentBadges: ["Liga MX", "Fútbol", "En vivo", "eSports", "Casino"],
    featureBullets: [
      "Hasta MX$17,500 en los primeros 4 depósitos elegibles",
      "Primer depósito: 100% hasta MX$7,000",
      "Apuestas en vivo, fútbol, eSports y otros mercados",
      "Casino, slots y live casino en la misma cuenta",
      "Revisa rollover, cuotas mínimas, vigencia y KYC",
    ],
    primaryCtaLabel: "Ver apuestas Melbet",
    primaryCtaHref: MELBET_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/melbet",
    termsNote: MELBET_TERMS,
    visual: SPORTSBOOK_VISUAL,
    visualVariant: "mexico",
    mobileMaxBullets: 3,
    className: "mt-4",
  },
  casino: {
    badge: "Casino + apuestas",
    headline: "Melbet: casino online, slots y live casino",
    subheadline: "Casino, juegos en vivo, fast games y sportsbook en una cuenta",
    offerText: "Promociones de casino según términos vigentes",
    paymentBadges: ["Casino", "Slots", "Live Casino", "Fast Games"],
    featureBullets: [
      "Slots y categorías de casino según catálogo vigente",
      "Casino en vivo y juegos de mesa",
      "Fast games y promociones visibles en el operador",
      "Sportsbook incluido en la misma cuenta",
      "Revisa juegos elegibles, pagos, límites y verificación",
    ],
    primaryCtaLabel: "Visitar casino Melbet",
    primaryCtaHref: MELBET_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/melbet",
    termsNote: MELBET_TERMS,
    visual: CASINO_VISUAL,
    visualVariant: "mexico",
    mobileMaxBullets: 3,
    className: "mt-4",
  },
  bonus: {
    badge: "Bono deportivo",
    headline: "Melbet: mega bono de bienvenida",
    subheadline: "Paquete escalonado para los primeros 4 depósitos elegibles",
    offerText: "Hasta MX$17,500 en cuatro depósitos",
    paymentBadges: ["MXN", "4 depósitos", "Sportsbook"],
    featureBullets: [
      "1.º depósito: 100% hasta MX$7,000",
      "2.º depósito: 50% hasta MX$3,500",
      "3.º depósito: 25% hasta MX$3,500",
      "4.º depósito: 25% hasta MX$3,500",
      "Depósito mínimo: MX$100",
      "Requisito de apuesta: 5x según términos publicados",
    ],
    primaryCtaLabel: "Ver bono Melbet",
    primaryCtaHref: MELBET_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/melbet",
    termsNote: MELBET_TERMS,
    visual: BONUS_VISUAL,
    visualVariant: "mexico",
    mobileMaxBullets: 3,
    className: "mt-4",
  },
  review: {
    badge: "Sportsbook + casino",
    headline: "Melbet MX: bono deportivo y casino",
    subheadline: "Paquete escalonado para nuevos usuarios según términos oficiales",
    offerText: "Bono de bienvenida: hasta MX$17,500 en 4 depósitos",
    paymentBadges: ["MXN", "Sportsbook", "Casino"],
    featureBullets: [
      "Hasta MX$17,500 en los primeros 4 depósitos elegibles",
      "Primer depósito: 100% hasta MX$7,000 según términos",
      PROMO_REGISTRATION_BULLET,
      "Revisa rollover, cuotas mínimas, vigencia y KYC",
    ],
    primaryCtaLabel: "Ver bono Melbet",
    primaryCtaHref: MELBET_AFFILIATE_URL,
    secondaryCtaLabel: "Ver apuestas deportivas",
    secondaryCtaHref: "/apuestas",
    termsNote: MELBET_TERMS,
    visual: SPORTSBOOK_VISUAL,
    visualVariant: "mexico",
    mobileMaxBullets: 3,
  },
};

/**
 * Unified Melbet featured offer card — charcoal/gold identity across
 * casino, sportsbook, bonus and review surfaces.
 */
export function MelbetFeaturedCard({ context, className }: MelbetFeaturedCardProps) {
  const config = CONTEXT_CONFIG[context];

  return (
    <OfferCard
      operatorName="Melbet"
      operatorId="melbet"
      promoCode={MELBET_PROMO_CODE}
      logo={MELBET_LOGO}
      responsibleNote={MELBET_RESPONSIBLE}
      {...config}
      className={className ?? config.className}
    />
  );
}
