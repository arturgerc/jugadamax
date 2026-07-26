import Link from "next/link";
import type { Author, Casino, Review } from "@/types/content";
import { MELBET_AFFILIATE_URL, MELBET_PROMO_CODE } from "@/lib/affiliate/constants";
import { EnMelbetFeaturedCard } from "@/components/affiliate/EnMelbetFeaturedCard";
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
  "Melbet is an international mixed operator. A localised interface or currency does not equal local licensing in your jurisdiction. Availability, registration, bonuses, payments, verification and withdrawals depend on your location and live operator terms. Do not use VPNs or false location data to access restricted services.";

const QUICK_SUMMARY = [
  { title: "Type", text: "Sportsbook + online casino in one account" },
  { title: "Welcome framing", text: "Tiered sports packages or casino promos depending on GEO" },
  { title: "Payments", text: "Cards, e-wallets and crypto depending on cashier" },
  { title: "Main caution", text: "Wagering, verification and jurisdiction rules" },
] as const;

const WELCOME_DEPOSITS = [
  { label: "1st deposit", value: "100% up to cap" },
  { label: "2nd deposit", value: "50% up to cap" },
  { label: "3rd deposit", value: "25% up to cap" },
  { label: "4th deposit", value: "25% up to cap" },
] as const;

const CASINO_CARDS = [
  { title: "Slots", text: "Slot categories according to current catalogue and region." },
  { title: "Live casino", text: "Live tables and dealer games where the operator enables them." },
  { title: "Table games", text: "RNG table formats alongside instant and fast games." },
  { title: "Fast games", text: "Quick formats subject to availability and account limits." },
  { title: "Providers", text: "Catalogue depth varies by GEO; confirm eligible titles after registration." },
  { title: "Casino promotions", text: "Casino bonuses are separate from sportsbook packages — check live terms." },
] as const;

const SPORTSBOOK_CARDS = [
  { title: "Football", text: "Domestic and international leagues subject to live catalogue." },
  { title: "Live betting", text: "In-play markets with variable odds and settlement rules." },
  { title: "Esports", text: "Digital disciplines where Melbet enables them in your region." },
  { title: "Tennis and basketball", text: "Popular sports with pre-match and live coverage." },
  { title: "Accumulators", text: "Parlay-style bets may carry minimum odds per selection in bonus terms." },
  { title: "Markets and odds", text: "Odds change continuously; confirm market rules before betting." },
] as const;

const PAYMENT_CARDS = [
  { title: "Cards", text: "Visa and Mastercard may appear where the cashier supports them." },
  { title: "E-wallets", text: "Skrill, Neteller and other wallets depending on country and account." },
  { title: "Crypto", text: "Selected assets such as Bitcoin and USDT where enabled." },
  { title: "Local methods", text: "Country-specific rails may appear; confirm on your cashier." },
  { title: "Currencies", text: "Account currency and limits depend on registration and GEO." },
  { title: "Withdrawals", text: "Fees, limits, verification holds and processing times follow live rules." },
] as const;

const VERIFICATION_CARDS = [
  {
    title: "Identity checks",
    text: "Melbet may request ID, address or source-of-funds documentation for compliance or withdrawals.",
  },
  {
    title: "Profile completion",
    text: "Some promotions require a completed profile and accepted bonus selection before deposit.",
  },
  {
    title: "Payment-method matching",
    text: "Withdrawals may need to return to the same method or follow operator routing rules.",
  },
  {
    title: "Bonus timing",
    text: "Later deposit bonuses may depend on clearing wagering on earlier promotional tranches.",
  },
] as const;

const ANALYSIS_PARAGRAPHS = [
  "Melbet combines sportsbook and online casino products in one international account. JugadaMax covers it as a mixed fiat operator for English readers comparing sports and casino access — not as a crypto-first brand.",
  `Welcome campaigns may emphasise tiered sports packages in some GEOs — for example four-deposit structures with percentage matches, minimum deposits, accumulator rules and 5x wagering in published terms. Casino promotions must be reviewed separately. Promo code ${MELBET_PROMO_CODE} applies to the current JugadaMax campaign when requested during registration.`,
  "Sportsbook depth, live coverage and casino catalogue change by region. Confirm which markets, games and payment methods your account can open after registration — marketing pages often show more than every account receives.",
  "JugadaMax has not independently verified Melbet licensing for every jurisdiction. Verification, withdrawal holds and promotional fine print can tighten after activity. Check official restricted-country lists and local law before registering.",
  "JugadaMax rates Melbet 4.0/5: useful mixed-product access for eligible users who verify live terms carefully, but not a substitute for local licensing claims or guaranteed fast withdrawals. 18+ only.",
] as const;

const FAQ_ITEMS = [
  {
    question: "What is the Melbet welcome offer?",
    answer:
      "Welcome campaigns vary by GEO and product. Some markets show tiered sports packages across four eligible deposits with percentage matches and wagering rules. Casino promotions may differ. Confirm the live offer after redirect.",
  },
  {
    question: "Is the sports welcome package the same as a casino bonus?",
    answer:
      "No. Sportsbook packages and casino promotions are separate. Do not treat a sports headline as a casino bonus guarantee.",
  },
  {
    question: "What is the minimum deposit?",
    answer:
      "Minimum deposits depend on campaign, currency and account. External materials show different figures by GEO — confirm on your account before depositing.",
  },
  {
    question: "What are the wagering requirements?",
    answer:
      "Published sports packages may reference 5x bonus wagering with accumulator minimum odds per selection. Rules vary by campaign, product and live terms.",
  },
  {
    question: "Does Melbet have both casino and sportsbook?",
    answer:
      "Yes. Melbet offers sportsbook markets alongside casino, slots, live tables and fast games in one account where enabled.",
  },
  {
    question: "Does Melbet accept cryptocurrencies?",
    answer:
      "Selected crypto methods may appear depending on country and cashier configuration. Confirm networks, minimums and fees on the official site.",
  },
  {
    question: "Does Melbet require verification?",
    answer:
      "Yes. Identity and compliance checks may apply for withdrawals, promotions or payment-method rules. Policies can change.",
  },
  {
    question: "How long do withdrawals take?",
    answer:
      "JugadaMax does not guarantee withdrawal times. Limits, reviews, method matching and anti-fraud controls may affect processing.",
  },
  {
    question: "Is Melbet the same in every country?",
    answer:
      "No. Payments, games, sports markets and bonuses differ by GEO and account status.",
  },
  {
    question: "Is Melbet licensed in my jurisdiction?",
    answer:
      "JugadaMax has not independently verified Melbet licensing for every market. Check official terms, restricted lists and local law before registering.",
  },
] as const;

const SOURCE_REFERENCES: SourceReference[] = [
  buildOperatorHomepageSourceReference({
    operatorId: "melbet",
    operatorName: "Melbet",
    market: "global",
    locale: "en",
    fallbackOfficialHref: "https://melbet.com/",
  }),
  { label: "Melbet — terms and conditions", href: "https://melbet.com/information/rules/" },
  {
    label: "Casino Guru — Melbet review",
    href: "https://casino.guru/melbet-casino-review",
    note: "Third-party context — not the JugadaMax editorial rating (4.0/5).",
  },
  {
    label: "AskGamblers — Melbet review",
    href: "https://www.askgamblers.com/online-casinos/reviews/melbet-casino",
    note: "Third-party player-feedback context.",
  },
  { label: "JugadaMax editorial methodology", href: "/en/how-we-review" },
  {
    label: "Partner-supplied campaign materials",
    note: `Promo code ${MELBET_PROMO_CODE}; tiered welcome framing varies by GEO and live terms.`,
  },
];

export function EnMelbetReviewContent({
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
          <EnMelbetFeaturedCard context="review" />
        </div>

        <section
          aria-labelledby="melbet-quick-summary-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="melbet-quick-summary-heading" className="text-lg font-semibold text-foreground">
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

        <section aria-labelledby="melbet-welcome-heading">
          <h2 id="melbet-welcome-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Welcome and deposit framing
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Some GEOs show tiered sports welcome packages across four eligible deposits. Percentages,
            caps, currency, minimum deposit, accumulator rules and wagering must be confirmed on live
            terms — JugadaMax does not treat marketing headlines as guaranteed credits.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {WELCOME_DEPOSITS.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-amber-500/20 bg-[#111417]/80 p-3 text-center"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-bold text-amber-300">{item.value}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Enter promo code{" "}
            <span className="font-semibold text-foreground">{MELBET_PROMO_CODE}</span> during
            registration when applicable, accept the correct bonus before depositing, and verify the
            campaign is still active.
          </p>
        </section>

        <section aria-labelledby="melbet-casino-heading">
          <h2 id="melbet-casino-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Casino and live games
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

        <section aria-labelledby="melbet-sportsbook-heading">
          <h2 id="melbet-sportsbook-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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

        <section aria-labelledby="melbet-payments-heading">
          <h2 id="melbet-payments-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
        </section>

        <section aria-labelledby="melbet-verification-heading">
          <h2 id="melbet-verification-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Verification and account rules
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {VERIFICATION_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
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
          aria-labelledby="melbet-final-cta-heading"
          className="rounded-xl border border-amber-500/20 bg-gradient-to-br from-amber-500/8 via-card to-[#111417] p-4 sm:p-5"
        >
          <h2 id="melbet-final-cta-heading" className="text-lg font-semibold text-foreground">
            Review Melbet
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Confirm welcome campaigns, wagering, minimum odds, payments, verification and withdrawal
            rules on the official site before depositing or betting.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <a
              href={MELBET_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md bg-[#FFB800] px-5 py-2.5 text-sm font-semibold text-[#111417] transition-colors hover:bg-[#FFC300]",
                focusRing,
              )}
            >
              Visit Melbet
            </a>
            <Link
              href="/en/betting"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-amber-400/35 px-5 py-2.5 text-sm font-semibold text-amber-200 transition-colors hover:bg-amber-500/10",
                focusRing,
              )}
            >
              Sports betting coverage
            </Link>
          </div>
        </section>

        <section aria-labelledby="melbet-faq-heading">
          <h2 id="melbet-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
          description="Official operator sources, partner campaign materials, third-party context and JugadaMax editorial methodology."
          items={SOURCE_REFERENCES}
        />
      </article>

      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Visit"
        compactSecondaryLabel="Betting"
        primaryLabel="Visit Melbet"
        primaryHref={MELBET_AFFILIATE_URL}
        secondaryLabel="Sports betting"
        secondaryHref="/en/betting"
      />
    </>
  );
}
