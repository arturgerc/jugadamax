import { EN_ABOUT_BOUNDARIES } from "@/components/verticals/about/en/en-about-config";

export function EnAboutBoundaries() {
  return (
    <section
      aria-labelledby="en-about-boundaries-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="en-about-boundaries-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          What JugadaMax does not do
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Clear limits of this editorial project. No outcome promises and no universal availability
          claims.
        </p>
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {EN_ABOUT_BOUNDARIES.map((item) => (
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
