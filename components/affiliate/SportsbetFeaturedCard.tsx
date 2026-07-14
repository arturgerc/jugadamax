import {
  SPORTSBETIO_BETTING_AFFILIATE_URL,
  SPORTSBETIO_REGISTRATION_AFFILIATE_URL,
} from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const SPORTSBETIO_COMPACT_TERMS =
  "Bono del 100% hasta 300 USDT para Sports o Casino. Depósito mínimo, wagering, mercados o juegos elegibles, vencimiento, KYC y disponibilidad dependen de la promoción, cuenta, GEO y términos oficiales.";

const SPORTSBETIO_FULL_TERMS =
  "El Champions Welcome Bonus publicado por Sportsbet.io ofrece un 100% hasta 300 USDT para Sports o Casino, con depósito mínimo de 10 USDT. La promoción publicada establece wagering de 15x para Sports y 40x para Casino. Activación, elegibilidad, mercados, juegos, apuesta máxima, vencimiento, KYC, pagos y retiros dependen de la cuenta y de los términos vigentes.";

const SPORTSBETIO_SPORTSBOOK_TERMS =
  "Bono, wagering, cuotas, mercados, eventos elegibles, vencimiento, pagos, KYC y disponibilidad dependen de la campaña, cuenta y GEO.";

const SPORTSBETIO_RESPONSIBLE = "18+ | Juega con responsabilidad";

const SPORTSBETIO_LOGO = {
  src: "/operators/sportsbet.svg",
  alt: "Sportsbet.io",
  width: 120,
  height: 48,
} as const;

type SportsbetContext = "crypto" | "sportsbook" | "bonus" | "review";

export type SportsbetFeaturedCardProps = {
  context: SportsbetContext;
  className?: string;
};

const CONTEXT_CONFIG: Record<
  SportsbetContext,
  Omit<OfferCardProps, "operatorName" | "operatorId" | "responsibleNote" | "logo">
> = {
  crypto: {
    badge: "CRYPTO SPORTSBOOK + CASINO",
    headline: "Sportsbet.io: apuestas crypto, casino y promociones",
    subheadline: "Sportsbook, live betting, slots, Originals y live casino",
    offerText: "100% hasta 300 USDT — Sports o Casino",
    paymentBadges: ["BTC", "USDT", "USDC", "Crypto"],
    featureBullets: [
      "Sportsbook crypto, casino y live casino en una cuenta",
      "100% hasta 300 USDT con elección Sports o Casino",
      "Depósito mínimo 10 USDT; wagering 15x o 40x",
      "KYC, pagos, retiros y disponibilidad según términos",
    ],
    primaryCtaLabel: "Visitar Sportsbet.io",
    primaryCtaHref: SPORTSBETIO_REGISTRATION_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/sportsbet-io",
    termsNote: SPORTSBETIO_COMPACT_TERMS,
    visual: {
      eyebrow: "CHAMPIONS WELCOME",
      title: "100% hasta 300 USDT",
      subtitle: "Sports 15x · Casino 40x",
      chips: ["Sports", "Casino", "300 USDT"],
      variant: "sportsbetio",
      compact: true,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 3,
    className: "mt-4",
  },
  sportsbook: {
    badge: "CRYPTO SPORTSBOOK",
    headline: "Sportsbet.io: apuestas deportivas y live betting",
    subheadline: "Fútbol, esports, combinadas, mercados live y casino adicional",
    offerText: "100% hasta 300 USDT para Sports",
    paymentBadges: ["Sportsbook", "Live", "Esports", "USDT"],
    featureBullets: [
      "Fútbol, básquetbol, tenis, esports y más mercados",
      "Apuestas pre-match, live y combinadas",
      "Welcome Sports con wagering publicado de 15x",
      "Cuotas, eventos, KYC y disponibilidad según términos",
    ],
    primaryCtaLabel: "Ver apuestas Sportsbet.io",
    primaryCtaHref: SPORTSBETIO_BETTING_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/sportsbet-io",
    termsNote: SPORTSBETIO_SPORTSBOOK_TERMS,
    visual: {
      eyebrow: "SPORTS WELCOME",
      title: "100% hasta 300 USDT",
      subtitle: "Sportsbook · live · esports",
      chips: ["Sports", "Live", "15x"],
      variant: "sportsbetio",
      compact: true,
    },
    visualVariant: "sportsbook",
    mobileMaxBullets: 3,
    className: "mt-0",
  },
  bonus: {
    badge: "BONO CRYPTO SPORT O CASINO",
    headline: "Sportsbet.io: elige bono Sports o Casino",
    subheadline: "Welcome bonus publicado para nuevos usuarios elegibles",
    offerText: "100% hasta 300 USDT",
    paymentBadges: ["Sports", "Casino", "15x", "40x"],
    featureBullets: [
      "Elige Champions Welcome Bonus Sports o Casino",
      "Depósito mínimo publicado de 10 USDT",
      "Wagering publicado: Sports 15x, Casino 40x",
      "Activa la recompensa antes de depositar",
      "Confirma cuenta, GEO, mercados y juegos elegibles",
    ],
    primaryCtaLabel: "Ver bono Sportsbet.io",
    primaryCtaHref: SPORTSBETIO_REGISTRATION_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/sportsbet-io",
    termsNote: SPORTSBETIO_FULL_TERMS,
    visual: {
      eyebrow: "CHAMPIONS BONUS",
      title: "100% hasta 300 USDT",
      subtitle: "Sports o Casino · depósito mínimo 10 USDT",
      chips: ["100%", "Sports", "Casino"],
      variant: "sportsbetio",
      compact: false,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 3,
    className: "mt-4",
  },
  review: {
    badge: "SPORTSBOOK CRYPTO + CASINO",
    headline: "Sportsbet.io: apuestas, casino, bonos y pagos crypto",
    subheadline: "Operador internacional para comparar desde México",
    offerText: "100% hasta 300 USDT — Sports o Casino",
    paymentBadges: ["BTC", "USDT", "Sportsbook", "Casino"],
    featureBullets: [
      "Sportsbook pre-match, live y esports",
      "Casino, slots, Originals y live casino",
      "Wagering publicado: Sports 15x, Casino 40x",
      "Licencia Curaçao, KYC y condiciones de retiro",
      "Promociones temporales y torneos según campaña",
    ],
    primaryCtaLabel: "Visitar Sportsbet.io",
    primaryCtaHref: SPORTSBETIO_REGISTRATION_AFFILIATE_URL,
    secondaryCtaLabel: "Comparar casinos crypto",
    secondaryCtaHref: "/casinos-crypto",
    termsNote: SPORTSBETIO_FULL_TERMS,
    visual: {
      eyebrow: "SPORTSBET.IO WELCOME",
      title: "100% hasta 300 USDT",
      subtitle: "Sports 15x · Casino 40x",
      chips: ["Sports", "Casino", "Crypto"],
      variant: "sportsbetio",
      compact: false,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 4,
    headingLevel: "h2",
  },
};

/** Branded Sportsbet.io offer card for Spanish/MX crypto, sportsbook, bonus and review surfaces. */
export function SportsbetFeaturedCard({ context, className }: SportsbetFeaturedCardProps) {
  const config = CONTEXT_CONFIG[context];

  return (
    <OfferCard
      operatorName="Sportsbet.io"
      operatorId="sportsbetio"
      logo={SPORTSBETIO_LOGO}
      responsibleNote={SPORTSBETIO_RESPONSIBLE}
      {...config}
      className={className ?? config.className}
    />
  );
}
