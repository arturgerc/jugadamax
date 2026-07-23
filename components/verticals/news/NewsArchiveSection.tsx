import Link from "next/link";
import { NewsHubCard } from "@/components/verticals/news/NewsHubCard";
import {
  NEWS_CATEGORY_LABELS,
  NEWS_HUB_CATEGORY_NAV,
} from "@/components/verticals/news/news-hub-config";
import type { ResolvedNewsCard } from "@/components/verticals/news/news-hub-data";
import { cn, focusRing } from "@/lib/utils";
import type { NewsCategory } from "@/types/content";

export function NewsArchiveSection({
  items,
  category,
}: {
  items: ResolvedNewsCard[];
  category: NewsCategory | "todas";
}) {
  return (
    <section
      id="archivo"
      aria-labelledby="archivo-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="archivo-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Archivo de noticias
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          {category === "todas"
            ? "Listado completo ordenado por publicación (más recientes primero)."
            : `Filtrado por ${NEWS_CATEGORY_LABELS[category]}.`}
        </p>
      </div>

      <div
        className="mt-4 flex flex-wrap gap-2"
        role="group"
        aria-label="Filtros de categoría"
      >
        <Link
          href="/noticias#archivo"
          aria-current={category === "todas" ? "page" : undefined}
          className={cn(
            "inline-flex min-h-11 items-center rounded-full border px-3.5 text-xs font-semibold sm:text-sm",
            category === "todas"
              ? "border-sky-400/45 bg-sky-500/15 text-sky-200"
              : "border-white/12 bg-[#0A1931]/55 text-muted-foreground hover:border-white/25 hover:text-foreground",
            focusRing,
          )}
        >
          Todas
        </Link>
        {NEWS_HUB_CATEGORY_NAV.map((item) => {
          const active = category === item.id;
          return (
            <Link
              key={item.id}
              href={`/noticias?categoria=${item.id}#archivo`}
              aria-current={active ? "page" : undefined}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full border px-3.5 text-xs font-semibold sm:text-sm",
                active
                  ? "border-sky-400/45 bg-sky-500/15 text-sky-200"
                  : "border-white/12 bg-[#0A1931]/55 text-muted-foreground hover:border-white/25 hover:text-foreground",
                focusRing,
              )}
            >
              {NEWS_CATEGORY_LABELS[item.id]}
            </Link>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-muted-foreground" aria-live="polite">
        {items.length === 0
          ? "No hay artículos en esta categoría todavía."
          : `${items.length} artículo${items.length === 1 ? "" : "s"}.`}
      </p>

      {items.length > 0 ? (
        <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {items.map((card) => (
            <li key={card.article.id} className="min-w-0">
              <NewsHubCard card={card} />
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
