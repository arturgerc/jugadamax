import Link from "next/link";

const evaluationCriteria = [
  {
    title: "Seguridad y reputación",
    body: "Analizamos la información disponible del operador y priorizamos claridad, pagos compatibles, condiciones de bonos y señales de juego responsable.",
  },
  {
    title: "Métodos de pago crypto",
    body: "Revisamos qué criptomonedas informa cada operador, sin asumir disponibilidad universal. Los métodos y límites pueden variar.",
  },
  {
    title: "Bonos y condiciones",
    body: "Mostramos promociones informadas por el operador. No inventamos montos ni urgencias; recomendamos verificar los términos vigentes.",
  },
  {
    title: "Experiencia de usuario",
    body: "Consideramos facilidad de uso, catálogo, soporte y claridad de la información publicada por el operador.",
  },
] as const;

const faqItems = [
  {
    question: "¿Qué es un casino crypto?",
    answer:
      "Un casino crypto permite usar criptomonedas como Bitcoin, Ethereum, USDT u otras opciones compatibles para depósitos o pagos, según las condiciones de cada operador.",
  },
  {
    question: "¿Los casinos crypto están disponibles para jugadores en México?",
    answer:
      "La disponibilidad depende de cada operador y de sus términos. Antes de registrarte, revisa las condiciones, restricciones territoriales y requisitos de verificación.",
  },
  {
    question: "¿Qué criptomonedas suelen aceptar estos casinos?",
    answer:
      "En nuestra selección actual se muestran métodos como Bitcoin, Ethereum, USDT y Litecoin cuando el operador los informa. Las opciones pueden cambiar.",
  },
  {
    question: "¿Cómo revisamos los bonos?",
    answer:
      "No inventamos promociones ni urgencias falsas. Mostramos bonos informados por el operador y recomendamos verificar siempre los términos vigentes en el sitio oficial.",
  },
  {
    question: "¿Es necesario verificar identidad?",
    answer:
      "Muchos operadores pueden solicitar verificación de identidad o documentos según sus políticas internas, métodos de pago y requisitos de cumplimiento.",
  },
  {
    question: "¿Cómo jugar de forma responsable?",
    answer:
      "Juega solo si eres mayor de 18 años, establece límites y evita apostar dinero que no puedas permitirte perder. Si el juego deja de ser entretenimiento, busca ayuda.",
  },
] as const;

const defaultCryptoMethods = ["Bitcoin", "Ethereum", "USDT", "Litecoin"] as const;

/**
 * Editorial info sections for the crypto casinos vertical page.
 * Static copy only — no affiliate CTAs, no FAQ schema.
 */
export function CryptoCasinoInfoSections({
  paymentMethods = [...defaultCryptoMethods],
}: {
  paymentMethods?: string[];
}) {
  const methods = paymentMethods.length > 0 ? paymentMethods : [...defaultCryptoMethods];

  return (
    <div className="space-y-12 sm:space-y-14">
      {/* Cómo evaluamos */}
      <section aria-labelledby="evaluacion-crypto-heading">
        <h2
          id="evaluacion-crypto-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Cómo evaluamos los casinos crypto
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          Analizamos la información disponible del operador y priorizamos claridad, pagos
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

      {/* Métodos de pago crypto */}
      <section aria-labelledby="pagos-crypto-heading">
        <h2
          id="pagos-crypto-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Métodos de pago crypto
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Los métodos disponibles dependen de cada operador. Antes de registrarte, revisa
          comisiones, tiempos de procesamiento, límites y requisitos de verificación.
        </p>
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Criptomonedas en nuestra selección">
          {methods.map((name) => (
            <li
              key={name}
              className="inline-flex items-center rounded-lg border border-primary/20 bg-primary/8 px-3 py-1.5 text-sm font-medium text-foreground"
            >
              {name}
            </li>
          ))}
        </ul>
      </section>

      {/* Seguridad y juego responsable */}
      <section
        aria-labelledby="seguridad-crypto-heading"
        className="rounded-2xl border border-accent/25 bg-accent/5 p-5 sm:p-6"
      >
        <h2
          id="seguridad-crypto-heading"
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
      <section aria-labelledby="faq-crypto-heading">
        <h2
          id="faq-crypto-heading"
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
            href="/guias/como-elegir-casino-crypto-mexico"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
          >
            Leer guía para elegir casino crypto
          </Link>
        </div>
      </section>
    </div>
  );
}
