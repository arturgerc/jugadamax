import { METHOD_PRINCIPLES } from "@/components/verticals/methodology/methodology-config";

export function MethodologyPrinciples() {
  return (
    <section
      aria-labelledby="method-principles-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="method-principles-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Principios de nuestra evaluación
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Las calificaciones son opiniones editoriales. No garantizamos pagos, retiros, licencias ni
          disponibilidad.
        </p>
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {METHOD_PRINCIPLES.map((item) => (
          <li key={item.title}>
            <article className="h-full rounded-xl border border-cyan-500/15 bg-gradient-to-b from-[#101820]/70 to-[#111417]/55 p-4">
              <h3 className="text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
