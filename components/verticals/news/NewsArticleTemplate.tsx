import Image from "next/image";
import Link from "next/link";
import {
  formatNewsDate,
  type ResolvedNewsCard,
} from "@/components/verticals/news/news-hub-data";
import { cn, focusRing } from "@/lib/utils";
import type { Author } from "@/types/content";

function resolveAuthorLinkedIn(author: Author): string | undefined {
  return author.links?.find((link) => /linkedin/i.test(link.url))?.url;
}

function NewsArticleAuthorCard({ author }: { author: Author }) {
  const linkedInHref = resolveAuthorLinkedIn(author);
  const isOrg = author.kind === "organization";

  return (
    <aside
      aria-labelledby="autor-articulo-heading"
      className="rounded-xl border border-white/10 bg-[#111417]/70 p-4 sm:p-5"
    >
      <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent">
        {isOrg ? "Equipo editorial" : "Autor"}
      </p>
      <h2
        id="autor-articulo-heading"
        className="mt-1 text-lg font-bold text-foreground"
      >
        {author.name}
      </h2>
      {author.role ? (
        <p className="mt-0.5 text-sm text-muted-foreground">{author.role}</p>
      ) : null}
      {author.bio ? (
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          {author.bio}
        </p>
      ) : null}
      <div className="mt-4 flex flex-wrap gap-2">
        <Link
          href={`/autores/${author.slug}`}
          className={cn(
            "inline-flex min-h-11 items-center rounded-md border border-primary/35 bg-primary/10 px-3.5 text-sm font-semibold text-primary",
            focusRing,
          )}
        >
          Ver perfil
        </Link>
        {linkedInHref ? (
          <a
            href={linkedInHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex min-h-11 items-center rounded-md border border-white/15 bg-white/[0.03] px-3.5 text-sm font-medium text-foreground transition-colors hover:border-sky-400/40",
              focusRing,
            )}
          >
            LinkedIn
          </a>
        ) : null}
      </div>
      {linkedInHref ? (
        <p className="mt-3 text-[0.7rem] leading-snug text-muted-foreground">
          LinkedIn se usa para identidad y distribución, no como fuente factual del
          artículo.
        </p>
      ) : null}
    </aside>
  );
}

/**
 * Individual news article template — fact/opinion separation, sources, related.
 */
export function NewsArticleTemplate({
  card,
  related,
}: {
  card: ResolvedNewsCard;
  related: ResolvedNewsCard[];
}) {
  const { article, author } = card;
  const paragraphs = article.body.split("\n\n").filter(Boolean);
  const isMixed =
    card.newsKind === "noticia-opinion" || card.newsKind === "opinion";
  const cover = article.coverImage;

  return (
    <article className="mx-auto w-full max-w-3xl space-y-6 sm:space-y-8">
      <header className="space-y-4">
        <div
          className={cn(
            "relative overflow-hidden rounded-2xl border border-white/12 aspect-[16/9]",
            !cover &&
              "bg-gradient-to-br from-[#0d1824] via-[#111417] to-[#0A1931]",
          )}
        >
          {cover ? (
            <Image
              src={cover.src}
              alt={cover.alt}
              width={cover.width ?? 1672}
              height={cover.height ?? 941}
              priority
              sizes="(max-width: 768px) 100vw, 768px"
              className="h-full w-full object-cover"
            />
          ) : (
            <>
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.2),transparent_55%)]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(255,184,0,0.1),transparent_50%)]"
              />
            </>
          )}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/55 to-transparent"
          />
          <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2 sm:bottom-4 sm:left-4 sm:right-4">
            <span
              className={cn(
                "rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur-[2px]",
                card.newsKindAccent,
              )}
            >
              {card.newsKindLabel}
            </span>
            <span
              className={cn(
                "rounded-full border px-2.5 py-1 text-xs font-semibold uppercase tracking-wide backdrop-blur-[2px]",
                card.newsCategoryAccent,
              )}
            >
              {card.newsCategoryLabel}
            </span>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-[2.1rem]">
            {article.title}
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
            {article.summary}
          </p>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
            <Link
              href={`/autores/${author.slug}`}
              className={cn(
                "font-semibold text-foreground underline-offset-2 hover:underline",
                focusRing,
              )}
            >
              {author.name}
            </Link>
            <span aria-hidden="true">·</span>
            <span>{card.readingMinutes} min de lectura</span>
            <span aria-hidden="true">·</span>
            <span>
              {card.displayDateKind === "updated" ? "Actualizado" : "Publicado"}{" "}
              <time dateTime={card.displayDateIso}>
                {formatNewsDate(card.displayDateIso)}
              </time>
            </span>
          </p>
        </div>
      </header>

      {article.keyPoints && article.keyPoints.length > 0 ? (
        <section
          aria-labelledby="puntos-clave-heading"
          className="rounded-xl border border-sky-500/20 bg-gradient-to-b from-[#101820]/80 to-[#111417]/50 p-4 sm:p-5"
        >
          <h2
            id="puntos-clave-heading"
            className="text-base font-bold text-foreground sm:text-lg"
          >
            Puntos clave
          </h2>
          <ul className="mt-3 space-y-2">
            {article.keyPoints.map((point) => (
              <li
                key={point}
                className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
              >
                <span
                  aria-hidden="true"
                  className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-sky-400"
                />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {isMixed ? (
        <div className="grid gap-2 sm:grid-cols-2">
          <p className="rounded-lg border border-emerald-500/20 bg-emerald-500/8 px-3 py-2 text-xs leading-relaxed text-emerald-100/90">
            <span className="font-semibold text-emerald-200">
              {article.factLabel ?? "Hechos"}:
            </span>{" "}
            el cuerpo resume información atribuida a fuentes citadas abajo.
          </p>
          <p className="rounded-lg border border-violet-500/20 bg-violet-500/8 px-3 py-2 text-xs leading-relaxed text-violet-100/90">
            <span className="font-semibold text-violet-200">
              {article.opinionLabel ?? "Opinión"}:
            </span>{" "}
            el comentario del autor es valoración editorial, no un hecho adicional.
          </p>
        </div>
      ) : null}

      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {article.authorComment ? (
        <aside
          aria-labelledby="comentario-autor-heading"
          className="rounded-xl border border-violet-500/25 bg-gradient-to-br from-[#16101c]/90 to-[#111417]/80 p-4 sm:p-5"
        >
          <h2
            id="comentario-autor-heading"
            className="text-base font-bold text-foreground sm:text-lg"
          >
            {article.authorComment.heading}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {article.authorComment.body}
          </p>
        </aside>
      ) : null}

      {article.sources && article.sources.length > 0 ? (
        <section
          aria-labelledby="fuentes-heading"
          className="rounded-xl border border-white/10 bg-[#111417]/60 p-4 sm:p-5"
        >
          <h2
            id="fuentes-heading"
            className="text-base font-bold text-foreground sm:text-lg"
          >
            Fuentes
          </h2>
          <ul className="mt-3 space-y-3">
            {article.sources.map((source) => (
              <li key={source.url} className="text-sm">
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "font-semibold text-sky-200 underline-offset-2 hover:underline",
                    focusRing,
                  )}
                >
                  {source.label}
                </a>
                {source.publisher ? (
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    {source.publisher}
                    {source.publishedAt
                      ? ` · ${formatNewsDate(source.publishedAt)}`
                      : ""}
                  </span>
                ) : null}
                {source.note ? (
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    {source.note}
                  </span>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <NewsArticleAuthorCard author={author} />

      {article.relatedLinks && article.relatedLinks.length > 0 ? (
        <nav aria-label="Enlaces relacionados del artículo">
          <h2 className="text-base font-bold text-foreground sm:text-lg">
            Continúa leyendo
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {article.relatedLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "inline-flex min-h-11 items-center rounded-full border border-white/12 bg-[#0A1931]/55 px-3.5 text-sm font-medium text-foreground transition-colors hover:border-sky-400/40",
                    focusRing,
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      {related.length > 0 ? (
        <section aria-labelledby="mas-noticias-heading">
          <h2
            id="mas-noticias-heading"
            className="text-base font-bold text-foreground sm:text-lg"
          >
            Más en noticias
          </h2>
          <ul className="mt-3 space-y-2">
            {related.map((item) => (
              <li key={item.article.id}>
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-lg border border-white/10 bg-[#111417]/50 px-3.5 py-3 transition-colors hover:border-sky-400/35",
                    focusRing,
                  )}
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-sky-200/90">
                    {item.newsKindLabel}
                  </span>
                  <span className="mt-1 block font-semibold text-foreground">
                    {item.article.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <p className="border-t border-border/60 pt-6 text-xs text-muted-foreground">
        Solo para mayores de 18 años. Juega de forma responsable.{" "}
        <Link
          href="/juego-responsable"
          className={cn(
            "font-medium text-foreground underline-offset-2 hover:underline",
            focusRing,
          )}
        >
          Más información
        </Link>
        .
      </p>
    </article>
  );
}
