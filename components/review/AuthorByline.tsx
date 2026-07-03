import type { Author } from "@/types/content";
import { cn, focusRing } from "@/lib/utils";

/**
 * Author byline for E-E-A-T attribution (FR-016).
 *
 * Shows the (real) author name/role plus publish and, when present, updated
 * dates. Dates use a machine-readable <time dateTime> with an es-MX display
 * label. No fabricated authors or credentials (Constitution Principle IV/V).
 */
function formatEsMx(iso: string): string {
  return new Intl.DateTimeFormat("es-MX", {
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
}: {
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  className?: string;
}) {
  return (
    <div className={cn("space-y-1", className)}>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
        <span className="text-foreground">
          Por <span className="font-semibold">{author.name}</span>
          {author.role ? <span className="text-muted-foreground"> · {author.role}</span> : null}
        </span>
        <span aria-hidden="true">·</span>
        <span>
          Publicado el <time dateTime={publishedAt}>{formatEsMx(publishedAt)}</time>
        </span>
        {updatedAt ? (
          <>
            <span aria-hidden="true">·</span>
            <span>
              Actualizado el <time dateTime={updatedAt}>{formatEsMx(updatedAt)}</time>
            </span>
          </>
        ) : null}
        {author.links?.map((link) => (
          <span key={link.url} className="inline-flex items-center gap-x-2">
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
        ))}
      </div>
      {author.credentials ? (
        <p className="text-xs leading-relaxed text-muted-foreground">{author.credentials}</p>
      ) : null}
    </div>
  );
}
