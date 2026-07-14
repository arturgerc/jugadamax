import Link from "next/link";
import type { Author, Casino, Review } from "@/types/content";
import {
  MOSTBET_APP_DOWNLOAD_URL,
  MOSTBET_PLAYERS_AFFILIATE_URL,
} from "@/lib/affiliate/constants";
import { MostbetFeaturedCard } from "@/components/affiliate/MostbetFeaturedCard";
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
  "Mostbet se presenta como operador internacional. Una interfaz o moneda localizada para México no equivale a licencia local mexicana. La disponibilidad legal, registro, bonos, pagos, KYC y retiros dependen de tu ubicación y de los términos vigentes.";

const EXTERNAL_RISK_NOTE =
  "Las evaluaciones externas son mixtas. Casino Guru muestra un Safety Index superior a la media, mientras AskGamblers publica una valoración editorial más baja. Las opiniones de usuarios, reclamaciones, términos de bonos, KYC y retiros deben revisarse con cautela. Estas puntuaciones externas no son la calificación de JugadaMax.";

const QUICK_SUMMARY = [
  { title: "Tipo", text: "Casino fiat/multi-currency + sportsbook" },
  { title: "Promoción", text: "125% + 250 FS con elección Casino o Sports" },
  { title: "Pagos", text: "MXN, tarjetas, e-wallets y crypto según cuenta" },
  { title: "Principal precaución", text: "Licencia local, wagering, KYC y retiros" },
] as const;

const BONUS_SELECTION = [
  {
    title: "Casino",
    lines: ["125% + 250 FS", "Primer depósito", "Sujeto a condiciones"],
  },
  {
    title: "Sports",
    lines: ["125% + 250 FS", "Primer depósito", "Sujeto a mercados y términos"],
  },
  {
    title: "Sin bono",
    lines: [
      "Continuar sin promoción",
      "Útil para usuarios que no desean wagering promocional",
    ],
  },
] as const;

const SPORTSBOOK_CARDS = [
  { title: "Fútbol", text: "Mercados pre-match y live según catálogo vigente y jurisdicción." },
  { title: "Apuestas en vivo", text: "Eventos en directo con cuotas variables; no garantizan liquidación anticipada." },
  { title: "Esports", text: "Disciplinas digitales según disponibilidad regional y términos." },
  { title: "Tenis y básquetbol", text: "Deportes populares sujetos a calendario y mercados activos." },
  { title: "Cricket y deportes internacionales", text: "Cobertura amplia según GEO; confirma mercados en tu cuenta." },
  { title: "Cuotas y mercados", text: "Las cuotas cambian continuamente; reglas de liquidación deben revisarse." },
] as const;

const CASINO_CARDS = [
  { title: "Slots", text: "Lobby amplio según proveedores habilitados por región." },
  { title: "Live casino", text: "Mesas en vivo sujetas a catálogo y horarios del operador." },
  { title: "Poker", text: "Formatos de póker donde el operador los habilita." },
  { title: "Aviator", text: "Juego instantáneo popular; riesgo y límites según términos." },
  { title: "Bonus Buy", text: "Compra de funciones bonus en slots elegibles según catálogo." },
  { title: "Crash / instant games", text: "Formatos rápidos sujetos a disponibilidad regional." },
  { title: "Ruleta y blackjack", text: "Mesas RNG y live según catálogo vigente." },
  { title: "Proveedores", text: "Bases externas describen un catálogo muy amplio; la disponibilidad regional puede cambiar." },
] as const;

const PAYMENT_CARDS = [
  { title: "Tarjetas", text: "Visa y Mastercard según cajero y país; límites y comisiones variables." },
  { title: "OXXO / SPEI reportados externamente", text: "Fuentes externas los mencionan; JugadaMax no garantiza su aparición en tu cajero." },
  { title: "E-wallets", text: "Monederos y métodos locales según país y cuenta." },
  { title: "Bitcoin / USDT", text: "Opciones crypto secundarias; confirma red, mínimos y comisiones." },
  { title: "MXN y otras monedas", text: "Pesos mexicanos y otras divisas según cuenta y campaña." },
  { title: "Cajero específico de cuenta", text: "Los métodos visibles pueden diferir entre usuarios y GEO." },
] as const;

const KYC_CARDS = [
  {
    title: "KYC",
    text: "El operador puede solicitar identidad, dirección, origen de fondos o propiedad del método de pago.",
  },
  {
    title: "Retiros",
    text: "JugadaMax no garantiza tiempos de retiro. Procesamiento, límites, redes, revisiones y fines de semana pueden afectar los plazos.",
  },
  {
    title: "Retiro con bono activo",
    text: "Un bono activo puede imponer wagering, juegos o mercados válidos, apuesta máxima y condiciones antes del retiro.",
  },
  {
    title: "Restricciones de cuenta",
    text: "Controles antifraude, cuentas duplicadas, discrepancias de pago o incumplimiento de términos pueden provocar revisiones.",
  },
] as const;

const ANALYSIS_PARAGRAPHS = [
  "Mostbet integra sportsbook, casino, live casino, poker, esports y aplicación móvil en una plataforma internacional. JugadaMax lo clasifica como operador mixto fiat/multi-moneda con sportsbook sustancial — no como casino crypto — y lo coloca tras Awintura en casinos fiat, apuestas y bonos.",
  "Aunque fuentes externas reportan Bitcoin, USDT y otras criptomonedas, eso no justifica su inclusión en /casinos-crypto: los pagos crypto son secundarios y la propuesta principal es fiat/sportsbook. No aparece en homepage ni en rutas /en.",
  "La landing afiliada suministrada muestra 125% + 250 FS con elección Casino o Sports. JugadaMax no publica un tope universal en moneda ni wagering fijo: depósito mínimo, rollover y elegibilidad deben confirmarse tras el redirect. El banner de 22,000 MXN es una campaña visible separada.",
  "La localización en español y MXN no equivale a licencia SEGOB. Fuentes externas identifican a Bizbon N.V. y OGL/2024/597/0249; JugadaMax no pudo confirmar el footer en vivo durante esta revisión. KYC, retiros y reclamaciones externas requieren cautela.",
  "Calificamos Mostbet 3.8/5: producto amplio, campaña activa y app móvil, pero evaluaciones externas mixtas, reglas promocionales variables y ausencia de licencia local mexicana. 18+ solamente.",
] as const;

const FAQ_ITEMS = [
  {
    question: "¿Cuál es el bono de Mostbet?",
    answer:
      "La landing suministrada muestra 125% + 250 FS para el primer depósito con selección Casino o Sports. Importe máximo, moneda, depósito mínimo y wagering dependen de campaña, cuenta y GEO.",
  },
  {
    question: "¿Puedo elegir entre bono de casino y deportes?",
    answer:
      "Sí, la landing afiliada permite seleccionar promoción Casino o Sports, o continuar sin bono. Cada opción tiene términos distintos que deben confirmarse antes de depositar.",
  },
  {
    question: "¿Mostbet ofrece hasta 22,000 MXN?",
    answer:
      "Un banner localizado mostró hasta 22,000 MXN para primeros depósitos. JugadaMax lo trata como campaña separada; no debe sumarse automáticamente al 125% + 250 FS ni interpretarse como garantía universal.",
  },
  {
    question: "¿Cuál es el depósito mínimo?",
    answer:
      "Fuentes externas muestran valores distintos por GEO y moneda. Confirma el depósito mínimo mostrado en tu cuenta y en la promoción activa antes de depositar.",
  },
  {
    question: "¿Cuál es el wagering del bono?",
    answer:
      "El wagering varía por campaña, producto (casino o sports) y términos vigentes. JugadaMax no publica un rollover universal para México.",
  },
  {
    question: "¿Mostbet tiene casino y sportsbook?",
    answer:
      "Sí. Mostbet combina casino, live casino, poker, juegos instantáneos y sportsbook en una misma plataforma internacional.",
  },
  {
    question: "¿Mostbet acepta pesos mexicanos?",
    answer:
      "Fuentes externas incluyen MXN entre monedas soportadas. Confirma moneda de cuenta, límites y métodos en el cajero tras registrarte.",
  },
  {
    question: "¿Mostbet acepta OXXO o SPEI?",
    answer:
      "Fuentes externas reportan OXXO Pay y SPEI, pero JugadaMax no verificó su aparición en un cajero mexicano autenticado. Confirma métodos visibles en tu cuenta.",
  },
  {
    question: "¿Mostbet acepta criptomonedas?",
    answer:
      "Fuentes externas mencionan Bitcoin, USDT y otras criptomonedas como métodos secundarios. Esto no convierte a Mostbet en casino crypto en JugadaMax.",
  },
  {
    question: "¿Mostbet tiene aplicación?",
    answer:
      "Sí, existe un flujo de descarga de aplicación. JugadaMax enlaza la app solo en la sección dedicada de esta reseña.",
  },
  {
    question: "¿Mostbet requiere KYC?",
    answer:
      "Mostbet puede solicitar verificación de identidad, residencia u origen de fondos antes de retiros o promociones.",
  },
  {
    question: "¿Cuánto tardan los retiros?",
    answer:
      "JugadaMax no garantiza tiempos de retiro. Límites, revisiones, redes y controles antifraude pueden afectar el procesamiento.",
  },
  {
    question: "¿Mostbet está disponible en México?",
    answer:
      "Mostbet muestra interfaz localizada, pero JugadaMax no afirma licencia local mexicana ni disponibilidad legal universal. Revisa restricciones y términos oficiales.",
  },
  {
    question: "¿Mostbet tiene licencia?",
    answer:
      "Fuentes externas identifican licencia Curaçao OGL/2024/597/0249 bajo Bizbon N.V. JugadaMax no confirmó el footer en vivo; no equivale a licencia local mexicana.",
  },
] as const;

const SOURCE_REFERENCES: SourceReference[] = [
  { label: "Mostbet — sitio oficial", href: "https://mostbet.com/" },
  { label: "Mostbet — términos y condiciones", href: "https://mostbet.com/rules" },
  {
    label: "Casino Guru — reseña de Mostbet",
    href: "https://casino.guru/mostbet-casino-review",
    note: "Evaluación externa; no es la calificación editorial de JugadaMax (3.8/5).",
  },
  {
    label: "AskGamblers — reseña de Mostbet",
    href: "https://www.askgamblers.com/online-casinos/reviews/mostbet-casino",
    note: "Evaluación externa con señales mixtas.",
  },
  { label: "Metodología editorial JugadaMax", href: "/como-evaluamos" },
  {
    label: "Landing de campaña suministrada por el partner",
    note: "125% + 250 FS con selección Casino/Sports; banner MXN visible por separado.",
  },
];

export function MostbetReviewContent({
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
          <MostbetFeaturedCard context="review" />
        </div>

        <section aria-labelledby="mostbet-resumen-heading">
          <h2 id="mostbet-resumen-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Resumen rápido
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_SUMMARY.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#0A5A9C]/20 bg-[#031A36]/80 p-3"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[#34A5FF]">
                  {card.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="mostbet-bonus-selection-heading">
          <h2
            id="mostbet-bonus-selection-heading"
            className="text-lg font-semibold text-foreground sm:text-xl"
          >
            Elige Casino o Sports
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {BONUS_SELECTION.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#FF6B00]/20 bg-[#052B52]/80 p-4"
              >
                <p className="text-sm font-bold text-[#FF861A]">{card.title}</p>
                <ul className="mt-2 space-y-1 text-xs text-muted-foreground">
                  {card.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            La posibilidad de rechazar el bono no elimina los términos generales de la cuenta, KYC
            ni políticas de retiro.
          </p>
        </section>

        <section
          aria-labelledby="mostbet-mxn-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="mostbet-mxn-heading" className="text-lg font-semibold text-foreground">
            Campañas visibles en México
          </h2>
          <p className="mt-2 text-sm font-bold text-foreground">Hasta 22,000 MXN para primeros depósitos</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            El banner suministrado muestra 22,000 MXN para primeros depósitos. Puede tratarse de
            una promoción distinta o una presentación localizada de otra campaña. No debe sumarse
            automáticamente al 125% + 250 FS ni interpretarse como garantía universal.
          </p>
        </section>

        <section aria-labelledby="mostbet-sportsbook-heading">
          <h2 id="mostbet-sportsbook-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Sportsbook
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {SPORTSBOOK_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="mostbet-casino-heading">
          <h2 id="mostbet-casino-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Casino y live casino
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {CASINO_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="mostbet-app-heading"
          className="rounded-xl border border-[#0A5A9C]/25 bg-gradient-to-br from-[#031A36] via-[#052B52] to-[#074477] p-5 sm:p-6"
        >
          <h2 id="mostbet-app-heading" className="text-lg font-semibold text-foreground">
            Aplicación de Mostbet
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            El manager suministró un enlace independiente para la descarga de la aplicación. El
            sistema operativo, versión, archivo, permisos, disponibilidad regional y actualizaciones
            deben comprobarse después del redirect.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Descarga aplicaciones únicamente desde el destino suministrado por el operador o su
            partner autorizado. Comprueba dominio, firma, permisos y compatibilidad antes de
            instalar.
          </p>
          <div className="mt-4">
            <a
              href={MOSTBET_APP_DOWNLOAD_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-[#96DB00]/40 bg-[#052B52] px-5 py-2.5 text-sm font-semibold text-[#96DB00] transition-colors hover:bg-[#78C800]/10",
                focusRing,
              )}
            >
              Descargar app de Mostbet
            </a>
          </div>
        </section>

        <section aria-labelledby="mostbet-payments-heading">
          <h2 id="mostbet-payments-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
            OXXO, SPEI, tarjetas y criptomonedas pueden no aparecer simultáneamente. JugadaMax no
            garantiza métodos que no estén visibles en la cuenta del usuario.
          </p>
        </section>

        <section aria-labelledby="mostbet-kyc-heading">
          <h2 id="mostbet-kyc-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
          aria-labelledby="mostbet-licence-heading"
          className="rounded-xl border border-border/60 bg-card p-4 sm:p-5"
        >
          <h2 id="mostbet-licence-heading" className="text-lg font-semibold text-foreground">
            Licencia y titularidad
          </h2>
          <dl className="mt-4 space-y-2 text-sm text-muted-foreground">
            <div>
              <dt className="font-semibold text-foreground">Operador (fuentes externas)</dt>
              <dd>Bizbon N.V.</dd>
            </div>
            <div>
              <dt className="font-semibold text-foreground">Licencia reportada</dt>
              <dd>Curaçao Gaming Authority — OGL/2024/597/0249</dd>
            </div>
          </dl>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Bizbon N.V. y OGL/2024/597/0249 son datos reportados por fuentes externas. JugadaMax no
            confirmó la información directamente en el footer accesible durante esta revisión. No es
            una licencia local mexicana.
          </p>
        </section>

        <section
          aria-labelledby="mostbet-external-heading"
          className="rounded-xl border border-[#0A5A9C]/20 bg-[#031A36]/60 p-4 sm:p-5"
        >
          <h2 id="mostbet-external-heading" className="text-lg font-semibold text-foreground">
            Nota de evaluación externa
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{EXTERNAL_RISK_NOTE}</p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Casino Guru reporta actualmente un Safety Index de 6.7/10, descrito como Above Average.
            AskGamblers publica un CasinoRank editorial de 4/10. Ambas plataformas contienen
            reseñas y reclamaciones de usuarios. JugadaMax asigna independientemente 3.8/5.
          </p>
        </section>

        <VerdictBox verdict={review.verdict} rating={review.rating} />

        <ProsCons pros={review.pros} cons={review.cons} />

        <section aria-labelledby="mostbet-analisis-heading">
          <h2 id="mostbet-analisis-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
          aria-labelledby="mostbet-final-cta-heading"
          className="rounded-xl border border-[#FF6B00]/25 bg-gradient-to-br from-[#031A36] via-[#052B52] to-[#074477] p-5 sm:p-6"
        >
          <h2 id="mostbet-final-cta-heading" className="text-lg font-semibold text-foreground">
            Revisar Mostbet
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Confirma la promoción seleccionada, moneda, pagos, KYC, mercados y reglas de retiro
            directamente en Mostbet antes de depositar o apostar.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={MOSTBET_PLAYERS_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md bg-[#FF6B00] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#FF861A]",
                focusRing,
              )}
            >
              Visitar Mostbet
            </a>
            <Link
              href="/casinos-fiat"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-[#96DB00]/40 px-5 py-2.5 text-sm font-semibold text-[#96DB00] transition-colors hover:bg-[#78C800]/10",
                focusRing,
              )}
            >
              Comparar casinos fiat
            </Link>
          </div>
        </section>

        <section aria-labelledby="mostbet-faq-heading">
          <h2 id="mostbet-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
          description="Información oficial, landing de campaña suministrada, evaluaciones externas y opinión editorial de JugadaMax."
          items={SOURCE_REFERENCES}
        />
      </article>

      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Visitar"
        compactSecondaryLabel="Comparar"
        primaryLabel="Visitar Mostbet"
        primaryHref={MOSTBET_PLAYERS_AFFILIATE_URL}
        secondaryLabel="Comparar"
        secondaryHref="/casinos-fiat"
      />
    </>
  );
}
