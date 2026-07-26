/**
 * English/global No-KYC OfferCards for landing + review surfaces.
 * Outbound CTAs resolve via resolveOperatorLink(..., "global").
 */

import { OfferCard } from "@/components/affiliate/OfferCard";
import {
  ANONYMOUS_CASINO_PROMO_CODE,
  ETHCASINO_PROMO_CODE,
  LTCCASINO_PROMO_CODE,
} from "@/lib/affiliate/constants";
import { resolveOperatorLink } from "@/lib/affiliate/operator-links";

const ANONYMOUS_CASINO_LOGO = {
  src: "/operators/anonymous.png",
  alt: "Anonymous Casino",
  width: 180,
  height: 56,
} as const;

const ETHCASINO_LOGO = {
  src: "/operators/ethcasino.svg",
  alt: "ETH Casino",
  width: 140,
  height: 56,
} as const;

const LTCCASINO_LOGO = {
  src: "/operators/ltccasino.png",
  alt: "LTC Casino",
  width: 120,
  height: 48,
} as const;

type EnNoKycCardContext = "nokyc" | "review";

function resolveGlobalCta(operatorId: string): string | undefined {
  return resolveOperatorLink(operatorId, "global")?.url;
}

export function EnAnonymousCasinoNoKycCard({
  className,
  context = "nokyc",
}: {
  className?: string;
  context?: EnNoKycCardContext;
}) {
  const ctaHref = resolveGlobalCta("cryptocasino");
  if (!ctaHref) return null;

  if (context === "review") {
    return (
      <OfferCard
        operatorName="Anonymous Casino"
        operatorId="cryptocasino"
        logo={ANONYMOUS_CASINO_LOGO}
        promoCode={ANONYMOUS_CASINO_PROMO_CODE}
        promoCodeLabel="Promo code"
        responsibleNote="18+ | Play responsibly"
        badge="NO-KYC CRYPTO CASINO"
        headline="Anonymous Casino: privacy, crypto games and live casino"
        subheadline="CryptoCasino.CC for users prioritising document-light registration"
        offerText="Email and password — no personal documents in the described form"
        paymentBadges={["BTC", "ETH", "USDT", "LTC"]}
        featureBullets={[
          "No-KYC per the operator’s public positioning",
          "Email and password registration",
          "Slots, Crash, Plinko, Limbo, Mines, Dice and Keno",
          "Blackjack, roulette, baccarat, game shows and live casino",
          "Limits, turnover and fraud controls must still be reviewed",
        ]}
        primaryCtaLabel="Visit Anonymous Casino"
        primaryCtaHref={ctaHref}
        secondaryCtaLabel="Compare no-KYC casinos"
        secondaryCtaHref="/en/casinos-no-kyc"
        termsNote="CryptoCasino.CC markets a no-KYC casino, but no-KYC is not absolute technical anonymity. IP, email, wallets, blockchain and fraud controls can still create traceability."
        visual={{
          eyebrow: "NO-KYC ANONYMOUS CASINO",
          title: "Crypto privacy",
          subtitle: "Email · wallets · casino",
          chips: ["No-KYC", "Anonymous", "CryptoCasino.CC"],
          variant: "anonymous",
          compact: false,
        }}
        visualVariant="crypto"
        mobileMaxBullets={4}
        headingLevel="h2"
        className={className}
      />
    );
  }

  return (
    <OfferCard
      operatorName="Anonymous Casino"
      operatorId="cryptocasino"
      logo={ANONYMOUS_CASINO_LOGO}
      promoCode={ANONYMOUS_CASINO_PROMO_CODE}
      promoCodeLabel="Promo code"
      responsibleNote="18+ | Play responsibly"
      badge="JUGADAMAX NO-KYC PICK"
      headline="Anonymous Casino: our no-KYC editorial pick"
      subheadline="Privacy-focused registration and a full crypto casino product"
      offerText="Crypto casino without document verification per public operator policy"
      paymentBadges={["BTC", "ETH", "USDT", "Crypto"]}
      featureBullets={[
        "Email and password registration",
        "No personal documents in the public signup flow described",
        "Crypto games, slots and live tables",
        "JugadaMax editorial rating: 4.9/5",
      ]}
      primaryCtaLabel="Visit Anonymous Casino"
      primaryCtaHref={ctaHref}
      secondaryCtaLabel="Read review"
      secondaryCtaHref="/en/reviews/cryptocasino"
      termsNote="4.9/5 is a JugadaMax editorial opinion — not a user score or a guarantee of licensing, safety or withdrawals. Confirm Terms, networks and limits for your jurisdiction."
      visual={{
        eyebrow: "JUGADAMAX NO-KYC PICK",
        title: "4.9 / 5",
        subtitle: "Privacy · crypto · casino",
        chips: ["No-KYC", "Anonymous", "Crypto-only"],
        variant: "anonymous",
        compact: false,
      }}
      visualVariant="crypto"
      mobileMaxBullets={3}
      className={className}
    />
  );
}

export function EnEthCasinoNoKycCard({
  className,
  context = "nokyc",
}: {
  className?: string;
  context?: EnNoKycCardContext;
}) {
  const ctaHref = resolveGlobalCta("ethcasino");
  if (!ctaHref) return null;

  if (context === "review") {
    return (
      <OfferCard
        operatorName="ETH Casino"
        operatorId="ethcasino"
        logo={ETHCASINO_LOGO}
        promoCode={ETHCASINO_PROMO_CODE}
        promoCodeLabel="Promo code"
        responsibleNote="18+ | Play responsibly"
        badge="ETHEREUM NO-KYC CASINO"
        headline="ETH Casino: privacy, Ethereum and crypto casino play"
        subheadline="International operator with email and password registration"
        offerText="No document verification per the public FAQ"
        paymentBadges={["ETH", "BTC", "USDT", "USDC"]}
        featureBullets={[
          "No-KYC per ETH Casino’s published policy",
          "Email, password and email confirmation",
          "Slots, Crash, Plinko, Dice, live casino and game shows",
          "Eleven cryptocurrencies confirmed in the Terms",
          "Limits and fraud controls must still be reviewed",
        ]}
        primaryCtaLabel="Visit ETH Casino"
        primaryCtaHref={ctaHref}
        secondaryCtaLabel="Compare no-KYC casinos"
        secondaryCtaHref="/en/casinos-no-kyc"
        termsNote="ETH Casino declares a no-KYC policy, but no-KYC is not absolute anonymity. Terms publish withdrawal limits, deposit turnover requirements and fraud controls."
        visual={{
          eyebrow: "NO-KYC ETHEREUM CASINO",
          title: "Crypto privacy",
          subtitle: "ETH · email · wallets",
          chips: ["No-KYC", "Ethereum", "Crypto-only"],
          variant: "ethcasino",
          compact: false,
        }}
        visualVariant="crypto"
        mobileMaxBullets={4}
        headingLevel="h2"
        className={className}
      />
    );
  }

  return (
    <OfferCard
      operatorName="ETH Casino"
      operatorId="ethcasino"
      logo={ETHCASINO_LOGO}
      promoCode={ETHCASINO_PROMO_CODE}
      promoCodeLabel="Promo code"
      responsibleNote="18+ | Play responsibly"
      badge="JUGADAMAX NO-KYC PICK"
      headline="ETH Casino: our Ethereum no-verification option"
      subheadline="Simple registration, crypto payments and a broad casino catalogue"
      offerText="Public no-KYC policy per operator"
      paymentBadges={["ETH", "USDT", "BTC", "Crypto"]}
      featureBullets={[
        "Email and password to create an account",
        "No documents requested per the public FAQ",
        "Slots, crypto games and live tables",
        "JugadaMax editorial rating: 4.7/5",
      ]}
      primaryCtaLabel="Visit ETH Casino"
      primaryCtaHref={ctaHref}
      secondaryCtaLabel="Read review"
      secondaryCtaHref="/en/reviews/ethcasino"
      termsNote="4.7/5 is a JugadaMax editorial opinion — not a user score or a safety guarantee. Confirm restrictions, networks, limits and withdrawals for your jurisdiction."
      visual={{
        eyebrow: "JUGADAMAX NO-KYC PICK",
        title: "4.7 / 5",
        subtitle: "Ethereum · privacy · casino",
        chips: ["No-KYC", "ETH", "Email + password"],
        variant: "ethcasino",
        compact: false,
      }}
      visualVariant="crypto"
      mobileMaxBullets={3}
      className={className}
    />
  );
}

export function EnLtcCasinoNoKycCard({
  className,
  context = "nokyc",
}: {
  className?: string;
  context?: EnNoKycCardContext;
}) {
  const ctaHref = resolveGlobalCta("ltccasino");
  if (!ctaHref) return null;

  if (context === "review") {
    return (
      <OfferCard
        operatorName="LTC Casino"
        operatorId="ltccasino"
        logo={LTCCASINO_LOGO}
        promoCode={LTCCASINO_PROMO_CODE}
        promoCodeLabel="Promo code"
        responsibleNote="18+ | Play responsibly"
        badge="NO-KYC CRYPTO CASINO"
        headline="LTC Casino: privacy, crypto games and wallet payments"
        subheadline="International casino without document verification per its public policy"
        offerText="Email and password registration"
        paymentBadges={["LTC", "BTC", "ETH", "USDT"]}
        featureBullets={[
          "No-KYC per the operator’s public FAQ",
          "Email and password for the described signup flow",
          "Slots, live casino, Plinko, Crash, Dice and Mines",
          "Multiple cryptocurrencies; withdrawals subject to network",
          "No independently verified local licence for every market",
        ]}
        primaryCtaLabel="Visit LTC Casino"
        primaryCtaHref={ctaHref}
        secondaryCtaLabel="Compare no-KYC casinos"
        secondaryCtaHref="/en/casinos-no-kyc"
        termsNote="LTC Casino publishes a no-KYC policy, but that is not absolute anonymity or a verified local licence for every market. Confirm rules, availability, payments and withdrawals after redirect."
        visual={{
          eyebrow: "NO-KYC CRYPTO CASINO",
          title: "Crypto privacy",
          subtitle: "Email · password · wallets",
          chips: ["No-KYC", "Litecoin", "Crypto-only"],
          variant: "ltccasino",
          compact: false,
        }}
        visualVariant="crypto"
        mobileMaxBullets={4}
        headingLevel="h2"
        className={className}
      />
    );
  }

  return (
    <OfferCard
      operatorName="LTC Casino"
      operatorId="ltccasino"
      logo={LTCCASINO_LOGO}
      promoCode={LTCCASINO_PROMO_CODE}
      promoCodeLabel="Promo code"
      responsibleNote="18+ | Play responsibly"
      badge="NO-KYC CRYPTO CASINO"
      headline="LTC Casino: privacy, crypto and document-free registration"
      subheadline="Email and password, slots, live casino and crypto games"
      offerText="No-KYC verification per the operator’s public FAQ"
      paymentBadges={["LTC", "BTC", "ETH", "USDT"]}
      featureBullets={[
        "Email and password registration; no documents per operator",
        "Litecoin, Bitcoin, Ethereum, USDT and other cryptocurrencies",
        "Slots, Plinko, Crash, Dice, Mines and live casino",
        "Withdrawals subject to network, limits and live terms",
      ]}
      primaryCtaLabel="Visit LTC Casino"
      primaryCtaHref={ctaHref}
      secondaryCtaLabel="Read review"
      secondaryCtaHref="/en/reviews/ltccasino"
      termsNote={`${LTCCASINO_PROMO_CODE} identifies the campaign and does not guarantee a bonus. The no-KYC policy is operator-declared. Availability, networks, limits, fraud controls and withdrawals depend on account, jurisdiction and live rules.`}
      visual={{
        eyebrow: "PRIVACY-FIRST CRYPTO",
        title: "No-KYC",
        subtitle: "Email + password · no documents",
        chips: ["LTC", "No-KYC", "Crypto"],
        variant: "ltccasino",
        compact: false,
      }}
      visualVariant="crypto"
      mobileMaxBullets={3}
      className={className}
    />
  );
}
