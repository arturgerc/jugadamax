import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { resolveBettingCards } from "@/components/verticals/betting/betting-data";
import { cn } from "@/lib/utils";

/**
 * Responsive comparison of all six active betting operators.
 * Mobile: closed-by-default details. Desktop: table.
 * No visible rank numbers — order is editorial only.
 */
export function BettingComparison() {
  const rows = resolveBettingCards();
  if (rows.length === 0) return null;

  return (
    <section
      id="comparativa-apuestas"
      aria-labelledby="comparativa-apuestas-heading"
      className="mb-5 scroll-mt-24 sm:mb-10 lg:mb-12"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="comparativa-apuestas-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Comparativa de casas de apuestas
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Resumen de los operadores activos. Métodos, promociones, verificación y retiros dependen
          de cada operador, cuenta y ubicación. El orden es editorial y puede diferir de las
          puntuaciones individuales.
        </p>
      </div>

      <details className="group mt-3 rounded-xl border border-white/10 bg-[#111417]/60 open:border-primary/20 sm:mt-4 md:hidden">
        <summary
          className={cn(
            "flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-3.5 py-3 text-sm font-semibold text-foreground",
            "[&::-webkit-details-marker]:hidden",
          )}
        >
          <span className="truncate">Ver comparativa de operadores activos</span>
          <span
            aria-hidden="true"
            className="shrink-0 text-primary transition-transform group-open:rotate-45"
          >
            +
          </span>
        </summary>

        <ul className="border-t border-white/8 px-2 pb-2 pt-1">
          {rows.map((row) => {
            const ratingLabel =
              typeof row.rating === "number" ? row.rating.toFixed(1) : null;
            return (
              <li key={row.operatorId}>
                <div className="flex min-h-14 items-center gap-2.5 rounded-lg px-1.5 py-1.5">
                  <OperatorLogo
                    logo={row.logo}
                    name={row.name}
                    operatorId={row.operatorId}
                    variant="compact-row"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-foreground">{row.name}</p>
                    <p className="truncate text-[0.7rem] text-muted-foreground">{row.purpose}</p>
                  </div>
                  <div className="flex shrink-0 flex-col items-end gap-0.5">
                    {ratingLabel ? (
                      <span className="text-xs font-bold tabular-nums text-primary">
                        {ratingLabel}/5
                      </span>
                    ) : null}
                    <TrackedLink
                      href={row.reviewHref}
                      event="betting_page_review_click"
                      section="comparativa-apuestas"
                      position={row.position}
                      operator={row.operatorId}
                      destination={row.reviewHref}
                      className="inline-flex min-h-11 items-center text-xs font-medium text-muted-foreground underline-offset-2 hover:text-foreground hover:underline"
                    >
                      Reseña →
                    </TrackedLink>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </details>

      <div className="mt-5 hidden min-w-0 overflow-x-auto md:block">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-muted-foreground">
              <th scope="col" className="px-3 py-3 font-medium">
                Operador
              </th>
              <th scope="col" className="px-3 py-3 font-medium">
                Calificación
              </th>
              <th scope="col" className="px-3 py-3 font-medium">
                Enfoque
              </th>
              <th scope="col" className="px-3 py-3 font-medium">
                Métodos de pago
              </th>
              <th scope="col" className="px-3 py-3 font-medium">
                Oferta deportiva
              </th>
              <th scope="col" className="px-3 py-3 font-medium">
                Acción
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => {
              const ratingLabel =
                typeof row.rating === "number" ? `${row.rating.toFixed(1)}/5` : "—";
              return (
                <tr key={row.operatorId} className="border-b border-white/6 align-middle">
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-2.5">
                      <OperatorLogo
                        logo={row.logo}
                        name={row.name}
                        operatorId={row.operatorId}
                        variant="compact-row"
                      />
                      <p className="font-semibold text-foreground">{row.name}</p>
                    </div>
                  </td>
                  <td className="px-3 py-3 font-semibold tabular-nums text-primary">
                    {ratingLabel}
                  </td>
                  <td className="px-3 py-3 text-muted-foreground">{row.purpose}</td>
                  <td className="px-3 py-3 text-muted-foreground">
                    {row.paymentNames.length > 0 ? row.paymentNames.join(", ") : "—"}
                  </td>
                  <td className="max-w-[14rem] px-3 py-3 text-muted-foreground">
                    <span className="line-clamp-2">{row.offerTitle}</span>
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex flex-col gap-1.5">
                      <TrackedLink
                        href={row.ctaHref}
                        external
                        event="betting_page_affiliate_click"
                        section="comparativa-apuestas"
                        position={row.position}
                        operator={row.operatorId}
                        ctaType="primary"
                        className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground"
                      >
                        {row.ctaLabel}
                      </TrackedLink>
                      <TrackedLink
                        href={row.reviewHref}
                        event="betting_page_review_click"
                        section="comparativa-apuestas"
                        position={row.position}
                        operator={row.operatorId}
                        destination={row.reviewHref}
                        className="inline-flex min-h-11 items-center justify-center text-xs font-medium text-muted-foreground underline-offset-2 hover:underline"
                      >
                        Reseña
                      </TrackedLink>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
