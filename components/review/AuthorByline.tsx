import type { Author } from "@/types/content";
import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";
import type { UiLocale } from "@/lib/i18n/ui-labels";

function formatDate(iso: string, locale: UiLocale): string {
  return new Intl.DateTimeFormat(locale === "en" ? "en-US" : "es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

export function AuthorByline({
  author,
  publishedAt,
  updatedAt,
  className,
  locale = "es",
  compact = false,
}: {
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  className?: string;
  locale?: UiLocale;
  /** Hide credentials and external LinkedIn; link name to internal profile. */
  compact?: boolean;
}) {
  const byPrefix = locale === "en" ? "By" : "Por";
  const publishedLabel = locale === "en" ? "Published" : "Publicado el";
  const updatedLabel = locale === "en" ? "Updated" : "Actualizado el";
  const displayName =
    locale === "en" && author.id === "redaccion-jugadamax"
      ? "JugadaMax Editorial"
      : author.name;
  const showRole = locale === "es" && author.role && !compact;
  const showCredentials = locale === "es" && author.credentials && !compact;
  const authorProfileHref = locale === "es" ? `/autores/${author.slug}` : null;
  const showExternalLinks = !compact && locale === "es";

  return (
    <div className={cn("space-y-0.5 sm:space-y-1", className)}>
      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-0.5 text-xs text-muted-foreground sm:gap-x-2 sm:gap-y-1 sm:text-sm">
        <span className="text-foreground">
          {byPrefix}{" "}
          {authorProfileHref ? (
            <Link
              href={authorProfileHref}
              className={cn("font-semibold underline-offset-2 hover:underline", focusRing)}
            >
              {displayName}
            </Link>
          ) : (
            <span className="font-semibold">{displayName}</span>
          )}
          {showRole ? <span className="text-muted-foreground"> · {author.role}</span> : null}
        </span>
        <span aria-hidden="true">·</span>
        <span>
          {publishedLabel}{" "}
          <time dateTime={publishedAt}>{formatDate(publishedAt, locale)}</time>
        </span>
        {updatedAt ? (
          <>
            <span aria-hidden="true">·</span>
            <span>
              {updatedLabel}{" "}
              <time dateTime={updatedAt}>{formatDate(updatedAt, locale)}</time>
            </span>
          </>
        ) : null}
        {showExternalLinks
          ? author.links?.map((link) => (
              <span key={link.url} className="inline-flex items-center gap-x-1.5 sm:gap-x-2">
                <span aria-hidden="true">·</span>
                <a
                  href={link.url}
                  target="_blank"
                  rel="me noopener noreferrer"
                  className={cn(
                    "text-xs font-medium text-primary underline-offset-2 hover:underline",
                    focusRing,
                  )}
                >
                  {link.label}
                </a>
              </span>
            ))
          : null}
      </div>
      {showCredentials ? (
        <p className="hidden text-xs leading-relaxed text-muted-foreground sm:block">
          {author.credentials}
        </p>
      ) : null}
    </div>
  );
}
