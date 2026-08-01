import { ABOUT_BOUNDARIES } from "@/components/verticals/about/about-config";

export function AboutBoundaries() {
  return (
    <section
      aria-labelledby="about-boundaries-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="about-boundaries-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Lo que JugadaMax no hace
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Límites claros del proyecto editorial. Sin promesas de resultado ni disponibilidad
          universal.
        </p>
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {ABOUT_BOUNDARIES.map((item) => (
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
