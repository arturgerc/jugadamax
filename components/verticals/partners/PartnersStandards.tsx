import {
  PARTNERS_COPY,
  type PartnersLocale,
} from "@/components/verticals/partners/partners-config";

export function PartnersStandards({ locale }: { locale: PartnersLocale }) {
  const copy = PARTNERS_COPY[locale];

  return (
    <section
      id="estandares"
      aria-labelledby="partners-standards-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="partners-standards-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          {copy.standardsTitle}
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          {copy.standardsBody}
        </p>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-2">
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4 sm:p-5">
          <h3 className="text-sm font-bold text-emerald-200 sm:text-base">
            {copy.editorialHeading}
          </h3>
          <ul className="mt-3 space-y-2">
            {copy.editorialStandards.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
              >
                <span aria-hidden="true" className="text-emerald-400">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-accent/25 bg-accent/5 p-4 sm:p-5">
          <h3 className="text-sm font-bold text-accent sm:text-base">
            {copy.trafficHeading}
          </h3>
          <ul className="mt-3 space-y-2">
            {copy.trafficStandards.map((item) => (
              <li
                key={item}
                className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
              >
                <span aria-hidden="true" className="text-accent">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
