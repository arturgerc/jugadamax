import Link from "next/link";
import { EN_GUIDE_RELATED_LINKS } from "@/components/verticals/guides/en/en-guide-hub-config";
import { cn, focusRing } from "@/lib/utils";

const METHOD_STEPS = [
  {
    heading: "Reviewed sources",
    body: "We review information published by the operator and external sources when they apply.",
    accent: "border-primary/30 bg-primary/10 text-primary",
  },
  {
    heading: "Real dates",
    body: "We prioritise real publication and update dates on each English guide article.",
    accent: "border-cyan-400/30 bg-cyan-500/10 text-cyan-200",
  },
  {
    heading: "Opinion vs data",
    body: "We separate editorial judgement from verifiable data points.",
    accent: "border-primary/30 bg-primary/10 text-primary",
  },
  {
    heading: "Clear affiliation",
    body: "We disclose affiliation when commercial links appear on other site pages.",
    accent: "border-cyan-400/30 bg-cyan-500/10 text-cyan-200",
  },
] as const;

const METHOD_LIMIT = {
  heading: "Honest limits",
  body: "We do not promise daily verification or legal or financial advice.",
} as const;

const FAQ_ITEMS = [
  {
    q: "Are these guides legal or financial advice?",
    a: "No. They are educational editorial content. Always confirm terms, availability and risks with the operator and qualified advisers when needed.",
  },
  {
    q: "How do I know who wrote a guide?",
    a: "Each English guide shows an identified author. Open About JugadaMax for editorial context, and use LinkedIn only as identity proof — not as a factual casino source.",
  },
  {
    q: "What does the update date mean?",
    a: "It is the real editorial-record date when the guide was updated. If there is no updatedAt value, we show the publication date.",
  },
  {
    q: "Why are some cards labelled Ranking or Review?",
    a: "English guide inventory is still growing. Supporting learning cards use real ranking and review routes and are labelled honestly so they are not mistaken for fabricated guide articles.",
  },
  {
    q: "Does LinkedIn guarantee content accuracy?",
    a: "No. LinkedIn is used for identity and distribution. It is not a factual source for casinos, payments, bonuses or licensing.",
  },
  {
    q: "Are there registration buttons on this guides hub?",
    a: "No. The guides hub is editorial. Affiliate CTAs live on commercial pages such as rankings or bonuses, with disclosure.",
  },
] as const;

/**
 * Methodology, FAQ, and related routes for English Guide Hub.
 */
export function EnGuideHubEducation() {
  return (
    <div className="mt-8 space-y-8 sm:mt-10 sm:space-y-10 lg:mt-12 lg:space-y-12">
      <section
        id="how-we-research"
        aria-labelledby="how-we-research-heading"
        className="scroll-mt-24"
      >
        <h2
          id="how-we-research-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          How we research and update guides
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          JugadaMax publishes editorial guides. We do not operate casinos or guarantee results,
          availability or third-party conditions.
        </p>

        <ol className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
          {METHOD_STEPS.map((step, index) => (
            <li
              key={step.heading}
              className="rounded-xl border border-white/10 bg-[#111417]/55 p-3.5"
            >
              <div className="flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className={cn(
                    "inline-flex size-7 shrink-0 items-center justify-center rounded-full border text-[0.7rem] font-bold",
                    step.accent,
                  )}
                >
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-foreground">{step.heading}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-2 rounded-xl border border-primary/20 bg-gradient-to-r from-[#1a160f]/80 to-[#111417]/70 p-3.5 sm:mt-3">
          <div className="flex items-start gap-2.5">
            <span
              aria-hidden="true"
              className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/35 bg-primary/10 text-[0.7rem] font-bold text-primary"
            >
              5
            </span>
            <div className="min-w-0">
              <h3 className="text-sm font-semibold text-foreground">
                {METHOD_LIMIT.heading}
              </h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {METHOD_LIMIT.body}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="en-guides-faq-heading">
        <h2
          id="en-guides-faq-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Frequently asked questions
        </h2>
        <div className="mt-4 max-w-3xl space-y-2">
          {FAQ_ITEMS.map((item) => (
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

      <section aria-labelledby="en-guides-related-heading">
        <h2
          id="en-guides-related-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          You may also review
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground">
          Combine guides with rankings, reviews, bonuses and news before you decide.
        </p>
        <nav aria-label="Related routes" className="mt-4 flex flex-wrap gap-2">
          {EN_GUIDE_RELATED_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full border border-white/12 bg-[#111417]/70 px-3.5 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50",
                focusRing,
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </section>
    </div>
  );
}
