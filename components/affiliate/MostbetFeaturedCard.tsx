import { MOSTBET_PLAYERS_AFFILIATE_URL } from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const MOSTBET_COMPACT_TERMS =
  "La landing suministrada muestra 125% + 250 FS para el primer depósito, con selección de Casino o Sports. El importe máximo, moneda, depósito mínimo, wagering, juegos o mercados elegibles, vencimiento y disponibilidad dependen de la campaña, cuenta, GEO y términos vigentes.";

const MOSTBET_FULL_TERMS =
  "La landing afiliada suministrada muestra una opción Casino y una opción Sports, ambas anunciadas como 125% + 250 FS para el primer depósito. El valor final, moneda, depósito mínimo, wagering, free spins, mercados, juegos elegibles, cuotas mínimas, vencimiento, límites, KYC y disponibilidad pueden variar según la cuenta, GEO y términos mostrados después del redirect. Confirma siempre la promoción seleccionada antes de depositar.";

const MOSTBET_SPORTSBOOK_TERMS =
  "Mercados, cuotas, free spins, wagering, eventos elegibles, vencimiento, pagos y disponibilidad dependen de la campaña, cuenta, GEO y términos vigentes.";

const MOSTBET_RESPONSIBLE = "18+ | Juega con responsabilidad";

const MOSTBET_LOGO = {
  src: "/operators/mostbet.webp",
  alt: "Mostbet",
  width: 120,
  height: 48,
} as const;

type MostbetContext = "casino" | "sportsbook" | "bonus" | "review";

export type MostbetFeaturedCardProps = {
  context: MostbetContext;
  className?: string;
};

const CONTEXT_CONFIG: Record<
  MostbetContext,
  Omit<OfferCardProps, "operatorName" | "operatorId" | "responsibleNote" | "logo">
> = {
  casino: {
    badge: "CASINO + APUESTAS",
    headline: "Mostbet: casino online, live casino y sportsbook",
    subheadline: "Slots, mesas en vivo, esports y apuestas en una sola cuenta",
    offerText: "125% + 250 FS en el primer depósito",
    paymentBadges: ["MXN", "Tarjetas", "E-wallets", "Crypto"],
    featureBullets: [
      "Casino, slots, live casino, poker y juegos instantáneos",
      "Sportsbook, apuestas en vivo y esports",
      "La landing permite elegir promoción Casino o Sports",
      "Pagos, KYC y disponibilidad dependen de cuenta y GEO",
    ],
    primaryCtaLabel: "Visitar Mostbet",
    primaryCtaHref: MOSTBET_PLAYERS_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/mostbet",
    termsNote: MOSTBET_COMPACT_TERMS,
    visual: {
      eyebrow: "BONO DE PRIMER DEPÓSITO",
      title: "125% + 250 FS",
      subtitle: "Elige Casino o Sports · términos aplican",
      chips: ["Casino", "Sports", "250 FS"],
      variant: "mostbet",
      compact: true,
    },
    visualVariant: "fiat",
    mobileMaxBullets: 3,
    className: "mt-4",
  },
  sportsbook: {
    badge: "SPORTSBOOK + CASINO",
    headline: "Mostbet: apuestas deportivas, live y casino",
    subheadline: "Fútbol, esports, mercados en vivo y casino adicional",
    offerText: "125% + 250 FS según selección de campaña",
    paymentBadges: ["Sportsbook", "En vivo", "Esports", "Casino"],
    featureBullets: [
      "Fútbol y numerosos deportes con mercados pre-match y live",
      "Esports, Aviator, casino y live casino en la misma cuenta",
      "Promoción Sports seleccionable en la landing de registro",
      "Cuotas, wagering, mercados y disponibilidad según términos",
    ],
    primaryCtaLabel: "Ver apuestas Mostbet",
    primaryCtaHref: MOSTBET_PLAYERS_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/mostbet",
    termsNote: MOSTBET_SPORTSBOOK_TERMS,
    visual: {
      eyebrow: "SPORTS WELCOME",
      title: "125% + 250 FS",
      subtitle: "Sportsbook · live betting · casino",
      chips: ["Sports", "Live", "Casino"],
      variant: "mostbet",
      compact: true,
    },
    visualVariant: "sportsbook",
    mobileMaxBullets: 3,
    className: "mt-0",
  },
  bonus: {
    badge: "BONO CASINO O SPORTS",
    headline: "Mostbet: elige bono de casino o apuestas",
    subheadline: "Promoción de primer depósito para nuevos usuarios elegibles",
    offerText: "125% + 250 FS en el primer depósito",
    paymentBadges: ["Casino", "Sports", "250 FS", "Primer depósito"],
    featureBullets: [
      "La landing muestra una opción Casino y otra Sports",
      "Ambas opciones anuncian 125% + 250 FS",
      "La interfaz mexicana muestra además campañas variables en MXN",
      "Confirma moneda, depósito mínimo, wagering y elegibilidad",
      "No introduzcas un código promocional no confirmado",
    ],
    primaryCtaLabel: "Ver promoción Mostbet",
    primaryCtaHref: MOSTBET_PLAYERS_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/mostbet",
    termsNote: MOSTBET_FULL_TERMS,
    visual: {
      eyebrow: "ELIGE TU BONO",
      title: "125% + 250 FS",
      subtitle: "Casino o Sports · primer depósito",
      chips: ["125%", "250 FS", "Casino / Sports"],
      variant: "mostbet",
      compact: false,
    },
    visualVariant: "mexico",
    mobileMaxBullets: 3,
    className: "mt-4",
  },
  review: {
    badge: "CASINO + SPORTSBOOK",
    headline: "Mostbet: casino, apuestas, bonos y aplicación",
    subheadline: "Operador internacional mixto para comparar desde México",
    offerText: "125% + 250 FS según campaña de primer depósito",
    paymentBadges: ["MXN", "Tarjetas", "Crypto", "Sportsbook"],
    featureBullets: [
      "Casino, live casino, poker y juegos instantáneos",
      "Sportsbook, apuestas en vivo y esports",
      "Promoción seleccionable entre Casino y Sports",
      "Aplicación móvil mediante enlace independiente",
      "Licencia, pagos, KYC y disponibilidad deben verificarse",
    ],
    primaryCtaLabel: "Visitar Mostbet",
    primaryCtaHref: MOSTBET_PLAYERS_AFFILIATE_URL,
    secondaryCtaLabel: "Comparar operadores mixtos",
    secondaryCtaHref: "/casinos-fiat",
    termsNote: MOSTBET_FULL_TERMS,
    visual: {
      eyebrow: "MOSTBET WELCOME",
      title: "125% + 250 FS",
      subtitle: "Casino · Sports · cuenta y GEO",
      chips: ["Casino", "Sports", "App"],
      variant: "mostbet",
      compact: false,
    },
    visualVariant: "mexico",
    mobileMaxBullets: 4,
    headingLevel: "h2",
  },
};

/** Branded Mostbet offer card for Spanish/MX casino, sportsbook, bonus and review surfaces. */
export function MostbetFeaturedCard({ context, className }: MostbetFeaturedCardProps) {
  const config = CONTEXT_CONFIG[context];

  return (
    <OfferCard
      operatorName="Mostbet"
      operatorId="mostbet"
      logo={MOSTBET_LOGO}
      responsibleNote={MOSTBET_RESPONSIBLE}
      {...config}
      className={className ?? config.className}
    />
  );
}
