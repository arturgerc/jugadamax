import { HomepageContainer } from "@/components/home/HomepageContainer";
import { TrackedLink } from "@/components/analytics/TrackedLink";

/**
 * Compact secondary sportsbook route strip — no operator cards or affiliate CTAs.
 */
export function HomepageSecondarySportsStrip() {
  return (
    <section aria-labelledby="apuestas-strip-heading" className="py-4 sm:py-6">
      <HomepageContainer>
        <div className="flex flex-col gap-4 rounded-xl border border-dashed border-white/15 bg-[#111417]/40 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-5 sm:py-5">
          <div className="min-w-0 max-w-2xl space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <h2
                id="apuestas-strip-heading"
                className="text-base font-bold tracking-tight text-foreground sm:text-lg"
              >
                Apuestas deportivas
              </h2>
              <span className="inline-flex items-center rounded-full border border-white/10 bg-[#16233f]/60 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-muted-foreground">
                Sección adicional
              </span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Compara sportsbooks crypto y operadores mixtos sin perder el enfoque casino-first de
              JugadaMax.
            </p>
          </div>
          <TrackedLink
            href="/apuestas"
            event="homepage_category_click"
            section="sports-strip"
            position={1}
            destination="/apuestas"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-md border border-border/60 px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 sm:w-auto"
          >
            Ver apuestas
          </TrackedLink>
        </div>
      </HomepageContainer>
    </section>
  );
}
