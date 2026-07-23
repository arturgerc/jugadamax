import {
  PARTNERS_COPY,
  type PartnersLocale,
} from "@/components/verticals/partners/partners-config";

export function PartnersCollaborationFormats({
  locale,
}: {
  locale: PartnersLocale;
}) {
  const copy = PARTNERS_COPY[locale];

  return (
    <section
      aria-labelledby="partners-collab-heading"
      className="mb-8 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="partners-collab-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          {copy.collabTitle}
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">{copy.collabBody}</p>
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {copy.collab.map((item) => (
          <li
            key={item.title}
            className="rounded-xl border border-primary/15 bg-gradient-to-b from-[#1a160f]/55 to-[#111417]/70 p-4"
          >
            <h3 className="text-sm font-bold text-foreground sm:text-base">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.body}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
