import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { CRYPTO_TOP_SIX } from "@/components/verticals/crypto/crypto-page-config";
import {
  getCryptoEditorialRating,
  getCryptoPaymentNames,
} from "@/components/verticals/crypto/crypto-data";
import { getCasinoById } from "@/lib/content";
import { cn } from "@/lib/utils";

function resolveRows() {
  return CRYPTO_TOP_SIX.flatMap((entry) => {
    const casino = getCasinoById(entry.operatorId);
    if (!casino) return [];
    return [
      {
        ...entry,
        logo: casino.logo,
        rating: getCryptoEditorialRating(entry.operatorId),
        paymentNames: getCryptoPaymentNames(entry.operatorId),
      },
    ];
  });
}

/**
 * Responsive TOP-6 comparison — table on md+, compact details rows on mobile.
 */
export function CryptoTopComparison() {
  const rows = resolveRows();
  if (rows.length === 0) return null;

  return (
    <section
      id="comparativa-crypto"
      aria-labelledby="comparativa-crypto-heading"
      className="mb-7 scroll-mt-24 sm:mb-10 lg:mb-12"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="comparativa-crypto-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Comparativa rápida de casinos crypto
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Resumen de la selección principal. Disponibilidad, KYC, redes, límites y retiros dependen
          de cada operador y jurisdicción.
        </p>
      </div>

      {/* Mobile: one closed native details block (SSR content, no affiliate CTAs) */}
      <details className="group mt-4 rounded-xl border border-white/10 bg-[#111417]/60 open:border-primary/20 md:hidden">
        <summary
          className={cn(
            "flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 px-3.5 py-3 text-sm font-semibold text-foreground",
            "[&::-webkit-details-marker]:hidden",
          )}
        >
          <span className="flex min-w-0 items-center gap-2">
            <span className="truncate">Ver comparativa rápida de los 6 casinos</span>
            <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#0A1931]/70 text-[0.7rem] font-bold tabular-nums text-muted-foreground">
              6
            </span>
          </span>
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
                  <span className="inline-flex size-6 shrink-0 items-center justify-center rounded-full border border-white/15 text-[0.65rem] font-bold text-foreground">
                    {row.position}
                  </span>
                  <span className="origin-left scale-[0.68]">
                    <OperatorLogo
                      logo={row.logo}
                      name={row.name}
                      operatorId={row.operatorId}
                    />
                  </span>
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
                      event="crypto_page_review_click"
                      section="comparativa-crypto"
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

      {/* Desktop table — unchanged */}
      <div className="mt-5 hidden min-w-0 overflow-x-auto md:block">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-muted-foreground">
              <th scope="col" className="px-3 py-3 font-medium">
                #
              </th>
              <th scope="col" className="px-3 py-3 font-medium">
                Operador
              </th>
              <th scope="col" className="px-3 py-3 font-medium">
                Calificación
              </th>
              <th scope="col" className="px-3 py-3 font-medium">
                Especialización
              </th>
              <th scope="col" className="px-3 py-3 font-medium">
                KYC
              </th>
              <th scope="col" className="px-3 py-3 font-medium">
                Criptomonedas
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
                  <td className="px-3 py-3 font-semibold tabular-nums text-foreground">
                    {row.position}
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex items-center gap-2.5">
                      <OperatorLogo
                        logo={row.logo}
                        name={row.name}
                        operatorId={row.operatorId}
                      />
                      <div className="min-w-0">
                        <p className="font-semibold text-foreground">{row.name}</p>
                        {row.secondaryName ? (
                          <p className="text-xs text-muted-foreground">{row.secondaryName}</p>
                        ) : null}
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-3 font-semibold tabular-nums text-primary">{ratingLabel}</td>
                  <td className="px-3 py-3 text-muted-foreground">{row.purpose}</td>
                  <td className="px-3 py-3 text-muted-foreground">{row.kycLabel}</td>
                  <td className="px-3 py-3 text-muted-foreground">
                    {row.paymentNames.length > 0 ? row.paymentNames.join(", ") : "—"}
                  </td>
                  <td className="px-3 py-3">
                    <div className="flex flex-col gap-1.5">
                      <TrackedLink
                        href={row.ctaHref}
                        external
                        event="crypto_page_affiliate_click"
                        section="comparativa-crypto"
                        position={row.position}
                        operator={row.operatorId}
                        ctaType="primary"
                        className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-3 text-xs font-semibold text-primary-foreground"
                      >
                        {row.ctaLabel}
                      </TrackedLink>
                      <TrackedLink
                        href={row.reviewHref}
                        event="crypto_page_review_click"
                        section="comparativa-crypto"
                        position={row.position}
                        operator={row.operatorId}
                        destination={row.reviewHref}
                        className="inline-flex min-h-11 items-center justify-center text-xs font-medium text-muted-foreground underline-offset-2 hover:underline"
                      >
                        Leer reseña
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
