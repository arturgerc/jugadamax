import { NewsHubCard } from "@/components/verticals/news/NewsHubCard";
import { resolveFeaturedNews } from "@/components/verticals/news/news-hub-data";

export function NewsFeaturedSection() {
  const featured = resolveFeaturedNews(2);
  if (featured.length === 0) return null;

  return (
    <section
      id="destacadas"
      aria-labelledby="destacadas-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="destacadas-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Historias destacadas
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Selección editorial reciente. No es un ranking de popularidad ni una lista de
          «mejores» operadores.
        </p>
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {featured.map((card, index) => (
          <li key={card.article.id} className="min-w-0">
            <NewsHubCard card={card} featured priority={index === 0} />
          </li>
        ))}
      </ul>
    </section>
  );
}
