import {
  PARTNERS_COPY,
  type PartnersLocale,
} from "@/components/verticals/partners/partners-config";

export function PartnersRequirements({ locale }: { locale: PartnersLocale }) {
  const copy = PARTNERS_COPY[locale];

  return (
    <section
      aria-labelledby="partners-requirements-heading"
      className="mb-8 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="partners-requirements-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          {copy.requirementsTitle}
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          {copy.requirementsBody}
        </p>
      </div>
      <ol className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
        {copy.requirements.map((item, index) => (
          <li
            key={item}
            className="flex gap-2.5 rounded-xl border border-white/10 bg-[#111417]/60 p-3.5"
          >
            <span
              aria-hidden="true"
              className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-[0.7rem] font-bold text-primary"
            >
              {index + 1}
            </span>
            <span className="text-sm leading-relaxed text-muted-foreground">
              {item}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
