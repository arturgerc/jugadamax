import Link from "next/link";
import {
  resolveLatestGuideUpdates,
  formatGuideDate,
} from "@/components/verticals/guides/guide-hub-data";
import { cn, focusRing } from "@/lib/utils";

/**
 * Latest real guide updates — dates from editorial records only.
 */
export function GuideLatestUpdates() {
  const latest = resolveLatestGuideUpdates(4);

  return (
    <section
      id="ultimas-actualizaciones"
      aria-labelledby="ultimas-actualizaciones-heading"
      className="scroll-mt-24 rounded-2xl border border-cyan-500/12 bg-gradient-to-b from-[#101820]/70 to-transparent p-4 sm:p-5"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="ultimas-actualizaciones-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Últimas actualizaciones
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Fechas reales de publicación o actualización tomadas del registro editorial.
        </p>
      </div>
      <ul className="mt-4 space-y-2">
        {latest.map((guide) => (
          <li key={guide.article.id}>
            <Link
              href={guide.href}
              className={cn(
                "group flex flex-col gap-2 rounded-xl border border-white/10 bg-[#111417]/65 px-3.5 py-3.5 transition-[border-color,background-color] hover:border-cyan-400/30 hover:bg-[#131b26]/90 sm:flex-row sm:items-center sm:justify-between sm:gap-4",
                focusRing,
              )}
            >
              <span className="min-w-0 space-y-1.5">
                <span
                  className={cn(
                    "inline-flex rounded-full border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide",
                    guide.categoryAccent,
                  )}
                >
                  {guide.categoryLabel}
                </span>
                <span className="block font-semibold text-foreground">
                  {guide.article.title}
                </span>
                <span className="block text-xs text-muted-foreground">
                  {guide.author.name}
                </span>
              </span>
              <span className="flex shrink-0 items-center gap-2 text-xs text-muted-foreground">
                <span>
                  {guide.displayDateKind === "updated"
                    ? "Actualizado el "
                    : "Publicado el "}
                  <time dateTime={guide.displayDateIso}>
                    {formatGuideDate(guide.displayDateIso)}
                  </time>
                </span>
                <span
                  aria-hidden="true"
                  className="text-primary transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
