import Link from "next/link";
import {
  REVIEW_FAQ_ITEMS,
  REVIEW_RELATED_ROUTES,
} from "@/components/verticals/reviews/review-hub-config";
import { cn, focusRing } from "@/lib/utils";

/**
 * Reviews FAQ and related internal routes.
 */
export function ReviewsHubEducation() {
  return (
    <div className="space-y-8 sm:space-y-10 lg:space-y-12">
      <section aria-labelledby="reseñas-faq-heading">
        <h2
          id="reseñas-faq-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Preguntas frecuentes sobre reseñas
        </h2>
        <div className="mt-4 max-w-3xl space-y-2">
          {REVIEW_FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="group rounded-lg border border-white/10 bg-[#111417]/60 open:border-primary/25"
            >
              <summary
                className={cn(
                  "cursor-pointer list-none px-3.5 py-3 text-sm font-semibold text-foreground",
                  "[&::-webkit-details-marker]:hidden",
                  focusRing,
                )}
              >
                <span className="flex items-center justify-between gap-3">
                  {item.q}
                  <span
                    aria-hidden="true"
                    className="text-primary transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="border-t border-white/8 px-3.5 py-3 text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      <section aria-labelledby="rutas-relacionadas-heading">
        <h2
          id="rutas-relacionadas-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Rutas relacionadas
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          Continúa en rankings, bonos, guías y páginas de confianza. Los CTAs de
          afiliado viven en superficies comerciales, no en este directorio.
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {REVIEW_RELATED_ROUTES.map((route) => (
            <li key={route.href}>
              <Link
                href={route.href}
                className={cn(
                  "inline-flex min-h-11 items-center rounded-full border border-white/12 bg-[#0A1931]/55 px-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40",
                  focusRing,
                )}
              >
                {route.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
