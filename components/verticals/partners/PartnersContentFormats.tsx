import {
  PARTNERS_COPY,
  type PartnersLocale,
} from "@/components/verticals/partners/partners-config";

export function PartnersContentFormats({ locale }: { locale: PartnersLocale }) {
  const copy = PARTNERS_COPY[locale];

  return (
    <section
      aria-labelledby="partners-formats-heading"
      className="mb-8 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="partners-formats-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          {copy.formatsTitle}
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">{copy.formatsBody}</p>
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {copy.formats.map((item) => (
          <li
            key={item.title}
            className="rounded-xl border border-white/10 bg-gradient-to-b from-[#151a22] to-[#10151d] p-4"
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
