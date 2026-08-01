import { ABOUT_AUDIENCE_CARDS } from "@/components/verticals/about/about-config";

export function AboutAudience() {
  return (
    <section
      aria-labelledby="about-audience-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="about-audience-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          A quién va dirigido
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Cobertura en español e inglés con alcance distinto. Ningún operador está disponible en
          todos los países.
        </p>
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-2">
        {ABOUT_AUDIENCE_CARDS.map((card) => (
          <li key={card.title}>
            <article className="h-full rounded-xl border border-cyan-500/15 bg-gradient-to-b from-[#101820]/70 to-[#111417]/55 p-4 sm:p-5">
              <h3 className="text-base font-bold text-foreground sm:text-lg">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
