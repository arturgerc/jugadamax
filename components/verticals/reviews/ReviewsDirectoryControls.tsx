import Link from "next/link";
import {
  REVIEW_HUB_FILTER_OPTIONS,
  REVIEW_HUB_SORT_OPTIONS,
  type ReviewHubCategory,
  type ReviewHubSort,
} from "@/components/verticals/reviews/review-hub-config";
import { buildReviewsQueryHref } from "@/components/verticals/reviews/review-hub-data";
import { cn, focusRing } from "@/lib/utils";

/**
 * Server-rendered search, category filters, and sorting for the reviews directory.
 */
export function ReviewsDirectoryControls({
  category,
  sort,
  query,
}: {
  category: ReviewHubCategory;
  sort: ReviewHubSort;
  query: string;
}) {
  return (
    <div className="space-y-3">
      <form
        method="get"
        action="/reviews"
        className="rounded-xl border border-white/10 bg-[#111417]/70 p-3 sm:p-4"
      >
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)_minmax(0,0.7fr)_auto] lg:items-end">
          <div className="min-w-0 md:col-span-2 lg:col-span-1">
            <label
              htmlFor="reviews-q"
              className="mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
            >
              Buscar
            </label>
            <input
              id="reviews-q"
              name="q"
              type="search"
              defaultValue={query}
              placeholder="Operador, título o tema…"
              className={cn(
                "min-h-11 w-full rounded-md border border-white/12 bg-[#0A1931]/70 px-3 text-sm text-foreground placeholder:text-muted-foreground/70",
                focusRing,
              )}
            />
          </div>

          <div className="min-w-0">
            <label
              htmlFor="reviews-categoria"
              className="mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
            >
              Categoría
            </label>
            <select
              id="reviews-categoria"
              name="categoria"
              defaultValue={category}
              className={cn(
                "min-h-11 w-full rounded-md border border-white/12 bg-[#0A1931]/70 px-3 text-sm text-foreground",
                focusRing,
              )}
            >
              {REVIEW_HUB_FILTER_OPTIONS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <div className="min-w-0">
            <label
              htmlFor="reviews-orden"
              className="mb-1.5 block text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground"
            >
              Orden
            </label>
            <select
              id="reviews-orden"
              name="orden"
              defaultValue={sort}
              className={cn(
                "min-h-11 w-full rounded-md border border-white/12 bg-[#0A1931]/70 px-3 text-sm text-foreground",
                focusRing,
              )}
            >
              {REVIEW_HUB_SORT_OPTIONS.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className={cn(
              "inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)] md:col-span-2 lg:col-span-1",
              focusRing,
            )}
          >
            Aplicar
          </button>
        </div>
      </form>

      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filtros rápidos por categoría"
      >
        {REVIEW_HUB_FILTER_OPTIONS.map((option) => {
          const active = category === option.id;
          const href = buildReviewsQueryHref({
            q: query,
            categoria: option.id,
            orden: sort,
            hash: "#directorio",
          });
          return (
            <Link
              key={option.id}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full border px-3.5 text-xs font-semibold transition-colors sm:text-sm",
                active
                  ? "border-primary/45 bg-primary/15 text-primary"
                  : "border-white/12 bg-[#0A1931]/55 text-muted-foreground hover:border-white/25 hover:text-foreground",
                focusRing,
              )}
            >
              {option.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
