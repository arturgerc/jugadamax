import {
  ANONYMOUS_CASINO_AFFILIATE_URL,
  ANONYMOUS_CASINO_PROMO_CODE,
} from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const ANONYMOUS_CRYPTO_TERMS =
  "El código jycokf7tf identifica la campaña y no garantiza un bono. CryptoCasino.CC promociona un modelo sin KYC, pero los Terms incluyen límites, turnover, controles antifraude y reglas de retiro.";

const ANONYMOUS_NOKYC_TERMS =
  "4.9/5 es una valoración editorial de JugadaMax, no una puntuación de usuarios ni una garantía de licencia, seguridad o retiro. Confirma Terms, redes y límites.";

const ANONYMOUS_REVIEW_TERMS =
  "CryptoCasino.CC se promociona como casino sin KYC, pero no-KYC no equivale a anonimato técnico absoluto. IP, email, wallets, blockchain y controles antifraude pueden generar trazabilidad.";

const ANONYMOUS_RESPONSIBLE = "18+ | Juega con responsabilidad";

const ANONYMOUS_CASINO_LOGO = {
  src: "/operators/anonymous.png",
  alt: "Anonymous Casino",
  width: 180,
  height: 56,
} as const;

type AnonymousCasinoContext = "crypto" | "nokyc" | "review";

export type AnonymousCasinoFeaturedCardProps = {
  context: AnonymousCasinoContext;
  className?: string;
};

const CONTEXT_CONFIG: Record<
  AnonymousCasinoContext,
  Omit<
    OfferCardProps,
    "operatorName" | "operatorId" | "responsibleNote" | "logo" | "promoCode"
  >
> = {
  crypto: {
    badge: "CASINO ANÓNIMO SIN KYC",
    headline: "Anonymous Casino: crypto, privacidad y registro sin documentos",
    subheadline: "CryptoCasino.CC con slots, crypto games y live casino",
    offerText: "Sin verificación KYC según la política pública del operador",
    paymentBadges: ["BTC", "ETH", "USDT", "LTC"],
    featureBullets: [
      "Registro con email y contraseña, sin datos personales en el formulario",
      "BTC, ETH, XRP, USDT, SOL, DOGE, USDC y LTC",
      "Slots, Crash, Plinko, Limbo, Mines, Dice y live casino",
      "Retiros sujetos a red, límites y controles antifraude",
    ],
    primaryCtaLabel: "Registrarse en Anonymous Casino",
    primaryCtaHref: ANONYMOUS_CASINO_AFFILIATE_URL,
    secondaryCtaLabel: "Leer reseña",
    secondaryCtaHref: "/reviews/cryptocasino",
    termsNote: ANONYMOUS_CRYPTO_TERMS,
    visual: {
      eyebrow: "ANONYMOUS CRYPTO CASINO",
      title: "Sin KYC",
      subtitle: "Email + contraseña · crypto-only",
      chips: ["No KYC", "Crypto", "Privacy"],
      variant: "anonymous",
      compact: true,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 3,
    className: "mt-4",
  },
  nokyc: {
    badge: "ELECCIÓN JUGADAMAX SIN KYC",
    headline: "Anonymous Casino: nuestra elección no-KYC",
    subheadline: "Privacidad, registro sencillo y casino crypto completo",
    offerText: "Casino crypto sin verificación documental",
    paymentBadges: ["BTC", "ETH", "USDT", "Crypto"],
    featureBullets: [
      "Registro mediante email y contraseña",
      "No solicita datos personales en el flujo público descrito",
      "Crypto games, slots y mesas en vivo",
      "Valoración editorial JugadaMax: 4.9/5",
    ],
    primaryCtaLabel: "Registrarse en Anonymous Casino",
    primaryCtaHref: ANONYMOUS_CASINO_AFFILIATE_URL,
    secondaryCtaLabel: "Reseña completa",
    secondaryCtaHref: "/reviews/cryptocasino",
    termsNote: ANONYMOUS_NOKYC_TERMS,
    visual: {
      eyebrow: "JUGADAMAX NO-KYC PICK",
      title: "4.9 / 5",
      subtitle: "Privacidad · crypto · casino",
      chips: ["Sin KYC", "Anonymous", "Crypto-only"],
      variant: "anonymous",
      compact: false,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 3,
  },
  review: {
    badge: "CASINO CRYPTO SIN KYC",
    headline: "Anonymous Casino: privacidad, crypto games y casino en vivo",
    subheadline: "CryptoCasino.CC para usuarios que priorizan registro sin documentos",
    offerText: "Email y contraseña, sin datos personales en el formulario descrito",
    paymentBadges: ["BTC", "ETH", "USDT", "LTC"],
    featureBullets: [
      "Sin KYC según el posicionamiento público del operador",
      "Registro con email y contraseña",
      "Slots, Crash, Plinko, Limbo, Mines, Dice y Keno",
      "Blackjack, ruleta, baccarat, game shows y live casino",
      "Límites, turnover y controles antifraude deben revisarse",
    ],
    primaryCtaLabel: "Registrarse en Anonymous Casino",
    primaryCtaHref: ANONYMOUS_CASINO_AFFILIATE_URL,
    secondaryCtaLabel: "Comparar casinos sin KYC",
    secondaryCtaHref: "/casinos-sin-kyc",
    termsNote: ANONYMOUS_REVIEW_TERMS,
    visual: {
      eyebrow: "NO-KYC ANONYMOUS CASINO",
      title: "Privacidad crypto",
      subtitle: "Email · wallets · casino",
      chips: ["Sin KYC", "Anonymous", "CryptoCasino.CC"],
      variant: "anonymous",
      compact: false,
    },
    visualVariant: "crypto",
    mobileMaxBullets: 4,
    headingLevel: "h2",
  },
};

/** Branded Anonymous Casino / CryptoCasino.CC offer card for Spanish/MX surfaces. */
export function AnonymousCasinoFeaturedCard({
  context,
  className,
}: AnonymousCasinoFeaturedCardProps) {
  const config = CONTEXT_CONFIG[context];

  return (
    <OfferCard
      operatorName="Anonymous Casino"
      operatorId="cryptocasino"
      logo={ANONYMOUS_CASINO_LOGO}
      promoCode={ANONYMOUS_CASINO_PROMO_CODE}
      responsibleNote={ANONYMOUS_RESPONSIBLE}
      {...config}
      className={className ?? config.className}
    />
  );
}
