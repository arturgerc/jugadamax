import Link from "next/link";
import { NEWS_HUB_CATEGORY_NAV } from "@/components/verticals/news/news-hub-config";
import {
  NEWS_CATEGORY_ACCENTS,
  NEWS_CATEGORY_LABELS,
} from "@/components/verticals/news/news-hub-config";
import { resolveNewsByCategory } from "@/components/verticals/news/news-hub-data";
import { cn, focusRing } from "@/lib/utils";

export function NewsCategoryNav() {
  return (
    <section
      id="categorias"
      aria-labelledby="categorias-noticias-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="categorias-noticias-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Explorar por categoría
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Filtra el archivo editorial. Las categorías describen el tema, no un ranking.
        </p>
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {NEWS_HUB_CATEGORY_NAV.map((item) => {
          const count = resolveNewsByCategory(item.id).length;
          return (
            <li key={item.id}>
              <Link
                href={`/noticias?categoria=${item.id}#archivo`}
                className={cn(
                  "flex h-full min-h-11 flex-col rounded-xl border border-white/10 bg-[#111417]/60 p-4 transition-colors hover:border-sky-400/30",
                  focusRing,
                )}
              >
                <span
                  className={cn(
                    "inline-flex w-fit rounded-full border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide",
                    NEWS_CATEGORY_ACCENTS[item.id],
                  )}
                >
                  {count} {count === 1 ? "artículo" : "artículos"}
                </span>
                <span className="mt-2 text-base font-bold text-foreground">
                  {NEWS_CATEGORY_LABELS[item.id]}
                </span>
                <span className="mt-1 text-sm leading-snug text-muted-foreground">
                  {item.description}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
