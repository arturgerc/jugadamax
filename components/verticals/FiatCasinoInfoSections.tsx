import Link from "next/link";

const evaluationCriteria = [
  {
    title: "Seguridad y reputación",
    body: "Analizamos la información disponible del operador y priorizamos claridad, métodos de pago compatibles, condiciones de bonos y señales de juego responsable.",
  },
  {
    title: "Métodos de pago locales",
    body: "Revisamos qué opciones informa cada operador para México — tarjetas, SPEI, OXXO u otros — sin asumir que todos los métodos están disponibles.",
  },
  {
    title: "Bonos y condiciones",
    body: "Mostramos promociones informadas por el operador. No inventamos montos ni urgencias; recomendamos verificar los términos vigentes.",
  },
  {
    title: "Experiencia móvil",
    body: "Consideramos facilidad de uso en móvil, claridad de depósitos, soporte y la información publicada por el operador.",
  },
] as const;

const faqItems = [
  {
    question: "¿Qué es un casino fiat?",
    answer:
      "Un casino fiat permite usar métodos de pago tradicionales como tarjetas, transferencias, SPEI, OXXO u otras opciones locales, según las condiciones de cada operador.",
  },
  {
    question: "¿Qué métodos de pago suelen usar los jugadores en México?",
    answer:
      "Algunos operadores pueden ofrecer tarjetas, transferencias, SPEI, OXXO u otros métodos locales. La disponibilidad cambia según el casino y debe verificarse en el sitio oficial.",
  },
  {
    question: "¿Los bonos de casinos fiat son iguales que los bonos crypto?",
    answer:
      "No siempre. Los bonos pueden variar según método de pago, país, tipo de cuenta y términos del operador. Revisa siempre las condiciones vigentes antes de registrarte.",
  },
  {
    question: "¿Es necesario verificar identidad?",
    answer:
      "Muchos operadores pueden solicitar verificación de identidad o documentos según sus políticas internas, métodos de pago y requisitos de cumplimiento.",
  },
  {
    question: "¿Cómo elegimos casinos fiat para el ranking?",
    answer:
      "Revisamos información disponible sobre reputación, métodos de pago, bonos informados, claridad de condiciones, experiencia de usuario y señales de juego responsable.",
  },
  {
    question: "¿Cómo jugar de forma responsable?",
    answer:
      "Juega solo si eres mayor de 18 años, establece límites y evita apostar dinero que no puedas permitirte perder. Si el juego deja de ser entretenimiento, busca ayuda.",
  },
] as const;

const commonMexicoMethods = [
  "OXXO",
  "SPEI",
  "Tarjetas bancarias",
  "Transferencias / wallets locales",
] as const;

/**
 * Editorial info sections for the fiat casinos vertical page.
 * Static copy only — no affiliate CTAs, no FAQ schema.
 */
export function FiatCasinoInfoSections({
  paymentMethods = [],
}: {
  paymentMethods?: string[];
}) {
  const selectionMethods = paymentMethods.length > 0 ? paymentMethods : null;

  return (
    <div className="space-y-12 sm:space-y-14">
      {/* Cómo evaluamos */}
      <section aria-labelledby="evaluacion-fiat-heading">
        <h2
          id="evaluacion-fiat-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Cómo evaluamos los casinos fiat
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          Analizamos la información disponible del operador y priorizamos claridad, métodos de pago
          compatibles, condiciones de bonos y señales de juego responsable.
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

      {/* Métodos de pago comunes en México */}
      <section aria-labelledby="pagos-fiat-heading">
        <h2
          id="pagos-fiat-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Métodos de pago comunes en México
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Los métodos disponibles dependen de cada operador. Antes de registrarte, revisa comisiones,
          tiempos de procesamiento, límites y requisitos de verificación.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          En México, algunos jugadores usan opciones como depósitos en tiendas de conveniencia,
          transferencias SPEI, tarjetas bancarias o billeteras locales. No todos los operadores
          ofrecen todas estas opciones.
        </p>
        <ul
          className="mt-5 flex flex-wrap gap-2"
          aria-label="Métodos de pago frecuentes en México (referencia editorial)"
        >
          {commonMexicoMethods.map((name) => (
            <li
              key={name}
              className="inline-flex items-center rounded-lg border border-white/10 bg-[#16233f]/60 px-3 py-1.5 text-sm font-medium text-muted-foreground"
            >
              {name}
            </li>
          ))}
        </ul>
        {selectionMethods ? (
          <div className="mt-5">
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              En nuestra selección actual
            </p>
            <ul className="mt-2 flex flex-wrap gap-2" aria-label="Métodos informados por operadores en el ranking">
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

      {/* Seguridad y juego responsable */}
      <section
        aria-labelledby="seguridad-fiat-heading"
        className="rounded-2xl border border-accent/25 bg-accent/5 p-5 sm:p-6"
      >
        <h2
          id="seguridad-fiat-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Seguridad, licencias y juego responsable
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          JugadaMax no opera casinos ni procesa apuestas. Publicamos información editorial y enlaces
          de afiliado. La disponibilidad de métodos de pago, bonos y licencias debe verificarse
          siempre en el sitio oficial del operador.
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
      <section aria-labelledby="faq-fiat-heading">
        <h2
          id="faq-fiat-heading"
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
