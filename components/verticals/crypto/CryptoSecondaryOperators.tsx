import { OperatorLogo } from "@/components/brand/OperatorLogo";
import { TrackedLink } from "@/components/analytics/TrackedLink";
import {
  CRYPTO_EDITORIAL_REFERENCES,
  CRYPTO_INTERNATIONAL_ALTERNATIVES,
  type CryptoSecondaryEntry,
} from "@/components/verticals/crypto/crypto-page-config";
import { getCryptoEditorialRating } from "@/components/verticals/crypto/crypto-data";
import { getCasinoById } from "@/lib/content";
import { cn } from "@/lib/utils";

function SecondaryRow({
  entry,
  section,
}: {
  entry: CryptoSecondaryEntry;
  section: "international-alternatives" | "editorial-references";
}) {
  const casino = getCasinoById(entry.operatorId);
  if (!casino) return null;

  const rating = getCryptoEditorialRating(entry.operatorId);
  const ratingLabel = typeof rating === "number" ? rating.toFixed(1) : null;

  return (
    <li className="min-w-0">
      <div
        className={cn(
          "flex min-h-12 flex-col gap-2 rounded-lg border border-white/8 bg-[#111417]/50 p-3 sm:flex-row sm:items-center sm:gap-3",
          !entry.affiliate && "opacity-90",
        )}
      >
        <div className="flex min-w-0 flex-1 items-center gap-2.5">
          <span className="origin-left scale-[0.72]">
            <OperatorLogo
              logo={casino.logo}
              name={casino.name}
              operatorId={entry.operatorId}
            />
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <p className="truncate text-sm font-semibold text-foreground">{casino.name}</p>
              {ratingLabel ? (
                <span className="text-xs tabular-nums text-muted-foreground">{ratingLabel}/5</span>
              ) : null}
            </div>
            <p className="mt-0.5 truncate text-[0.7rem] text-muted-foreground">{entry.label}</p>
            <span className="mt-1 inline-flex rounded-full border border-white/10 px-2 py-0.5 text-[0.6rem] font-medium uppercase tracking-wide text-muted-foreground">
              {entry.badge}
            </span>
          </div>
        </div>
        <div className="flex shrink-0 flex-col gap-1.5 sm:w-40">
          <TrackedLink
            href={entry.ctaHref}
            external
            rel={
              entry.affiliate
                ? "sponsored nofollow noopener noreferrer"
                : "nofollow noopener noreferrer"
            }
            event="crypto_page_affiliate_click"
            section={section}
            position={entry.position}
            operator={entry.operatorId}
            ctaType={entry.affiliate ? "primary" : "official"}
            className={cn(
              "inline-flex min-h-11 items-center justify-center rounded-md px-3 text-xs font-semibold transition-colors",
              entry.affiliate
                ? "border border-white/15 text-foreground hover:border-primary/40"
                : "border border-white/10 text-muted-foreground hover:border-white/20 hover:text-foreground",
            )}
          >
            {entry.ctaLabel}
          </TrackedLink>
          <TrackedLink
            href={entry.reviewHref}
            event="crypto_page_review_click"
            section={section}
            position={entry.position}
            operator={entry.operatorId}
            destination={entry.reviewHref}
            className="inline-flex min-h-11 items-center justify-center text-xs font-medium text-muted-foreground underline-offset-2 hover:underline"
          >
            Leer reseña
          </TrackedLink>
        </div>
      </div>
    </li>
  );
}

/**
 * Lower-priority international alternatives + editorial reference operators.
 */
export function CryptoSecondaryOperators() {
  return (
    <section
      aria-labelledby="crypto-secondary-heading"
      className="mb-8 sm:mb-10 lg:mb-12"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="crypto-secondary-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Otras opciones internacionales y de referencia
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Operadores incluidos para ampliar la comparación. Confirma siempre disponibilidad,
          jurisdicción, pagos y condiciones para México.
        </p>
      </div>

      <div className="mt-4 grid grid-cols-1 items-start gap-5 lg:grid-cols-[3fr_2fr] lg:gap-6">
        <div className="min-w-0 rounded-xl border border-white/8 bg-[#111417]/40 p-3.5 sm:p-4">
          <h3 className="text-sm font-semibold text-foreground sm:text-base">
            Alternativas internacionales
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Campañas globales o enlaces de referencia sin una cobertura específica para México
            confirmada por JugadaMax.
          </p>
          <p className="mt-2 text-[0.7rem] leading-snug text-amber-200/80">
            Los enlaces pueden redirigir según GEO. Confirma disponibilidad y términos para México.
          </p>
          <ul className="mt-3 space-y-2">
            {CRYPTO_INTERNATIONAL_ALTERNATIVES.map((entry) => (
              <SecondaryRow
                key={entry.operatorId}
                entry={entry}
                section="international-alternatives"
              />
            ))}
          </ul>
        </div>

        <div className="min-w-0 self-start rounded-xl border border-white/8 bg-[#0A1931]/35 p-3.5 sm:p-4">
          <h3 className="text-sm font-semibold text-foreground sm:text-base">
            Operadores de referencia
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Incluidos por reconocimiento de marca y valor comparativo. JugadaMax no tiene una
            campaña afiliada confirmada para México en estas tarjetas.
          </p>
          <ul className="mt-3 space-y-2">
            {CRYPTO_EDITORIAL_REFERENCES.map((entry) => (
              <SecondaryRow
                key={entry.operatorId}
                entry={entry}
                section="editorial-references"
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
