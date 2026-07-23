import {
  PARTNERS_COPY,
  type PartnersLocale,
} from "@/components/verticals/partners/partners-config";
import type { PartnersSnapshot } from "@/components/verticals/partners/partners-data";

export function PartnersSnapshot({
  locale,
  snapshot,
}: {
  locale: PartnersLocale;
  snapshot: PartnersSnapshot;
}) {
  const copy = PARTNERS_COPY[locale];
  const cards = [
    { value: snapshot.reviews, label: copy.snapshotReviews },
    { value: snapshot.guides, label: copy.snapshotGuides },
    { value: snapshot.news, label: copy.snapshotNews },
    { value: snapshot.locales, label: copy.snapshotLocales },
  ] as const;

  return (
    <section
      aria-labelledby="partners-snapshot-heading"
      className="mb-8 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="partners-snapshot-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          {copy.snapshotTitle}
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          {copy.snapshotBody}
        </p>
      </div>
      <ul className="mt-4 grid grid-cols-2 gap-3 lg:grid-cols-4">
        {cards.map((card) => (
          <li
            key={card.label}
            className="rounded-xl border border-white/10 bg-[#111417]/70 p-4"
          >
            <p className="text-2xl font-bold tabular-nums text-primary sm:text-3xl">
              {card.value}
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted-foreground sm:text-sm sm:normal-case sm:tracking-normal">
              {card.label}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-3 max-w-3xl text-xs text-muted-foreground sm:text-sm">
        {copy.snapshotNote}
      </p>
    </section>
  );
}
