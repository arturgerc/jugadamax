import type { Author, Casino, Review, Vertical } from "@/types/content";
import { cn } from "@/lib/utils";
import { AuthorByline } from "@/components/review/AuthorByline";
import { OperatorLogo } from "@/components/brand/OperatorLogo";
import type { UiLocale } from "@/lib/i18n/ui-labels";

type ReviewHeaderAccent = {
  shell: string;
  glow: string;
  badge: string;
  chip: string;
  scorePanel: string;
  scoreValue: string;
  decorA: string;
  decorB: string;
};

const DEFAULT_ACCENT: ReviewHeaderAccent = {
  shell:
    "border-primary/25 bg-gradient-to-br from-[#0A1931] via-[#111417] to-[#0d1424] ring-1 ring-primary/10 shadow-[0_4px_28px_-12px_rgba(0,0,0,0.55)]",
  glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(0,168,107,0.06),transparent_50%)]",
  badge: "border-primary/30 bg-primary/10 text-primary",
  chip: "border-white/12 bg-white/5 text-muted-foreground",
  scorePanel: "border-primary/25 bg-[#0A1931]/80 shadow-[inset_0_1px_0_rgba(255,184,0,0.08)]",
  scoreValue: "text-primary",
  decorA: "border-primary/20 bg-primary/10",
  decorB: "bg-primary/40",
};

const REVIEW_HEADER_ACCENTS: Record<string, ReviewHeaderAccent> = {
  betsson: {
    shell:
      "border-orange-500/25 bg-gradient-to-br from-[#0A1931] via-[#111a2e] to-[#0d1424] ring-1 ring-orange-500/10 shadow-[0_4px_28px_-12px_rgba(255,107,0,0.18)]",
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(255,107,0,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(147,51,234,0.08),transparent_50%)]",
    badge: "border-orange-500/30 bg-orange-500/10 text-orange-200",
    chip: "border-orange-500/20 bg-orange-500/8 text-orange-100/90",
    scorePanel: "border-orange-500/25 bg-[#0A1931]/85 shadow-[inset_0_1px_0_rgba(255,184,0,0.1)]",
    scoreValue: "text-orange-300",
    decorA: "border-orange-400/20 bg-orange-500/10",
    decorB: "bg-orange-400/50",
  },
  betfury: {
    shell:
      "border-fuchsia-500/25 bg-gradient-to-br from-[#0A0A12] via-[#111127] to-[#0A1931] ring-1 ring-fuchsia-500/10 shadow-[0_4px_28px_-12px_rgba(236,72,153,0.2)]",
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.16),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.1),transparent_50%)]",
    badge: "border-fuchsia-500/30 bg-fuchsia-500/10 text-fuchsia-200",
    chip: "border-fuchsia-500/20 bg-fuchsia-500/8 text-fuchsia-100/90",
    scorePanel: "border-fuchsia-500/25 bg-[#0A0A12]/85 shadow-[inset_0_1px_0_rgba(236,72,153,0.1)]",
    scoreValue: "text-fuchsia-300",
    decorA: "border-fuchsia-400/20 bg-fuchsia-500/10",
    decorB: "bg-fuchsia-400/50",
  },
  "500-casino": {
    shell:
      "border-pink-500/25 bg-gradient-to-br from-[#120818] via-[#16121f] to-[#0A1931] ring-1 ring-pink-500/10 shadow-[0_4px_28px_-12px_rgba(236,72,153,0.18)]",
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(127,29,29,0.08),transparent_50%)]",
    badge: "border-pink-500/30 bg-pink-500/10 text-pink-200",
    chip: "border-pink-500/20 bg-pink-500/8 text-pink-100/90",
    scorePanel: "border-pink-500/25 bg-[#120818]/85 shadow-[inset_0_1px_0_rgba(236,72,153,0.08)]",
    scoreValue: "text-pink-300",
    decorA: "border-pink-400/20 bg-pink-500/10",
    decorB: "bg-pink-400/50",
  },
  rainbet: {
    shell:
      "border-emerald-500/20 bg-gradient-to-br from-[#020617] via-[#071422] to-[#041018] ring-1 ring-cyan-400/10 shadow-[0_4px_28px_-12px_rgba(34,211,238,0.16)]",
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(52,211,153,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.1),transparent_50%)]",
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-200",
    chip: "border-cyan-500/20 bg-emerald-500/8 text-cyan-100/90",
    scorePanel: "border-emerald-500/25 bg-[#020617]/85 shadow-[inset_0_1px_0_rgba(52,211,153,0.1)]",
    scoreValue: "text-emerald-300",
    decorA: "border-cyan-400/20 bg-emerald-500/10",
    decorB: "bg-cyan-400/50",
  },
  "1xbet": {
    shell:
      "border-sky-500/25 bg-gradient-to-br from-[#050d1f] via-[#0A1931] to-[#061018] ring-1 ring-cyan-400/10 shadow-[0_4px_28px_-12px_rgba(56,189,248,0.18)]",
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.16),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(37,99,235,0.1),transparent_50%)]",
    badge: "border-sky-400/30 bg-sky-500/10 text-sky-200",
    chip: "border-sky-400/20 bg-sky-500/8 text-sky-100/90",
    scorePanel: "border-sky-500/25 bg-[#050d1f]/85 shadow-[inset_0_1px_0_rgba(56,189,248,0.08)]",
    scoreValue: "text-sky-300",
    decorA: "border-cyan-400/20 bg-sky-500/10",
    decorB: "bg-sky-400/50",
  },
  melbet: {
    shell:
      "border-[#FFB800]/25 bg-gradient-to-br from-[#0c0c0e] via-[#141414] to-[#0a0a0c] ring-1 ring-[#FFB800]/10 shadow-[0_4px_28px_-12px_rgba(255,184,0,0.16)]",
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(255,255,255,0.04),transparent_50%)]",
    badge: "border-[#FFB800]/35 bg-[#FFB800]/10 text-[#FFC300]",
    chip: "border-[#FFB800]/25 bg-[#FFB800]/8 text-[#FFE066]/90",
    scorePanel: "border-[#FFB800]/25 bg-[#0c0c0e]/85 shadow-[inset_0_1px_0_rgba(255,184,0,0.1)]",
    scoreValue: "text-[#FFC300]",
    decorA: "border-[#FFB800]/25 bg-[#FFB800]/10",
    decorB: "bg-[#FFB800]/55",
  },
  stake: {
    shell:
      "border-emerald-500/25 bg-gradient-to-br from-[#061018] via-[#0A1931] to-[#041018] ring-1 ring-emerald-500/10 shadow-[0_4px_28px_-12px_rgba(0,168,107,0.16)]",
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(0,168,107,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(52,211,153,0.08),transparent_50%)]",
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-200",
    chip: "border-emerald-500/20 bg-emerald-500/8 text-emerald-100/90",
    scorePanel: "border-emerald-500/25 bg-[#061018]/85 shadow-[inset_0_1px_0_rgba(0,168,107,0.08)]",
    scoreValue: "text-emerald-300",
    decorA: "border-emerald-400/20 bg-emerald-500/10",
    decorB: "bg-emerald-400/50",
  },
  roobet: {
    shell:
      "border-orange-500/25 bg-gradient-to-br from-[#140a0a] via-[#111417] to-[#0A1931] ring-1 ring-red-500/10 shadow-[0_4px_28px_-12px_rgba(239,68,68,0.16)]",
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(249,115,22,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(239,68,68,0.08),transparent_50%)]",
    badge: "border-orange-500/30 bg-orange-500/10 text-orange-200",
    chip: "border-orange-500/20 bg-red-500/8 text-orange-100/90",
    scorePanel: "border-orange-500/25 bg-[#140a0a]/85 shadow-[inset_0_1px_0_rgba(249,115,22,0.08)]",
    scoreValue: "text-orange-300",
    decorA: "border-red-400/20 bg-orange-500/10",
    decorB: "bg-orange-400/50",
  },
  gamdom: {
    shell:
      "border-cyan-500/20 bg-gradient-to-br from-[#0a0f18] via-[#111417] to-[#120818] ring-1 ring-violet-500/10 shadow-[0_4px_28px_-12px_rgba(139,92,246,0.14)]",
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(34,211,238,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.1),transparent_50%)]",
    badge: "border-cyan-500/25 bg-cyan-500/10 text-cyan-200",
    chip: "border-violet-500/20 bg-cyan-500/8 text-violet-100/90",
    scorePanel: "border-cyan-500/25 bg-[#0a0f18]/85 shadow-[inset_0_1px_0_rgba(34,211,238,0.08)]",
    scoreValue: "text-cyan-300",
    decorA: "border-violet-400/20 bg-cyan-500/10",
    decorB: "bg-cyan-400/45",
  },
  codere: {
    shell:
      "border-emerald-500/20 bg-gradient-to-br from-[#0A1931] via-[#111417] to-[#140a0a] ring-1 ring-red-500/10 shadow-[0_4px_28px_-12px_rgba(0,168,107,0.12)]",
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(0,168,107,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(220,38,38,0.08),transparent_50%)]",
    badge: "border-emerald-500/30 bg-emerald-500/10 text-emerald-200",
    chip: "border-red-500/20 bg-emerald-500/8 text-emerald-100/90",
    scorePanel: "border-emerald-500/25 bg-[#0A1931]/85 shadow-[inset_0_1px_0_rgba(0,168,107,0.08)]",
    scoreValue: "text-emerald-300",
    decorA: "border-red-400/15 bg-emerald-500/10",
    decorB: "bg-red-400/40",
  },
  caliente: {
    shell:
      "border-red-500/25 bg-gradient-to-br from-[#140808] via-[#111417] to-[#0A1931] ring-1 ring-amber-500/10 shadow-[0_4px_28px_-12px_rgba(220,38,38,0.14)]",
    glow: "bg-[radial-gradient(ellipse_at_top_right,rgba(220,38,38,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(255,184,0,0.08),transparent_50%)]",
    badge: "border-red-500/30 bg-red-500/10 text-red-200",
    chip: "border-amber-500/20 bg-red-500/8 text-amber-100/90",
    scorePanel: "border-red-500/25 bg-[#140808]/85 shadow-[inset_0_1px_0_rgba(220,38,38,0.08)]",
    scoreValue: "text-red-300",
    decorA: "border-amber-400/20 bg-red-500/10",
    decorB: "bg-amber-400/45",
  },
};

const VERTICAL_CHIP_LABELS: Record<Vertical, { es: string; en: string }> = {
  "crypto-casino": { es: "Casino crypto", en: "Crypto casino" },
  "fiat-casino": { es: "Casino fiat", en: "Fiat casino" },
  sportsbook: { es: "Sportsbook", en: "Sportsbook" },
};

function resolveAccent(operatorId: string): ReviewHeaderAccent {
  return REVIEW_HEADER_ACCENTS[operatorId] ?? DEFAULT_ACCENT;
}

function verticalChips(verticals: Vertical[], locale: UiLocale): string[] {
  return verticals.slice(0, 3).map((v) => VERTICAL_CHIP_LABELS[v][locale === "en" ? "en" : "es"]);
}

/** Returns up to N complete sentences; falls back to the source text when unpunctuated. */
function extractCompleteSentences(text: string, maxSentences: number): string {
  const source = text.trim();
  if (!source) return source;

  const parts = source.match(/[^.!?]+[.!?]+(?:\s+|$)|[^.!?]+$/g);
  if (!parts?.length) return source;

  const sentences = parts.map((part) => part.trim()).filter(Boolean);
  if (!sentences.length) return source;

  return sentences.slice(0, maxSentences).join(" ");
}

function EditorialStarRow({ rating, className }: { rating: number; className?: string }) {
  const value = Math.max(0, Math.min(5, rating));

  return (
    <span
      aria-hidden="true"
      className={cn("inline-flex items-center gap-0.5 text-primary", className)}
    >
      {Array.from({ length: 5 }, (_, index) => {
        const fill = value - index;
        const opacity = fill >= 1 ? "opacity-100" : fill >= 0.25 ? "opacity-55" : "opacity-25";

        return (
          <span key={index} className={cn("text-sm leading-none sm:text-base", opacity)}>
            ★
          </span>
        );
      })}
    </span>
  );
}

/**
 * Premium editorial review hero (FR-005/FR-016).
 *
 * Branded shell with operator identity, category chips, strong title hierarchy,
 * short summary and an editorial-only score panel — never aggregate user ratings.
 */
export function ReviewHeader({
  review,
  casino,
  author,
  className,
  locale = "es",
}: {
  review: Review;
  casino: Casino;
  author: Author;
  className?: string;
  locale?: UiLocale;
}) {
  const accent = resolveAccent(casino.id);
  const chips = verticalChips(casino.verticals, locale);
  const summarySource = casino.summary ?? review.verdict;
  const mobileSummary = extractCompleteSentences(summarySource, 1);
  const desktopSummary = extractCompleteSentences(summarySource, 2);
  const editorialBadge = locale === "en" ? "EDITORIAL REVIEW" : "RESEÑA EDITORIAL";
  const ratingLabel =
    locale === "en" ? "JugadaMax editorial rating" : "Calificación editorial de JugadaMax";
  const ratingClarification =
    locale === "en"
      ? "Not an aggregated user score"
      : "No es una puntuación agregada de usuarios";

  return (
    <header
      className={cn(
        "relative overflow-hidden rounded-2xl border p-4 sm:p-7 lg:p-8",
        accent.shell,
        className,
      )}
    >
      <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0", accent.glow)} />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -right-3 top-0 h-24 w-16 skew-x-[-12deg] border-l opacity-60 sm:h-28 sm:w-20",
          accent.decorA,
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute bottom-4 left-4 h-8 w-8 rounded-full border opacity-50 sm:bottom-6 sm:left-6 sm:h-10 sm:w-10",
          accent.decorA,
        )}
      />
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute bottom-8 right-10 h-2 w-2 rounded-full opacity-70 sm:bottom-10 sm:right-14",
          accent.decorB,
        )}
      />

      <div className="relative grid gap-4 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_220px] lg:items-center lg:gap-8">
        <div className="min-w-0 space-y-3 sm:space-y-4">
          <div className="flex flex-wrap items-start gap-2.5 sm:gap-4">
            <OperatorLogo
              name={casino.name}
              logo={casino.logo}
              operatorId={casino.id}
              className="h-11 w-[5.25rem] sm:h-14 sm:w-24 lg:h-16 lg:w-[7.5rem]"
            />
            <div className="min-w-0 flex-1 space-y-1.5 sm:space-y-2">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span
                  className={cn(
                    "inline-flex items-center rounded-full border px-1.5 py-0.5 text-[0.55rem] font-semibold uppercase tracking-wide sm:px-2 sm:text-[0.65rem]",
                    accent.badge,
                  )}
                >
                  {editorialBadge}
                </span>
                <span className="text-xs font-semibold text-foreground sm:text-base">
                  {casino.name}
                </span>
              </div>
              {chips.length > 0 ? (
                <ul className="flex flex-wrap gap-1 sm:gap-1.5" aria-label={locale === "en" ? "Categories" : "Categorías"}>
                  {chips.map((chip) => (
                    <li
                      key={chip}
                      className={cn(
                        "inline-flex items-center rounded-md border px-1.5 py-0.5 text-[0.6rem] font-medium sm:px-2 sm:text-xs",
                        accent.chip,
                      )}
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>

          <div className="space-y-2 sm:space-y-3">
            <h1 className="max-w-3xl text-[2rem] font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] xl:text-5xl">
              {review.title}
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:hidden">
              {mobileSummary}
            </p>
            <p className="hidden max-w-2xl text-sm leading-relaxed text-muted-foreground sm:block sm:text-base">
              {desktopSummary}
            </p>
          </div>

          <AuthorByline
            author={author}
            publishedAt={review.publishedAt}
            updatedAt={review.updatedAt}
            locale={locale}
            className="pt-1"
          />
          {locale === "en" ? (
            <p className="text-xs leading-relaxed text-muted-foreground">
              Reviewed by{" "}
              <span className="font-medium text-foreground">JugadaMax Editorial</span>.
            </p>
          ) : null}
        </div>

        <aside
          aria-label={locale === "en" ? "Editorial score" : "Puntuación editorial"}
          className={cn(
            "flex max-h-[7.5rem] shrink-0 flex-row items-center gap-3 rounded-xl border p-3 sm:max-h-none sm:gap-4 sm:p-4",
            "lg:flex-col lg:items-center lg:gap-2 lg:p-5 lg:text-center",
            accent.scorePanel,
          )}
        >
          <div className="flex shrink-0 items-baseline gap-1 lg:justify-center">
            <span
              className={cn(
                "text-3xl font-extrabold tabular-nums sm:text-5xl",
                accent.scoreValue,
              )}
            >
              {review.rating.toFixed(1)}
            </span>
            <span className="text-xs font-medium text-muted-foreground sm:text-sm">/ 5</span>
          </div>
          <div className="min-w-0 flex-1 space-y-0.5 sm:space-y-1 lg:flex-none">
            <EditorialStarRow rating={review.rating} className="lg:mx-auto" />
            <p className="text-[0.65rem] font-semibold leading-snug text-foreground sm:text-sm">
              {ratingLabel}
            </p>
            <p className="text-[0.6rem] leading-snug text-muted-foreground sm:text-xs">
              {ratingClarification}
            </p>
          </div>
        </aside>
      </div>
    </header>
  );
}
