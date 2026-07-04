import { cn } from "@/lib/utils";
import type { UiLocale } from "@/lib/i18n/ui-labels";

export function ProsCons({
  pros,
  cons,
  className,
  locale = "es",
}: {
  pros: string[];
  cons: string[];
  className?: string;
  locale?: UiLocale;
}) {
  if (pros.length === 0 || cons.length === 0) return null;

  const prosLabel = locale === "en" ? "Pros" : "A favor";
  const consLabel = locale === "en" ? "Cons" : "En contra";
  const prosAria = locale === "en" ? "Pros" : "Puntos a favor";
  const consAria = locale === "en" ? "Cons" : "Puntos en contra";

  return (
    <div className={cn("grid gap-4 sm:grid-cols-2", className)}>
      <section
        aria-label={prosAria}
        className="rounded-lg border border-accent/40 bg-card p-4"
      >
        <h3 className="mb-2 text-base font-semibold text-foreground">{prosLabel}</h3>
        <ul className="space-y-1.5">
          {pros.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-muted-foreground">
              <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-accent">
                +
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section aria-label={consAria} className="rounded-lg border border-border/60 bg-card p-4">
        <h3 className="mb-2 text-base font-semibold text-foreground">{consLabel}</h3>
        <ul className="space-y-1.5">
          {cons.map((item) => (
            <li key={item} className="flex gap-2 text-sm text-muted-foreground">
              <span aria-hidden="true" className="mt-0.5 shrink-0 font-bold text-muted-foreground">
                −
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
