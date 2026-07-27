import Image from "next/image";
import Link from "next/link";
import type { ResolvedEnGuideCard } from "@/components/verticals/guides/en/en-guide-hub-data";
import { formatEnGuideDate } from "@/components/verticals/guides/en/en-guide-hub-data";
import {
  EnGuideOperatorResearchVisual,
  EnGuideQuickStartVisual,
} from "@/components/verticals/guides/en/EnGuideHubMediaFallbacks";
import { cn, focusRing } from "@/lib/utils";

function EnGuideCardMedia({
  card,
  featured,
  wide,
}: {
  card: ResolvedEnGuideCard;
  featured: boolean;
  wide: boolean;
}) {
  if (card.coverImage) {
    return (
      <div
        className={cn(
          "relative overflow-hidden border-b border-white/8",
          wide
            ? "h-28 sm:h-auto sm:w-[42%] sm:self-stretch sm:border-b-0 sm:border-r sm:min-h-[9.5rem]"
            : "h-28 sm:h-36",
        )}
      >
        <Image
          src={card.coverImage.src}
          alt={card.coverImage.alt}
          width={card.coverImage.width ?? 1200}
          height={card.coverImage.height ?? 630}
          sizes={
            featured || wide
              ? "(max-width: 768px) 100vw, 520px"
              : "(max-width: 768px) 100vw, 400px"
          }
          className={cn(
            "h-full w-full object-cover",
            card.category === "crypto-payments" && "object-[center_35%]",
            card.category === "privacy-safety" && "object-[center_40%]",
          )}
        />
      </div>
    );
  }

  if (featured || card.category === "essential") {
    return (
      <div
        className={cn(
          "overflow-hidden border-b border-white/8 sm:border-b-0 sm:border-l",
          "sm:w-[45%] sm:shrink-0",
        )}
      >
        <EnGuideQuickStartVisual className="h-28 rounded-none border-0 sm:h-full sm:min-h-[9.5rem]" />
      </div>
    );
  }

  if (card.casino) {
    return (
      <div className="overflow-hidden border-b border-white/8">
        <EnGuideOperatorResearchVisual
          casino={card.casino}
          className="rounded-none border-0"
        />
      </div>
    );
  }

  // Should not appear for curated hub entries — keep a filled panel if it does.
  return (
    <div
      className={cn(
        "overflow-hidden border-b border-white/8",
        wide &&
          "sm:h-auto sm:w-[42%] sm:shrink-0 sm:self-stretch sm:border-b-0 sm:border-r sm:min-h-[9.5rem]",
      )}
    >
      <EnGuideQuickStartVisual
        className={cn(
          "h-28 rounded-none border-0 sm:h-36",
          wide && "sm:h-full sm:min-h-[9.5rem]",
        )}
      />
    </div>
  );
}

/**
 * English Guide Hub card — supports real guides plus honest ranking/review cards.
 */
export function EnGuideHubCard({
  card,
  featured = false,
  wide = false,
  ctaLabel,
}: {
  card: ResolvedEnGuideCard;
  featured?: boolean;
  wide?: boolean;
  ctaLabel?: string;
}) {
  const isFeaturedLayout = featured || card.category === "essential";
  const resolvedCta =
    ctaLabel ??
    (card.kind === "guide"
      ? "Read guide"
      : card.kind === "ranking"
        ? "Open ranking"
        : card.kind === "review"
          ? "Read review"
          : "Open page");

  return (
    <article
      className={cn(
        "flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#151a22] to-[#10151d] transition-[border-color,box-shadow,transform] duration-150 hover:-translate-y-px hover:border-white/20 hover:shadow-[0_8px_28px_-18px_rgba(0,0,0,0.55)]",
        isFeaturedLayout &&
          "border-primary/30 shadow-[0_0_28px_-16px_rgba(255,184,0,0.26)] sm:flex-row-reverse",
        wide && "sm:flex-row",
      )}
    >
      <EnGuideCardMedia card={card} featured={isFeaturedLayout} wide={wide} />

      <div className="flex flex-1 flex-col p-3.5 sm:p-4">
        <div className="mb-2 flex flex-wrap items-center gap-1.5">
          {isFeaturedLayout ? (
            <>
              <span className="inline-flex rounded-full border border-primary/35 bg-primary/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-primary">
                Quick start
              </span>
              <span className="inline-flex rounded-full border border-white/12 bg-white/5 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
                Starting point
              </span>
            </>
          ) : (
            <>
              <span
                className={cn(
                  "inline-flex w-fit rounded-full border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide",
                  card.categoryAccent,
                )}
              >
                {card.kindLabel}
              </span>
              <span className="inline-flex w-fit rounded-full border border-white/12 bg-white/5 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
                {card.categoryLabel}
              </span>
            </>
          )}
        </div>

        <h3
          className={cn(
            "font-bold tracking-tight text-foreground",
            isFeaturedLayout ? "text-lg sm:text-xl" : "text-base sm:text-[1.05rem]",
          )}
        >
          <Link href={card.href} className={cn("hover:underline", focusRing)}>
            {card.title}
          </Link>
        </h3>

        <p
          className={cn(
            "mt-1.5 text-sm leading-relaxed text-muted-foreground",
            isFeaturedLayout ? "line-clamp-3" : "line-clamp-2",
          )}
        >
          {card.summary}
        </p>

        {card.author && card.displayDateIso && card.readingMinutes ? (
          <p className="mt-2.5 text-[0.75rem] leading-snug text-muted-foreground">
            By{" "}
            <Link
              href="/en/about"
              className={cn(
                "font-medium text-foreground underline-offset-2 hover:underline",
                focusRing,
              )}
            >
              {card.author.name}
            </Link>
            {" · "}
            {card.displayDateKind === "updated" ? "Updated" : "Published"}{" "}
            <time dateTime={card.displayDateIso}>
              {formatEnGuideDate(card.displayDateIso)}
            </time>
            {" · "}
            {card.readingMinutes} min read
          </p>
        ) : (
          <p className="mt-2.5 text-[0.75rem] leading-snug text-muted-foreground">
            {card.kind === "ranking"
              ? "Live ranking page · editorial comparison"
              : card.kind === "review"
                ? "Full English review · operator research"
                : "Editorial learning resource"}
          </p>
        )}

        <div className="mt-auto pt-3">
          <Link
            href={card.href}
            className={cn(
              "inline-flex min-h-11 items-center rounded-md border border-white/12 bg-[#0A1931]/50 px-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/45 hover:text-primary",
              focusRing,
            )}
          >
            {resolvedCta} →
          </Link>
        </div>
      </div>
    </article>
  );
}
