import {
  LTCCASINO_AFFILIATE_URL,
  LTCCASINO_PROMO_CODE,
} from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const LTCCASINO_CRYPTO_TERMS =
  `El código ${LTCCASINO_PROMO_CODE} identifica la campaña y no garantiza un bono. La política sin KYC es declarada por el operador. Disponibilidad, redes, límites, controles antifraude y retiros dependen de la cuenta, jurisdicción y reglas vigentes.`;

const LTCCASINO_REVIEW_TERMS =
  "LTC Casino publica una política sin KYC, pero esto no equivale a anonimato técnico absoluto ni a licencia local mexicana. Confirma reglas, disponibilidad, pagos y retiros después del redirect.";

const LTCCASINO_RESPONSIBLE = "18+ | Juega con responsabilidad";

const LTCCASINO_LOGO = {
  src: "/operators/ltccasino.png",
  alt: "LTC Casino",
  width: 120,
  height: 48,
} as const;

type LtcCasinoContext = "crypto" | "review";

export type LtcCasinoFeaturedCardProps = {
  context: LtcCasinoContext;
  className?: string;
};

const CONTEXT_CONFIG: Record<
  LtcCasinoContext,
  Omit<
    OfferCardProps,
    "operatorName" | "operatorId" | "responsibleNote" | "logo" | "promoCode"
  >
> = {
  crypto: {
    badge: "CASINO CRYPTO SIN KYC",
    headline: "LTC Casino: privacidad, crypto y registro sin documentos",
    subheadline: "Email y contraseña, slots, live casino y juegos crypto",
    offerText: "Sin verificación KYC según el FAQ público del operador",
    paymentBadges: ["LTC", "BTC", "ETH", "USDT"],
    featureBullets: [
      "Registro con email y contraseña; sin documentos según el operador",
      "Litecoin, Bitcoin, Ethereum, USDT y otras criptomonedas",
      "Slots, Plinko, Crash, Dice, Mines y live casino",
      "Retiros procesados en tiempo real según el operador; depende de blockchain",
    ],
    primaryCtaLabel: "Registrarse en LTC Casino",
    primaryCtaHref: LTCCASINO_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/ltccasino",
    termsNote: LTCCASINO_CRYPTO_TERMS,
    visual: {
      eyebrow: "PRIVACY-FIRST CRYPTO",
      title: "Sin KYC",
      subtitle: "Email + contraseña · sin documentos",
      chips: ["LTC", "No KYC", "Crypto"],
      variant: "ltccasino",
      compact: true,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 3,
    className: "mt-4",
  },
  review: {
    badge: "CASINO CRYPTO SIN KYC",
    headline: "LTC Casino: privacidad, juegos crypto y pagos desde wallets",
    subheadline:
      "Casino internacional sin verificación documental según su política pública",
    offerText: "Registro con email y contraseña",
    paymentBadges: ["LTC", "BTC", "ETH", "USDT"],
    featureBullets: [
      "Sin KYC según el FAQ público del operador",
      "Email y contraseña para el flujo de registro descrito",
      "Slots, casino en vivo, Plinko, Crash, Dice y Mines",
      "Múltiples criptomonedas y retiros sujetos a la red",
      "No cuenta con licencia local mexicana verificada",
    ],
    primaryCtaLabel: "Registrarse en LTC Casino",
    primaryCtaHref: LTCCASINO_AFFILIATE_URL,
    secondaryCtaLabel: "Comparar casinos sin KYC",
    secondaryCtaHref: "/casinos-sin-kyc",
    termsNote: LTCCASINO_REVIEW_TERMS,
    visual: {
      eyebrow: "NO-KYC CRYPTO CASINO",
      title: "Privacidad crypto",
      subtitle: "Email · password · wallets",
      chips: ["Sin KYC", "Litecoin", "Crypto-only"],
      variant: "ltccasino",
      compact: false,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 4,
    headingLevel: "h2",
  },
};

/** Branded LTC Casino offer card for Spanish/MX crypto and review surfaces. */
export function LtcCasinoFeaturedCard({
  context,
  className,
}: LtcCasinoFeaturedCardProps) {
  const config = CONTEXT_CONFIG[context];

  return (
    <OfferCard
      operatorName="LTC Casino"
      operatorId="ltccasino"
      logo={LTCCASINO_LOGO}
      promoCode={LTCCASINO_PROMO_CODE}
      responsibleNote={LTCCASINO_RESPONSIBLE}
      {...config}
      className={className ?? config.className}
    />
  );
}
