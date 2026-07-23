import Link from "next/link";
import { ReviewsDirectoryControls } from "@/components/verticals/reviews/ReviewsDirectoryControls";
import { ReviewsHubCard } from "@/components/verticals/reviews/ReviewsHubCard";
import type { ReviewDirectoryResult } from "@/components/verticals/reviews/review-hub-data";
import { cn, focusRing } from "@/lib/utils";

/**
 * Search/filter/sort controls + review directory with progressive disclosure.
 */
export function ReviewsDirectory({
  directory,
}: {
  directory: ReviewDirectoryResult;
}) {
  const {
    items,
    collapsedItems,
    totalMatched,
    collapsedCount,
    isDefaultView,
    category,
    sort,
    query,
  } = directory;

  return (
    <section
      id="directorio"
      aria-labelledby="directorio-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="directorio-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Directorio de reseñas
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          {isDefaultView
            ? "El directorio por defecto muestra el resto de reseñas (sin duplicar las destacadas), ordenadas por publicación. Busca o filtra para incluir también las destacadas cuando coincidan."
            : "Resultados filtrados u ordenados. Las reseñas destacadas también aparecen cuando coinciden con tu búsqueda o categoría."}
        </p>
      </div>

      <div className="mt-4">
        <ReviewsDirectoryControls
          category={category}
          sort={sort}
          query={query}
        />
      </div>

      <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
        {totalMatched === 0
          ? "No hay reseñas que coincidan con estos criterios."
          : isDefaultView
            ? `Mostrando ${items.length} reseña${items.length === 1 ? "" : "s"} del directorio${collapsedCount > 0 ? ` · ${collapsedCount} más abajo` : ""}.`
            : `Mostrando ${items.length} de ${totalMatched} reseña${totalMatched === 1 ? "" : "s"}.`}
      </p>

      {items.length === 0 && collapsedItems.length === 0 ? (
        <p className="mt-4 rounded-xl border border-white/10 bg-[#111417]/60 p-4 text-sm text-muted-foreground">
          Prueba otra categoría, limpia la búsqueda o vuelve a{" "}
          <Link
            href="/reviews#directorio"
            className={cn(
              "font-medium text-primary underline-offset-2 hover:underline",
              focusRing,
            )}
          >
            Todas
          </Link>
          .
        </p>
      ) : (
        <>
          {items.length > 0 ? (
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
              {items.map((card) => (
                <li key={card.review.id} className="min-w-0">
                  <ReviewsHubCard card={card} />
                </li>
              ))}
            </ul>
          ) : null}

          {collapsedCount > 0 ? (
            <details className="group mt-4 rounded-xl border border-white/10 bg-[#111417]/55 open:border-primary/20">
              <summary
                className={cn(
                  "cursor-pointer list-none px-4 py-3 text-sm font-semibold text-foreground",
                  "[&::-webkit-details-marker]:hidden",
                  focusRing,
                )}
              >
                <span className="flex min-h-11 items-center justify-between gap-3">
                  {`Ver ${collapsedCount} reseña${collapsedCount === 1 ? "" : "s"} más`}
                  <span
                    aria-hidden="true"
                    className="text-primary transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <ul className="border-t border-white/8 px-3 pb-3 pt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 sm:px-4">
                {collapsedItems.map((card) => (
                  <li key={card.review.id} className="min-w-0">
                    <ReviewsHubCard card={card} />
                  </li>
                ))}
              </ul>
            </details>
          ) : null}
        </>
      )}
    </section>
  );
}
