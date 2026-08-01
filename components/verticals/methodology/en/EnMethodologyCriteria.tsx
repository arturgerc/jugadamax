import { EN_METHOD_CRITERIA } from "@/components/verticals/methodology/en/en-methodology-config";

export function EnMethodologyCriteria() {
  return (
    <section
      id="criteria"
      aria-labelledby="en-method-criteria-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="en-method-criteria-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          What we review
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Six editorial areas. We do not invent test results, withdrawal times, licences or
          guarantees.
        </p>
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {EN_METHOD_CRITERIA.map((item, index) => (
          <li key={item.title}>
            <article className="flex h-full flex-col rounded-xl border border-white/10 bg-[#111417]/60 p-4">
              <span
                aria-hidden="true"
                className="inline-flex size-7 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-[0.7rem] font-bold text-primary"
              >
                {index + 1}
              </span>
              <h3 className="mt-3 text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
