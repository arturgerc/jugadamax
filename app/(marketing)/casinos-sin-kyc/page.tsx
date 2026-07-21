import type { Metadata } from "next";
import Link from "next/link";
import { getReviewBySlug } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { AffiliateDisclosure } from "@/components/trust/AffiliateDisclosure";
import { ResponsibleGamblingNotice } from "@/components/trust/ResponsibleGamblingNotice";
import { EthCasinoFeaturedCard } from "@/components/affiliate/EthCasinoFeaturedCard";
import { LtcCasinoFeaturedCard } from "@/components/affiliate/LtcCasinoFeaturedCard";
import { cn, focusRing } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Casinos sin KYC en México: ETH Casino y LTC Casino",
  description:
    "Compara casinos crypto sin KYC para México: registro con email y contraseña, ETH, LTC, Bitcoin, USDT, juegos, retiros, privacidad y riesgos.",
  path: "/casinos-sin-kyc",
});

const FAQ_ITEMS = [
  {
    question: "¿Qué es un casino sin KYC?",
    answer:
      "Es un casino que publica una política de registro sin verificación documental tradicional. En ETH Casino y LTC Casino el flujo descrito usa email y contraseña. Las políticas son del operador y pueden cambiar.",
  },
  {
    question: "¿Sin KYC significa anonimato absoluto?",
    answer:
      "No. Email, IP, dispositivo, wallets y blockchains públicas pueden generar trazabilidad. No-KYC no es licencia mexicana ni invisibilidad técnica.",
  },
  {
    question: "¿Cuál recomienda JugadaMax primero?",
    answer:
      "En este cluster editorial, ETH Casino aparece primero (4.7/5) y LTC Casino segundo (4.6/5). Ambas puntuaciones son opiniones editoriales de JugadaMax.",
  },
  {
    question: "¿Estos casinos aceptan OXXO o SPEI?",
    answer:
      "No se presentan aquí como casinos fiat mexicanos. Su propuesta es crypto-only con pagos desde wallets.",
  },
] as const;

export default function CasinosSinKycPage() {
  const ethReview = getReviewBySlug("ethcasino");
  const ltcReview = getReviewBySlug("ltccasino");
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Casinos sin KYC", path: "/casinos-sin-kyc" },
  ]);

  return (
    <Container className="py-8 sm:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <header className="relative mb-8 overflow-hidden rounded-2xl border border-[#10BBD7]/20 bg-gradient-to-br from-[#080D18] via-[#0D1824] to-[#111417] p-5 sm:p-6 lg:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,187,215,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(122,125,255,0.08),transparent_50%)]"
        />
        <div className="relative space-y-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Casinos sin KYC en México
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Comparamos casinos crypto que publican políticas de registro sin verificación documental.
            ETH Casino y LTC Casino permiten crear una cuenta mediante email y contraseña según sus
            materiales públicos, pero la disponibilidad, controles antifraude, redes, límites y
            retiros dependen de cada operador y de tu jurisdicción.
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Enfoque de la página">
            <li className="inline-flex items-center rounded-full border border-[#21D6EB]/30 bg-[#16394A]/35 px-2.5 py-1 text-xs font-medium text-[#56E8F6]">
              Sin KYC
            </li>
            <li className="inline-flex items-center rounded-full border border-white/10 bg-[#16233f]/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
              Crypto-only
            </li>
            <li className="inline-flex items-center rounded-full border border-white/10 bg-[#16233f]/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
              México / LATAM
            </li>
            <li className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/8 px-2.5 py-1 text-xs font-medium text-emerald-400">
              18+
            </li>
            <li className="inline-flex items-center rounded-full border border-accent/30 bg-accent/8 px-2.5 py-1 text-xs font-medium text-accent">
              Evaluación editorial
            </li>
          </ul>
        </div>
      </header>

      <div className="mb-8 space-y-3">
        <AffiliateDisclosure />
        <ResponsibleGamblingNotice />
      </div>

      <section aria-labelledby="que-significa-sin-kyc" className="mb-8">
        <h2 id="que-significa-sin-kyc" className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
          Qué significa casino sin KYC
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          En este contexto, “sin KYC” describe operadores que declaran no exigir documentos de
          identidad en el registro. No implica invisibilidad técnica, licencia mexicana ni ausencia
          de controles antifraude. Confirma siempre las reglas del dominio de registro.
        </p>
      </section>

      <section aria-labelledby="eth-nokyc-card" className="mb-6">
        <h2 id="eth-nokyc-card" className="sr-only">
          ETH Casino
        </h2>
        <EthCasinoFeaturedCard context="nokyc" />
      </section>

      <section aria-labelledby="ltc-nokyc-card" className="mb-8">
        <h2 id="ltc-nokyc-card" className="sr-only">
          LTC Casino
        </h2>
        <LtcCasinoFeaturedCard context="crypto" className="mt-4" />
      </section>

      <section aria-labelledby="comparacion-resumen" className="mb-8">
        <h2 id="comparacion-resumen" className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
          Resumen comparativo
        </h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="rounded-xl border border-[#10BBD7]/20 bg-[#0D1824]/70 p-5">
            <h3 className="font-semibold text-foreground">ETH Casino</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Valoración editorial JugadaMax: {ethReview?.rating ?? 4.7}/5</li>
              <li>Enfoque Ethereum-first</li>
              <li>Sin KYC según el operador</li>
              <li>Registro con email y contraseña</li>
              <li>11 criptomonedas en los Terms</li>
              <li>Slots, juegos crypto y live casino</li>
            </ul>
            <Link
              href="/reviews/ethcasino"
              className={cn("mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[#56E8F6] underline-offset-2 hover:underline", focusRing)}
            >
              Leer reseña de ETH Casino
            </Link>
          </article>
          <article className="rounded-xl border border-[#2156FF]/20 bg-[#171821]/70 p-5">
            <h3 className="font-semibold text-foreground">LTC Casino</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Valoración editorial JugadaMax: {ltcReview?.rating ?? 4.6}/5</li>
              <li>Enfoque Litecoin</li>
              <li>Sin KYC según el operador</li>
              <li>Registro con email y contraseña</li>
              <li>Múltiples activos crypto</li>
              <li>Slots y juegos crypto</li>
            </ul>
            <Link
              href="/reviews/ltccasino"
              className={cn("mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[#7F8FFF] underline-offset-2 hover:underline", focusRing)}
            >
              Leer reseña de LTC Casino
            </Link>
          </article>
        </div>
      </section>

      <section aria-labelledby="comparacion-registro" className="mb-8">
        <h2 id="comparacion-registro" className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
          Comparación de registro
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Ambos operadores describen un alta con email y contraseña, sin campos de identidad
          documental en el flujo público. ETH Casino añade confirmación de correo y selección de
          criptomoneda preferida según su FAQ. Las reglas exactas pueden variar tras el redirect.
        </p>
      </section>

      <section aria-labelledby="comparacion-crypto" className="mb-8">
        <h2 id="comparacion-crypto" className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
          Comparación de criptomonedas
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          ETH Casino publica soporte para BTC, ETH, XRP, USDT, SOL, BNB, DOGE, ADA, USDC, TRX y LTC.
          LTC Casino también opera en entorno crypto-only con Litecoin como activo central. En ambos
          casos debes verificar red, mínimos y dirección antes de transferir.
        </p>
      </section>

      <section aria-labelledby="comparacion-juegos" className="mb-8">
        <h2 id="comparacion-juegos" className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
          Comparación de juegos
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          ETH Casino cubre slots, Bonus Buy, crash, Plinko, Dice, mesas clásicas, game shows y live
          casino. LTC Casino se orienta a slots, formatos crypto rápidos y live casino según catálogo.
          Ninguno se presenta aquí como sportsbook principal.
        </p>
      </section>

      <section aria-labelledby="comparacion-retiros" className="mb-8">
        <h2 id="comparacion-retiros" className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
          Retiros y límites
        </h2>
        <div className="mt-4 rounded-xl border border-amber-500/25 bg-amber-500/5 p-4 sm:p-5">
          <h3 className="text-sm font-semibold text-foreground">Condiciones importantes (ETH Casino)</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>Requisito 1x de movimiento del depósito antes del retiro</li>
            <li>Posible 10x si la actividad se centra solo en live Roulette y Baccarat</li>
            <li>Hasta 2 retiros por día y 7 por semana</li>
            <li>Límites diarios, semanales y mensuales por red/activo</li>
            <li>Advertencia de precisión de dirección y red</li>
          </ul>
          <p className="mt-3 text-sm text-muted-foreground">
            ETH Casino afirma procesar retiros de forma inmediata; la llegada depende de la red.
            JugadaMax no garantiza retiros instantáneos. LTC Casino declara procesamiento en tiempo
            real con la misma dependencia de blockchain.
          </p>
        </div>
      </section>

      <section aria-labelledby="anonimato-limites" className="mb-8">
        <h2 id="anonimato-limites" className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
          Sin KYC no significa anonimato absoluto
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Sigue existiendo un email, posible registro de IP/dispositivo, trazabilidad en blockchains
          públicas, controles antifraude y aplicación de leyes locales. No-KYC no equivale a licencia
          mexicana ni a ausencia de restricciones de cuenta.
        </p>
      </section>

      <section aria-labelledby="como-evaluamos-nokyc" className="mb-8">
        <h2 id="como-evaluamos-nokyc" className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
          Cómo evalúa JugadaMax los casinos sin KYC
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          Priorizamos atribución de políticas del operador, claridad de registro, amplitud crypto,
          catálogo, límites de retiro, cautelas de licencia y evaluaciones externas. El estatus de
          afiliado no determina la puntuación editorial. Consulta la{" "}
          <Link href="/como-evaluamos" className={cn("text-primary underline-offset-2 hover:underline", focusRing)}>
            metodología
          </Link>
          .
        </p>
      </section>

      <section aria-labelledby="faq-sin-kyc" className="mb-8">
        <h2 id="faq-sin-kyc" className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
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

      <section aria-labelledby="enlaces-internos" className="mb-4">
        <h2 id="enlaces-internos" className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
          Enlaces relacionados
        </h2>
        <ul className="mt-4 flex flex-wrap gap-3 text-sm">
          <li>
            <Link href="/reviews/ethcasino" className={cn("font-medium text-[#56E8F6] underline-offset-2 hover:underline", focusRing)}>
              Reseña ETH Casino
            </Link>
          </li>
          <li>
            <Link href="/reviews/ltccasino" className={cn("font-medium text-[#7F8FFF] underline-offset-2 hover:underline", focusRing)}>
              Reseña LTC Casino
            </Link>
          </li>
          <li>
            <Link href="/casinos-crypto" className={cn("font-medium text-primary underline-offset-2 hover:underline", focusRing)}>
              Casinos crypto
            </Link>
          </li>
          <li>
            <Link href="/como-evaluamos" className={cn("font-medium text-primary underline-offset-2 hover:underline", focusRing)}>
              Cómo evaluamos
            </Link>
          </li>
          <li>
            <Link href="/juego-responsable" className={cn("font-medium text-primary underline-offset-2 hover:underline", focusRing)}>
              Juego responsable
            </Link>
          </li>
        </ul>
      </section>
    </Container>
  );
}
