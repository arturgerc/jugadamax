import Link from "next/link";
import { OperatorLogo } from "@/components/brand/OperatorLogo";
import {
  formatReviewHubDate,
  type ResolvedReviewCard,
} from "@/components/verticals/reviews/review-hub-data";
import { cn, focusRing } from "@/lib/utils";

export type ReviewsHubCardVariant = "directory" | "primary" | "secondary";

/**
 * Compact information-rich review card.
 * Internal review link only — no affiliate CTA.
 */
export function ReviewsHubCard({
  card,
  variant = "directory",
}: {
  card: ResolvedReviewCard;
  variant?: ReviewsHubCardVariant;
}) {
  const isPrimary = variant === "primary";
  const isSecondary = variant === "secondary";

  return (
    <article
      className={cn(
        "flex h-full min-w-0 flex-col rounded-xl border bg-gradient-to-b p-3.5 shadow-[0_4px_20px_-8px_rgba(0,0,0,0.45)]",
        isPrimary
          ? "border-primary/25 from-[#1a160f]/90 to-[#10151d] sm:p-4"
          : isSecondary
            ? "border-white/10 from-[#141a22] to-[#10151d] p-3"
            : "border-white/10 from-[#151a22] to-[#10151d]",
      )}
    >
      <div className="flex items-start gap-2.5">
        <OperatorLogo
          logo={card.logo}
          name={card.operatorName}
          operatorId={card.casino.id}
          variant="compact-row"
        />
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3
              className={cn(
                "font-bold text-foreground",
                isPrimary ? "text-base sm:text-lg" : "text-sm sm:text-[0.95rem]",
              )}
            >
              <Link
                href={card.href}
                className={cn("transition-colors hover:text-primary", focusRing)}
              >
                {card.operatorName}
              </Link>
            </h3>
            <span
              className="inline-flex items-center rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 text-xs font-bold tabular-nums text-primary"
              title="Calificación editorial de JugadaMax"
            >
              {card.rating.toFixed(1)}
              <span className="ml-0.5 font-semibold text-primary/80">/5</span>
            </span>
          </div>
          <ul className="mt-1.5 flex flex-wrap gap-1" aria-label="Categorías">
            {card.categoryBadges.map((badge) => (
              <li
                key={badge.label}
                className={cn(
                  "rounded-full border px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide",
                  badge.accent,
                )}
              >
                {badge.label}
              </li>
            ))}
            {card.statusBadge ? (
              <li
                className={cn(
                  "rounded-full border px-2 py-0.5 text-[0.6rem] font-semibold uppercase tracking-wide",
                  card.statusBadge.accent,
                )}
              >
                {card.statusBadge.label}
              </li>
            ) : null}
          </ul>
        </div>
      </div>

      <p
        className={cn(
          "mt-2.5 text-sm leading-snug text-muted-foreground",
          isSecondary ? "line-clamp-2" : "line-clamp-3",
          isPrimary && "sm:line-clamp-4",
        )}
      >
        {card.review.verdict}
      </p>

      <div
        className={cn(
          "mt-auto flex flex-col gap-2 pt-3",
          !isSecondary && "sm:flex-row sm:items-center sm:justify-between",
        )}
      >
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
            {formatReviewHubDate(card.displayDateIso)}
          </time>
        </p>
        <Link
          href={card.href}
          className={cn(
            "inline-flex min-h-11 items-center justify-center rounded-md border border-primary/35 bg-primary/10 px-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/15",
            focusRing,
          )}
        >
          Leer reseña
        </Link>
      </div>
    </article>
  );
}
