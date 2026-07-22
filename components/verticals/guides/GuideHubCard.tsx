import Image from "next/image";
import Link from "next/link";
import type { ResolvedGuideCard } from "@/components/verticals/guides/guide-hub-data";
import { formatGuideDate } from "@/components/verticals/guides/guide-hub-data";
import {
  GuideGenericFallbackVisual,
  GuideOperatorResearchVisual,
  GuideQuickStartVisual,
} from "@/components/verticals/guides/GuideHubMediaFallbacks";
import { cn, focusRing } from "@/lib/utils";

function GuideCardMedia({
  guide,
  featured,
  wide,
}: {
  guide: ResolvedGuideCard;
  featured: boolean;
  wide: boolean;
}) {
  if (guide.coverImage) {
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
          src={guide.coverImage.src}
          alt={guide.coverImage.alt}
          width={guide.coverImage.width ?? 1200}
          height={guide.coverImage.height ?? 630}
          sizes={
            featured || wide
              ? "(max-width: 768px) 100vw, 520px"
              : "(max-width: 768px) 100vw, 400px"
          }
          className={cn(
            "h-full w-full object-cover",
            guide.category === "crypto-payments" && "object-[center_35%]",
            guide.category === "privacy-safety" && "object-[center_40%]",
          )}
        />
      </div>
    );
  }

  if (featured || guide.category === "essential") {
    return (
      <div
        className={cn(
          "overflow-hidden border-b border-white/8 sm:border-b-0 sm:border-l",
          "sm:w-[45%] sm:shrink-0",
        )}
      >
        <GuideQuickStartVisual className="h-28 rounded-none border-0 sm:h-full sm:min-h-[9.5rem]" />
      </div>
    );
  }

  if (guide.casino) {
    return (
      <div className="overflow-hidden border-b border-white/8">
        <GuideOperatorResearchVisual
          casino={guide.casino}
          className="h-28 rounded-none border-0 sm:h-36"
        />
      </div>
    );
  }

  return (
    <div className="overflow-hidden border-b border-white/8">
      <GuideGenericFallbackVisual
        label={guide.categoryLabel}
        accentClass={guide.categoryAccent}
        fallbackClass={guide.fallbackClass}
        className="h-28 rounded-none border-0 sm:h-36"
      />
    </div>
  );
}

/**
 * Guide Hub card — compact media, author link, reading time; no LinkedIn on cards.
 */
export function GuideHubCard({
  guide,
  featured = false,
  wide = false,
  ctaLabel = "Leer guía",
}: {
  guide: ResolvedGuideCard;
  featured?: boolean;
  wide?: boolean;
  ctaLabel?: string;
}) {
  const dateLabel =
    guide.displayDateKind === "updated" ? "Actualizado" : "Publicado";
  const authorHref = `/autores/${guide.author.slug}`;
  const isFeaturedLayout = featured || guide.category === "essential";

  return (
    <article
      className={cn(
        "flex h-full min-w-0 flex-col overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-[#151a22] to-[#10151d] transition-[border-color,box-shadow,transform] duration-150 hover:-translate-y-px hover:border-white/20 hover:shadow-[0_8px_28px_-18px_rgba(0,0,0,0.55)]",
        isFeaturedLayout &&
          "border-primary/30 shadow-[0_0_28px_-16px_rgba(255,184,0,0.26)] sm:flex-row-reverse",
        wide && "sm:flex-row",
      )}
    >
      <GuideCardMedia guide={guide} featured={isFeaturedLayout} wide={wide} />

      <div className="flex flex-1 flex-col p-3.5 sm:p-4">
        <div className="mb-2 flex flex-wrap items-center gap-1.5">
          {isFeaturedLayout ? (
            <>
              <span className="inline-flex rounded-full border border-primary/35 bg-primary/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-primary">
                Introducción rápida
              </span>
              <span className="inline-flex rounded-full border border-white/12 bg-white/5 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
                Punto de partida
              </span>
            </>
          ) : (
            <span
              className={cn(
                "inline-flex w-fit rounded-full border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide",
                guide.categoryAccent,
              )}
            >
              {guide.categoryLabel}
            </span>
          )}
        </div>

        <h3
          className={cn(
            "font-bold tracking-tight text-foreground",
            isFeaturedLayout ? "text-lg sm:text-xl" : "text-base sm:text-[1.05rem]",
          )}
        >
          <Link href={guide.href} className={cn("hover:underline", focusRing)}>
            {guide.article.title}
          </Link>
        </h3>

        <p
          className={cn(
            "mt-1.5 text-sm leading-relaxed text-muted-foreground",
            isFeaturedLayout ? "line-clamp-3" : "line-clamp-2",
          )}
        >
          {guide.article.summary}
        </p>

        <p className="mt-2.5 text-[0.75rem] leading-snug text-muted-foreground">
          Por{" "}
          <Link
            href={authorHref}
            className={cn(
              "font-medium text-foreground underline-offset-2 hover:underline",
              focusRing,
            )}
          >
            {guide.author.name}
          </Link>
          {" · "}
          {dateLabel}{" "}
          <time dateTime={guide.displayDateIso}>
            {formatGuideDate(guide.displayDateIso)}
          </time>
          {" · "}
          {guide.readingMinutes} min de lectura
        </p>

        <div className="mt-auto pt-3">
          <Link
            href={guide.href}
            className={cn(
              "inline-flex min-h-11 items-center rounded-md border border-white/12 bg-[#0A1931]/50 px-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/45 hover:text-primary",
              focusRing,
            )}
          >
            {ctaLabel} →
          </Link>
        </div>
      </div>
    </article>
  );
}
