import Link from "next/link";
import { REVIEW_METHODOLOGY_CRITERIA } from "@/components/verticals/reviews/review-hub-config";
import { cn, focusRing } from "@/lib/utils";

/**
 * Explains how to read JugadaMax editorial ratings (not user aggregates).
 * Uses non-numeric criteria — no invented score thresholds.
 */
export function ReviewsMethodology() {
  return (
    <section
      id="calificaciones"
      aria-labelledby="calificaciones-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="calificaciones-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Cómo leer las calificaciones editoriales de JugadaMax
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Cada nota es una opinión editorial atribuida al autor o equipo. No es un
          promedio de usuarios, ni AggregateRating, ni una garantía de seguridad,
          licencia o retiros. Evaluamos con criterios cualitativos, no con umbrales
          numéricos inventados.
        </p>
      </div>

      <ol className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
        {REVIEW_METHODOLOGY_CRITERIA.map((item, index) => (
          <li
            key={item.heading}
            className="rounded-xl border border-white/10 bg-[#111417]/55 p-3.5"
          >
            <div className="flex items-start gap-2.5">
              <span
                aria-hidden="true"
                className={cn(
                  "inline-flex size-7 shrink-0 items-center justify-center rounded-full border text-[0.7rem] font-bold",
                  index % 2 === 0
                    ? "border-primary/30 bg-primary/10 text-primary"
                    : "border-cyan-400/30 bg-cyan-500/10 text-cyan-200",
                )}
              >
                {index + 1}
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-foreground">
                  {item.heading}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-3 max-w-3xl text-sm text-muted-foreground">
        Para el detalle completo de la metodología, consulta{" "}
        <Link
          href="/como-evaluamos"
          className={cn(
            "font-medium text-primary underline-offset-2 hover:underline",
            focusRing,
          )}
        >
          Cómo evaluamos los operadores
        </Link>
        .
      </p>
    </section>
  );
}
