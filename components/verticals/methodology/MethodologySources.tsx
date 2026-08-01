import { METHOD_SOURCES } from "@/components/verticals/methodology/methodology-config";

export function MethodologySources() {
  return (
    <section
      aria-labelledby="method-sources-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="method-sources-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Fuentes que utilizamos
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Un destino de afiliado no es automáticamente una fuente factual. El material de campaña de
          partners se etiqueta. Las calificaciones externas no son las de JugadaMax.
        </p>
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {METHOD_SOURCES.map((item) => (
          <li key={item.title}>
            <article className="h-full rounded-xl border border-white/10 bg-[#111417]/55 p-4">
              <h3 className="text-sm font-semibold text-foreground sm:text-base">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
