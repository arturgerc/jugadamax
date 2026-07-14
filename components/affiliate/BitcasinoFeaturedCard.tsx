import {
  BITCASINO_PROMO_AFFILIATE_URL,
  BITCASINO_REGISTRATION_AFFILIATE_URL,
} from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const BITCASINO_COMPACT_TERMS =
  "La promoción suministrada anuncia hasta 5,000 USDT repartidos en tres depósitos. Moneda, depósito mínimo, wagering, juegos elegibles, apuesta máxima, vencimiento, KYC, retiros y disponibilidad dependen de la cuenta, GEO y términos oficiales.";

const BITCASINO_FULL_TERMS =
  "La página promocional suministrada muestra tres bonos de depósito: 100% hasta 1,500 USDT, 50% hasta 2,000 USDT y 100% hasta 1,500 USDT, para un máximo anunciado de 5,000 USDT o equivalente. Activación, moneda, depósito mínimo, wagering, juegos válidos, apuesta máxima, vencimiento, KYC, límites, pagos y retiros dependen de la cuenta, jurisdicción y términos vigentes.";

const BITCASINO_RESPONSIBLE = "18+ | Juega con responsabilidad";

const BITCASINO_LOGO = {
  src: "/operators/bitcasino.svg",
  alt: "Bitcasino.io",
  width: 120,
  height: 48,
} as const;

type BitcasinoContext = "crypto" | "bonus" | "review";

export type BitcasinoFeaturedCardProps = {
  context: BitcasinoContext;
  className?: string;
};

const CONTEXT_CONFIG: Record<
  BitcasinoContext,
  Omit<OfferCardProps, "operatorName" | "operatorId" | "responsibleNote" | "logo">
> = {
  crypto: {
    badge: "CRYPTO CASINO",
    headline: "Bitcasino: casino crypto, slots y live casino",
    subheadline: "Originals, mesas en vivo, jackpots y promociones",
    offerText: "Hasta 5,000 USDT en 3 bonos de depósito",
    paymentBadges: ["BTC", "ETH", "USDT", "TRX"],
    featureBullets: [
      "Casino crypto con slots, live casino y Originals",
      "Tres bonos de depósito con máximo anunciado de 5,000 USDT",
      "Promociones rotativas, jackpots y beneficios VIP",
      "Pagos, KYC, retiros y disponibilidad según términos",
    ],
    primaryCtaLabel: "Visitar Bitcasino",
    primaryCtaHref: BITCASINO_REGISTRATION_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/bitcasino",
    termsNote: BITCASINO_COMPACT_TERMS,
    visual: {
      eyebrow: "WELCOME CRYPTO",
      title: "Hasta 5,000 USDT",
      subtitle: "3 bonos de depósito",
      chips: ["Crypto", "3 depósitos", "5,000 USDT"],
      variant: "bitcasino",
      compact: true,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 3,
    className: "mt-4",
  },
  bonus: {
    badge: "WELCOME BONUS CRYPTO",
    headline: "Bitcasino: hasta 5,000 USDT en tres depósitos",
    subheadline: "Bono escalonado para nuevos usuarios elegibles",
    offerText: "100% + 50% + 100% según depósito",
    paymentBadges: ["USDT", "BTC", "ETH", "TRX"],
    featureBullets: [
      "Primer depósito: 100% hasta 1,500 USDT",
      "Segundo depósito: 50% hasta 2,000 USDT",
      "Tercer depósito: 100% hasta 1,500 USDT",
      "Máximo anunciado total: 5,000 USDT",
      "Confirma wagering, activación y juegos elegibles",
    ],
    primaryCtaLabel: "Ver bono Bitcasino",
    primaryCtaHref: BITCASINO_PROMO_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/bitcasino",
    termsNote: BITCASINO_FULL_TERMS,
    visual: {
      eyebrow: "3 DEPOSIT BONUS",
      title: "Hasta 5,000 USDT",
      subtitle: "1,500 + 2,000 + 1,500 USDT",
      chips: ["100%", "50%", "100%"],
      variant: "bitcasino",
      compact: false,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 3,
    className: "mt-4",
  },
  review: {
    badge: "CASINO CRYPTO",
    headline: "Bitcasino: bono, slots, live casino y Originals",
    subheadline: "Casino internacional crypto para comparar desde México",
    offerText: "Hasta 5,000 USDT en tres bonos de depósito",
    paymentBadges: ["BTC", "ETH", "USDT", "TRX"],
    featureBullets: [
      "Slots, live casino, mesas y Originals",
      "Tres bonos de depósito con máximo anunciado de 5,000 USDT",
      "Promociones rotativas y beneficios VIP",
      "Licencia, KYC, wagering y retiros deben verificarse",
    ],
    primaryCtaLabel: "Visitar Bitcasino",
    primaryCtaHref: BITCASINO_REGISTRATION_AFFILIATE_URL,
    secondaryCtaLabel: "Comparar casinos crypto",
    secondaryCtaHref: "/casinos-crypto",
    termsNote: BITCASINO_FULL_TERMS,
    visual: {
      eyebrow: "BITCASINO WELCOME",
      title: "Hasta 5,000 USDT",
      subtitle: "3 bonos · crypto casino",
      chips: ["Crypto", "Casino", "Originals"],
      variant: "bitcasino",
      compact: false,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 4,
    headingLevel: "h2",
  },
};

/** Branded Bitcasino offer card for Spanish/MX crypto, bonus and review surfaces. */
export function BitcasinoFeaturedCard({ context, className }: BitcasinoFeaturedCardProps) {
  const config = CONTEXT_CONFIG[context];

  return (
    <OfferCard
      operatorName="Bitcasino.io"
      operatorId="bitcasino"
      logo={BITCASINO_LOGO}
      responsibleNote={BITCASINO_RESPONSIBLE}
      {...config}
      className={className ?? config.className}
    />
  );
}
