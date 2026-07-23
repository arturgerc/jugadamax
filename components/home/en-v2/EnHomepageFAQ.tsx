import { HomepageContainer } from "@/components/home/HomepageContainer";
import { EN_HOME_FAQ } from "@/components/home/en-v2/en-home-config";
import { cn } from "@/lib/utils";

/**
 * English homepage FAQ with native disclosure elements.
 */
export function EnHomepageFAQ() {
  return (
    <section aria-labelledby="en-faq-heading" className="py-6 pb-10 sm:py-8 lg:py-10">
      <HomepageContainer>
        <div className="mx-auto max-w-5xl">
          <h2
            id="en-faq-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Frequently asked questions
          </h2>

          <div className="mt-5 space-y-2">
            {EN_HOME_FAQ.map((item) => (
              <details
                key={item.question}
                className="group rounded-xl border border-white/8 bg-[#111417]/50 open:border-primary/25 open:bg-[#16233f]/40"
              >
                <summary
                  className={cn(
                    "cursor-pointer list-none px-4 py-3.5 text-sm font-semibold text-foreground sm:px-5 sm:text-base",
                    "[&::-webkit-details-marker]:hidden",
                  )}
                >
                  <span className="flex items-start justify-between gap-3">
                    {item.question}
                    <span
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-primary transition-transform group-open:rotate-45"
                    >
                      +
                    </span>
                  </span>
                </summary>
                <p className="border-t border-white/6 px-4 pb-4 pt-3 text-sm leading-relaxed text-muted-foreground sm:px-5">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </HomepageContainer>
    </section>
  );
}
