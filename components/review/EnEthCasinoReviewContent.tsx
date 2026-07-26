import Link from "next/link";
import type { Author, Casino, Review } from "@/types/content";
import { ETHCASINO_PROMO_CODE } from "@/lib/affiliate/constants";
import { resolveOperatorLink } from "@/lib/affiliate/operator-links";
import { EnEthCasinoNoKycCard } from "@/components/verticals/nokyc/en/EnNoKycFeaturedCards";
import { MobileStickyOfferCta } from "@/components/affiliate/MobileStickyOfferCta";
import { AffiliateDisclosureEn } from "@/components/trust/AffiliateDisclosureEn";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { VerdictBox } from "@/components/review/VerdictBox";
import { ProsCons } from "@/components/review/ProsCons";
import {
  SourceReferenceBlock,
  type SourceReference,
} from "@/components/trust/SourceReferenceBlock";
import { cn, focusRing } from "@/lib/utils";

const AFFILIATE_REL = "sponsored nofollow noopener noreferrer";

const JURISDICTION_WARNING =
  "ETH Casino is an international crypto casino. JugadaMax does not claim a verified local licence for every market or absolute technical anonymity. Availability, registration, payments, limits, fraud controls and withdrawals depend on your location, account and live registration-domain rules.";

const QUICK_SUMMARY = [
  { title: "Type", text: "Ethereum no-KYC crypto casino" },
  { title: "Registration", text: "Email + password" },
  { title: "Payments", text: "ETH, BTC, USDT and eight other cryptocurrencies" },
  { title: "Main caution", text: "No verified licence and withdrawal limits apply" },
] as const;

const NO_KYC_CARDS = [
  {
    title: "No documents",
    text: "The public FAQ states that personal documents are not required.",
  },
  {
    title: "Email and password",
    text: "The described signup flow uses email and password.",
  },
  {
    title: "Withdrawals",
    text: "The operator declares that KYC is not required to request withdrawals.",
  },
  {
    title: "Live policy",
    text: "These rules can change — always confirm the registration domain.",
  },
] as const;

const PRIVACY_ADVANTAGES = [
  "No document upload per the operator",
  "No bank-card payment flow",
  "Payments from crypto wallets",
  "Limited signup information (email + password)",
  "2FA available / recommended",
] as const;

const PRIVACY_LIMITS = [
  "Email remains an identifier",
  "IP and device data may be logged",
  "Blockchain transactions are public",
  "Wallet activity can be analysed",
  "Anti-fraud controls apply",
  "Local laws still apply",
  "No-KYC is not a local licence",
] as const;

const CRYPTO_ASSETS = [
  "BTC",
  "ETH",
  "XRP",
  "USDT",
  "SOL",
  "BNB",
  "DOGE",
  "ADA",
  "USDC",
  "TRX",
  "LTC",
] as const;

const CONDITIONS_CARDS = [
  {
    title: "Deposit turnover",
    text: "The Terms publish a 1x turnover requirement on deposits before withdrawal.",
  },
  {
    title: "Roulette / Baccarat",
    text: "Up to 10x may apply if activity is concentrated solely on live Roulette and Baccarat.",
  },
  {
    title: "Withdrawal frequency",
    text: "Up to 2 withdrawals per day and up to 7 per calendar week, per the Terms.",
  },
  {
    title: "Network limits",
    text: "Daily, weekly and monthly minimums and maximums exist per cryptocurrency.",
  },
  {
    title: "Processing",
    text: "ETH Casino states withdrawals are processed immediately; arrival depends on the network.",
  },
  {
    title: "Incorrect transfers",
    text: "Technical recovery may involve a high fee and is not guaranteed.",
  },
] as const;

const GAME_CATEGORIES = [
  "Slots",
  "Bonus Buy",
  "Jackpots",
  "Megaways",
  "Crash",
  "Plinko",
  "Dice",
  "Lottery",
  "Bingo",
  "Scratch",
  "Blackjack",
  "Roulette",
  "Baccarat",
  "Game Shows",
  "Lightning Games",
  "Craps",
  "Live Casino",
] as const;

const PROVIDERS = [
  "Evolution",
  "BGaming",
  "Hacksaw",
  "Pragmatic Play",
  "Platipus",
  "Endorphina",
  "PG Soft",
  "Spinomenal",
] as const;

const REGISTRATION_STEPS = [
  "Open the partner registration link.",
  "Enter your email.",
  "Create a password.",
  "Select your preferred cryptocurrency.",
  "Accept the Terms.",
  "Confirm your email.",
] as const;

function buildAnalysisParagraphs(rating: number): string[] {
  return [
    "ETH Casino presents itself as an Ethereum-first crypto casino: the brand revolves around ETH, wallets and a crypto-only experience — not Mexican fiat payments or a permanent welcome bonus.",
    "The /en/reviews/ethcasino URL consolidates search interest in no-KYC crypto casino reviews; this update strengthens the same indexed page with clearer editorial structure without changing the slug or fabricating a new publication.",
    "The main differentiator is the public no-KYC policy. ETH Casino declares that document verification is not required and that registration completes with email, password and email confirmation. JugadaMax attributes those claims to the operator and notes they can change.",
    "Privacy has technical limits: email, IP, device data, wallet addresses and public blockchain history can create traceability. The Terms also contemplate anti-fraud controls and account restrictions.",
    `The operator accepts eleven cryptocurrencies in its Terms, with a catalogue of slots, crypto games and live casino from recognised providers where available. Withdrawals carry daily/weekly/monthly limits and deposit turnover requirements. Casino Guru publishes a Safety Index of 5.3/10 (Below average) with no verified licence; JugadaMax assigns ${rating}/5 as its own editorial opinion — not a safety certification or user aggregate. 18+.`,
  ];
}

const FAQ_ITEMS = [
  {
    question: "Does ETH Casino require KYC?",
    answer:
      "ETH Casino declares that KYC verification is not required and that you can register with email and password. This is an operator-published policy and may change. Always confirm live rules after redirect.",
  },
  {
    question: "Does ETH Casino ask for documents?",
    answer:
      "According to the operator's public FAQ, personal documents are not required to play or request withdrawals. Confirm the registration domain because rules can be updated.",
  },
  {
    question: "How do I register at ETH Casino?",
    answer:
      "Per the operator's public material: open the registration link, enter email, create a password, select a cryptocurrency, accept the Terms and confirm your email.",
  },
  {
    question: "Is ETH Casino completely anonymous?",
    answer:
      "No-KYC reduces documentary information requested, but email, devices, wallets and blockchain data can still create traceability.",
  },
  {
    question: "Can I hold multiple accounts?",
    answer:
      "ETH Casino's public FAQ states that multiple accounts are permitted. JugadaMax does not interpret this as authorisation to evade legal restrictions, anti-fraud controls, limits, blocks, self-exclusion or registration-domain rules.",
  },
  {
    question: "What is the ETH Casino promo code?",
    answer: `The registration/campaign code supplied for JugadaMax is ${ETHCASINO_PROMO_CODE}.`,
  },
  {
    question: `Does the ${ETHCASINO_PROMO_CODE} code give a bonus?`,
    answer:
      "JugadaMax does not promote a guaranteed welcome bonus. The code jg7kkva6a identifies the registration campaign.",
  },
  {
    question: "Does ETH Casino accept Ethereum?",
    answer:
      "Yes. Ethereum is central to its identity. Confirm network and address before transferring funds.",
  },
  {
    question: "What other cryptocurrencies does it accept?",
    answer:
      "Per the Terms: BTC, ETH, XRP, USDT, SOL, BNB, DOGE, ADA, USDC, TRX and LTC. Verify minimums, network and cashier availability.",
  },
  {
    question: "Does ETH Casino have slots?",
    answer:
      "Yes. It offers slots, Bonus Buy, jackpots, Megaways and other formats per the current catalogue.",
  },
  {
    question: "Does ETH Casino have live casino?",
    answer:
      "Yes. Live casino, blackjack, roulette, baccarat, game shows and lightning games where available.",
  },
  {
    question: "Does ETH Casino have sports betting?",
    answer:
      "ETH Casino presents itself as a crypto casino, not a primary sportsbook.",
  },
  {
    question: "How long do withdrawals take?",
    answer:
      "ETH Casino states withdrawals are processed immediately; arrival time depends on the network. JugadaMax does not guarantee instant payouts.",
  },
  {
    question: "What withdrawal limits apply?",
    answer:
      "The Terms publish daily, weekly and monthly limits, up to 2 withdrawals per day and up to 7 per week, plus deposit turnover requirements.",
  },
  {
    question: "Is ETH Casino available in my country?",
    answer:
      "JugadaMax does not guarantee universal availability. Confirm access, regional restrictions and terms after redirect.",
  },
  {
    question: "Is ETH Casino licensed?",
    answer:
      "JugadaMax does not confirm a verified local licence or independently verified international licence. External sources also note the absence of verified licensing.",
  },
  {
    question: "Why does JugadaMax rate ETH Casino 4.7/5?",
    answer:
      "JugadaMax assigns ETH Casino an editorial rating of 4.7/5 for its differentiated no-KYC proposition, simple registration, broad crypto compatibility and game catalogue. This score is not a user aggregate or a guarantee of safety or withdrawal.",
  },
] as const;

const SOURCE_REFERENCES: SourceReference[] = [
  { label: "ETH Casino official site", href: "https://www.ethcasino.io/" },
  {
    label: "FAQ — does ETH Casino require KYC?",
    href: "https://www.ethcasino.io/faq/your-account/does-eth-casino-require-kyc",
  },
  {
    label: "FAQ — how to sign up",
    href: "https://www.ethcasino.io/faq/your-account/how-do-i-sign-up-at-eth-casino",
  },
  {
    label: "FAQ — multiple accounts",
    href: "https://www.ethcasino.io/faq/your-account/can-i-hold-multiple-accounts-at-eth-casino",
  },
  {
    label: "Official no-KYC page",
    href: "https://www.ethcasino.io/nokyccasino",
  },
  {
    label: "Terms and Conditions",
    href: "https://www.ethcasino.io/faq/operational-information/terms-and-conditions",
  },
  {
    label: "FAQ — withdrawal times",
    href: "https://www.ethcasino.io/faq/withdrawals/how-long-does-it-take-to-receive-my-winnings-from-eth-casino",
  },
  {
    label: "TTR Casino migration",
    href: "https://www.ethcasino.io/ttr-casino",
  },
  {
    label: "External assessment — Casino Guru",
    href: "https://casino.guru/eth-casino-review-1",
  },
  { label: "TTR Blog", href: "https://ttrblog.io/" },
  { label: "Kick: LTCCASINO-COM", href: "https://kick.com/ltccasino-com" },
  { label: "JugadaMax editorial methodology", href: "/en/how-we-review" },
  {
    label: "Partner-supplied registration link",
    note: "Campaign affiliate URL; the code identifies the campaign and does not guarantee a bonus.",
  },
];

export function EnEthCasinoReviewContent({
  review,
  casino,
  author,
}: {
  review: Review;
  casino: Casino;
  author: Author;
}) {
  const affiliateUrl = resolveOperatorLink("ethcasino", "global")?.url;
  const analysisParagraphs = buildAnalysisParagraphs(review.rating);

  return (
    <>
      <article className="mx-auto w-full max-w-5xl space-y-7 sm:space-y-8">
        <ReviewHeader review={review} casino={casino} author={author} locale="en" />

        <div className="mx-auto w-full max-w-4xl space-y-3">
          <AffiliateDisclosureEn />
          <ResponsibleGamblingNoticeEn />
          <div
            role="note"
            className="rounded-lg border border-amber-500/25 bg-amber-500/5 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
          >
            {JURISDICTION_WARNING}
          </div>
        </div>

        <div id="review-primary-offer">
          <EnEthCasinoNoKycCard context="review" />
        </div>

        <section id="ethcasino-quick-summary" aria-labelledby="ethcasino-summary-heading">
          <h2 id="ethcasino-summary-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Quick summary
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_SUMMARY.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#10BBD7]/20 bg-[#0D1824]/80 p-3"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[#56E8F6]">
                  {card.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            JugadaMax editorial rating:{" "}
            <span className="font-semibold text-foreground">{review.rating}/5</span>
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Registration code:{" "}
            <span className="font-mono font-semibold text-foreground">{ETHCASINO_PROMO_CODE}</span>
            . Does not guarantee a bonus.
          </p>
        </section>

        <section aria-labelledby="ethcasino-update-heading">
          <h2 id="ethcasino-update-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Why we updated this review
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            We keep the indexed URL{" "}
            <span className="font-medium text-foreground">/en/reviews/ethcasino</span> and strengthen
            the editorial focus on no-KYC, email-and-password registration, crypto payments and
            real withdrawal and jurisdiction risks — without positioning the brand around a welcome
            bonus.
          </p>
        </section>

        <section aria-labelledby="ethcasino-nokyc-heading">
          <h2 id="ethcasino-nokyc-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            ETH Casino without KYC
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {NO_KYC_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            ETH Casino declares that KYC verification is not required and that registration completes
            with email and password. According to the operator&apos;s public FAQ, personal documents are
            not required to play or request withdrawals. This is an operator-published policy and may
            change. Always confirm live rules after redirect.
          </p>
        </section>

        <section aria-labelledby="ethcasino-register-heading">
          <h2 id="ethcasino-register-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            How to register at ETH Casino
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
            {REGISTRATION_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            The operator declares that name, address, phone number and official ID are not requested
            during this flow. Email confirmation is part of the described process.
          </p>
        </section>

        <section aria-labelledby="ethcasino-privacy-heading">
          <h2 id="ethcasino-privacy-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Privacy: advantages and limits
          </h2>
          <p className="mt-2 text-sm font-medium text-[#56E8F6]">
            No-KYC does not mean absolute technical invisibility.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#10BBD7]/20 bg-[#0D1824]/70 p-4">
              <h3 className="text-sm font-semibold text-foreground">Privacy advantages</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {PRIVACY_ADVANTAGES.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-[#21D6EB]">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-4">
              <h3 className="text-sm font-semibold text-foreground">Privacy limits</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {PRIVACY_LIMITS.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-amber-400">
                      !
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="ethcasino-accounts-heading">
          <h2 id="ethcasino-accounts-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Does ETH Casino allow multiple accounts?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            ETH Casino&apos;s public FAQ states that multiple accounts are permitted.
          </p>
          <div
            role="note"
            className="mt-4 rounded-lg border border-amber-500/25 bg-amber-500/5 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
          >
            JugadaMax does not interpret this policy as authorisation to evade legal restrictions,
            anti-fraud controls, limits, blocks, self-exclusion or registration-domain rules.
          </div>
        </section>

        <section aria-labelledby="ethcasino-payments-heading">
          <h2 id="ethcasino-payments-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Supported cryptocurrencies
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {CRYPTO_ASSETS.map((asset) => (
              <li
                key={asset}
                className="inline-flex items-center rounded-full border border-[#10BBD7]/25 bg-[#16394A]/30 px-2.5 py-1 text-xs font-semibold text-[#DFFBFF]"
              >
                {asset}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted-foreground">
            Confirm asset, network and address before transferring funds. Blockchain transactions
            typically cannot be reversed.
          </p>
        </section>

        <section aria-labelledby="ethcasino-conditions-heading">
          <h2 id="ethcasino-conditions-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Important deposit and withdrawal conditions
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CONDITIONS_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#10BBD7]/20 bg-[#0D1824]/80 p-4"
              >
                <h3 className="text-sm font-semibold text-[#56E8F6]">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            ETH Casino states withdrawals are processed immediately; arrival time depends on the
            network. JugadaMax does not guarantee instant payouts.{" "}
            <a
              href="https://www.ethcasino.io/faq/operational-information/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("font-medium text-[#56E8F6] underline-offset-2 hover:underline", focusRing)}
            >
              Read the official Terms
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="ethcasino-games-heading">
          <h2 id="ethcasino-games-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Casino games
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {GAME_CATEGORIES.map((game) => (
              <li
                key={game}
                className="inline-flex rounded-lg border border-border/60 bg-card px-2.5 py-1.5 text-xs font-medium text-muted-foreground"
              >
                {game}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted-foreground">
            Representative providers where available: {PROVIDERS.join(", ")}. Exact title counts may
            change.
          </p>
        </section>

        <section aria-labelledby="ethcasino-mobile-heading">
          <h2 id="ethcasino-mobile-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Mobile use
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            ETH Casino works in the browser, making it easy to switch between wallet, exchange and
            play session on a phone. Before depositing, confirm compatibility, network and destination
            address.
          </p>
        </section>

        <section aria-labelledby="ethcasino-security-heading">
          <h2 id="ethcasino-security-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Security and responsible gambling
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Protect your email, password and wallets. A no-KYC model does not eliminate phishing, key
            loss or anti-fraud restrictions. 18+ only; set personal limits and read our{" "}
            <Link
              href="/en/responsible-gambling"
              className={cn("text-[#56E8F6] underline-offset-2 hover:underline", focusRing)}
            >
              responsible gambling
            </Link>{" "}
            guidance.
          </p>
        </section>

        <section aria-labelledby="ethcasino-licence-heading">
          <h2 id="ethcasino-licence-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Licensing
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            JugadaMax does not confirm a verified local licence for every market or an independently
            verified international licence for ETH Casino. No-KYC positioning is not a substitute for
            regulatory authorisation. Confirm ownership, jurisdiction and live terms on the registration
            domain before depositing.
          </p>
        </section>

        <section aria-labelledby="ethcasino-external-heading">
          <h2 id="ethcasino-external-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            External assessments and risks
          </h2>
          <div className="mt-4 rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 sm:p-5">
            <h3 className="text-sm font-semibold text-foreground">External assessment</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Casino Guru publishes an external assessment below JugadaMax&apos;s editorial rating and
              notes the absence of verified licensing and risks linked to related casinos. It also
              indicates that no predatory rules were found in the Terms directly reviewed. In live
              verification for this integration, the published Safety Index is 5.3/10 (Below average).
              This external assessment is not the JugadaMax score.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              JugadaMax assigns ETH Casino an editorial rating of 4.7/5 for its differentiated no-KYC
              proposition, simple registration, broad crypto compatibility and game catalogue. This
              score is not a user aggregate or a guarantee of safety or withdrawal.
            </p>
          </div>
        </section>

        <VerdictBox verdict={review.verdict} rating={review.rating} locale="en" />
        <ProsCons pros={review.pros} cons={review.cons} locale="en" />

        <section aria-labelledby="ethcasino-analysis-heading">
          <h2 id="ethcasino-analysis-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Editorial analysis
          </h2>
          <div className="mt-4 space-y-4">
            {analysisParagraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 48)}
                className="text-sm leading-relaxed text-muted-foreground sm:text-base"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section aria-labelledby="ethcasino-community-heading">
          <h2 id="ethcasino-community-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            TTR Blog and community
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Official material describes ETH Casino as the successor to TTR Casino. The project maintains
            a connection with{" "}
            <a
              href="https://ttrblog.io/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("text-[#56E8F6] underline-offset-2 hover:underline", focusRing)}
            >
              TTR Blog
            </a>{" "}
            and the Kick channel{" "}
            <a
              href="https://kick.com/ltccasino-com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("text-[#56E8F6] underline-offset-2 hover:underline", focusRing)}
            >
              LTCCASINO-COM
            </a>
            . That community connection does not replace independent editorial assessment or prove
            safety.
          </p>
        </section>

        <section
          aria-labelledby="ethcasino-final-cta-heading"
          className="rounded-xl border border-[#10BBD7]/25 bg-gradient-to-br from-[#080D18] via-[#0D1824] to-[#132535] p-5 sm:p-6"
        >
          <h2 id="ethcasino-final-cta-heading" className="text-lg font-semibold text-foreground">
            Register at ETH Casino
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Confirm the destination domain, no-KYC policy, cryptocurrency, network, limits and
            withdrawal rules before depositing.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {affiliateUrl ? (
              <a
                href={affiliateUrl}
                target="_blank"
                rel={AFFILIATE_REL}
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-md bg-[#10BBD7] px-5 py-2.5 text-sm font-semibold text-[#080D18] transition-colors hover:bg-[#21D6EB]",
                  focusRing,
                )}
              >
                Register at ETH Casino
              </a>
            ) : null}
            <Link
              href="/en/casinos-no-kyc"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-[#21D6EB]/40 px-5 py-2.5 text-sm font-semibold text-[#56E8F6] transition-colors hover:bg-[#16394A]/40",
                focusRing,
              )}
            >
              Compare no-KYC casinos
            </Link>
            <Link
              href="/en/how-we-review"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-border/60 px-5 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-card",
                focusRing,
              )}
            >
              How we review
            </Link>
          </div>
        </section>

        <section aria-labelledby="ethcasino-faq-heading">
          <h2 id="ethcasino-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Frequently asked questions
          </h2>
          <div className="mt-4 divide-y divide-white/10 rounded-xl border border-border/60 bg-card">
            {FAQ_ITEMS.map((item) => (
              <details key={item.question} className="group px-4 py-1 sm:px-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-sm font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                  >
                    ▾
                  </span>
                </summary>
                <p className="pb-4 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <SourceReferenceBlock
          title="Sources & references"
          description="Operator-published policy, external assessment, related links, editorial methodology and campaign affiliate link."
          items={SOURCE_REFERENCES}
        />
      </article>

      {affiliateUrl ? (
        <MobileStickyOfferCta
          showAfterId="review-primary-offer"
          compactPrimaryLabel="Register"
          compactSecondaryLabel="Compare"
          primaryLabel="Register at ETH Casino"
          primaryHref={affiliateUrl}
          secondaryLabel="Compare"
          secondaryHref="/en/casinos-no-kyc"
        />
      ) : null}
    </>
  );
}
