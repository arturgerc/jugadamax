import Link from "next/link";
import type { Author, Casino, Review } from "@/types/content";
import { XONBET_GLOBAL_AFFILIATE_URL } from "@/lib/affiliate/constants";
import { XonbetFeaturedCard } from "@/components/affiliate/XonbetFeaturedCard";
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
import { cn, focusRing } from "@/lib/utils";

const AFFILIATE_REL = "sponsored nofollow noopener noreferrer";

const CANADA_WARNING =
  "Partner availability includes Canada, but online gambling rules are provincial. JugadaMax does not present XON.BET as an Ontario-registered operator. Check applicable provincial rules and the operator's current terms before registering.";

const EXTERNAL_RISK_NOTE =
  "External assessments are mixed. One major independent casino-review platform currently classifies XON.BET with a low safety rating. JugadaMax therefore treats it as a secondary international operator and recommends checking licence status, withdrawal limits, verification rules and current player complaints before depositing.";

const WELCOME_DEPOSITS = [
  { label: "1st deposit", value: "150%" },
  { label: "2nd deposit", value: "120%" },
  { label: "3rd deposit", value: "110%" },
  { label: "4th deposit", value: "120%" },
] as const;

const QUICK_SUMMARY = [
  { title: "Type", text: "Multi-currency online casino (casino-only on JugadaMax)" },
  { title: "Welcome package", text: "Up to 500% across four deposits — caps vary by GEO" },
  { title: "Payments", text: "Cards, e-wallets and selected crypto where available" },
  { title: "Main caution", text: "Mixed external safety signals; verify limits and KYC" },
] as const;

const PRODUCT_CARDS = [
  { title: "Slots", text: "Broad slot lobby with multiple providers and tournament hooks." },
  { title: "Live casino", text: "Live dealer tables subject to provider availability by region." },
  { title: "Table & card games", text: "RNG table formats alongside instant/crash-style titles." },
  { title: "Tournaments & loyalty", text: "Seasonal campaigns, loyalty tiers and leaderboard events." },
] as const;

const PAYMENT_CARDS = [
  { title: "Cards", text: "Visa and Mastercard may appear where the cashier supports them." },
  { title: "E-wallets", text: "Skrill, Neteller and Jeton availability depends on country and account." },
  { title: "Crypto", text: "Selected assets such as Bitcoin, Ethereum and USDT where enabled." },
  { title: "KYC / withdrawals", text: "Verification and method-matching rules apply before withdrawals." },
] as const;

const ANALYSIS_PARAGRAPHS = [
  "XON.BET presents a commercially strong casino package: a four-deposit welcome structure, weekly cashback messaging and a product mix spanning slots, live tables and instant formats. JugadaMax covers it as a casino-only operator — the site may show other sections, but this integration does not evaluate sports betting.",
  "The welcome offer is marketed as up to 500% across the first four deposits, with official EUR presentation up to €2,000 total. Geo-specific creatives may show different caps or percentages. Compact JugadaMax cards intentionally avoid fixed currency caps; always confirm the live offer after redirect.",
  "Payment flexibility is a genuine editorial strength when methods are available: cards, e-wallets, Interac in supported regions and selected cryptocurrencies. None of these routes are guaranteed in every country, and withdrawals may face weekly or monthly limits reported by external reviewers.",
  "Licence transparency is clearer than many offshore brands: Inextro B.V. (146616) holds active Curaçao Gaming Authority licence OGL/2024/1056/0702, with Beriston Ltd. listed as payment agent. That is not local authorisation in Canada, Germany, Sweden or other partner-reported markets.",
  "JugadaMax rates XON.BET 3.7/5 as a cautious secondary option. Treat affiliate marketing as discovery only — read live terms, check withdrawal rules, confirm payment availability and never use VPNs or false location data to access restricted services. 18+ only.",
] as const;

const FAQ_ITEMS = [
  {
    question: "What is the XON.BET welcome bonus?",
    answer:
      "The operator markets up to 500% across the first four deposits (150%, 120%, 110%, 120%). Percentages, caps, wagering and eligible games vary by country, currency and account. Confirm the exact offer shown after redirect.",
  },
  {
    question: "Does XON.BET support fiat and crypto payments?",
    answer:
      "XON.BET supports a mix of cards, e-wallets and selected cryptocurrencies where the cashier enables them. Methods, networks, minimums and fees are not universal — verify on the official site before depositing.",
  },
  {
    question: "Is XON.BET licensed?",
    answer:
      "XON.BET is operated by Inextro B.V. under Curaçao Gaming Authority licence OGL/2024/1056/0702. Beriston Ltd. acts as payment agent. This is not a substitute for local licensing in regulated markets.",
  },
  {
    question: "Is XON.BET available in Canada?",
    answer:
      "Partner-reported availability includes Canada, but provincial rules differ. JugadaMax does not present XON.BET as an Ontario-registered operator. Check applicable provincial law and the operator's current terms before registering.",
  },
  {
    question: "Why does the bonus amount change by country?",
    answer:
      "Promotional caps and percentages can differ by GEO, currency, campaign creative and account status. Official EUR figures and local-currency variants may not match what every user sees.",
  },
  {
    question: "Does XON.BET require KYC?",
    answer:
      "The operator may request identity verification for security, withdrawals or compliance. Fiat and crypto routes do not guarantee anonymous play. Read current account and verification policies before depositing.",
  },
] as const;

const SOURCE_REFERENCES: SourceReference[] = [
  { label: "XON.BET official homepage", href: "https://xon.bet/" },
  { label: "XON.BET official terms", href: "https://xon.bet/terms" },
  {
    label: "Curaçao Gaming Authority certificate — OGL/2024/1056/0702",
    href: "https://cert.cga.cw/certificate?id=ZXlKcGRpSTZJbHBuT0RWbFpVazVaVFJ5VkhSWE5tSldZalYxZEVFOVBTSXNJblpoYkhWbElqb2liM0ZQVVhodmREWk9XSFpsVm1GMVNHZDFNMkZhWnowOUlpd2liV0ZqSWpvaU16WmlNalF5TWprNE5UVXlNemRqTm1ZNFlqazBZMk5pTURNMlkyUmxaVEEyTnpBeE5EQTJOVE14WlRJeE9XVmpNalEwTlRBNU16RXpOREExWlRRM055SXNJblJoWnlJNklpSjk%3D",
    note: "Official operator licence registry entry for Inextro B.V.",
  },
  {
    label: "Casino Guru XON.BET review",
    href: "https://casino.guru/xon-bet-casino-review",
    note: "Third-party risk signal — independent editorial assessment.",
  },
  {
    label: "AskGamblers XON.BET review",
    href: "https://www.askgamblers.com/online-casinos/reviews/xon-bet-casino",
    note: "Third-party player-feedback context — not a JugadaMax rating.",
  },
  { label: "JugadaMax editorial methodology", href: "/en/how-we-review" },
];

export function XonbetReviewContent({
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
          <JurisdictionWarning>{CANADA_WARNING}</JurisdictionWarning>
        </div>

        <div id="review-primary-offer">
          <XonbetFeaturedCard context="review" />
        </div>

        <section
          aria-labelledby="xonbet-quick-summary-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="xonbet-quick-summary-heading" className="text-lg font-semibold text-foreground">
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

        <section aria-labelledby="xonbet-welcome-heading">
          <h2 id="xonbet-welcome-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Welcome package breakdown
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Percentages are stable in official materials; currency caps vary by GEO and account.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {WELCOME_DEPOSITS.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-cyan-500/20 bg-[#070B1C]/80 p-3 text-center"
              >
                <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {item.label}
                </p>
                <p className="mt-1 text-xl font-bold text-cyan-300">{item.value}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="xonbet-cashback-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="xonbet-cashback-heading" className="text-lg font-semibold text-foreground">
            Weekly cashback
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            XON.BET describes 5% weekly cashback with activity thresholds. The operator presents it
            as no-wagering cashback in promotional materials, but eligibility, qualifying play and
            payout rules must be confirmed in live terms — JugadaMax does not treat cashback as
            guaranteed profit.
          </p>
        </section>

        <section aria-labelledby="xonbet-product-heading">
          <h2 id="xonbet-product-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Games and product
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

        <section aria-labelledby="xonbet-payments-heading">
          <h2 id="xonbet-payments-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
          aria-labelledby="xonbet-licence-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="xonbet-licence-heading" className="text-lg font-semibold text-foreground">
            Licence and ownership
          </h2>
          <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">Operator</dt>
              <dd>Inextro B.V. — company number 146616</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Licence</dt>
              <dd>Curaçao Gaming Authority — OGL/2024/1056/0702 (granted 04/06/2025)</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Payment agent</dt>
              <dd>Beriston Ltd.</dd>
            </div>
          </dl>
        </section>

        <section
          aria-labelledby="xonbet-risk-heading"
          className="rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 sm:p-5"
        >
          <h2 id="xonbet-risk-heading" className="text-lg font-semibold text-foreground">
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
            <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {paragraph}
            </p>
          ))}
        </section>

        <section
          aria-labelledby="xonbet-final-cta-heading"
          className="rounded-xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/8 via-card to-[#070B1C] p-4 sm:p-5"
        >
          <h2 id="xonbet-final-cta-heading" className="text-lg font-semibold text-foreground">
            Review XON.BET
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Confirm the live welcome offer, payment methods, verification rules and withdrawal limits
            on the official site before depositing.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <a
              href={XONBET_GLOBAL_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
                "bg-[#FF2A9A] text-white transition-colors hover:bg-[#FF3CAC]",
                focusRing,
              )}
            >
              Visit XON.BET
            </a>
            <Link
              href="/en/casinos-fiat"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-cyan-400/35 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition-colors hover:bg-cyan-500/10",
                focusRing,
              )}
            >
              Compare fiat casinos
            </Link>
          </div>
        </section>

        <section aria-labelledby="xonbet-faq-heading">
          <h2 id="xonbet-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
          description="Official operator sources, third-party risk signals and JugadaMax editorial methodology. Third-party reviews inform caution — they are not JugadaMax ratings."
          items={SOURCE_REFERENCES}
        />
      </article>

      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Visit"
        compactSecondaryLabel="Compare"
        primaryLabel="Visit XON.BET"
        primaryHref={XONBET_GLOBAL_AFFILIATE_URL}
        secondaryLabel="Compare fiat casinos"
        secondaryHref="/en/casinos-fiat"
      />
    </>
  );
}
