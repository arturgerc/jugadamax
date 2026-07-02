import Link from "next/link";

const evaluationCriteria = [
  {
    title: "Seguridad y reputación",
    body: "Analizamos la información disponible del operador y priorizamos claridad, mercados disponibles, métodos de pago, condiciones de bonos y señales de juego responsable.",
  },
  {
    title: "Mercados deportivos",
    body: "Revisamos qué deportes y competiciones informa cada operador, sin asumir que todos los mercados están disponibles en México.",
  },
  {
    title: "Bonos y condiciones",
    body: "Mostramos promociones informadas por el operador. No inventamos montos ni urgencias; recomendamos verificar requisitos y vigencia en el sitio oficial.",
  },
  {
    title: "Experiencia móvil",
    body: "Consideramos facilidad de uso en móvil, navegación de mercados, claridad de cuotas y la información publicada por el operador.",
  },
] as const;

const popularMarkets = [
  "Fútbol",
  "Liga MX",
  "Champions League",
  "UFC / deportes populares",
] as const;

const faqItems = [
  {
    question: "¿Qué es una casa de apuestas?",
    answer:
      "Una casa de apuestas permite apostar en eventos deportivos u otros mercados disponibles, según las reglas y condiciones de cada operador.",
  },
  {
    question: "¿Qué deportes suelen ser populares en México?",
    answer:
      "El fútbol suele ser uno de los deportes más populares, incluyendo Liga MX y competiciones internacionales. La disponibilidad de mercados depende de cada operador.",
  },
  {
    question: "¿Cómo revisamos los bonos de apuestas?",
    answer:
      "Mostramos promociones informadas por el operador y recomendamos revisar siempre requisitos, cuotas mínimas, rollover, límites y vigencia en el sitio oficial.",
  },
  {
    question: "¿Las cuotas cambian?",
    answer:
      "Sí. Las cuotas y mercados pueden cambiar antes o durante un evento según las reglas de cada operador.",
  },
  {
    question: "¿Es necesario verificar identidad?",
    answer:
      "Muchos operadores pueden solicitar verificación de identidad o documentos según sus políticas internas, métodos de pago y requisitos de cumplimiento.",
  },
  {
    question: "¿Cómo apostar de forma responsable?",
    answer:
      "Apuesta solo si eres mayor de 18 años, establece límites y evita apostar dinero que no puedas permitirte perder. Si el juego deja de ser entretenimiento, busca ayuda.",
  },
] as const;

/**
 * Editorial info sections for the sports betting vertical page.
 * Static copy only — no affiliate CTAs, no FAQ schema.
 */
export function BettingInfoSections({
  paymentMethods = [],
}: {
  paymentMethods?: string[];
}) {
  const selectionMethods = paymentMethods.length > 0 ? paymentMethods : null;

  return (
    <div className="space-y-12 sm:space-y-14">
      {/* Cómo evaluamos */}
      <section aria-labelledby="evaluacion-apuestas-heading">
        <h2
          id="evaluacion-apuestas-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Cómo evaluamos las casas de apuestas
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          Analizamos la información disponible del operador y priorizamos claridad, mercados
          disponibles, métodos de pago, condiciones de bonos y señales de juego responsable.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {evaluationCriteria.map((item) => (
            <li
              key={item.title}
              className="rounded-2xl border border-white/10 bg-card p-4 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.45)] sm:p-5"
            >
              <h3 className="text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Mercados deportivos populares */}
      <section aria-labelledby="mercados-heading">
        <h2
          id="mercados-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Mercados deportivos populares
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Los mercados disponibles dependen de cada operador. Antes de apostar, revisa cuotas,
          reglas de mercado, límites y términos vigentes.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          En México, el fútbol — incluida la Liga MX y competiciones internacionales — suele ser uno
          de los deportes más consultados. Otros mercados como UFC u otros deportes populares pueden
          estar disponibles según el operador.
        </p>
        <ul
          className="mt-5 flex flex-wrap gap-2"
          aria-label="Mercados deportivos de referencia editorial"
        >
          {popularMarkets.map((name) => (
            <li
              key={name}
              className="inline-flex items-center rounded-lg border border-white/10 bg-[#16233f]/60 px-3 py-1.5 text-sm font-medium text-muted-foreground"
            >
              {name}
            </li>
          ))}
        </ul>
      </section>

      {/* Métodos de pago y retiros */}
      <section aria-labelledby="pagos-apuestas-heading">
        <h2
          id="pagos-apuestas-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Métodos de pago y retiros
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Las casas de apuestas pueden ofrecer tarjetas, transferencias, SPEI, OXXO u otros métodos
          locales. La disponibilidad, tiempos y límites dependen de cada operador.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Antes de depositar o retirar, revisa comisiones, tiempos de procesamiento, límites mínimos
          y requisitos de verificación en el sitio oficial del operador.
        </p>
        {selectionMethods ? (
          <div className="mt-5">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              En nuestra selección actual
            </p>
            <ul
              className="mt-2 flex flex-wrap gap-2"
              aria-label="Métodos de pago informados por operadores en el ranking"
            >
              {selectionMethods.map((name) => (
                <li
                  key={name}
                  className="inline-flex items-center rounded-lg border border-primary/20 bg-primary/8 px-3 py-1.5 text-sm font-medium text-foreground"
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>

      {/* Juego responsable */}
      <section
        aria-labelledby="responsable-apuestas-heading"
        className="rounded-2xl border border-accent/25 bg-accent/5 p-5 sm:p-6"
      >
        <h2
          id="responsable-apuestas-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Juego responsable en apuestas deportivas
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Las apuestas deportivas implican riesgo. JugadaMax no opera casas de apuestas ni procesa
          apuestas. Publicamos información editorial y enlaces de afiliado. Apuesta solo si eres
          mayor de 18 años y establece límites.
        </p>
        <nav aria-label="Enlaces de confianza" className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
          <Link
            href="/como-evaluamos"
            className="text-sm font-medium text-primary underline underline-offset-2 hover:text-[var(--jm-gold-strong)]"
          >
            Cómo evaluamos
          </Link>
          <Link
            href="/divulgacion-afiliados"
            className="text-sm font-medium text-primary underline underline-offset-2 hover:text-[var(--jm-gold-strong)]"
          >
            Divulgación de afiliados
          </Link>
          <Link
            href="/juego-responsable"
            className="text-sm font-medium text-primary underline underline-offset-2 hover:text-[var(--jm-gold-strong)]"
          >
            Juego responsable
          </Link>
        </nav>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-apuestas-heading">
        <h2
          id="faq-apuestas-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
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

      {/* Final internal CTA */}
      <section
        aria-label="Más información"
        className="rounded-2xl border border-white/10 bg-card p-5 sm:p-6"
      >
        <h2 className="text-lg font-semibold text-foreground">Sigue leyendo</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/como-evaluamos"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
          >
            Ver metodología completa
          </Link>
          <Link
            href="/casinos-fiat"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
          >
            Comparar casinos fiat
          </Link>
          <Link
            href="/casinos-crypto"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
          >
            Comparar casinos crypto
          </Link>
        </div>
      </section>
    </div>
  );
}
