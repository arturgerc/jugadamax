import { TrackedLink } from "@/components/analytics/TrackedLink";

/**
 * Compact sportsbook cross-link for /casinos-fiat — internal only.
 */
export function FiatSportsbookCrossLink() {
  return (
    <section
      aria-labelledby="fiat-sportsbook-crosslink-heading"
      className="mb-7 rounded-xl border border-dashed border-primary/25 bg-[#12180f]/35 px-4 py-4 sm:mb-10 sm:px-5 sm:py-5 lg:mb-12"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="min-w-0 max-w-2xl space-y-1.5">
          <h2
            id="fiat-sportsbook-crosslink-heading"
            className="text-lg font-bold tracking-tight text-foreground sm:text-xl"
          >
            ¿También buscas apuestas deportivas?
          </h2>
          <p className="text-sm text-muted-foreground">
            1xBet, Mostbet y Melbet combinan casino con sportsbook. Compara mercados, apuestas en
            vivo, promociones y condiciones en la sección de apuestas.
          </p>
        </div>
        <TrackedLink
          href="/apuestas"
          event="fiat_page_category_click"
          section="sportsbook-crosslink"
          destination="/apuestas"
          className="inline-flex min-h-12 w-full shrink-0 items-center justify-center rounded-md border border-primary/40 bg-primary/10 px-5 text-sm font-semibold text-primary transition-colors hover:border-primary/60 sm:w-auto"
        >
          Ver casas de apuestas
        </TrackedLink>
      </div>
    </section>
  );
}
