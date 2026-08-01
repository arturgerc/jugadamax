import { METHOD_CRITERIA } from "@/components/verticals/methodology/methodology-config";

export function MethodologyCriteria() {
  return (
    <section
      id="criterios"
      aria-labelledby="method-criteria-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="method-criteria-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Qué revisamos
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Seis áreas editoriales. No inventamos resultados de pruebas, tiempos de retiro, licencias
          ni garantías.
        </p>
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {METHOD_CRITERIA.map((item, index) => (
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
