import Link from "next/link";
import type { Author, Casino, Review } from "@/types/content";
import {
  ONE_XBET_AFFILIATE_URL,
  ONE_XBET_PROMO_CODE,
} from "@/lib/affiliate/constants";
import { EnOneXBetFeaturedCard } from "@/components/affiliate/EnOneXBetFeaturedCard";
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

const INTERNATIONAL_WARNING =
  "1xBet is an international mixed casino and sportsbook operator. Availability, currencies, payment methods, promotions and verification rules depend on your jurisdiction and the operator's live terms. Check local laws, restricted-country lists and official account policies before registering. Do not use VPNs or false location data to access restricted services.";

const EXTERNAL_RISK_NOTE =
  "JugadaMax has not independently verified a universal licence status for 1xBet across all markets. Product breadth and promotional visibility are strengths, but licensing clarity, jurisdiction limits, verification and bonus terms require careful checks. JugadaMax rates 1xBet 4.0/5 as a secondary international fiat/sports option — not a universal recommendation.";

const QUICK_SUMMARY = [
  { title: "Type", text: "International casino + sportsbook in one account" },
  {
    title: "Offer",
    text: "Welcome package up to 40,000 MXN + 150 free spins subject to live terms",
  },
  { title: "Payments", text: "Cards, e-wallets and selected crypto where enabled" },
  {
    title: "Main caution",
    text: "Licence framing, GEO limits and bonus rules need careful review",
  },
] as const;

const BONUS_CARDS = [
  {
    title: "Casino package headline",
    text: "Up to 40,000 MXN + 150 free spins for eligible new users where the operator shows it.",
  },
  {
    title: "Promo code",
    text: `Enter ${ONE_XBET_PROMO_CODE} during registration when the operator requests it — verify it is active first.`,
  },
  {
    title: "“Up to” meaning",
    text: "Marketing caps may depend on eligible deposits and official terms — not a single guaranteed credit.",
  },
  {
    title: "Sportsbook bonus",
    text: "Sports first-deposit offers are separate from the casino package with their own rollover rules.",
  },
  {
    title: "Free spins",
    text: "150 free spins, when offered, depend on eligibility, participating games and published conditions.",
  },
  {
    title: "Wagering",
    text: "Rollover, expiry, eligible games/markets and maximum bet rules must be confirmed before opting in.",
  },
] as const;

const PRODUCT_CARDS = [
  { title: "Slots", text: "Broad slot lobby depending on providers enabled for your region and account." },
  {
    title: "Live casino",
    text: "Live dealer tables and game shows subject to catalogue availability.",
  },
  {
    title: "Table games",
    text: "RNG roulette, blackjack and other formats where the operator enables them.",
  },
  {
    title: "Sportsbook",
    text: "Major leagues, live markets and eSports where available — odds and markets change continuously.",
  },
] as const;

const PAYMENT_CARDS = [
  {
    title: "Cards",
    text: "Visa and Mastercard may appear where the cashier supports them for your country.",
  },
  {
    title: "E-wallets",
    text: "Skrill, Neteller and other routes depend on country, currency and account status.",
  },
  {
    title: "Crypto",
    text: "Selected assets such as Bitcoin and USDT where enabled — confirm network, minimums and fees.",
  },
  {
    title: "KYC / withdrawals",
    text: "Identity checks and same-method withdrawal rules may apply before payouts are processed.",
  },
] as const;

const ANALYSIS_PARAGRAPHS = [
  "1xBet positions itself as a multi-product platform: slots, live casino, table games and a large sportsbook under one account. JugadaMax covers it for global English readers as a secondary international mixed operator — availability, currencies and promotions depend on jurisdiction, not affiliate marketing pages.",
  "The visible casino welcome package shows up to 40,000 MXN + 150 free spins for eligible new users, with promo code 1x_5259707 for JugadaMax campaigns when requested at registration. JugadaMax does not treat the headline as a guaranteed first-deposit credit: packages can span multiple deposits with wagering, eligible games and expiry rules.",
  "Sportsbook and casino bonuses must be reviewed separately. A sports first-deposit route may carry different rollover, minimum odds and market restrictions from the casino free-spin package. Confirm the exact offer shown after redirect before choosing a product path.",
  "Payment flexibility can be useful when methods are available — cards, e-wallets and selected crypto — but methods, fees, minimums and processing times are operator-controlled and vary sharply by GEO. Open the official cashier and read withdrawal conditions before sending larger amounts.",
  "JugadaMax rates 1xBet 4.0/5 for adults 18+ willing to verify payments, bonus rules and jurisdiction limits on official terms. It is not a local-licence guarantee for every country and should not be accessed through location workarounds. Gambling involves risk.",
] as const;

const FAQ_ITEMS = [
  {
    question: "What is the 1xBet casino welcome package?",
    answer:
      "Where shown, 1xBet markets a casino welcome package up to 40,000 MXN + 150 free spins for eligible new users. Percentages, caps, wagering and eligible games vary by country, currency and account — confirm the live offer after redirect.",
  },
  {
    question: "What is the JugadaMax promo code for 1xBet?",
    answer: `The confirmed promo code is ${ONE_XBET_PROMO_CODE}. Enter it during registration when the operator requests it and verify the promotion is still active before depositing.`,
  },
  {
    question: "Does 1xBet support fiat and crypto payments?",
    answer:
      "1xBet may support cards, e-wallets and selected cryptocurrencies where the cashier enables them. Methods, networks, minimums and fees are not universal — verify on the official site before depositing.",
  },
  {
    question: "Is 1xBet available everywhere?",
    answer:
      "No. Availability depends on jurisdiction and official operator terms. Check restricted lists and local law before registering. Do not use VPNs or false location data.",
  },
  {
    question: "Does 1xBet require KYC?",
    answer:
      "Identity checks may apply based on activity, payment method, withdrawals and compliance rules. Do not assume document-free play.",
  },
  {
    question: "Are bonuses the same in every country?",
    answer:
      "No. Offers, currencies and eligibility vary by GEO and campaign. Confirm the live package, wagering and expiry on the official site.",
  },
] as const;

const SOURCE_REFERENCES: SourceReference[] = [
  buildOperatorHomepageSourceReference({
    operatorId: "1xbet",
    operatorName: "1xBet",
    market: "global",
    locale: "en",
    fallbackOfficialHref: "https://1xbet.com/",
  }),
  { label: "JugadaMax editorial methodology", href: "/en/how-we-review" },
  { label: "Affiliate disclosure", href: "/en/affiliate-disclosure" },
  { label: "Responsible gambling", href: "/en/responsible-gambling" },
  {
    label: "1xBet official terms, restricted jurisdictions and payment pages",
    note: "Operator-published information; confirm live terms before registering.",
  },
];

export function EnOneXBetReviewContent({
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
          <JurisdictionWarning>{INTERNATIONAL_WARNING}</JurisdictionWarning>
        </div>

        <div id="review-primary-offer">
          <EnOneXBetFeaturedCard context="review" />
        </div>

        <section
          aria-labelledby="onexbet-quick-summary-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="onexbet-quick-summary-heading" className="text-lg font-semibold text-foreground">
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

        <section aria-labelledby="onexbet-bonus-heading">
          <h2 id="onexbet-bonus-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Welcome package and promotions
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Casino and sportsbook offers are separate products with different rules. Confirm live
            terms before opting in — JugadaMax does not treat bonuses as guaranteed profit.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {BONUS_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="onexbet-product-heading">
          <h2 id="onexbet-product-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Casino and sportsbook product
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {PRODUCT_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="onexbet-payments-heading">
          <h2 id="onexbet-payments-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Payments
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {PAYMENT_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="onexbet-licence-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="onexbet-licence-heading" className="text-lg font-semibold text-foreground">
            Licence and ownership
          </h2>
          <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">Operator type</dt>
              <dd>International mixed casino + sportsbook — availability varies by jurisdiction.</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Licence status</dt>
              <dd>
                JugadaMax has not independently verified universal licence status across all markets.
                Confirm official licensing notes on the operator site.
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Editorial note</dt>
              <dd>
                {review.trustSummary ??
                  casino.licensing?.notes ??
                  "Check restricted jurisdictions, verification rules and account terms before registering."}
              </dd>
            </div>
          </dl>
        </section>

        <section
          aria-labelledby="onexbet-risk-heading"
          className="rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 sm:p-5"
        >
          <h2 id="onexbet-risk-heading" className="text-lg font-semibold text-foreground">
            Editorial risk note
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{EXTERNAL_RISK_NOTE}</p>
        </section>

        <VerdictBox verdict={review.verdict} rating={review.rating} locale="en" />

        <section aria-label="Pros and cons">
          <h2 className="mb-3 text-xl font-semibold text-foreground">Pros and cons</h2>
          <ProsCons pros={review.pros} cons={review.cons} locale="en" />
        </section>

        <section aria-label="Analysis" className="mx-auto max-w-4xl space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Analysis</h2>
          {ANALYSIS_PARAGRAPHS.map((paragraph) => (
            <p
              key={paragraph.slice(0, 40)}
              className="text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              {paragraph}
            </p>
          ))}
        </section>

        <section
          aria-labelledby="onexbet-final-cta-heading"
          className="rounded-xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/8 via-card to-[#070B1C] p-4 sm:p-5"
        >
          <h2 id="onexbet-final-cta-heading" className="text-lg font-semibold text-foreground">
            Review 1xBet
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Confirm the live welcome package, promo code eligibility, payment methods, verification
            rules and withdrawal limits on the official site before depositing.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <a
              href={ONE_XBET_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
                "bg-[#1A5F2A] text-white transition-colors hover:bg-[#1E6B30]",
                focusRing,
              )}
            >
              View 1xBet package
            </a>
            <Link
              href="/en/casinos-fiat"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-emerald-400/35 px-5 py-2.5 text-sm font-semibold text-emerald-200 transition-colors hover:bg-emerald-500/10",
                focusRing,
              )}
            >
              Compare fiat casinos
            </Link>
          </div>
        </section>

        <section aria-labelledby="onexbet-faq-heading">
          <h2 id="onexbet-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
          description="Official operator sources, JugadaMax editorial methodology, affiliate disclosure and responsible gambling resources. Third-party assessments are not JugadaMax ratings."
          items={SOURCE_REFERENCES}
        />
      </article>

      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Visit"
        compactSecondaryLabel="Compare"
        primaryLabel="View 1xBet package"
        primaryHref={ONE_XBET_AFFILIATE_URL}
        secondaryLabel="Compare fiat casinos"
        secondaryHref="/en/casinos-fiat"
      />
    </>
  );
}
