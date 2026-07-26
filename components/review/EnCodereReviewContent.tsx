import Link from "next/link";
import type { Author, Casino, Review } from "@/types/content";
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

const JURISDICTION_WARNING =
  "Codere is presented on English JugadaMax pages as a Mexico-market editorial reference with pending-partner treatment — not as a global multi-country affiliate recommendation. JugadaMax does not operate Codere, process bets or guarantee that international readers can register. Availability, products, payments and limits depend on your location, account status and live operator terms. Do not use VPNs or false location data to access restricted services. 18+ only.";

const HIGHLIGHT_BULLETS = [
  "Sports-led brand with football, Liga MX and live markets where published.",
  "Online casino alongside sportsbook within a Mexico-oriented product mix.",
  "Local payment framing: cards, SPEI and OXXO where enabled by the operator.",
  "Review-first reference while JugadaMax partner status may be pending.",
] as const;

const QUICK_SUMMARY = [
  { title: "Market role", text: "Mexico-market editorial reference" },
  { title: "Products", text: "Sportsbook + online casino" },
  { title: "Payments", text: "Cards, SPEI, OXXO where published" },
  { title: "Partner status", text: "Pending — review-first, no affiliate CTA" },
] as const;

const SPORTSBOOK_ITEMS = [
  "Football and Liga MX coverage",
  "International leagues and tournaments",
  "Live betting and in-play markets",
  "Additional sports where listed on official pages",
] as const;

const CASINO_ITEMS = [
  "Online slots and table games",
  "Live casino where available",
  "Classic casino formats for fiat users",
  "Promotions and wagering rules vary — verify locally",
] as const;

const PAYMENT_ITEMS = [
  { name: "Visa / Mastercard", note: "Card deposits where enabled; limits and fees apply." },
  { name: "SPEI", note: "Bank transfer route familiar to Mexican users." },
  { name: "OXXO", note: "Cash-style deposit option where published by the operator." },
  { name: "Verification", note: "KYC, limits and withdrawal rules depend on account and method." },
] as const;

function buildAnalysisParagraphs(rating: number): string[] {
  return [
    "Codere is a relevant Mexico-facing sportsbook and online casino brand for readers who prioritise local payments, football coverage and a fiat-first experience over crypto wallets. Its positioning is sports-led with casino products in the same account.",
    "On English JugadaMax, Codere appears alongside Caliente as a Mexico-market reference on /en/casinos-fiat. Cards prioritise the English review link rather than outbound visit buttons while partner status may be pending. The page helps international readers understand how a local operator compares with multi-GEO fiat and crypto alternatives.",
    "Payment methods such as Visa, Mastercard, SPEI and OXXO reduce friction for Mexican users who do not want exchanges or stablecoins. JugadaMax lists representative methods for editorial comparison — minimums, fees, processing times and verification requirements must be confirmed on official Codere cashier pages.",
    `Operator-reported SEGOB framing is noted on JugadaMax as a Mexico-market trust signal, not an independent verification. Bonuses, odds, limits and product access change. JugadaMax assigns ${rating}/5 for Mexico-market relevance and local sports-and-casino framing — not as a guarantee of outcomes, payouts or worldwide availability. 18+.`,
  ];
}

const FAQ_ITEMS = [
  {
    question: "Is Codere available worldwide?",
    answer:
      "Do not assume global access. This English review is Mexico-market context for readers comparing local versus international brands. Confirm restricted jurisdictions and live registration rules on official Codere pages.",
  },
  {
    question: "Can I click through to Codere from JugadaMax?",
    answer:
      "Not always. Pending-partner status means English surfaces may offer review-only navigation without an affiliate CTA. Use this review and internal links to /en/casinos-fiat and /en/betting for comparison.",
  },
  {
    question: "Which payment methods does Codere support in Mexico?",
    answer:
      "Codere publishes Mexico-oriented methods such as Visa, Mastercard, SPEI and OXXO in our editorial framing. Methods, limits, fees and verification requirements depend on account and live cashier rules.",
  },
  {
    question: "Is Codere licensed in Mexico?",
    answer:
      "Codere reports local Mexican authorisation framed as SEGOB on operator surfaces. JugadaMax cites operator-reported information and recommends verifying current licence details, terms and product access before registering.",
  },
  {
    question: "Why is the JugadaMax rating 4.5/5?",
    answer:
      "The score reflects Mexico-market relevance, sports-led positioning, local payment framing and value as a comparison point — not guaranteed results, bonus value or universal access.",
  },
] as const;

const SOURCE_REFERENCES: SourceReference[] = [
  { label: "JugadaMax editorial methodology", href: "/en/how-we-review" },
  { label: "Affiliate disclosure", href: "/en/affiliate-disclosure" },
  { label: "Responsible gambling", href: "/en/responsible-gambling" },
  {
    label: "Codere official terms, payment pages and restricted-jurisdiction information",
    note: "Operator-published information used where relevant; verify live terms before registering.",
  },
];

export function EnCodereReviewContent({
  review,
  casino,
  author,
}: {
  review: Review;
  casino: Casino;
  author: Author;
}) {
  const analysisParagraphs = buildAnalysisParagraphs(review.rating);

  return (
    <article className="mx-auto w-full max-w-5xl space-y-7 sm:space-y-8">
      <ReviewHeader review={review} casino={casino} author={author} locale="en" />

      <div className="mx-auto w-full max-w-4xl space-y-3">
        <AffiliateDisclosureEn />
        <ResponsibleGamblingNoticeEn />
        <JurisdictionWarning>{JURISDICTION_WARNING}</JurisdictionWarning>
      </div>

      <div
        id="review-primary-offer"
        className="rounded-xl border border-emerald-500/25 bg-gradient-to-br from-[#0A1931] via-[#111417] to-[#140a0a] p-5 sm:p-6"
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-emerald-200">
            Partner pending
          </span>
        </div>
        <h2 className="mt-3 text-lg font-semibold text-foreground sm:text-xl">{casino.name}</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Mexico-market sportsbook and online casino — editorial reference with pending-partner
          treatment on English JugadaMax.
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
          {HIGHLIGHT_BULLETS.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="shrink-0 text-emerald-300">
                •
              </span>
              {item}
            </li>
          ))}
        </ul>
        <div className="mt-5">
          <Link
            href="/en/casinos-fiat"
            className={cn(
              "inline-flex min-h-11 items-center justify-center rounded-md border border-emerald-500/30 bg-emerald-500/10 px-5 py-2.5 text-sm font-semibold text-emerald-100 transition-colors hover:bg-emerald-500/15",
              focusRing,
            )}
          >
            Compare fiat casinos in Mexico context
          </Link>
        </div>
      </div>

      <section aria-labelledby="codere-summary-heading">
        <h2 id="codere-summary-heading" className="text-lg font-semibold text-foreground sm:text-xl">
          Quick summary
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {QUICK_SUMMARY.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-emerald-500/20 bg-[#0A1931]/70 p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-emerald-200/90">
                {card.title}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{card.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          JugadaMax editorial rating:{" "}
          <span className="font-semibold text-foreground">{review.rating}/5</span> (Mexico-market
          relevance)
        </p>
      </section>

      <section aria-labelledby="codere-sportsbook-heading">
        <h2 id="codere-sportsbook-heading" className="text-lg font-semibold text-foreground sm:text-xl">
          Sportsbook
        </h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {SPORTSBOOK_ITEMS.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border/60 bg-card px-3 py-2.5 text-sm text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Odds, markets and live features change. Review market rules, limits and settlement criteria
          on official Codere terms before betting.
        </p>
      </section>

      <section aria-labelledby="codere-casino-heading">
        <h2 id="codere-casino-heading" className="text-lg font-semibold text-foreground sm:text-xl">
          Online casino
        </h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {CASINO_ITEMS.map((item) => (
            <li
              key={item}
              className="rounded-lg border border-border/60 bg-card px-3 py-2.5 text-sm text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="codere-payments-heading">
        <h2 id="codere-payments-heading" className="text-lg font-semibold text-foreground sm:text-xl">
          Local payments
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {PAYMENT_ITEMS.map((item) => (
            <div
              key={item.name}
              className="rounded-xl border border-emerald-500/20 bg-[#0A1931]/70 p-4"
            >
              <h3 className="text-sm font-semibold text-emerald-200">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.note}</p>
            </div>
          ))}
        </div>
        {review.paymentsSummary ? (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{review.paymentsSummary}</p>
        ) : null}
      </section>

      <section aria-labelledby="codere-editorial-role-heading">
        <h2
          id="codere-editorial-role-heading"
          className="text-lg font-semibold text-foreground sm:text-xl"
        >
          Why Codere appears on English JugadaMax
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
          English readers need local comparison points when evaluating Mexico-oriented fiat operators
          against international crypto or multi-GEO brands. On{" "}
          <Link href="/en/casinos-fiat" className={cn("font-medium text-foreground underline-offset-2 hover:underline", focusRing)}>
            /en/casinos-fiat
          </Link>
          , Codere appears with Caliente as a reference card. External visit CTAs may be omitted while
          partner status is pending — navigation stays editorial and internal.
        </p>
      </section>

      <section aria-labelledby="codere-licence-heading">
        <h2 id="codere-licence-heading" className="text-lg font-semibold text-foreground sm:text-xl">
          Licensing (operator-reported)
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Codere reports local Mexican authorisation framed as SEGOB on operator surfaces. JugadaMax
          cites this as operator-reported information — we have not independently verified licence
          status, corporate structure or product permissions.
        </p>
        <div
          role="note"
          className="mt-4 rounded-lg border border-amber-500/25 bg-amber-500/5 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
        >
          Confirm current licence framing, restricted jurisdictions, identification requirements,
          withdrawal rules and responsible gambling tools on official Codere surfaces before
          registering. Operator-reported SEGOB framing is not a global multi-country guarantee.
        </div>
        {review.trustSummary ? (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{review.trustSummary}</p>
        ) : null}
      </section>

      <VerdictBox verdict={review.verdict} rating={review.rating} locale="en" />
      <ProsCons pros={review.pros} cons={review.cons} locale="en" />

      <section aria-labelledby="codere-analysis-heading">
        <h2 id="codere-analysis-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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

      <section
        aria-labelledby="codere-final-cta-heading"
        className="rounded-xl border border-emerald-500/25 bg-gradient-to-br from-[#0A1931] via-[#111417] to-[#140a0a] p-5 sm:p-6"
      >
        <h2 id="codere-final-cta-heading" className="text-lg font-semibold text-foreground">
          Continue your research
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Compare Mexico-market fiat references with international options. JugadaMax does not operate
          Codere or process bets — verify live terms on official operator pages before registering.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/en/casinos-fiat"
            className={cn(
              "inline-flex min-h-11 items-center justify-center rounded-md bg-[#FFB800] px-5 py-2.5 text-sm font-semibold text-[#111417] transition-colors hover:bg-[#FFC300]",
              focusRing,
            )}
          >
            Fiat casinos ranking
          </Link>
          <Link
            href="/en/betting"
            className={cn(
              "inline-flex min-h-11 items-center justify-center rounded-md border border-border/60 px-5 py-2.5 text-sm font-semibold text-muted-foreground transition-colors hover:bg-card",
              focusRing,
            )}
          >
            Sports betting coverage
          </Link>
        </div>
      </section>

      <section aria-labelledby="codere-faq-heading">
        <h2 id="codere-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
        description="Editorial methodology, disclosure pages and operator-published information used where relevant."
        items={SOURCE_REFERENCES}
      />
    </article>
  );
}
