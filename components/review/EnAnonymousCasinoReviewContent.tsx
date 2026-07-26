import Link from "next/link";
import type { Author, Casino, Review } from "@/types/content";
import { ANONYMOUS_CASINO_PROMO_CODE } from "@/lib/affiliate/constants";
import { resolveOperatorLink } from "@/lib/affiliate/operator-links";
import { EnAnonymousCasinoNoKycCard } from "@/components/verticals/nokyc/en/EnNoKycFeaturedCards";
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
import { buildOperatorHomepageSourceReference } from "@/lib/affiliate/source-references";
import { cn, focusRing } from "@/lib/utils";

const AFFILIATE_REL = "sponsored nofollow noopener noreferrer";

const JURISDICTION_WARNING =
  "Anonymous Casino / CryptoCasino.CC is an international crypto casino. JugadaMax does not claim a verified local licence for every market or absolute technical anonymity. Availability, registration, payments, limits, fraud controls and withdrawals depend on your location, account and live registration-domain rules.";

const QUICK_SUMMARY = [
  { title: "Type", text: "No-KYC crypto casino" },
  { title: "Registration", text: "Email + password" },
  { title: "Payments", text: "BTC, ETH, USDT and five more cryptocurrencies" },
  { title: "Main caution", text: "No verified licence and withdrawal limits" },
] as const;

const NO_KYC_CARDS = [
  {
    title: "No documents",
    text: "The site is marketed as no-KYC.",
  },
  {
    title: "Email and password",
    text: "The FAQ describes registration with email and password.",
  },
  {
    title: "Crypto-only",
    text: "Deposits and withdrawals are made with cryptocurrencies.",
  },
  {
    title: "Live policy",
    text: "Terms and controls can change.",
  },
] as const;

const PRIVACY_ADVANTAGES = [
  "No document upload in the public registration flow",
  "No bank card data",
  "Wallet-based deposits",
  "Limited signup fields",
  "No fiat banking dependency",
] as const;

const PRIVACY_LIMITS = [
  "Email is an identifier",
  "The Privacy Policy discloses IP processing",
  "Wallet numbers are processed",
  "Cookies may be used",
  "Blockchain history is public",
  "Anti-fraud investigations apply",
  "Local laws still apply",
  "No-KYC is not a licence",
] as const;

const CRYPTO_ASSETS = [
  "BTC",
  "ETH",
  "XRP",
  "USDT",
  "SOL",
  "DOGE",
  "USDC",
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
    text: "Up to 2 withdrawals per day and up to 7 per calendar week.",
  },
  {
    title: "Per-asset limits",
    text: "Daily, weekly and monthly minimums and maximums exist per cryptocurrency.",
  },
  {
    title: "Processing",
    text: "Withdrawals depend on the blockchain and published limits.",
  },
  {
    title: "Incorrect transfers",
    text: "If recovery is technically possible, a fee of at least €300 may apply.",
  },
] as const;

const GAME_CATEGORIES = [
  "Slots",
  "Bonus Buy",
  "Jackpot",
  "Megaways",
  "Books",
  "Classic",
  "Bonanza",
  "Crash",
  "Plinko",
  "Limbo",
  "Mines",
  "Dice",
  "Keno",
  "Blackjack",
  "Roulette",
  "Baccarat",
  "Game Shows",
  "Lightning Games",
  "Poker",
  "Live Casino",
] as const;

const REGISTRATION_STEPS = [
  "Open the approved registration link.",
  "Select Register.",
  "Enter your email.",
  "Create a password.",
  "Accept the Terms.",
  "Confirm your email if the operator requests it.",
  "Select a cryptocurrency in the cashier.",
] as const;

function buildAnalysisParagraphs(rating: number): string[] {
  return [
    "Anonymous Casino is the promotional brand for the casino available at CryptoCasino.CC. They are not separate operators: the same integration is presented under both names in public materials and in this review.",
    "Within JugadaMax's no-KYC cluster, Anonymous Casino holds the top editorial position for its clear privacy positioning, email-and-password registration, crypto coverage and broad catalogue. ETH Casino and LTC Casino remain specialised alternatives.",
    "The no-KYC model reduces document verification, but it does not remove technical traceability. The Privacy Policy discloses processing of IP, wallet, cookies and transactional information; public blockchains remain auditable.",
    "The Terms allow multiple accounts, although they also authorise withdrawal restrictions when abuse is suspected or emails are unconfirmed. There is 1x turnover, possible 10x on certain live games, withdrawal limits and anti-fraud investigation powers.",
    `Casino Guru publishes a Safety Index of 5.3/10 (Below average) with no verified licence, although it did not find predatory clauses in the Terms it reviewed directly. JugadaMax assigns ${rating}/5 as an editorial product-fit opinion in the no-KYC niche — not as a safety certification or user aggregate. 18+.`,
  ];
}

function buildFaqItems(rating: number) {
  return [
    {
      question: "Are Anonymous Casino and CryptoCasino.CC the same?",
      answer:
        "Anonymous Casino is the promotional brand used for the casino available at CryptoCasino.CC.",
    },
    {
      question: "Does Anonymous Casino require KYC?",
      answer:
        "Anonymous Casino, available at CryptoCasino.CC, is presented as a no-KYC crypto casino without document verification. Always confirm live rules after redirect.",
    },
    {
      question: "Does it ask for documents?",
      answer:
        "According to the public CryptoCasino.CC FAQ, an account can be created with email and password without entering personal data in the described form.",
    },
    {
      question: "How do I register?",
      answer:
        "Open the affiliate link, select Register, enter email, create a password, accept the Terms and confirm your email if requested. Then choose a cryptocurrency in the cashier.",
    },
    {
      question: "Is it completely anonymous?",
      answer:
        "No-KYC reduces document verification, but email, IP, cookies, wallets and blockchain can still create traceability.",
    },
    {
      question: "What data does it process?",
      answer:
        "The Privacy Policy discloses processing of IP, crypto wallet number, cookies/preferences, deposit, winnings and cashout information, marketing unless opted out, and anti-fraud information.",
    },
    {
      question: "Can I have multiple accounts?",
      answer:
        "Published Terms allow multiple accounts, but also authorise withdrawal restrictions when abuse is suspected or emails are unconfirmed. JugadaMax does not interpret this rule as permission to evade blocks, anti-fraud controls, self-exclusion, legal restrictions or live limits.",
    },
    {
      question: "What is the Anonymous Casino code?",
      answer: `The registration/campaign code supplied for JugadaMax is ${ANONYMOUS_CASINO_PROMO_CODE}.`,
    },
    {
      question: `Does the code ${ANONYMOUS_CASINO_PROMO_CODE} give a bonus?`,
      answer: "The code identifies the registration campaign and does not guarantee a bonus.",
    },
    {
      question: "Which cryptocurrencies does it accept?",
      answer:
        "According to Terms and deposit FAQ: BTC, ETH, XRP, USDT, SOL, DOGE, USDC and LTC. Confirm network and minimums in the cashier.",
    },
    {
      question: "Does it have slots?",
      answer:
        "Yes. It includes slots, Bonus Buy, jackpots, Megaways and classic formats per catalogue.",
    },
    {
      question: "Does it have crypto games?",
      answer: "Yes. Crash, Plinko, Limbo, Mines, Dice and Keno are part of the public catalogue.",
    },
    {
      question: "Does it have live casino?",
      answer:
        "Yes. Blackjack, roulette, baccarat, game shows, lightning games and poker appear subject to availability.",
    },
    {
      question: "Does it have sports betting?",
      answer: "Anonymous Casino is presented as a crypto casino, not as a sportsbook.",
    },
    {
      question: "How long do withdrawals take?",
      answer:
        "Withdrawals are processed according to blockchain times and published limits. JugadaMax does not guarantee instant withdrawals.",
    },
    {
      question: "How many withdrawals can I make?",
      answer:
        "The Terms publish up to 2 withdrawals per day and up to 7 per calendar week, plus period and per-asset limits.",
    },
    {
      question: "What does the 1x requirement mean?",
      answer:
        "Before withdrawing, deposits must be wagered at least once (1x). In certain cases of play solely on live Roulette/Baccarat, up to 10x may apply.",
    },
    {
      question: "Is it available in my country?",
      answer:
        "JugadaMax does not guarantee universal availability from every jurisdiction. Confirm access and Terms after redirect.",
    },
    {
      question: "Does it have a local licence?",
      answer:
        "No. JugadaMax does not confirm a verified local licence for every market or an independently verified international licence.",
    },
    {
      question: `Why does JugadaMax rate it ${rating}/5?`,
      answer: `JugadaMax assigns Anonymous Casino an editorial rating of ${rating}/5 for its specialised no-KYC focus, straightforward registration, crypto variety and game catalogue. This score is not a user aggregate or a guarantee of safety, licensing or withdrawal.`,
    },
  ] as const;
}

const SOURCE_REFERENCES: SourceReference[] = [
  buildOperatorHomepageSourceReference({
    operatorId: "cryptocasino",
    operatorName: "CryptoCasino.CC",
    market: "global",
    locale: "en",
    fallbackOfficialHref: "https://www.cryptocasino.cc/",
  }),
  {
    label: "FAQ — how to create an account",
    href: "https://www.cryptocasino.cc/faq/your-first-steps/how-do-i-create-an-account",
  },
  {
    label: "Terms and Conditions",
    href: "https://www.cryptocasino.cc/terms-and-conditions",
  },
  {
    label: "FAQ — deposit methods",
    href: "https://www.cryptocasino.cc/faq/deposits/what-deposit-methods-do-you-accept",
  },
  {
    label: "Privacy Policy",
    href: "https://www.cryptocasino.cc/faq/general-information/privacy-policy",
  },
  {
    label: "External assessment — Casino Guru",
    href: "https://casino.guru/cryptocasino-cc-review",
  },
  { label: "TTR Blog", href: "https://ttrblog.io/" },
  { label: "Kick: LTCCASINO-COM", href: "https://kick.com/ltccasino-com" },
  { label: "JugadaMax editorial methodology", href: "/en/how-we-review" },
  {
    label: "Partner-supplied registration link",
    note: "Campaign affiliate URL; the code identifies the campaign and does not guarantee a bonus.",
  },
];

export function EnAnonymousCasinoReviewContent({
  review,
  casino,
  author,
}: {
  review: Review;
  casino: Casino;
  author: Author;
}) {
  const ctaHref = resolveOperatorLink("cryptocasino", "global")?.url;
  const analysisParagraphs = buildAnalysisParagraphs(review.rating);
  const faqItems = buildFaqItems(review.rating);

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
          <EnAnonymousCasinoNoKycCard context="review" />
        </div>

        <section id="cryptocasino-summary" aria-labelledby="anonymous-summary-heading">
          <h2 id="anonymous-summary-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Quick summary
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_SUMMARY.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#E0001B]/25 bg-[#0B0D12]/80 p-3"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[#FF4A2E]">
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
            <span className="font-mono font-semibold text-foreground">
              {ANONYMOUS_CASINO_PROMO_CODE}
            </span>
            . Does not guarantee a bonus.
          </p>
        </section>

        <section aria-labelledby="anonymous-identity-heading">
          <h2 id="anonymous-identity-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Anonymous Casino and CryptoCasino.CC
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Anonymous Casino is the promotional brand used for the casino available at
            CryptoCasino.CC. In this review we use both names for SEO and brand clarity, without
            implying they are separate operators.
          </p>
        </section>

        <section aria-labelledby="anonymous-nokyc-heading">
          <h2 id="anonymous-nokyc-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Anonymous Casino without KYC
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
            Anonymous Casino, available at CryptoCasino.CC, is presented as a no-KYC crypto casino
            without document verification. According to the public CryptoCasino.CC FAQ, an account
            can be created with email and password without entering personal data in the described
            form.
          </p>
        </section>

        <section aria-labelledby="anonymous-register-heading">
          <h2 id="anonymous-register-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            How to register at Anonymous Casino
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground">
            {REGISTRATION_STEPS.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            The public FAQ describes a flow without name, address, phone or documents in the form.
          </p>
        </section>

        <section aria-labelledby="anonymous-privacy-heading">
          <h2 id="anonymous-privacy-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Privacy: advantages and limits
          </h2>
          <p className="mt-2 text-sm font-medium text-[#FF4A2E]">
            No-KYC does not mean absolute technical invisibility.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#E0001B]/25 bg-[#0B0D12]/70 p-4">
              <h3 className="text-sm font-semibold text-foreground">Privacy advantages</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {PRIVACY_ADVANTAGES.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-[#FF1C24]">
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

        <section aria-labelledby="anonymous-accounts-heading">
          <h2 id="anonymous-accounts-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Are multiple accounts allowed?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            CryptoCasino.CC Terms allow registering multiple accounts without a general limitation,
            but indicate that withdrawals may be restricted when abuse is suspected or emails are
            unconfirmed.
          </p>
          <div
            role="note"
            className="mt-4 rounded-lg border border-amber-500/25 bg-amber-500/5 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
          >
            Do not use multiple accounts to evade self-exclusion, legal restrictions, blocks, limits
            or security controls. JugadaMax does not interpret this rule as permission to evade
            blocks, anti-fraud controls, self-exclusion, legal restrictions or live limits.
          </div>
        </section>

        <section aria-labelledby="anonymous-payments-heading">
          <h2 id="anonymous-payments-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Supported cryptocurrencies
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {CRYPTO_ASSETS.map((asset) => (
              <li
                key={asset}
                className="inline-flex items-center rounded-full border border-[#E0001B]/30 bg-[#151820]/80 px-2.5 py-1 text-xs font-semibold text-[#F7F7F7]"
              >
                {asset}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted-foreground">
            Check asset, network and address before transferring funds. An incorrect blockchain
            transfer may be irreversible.
          </p>
        </section>

        <section aria-labelledby="anonymous-conditions-heading">
          <h2 id="anonymous-conditions-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Important deposit and withdrawal conditions
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CONDITIONS_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#E0001B]/20 bg-[#0B0D12]/80 p-4"
              >
                <h3 className="text-sm font-semibold text-[#FF4A2E]">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Withdrawals are processed according to blockchain times and published limits. JugadaMax
            does not guarantee instant withdrawals.{" "}
            <a
              href="https://www.cryptocasino.cc/terms-and-conditions"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("font-medium text-[#FF4A2E] underline-offset-2 hover:underline", focusRing)}
            >
              Read the official Terms
            </a>
            .
          </p>
        </section>

        <section aria-labelledby="anonymous-antifraud-heading">
          <h2 id="anonymous-antifraud-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Anti-fraud and account controls
          </h2>
          <div
            role="note"
            className="mt-4 rounded-lg border border-amber-500/25 bg-amber-500/5 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
          >
            The no-KYC model does not remove anti-fraud controls. The Terms allow blocking or
            investigating accounts for suspicious activity, including collusion, payment fraud,
            third-party software, cheating or attempts to hide blockchain traces. An investigation
            may restrict the account for a prolonged period.
          </div>
        </section>

        <section aria-labelledby="anonymous-games-heading">
          <h2 id="anonymous-games-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
            Anonymous Casino is presented as a crypto casino, not as a sportsbook. The exact number
            of titles can change.
          </p>
        </section>

        <section aria-labelledby="anonymous-mobile-heading">
          <h2 id="anonymous-mobile-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Mobile and browser experience
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            CryptoCasino.CC works in the browser, making it easy to switch between wallet and play
            session on a phone. Before depositing, confirm compatibility, network and destination
            address.
          </p>
        </section>

        <section aria-labelledby="anonymous-licence-heading">
          <h2 id="anonymous-licence-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Licence
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            JugadaMax does not confirm a verified local licence for every market or an independently
            verified international licence. Review footer and Terms after redirect.
          </p>
        </section>

        <section aria-labelledby="anonymous-external-heading">
          <h2 id="anonymous-external-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            External assessments and risks
          </h2>
          <div className="mt-4 rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 sm:p-5">
            <h3 className="text-sm font-semibold text-foreground">External assessment</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Casino Guru publishes a below-average external assessment and does not confirm a
              current licence. It also notes that it did not find predatory rules in the Terms it
              reviewed directly. In live verification for this integration, the published Safety
              Index is 5.3/10 (Below average). This external assessment is not the JugadaMax score.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              JugadaMax assigns Anonymous Casino an editorial rating of {review.rating}/5 for its
              specialised no-KYC focus, straightforward registration, crypto variety and game
              catalogue. This score is not a user aggregate or a guarantee of safety, licensing or
              withdrawal.
            </p>
          </div>
        </section>

        <VerdictBox verdict={review.verdict} rating={review.rating} locale="en" />
        <ProsCons pros={review.pros} cons={review.cons} locale="en" />

        <section aria-labelledby="anonymous-analysis-heading">
          <h2 id="anonymous-analysis-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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

        <section aria-labelledby="anonymous-community-heading">
          <h2 id="anonymous-community-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            TTR Blog and Kick
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            The project maintains editorial links with{" "}
            <a
              href="https://ttrblog.io/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("text-[#FF4A2E] underline-offset-2 hover:underline", focusRing)}
            >
              TTR Blog
            </a>{" "}
            and the streaming channel{" "}
            <a
              href="https://kick.com/ltccasino-com"
              target="_blank"
              rel="noopener noreferrer"
              className={cn("text-[#FF4A2E] underline-offset-2 hover:underline", focusRing)}
            >
              LTCCASINO-COM
            </a>
            , but this relationship does not replace independent evaluation.
          </p>
        </section>

        <section
          aria-labelledby="anonymous-final-cta-heading"
          className="rounded-xl border border-[#E0001B]/30 bg-gradient-to-br from-[#050607] via-[#0B0D12] to-[#151820] p-5 sm:p-6"
        >
          <h2 id="anonymous-final-cta-heading" className="text-lg font-semibold text-foreground">
            Register at Anonymous Casino
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Confirm the destination domain, no-KYC policy, cryptocurrency, network, turnover, limits
            and withdrawal rules before depositing.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {ctaHref ? (
              <a
                href={ctaHref}
                target="_blank"
                rel={AFFILIATE_REL}
                className={cn(
                  "inline-flex min-h-11 items-center justify-center rounded-md bg-[#E0001B] px-5 py-2.5 text-sm font-semibold text-[#F7F7F7] transition-colors hover:bg-[#FF1C24]",
                  focusRing,
                )}
              >
                Register at Anonymous Casino
              </a>
            ) : null}
            <Link
              href="/en/casinos-no-kyc"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-[#E0001B]/45 px-5 py-2.5 text-sm font-semibold text-[#FF4A2E] transition-colors hover:bg-[#B30016]/20",
                focusRing,
              )}
            >
              Compare no-KYC casinos
            </Link>
          </div>
        </section>

        <section aria-labelledby="anonymous-faq-heading">
          <h2 id="anonymous-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Frequently asked questions
          </h2>
          <div className="mt-4 divide-y divide-white/10 rounded-xl border border-border/60 bg-card">
            {faqItems.map((item) => (
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
          description="Operator-published policies, external assessment, related links, editorial methodology and campaign affiliate link."
          items={SOURCE_REFERENCES}
        />
      </article>

      {ctaHref ? (
        <MobileStickyOfferCta
          showAfterId="review-primary-offer"
          compactPrimaryLabel="Register"
          compactSecondaryLabel="Compare"
          primaryLabel="Register at Anonymous Casino"
          primaryHref={ctaHref}
          secondaryLabel="Compare"
          secondaryHref="/en/casinos-no-kyc"
        />
      ) : null}
    </>
  );
}
