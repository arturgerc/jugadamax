import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import { BETTING_LOCAL_REFERENCE_ID } from "@/components/verticals/betting/betting-page-config";
import {
  getBettingEditorialRating,
  getBettingPaymentNames,
  getBettingReviewHref,
} from "@/components/verticals/betting/betting-data";
import { isOperatorAllowedOnSurface, isOperatorCtaAllowed } from "@/content/operators/status";
import { getCasinoById } from "@/lib/content";

/**
 * Codere-only local Mexico editorial reference — no affiliate CTA.
 */
export function BettingLocalReference() {
  const operatorId = BETTING_LOCAL_REFERENCE_ID;
  if (!isOperatorAllowedOnSurface(operatorId, "apuestas")) return null;
  if (isOperatorCtaAllowed(operatorId)) return null;

  const casino = getCasinoById(operatorId);
  const reviewHref = getBettingReviewHref(operatorId);
  if (!casino || !reviewHref) return null;

  const rating = getBettingEditorialRating(operatorId);
  const ratingLabel =
    typeof rating === "number" ? rating.toFixed(1) : null;
  const paymentNames = getBettingPaymentNames(operatorId, [
    "OXXO",
    "SPEI",
    "Visa",
    "Mastercard",
  ]);
  const license = casino.licensing?.licenseName;
  const licenseNotes = casino.licensing?.notes;

  return (
    <section
      id="referencia-local"
      aria-labelledby="referencia-local-heading"
      className="mb-7 scroll-mt-24 sm:mb-10 lg:mb-12"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="referencia-local-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Referencia editorial local en México
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Operador con enfoque local útil para comparación. No es un partner afiliado activo de
          JugadaMax en esta página.
        </p>
      </div>

      <article className="mt-4 rounded-xl border border-white/10 bg-[#111417]/60 p-4 sm:p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-full border border-white/12 px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wide text-muted-foreground">
            Referencia local
          </span>
          <span className="inline-flex items-center rounded-full border border-amber-500/30 bg-amber-500/8 px-2 py-0.5 text-[0.62rem] font-semibold uppercase tracking-wide text-amber-300">
            Partner pendiente
          </span>
          {ratingLabel ? (
            <span className="ml-auto text-sm font-bold tabular-nums text-muted-foreground">
              {ratingLabel}
              <span className="text-xs font-medium">/5</span>
            </span>
          ) : null}
        </div>

        <div className="mt-3 flex items-center gap-3">
          <OperatorLogo logo={casino.logo} name={casino.name} operatorId={casino.id} />
          <div className="min-w-0">
            <h3 className="text-lg font-bold text-foreground">{casino.name}</h3>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Enfoque local / MXN
            </p>
          </div>
        </div>

        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {casino.summary}
        </p>

        {paymentNames.length > 0 ? (
          <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Métodos de pago informados">
            {paymentNames.map((method) => (
              <li
                key={method}
                className="rounded-full border border-white/10 bg-[#0A1931]/50 px-2.5 py-0.5 text-[0.65rem] font-medium text-muted-foreground"
              >
                {method}
              </li>
            ))}
          </ul>
        ) : null}

        {license ? (
          <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
            Licencia informada: <span className="text-foreground">{license}</span>
            {licenseNotes ? `. ${licenseNotes}` : null}
          </p>
        ) : null}

        <div className="mt-4">
          <TrackedLink
            href={reviewHref}
            event="betting_page_review_click"
            section="referencia-local"
            operator={operatorId}
            destination={reviewHref}
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-white/12 px-4 text-sm font-semibold text-foreground transition-colors hover:border-primary/45"
          >
            Leer reseña de Codere
          </TrackedLink>
        </div>
      </article>
    </section>
  );
}
