import Link from "next/link";
import { HomepageContainer } from "@/components/home/HomepageContainer";
import { cn, focusRing } from "@/lib/utils";

const criteria = [
  {
    title: "Safety",
    text: "Published licensing notes, terms and trust signals.",
    monogram: "S",
    accent: "border-emerald-500/20 bg-emerald-500/5 text-emerald-300",
  },
  {
    title: "Payments",
    text: "Crypto, wallets, fiat methods and stated limits.",
    monogram: "P",
    accent: "border-cyan-500/20 bg-cyan-500/5 text-cyan-300",
  },
  {
    title: "Bonuses",
    text: "Wagering, eligible games and expiry clarity.",
    monogram: "B",
    accent: "border-amber-500/20 bg-amber-500/5 text-amber-300",
  },
  {
    title: "Experience",
    text: "Catalogue, navigation, support and clarity.",
    monogram: "E",
    accent: "border-violet-500/20 bg-violet-500/5 text-violet-300",
  },
] as const;

/**
 * Compact English methodology strip for homepage V2.
 */
export function EnHomepageMethodology() {
  return (
    <section aria-labelledby="en-methodology-heading" className="py-6 sm:py-8 lg:py-10">
      <HomepageContainer>
        <div className="rounded-xl border border-white/8 bg-[#111417]/60 p-3.5 sm:p-5">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div className="max-w-2xl space-y-1">
              <h2
                id="en-methodology-heading"
                className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
              >
                How JugadaMax evaluates operators
              </h2>
              <p className="text-sm text-muted-foreground">
                Editorial criteria for comparing operators without presenting rankings as neutral
                facts or guaranteed outcomes.
              </p>
            </div>
            <Link
              href="/en/how-we-review"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-border/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary",
                focusRing,
              )}
            >
              View full methodology
            </Link>
          </div>

          <ul className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4 lg:gap-3">
            {criteria.map((item) => (
              <li
                key={item.title}
                className="rounded-lg border border-white/6 bg-[#0A1931]/40 p-3 sm:p-3.5"
              >
                <div className="flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "inline-flex size-7 shrink-0 items-center justify-center rounded-md border text-[0.65rem] font-bold sm:size-8 sm:text-xs",
                      item.accent,
                    )}
                  >
                    {item.monogram}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-xs leading-snug text-muted-foreground">{item.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </HomepageContainer>
    </section>
  );
}
