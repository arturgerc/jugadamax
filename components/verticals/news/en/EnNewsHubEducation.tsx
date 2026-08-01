import Link from "next/link";
import {
  EN_NEWS_FAQ_ITEMS,
  EN_NEWS_PROCESS_STEPS,
  EN_NEWS_RELATED_ROUTES,
} from "@/components/verticals/news/en/en-news-config";
import { cn, focusRing } from "@/lib/utils";

export function EnNewsHubEducation() {
  return (
    <div className="space-y-8 sm:space-y-10 lg:space-y-12">
      <section
        id="editorial-process"
        aria-labelledby="en-editorial-process-heading"
        className="scroll-mt-24"
      >
        <h2
          id="en-editorial-process-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          How we produce news and analysis
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          JugadaMax publishes editorial reporting and commentary. We do not operate casinos or
          promise outcomes, availability or third-party conditions.
        </p>
        <ol className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
          {EN_NEWS_PROCESS_STEPS.map((step, index) => (
            <li
              key={step.heading}
              className="rounded-xl border border-white/10 bg-[#111417]/55 p-3.5"
            >
              <div className="flex items-start gap-2.5">
                <span
                  aria-hidden="true"
                  className={cn(
                    "inline-flex size-7 shrink-0 items-center justify-center rounded-full border text-[0.7rem] font-bold",
                    index % 2 === 0
                      ? "border-sky-400/30 bg-sky-500/10 text-sky-200"
                      : "border-primary/30 bg-primary/10 text-primary",
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
      </section>

      <section aria-labelledby="en-news-faq-heading">
        <h2
          id="en-news-faq-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Frequently asked questions
        </h2>
        <div className="mt-4 max-w-3xl space-y-2">
          {EN_NEWS_FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="group rounded-lg border border-white/10 bg-[#111417]/60 open:border-sky-400/25"
            >
              <summary
                className={cn(
                  "cursor-pointer list-none px-3.5 py-3 text-sm font-semibold text-foreground",
                  "[&::-webkit-details-marker]:hidden",
                  focusRing,
                )}
              >
                <span className="flex items-center justify-between gap-3">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="text-primary transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t border-white/8 px-3.5 py-3 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section aria-labelledby="en-news-related-heading">
        <h2
          id="en-news-related-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Related sections
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {EN_NEWS_RELATED_ROUTES.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full border border-white/12 bg-[#0A1931]/55 px-3.5 text-sm font-medium text-foreground transition-colors hover:border-sky-400/40",
                  focusRing,
                )}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
