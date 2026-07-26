import Link from "next/link";
import { sectionHeadingClassName } from "@/components/verticals/bonuses/bonus-visual";
import { cn, focusRing } from "@/lib/utils";

const TERM_GROUPS = [
  {
    label: "Activation and play",
    accent: "border-amber-500/20 bg-amber-500/[0.04]",
    marker: "text-amber-300",
    items: [
      {
        marker: "A",
        title: "Wagering requirement",
        body: "How many times you must stake the bonus or deposit + bonus before withdrawing. A high headline percentage is not automatically better if wagering is strict.",
      },
      {
        marker: "B",
        title: "Minimum deposit",
        body: "Minimum amount to unlock the promotion. It can vary by payment method.",
      },
      {
        marker: "C",
        title: "Eligible games",
        body: "Slots, live casino or sports bets may contribute differently — or not at all — toward wagering.",
      },
    ],
  },
  {
    label: "Limits and account",
    accent: "border-sky-500/20 bg-sky-500/[0.04]",
    marker: "text-sky-300",
    items: [
      {
        marker: "D",
        title: "Validity",
        body: "Window to activate and complete conditions. If it is not published here, confirm it on the operator site before depositing.",
      },
      {
        marker: "E",
        title: "Withdrawal cap",
        body: "Ceiling on withdrawable winnings derived from the bonus. Also check maximum bet rules while the bonus is active.",
      },
      {
        marker: "F",
        title: "Account verification",
        body: "Many operators may request documents before paying withdrawals, even when registration starts simply.",
      },
    ],
  },
] as const;

const PRODUCT_PANELS = [
  {
    title: "Fiat / multi-currency",
    accent: "border-amber-500/25 bg-gradient-to-b from-[#18140f] to-[#111417]",
    bar: "from-amber-400/70 to-transparent",
    body: "Fiat or multi-currency promotions are often framed in local or account currency and may involve cards, e-wallets or bank rails when the operator enables them.",
  },
  {
    title: "Crypto",
    accent: "border-violet-500/25 bg-gradient-to-b from-[#15101c] to-[#111417]",
    bar: "from-violet-400/70 to-transparent",
    body: "Crypto promotions may use USDT or other coins, wallets and networks. A crypto bonus still carries wagering, limits and possible account checks.",
  },
  {
    title: "Sports",
    accent: "border-emerald-500/25 bg-gradient-to-b from-[#0f1714] to-[#111417]",
    bar: "from-emerald-400/70 to-transparent",
    body: "Sports promotions can require minimum odds, eligible markets and rules that differ from casino. On mixed operators, confirm Casino vs Sports before depositing.",
  },
] as const;

const ALERT_SIGNALS = [
  "Guaranteed-win promises",
  "“No conditions” bonuses",
  "Withdrawal promises without clear rules",
  "Missing public terms",
  "Pressure to deposit immediately",
  "Duplicate accounts or promo abuse",
] as const;

const FAQ_ITEMS = [
  {
    q: "Is a bonus free money?",
    a: "No. It is a promotion with conditions. Read wagering, expiry, eligible games and limits before accepting it.",
  },
  {
    q: "Why do some rows say “Not published”?",
    a: "Because JugadaMax does not have that value confirmed in the editorial record. We do not invent minimum deposit, wagering or validity.",
  },
  {
    q: "Are crypto bonuses better than fiat bonuses?",
    a: "Not necessarily. Currency, payments and sometimes verification differ, but wagering and limits still apply.",
  },
  {
    q: "Can a sports bonus be used in the casino?",
    a: "Not always. Some packages are sportsbook-only. Confirm the eligible product in the operator’s terms.",
  },
  {
    q: "Does JugadaMax guarantee the offer is available?",
    a: "No. We are an editorial/affiliate media site. Availability, GEO, account status and official operator terms control access.",
  },
] as const;

/**
 * Educational blocks for /en/bonuses — terms, fiat/crypto/sports, warnings, FAQ.
 */
export function EnBonusEducationSections() {
  return (
    <div className="mb-8 space-y-8 sm:mb-10 sm:space-y-10 lg:mb-12">
      <section
        id="bonus-terms"
        aria-labelledby="bonus-terms-heading"
        className="scroll-mt-24"
      >
        <h2 id="bonus-terms-heading" className={sectionHeadingClassName()}>
          How to read bonus terms
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          Before accepting a promotion, check these key conditions on the operator site.
        </p>
        <div className="mt-5 space-y-5">
          {TERM_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                {group.label}
              </p>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                {group.items.map((item) => (
                  <li
                    key={item.title}
                    className={cn("rounded-xl border p-3.5 sm:p-4", group.accent)}
                  >
                    <div className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className={cn(
                          "mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#0A1931]/60 text-[0.65rem] font-bold",
                          group.marker,
                        )}
                      >
                        {item.marker}
                      </span>
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-foreground sm:text-base">
                          {item.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                          {item.body}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="bonus-fiat-crypto-sports-heading">
        <h2 id="bonus-fiat-crypto-sports-heading" className={sectionHeadingClassName()}>
          Fiat, crypto and sports bonuses
        </h2>
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
          {PRODUCT_PANELS.map((panel) => (
            <li
              key={panel.title}
              className={cn("relative overflow-hidden rounded-xl border p-4", panel.accent)}
            >
              <div
                aria-hidden="true"
                className={cn("absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r", panel.bar)}
              />
              <h3 className="text-sm font-semibold text-foreground sm:text-base">{panel.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{panel.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="bonus-alert-heading">
        <h2 id="bonus-alert-heading" className={sectionHeadingClassName()}>
          Warning signs
        </h2>
        <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {ALERT_SIGNALS.map((signal) => (
            <li
              key={signal}
              className="rounded-lg border border-rose-500/20 bg-rose-500/[0.04] px-3 py-2.5 text-sm text-muted-foreground"
            >
              {signal}
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="bonus-faq-heading">
        <h2 id="bonus-faq-heading" className={sectionHeadingClassName()}>
          Frequently asked questions
        </h2>
        <div className="mt-4 divide-y divide-white/10 rounded-xl border border-border/60 bg-card">
          {FAQ_ITEMS.map((item) => (
            <details key={item.q} className="group px-4 py-1 sm:px-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-sm font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                >
                  ▾
                </span>
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          More context in{" "}
          <Link
            href="/en/responsible-gambling"
            className={cn("font-medium text-foreground underline-offset-2 hover:underline", focusRing)}
          >
            responsible gambling
          </Link>{" "}
          and{" "}
          <Link
            href="/en/affiliate-disclosure"
            className={cn("font-medium text-foreground underline-offset-2 hover:underline", focusRing)}
          >
            affiliate disclosure
          </Link>
          .
        </p>
      </section>
    </div>
  );
}
