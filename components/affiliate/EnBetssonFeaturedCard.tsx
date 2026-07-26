import {
  BETSSON_MX_CASINO_WELCOME_URL,
  BETSSON_MX_HOME_URL,
} from "@/lib/affiliate/constants";
import { OfferCard, type OfferCardProps } from "@/components/affiliate/OfferCard";

const BETSSON_TERMS =
  "Welcome offer, free spins, payment methods, verification and withdrawals depend on Betsson Mexico official terms and your jurisdiction. Confirm the live offer after redirect.";

const BETSSON_RESPONSIBLE = "18+ | Play responsibly";

const BETSSON_LOGO = {
  src: "/operators/betsson.svg",
  alt: "Betsson Mexico",
  width: 80,
  height: 40,
} as const;

export type EnBetssonFeaturedCardProps = {
  context: "review";
  className?: string;
};

const REVIEW_CONFIG: Omit<
  OfferCardProps,
  "operatorName" | "operatorId" | "responsibleNote" | "logo"
> = {
  badge: "MEXICO · FIAT PARTNER",
  headline: "Betsson Mexico casino welcome",
  subheadline: "Mexico-facing fiat casino and sportsbook with local payment framing",
  offerText: "Up to $15,000 MXN + 200 free spins subject to live terms",
  paymentBadges: ["Visa", "Mastercard", "OXXO", "SPEI"],
  featureBullets: [
    "Published Betsson Mexico welcome promotion",
    "Online casino and sports betting under one brand",
    "Local payment framing such as OXXO and SPEI where enabled",
    "Check wagering, limits and verification before depositing",
  ],
  primaryCtaLabel: "View Betsson Mexico offer",
  primaryCtaHref: BETSSON_MX_CASINO_WELCOME_URL,
  secondaryCtaLabel: "Enter Betsson Mexico",
  secondaryCtaHref: BETSSON_MX_HOME_URL,
  termsNote: BETSSON_TERMS,
  visual: {
    eyebrow: "BETSSON MEXICO OFFER",
    title: "Up to $15,000 MXN + 200 FS",
    subtitle: "+25 app spins may apply subject to terms",
    chips: ["OXXO", "SPEI", "Visa", "Mastercard"],
    variant: "betsson",
  },
  visualVariant: "fiat",
  mobileMaxBullets: 3,
  promoCodeLabel: "Promo code",
};

/**
 * English Betsson Mexico featured card for /en/reviews/betsson.
 */
export function EnBetssonFeaturedCard({ className }: EnBetssonFeaturedCardProps) {
  return (
    <OfferCard
      operatorName="Betsson Mexico"
      operatorId="betsson"
      logo={BETSSON_LOGO}
      responsibleNote={BETSSON_RESPONSIBLE}
      {...REVIEW_CONFIG}
      headingLevel="h2"
      className={className}
    />
  );
}
