import Link from "next/link";
import type { Author, Casino, Review } from "@/types/content";
import {
  BITCASINO_PROMO_AFFILIATE_URL,
  BITCASINO_REGISTRATION_AFFILIATE_URL,
} from "@/lib/affiliate/constants";
import { BitcasinoFeaturedCard } from "@/components/affiliate/BitcasinoFeaturedCard";
import { MobileStickyOfferCta } from "@/components/affiliate/MobileStickyOfferCta";
import { AffiliateDisclosure } from "@/components/trust/AffiliateDisclosure";
import { ResponsibleGamblingNotice } from "@/components/trust/ResponsibleGamblingNotice";
import { ReviewHeader } from "@/components/review/ReviewHeader";
import { VerdictBox } from "@/components/review/VerdictBox";
import { ProsCons } from "@/components/review/ProsCons";
import {
  SourceReferenceBlock,
  type SourceReference,
} from "@/components/trust/SourceReferenceBlock";
import { cn, focusRing } from "@/lib/utils";

const AFFILIATE_REL = "sponsored nofollow noopener noreferrer";

const JURISDICTION_WARNING =
  "Bitcasino es un casino crypto internacional. JugadaMax no afirma que cuente con licencia local mexicana. La disponibilidad, registro, promociones, pagos, KYC y retiros dependen de tu ubicación, cuenta y términos vigentes.";

const QUICK_SUMMARY = [
  { title: "Tipo", text: "Casino crypto internacional" },
  { title: "Welcome", text: "Hasta 5,000 USDT en tres depósitos" },
  { title: "Pagos", text: "BTC, ETH, USDT y TRX según cuenta" },
  { title: "Principal precaución", text: "Wagering, licencia, KYC y retiros" },
] as const;

const DEPOSIT_BONUS_CARDS = [
  { title: "Primer depósito", lines: ["100%", "Hasta 1,500 USDT"] },
  { title: "Segundo depósito", lines: ["50%", "Hasta 2,000 USDT"] },
  { title: "Tercer depósito", lines: ["100%", "Hasta 1,500 USDT"] },
  {
    title: "Máximo anunciado",
    lines: ["Hasta 5,000 USDT", "Sujeto a cuenta, GEO y términos"],
  },
] as const;

const CASINO_CARDS = [
  { title: "Slots", text: "Lobby amplio según proveedores habilitados por región." },
  { title: "Live casino", text: "Mesas en vivo sujetas a catálogo y horarios." },
  { title: "Ruleta y blackjack", text: "Variantes RNG y live según catálogo vigente." },
  { title: "Baccarat", text: "Mesas live y RNG donde el operador las habilita." },
  { title: "Game shows", text: "Formatos de estudio en vivo según disponibilidad." },
  { title: "Jackpots", text: "Premios progresivos según proveedor y región." },
  { title: "Bonus Buy", text: "Compra de funciones bonus en slots elegibles." },
  { title: "Crash / instant-win", text: "Formatos rápidos sujetos a límites y términos." },
] as const;

const ORIGINALS_CARDS = [
  { title: "Plinko", text: "Juego Original con reglas y límites según términos." },
  { title: "Dice", text: "Formato instantáneo con riesgo variable." },
  { title: "Baccarat", text: "Variante Original donde el operador la habilita." },
  { title: "Hilo", text: "Juego de predicción sujeto a disponibilidad regional." },
  { title: "Otros Originals", text: "El catálogo puede cambiar; no todos los títulos están en todas las regiones." },
] as const;

const ROTATING_PROMOS = [
  "World Cup Wager Race",
  "World Cup Cash Drops",
  "Pragmatic Play Drops & Wins",
  "VIP promotions",
] as const;

const PAYMENT_CARDS = [
  { title: "Bitcoin", text: "Depósitos y retiros según red, mínimos y comisiones." },
  { title: "Ethereum", text: "Confirma red y dirección antes de transferir." },
  { title: "USDT", text: "Stablecoin; verifica red (TRC-20, ERC-20, etc.)." },
  { title: "TRX", text: "Activo mencionado en la campaña suministrada." },
  { title: "Otros activos verificados", text: "Confirma monedas adicionales en términos vigentes." },
  { title: "Red y wallet", text: "Comprueba activo, red y dirección antes de confirmar." },
] as const;

const KYC_CARDS = [
  {
    title: "KYC",
    text: "El operador puede solicitar identidad, dirección, origen de fondos o propiedad del wallet antes de retiros o promociones.",
  },
  {
    title: "Retiros",
    text: "JugadaMax no garantiza tiempos de retiro. Red, fees, límites, revisión y actividad de la cuenta pueden afectar el procesamiento.",
  },
  {
    title: "Condiciones de bono",
    text: "Un bono puede imponer wagering, apuesta máxima, juegos elegibles, vencimiento y límites de conversión.",
  },
  {
    title: "Controles de cuenta",
    text: "Cuentas duplicadas, discrepancias de pago o incumplimiento de términos pueden provocar revisión o restricciones.",
  },
] as const;

const ANALYSIS_PARAGRAPHS = [
  "Bitcasino.io es un casino crypto-first con slots, live casino, mesas, Originals, jackpots y promociones VIP. JugadaMax lo clasifica exclusivamente como crypto-casino: no aparece en /casinos-fiat ni en /apuestas porque no es un operador fiat ni sportsbook.",
  "En /casinos-crypto se presenta como tarjeta afiliada ancha tras Vodka.bet y Sportsbet.io, sin recibir un rank canónico numerado. El bloque compacto de comparación (Gamdom, Rainbet, Roobet, Stake, etc.) permanece intacto.",
  "La campaña suministrada reparte hasta 5,000 USDT en tres bonos: 100% hasta 1,500 USDT, 50% hasta 2,000 USDT y 100% hasta 1,500 USDT. El máximo es la suma potencial de depósitos elegibles, no una entrega inmediata de 5,000 USDT.",
  "Las capturas muestran campañas rotativas como World Cup Wager Race, World Cup Cash Drops y Pragmatic Play Drops & Wins. Son promociones temporales; fechas, premios y elegibilidad pueden cambiar.",
  "Operado por Moon Technologies B.V. bajo licencia Curaçao OGL/2023/111/0069 según información oficial. Una interfaz en español no equivale a licencia local mexicana. Comprueba red y activo antes de transferir crypto.",
  "Las evaluaciones externas pertenecen a terceros y pueden diferir. JugadaMax asigna 4.0/5 tras revisar producto, promoción, pagos, términos, licencia y riesgos. 18+.",
] as const;

const FAQ_ITEMS = [
  {
    question: "¿Cuál es el bono de Bitcasino?",
    answer:
      "La campaña suministrada anuncia hasta 5,000 USDT repartidos en tres bonos de depósito. Activación, moneda, wagering y elegibilidad dependen de la cuenta y términos vigentes.",
  },
  {
    question: "¿Cómo se reparten los 5,000 USDT?",
    answer:
      "Primer depósito 100% hasta 1,500 USDT, segundo 50% hasta 2,000 USDT y tercer 100% hasta 1,500 USDT. El máximo es la suma potencial de bonos elegibles, no un pago automático.",
  },
  {
    question: "¿Cuál es el depósito mínimo?",
    answer:
      "JugadaMax no publica un depósito mínimo universal. Confirma el mínimo mostrado en la promoción activa y en el cajero de tu cuenta.",
  },
  {
    question: "¿Cuál es el wagering?",
    answer:
      "El wagering varía por bono, juego y términos vigentes. Revisa las condiciones de cada depósito antes de activar la promoción.",
  },
  {
    question: "¿Bitcasino acepta Bitcoin y USDT?",
    answer:
      "Sí, Bitcasino está orientado a pagos crypto. La campaña suministrada menciona USDT y BTC entre activos soportados. Confirma red y mínimos.",
  },
  {
    question: "¿Bitcasino acepta ETH y TRX?",
    answer:
      "La campaña suministrada menciona ETH y TRX. Otros activos pueden aparecer según cuenta y términos. Verifica en el cajero.",
  },
  {
    question: "¿Bitcasino tiene live casino?",
    answer:
      "Sí. Bitcasino ofrece live casino, mesas y game shows según catálogo regional y términos.",
  },
  {
    question: "¿Qué son los juegos Originals?",
    answer:
      "Son juegos propios del operador como Plinko, Dice o Hilo. El catálogo puede cambiar y no todos los títulos están en todas las regiones.",
  },
  {
    question: "¿Bitcasino requiere KYC?",
    answer:
      "Bitcasino puede solicitar verificación de identidad, dirección u origen de fondos antes de retiros o promociones.",
  },
  {
    question: "¿Cuánto tardan los retiros?",
    answer:
      "JugadaMax no garantiza tiempos. Red, fees, revisiones y límites pueden afectar el procesamiento.",
  },
  {
    question: "¿Bitcasino está disponible en México?",
    answer:
      "Bitcasino muestra interfaz en español, pero JugadaMax no afirma licencia local mexicana ni disponibilidad legal universal. Revisa restricciones y términos.",
  },
  {
    question: "¿Bitcasino tiene licencia?",
    answer:
      "Según información oficial, Moon Technologies B.V. opera bajo licencia Curaçao OGL/2023/111/0069. No es licencia local mexicana.",
  },
  {
    question: "¿Las promociones World Cup son permanentes?",
    answer:
      "No. World Cup Wager Race, Cash Drops y campañas similares son promociones rotativas que pueden finalizar o cambiar.",
  },
] as const;

const SOURCE_REFERENCES: SourceReference[] = [
  { label: "Bitcasino.io — sitio oficial", href: "https://bitcasino.io/" },
  {
    label: "Bitcasino — información de licencia",
    href: "https://bitcasino.io/help-center/help-getting-started/is-bitcasino-licensed",
  },
  {
    label: "Bitcasino — términos generales",
    href: "https://bitcasino.io/help-center/help-terms-and-conditions/bitcasino-terms-and-conditions-of-use-of-services-of-the-company",
  },
  { label: "Bitcasino — promociones", href: "https://bitcasino.io/promotions" },
  {
    label: "Casino Guru — reseña de Bitcasino",
    href: "https://casino.guru/bitcasino-io-casino-review",
    note: "Evaluación externa; no es la calificación editorial de JugadaMax (4.0/5).",
  },
  {
    label: "AskGamblers — reseña de Bitcasino",
    href: "https://www.askgamblers.com/online-casinos/reviews/bitcasino-casino",
    note: "Evaluación externa con señales que pueden diferir.",
  },
  { label: "Metodología editorial JugadaMax", href: "/como-evaluamos" },
  {
    label: "Enlaces de campaña suministrados por el partner",
    note: "Landing de promoción y registro general.",
  },
];

export function BitcasinoReviewContent({
  review,
  casino,
  author,
}: {
  review: Review;
  casino: Casino;
  author: Author;
}) {
  return (
    <>
      <article className="mx-auto w-full max-w-5xl space-y-7 sm:space-y-8">
        <ReviewHeader review={review} casino={casino} author={author} />

        <div className="mx-auto w-full max-w-4xl space-y-3">
          <AffiliateDisclosure />
          <ResponsibleGamblingNotice />
          <div
            role="note"
            className="rounded-lg border border-amber-500/25 bg-amber-500/5 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
          >
            {JURISDICTION_WARNING}
          </div>
        </div>

        <div id="review-primary-offer">
          <BitcasinoFeaturedCard context="review" />
        </div>

        <section aria-labelledby="bitcasino-resumen-heading">
          <h2 id="bitcasino-resumen-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Resumen rápido
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_SUMMARY.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#6519A8]/20 bg-[#12051F]/80 p-3"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[#FF7417]">
                  {card.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="bitcasino-welcome-heading">
          <h2 id="bitcasino-welcome-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Bonos de bienvenida en tres depósitos
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {DEPOSIT_BONUS_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#7B22D3]/25 bg-[#210936]/80 p-4"
              >
                <p className="text-sm font-bold text-[#FF7417]">{card.title}</p>
                <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                  {card.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            El máximo anunciado es la suma potencial de los tres depósitos elegibles y no una
            entrega inmediata de 5,000 USDT.
          </p>
          <div className="mt-4">
            <a
              href={BITCASINO_PROMO_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md bg-[#FF5A00] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#FF7417]",
                focusRing,
              )}
            >
              Ver bono Bitcasino
            </a>
          </div>
        </section>

        <section aria-labelledby="bitcasino-casino-heading">
          <h2 id="bitcasino-casino-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Producto de casino
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CASINO_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Bitcasino ofrece un catálogo amplio de slots, live casino, mesas y Originals; el número
            exacto de juegos y proveedores puede cambiar por región.
          </p>
        </section>

        <section aria-labelledby="bitcasino-originals-heading">
          <h2 id="bitcasino-originals-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Originals
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {ORIGINALS_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="bitcasino-promos-heading">
          <h2 id="bitcasino-promos-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Promociones rotativas
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Las capturas suministradas muestran campañas rotativas como World Cup Wager Race, World
            Cup Cash Drops y Pragmatic Play Drops & Wins. Premios, free spins, apuestas válidas,
            fechas y elegibilidad pueden cambiar o finalizar.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ROTATING_PROMOS.map((title) => (
              <div key={title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Promoción rotativa; fechas, premios y disponibilidad pueden cambiar.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="bitcasino-payments-heading">
          <h2 id="bitcasino-payments-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Pagos
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {PAYMENT_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Comprueba activo, red y dirección antes de confirmar una transferencia. Una red
            incorrecta puede provocar pérdida de fondos.
          </p>
        </section>

        <section aria-labelledby="bitcasino-kyc-heading">
          <h2 id="bitcasino-kyc-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            KYC y retiros
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {KYC_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="bitcasino-licence-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="bitcasino-licence-heading" className="text-lg font-semibold text-foreground">
            Licencia y titularidad
          </h2>
          <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">Operador</dt>
              <dd>Moon Technologies B.V.</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Dirección registrada</dt>
              <dd>Schout Bij Nacht Doormanweg 40, P.O. Box 4745, Curaçao</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Licencia</dt>
              <dd>Curaçao Gaming Authority — OGL/2023/111/0069</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Información verificada en la página oficial de licencia y términos de Bitcasino. No es
            una licencia local mexicana.
          </p>
        </section>

        <section
          aria-labelledby="bitcasino-external-heading"
          className="rounded-xl border border-[#6519A8]/20 bg-[#12051F]/60 p-4 sm:p-5"
        >
          <h2 id="bitcasino-external-heading" className="text-lg font-semibold text-foreground">
            Nota de evaluación externa
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Las evaluaciones externas pertenecen a terceros y pueden diferir entre sí. Casino Guru y
            AskGamblers publican reseñas con puntuaciones editoriales, reclamaciones y señales de
            seguridad que no son la calificación de JugadaMax. JugadaMax asigna de forma
            independiente 4.0/5 tras revisar producto, promoción, pagos, términos, licencia y
            riesgos.
          </p>
        </section>

        <VerdictBox verdict={review.verdict} rating={review.rating} />

        <ProsCons pros={review.pros} cons={review.cons} />

        <section aria-labelledby="bitcasino-analisis-heading">
          <h2 id="bitcasino-analisis-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Análisis editorial
          </h2>
          <div className="mt-4 space-y-3">
            {ANALYSIS_PARAGRAPHS.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="bitcasino-final-cta-heading"
          className="rounded-xl border border-[#7B22D3]/25 bg-gradient-to-br from-[#12051F] via-[#210936] to-[#35105A] p-5 sm:p-6"
        >
          <h2 id="bitcasino-final-cta-heading" className="text-lg font-semibold text-foreground">
            Revisar Bitcasino
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Confirma el bono activo, criptomoneda, red, wagering, KYC y reglas de retiro directamente
            en Bitcasino antes de depositar.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={BITCASINO_REGISTRATION_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md bg-[#FF5A00] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#FF7417]",
                focusRing,
              )}
            >
              Visitar Bitcasino
            </a>
            <Link
              href="/casinos-crypto"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-[#7B22D3]/40 px-5 py-2.5 text-sm font-semibold text-[#F5F1FA] transition-colors hover:bg-[#6519A8]/20",
                focusRing,
              )}
            >
              Comparar casinos crypto
            </Link>
          </div>
        </section>

        <section aria-labelledby="bitcasino-faq-heading">
          <h2 id="bitcasino-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Preguntas frecuentes
          </h2>
          <div className="mt-4 divide-y divide-white/10 rounded-xl border border-border/60 bg-card">
            {FAQ_ITEMS.map((item) => (
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

        <SourceReferenceBlock
          title="Fuentes y referencias"
          description="Información oficial, enlaces de campaña suministrados, evaluaciones externas y opinión editorial de JugadaMax."
          items={SOURCE_REFERENCES}
        />
      </article>

      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Visitar"
        compactSecondaryLabel="Comparar"
        primaryLabel="Visitar Bitcasino"
        primaryHref={BITCASINO_REGISTRATION_AFFILIATE_URL}
        secondaryLabel="Comparar"
        secondaryHref="/casinos-crypto"
      />
    </>
  );
}
