import {
  ETHCASINO_AFFILIATE_URL,
  ETHCASINO_PROMO_CODE,
} from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const ETHCASINO_CRYPTO_TERMS =
  "El código jg7kkva6a identifica la campaña y no garantiza un bono. La política sin KYC es declarada por el operador. Los Terms incluyen controles antifraude, requisitos de movimiento del depósito, límites y reglas de retiro.";

const ETHCASINO_NOKYC_TERMS =
  "4.7/5 es una valoración editorial de JugadaMax, no una puntuación de usuarios ni una garantía de seguridad. Confirma restricciones, redes, límites y retiros.";

const ETHCASINO_REVIEW_TERMS =
  "ETH Casino declara una política sin KYC, pero no-KYC no equivale a anonimato técnico absoluto. Los Terms publican límites de retiro, requisitos de movimiento del depósito y controles antifraude.";

const ETHCASINO_RESPONSIBLE = "18+ | Juega con responsabilidad";

const ETHCASINO_LOGO = {
  src: "/operators/ethcasino.svg",
  alt: "ETH Casino",
  width: 140,
  height: 56,
} as const;

type EthCasinoContext = "crypto" | "review" | "nokyc";

export type EthCasinoFeaturedCardProps = {
  context: EthCasinoContext;
  className?: string;
};

const CONTEXT_CONFIG: Record<
  EthCasinoContext,
  Omit<
    OfferCardProps,
    "operatorName" | "operatorId" | "responsibleNote" | "logo" | "promoCode"
  >
> = {
  crypto: {
    badge: "CASINO ETHEREUM SIN KYC",
    headline: "ETH Casino: Ethereum, privacidad y registro sin documentos",
    subheadline: "Email y contraseña, slots, juegos crypto y live casino",
    offerText: "Sin verificación KYC según la política pública del operador",
    paymentBadges: ["ETH", "BTC", "USDT", "USDC"],
    featureBullets: [
      "Registro con email y contraseña; sin documentos según el operador",
      "Ethereum, Bitcoin, USDT y ocho criptomonedas adicionales",
      "Slots, Crash, Plinko, Dice, blackjack y live casino",
      "Retiros sujetos a límites, red blockchain y términos vigentes",
    ],
    primaryCtaLabel: "Registrarse en ETH Casino",
    primaryCtaHref: ETHCASINO_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/ethcasino",
    termsNote: ETHCASINO_CRYPTO_TERMS,
    visual: {
      eyebrow: "ETHEREUM NO-KYC CASINO",
      title: "Sin KYC",
      subtitle: "Email + contraseña · Ethereum-first",
      chips: ["ETH", "No KYC", "Crypto-only"],
      variant: "ethcasino",
      compact: true,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 3,
    className: "mt-4",
  },
  nokyc: {
    badge: "ELECCIÓN JUGADAMAX SIN KYC",
    headline: "ETH Casino: nuestra opción Ethereum sin verificación",
    subheadline: "Registro sencillo, pagos crypto y amplio catálogo de casino",
    offerText: "Política pública sin KYC",
    paymentBadges: ["ETH", "USDT", "BTC", "Crypto"],
    featureBullets: [
      "Email y contraseña para crear la cuenta",
      "No solicita documentos según el FAQ público",
      "Slots, crypto games y mesas en vivo",
      "Rating editorial JugadaMax: 4.7/5",
    ],
    primaryCtaLabel: "Registrarse en ETH Casino",
    primaryCtaHref: ETHCASINO_AFFILIATE_URL,
    secondaryCtaLabel: "Reseña completa",
    secondaryCtaHref: "/reviews/ethcasino",
    termsNote: ETHCASINO_NOKYC_TERMS,
    visual: {
      eyebrow: "JUGADAMAX NO-KYC PICK",
      title: "4.7 / 5",
      subtitle: "Ethereum · privacidad · casino",
      chips: ["Sin KYC", "ETH", "Email + password"],
      variant: "ethcasino",
      compact: false,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 3,
  },
  review: {
    badge: "CASINO ETHEREUM SIN KYC",
    headline: "ETH Casino: privacidad, Ethereum y casino crypto",
    subheadline: "Operador internacional con registro mediante email y contraseña",
    offerText: "Sin verificación documental según el FAQ público",
    paymentBadges: ["ETH", "BTC", "USDT", "USDC"],
    featureBullets: [
      "Sin KYC según la política publicada por ETH Casino",
      "Registro con email, contraseña y confirmación de correo",
      "Slots, Crash, Plinko, Dice, live casino y game shows",
      "Once criptomonedas confirmadas en los Terms",
      "Límites y controles antifraude deben revisarse",
    ],
    primaryCtaLabel: "Registrarse en ETH Casino",
    primaryCtaHref: ETHCASINO_AFFILIATE_URL,
    secondaryCtaLabel: "Comparar casinos sin KYC",
    secondaryCtaHref: "/casinos-sin-kyc",
    termsNote: ETHCASINO_REVIEW_TERMS,
    visual: {
      eyebrow: "NO-KYC ETHEREUM CASINO",
      title: "Privacidad crypto",
      subtitle: "ETH · email · wallets",
      chips: ["Sin KYC", "Ethereum", "Crypto-only"],
      variant: "ethcasino",
      compact: false,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 4,
    headingLevel: "h2",
  },
};

/** Branded ETH Casino offer card for Spanish/MX crypto, no-KYC and review surfaces. */
export function EthCasinoFeaturedCard({
  context,
  className,
}: EthCasinoFeaturedCardProps) {
  const config = CONTEXT_CONFIG[context];

  return (
    <OfferCard
      operatorName="ETH Casino"
      operatorId="ethcasino"
      logo={ETHCASINO_LOGO}
      promoCode={ETHCASINO_PROMO_CODE}
      responsibleNote={ETHCASINO_RESPONSIBLE}
      {...config}
      className={className ?? config.className}
    />
  );
}
