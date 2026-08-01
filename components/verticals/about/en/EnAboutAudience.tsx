import { EN_ABOUT_AUDIENCE_CARDS } from "@/components/verticals/about/en/en-about-config";

export function EnAboutAudience() {
  return (
    <section
      aria-labelledby="en-about-audience-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="en-about-audience-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Who we serve
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          English and Mexico-facing coverage with different scope. No operator is available in
          every country.
        </p>
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-3 lg:grid-cols-2">
        {EN_ABOUT_AUDIENCE_CARDS.map((card) => (
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
