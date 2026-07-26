import type { Author } from "@/types/content";
import { cn } from "@/lib/utils";
import type { UiLocale } from "@/lib/i18n/ui-labels";

type AuthorBylineProps = {
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  locale?: UiLocale;
  className?: string;
  /** Compact single-line byline for dense mobile headers. */
  compact?: boolean;
};

function formatDate(iso: string, locale: UiLocale): string {
  return new Intl.DateTimeFormat(locale === "en" ? "en-US" : "es-MX", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(iso));
}

function displayAuthorName(author: Author, locale: UiLocale): string {
  if (locale === "en" && author.id === "redaccion-jugadamax") {
    return "JugadaMax Editorial";
  }
  return author.name;
}

function displayAuthorRole(author: Author, locale: UiLocale): string | undefined {
  if (!author.role) return undefined;
  if (locale !== "en") return author.role;
  if (author.id === "redaccion-jugadamax") return "Editorial Team";
  if (author.id === "arturs-stoliks") return "Founder and editor of JugadaMax";
  return author.role;
}

function displayAuthorCredentials(
  author: Author,
  locale: UiLocale,
): string | undefined {
  if (!author.credentials) return undefined;
  if (locale !== "en") return author.credentials;
  if (author.id === "redaccion-jugadamax") {
    return "JugadaMax editorial team covering crypto casinos, fiat casinos, and sports betting.";
  }
  if (author.id === "arturs-stoliks") {
    return "Founder of JugadaMax. Oversees editorial coverage of online casinos, betting, payments, responsible gambling, and crypto trends.";
  }
  return author.credentials;
}

export function AuthorByline({
  author,
  publishedAt,
  updatedAt,
  locale = "es",
  className,
  compact = false,
}: AuthorBylineProps) {
  const byLabel = locale === "en" ? "By" : "Por";
  const publishedLabel = locale === "en" ? "Published" : "Publicado";
  const updatedLabel = locale === "en" ? "Updated" : "Actualizado";
  const name = displayAuthorName(author, locale);
  const role = displayAuthorRole(author, locale);
  const credentials = displayAuthorCredentials(author, locale);
  const showRole = Boolean(role) && !compact;
  const showCredentials = Boolean(credentials) && !compact;
  // Author profile pages currently exist only under Spanish `/autores`.
  const authorProfileHref = locale === "es" ? `/autores/${author.slug}` : null;
  const showExternalLinks = !compact;

  return (
    <div
      className={cn(
        compact
          ? "flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-xs text-muted-foreground"
          : "flex flex-col gap-1 text-sm text-muted-foreground",
        className,
      )}
    >
      <p className={cn(compact && "inline")}>
        <span>{byLabel} </span>
        {authorProfileHref ? (
          <a
            href={authorProfileHref}
            className="font-medium text-foreground underline-offset-2 hover:underline"
          >
            {name}
          </a>
        ) : (
          <span className="font-medium text-foreground">{name}</span>
        )}
        {showRole ? <span> · {role}</span> : null}
        {compact ? (
          <>
            <span aria-hidden="true"> · </span>
            <time dateTime={publishedAt}>{formatDate(publishedAt, locale)}</time>
            {updatedAt && updatedAt !== publishedAt ? (
              <>
                <span aria-hidden="true"> · </span>
                <time dateTime={updatedAt}>{formatDate(updatedAt, locale)}</time>
              </>
            ) : null}
          </>
        ) : null}
      </p>
      {!compact ? (
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          <span>
            {publishedLabel}:{" "}
            <time dateTime={publishedAt}>{formatDate(publishedAt, locale)}</time>
          </span>
          {updatedAt && updatedAt !== publishedAt ? (
            <span>
              {updatedLabel}:{" "}
              <time dateTime={updatedAt}>{formatDate(updatedAt, locale)}</time>
            </span>
          ) : null}
          {showExternalLinks
            ? (author.links ?? []).map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline-offset-2 hover:underline"
                >
                  {link.label}
                </a>
              ))
            : null}
        </p>
      ) : null}
      {showCredentials ? (
        <p className="hidden text-xs sm:block">{credentials}</p>
      ) : null}
    </div>
  );
}
