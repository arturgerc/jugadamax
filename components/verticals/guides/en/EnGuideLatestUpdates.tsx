import Link from "next/link";
import {
  formatEnGuideDate,
  resolveEnLatestGuideUpdates,
} from "@/components/verticals/guides/en/en-guide-hub-data";
import { cn, focusRing } from "@/lib/utils";

/**
 * Latest real English guide updates — dates from editorial records only.
 */
export function EnGuideLatestUpdates() {
  const latest = resolveEnLatestGuideUpdates(4);

  if (latest.length === 0) return null;

  return (
    <section
      id="latest-updates"
      aria-labelledby="latest-updates-heading"
      className="scroll-mt-24 rounded-2xl border border-cyan-500/12 bg-gradient-to-b from-[#101820]/70 to-transparent p-4 sm:p-5"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="latest-updates-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Latest updates
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Real publication or update dates from the English guide register. Rankings and reviews are
          listed in the library sections above — not invented as guide articles here.
        </p>
      </div>
      <ul className="mt-4 space-y-2">
        {latest.map((card) => (
          <li key={card.resource.id}>
            <Link
              href={card.href}
              className={cn(
                "group flex flex-col gap-2 rounded-xl border border-white/10 bg-[#111417]/65 px-3.5 py-3.5 transition-[border-color,background-color] hover:border-cyan-400/30 hover:bg-[#131b26]/90 sm:flex-row sm:items-center sm:justify-between sm:gap-4",
                focusRing,
              )}
            >
              <span className="min-w-0 space-y-1.5">
                <span
                  className={cn(
                    "inline-flex rounded-full border px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide",
                    card.categoryAccent,
                  )}
                >
                  {card.kindLabel}
                </span>
                <span className="block font-semibold text-foreground">{card.title}</span>
                {card.author ? (
                  <span className="block text-xs text-muted-foreground">
                    {card.author.name}
                  </span>
                ) : null}
              </span>
              {card.displayDateIso ? (
                <span className="flex shrink-0 items-center gap-2 text-xs text-muted-foreground">
                  <span>
                    {card.displayDateKind === "updated" ? "Updated " : "Published "}
                    <time dateTime={card.displayDateIso}>
                      {formatEnGuideDate(card.displayDateIso)}
                    </time>
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-primary transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
