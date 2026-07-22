import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { resolveComparisonRows } from "@/components/verticals/bonuses/bonus-data";
import {
  BONUS_SURFACES,
  sectionHeadingClassName,
} from "@/components/verticals/bonuses/bonus-visual";
import { cn } from "@/lib/utils";

/**
 * Responsive bonus comparison — table on md+, closed details on mobile.
 * No numeric ranking column; operator is the first visible field.
 */
export function BonusComparison() {
  const rows = resolveComparisonRows();
  if (rows.length === 0) return null;

  return (
    <section
      id="comparativa-bonos"
      aria-labelledby="comparativa-bonos-heading"
      className="mb-7 scroll-mt-24 sm:mb-10 lg:mb-12"
    >
      <div className="max-w-3xl space-y-1">
        <h2 id="comparativa-bonos-heading" className={sectionHeadingClassName()}>
          Comparativa rápida de promociones
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Resumen de ofertas publicadas. Depósito mínimo, wagering, vigencia y códigos dependen de
          cada operador, cuenta y ubicación. “No publicado” significa que JugadaMax no tiene ese
          dato confirmado en el registro editorial.
        </p>
      </div>

      <details className="group mt-4 rounded-xl border border-cyan-500/15 bg-[#111417]/70 open:border-cyan-400/25 md:hidden">
        <summary
          className={cn(
            "flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-3.5 py-3 text-sm font-semibold text-foreground",
            "[&::-webkit-details-marker]:hidden",
          )}
        >
          <span className="flex min-w-0 items-center gap-2">
            <span className="truncate">Ver comparativa de promociones</span>
            <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-cyan-400/25 bg-[#0A1931]/70 text-[0.7rem] font-bold tabular-nums text-muted-foreground">
              {rows.length}
            </span>
          </span>
          <span
            aria-hidden="true"
            className="shrink-0 text-primary transition-transform duration-150 group-open:rotate-45"
          >
            +
          </span>
        </summary>

        <ul className="border-t border-white/8 px-2 pb-2 pt-1">
          {rows.map((row, index) => (
            <li key={row.bonus.id}>
              <div className="flex min-h-14 items-center gap-2.5 rounded-lg px-1.5 py-1.5 odd:bg-white/[0.015]">
                <OperatorLogo
                  logo={row.logo}
                  name={row.operatorName}
                  operatorId={row.casinoId}
                  variant="compact-row"
                />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold text-foreground">
                    {row.operatorName}
                  </p>
                  <p className="truncate text-[0.7rem] text-muted-foreground">
                    {row.productLabel}
                  </p>
                </div>
                {row.reviewHref ? (
                  <TrackedLink
                    href={row.reviewHref}
                    event="bonus_page_review_click"
                    section="comparativa-bonos"
                    position={index + 1}
                    operator={row.casinoId}
                    destination={row.reviewHref}
                    className="inline-flex min-h-11 shrink-0 items-center text-xs font-medium text-muted-foreground underline-offset-2 hover:underline"
                  >
                    Reseña →
                  </TrackedLink>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </details>

      <div className={cn("mt-5 hidden md:block", BONUS_SURFACES.tableShell)}>
        <div className="min-w-0 overflow-x-auto">
          <table className="w-full min-w-[760px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/12 bg-[#0d1524]/90 text-xs uppercase tracking-wide text-muted-foreground">
                <th scope="col" className="px-3 py-3.5 font-semibold text-foreground/80">
                  Operador
                </th>
                <th scope="col" className="px-3 py-3.5 font-medium">
                  Producto
                </th>
                <th scope="col" className="px-3 py-3.5 font-medium">
                  Oferta
                </th>
                <th scope="col" className="px-3 py-3.5 font-medium">
                  Dep. mín.
                </th>
                <th scope="col" className="px-3 py-3.5 font-medium">
                  Wagering
                </th>
                <th scope="col" className="px-3 py-3.5 font-medium">
                  Código
                </th>
                <th scope="col" className="px-3 py-3.5 font-medium">
                  Acción
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.bonus.id}
                  className="border-b border-white/6 align-middle transition-colors duration-150 odd:bg-white/[0.015] hover:bg-white/[0.035]"
                >
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-2.5">
                      <OperatorLogo
                        logo={row.logo}
                        name={row.operatorName}
                        operatorId={row.casinoId}
                        variant="compact-row"
                      />
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground">{row.operatorName}</p>
                        <p className="text-[0.65rem] text-muted-foreground">{row.statusLabel}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-3 text-muted-foreground">{row.productLabel}</td>
                  <td className="max-w-[13rem] px-3 py-3">
                    <span className="line-clamp-2 font-medium text-foreground/90">
                      {row.offerText}
                    </span>
                  </td>
                  <td className="px-3 py-3 text-muted-foreground">{row.minDeposit}</td>
                  <td className="px-3 py-3 text-muted-foreground">{row.wagering}</td>
                  <td className="px-3 py-3">
                    {row.cta.promoCode ? (
                      <span className={BONUS_SURFACES.promoChip}>{row.cta.promoCode}</span>
                    ) : (
                      <span className="text-muted-foreground">—</span>
                    )}
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex w-[9.5rem] flex-col gap-1">
                      <TrackedLink
                        href={row.cta.ctaHref}
                        external
                        event="bonus_page_affiliate_click"
                        section="comparativa-bonos"
                        position={index + 1}
                        operator={row.casinoId}
                        ctaType="primary"
                        className={cn(BONUS_SURFACES.goldCtaCompact, "w-full px-2 text-center")}
                      >
                        <span className="line-clamp-2">{row.cta.ctaLabel}</span>
                      </TrackedLink>
                      {row.reviewHref ? (
                        <TrackedLink
                          href={row.reviewHref}
                          event="bonus_page_review_click"
                          section="comparativa-bonos"
                          position={index + 1}
                          operator={row.casinoId}
                          destination={row.reviewHref}
                          className="inline-flex min-h-11 items-center justify-center text-xs font-medium text-muted-foreground underline-offset-2 hover:underline"
                        >
                          Leer reseña
                        </TrackedLink>
                      ) : null}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
