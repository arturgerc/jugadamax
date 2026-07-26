import Link from "next/link";

const evaluationCriteria = [
  {
    title: "Security & reputation",
    body: "We review available operator information and prioritise clarity, compatible payments, bonus terms and responsible gambling signals.",
  },
  {
    title: "Traditional payment methods",
    body: "We check which cards, e-wallets, bank and retail methods each operator discloses — without assuming universal availability.",
  },
  {
    title: "Bonuses & conditions",
    body: "We show promotions reported by the operator. We do not invent amounts or urgency; always verify live terms on the official site.",
  },
  {
    title: "Mobile experience",
    body: "We consider usability on mobile, deposit clarity, support channels and how clearly the operator publishes account rules.",
  },
] as const;

const faqItems = [
  {
    question: "What is a fiat casino?",
    answer:
      "A fiat casino lets you use traditional payment methods such as cards, e-wallets, bank transfers or selected retail methods, according to each operator’s terms and your jurisdiction.",
  },
  {
    question: "Are these casinos available in my country?",
    answer:
      "Availability depends on each operator and its published restrictions. Check jurisdiction rules, local laws and verification requirements before registering. Do not use VPNs or false location data to access restricted services.",
  },
  {
    question: "Which payment methods appear most often?",
    answer:
      "Our current English selection commonly surfaces Visa, Mastercard, e-wallets such as Skrill or Neteller, and selected bank or retail methods where disclosed. Options change — confirm on the official cashier.",
  },
  {
    question: "Are fiat bonuses the same as crypto bonuses?",
    answer:
      "Not always. Bonuses can vary by payment method, country, account type and operator terms. Always verify live conditions before registering.",
  },
  {
    question: "Is identity verification required?",
    answer:
      "Many operators may request identity or document checks under their policies, payment methods and compliance rules — especially before larger withdrawals.",
  },
  {
    question: "How can I gamble responsibly?",
    answer:
      "Only if you are 18+, set limits and never stake money you cannot afford to lose. If gambling stops being entertainment, seek help.",
  },
] as const;

const commonMethods = [
  "Visa / Mastercard",
  "E-wallets",
  "Bank / Interac",
  "Selected retail methods",
] as const;

/**
 * Editorial info sections for the English fiat casinos vertical page.
 * Static copy only — no affiliate CTAs, no FAQ schema.
 */
export function EnFiatCasinoInfoSections({
  paymentMethods = [],
}: {
  paymentMethods?: string[];
}) {
  const selectionMethods = paymentMethods.length > 0 ? paymentMethods : null;

  return (
    <div className="space-y-8 sm:space-y-10 lg:space-y-12">
      <section
        id="como-evaluamos-fiat"
        aria-labelledby="en-evaluacion-fiat-heading"
        className="scroll-mt-24"
      >
        <h2
          id="en-evaluacion-fiat-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          How we evaluate fiat casinos
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          We review available operator information and prioritise clarity, compatible payments, bonus
          conditions and responsible gambling signals. Scores are editorial opinions — not guarantees.
        </p>
        <ul className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
          {evaluationCriteria.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-white/10 bg-card p-3.5 sm:p-4"
            >
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="en-pagos-info-fiat-heading">
        <h2
          id="en-pagos-info-fiat-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Common traditional payment routes
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Available methods depend on each operator. Before registering, review fees, processing
          times, limits and verification requirements.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          International readers often compare cards, e-wallets and bank options. Some markets also
          surface retail or cash-reference methods. Not every operator offers every option.
        </p>
        <ul
          className="mt-5 flex flex-wrap gap-2"
          aria-label="Common traditional payment routes (editorial reference)"
        >
          {commonMethods.map((name) => (
            <li
              key={name}
              className="inline-flex items-center rounded-lg border border-white/10 bg-[#16233f]/60 px-3 py-1.5 text-sm font-medium text-muted-foreground"
            >
              {name}
            </li>
          ))}
        </ul>
        {selectionMethods ? (
          <div className="mt-5">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              In our current selection
            </p>
            <ul
              className="mt-2 flex flex-wrap gap-2"
              aria-label="Methods disclosed by operators in the ranking"
            >
              {selectionMethods.map((name) => (
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
        aria-labelledby="en-seguridad-fiat-heading"
        className="rounded-2xl border border-accent/25 bg-accent/5 p-5 sm:p-6"
      >
        <h2
          id="en-seguridad-fiat-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Safety, licences and responsible gambling
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          JugadaMax does not operate casinos or process bets. We publish editorial information and
          affiliate links. Payment methods, bonuses and licences must always be verified on the
          operator’s official site for your jurisdiction.
        </p>
        <nav aria-label="Trust links" className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          <Link
            href="/en/how-we-review"
            className="text-sm font-medium text-primary underline underline-offset-2 hover:text-[var(--jm-gold-strong)]"
          >
            How we review
          </Link>
          <Link
            href="/en/affiliate-disclosure"
            className="text-sm font-medium text-primary underline underline-offset-2 hover:text-[var(--jm-gold-strong)]"
          >
            Affiliate disclosure
          </Link>
          <Link
            href="/en/responsible-gambling"
            className="text-sm font-medium text-primary underline underline-offset-2 hover:text-[var(--jm-gold-strong)]"
          >
            Responsible gambling
          </Link>
        </nav>
      </section>

      <section aria-labelledby="en-faq-fiat-heading">
        <h2
          id="en-faq-fiat-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Frequently asked questions
        </h2>
        <div className="mt-5 divide-y divide-white/10 rounded-2xl border border-white/10 bg-card">
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

      <section
        aria-label="Keep reading"
        className="rounded-2xl border border-white/10 bg-card p-5 sm:p-6"
      >
        <h2 className="text-lg font-semibold text-foreground">Keep reading</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/en/how-we-review"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
          >
            Full methodology
          </Link>
          <Link
            href="/en/casinos-crypto"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
          >
            Compare crypto casinos
          </Link>
        </div>
      </section>
    </div>
  );
}
