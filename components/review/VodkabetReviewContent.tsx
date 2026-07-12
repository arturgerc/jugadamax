import Link from "next/link";
import type { Author, Casino, Review } from "@/types/content";
import { VODKABET_AFFILIATE_URL } from "@/lib/affiliate/constants";
import { VodkabetFeaturedCard } from "@/components/affiliate/VodkabetFeaturedCard";
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
  "Vodka.bet se presenta como operador internacional. La disponibilidad, promociones, pagos y acceso dependen de tu jurisdicción y de los términos oficiales. JugadaMax no afirma disponibilidad legal o local para México.";

const EDITORIAL_RISK_NOTE =
  "JugadaMax no ha verificado licencia, entidad operadora, límites de retiro ni señales externas de confianza para Vodka.bet. Trátalo como opción crypto secundaria y provisional: confirma términos, KYC, pagos y quejas de jugadores antes de depositar.";

const QUICK_SUMMARY = [
  { title: "Tipo", text: "Casino crypto internacional con sportsbook adicional" },
  { title: "Promoción", text: "125% + hasta 300 FS según campaña" },
  { title: "Código", text: "JUGADAMAX" },
  {
    title: "Principal precaución",
    text: "Licencia, wagering, pagos, KYC y retiros requieren verificación",
  },
] as const;

const PROMO_CARDS = [
  { title: "125% primer depósito", text: "según elegibilidad y términos" },
  { title: "Hasta 300 FS", text: "según elegibilidad y términos" },
  { title: "+2% depósitos crypto", text: "según elegibilidad y términos" },
  { title: "+50 FS por Telegram", text: "según elegibilidad y términos" },
] as const;

const PRODUCT_CARDS = [
  {
    title: "Slots",
    text: "Lobby amplio con múltiples proveedores y promociones rotativas según disponibilidad.",
  },
  {
    title: "Live casino",
    text: "Mesas en vivo y game shows sujetos a catálogo regional y términos del operador.",
  },
  {
    title: "Mesas y ruleta",
    text: "Ruleta, blackjack y formatos RNG visibles en la plataforma según jurisdicción.",
  },
  {
    title: "Jackpots y sportsbook adicional",
    text: "Jackpots y sección Sports como producto adicional — no evaluado como recomendación deportiva en JugadaMax.",
  },
] as const;

const CRYPTO_TELEGRAM_CARDS = [
  {
    title: "Depósitos crypto",
    text: "La campaña enfatiza un extra promocional para depósitos crypto; activos y redes deben confirmarse en el cajero.",
  },
  {
    title: "Código JUGADAMAX",
    text: "Creatividad de campaña activa en JugadaMax; confirma que se aplique tras el registro y antes de depositar.",
  },
  {
    title: "Recompensa Telegram",
    text: "Creatividades muestran +50 FS por vincular Telegram; implica vinculación de cuenta y condiciones adicionales.",
  },
  {
    title: "Wagering y vencimiento",
    text: "Depósito mínimo, juegos elegibles, rollover y caducidad deben leerse en los términos vigentes.",
  },
] as const;

const PAYMENT_TRUST_CARDS = [
  {
    title: "Depósitos crypto",
    text: "JugadaMax no publica monedas o redes verificadas; confirma en el cajero en vivo.",
  },
  {
    title: "Redes y mínimos",
    text: "Comisiones, mínimos y rutas de depósito pueden variar por cuenta y campaña.",
  },
  {
    title: "KYC",
    text: "El operador puede solicitar verificación antes de retiros o promociones; no asumas juego anónimo.",
  },
  {
    title: "Retiros y límites",
    text: "Límites semanales o mensuales, tiempos y reglas antifraude deben confirmarse directamente.",
  },
] as const;

const ANALYSIS_PARAGRAPHS = [
  "Vodka.bet combina un lobby de casino internacional — slots, mesas, live casino, jackpots y juegos rápidos — con promociones orientadas a depósitos crypto y una sección Sports adicional. JugadaMax lo cubre como casino crypto internacional con campaña JUGADAMAX, no como operador fiat local ni como recomendación principal de apuestas deportivas.",
  "Las creatividades de campaña suministradas muestran 125% en el primer depósito, hasta 300 free spins vinculados a depósitos, +2% adicional para depósitos crypto y 50 FS por vincular Telegram. Ninguna de esas cifras debe interpretarse como garantía: elegibilidad, depósito mínimo, wagering, juegos válidos y vencimiento pueden cambiar por campaña, cuenta y GEO.",
  "El código JUGADAMAX es el eje promocional acordado para JugadaMax. Confirma en el flujo de registro que la oferta activa coincide con la creatividad mostrada y lee los términos oficiales antes de aceptar bonos o vincular Telegram.",
  "En pagos y retiros, la orientación crypto no elimina KYC ni límites internos. JugadaMax no ha verificado monedas, redes, comisiones ni tiempos de procesamiento. Revisa el cajero, políticas de retiro y posibles restricciones regionales antes de mover fondos.",
  "Calificamos Vodka.bet 3.6/5 de forma provisional: producto de casino visible y campaña activa, pero licencia, entidad operadora y reglas completas de bonos/retiros siguen sin verificación editorial suficiente. No uses VPNs ni datos falsos para acceder a servicios restringidos. 18+.",
] as const;

const FAQ_ITEMS = [
  {
    question: "¿Cuál es el bono de Vodka.bet?",
    answer:
      "Las creatividades de campaña muestran 125% en el primer depósito y hasta 300 FS según términos. Depósito mínimo, wagering, juegos elegibles y vencimiento deben confirmarse en la oferta vigente tras el registro.",
  },
  {
    question: "¿Cuál es el código promocional de Vodka.bet?",
    answer:
      "JugadaMax utiliza el código JUGADAMAX en la campaña activa. Verifica que se aplique correctamente durante el registro y antes de depositar.",
  },
  {
    question: "¿Vodka.bet ofrece 300 free spins?",
    answer:
      "Las creatividades muestran hasta 300 FS vinculados a depósitos, pero no garantizan esa cantidad para todas las cuentas. Confirma la oferta exacta en los términos oficiales.",
  },
  {
    question: "¿Qué significa el +2% para depósitos crypto?",
    answer:
      "Es un extra promocional visible en creatividades de campaña. Puede depender de activo, red, depósito mínimo y elegibilidad; no es un beneficio garantizado.",
  },
  {
    question: "¿Cómo se consiguen los 50 FS por Telegram?",
    answer:
      "Las creatividades mencionan +50 FS por vincular Telegram. Implica conectar la cuenta, aceptar condiciones adicionales y cumplir reglas de elegibilidad publicadas por el operador.",
  },
  {
    question: "¿Vodka.bet tiene sportsbook?",
    answer:
      "La plataforma muestra una sección Sports adicional. JugadaMax no lo evalúa en /apuestas ni lo recomienda como producto deportivo independiente.",
  },
  {
    question: "¿Vodka.bet está disponible en México?",
    answer:
      "Vodka.bet se presenta como operador internacional. JugadaMax no afirma disponibilidad legal o local para México; revisa restricciones regionales y términos oficiales.",
  },
  {
    question: "¿Vodka.bet requiere KYC?",
    answer:
      "Es probable que el operador solicite verificación para retiros, promociones o cumplimiento. Lee las políticas actuales antes de depositar.",
  },
  {
    question: "¿Vodka.bet tiene licencia verificada?",
    answer:
      "JugadaMax no ha verificado licencia mexicana ni entidad operadora local. Revisa footer, términos y restricciones publicadas por el operador antes de registrarte.",
  },
] as const;

const SOURCE_REFERENCES: SourceReference[] = [
  { label: "Vodka.bet — sitio oficial", href: "https://vodka.bet/" },
  {
    label: "Destino de campaña afiliada JugadaMax",
    href: "https://vodka200032.com?id=18393",
    note: "Enlace de afiliado/redirección — no es prueba independiente de licencia o pagos.",
  },
  {
    label: "Creatividades de campaña suministradas (JUGADAMAX)",
    note:
      "Material promocional del partner: 125% primer depósito, hasta 300 FS, +2% crypto, +50 FS Telegram.",
  },
  {
    label: "Metodología editorial JugadaMax",
    href: "/como-evaluamos",
  },
];

export function VodkabetReviewContent({
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
          <VodkabetFeaturedCard context="review" />
        </div>

        <section
          aria-labelledby="vodkabet-resumen-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="vodkabet-resumen-heading" className="text-lg font-semibold text-foreground">
            Resumen rápido
          </h2>
          <dl className="mt-4 grid gap-3 sm:grid-cols-2">
            {QUICK_SUMMARY.map((item) => (
              <div key={item.title} className="rounded-lg border border-white/10 bg-[#111417] p-3">
                <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {item.title}
                </dt>
                <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="vodkabet-promo-heading">
          <h2 id="vodkabet-promo-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Desglose promocional
          </h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {PROMO_CARDS.map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-blue-500/20 bg-[#071225]/80 p-3 text-center"
              >
                <p className="text-xs font-semibold text-foreground">{item.title}</p>
                <p className="mt-1 text-[0.7rem] leading-snug text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="vodkabet-product-heading">
          <h2 id="vodkabet-product-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Producto de casino
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {PRODUCT_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="vodkabet-crypto-heading">
          <h2 id="vodkabet-crypto-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Depósitos crypto y promoción Telegram
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {CRYPTO_TELEGRAM_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="vodkabet-payments-heading">
          <h2 id="vodkabet-payments-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Pagos, KYC y retiros
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {PAYMENT_TRUST_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="vodkabet-licence-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="vodkabet-licence-heading" className="text-lg font-semibold text-foreground">
            Licencia y estado de confianza
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {review.trustSummary ?? casino.licensing?.notes}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Entidad operadora:{" "}
            <span className="font-medium text-foreground">
              no verificada por JugadaMax
            </span>
            . Licencia publicada en el sitio del operador:{" "}
            <span className="font-medium text-foreground">
              no verificada editorialmente por JugadaMax
            </span>
            . Revisa footer, términos, restricciones regionales y políticas de retiro directamente
            en Vodka.bet antes de depositar.
          </p>
        </section>

        <section
          aria-labelledby="vodkabet-risk-heading"
          className="rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 sm:p-5"
        >
          <h2 id="vodkabet-risk-heading" className="text-lg font-semibold text-foreground">
            Nota editorial de riesgo
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{EDITORIAL_RISK_NOTE}</p>
        </section>

        <VerdictBox verdict={review.verdict} rating={review.rating} />

        <section aria-label="Pros y contras">
          <h2 className="mb-3 text-xl font-semibold text-foreground">Pros y contras</h2>
          <ProsCons pros={review.pros} cons={review.cons} />
        </section>

        <section aria-label="Análisis" className="mx-auto max-w-4xl space-y-4">
          <h2 className="text-xl font-semibold text-foreground">Análisis</h2>
          {ANALYSIS_PARAGRAPHS.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {paragraph}
            </p>
          ))}
        </section>

        <section
          aria-labelledby="vodkabet-final-cta-heading"
          className="rounded-xl border border-blue-500/20 bg-gradient-to-br from-blue-500/8 via-card to-[#071225] p-4 sm:p-5"
        >
          <h2 id="vodkabet-final-cta-heading" className="text-lg font-semibold text-foreground">
            Revisar Vodka.bet
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Confirma la oferta JUGADAMAX, métodos de pago, reglas de verificación y límites de retiro
            en el sitio oficial antes de depositar.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
            <a
              href={VODKABET_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md px-5 py-2.5 text-sm font-semibold",
                "bg-[#2563EB] text-white transition-colors hover:bg-[#3B82F6]",
                focusRing,
              )}
            >
              Ver oferta Vodka.bet
            </a>
            <Link
              href="/casinos-crypto"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-violet-400/35 px-5 py-2.5 text-sm font-semibold text-violet-200 transition-colors hover:bg-violet-500/10",
                focusRing,
              )}
            >
              Comparar casinos crypto
            </Link>
          </div>
        </section>

        <section aria-labelledby="vodkabet-faq-heading">
          <h2 id="vodkabet-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
          description="Fuentes oficiales del operador, material de campaña suministrado y opinión editorial de JugadaMax. El enlace afiliado no sustituye la verificación de licencia, pagos o retiros."
          items={SOURCE_REFERENCES}
        />
      </article>

      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Ver"
        compactSecondaryLabel="Comparar"
        primaryLabel="Ver Vodka.bet"
        primaryHref={VODKABET_AFFILIATE_URL}
        secondaryLabel="Comparar casinos crypto"
        secondaryHref="/casinos-crypto"
      />
    </>
  );
}
