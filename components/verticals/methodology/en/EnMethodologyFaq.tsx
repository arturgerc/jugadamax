import { EN_METHOD_FAQ_ITEMS } from "@/components/verticals/methodology/en/en-methodology-config";
import { cn, focusRing } from "@/lib/utils";

export function EnMethodologyFaq() {
  return (
    <section
      aria-labelledby="en-method-faq-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <h2
        id="en-method-faq-heading"
        className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
      >
        Frequently asked questions
      </h2>
      <div className="mt-4 max-w-3xl space-y-2">
        {EN_METHOD_FAQ_ITEMS.map((item) => (
          <details
            key={item.q}
            className="group rounded-lg border border-white/10 bg-[#111417]/60 open:border-emerald-400/25"
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
  );
}
