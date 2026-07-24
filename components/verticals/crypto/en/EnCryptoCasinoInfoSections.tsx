import Link from "next/link";

const evaluationCriteria = [
  {
    title: "Security & reputation",
    body: "We review available operator information and prioritise clarity, compatible payments, bonus terms and responsible gambling signals.",
  },
  {
    title: "Crypto payment methods",
    body: "We check which cryptocurrencies each operator discloses — without assuming universal availability. Methods and limits can change.",
  },
  {
    title: "Bonuses & conditions",
    body: "We show promotions reported by the operator. We do not invent amounts or urgency; always verify live terms on the official site.",
  },
  {
    title: "User experience",
    body: "We consider usability, catalogue depth, support channels and how clearly the operator publishes account and payment rules.",
  },
] as const;

const faqItems = [
  {
    question: "What is a crypto casino?",
    answer:
      "A crypto casino lets you use cryptocurrencies such as Bitcoin, Ethereum, USDT or other supported options for deposits or payments, according to each operator’s terms.",
  },
  {
    question: "Are crypto casinos available in my country?",
    answer:
      "Availability depends on each operator and its published restrictions. Check jurisdiction rules, local laws and verification requirements before registering. Do not use VPNs or false location data to access restricted services.",
  },
  {
    question: "Which cryptocurrencies do these casinos usually accept?",
    answer:
      "Our current selection commonly surfaces Bitcoin, Ethereum, USDT and Litecoin when the operator discloses them. Options and networks can change — confirm on the official cashier.",
  },
  {
    question: "How do we review bonuses?",
    answer:
      "We do not invent promotions or fake urgency. We show operator-reported offers and recommend verifying wagering, expiry and eligibility on the official site.",
  },
  {
    question: "Is identity verification required?",
    answer:
      "Many operators may request identity or document checks under their policies, payment methods and compliance rules — even when crypto deposits are supported.",
  },
  {
    question: "How can I gamble responsibly?",
    answer:
      "Only if you are 18+, set limits and never stake money you cannot afford to lose. If gambling stops being entertainment, seek help.",
  },
] as const;

const defaultCryptoMethods = ["Bitcoin", "Ethereum", "USDT", "Litecoin"] as const;

/**
 * Editorial info sections for the English crypto casinos vertical page.
 * Static copy only — no affiliate CTAs, no FAQ schema.
 */
export function EnCryptoCasinoInfoSections({
  paymentMethods = [...defaultCryptoMethods],
}: {
  paymentMethods?: string[];
}) {
  const methods = paymentMethods.length > 0 ? paymentMethods : [...defaultCryptoMethods];

  return (
    <div className="space-y-10 sm:space-y-12">
      <section aria-labelledby="en-evaluacion-crypto-heading">
        <h2
          id="en-evaluacion-crypto-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          How we evaluate crypto casinos
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          We review available operator information and prioritise clarity, compatible payments, bonus
          conditions and responsible gambling signals. Scores are editorial opinions — not guarantees.
        </p>
        <ul className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {evaluationCriteria.map((item) => (
            <li
              key={item.title}
              className="rounded-lg border border-border/60 bg-card p-3.5 sm:p-4"
            >
              <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground sm:text-sm">
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="en-pagos-crypto-heading">
        <h2
          id="en-pagos-crypto-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Crypto payment methods
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Available methods depend on each operator. Before registering, check fees, processing times,
          limits, networks and verification requirements. Wrong-network deposits can result in lost
          funds.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Cryptocurrencies in our selection">
          {methods.map((name) => (
            <li
              key={name}
              className="inline-flex items-center rounded-lg border border-primary/20 bg-primary/8 px-3 py-1.5 text-sm font-medium text-foreground"
            >
              {name}
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="en-seguridad-crypto-heading"
        className="rounded-2xl border border-accent/25 bg-accent/5 p-5 sm:p-6"
      >
        <h2
          id="en-seguridad-crypto-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Safety, licensing and responsible gambling
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          JugadaMax does not operate casinos or process bets. We publish editorial information and
          affiliate links. Payment methods, bonuses and licences must always be verified on the
          operator’s official site. Availability varies by jurisdiction.
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

      <section aria-labelledby="en-faq-crypto-heading">
        <h2
          id="en-faq-crypto-heading"
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
            href="/en/guides/best-crypto-casinos"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
          >
            Read the crypto casino guide
          </Link>
        </div>
      </section>
    </div>
  );
}
