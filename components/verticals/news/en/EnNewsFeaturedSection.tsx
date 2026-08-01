import { EnNewsHubCard } from "@/components/verticals/news/en/EnNewsHubCard";
import { resolveEnFeaturedNews } from "@/components/verticals/news/en/en-news-data";

export function EnNewsFeaturedSection() {
  const featured = resolveEnFeaturedNews(2);
  if (featured.length === 0) return null;

  return (
    <section
      id="featured"
      aria-labelledby="en-featured-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="en-featured-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Featured stories
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Recent editorial selection. Not a popularity ranking and not a list of “best” operators.
        </p>
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {featured.map((card, index) => (
          <li key={card.article.id} className="min-w-0">
            <EnNewsHubCard card={card} featured priority={index === 0} />
          </li>
        ))}
      </ul>
    </section>
  );
}
