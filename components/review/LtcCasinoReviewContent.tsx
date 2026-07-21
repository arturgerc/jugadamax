import Link from "next/link";
import type { Author, Casino, Review } from "@/types/content";
import {
  LTCCASINO_AFFILIATE_URL,
  LTCCASINO_PROMO_CODE,
} from "@/lib/affiliate/constants";
import { LtcCasinoFeaturedCard } from "@/components/affiliate/LtcCasinoFeaturedCard";
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
  "LTC Casino es un casino crypto internacional. JugadaMax no afirma licencia local mexicana. Disponibilidad, registro, pagos, límites, controles antifraude y retiros dependen de tu ubicación, cuenta y reglas vigentes del dominio de registro.";

const QUICK_SUMMARY = [
  { title: "Tipo", text: "Casino crypto sin KYC" },
  { title: "Registro", text: "Email + contraseña" },
  { title: "Pagos", text: "LTC, BTC, ETH, USDT y otras crypto" },
  { title: "Principal precaución", text: "No-KYC no equivale a anonimato absoluto" },
] as const;

const NO_KYC_CARDS = [
  {
    title: "Sin documentos",
    text: "El FAQ público afirma que el operador no realiza verificación documental.",
  },
  {
    title: "Registro",
    text: "El flujo descrito utiliza email y contraseña.",
  },
  {
    title: "Wallets",
    text: "Los pagos se realizan mediante criptomonedas y redes blockchain.",
  },
  {
    title: "Política del operador",
    text: "Es una política publicada por LTC Casino y puede cambiar.",
  },
] as const;

const PRIVACY_ADVANTAGES = [
  "Sin carga de documentos de identidad según el operador",
  "Sin datos de tarjeta bancaria en el flujo crypto-only",
  "Depósitos y retiros basados en wallets",
  "Registro con información personal limitada",
] as const;

const PRIVACY_LIMITS = [
  "El email sigue siendo un identificador",
  "IP y datos de dispositivo pueden procesarse",
  "Las blockchains públicas conservan transacciones",
  "Los historiales de wallet pueden analizarse",
  "Las leyes locales siguen aplicando",
  "No-KYC no es una licencia mexicana",
] as const;

const PAYMENT_CARDS = [
  { title: "Litecoin", text: "Activo central de la marca; confirma red y mínimos." },
  { title: "Bitcoin", text: "Depósitos y retiros sujetos a confirmaciones de red." },
  { title: "Ethereum", text: "Verifica red y dirección antes de transferir." },
  { title: "USDT", text: "Stablecoin; confirma red (ERC-20, TRC-20 u otra)." },
  { title: "XRP / USDC", text: "Activos adicionales según cajero y cuenta." },
  { title: "SOL / BNB / DOGE / ADA / TRX", text: "Disponibilidad variable; revisa el cajero." },
  { title: "Selección de red", text: "Una red incorrecta puede provocar pérdida irreversible." },
  { title: "Seguridad de wallet", text: "Protege claves, seed phrases y direcciones de destino." },
] as const;

const GAME_CARDS = [
  { title: "Slots", text: "Catálogo de tragamonedas según proveedores habilitados." },
  { title: "Bonus Buy", text: "Categoría de compra de funciones en títulos elegibles." },
  { title: "Plinko", text: "Juego instantáneo con reglas y límites según términos." },
  { title: "Crash", text: "Formato rápido sujeto a límites y disponibilidad." },
  { title: "Dice", text: "Juego de predicción con riesgo variable." },
  { title: "Mines", text: "Formato instantáneo según catálogo vigente." },
  { title: "Blackjack", text: "Mesas RNG o live donde el operador las habilita." },
  { title: "Ruleta", text: "Variantes de casino según región y catálogo." },
  { title: "Baccarat", text: "Mesas disponibles según configuración del lobby." },
  { title: "Live Casino", text: "Mesas en vivo sujetas a catálogo y horarios." },
  { title: "Juegos crypto", text: "Formatos orientados a sesiones rápidas con crypto." },
] as const;

const WITHDRAWAL_CARDS = [
  {
    title: "Procesamiento",
    text: "Procesamiento en tiempo real según el operador.",
  },
  {
    title: "Blockchain",
    text: "Confirmaciones y congestión dependen de la red.",
  },
  {
    title: "Wallet",
    text: "Comprueba dirección y activo antes de confirmar.",
  },
  {
    title: "Límites",
    text: "Revisa mínimos, máximos y reglas vigentes en el cajero.",
  },
] as const;

const ANALYSIS_PARAGRAPHS_BASE = [
  "LTC Casino se clasifica como casino crypto sin KYC porque su FAQ público declara que no realiza verificación documental y su material de registro describe un flujo con email y contraseña. JugadaMax presenta esas afirmaciones con atribución, no como prueba técnica independiente de que la verificación sea imposible.",
  "El operador atrae a usuarios que priorizan privacidad, pagos desde wallets y acceso sencillo frente a bonos. Su propuesta no gira alrededor de un welcome bonus: el código j6ji2sb7n identifica la campaña de registro y no garantiza una recompensa.",
  "Sin KYC no significa invisibilidad técnica absoluta. El email, la IP, el dispositivo, las direcciones de wallet y el historial en blockchains públicas pueden generar trazabilidad. Los sistemas antifraude y las leyes locales siguen aplicando.",
  "El FAQ público afirma que no limita el número de cuentas. JugadaMax no interpreta eso como autorización para evadir restricciones legales, límites, autoexclusión, controles de seguridad o reglas del dominio de registro.",
] as const;

function buildAnalysisParagraphs(rating: number): string[] {
  return [
    ...ANALYSIS_PARAGRAPHS_BASE,
    `Los pagos son crypto-only (LTC, BTC, ETH, USDT y otras). Confirma activo, red y dirección: las transferencias blockchain normalmente no se revierten. LTC Casino afirma procesar retiros en tiempo real; la llegada a la wallet depende de la red. JugadaMax lo valora con ${rating}/5 por privacidad, registro sin KYC según la política pública del operador, compatibilidad crypto y catálogo de juegos — con cautela sobre licencia local, anonimato técnico y condiciones de retiro. Esta es opinión editorial, no una puntuación agregada de usuarios. 18+.`,
  ];
}

const FAQ_ITEMS = [
  {
    question: "¿LTC Casino requiere KYC?",
    answer:
      "Según el FAQ público del operador, LTC Casino declara que no realiza verificación. Confirma siempre las reglas mostradas en el dominio de registro, porque las políticas pueden cambiar.",
  },
  {
    question: "¿LTC Casino pide documentos?",
    answer:
      "El flujo de registro descrito utiliza email y contraseña sin campos de identidad personal. JugadaMax atribuye esa descripción al operador y recomienda verificarla en el momento del alta.",
  },
  {
    question: "¿Cómo se crea una cuenta?",
    answer:
      "Según el material público del operador, el registro se completa con email y contraseña. Después del redirect confirma el dominio, términos y disponibilidad desde tu jurisdicción.",
  },
  {
    question: "¿LTC Casino es completamente anónimo?",
    answer:
      "El operador promociona un modelo sin KYC, pero email, IP, dispositivo, wallets y registros blockchain pueden generar trazabilidad. No debe interpretarse como invisibilidad técnica absoluta.",
  },
  {
    question: "¿Puedo tener varias cuentas?",
    answer:
      "El FAQ público afirma que LTC Casino no limita el número de cuentas. JugadaMax no recomienda usar varias cuentas para evadir restricciones legales, límites, autoexclusión o controles de seguridad.",
  },
  {
    question: "¿Cuál es el código de LTC Casino?",
    answer: `El código de registro/campaña confirmado para JugadaMax es ${LTCCASINO_PROMO_CODE}.`,
  },
  {
    question: `¿El código ${LTCCASINO_PROMO_CODE} da un bono?`,
    answer:
      "JugadaMax no promociona un bono de bienvenida de LTC Casino. El código j6ji2sb7n identifica la campaña de registro y no garantiza una recompensa.",
  },
  {
    question: "¿LTC Casino acepta Litecoin?",
    answer:
      "Sí. Litecoin forma parte central de su identidad crypto. Confirma red, mínimos y dirección en el cajero antes de depositar.",
  },
  {
    question: "¿Qué otras criptomonedas acepta?",
    answer:
      "Además de LTC, el operador muestra soporte para BTC, ETH, XRP, USDT, SOL, BNB, DOGE, ADA, USDC y TRX según cuenta. Verifica activos activos en el cajero.",
  },
  {
    question: "¿LTC Casino tiene slots y live casino?",
    answer:
      "Sí. Ofrece slots, live casino, Plinko, Crash, Dice, Mines y mesas clásicas según catálogo. El número exacto de títulos puede cambiar.",
  },
  {
    question: "¿Cuánto tardan los retiros?",
    answer:
      "LTC Casino afirma que procesa las solicitudes de retiro en tiempo real; la llegada a la wallet depende de la velocidad de la blockchain. Red, congestión, activo, límites y seguridad de cuenta pueden afectar el resultado.",
  },
  {
    question: "¿LTC Casino está disponible en México?",
    answer:
      "JugadaMax no garantiza disponibilidad universal desde México. Confirma acceso, restricciones regionales y términos después del redirect.",
  },
  {
    question: "¿LTC Casino tiene licencia mexicana?",
    answer:
      "No. JugadaMax no afirma una licencia local mexicana ni autorización SEGOB. La licencia offshore declarada no ha sido verificada independientemente en esta integración.",
  },
  {
    question: "¿LTC Casino tiene bono de bienvenida?",
    answer:
      "JugadaMax no promociona un bono de bienvenida de LTC Casino. El código j6ji2sb7n identifica la campaña de registro y no garantiza una recompensa.",
  },
] as const;

const SOURCE_REFERENCES: SourceReference[] = [
  {
    label: "FAQ del operador — verificación y cuentas",
    href: "https://www.ltccasino.io/faq/your-account/how-do-i-block-my-account",
    note: "Declaraciones publicadas por LTC Casino sobre verificación y cuentas.",
  },
  {
    label: "FAQ del operador — procesamiento de retiros",
    href: "https://www.ltccasino.io/faq/withdrawals/how-long-do-withdrawals-take",
  },
  {
    label: "Información de registro / privacidad del operador",
    href: "https://www.ltccasino.io/cryptocasino/no-registration-online-casinos/",
  },
  {
    label: "Información de dominio / mirror del operador",
    href: "https://www.ltccasino.io/uk/ltccasinocom-cant-log-in",
  },
  { label: "TTR Blog", href: "https://ttrblog.io/" },
  { label: "Kick: LTCCASINO-COM", href: "https://kick.com/ltccasino-com" },
  { label: "Metodología editorial JugadaMax", href: "/como-evaluamos" },
  {
    label: "Enlace de registro suministrado por el partner",
    note: "URL afiliada de campaña; no garantiza bono ni disponibilidad universal.",
  },
];

export function LtcCasinoReviewContent({
  review,
  casino,
  author,
}: {
  review: Review;
  casino: Casino;
  author: Author;
}) {
  const analysisParagraphs = buildAnalysisParagraphs(review.rating);

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
          <LtcCasinoFeaturedCard context="review" />
        </div>

        <section id="resumen-ltccasino" aria-labelledby="ltccasino-resumen-heading">
          <h2 id="ltccasino-resumen-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Resumen rápido
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {QUICK_SUMMARY.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#2156FF]/20 bg-[#171821]/80 p-3"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-[#7F8FFF]">
                  {card.title}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Código de registro:{" "}
            <span className="font-mono font-semibold text-foreground">{LTCCASINO_PROMO_CODE}</span>
            . No garantiza un bono.
          </p>
        </section>

        <section aria-labelledby="ltccasino-nokyc-heading">
          <h2 id="ltccasino-nokyc-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            ¿Qué significa que LTC Casino sea sin KYC?
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {NO_KYC_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            LTC Casino declara que no realiza verificación KYC y que su registro utiliza email y
            contraseña. Su FAQ público afirma que no limita el número de cuentas por jugador. Estas
            son políticas publicadas por el operador y pueden cambiar. Confirma siempre las reglas
            mostradas en el dominio de registro antes de depositar.
          </p>
        </section>

        <section aria-labelledby="ltccasino-privacy-heading">
          <h2 id="ltccasino-privacy-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Privacidad: qué protege y qué no
          </h2>
          <p className="mt-2 text-sm font-medium text-[#7F8FFF]">
            Sin KYC no significa invisibilidad técnica absoluta.
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-[#2156FF]/20 bg-[#171821]/70 p-4">
              <h3 className="text-sm font-semibold text-foreground">Ventajas de privacidad</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {PRIVACY_ADVANTAGES.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-[#4B6FFF]">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-border/60 bg-card p-4">
              <h3 className="text-sm font-semibold text-foreground">Límites de la privacidad</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {PRIVACY_LIMITS.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-amber-400">
                      !
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section aria-labelledby="ltccasino-accounts-heading">
          <h2 id="ltccasino-accounts-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            ¿LTC Casino permite varias cuentas?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            El FAQ público afirma que LTC Casino no limita el número de cuentas por jugador.
            JugadaMax recomienda confirmar esta regla en el dominio de registro, ya que las
            políticas pueden cambiar.
          </p>
          <div
            role="note"
            className="mt-4 rounded-lg border border-amber-500/25 bg-amber-500/5 px-4 py-3 text-sm leading-relaxed text-muted-foreground"
          >
            Varias cuentas no deben utilizarse para evadir restricciones legales, límites, controles
            de seguridad, autoexclusión o reglas vigentes. El FAQ público de LTC Casino afirma que
            no limita el número de cuentas. JugadaMax no interpreta esto como autorización para
            evadir restricciones legales, límites, autoexclusión, controles de seguridad o reglas
            vigentes del dominio de registro.
          </div>
        </section>

        <section aria-labelledby="ltccasino-payments-heading">
          <h2 id="ltccasino-payments-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Criptomonedas soportadas
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {PAYMENT_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Comprueba activo, red y dirección. Las transferencias blockchain normalmente no pueden
            revertirse.
          </p>
        </section>

        <section aria-labelledby="ltccasino-games-heading">
          <h2 id="ltccasino-games-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Juegos de casino
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {GAME_CARDS.map((card) => (
              <div key={card.title} className="rounded-xl border border-border/60 bg-card p-4">
                <h3 className="text-sm font-semibold text-foreground">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            LTC Casino no se presenta aquí como sportsbook. El catálogo exacto puede cambiar por
            región y configuración del lobby.
          </p>
        </section>

        <section aria-labelledby="ltccasino-withdrawals-heading">
          <h2 id="ltccasino-withdrawals-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Retiros crypto
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            El FAQ público afirma que las solicitudes se procesan en tiempo real. La llegada a la
            wallet depende de la velocidad de la blockchain. Red, congestión, activo, límites,
            seguridad de cuenta y reglas vigentes pueden afectar el resultado.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {WITHDRAWAL_CARDS.map((card) => (
              <div
                key={card.title}
                className="rounded-xl border border-[#2156FF]/20 bg-[#1D1F2A]/80 p-4"
              >
                <h3 className="text-sm font-semibold text-[#7F8FFF]">{card.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="ltccasino-security-heading">
          <h2 id="ltccasino-security-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Seguridad y juego responsable
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Protege tu email, contraseña y wallets. Un modelo sin KYC no elimina el riesgo de
            pérdida, phishing o mal uso de cuentas. Juega solo si eres mayor de 18 años y establece
            límites personales.
          </p>
        </section>

        <section aria-labelledby="ltccasino-licence-heading">
          <h2 id="ltccasino-licence-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Licencia y jurisdicción
          </h2>
          <div className="mt-4 rounded-xl border border-border/60 bg-card p-4 sm:p-5">
            <p className="text-sm leading-relaxed text-muted-foreground">
              Licencia no confirmada en el dominio de registro revisado desde este entorno de
              integración. No es una licencia local mexicana. JugadaMax no afirma autorización SEGOB
              ni garantiza el estado vigente de una licencia offshore declarada por el operador.
              Revisa footer, términos y jurisdicción después del redirect.
            </p>
          </div>
        </section>

        <VerdictBox verdict={review.verdict} rating={review.rating} />
        <ProsCons pros={review.pros} cons={review.cons} />

        <section aria-labelledby="ltccasino-analysis-heading">
          <h2 id="ltccasino-analysis-heading" className="text-lg font-semibold text-foreground sm:text-xl">
            Análisis editorial
          </h2>
          <div className="mt-4 space-y-4">
            {analysisParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)} className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="ltccasino-final-cta-heading"
          className="rounded-xl border border-[#2156FF]/25 bg-gradient-to-br from-[#171821] via-[#1D1F2A] to-[#252836] p-5 sm:p-6"
        >
          <h2 id="ltccasino-final-cta-heading" className="text-lg font-semibold text-foreground">
            Registrarse en LTC Casino
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Confirma el dominio de destino, política sin KYC, criptomoneda, red, límites y reglas de
            retiro antes de depositar.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a
              href={LTCCASINO_AFFILIATE_URL}
              target="_blank"
              rel={AFFILIATE_REL}
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md bg-[#2156FF] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#4B6FFF]",
                focusRing,
              )}
            >
              Registrarse en LTC Casino
            </a>
            <Link
              href="/casinos-sin-kyc"
              className={cn(
                "inline-flex min-h-11 items-center justify-center rounded-md border border-[#4B6FFF]/40 px-5 py-2.5 text-sm font-semibold text-[#7F8FFF] transition-colors hover:bg-[#1237FF]/15",
                focusRing,
              )}
            >
              Comparar casinos sin verificación
            </Link>
          </div>
        </section>

        <section aria-labelledby="ltccasino-faq-heading">
          <h2 id="ltccasino-faq-heading" className="text-lg font-semibold text-foreground sm:text-xl">
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
          description="Declaraciones publicadas por el operador, enlaces relacionados, metodología editorial y enlace de campaña afiliada."
          items={SOURCE_REFERENCES}
        />
      </article>

      <MobileStickyOfferCta
        showAfterId="review-primary-offer"
        compactPrimaryLabel="Registrarse"
        compactSecondaryLabel="Comparar"
        primaryLabel="Registrarse"
        primaryHref={LTCCASINO_AFFILIATE_URL}
        secondaryLabel="Comparar"
        secondaryHref="/casinos-sin-kyc"
      />
    </>
  );
}
