const highlights = [
  {
    title: "Límites altos en juegos crypto",
    body: "Stake publica límites elevados para juegos propios con criptomonedas. Los límites concretos dependen de la moneda y del juego, por lo que siempre deben revisarse antes de apostar cantidades altas.",
  },
  {
    title: "VIP para jugadores de alto volumen",
    body: "El programa VIP de Stake se basa en el volumen de juego y puede incluir recompensas, reloads, rakeback y acceso a VIP host en niveles avanzados. Es una ventaja importante para jugadores con actividad frecuente.",
  },
  {
    title: "Retiros crypto y velocidad",
    body: "Los retiros crypto pueden ser rápidos en condiciones normales, pero dependen de la red, la moneda, las verificaciones internas y las reglas del operador. JugadaMax no garantiza tiempos de retiro.",
  },
  {
    title: "Marca global con presencia deportiva",
    body: "Stake mantiene una presencia fuerte en deporte, esports y entretenimiento. Esto refuerza su perfil como marca global, aunque no sustituye la revisión de términos, licencias y disponibilidad local.",
  },
] as const;

const faqItems = [
  {
    question: "¿Stake es buena opción para high rollers?",
    answer:
      "Sí, desde la evaluación editorial de JugadaMax, Stake es una de las opciones más fuertes para jugadores crypto de alto volumen por su enfoque crypto-first, programa VIP, sportsbook y límites elevados en juegos propios. Sin embargo, no todos los límites aplican a todos los juegos o mercados, y los retiros pueden depender de verificaciones internas, red blockchain, moneda y reglas del operador.",
  },
  {
    question: "¿Stake permite retiros grandes?",
    answer:
      "Stake publica información sobre pagos crypto y límites, pero cualquier retiro puede estar sujeto a requisitos de apuesta, verificaciones internas, límites técnicos, red blockchain y políticas del operador. Por eso recomendamos revisar siempre los términos vigentes antes de depositar o apostar cantidades altas.",
  },
  {
    question: "¿La puntuación 9.8 / 10 es una opinión de usuarios?",
    answer:
      "No. Es una evaluación editorial interna de JugadaMax para el perfil high roller. No representa reseñas de usuarios ni garantiza resultados, pagos o disponibilidad.",
  },
] as const;

/**
 * Editorial high-roller section for the Stake review only.
 *
 * Visible editorial score — never encoded as AggregateRating or review-star schema.
 * FAQ is presentational only; no FAQPage JSON-LD.
 */
export function StakeHighRollerSection() {
  return (
    <>
      <section aria-labelledby="stake-high-roller-heading" className="space-y-5">
        <h2
          id="stake-high-roller-heading"
          className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
        >
          Stake para high rollers: límites altos, VIP y retiros crypto
        </h2>

        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Stake destaca especialmente para jugadores crypto con mayor volumen de juego. Su
          combinación de casino, sportsbook, múltiples criptomonedas, programa VIP y límites
          elevados en juegos propios lo convierte en una de las opciones más fuertes de JugadaMax
          para perfiles high roller y apuestas de alto volumen en un casino crypto para high
          rollers. Aun así, los límites, tiempos de retiro y verificaciones pueden variar según
          moneda, juego, red, región y políticas internas del operador.
        </p>

        <div className="rounded-xl border border-primary/25 bg-primary/10 p-4 sm:p-5">
          <p className="text-lg font-bold tracking-tight text-primary sm:text-xl">
            High roller fit: 9.8 / 10
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-foreground">
            Evaluación editorial JugadaMax
          </p>
          <p className="mt-1 text-xs text-muted-foreground">No es calificación de usuarios.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-white/10 bg-[#111417] p-4"
            >
              <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="rounded-lg border border-accent/30 bg-accent/8 p-4 sm:p-5">
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-accent">Nota editorial:</span> Stake puede ser una
            opción atractiva para high rollers crypto, pero apostar cantidades altas implica más
            riesgo. Revisa límites, reglas del juego, requisitos de retiro, comisiones de red y
            políticas de verificación antes de jugar.
          </p>
        </div>
      </section>

      <section aria-labelledby="stake-faq-heading">
        <h2
          id="stake-faq-heading"
          className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
        >
          Preguntas frecuentes
        </h2>
        <div className="mt-5 divide-y divide-white/10 rounded-2xl border border-white/10 bg-card">
          {faqItems.map((item) => (
            <details key={item.question} className="group px-4 py-1 sm:px-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 text-sm font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  aria-hidden="true"
                  className="shrink-0 text-muted-foreground transition-transform group-open:rotate-180"
                >
                  ▾
                </span>
              </summary>
              <p className="pb-4 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
