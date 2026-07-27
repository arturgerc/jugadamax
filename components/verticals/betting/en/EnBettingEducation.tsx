import Link from "next/link";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { resolveEnBettingBonusRows } from "@/components/verticals/betting/en/en-betting-data";
import { cn, focusRing } from "@/lib/utils";

const EVALUATION = [
  {
    title: "Safety and reputation",
    body: "We review published operator information: clarity, reported jurisdiction and responsible gambling signals.",
  },
  {
    title: "Sports markets",
    body: "We compare which sports and competitions each operator reports, without assuming availability everywhere.",
  },
  {
    title: "Bonuses and conditions",
    body: "We show reported promotions. We separate sports and casino offers when the product indicates it.",
  },
  {
    title: "Payments, KYC and experience",
    body: "We consider published methods, possible verification and informed usability — without guaranteeing withdrawal times.",
  },
] as const;

const MARKETS = [
  "Football",
  "Liga MX",
  "Champions League",
  "Tennis",
  "Basketball",
  "UFC / combat",
  "Esports",
] as const;

const FAQ = [
  {
    q: "What is a sportsbook?",
    a: "A sportsbook lets you bet on sports events or other available markets, according to each operator’s rules and conditions.",
  },
  {
    q: "Does JugadaMax operate a sportsbook?",
    a: "No. JugadaMax is an editorial/affiliate media site. We do not accept bets, process gambling payments or guarantee odds or results.",
  },
  {
    q: "How do you separate casino and sports bonuses?",
    a: "When the central source indicates sportsbook or mixed product, we label it. If a promotion is casino-only, we do not present it as a guaranteed sports bonus.",
  },
  {
    q: "Do odds and markets change?",
    a: "Yes. Odds, limits and markets can change before or during an event depending on each operator.",
  },
  {
    q: "Is an international operator available everywhere?",
    a: "Not necessarily. Availability depends on jurisdiction, account, GEO and official terms. An English interface does not equal a local licence.",
  },
  {
    q: "Is identity verification required?",
    a: "Many operators may request KYC depending on internal policies, payment methods and compliance requirements.",
  },
  {
    q: "How do I bet responsibly?",
    a: "Only if you are 18+. Set limits and never bet money you cannot afford to lose. If it stops being entertainment, seek help.",
  },
] as const;

/**
 * Lower educational sections for English Betting Page V2 (bonus → FAQ).
 */
export function EnBettingEducation({
  paymentMethods = [],
}: {
  paymentMethods?: string[];
}) {
  const bonusRows = resolveEnBettingBonusRows();

  return (
    <div className="space-y-6 sm:space-y-10 lg:space-y-12">
      <section
        id="sports-bonuses"
        aria-labelledby="en-sports-bonuses-heading"
        className="scroll-mt-24"
      >
        <h2
          id="en-sports-bonuses-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Sports bonus conditions
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          Sports or mixed promotions from the editorial selection. Always confirm rollover, minimum
          odds, validity and whether the offer applies to sports or casino.
        </p>
        {bonusRows.length > 0 ? (
          <ul className="mt-3 space-y-2 sm:mt-4">
            {bonusRows.map((row) => (
              <li
                key={`${row.operatorId}-${row.title}`}
                className="rounded-xl border border-white/10 bg-[#111417]/55 p-3 sm:p-4"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <p className="font-semibold text-foreground">{row.operatorName}</p>
                  <span className="rounded-full border border-cyan-500/25 bg-cyan-500/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-cyan-200">
                    {row.productLabel}
                  </span>
                </div>
                <p className="mt-1 text-sm font-medium text-foreground/90">{row.title}</p>
                {row.terms ? (
                  <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground sm:line-clamp-3 sm:text-sm">
                    {row.terms}
                  </p>
                ) : null}
                <TrackedLink
                  href={row.reviewHref}
                  event="betting_page_review_click"
                  section="sports-bonuses"
                  operator={row.operatorId}
                  destination={row.reviewHref}
                  className="mt-1.5 inline-flex min-h-11 items-center text-sm font-medium text-primary underline-offset-2 hover:underline"
                >
                  View review →
                </TrackedLink>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
            No active sports packages are listed in the editorial register for the current
            selection. Check each operator before registering.
          </p>
        )}
      </section>

      <section
        id="sports-markets"
        aria-labelledby="en-sports-markets-heading"
        className="scroll-mt-24"
      >
        <h2
          id="en-sports-markets-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Popular sports and markets
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Football — including Liga MX — is among the most consulted markets in Mexico-facing
          coverage. Other markets depend on each operator. We do not invent league coverage or odds.
        </p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Reference categories">
          {MARKETS.map((name) => (
            <li
              key={name}
              className="inline-flex items-center rounded-lg border border-white/10 bg-[#16233f]/60 px-3 py-1.5 text-sm font-medium text-muted-foreground"
            >
              {name}
            </li>
          ))}
        </ul>
      </section>

      <section
        id="betting-payments"
        aria-labelledby="en-betting-payments-heading"
        className="scroll-mt-24"
      >
        <h2
          id="en-betting-payments-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Payments, withdrawals and KYC
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Operators may offer cards, SPEI, OXXO, transfers or crypto depending on their product.
          Fees, timing, limits and verification depend on each account.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Before depositing or withdrawing, confirm identity requirements and live policies on the
          official site. JugadaMax does not guarantee withdrawal speed or KYC approval.
        </p>
        {paymentMethods.length > 0 ? (
          <div className="mt-5">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Methods reported in the active selection
            </p>
            <ul
              className="mt-2 flex flex-wrap gap-2"
              aria-label="Payment methods in the selection"
            >
              {paymentMethods.map((name) => (
                <li
                  key={name}
                  className="inline-flex items-center rounded-lg border border-primary/20 bg-primary/8 px-3 py-1.5 text-sm font-medium text-foreground"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      <section
        id="how-we-review-betting"
        aria-labelledby="en-how-we-review-betting-heading"
        className="scroll-mt-24"
      >
        <h2
          id="en-how-we-review-betting-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          How we review sportsbooks
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          Editorial assessment. Not financial or legal advice. More detail in{" "}
          <Link
            href="/en/how-we-review"
            className={cn("font-medium text-primary underline-offset-2 hover:underline", focusRing)}
          >
            how we review
          </Link>
          .
        </p>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {EVALUATION.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-white/10 bg-[#111417]/55 p-4"
            >
              <h3 className="text-sm font-semibold text-foreground sm:text-base">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section
        id="responsible-gambling-betting"
        aria-labelledby="en-responsible-gambling-betting-heading"
        className="scroll-mt-24 rounded-2xl border border-accent/25 bg-accent/5 p-5 sm:p-6"
      >
        <h2
          id="en-responsible-gambling-betting-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Responsible gambling
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Betting is entertainment for adults 18+. Set a budget and time limits. If you feel pressure
          or a need to chase losses, stop and seek support.
        </p>
        <nav className="mt-4 flex flex-wrap gap-2" aria-label="Responsible gambling resources">
          <Link
            href="/en/responsible-gambling"
            className={cn(
              "inline-flex min-h-11 items-center rounded-full border border-accent/30 bg-accent/10 px-3.5 text-sm font-medium text-accent",
              focusRing,
            )}
          >
            Responsible gambling
          </Link>
          <Link
            href="/en/affiliate-disclosure"
            className={cn(
              "inline-flex min-h-11 items-center rounded-full border border-white/12 px-3.5 text-sm font-medium text-foreground",
              focusRing,
            )}
          >
            Affiliate disclosure
          </Link>
        </nav>
      </section>

      <section aria-labelledby="en-faq-betting-heading">
        <h2
          id="en-faq-betting-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Frequently asked questions
        </h2>
        <div className="mt-4 max-w-3xl space-y-2">
          {FAQ.map((item) => (
            <details
              key={item.q}
              className="group rounded-lg border border-white/10 bg-[#111417]/60 open:border-primary/25"
            >
              <summary
                className={cn(
                  "cursor-pointer list-none px-3.5 py-3 text-sm font-semibold text-foreground",
                  "[&::-webkit-details-marker]:hidden",
                )}
              >
                <span className="flex items-center justify-between gap-2">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="text-primary transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t border-white/8 px-3.5 pb-3.5 pt-2.5 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
