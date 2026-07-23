import Link from "next/link";
import {
  PARTNERS_COPY,
  type PartnersLocale,
} from "@/components/verticals/partners/partners-config";
import type { PartnersCoverageExample } from "@/components/verticals/partners/partners-data";
import { cn, focusRing } from "@/lib/utils";

export function PartnersCoverageExamples({
  locale,
  examples,
}: {
  locale: PartnersLocale;
  examples: PartnersCoverageExample[];
}) {
  const copy = PARTNERS_COPY[locale];

  return (
    <section
      id="ejemplos-cobertura"
      aria-labelledby="partners-coverage-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="partners-coverage-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          {copy.coverageTitle}
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          {copy.coverageBody}
        </p>
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {examples.map((example) => (
          <li key={example.href}>
            <Link
              href={example.href}
              className={cn(
                "flex h-full min-h-11 flex-col rounded-xl border border-white/10 bg-[#111417]/65 p-4 transition-colors hover:border-primary/35",
                focusRing,
              )}
            >
              <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-primary">
                {example.kindLabel}
              </span>
              <span className="mt-2 text-sm font-semibold leading-snug text-foreground">
                {example.title}
              </span>
              <span className="mt-auto pt-3 text-sm font-semibold text-primary underline underline-offset-2">
                {copy.coverageCta}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
