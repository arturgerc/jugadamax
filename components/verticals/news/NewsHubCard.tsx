import Image from "next/image";
import Link from "next/link";
import {
  formatNewsDate,
  type ResolvedNewsCard,
} from "@/components/verticals/news/news-hub-data";
import { cn, focusRing } from "@/lib/utils";

function NewsCoverVisual({
  card,
  featured = false,
  priority = false,
}: {
  card: ResolvedNewsCard;
  featured?: boolean;
  priority?: boolean;
}) {
  const cover = card.article.coverImage;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-white/10",
        "aspect-[16/9]",
        !cover && "bg-gradient-to-br from-[#0d1824] via-[#111417] to-[#0A1931]",
      )}
    >
      {cover ? (
        <Image
          src={cover.src}
          alt={cover.alt}
          width={cover.width ?? 1672}
          height={cover.height ?? 941}
          priority={priority}
          sizes={
            featured
              ? "(max-width: 640px) 100vw, 50vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          className="h-full w-full object-cover"
        />
      ) : (
        <>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.18),transparent_55%)]"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,184,0,0.1),transparent_50%)]"
          />
        </>
      )}

      {/* Restrained bottom shade only so kind/category chips stay readable */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent"
      />
      <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-1.5">
        <span
          className={cn(
            "rounded-full border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide backdrop-blur-[2px]",
            card.newsKindAccent,
          )}
        >
          {card.newsKindLabel}
        </span>
        <span
          className={cn(
            "rounded-full border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide backdrop-blur-[2px]",
            card.newsCategoryAccent,
          )}
        >
          {card.newsCategoryLabel}
        </span>
      </div>
    </div>
  );
}

/**
 * News card for hub directory and featured rows.
 */
export function NewsHubCard({
  card,
  featured = false,
  priority = false,
}: {
  card: ResolvedNewsCard;
  featured?: boolean;
  priority?: boolean;
}) {
  return (
    <article
      className={cn(
        "flex h-full min-w-0 flex-col rounded-xl border border-white/10 bg-gradient-to-b from-[#151a22] to-[#10151d] p-3.5",
        featured && "border-sky-500/20 sm:p-4",
      )}
    >
      <NewsCoverVisual card={card} featured={featured} priority={priority} />

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span
          className={cn(
            "rounded-full border px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide",
            card.newsKindAccent,
          )}
        >
          {card.newsKindLabel}
        </span>
        <span
          className={cn(
            "rounded-full border px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide",
            card.newsCategoryAccent,
          )}
        >
          {card.newsCategoryLabel}
        </span>
      </div>

      <h3
        className={cn(
          "mt-2 font-bold leading-snug text-foreground",
          featured ? "text-base sm:text-lg" : "text-sm sm:text-[0.95rem]",
        )}
      >
        <Link
          href={card.href}
          className={cn("transition-colors hover:text-primary", focusRing)}
        >
          {card.article.title}
        </Link>
      </h3>

      <p className="mt-2 line-clamp-3 text-sm leading-snug text-muted-foreground">
        {card.article.summary}
      </p>

      <div className="mt-auto flex flex-col gap-2 pt-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-[0.7rem] text-muted-foreground">
          <Link
            href={`/autores/${card.author.slug}`}
            className={cn(
              "font-medium text-foreground/85 underline-offset-2 hover:underline",
              focusRing,
            )}
          >
            {card.author.name}
          </Link>
          <span aria-hidden="true">·</span>
          <span>{card.readingMinutes} min</span>
          <span aria-hidden="true">·</span>
          <time dateTime={card.displayDateIso}>
            {formatNewsDate(card.displayDateIso)}
          </time>
        </p>
        <Link
          href={card.href}
          className={cn(
            "inline-flex min-h-11 items-center justify-center rounded-md border border-sky-400/35 bg-sky-500/10 px-3.5 text-sm font-semibold text-sky-200 transition-colors hover:bg-sky-500/15",
            focusRing,
          )}
        >
          Leer artículo
        </Link>
      </div>
    </article>
  );
}
