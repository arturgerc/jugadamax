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
  "Caliente is presented on English JugadaMax pages as a Mexico-market editorial reference — not as a global multi-country recommendation. JugadaMax does not operate Caliente, process bets or guarantee that international readers can register. Availability, products, payments and limits depend on your location, account status and live operator terms. Do not use VPNs or false location data to access restricted services. 18+ only.";

const HIGHLIGHT_BULLETS = [
  "Sportsbook coverage for Liga MX, international football and live markets where published.",
  "Casino, slots, live casino and bingo-style products within a Mexico-oriented brand.",
  "Local payment framing: cards, SPEI and OXXO/OXXOPay where enabled by the operator.",
  "Useful comparison point versus international fiat and crypto brands on JugadaMax.",
] as const;

const QUICK_SUMMARY = [
  { title: "Market role", text: "Mexico-market editorial reference" },
  { title: "Products", text: "Sportsbook + online casino" },
  { title: "Payments", text: "Cards, SPEI, OXXO where published" },
  { title: "Main caution", text: "Not a universal international recommendation" },
] as const;

const SPORTSBOOK_ITEMS = [
  "Liga MX and Mexican football leagues",
  "International football and major tournaments",
  "Live betting and in-play markets",
  "Other sports where listed (tennis, basketball, boxing, etc.)",
] as const;

const CASINO_ITEMS = [
  "Online slots and table games",
  "Live casino where available",
  "Bingo and arcade-style products",
  "Promotions and bonus terms vary — verify locally",
] as const;

const PAYMENT_ITEMS = [
  { name: "Visa / Mastercard", note: "Card deposits where enabled; limits and fees apply." },
  { name: "SPEI", note: "Bank transfer route familiar to Mexican users." },
  { name: "OXXO / OXXOPay", note: "Cash-style deposit options where published." },
  { name: "Other methods", note: "Branch deposits, paysafecard, Apple Pay, etc. — confirm live cashier." },
] as const;

function buildAnalysisParagraphs(rating: number): string[] {
  return [
    "Caliente is one of the most recognised Mexico-facing sportsbook and online casino brands. Its product mix — sports, live betting, casino, slots and bingo — is built around local users who think in Mexican pesos and familiar payment rails rather than crypto wallets.",
    "On English JugadaMax, Caliente appears below the main international fiat ranking as a Mexico-market reference card. The goal is contextual comparison: readers evaluating local versus offshore operators can see how a well-known Mexican brand frames payments, sports coverage and casino access without treating it as a global affiliate push.",
    "Local payments are a core part of the editorial story. Caliente publishes options such as cards, SPEI, OXXO/OXXOPay and branch deposits, but exact methods, minimums, fees and verification rules change. JugadaMax lists representative methods for comparison — always confirm the live cashier before depositing.",
    `Operator-reported SEGOB / Dirección de Juegos y Sorteos framing is noted on JugadaMax as a Mexico-market trust signal, not an independent verification by our team. Bonuses, odds, limits and product access can change. JugadaMax assigns ${rating}/5 for Mexico-market relevance, brand recognition and local payment framing — not as a guarantee of outcomes, payouts or worldwide availability. 18+.`,
  ];
}

const FAQ_ITEMS = [
  {
    question: "Is Caliente a global recommendation on JugadaMax?",
    answer:
      "No. This English review presents Caliente as a Mexico-market editorial reference for comparison with international fiat and crypto brands. It is not a claim that Caliente accepts customers from every country.",
  },
  {
    question: "Does JugadaMax earn commission from Caliente?",
    answer:
      "Not necessarily. Partner and affiliate status can be pending. English surfaces prioritise the review link and internal navigation over outbound sponsored CTAs.",
  },
  {
    question: "Which payment methods does Caliente support in Mexico?",
    answer:
      "Caliente publishes Mexico-oriented methods such as Visa, Mastercard, SPEI and OXXO/OXXOPay, among others. Methods, limits, fees and verification requirements depend on account and live cashier rules — confirm on official operator pages.",
  },
  {
    question: "Is Caliente licensed in Mexico?",
    answer:
      "Caliente.mx reports operation under a Mexican entity with authorisation framed as SEGOB / Dirección de Juegos y Sorteos. JugadaMax cites operator-reported information and recommends verifying current licence details, terms and product access on official surfaces.",
  },
  {
    question: "Why is the JugadaMax rating 4.6/5?",
    answer:
      "The score reflects Mexico-market relevance, local payment framing, sports-and-casino product breadth and brand recognition — not guaranteed results, bonus value or universal access.",
  },
] as const;

const SOURCE_REFERENCES: SourceReference[] = [
  { label: "JugadaMax editorial methodology", href: "/en/how-we-review" },
  { label: "Affiliate disclosure", href: "/en/affiliate-disclosure" },
  { label: "Responsible gambling", href: "/en/responsible-gambling" },
  {
    label: "Caliente official terms, payment pages and restricted-jurisdiction information",
    note: "Operator-published information used where relevant; verify live terms before registering.",
  },
];

export function EnCalienteReviewContent({
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
        className="rounded-xl border border-red-500/25 bg-gradient-to-br from-[#140808] via-[#111417] to-[#0A1931] p-5 sm:p-6"
      >
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-red-200">
            Mexico reference
          </span>
        </div>
        <h2 className="mt-3 text-lg font-semibold text-foreground sm:text-xl">{casino.name}</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Mexico-market sportsbook and online casino — editorial reference only on English JugadaMax.
        </p>
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
          {HIGHLIGHT_BULLETS.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="shrink-0 text-red-300">
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
              "inline-flex min-h-11 items-center justify-center rounded-md border border-amber-500/30 bg-amber-500/10 px-5 py-2.5 text-sm font-semibold text-amber-100 transition-colors hover:bg-amber-500/15",
              focusRing,
            )}
          >
            Compare fiat casinos in Mexico context
          </Link>
        </div>
      </div>

      <section aria-labelledby="caliente-summary-heading">
        <h2 id="caliente-summary-heading" className="text-lg font-semibold text-foreground sm:text-xl">
          Quick summary
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {QUICK_SUMMARY.map((card) => (
            <div
              key={card.title}
              className="rounded-xl border border-red-500/20 bg-[#140808]/70 p-4"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-red-200/90">
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

      <section aria-labelledby="caliente-sportsbook-heading">
        <h2 id="caliente-sportsbook-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
          Odds, markets, live streaming and cash-out availability change. Review market rules, limits
          and settlement criteria on official Caliente terms before betting.
        </p>
      </section>

      <section aria-labelledby="caliente-casino-heading">
        <h2 id="caliente-casino-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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

      <section aria-labelledby="caliente-payments-heading">
        <h2 id="caliente-payments-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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

      <section aria-labelledby="caliente-editorial-role-heading">
        <h2
          id="caliente-editorial-role-heading"
          className="text-lg font-semibold text-foreground sm:text-xl"
        >
          Why Caliente appears on English JugadaMax
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
          English readers comparing Mexico-oriented fiat operators against international crypto or
          multi-GEO brands need local context. On{" "}
          <Link href="/en/casinos-fiat" className={cn("font-medium text-foreground underline-offset-2 hover:underline", focusRing)}>
            /en/casinos-fiat
          </Link>
          , Caliente sits below the main international ranking as a reference card with a read-review
          link to this page. Outbound affiliate CTAs may be unavailable while partner status is
          pending — navigation stays editorial and internal.
        </p>
      </section>

      <section aria-labelledby="caliente-licence-heading">
        <h2 id="caliente-licence-heading" className="text-lg font-semibold text-foreground sm:text-xl">
          Licensing (operator-reported)
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Caliente.mx reports operation through a Mexican registered entity with authorisation framed
          as SEGOB / Dirección de Juegos y Sorteos. JugadaMax cites this as operator-reported
          information — we have not independently verified licence status, corporate structure or
          product permissions.
        </p>
        <div
          role="note"
          className="mt-4 rounded-lg border border-amber-500/25 bg-amber-500/5 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
        >
          Confirm current licence framing, restricted jurisdictions, identification requirements,
          withdrawal rules and responsible gambling tools on official Caliente surfaces before
          registering. Operator-reported SEGOB framing is not a global multi-country guarantee.
        </div>
        {review.trustSummary ? (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{review.trustSummary}</p>
        ) : null}
      </section>

      <VerdictBox verdict={review.verdict} rating={review.rating} locale="en" />
      <ProsCons pros={review.pros} cons={review.cons} locale="en" />

      <section aria-labelledby="caliente-analysis-heading">
        <h2 id="caliente-analysis-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
        aria-labelledby="caliente-final-cta-heading"
        className="rounded-xl border border-red-500/25 bg-gradient-to-br from-[#140808] via-[#111417] to-[#0A1931] p-5 sm:p-6"
      >
        <h2 id="caliente-final-cta-heading" className="text-lg font-semibold text-foreground">
          Continue your research
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Compare Mexico-market fiat references with international options. JugadaMax does not operate
          Caliente or process bets — verify live terms on official operator pages before registering.
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

      <section aria-labelledby="caliente-faq-heading">
        <h2 id="caliente-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
