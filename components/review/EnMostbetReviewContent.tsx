import Link from "next/link";
import type { Author, Casino, Review } from "@/types/content";
import {
  MOSTBET_APP_DOWNLOAD_URL,
  MOSTBET_PLAYERS_AFFILIATE_URL,
  MOSTBET_PROMO_CODE,
} from "@/lib/affiliate/constants";
import { EnMostbetFeaturedCard } from "@/components/affiliate/EnMostbetFeaturedCard";
import { MobileStickyOfferCta } from "@/components/affiliate/MobileStickyOfferCta";
import { AffiliateDisclosureEn } from "@/components/trust/AffiliateDisclosureEn";
import { ResponsibleGamblingNoticeEn } from "@/components/trust/ResponsibleGamblingNoticeEn";
import { JurisdictionWarning } from "@/components/trust/JurisdictionWarning";
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
  "Mostbet is presented as an international operator. A localised interface or currency does not equal local licensing in your jurisdiction. Legal availability, registration, bonuses, payments, KYC and withdrawals depend on your location and live operator terms. Do not use VPNs or false location data to access restricted services.";

const EXTERNAL_RISK_NOTE =
  "External assessments are mixed. Casino Guru currently shows an above-average Safety Index, while AskGamblers publishes a lower editorial score. User reviews, complaints, bonus terms, KYC and withdrawal experiences should be checked carefully. These third-party scores are not JugadaMax ratings.";

const QUICK_SUMMARY = [
  { title: "Type", text: "Fiat/multi-currency casino + sportsbook" },
  { title: "Campaign", text: "125% + 250 FS with Casino or Sports selection" },
  { title: "Payments", text: "Cards, e-wallets and crypto depending on account" },
  { title: "Main caution", text: "Local licensing, wagering, KYC and withdrawals" },
] as const;

const BONUS_SELECTION = [
  {
    title: "Casino",
    lines: ["125% + 250 FS", "First deposit", "Subject to live terms"],
  },
  {
    title: "Sports",
    lines: ["125% + 250 FS", "First deposit", "Subject to markets and live terms"],
  },
  {
    title: "No bonus",
    lines: [
      "Continue without a promotion",
      "Useful if you prefer to avoid promotional wagering",
    ],
  },
] as const;

const SPORTSBOOK_CARDS = [
  { title: "Football", text: "Pre-match and live markets according to current catalogue and jurisdiction." },
  { title: "Live betting", text: "In-play events with variable odds; early settlement is not guaranteed." },
  { title: "Esports", text: "Digital disciplines subject to regional availability and terms." },
  { title: "Tennis and basketball", text: "Popular sports subject to calendar and active markets." },
  { title: "Cricket and international sports", text: "Broad coverage by GEO; confirm markets on your account." },
  { title: "Odds and markets", text: "Odds change continuously; settlement rules must be checked live." },
] as const;

const CASINO_CARDS = [
  { title: "Slots", text: "Broad lobby according to providers enabled by region." },
  { title: "Live casino", text: "Live tables subject to catalogue and operator schedules." },
  { title: "Poker", text: "Poker formats where the operator enables them." },
  { title: "Aviator", text: "Popular instant game; risk and limits follow live terms." },
  { title: "Bonus Buy", text: "Feature-buy options on eligible slots according to catalogue." },
  { title: "Crash / instant games", text: "Fast formats subject to regional availability." },
  { title: "Roulette and blackjack", text: "RNG and live tables according to current catalogue." },
  { title: "Providers", text: "External databases describe a very broad catalogue; regional availability may differ." },
] as const;

const PAYMENT_CARDS = [
  { title: "Cards", text: "Visa and Mastercard depending on cashier and country; limits and fees vary." },
  { title: "Local methods (externally reported)", text: "Some external sources mention local rails; JugadaMax does not guarantee they appear in your cashier." },
  { title: "E-wallets", text: "Wallets and local methods depending on country and account." },
  { title: "Bitcoin / USDT", text: "Secondary crypto options; confirm network, minimums and fees." },
  { title: "Multi-currency accounts", text: "Account currency and limits depend on registration and campaign." },
  { title: "Account-specific cashier", text: "Visible methods may differ between users and GEO." },
] as const;

const KYC_CARDS = [
  {
    title: "KYC",
    text: "The operator may request identity, address, source of funds or payment-method ownership.",
  },
  {
    title: "Withdrawals",
    text: "JugadaMax does not guarantee withdrawal timing. Processing, limits, networks, reviews and weekends may affect timelines.",
  },
  {
    title: "Active bonus withdrawals",
    text: "An active bonus may impose wagering, eligible games or markets, maximum stake and other conditions before withdrawal.",
  },
  {
    title: "Account restrictions",
    text: "Anti-fraud controls, duplicate accounts, payment discrepancies or terms breaches may trigger reviews.",
  },
] as const;

const ANALYSIS_PARAGRAPHS = [
  "Mostbet integrates sportsbook, casino, live casino, poker, esports and mobile apps in one international platform. JugadaMax classifies it as a fiat/multi-currency mixed operator with a substantial sportsbook — not as a crypto casino — and positions it as a secondary option in English fiat and betting coverage.",
  "Although external sources report Bitcoin, USDT and other cryptocurrencies, that does not justify listing Mostbet as a crypto casino: crypto payments are secondary and the core proposition is fiat plus sportsbook.",
  `The affiliate landing supplied shows 125% + 250 FS with Casino or Sports selection and promo code ${MOSTBET_PROMO_CODE}. JugadaMax does not publish a universal currency cap or fixed wagering figure: minimum deposit, rollover and eligibility must be confirmed after redirect.`,
  "Localised language and currency do not equal local licensing in regulated markets. External sources identify Bizbon N.V. and Curaçao licence OGL/2024/597/0249; JugadaMax could not confirm the live footer during this review. KYC, withdrawals and external complaints require caution.",
  "JugadaMax rates Mostbet 3.8/5: broad product, active campaign and mobile app, but mixed external assessments, variable promotional rules and no universal local licensing claim. 18+ only.",
] as const;

const FAQ_ITEMS = [
  {
    question: "What is the Mostbet welcome bonus?",
    answer:
      "The supplied landing shows 125% + 250 FS on the first deposit with Casino or Sports selection. Maximum amount, currency, minimum deposit and wagering depend on campaign, account and GEO.",
  },
  {
    question: "Can I choose between casino and sports bonuses?",
    answer:
      "Yes, the affiliate landing allows Casino or Sports promotion selection, or continuing without a bonus. Each option has distinct terms that must be confirmed before depositing.",
  },
  {
    question: "What is the minimum deposit?",
    answer:
      "External sources show different values by GEO and currency. Confirm the minimum deposit shown on your account and active promotion before depositing.",
  },
  {
    question: "What is the bonus wagering requirement?",
    answer:
      "Wagering varies by campaign, product (casino or sports) and live terms. JugadaMax does not publish a universal rollover figure.",
  },
  {
    question: "Does Mostbet have both casino and sportsbook?",
    answer:
      "Yes. Mostbet combines casino, live casino, poker, instant games and sportsbook on one international platform.",
  },
  {
    question: "Does Mostbet accept cryptocurrencies?",
    answer:
      "External sources mention Bitcoin, USDT and other cryptocurrencies as secondary methods. This does not make Mostbet a crypto casino on JugadaMax.",
  },
  {
    question: "Does Mostbet have an app?",
    answer:
      "Yes, there is an app download flow. JugadaMax links the app only in the dedicated section of this review.",
  },
  {
    question: "Does Mostbet require KYC?",
    answer:
      "Mostbet may request identity, residence or source-of-funds verification before withdrawals or certain promotions.",
  },
  {
    question: "How long do withdrawals take?",
    answer:
      "JugadaMax does not guarantee withdrawal times. Limits, reviews, networks and anti-fraud controls may affect processing.",
  },
  {
    question: "Is Mostbet available in my country?",
    answer:
      "Mostbet may show localised interfaces, but JugadaMax does not claim universal local licensing or legal availability. Check official restrictions and terms.",
  },
  {
    question: "Is Mostbet licensed?",
    answer:
      "External sources identify Curaçao licence OGL/2024/597/0249 under Bizbon N.V. JugadaMax did not confirm the live footer; this is not local authorisation in regulated markets.",
  },
] as const;

const SOURCE_REFERENCES: SourceReference[] = [
  buildOperatorHomepageSourceReference({
    operatorId: "mostbet",
    operatorName: "Mostbet",
    market: "global",
    locale: "en",
    fallbackOfficialHref: "https://mostbet.com/",
  }),
  { label: "Mostbet — terms and conditions", href: "https://mostbet.com/rules" },
  {
    label: "Casino Guru — Mostbet review",
    href: "https://casino.guru/mostbet-casino-review",
    note: "External assessment; not the JugadaMax editorial rating (3.8/5).",
  },
  {
    label: "AskGamblers — Mostbet review",
    href: "https://www.askgamblers.com/online-casinos/reviews/mostbet-casino",
    note: "External assessment with mixed signals.",
  },
  { label: "JugadaMax editorial methodology", href: "/en/how-we-review" },
  {
    label: "Partner-supplied campaign landing",
    note: "125% + 250 FS with Casino/Sports selection; GEO-specific banners may differ.",
  },
];

export function EnMostbetReviewContent({
  review,
  casino,
  author,
}: {
  review: Review;
  casino: Casino;
  author: Author;
}) {
  return (
    <>
      <article className="mx-auto w-full max-w-5xl space-y-7 sm:space-y-8">
        <ReviewHeader review={review} casino={casino} author={author} locale="en" />

        <div className="mx-auto w-full max-w-4xl space-y-3">
          <AffiliateDisclosureEn />
          <ResponsibleGamblingNoticeEn />
          <JurisdictionWarning>{JURISDICTION_WARNING}</JurisdictionWarning>
        </div>

        <div id="review-primary-offer">
          <EnMostbetFeaturedCard context="review" />
        </div>

        <section
          aria-labelledby="mostbet-quick-summary-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="mostbet-quick-summary-heading" className="text-lg font-semibold text-foreground">
            Quick summary
          </h2>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            {QUICK_SUMMARY.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.title}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="mostbet-bonus-selection-heading">
          <h2
            id="mostbet-bonus-selection-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            Choose Casino or Sports
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {BONUS_SELECTION.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#FF6B00]/20 bg-[#052B52]/80 p-4"
              >
                <p className="text-sm font-bold text-[#FF861A]">{card.title}</p>
                <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                  {card.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Declining a bonus does not remove general account terms, KYC or withdrawal policies.
          </p>
        </section>

        <section aria-labelledby="mostbet-sportsbook-heading">
          <h2 id="mostbet-sportsbook-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Sportsbook
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SPORTSBOOK_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="mostbet-casino-heading">
          <h2 id="mostbet-casino-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Casino and live casino
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CASINO_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="mostbet-app-heading"
          className="rounded-xl border border-[#0A5A9C]/25 bg-gradient-to-br from-[#031A36] via-[#052B52] to-[#074477] p-5 sm:p-6"
        >
          <h2 id="mostbet-app-heading" className="text-lg font-semibold text-foreground">
            Mostbet app
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            The partner supplied a separate link for app download. Operating system, version, file
            type, permissions, regional availability and updates must be checked after redirect.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Download apps only from operator or authorised partner destinations. Verify domain,
            signature, permissions and compatibility before installing.
          </p>
          <div className="mt-4">
            <a
              href={MOSTBET_APP_DOWNLOAD_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-[#96DB00]/40 bg-[#052B52] px-5 py-2.5 text-sm font-semibold text-[#96DB00] transition-colors hover:bg-[#78C800]/10",
                focusRing,
              )}
            >
              Download Mostbet app
            </a>
          </div>
        </section>

        <section aria-labelledby="mostbet-payments-heading">
          <h2 id="mostbet-payments-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Payments
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PAYMENT_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Cards, local methods and cryptocurrencies may not appear simultaneously. JugadaMax does
            not guarantee methods that are not visible in your account cashier.
          </p>
        </section>

        <section aria-labelledby="mostbet-kyc-heading">
          <h2 id="mostbet-kyc-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            KYC and withdrawals
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {KYC_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="mostbet-licence-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="mostbet-licence-heading" className="text-lg font-semibold text-foreground">
            Licence and ownership
          </h2>
          <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">Operator (external sources)</dt>
              <dd>Bizbon N.V.</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Reported licence</dt>
              <dd>Curaçao Gaming Authority — OGL/2024/597/0249</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Bizbon N.V. and OGL/2024/597/0249 are reported by external sources. JugadaMax did not
            confirm this directly on an accessible live footer during this review. This is not local
            authorisation in regulated markets.
          </p>
        </section>

        <section
          aria-labelledby="mostbet-external-heading"
          className="rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 sm:p-5"
        >
          <h2 id="mostbet-external-heading" className="text-lg font-semibold text-foreground">
            External assessment note
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{EXTERNAL_RISK_NOTE}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Casino Guru currently reports a Safety Index of 6.7/10, described as above average.
            AskGamblers publishes an editorial CasinoRank of 4/10. Both platforms contain user reviews
            and complaints. JugadaMax independently assigns 3.8/5.
          </p>
        </section>

        <VerdictBox verdict={review.verdict} rating={review.rating} locale="en" />

        <section aria-label="Pros and cons">
          <h2 className="mb-3 text-xl font-semibold text-foreground">Pros and cons</h2>
          <ProsCons pros={review.pros} cons={review.cons} locale="en" />
        </section>

        <section aria-label="Analysis" className="mx-auto max-w-4xl space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Analysis</h2>
          {ANALYSIS_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {paragraph}
            </p>
          ))}
        </section>

        <section
          aria-labelledby="mostbet-final-cta-heading"
          className="rounded-xl border border-[#FF6B00]/25 bg-gradient-to-br from-[#031A36] via-[#052B52] to-[#074477] p-5 sm:p-6"
        >
          <h2 id="mostbet-final-cta-heading" className="text-lg font-semibold text-foreground">
            Review Mostbet
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Confirm your selected promotion, currency, payments, KYC, markets and withdrawal rules
            directly on Mostbet before depositing or betting. Promo code{" "}
            <span className="font-semibold text-foreground">{MOSTBET_PROMO_CODE}</span> applies to
            the current campaign when requested during registration.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <a
              href={MOSTBET_PLAYERS_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md bg-[#FF6B00] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#FF861A]",
                focusRing,
              )}
            >
              Visit Mostbet
            </a>
            <Link
              href="/en/casinos-fiat"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-[#96DB00]/40 px-5 py-2.5 text-sm font-semibold text-[#96DB00] transition-colors hover:bg-[#78C800]/10",
                focusRing,
              )}
            >
              Compare fiat casinos
            </Link>
          </div>
        </section>

        <section aria-labelledby="mostbet-faq-heading">
          <h2 id="mostbet-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
          description="Official operator sources, partner campaign landing, external assessments and JugadaMax editorial methodology. Third-party reviews inform caution — they are not JugadaMax ratings."
          items={SOURCE_REFERENCES}
        />
      </article>

      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Visit"
        compactSecondaryLabel="Compare"
        primaryLabel="Visit Mostbet"
        primaryHref={MOSTBET_PLAYERS_AFFILIATE_URL}
        secondaryLabel="Compare fiat casinos"
        secondaryHref="/en/casinos-fiat"
      />
    </>
  );
}
