import type { Metadata } from "next";
import Link from "next/link";
import { getReviewBySlug } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { AffiliateDisclosure } from "@/components/trust/AffiliateDisclosure";
import { ResponsibleGamblingNotice } from "@/components/trust/ResponsibleGamblingNotice";
import { AnonymousCasinoFeaturedCard } from "@/components/affiliate/AnonymousCasinoFeaturedCard";
import { EthCasinoFeaturedCard } from "@/components/affiliate/EthCasinoFeaturedCard";
import { LtcCasinoFeaturedCard } from "@/components/affiliate/LtcCasinoFeaturedCard";
import { cn, focusRing } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Casinos sin KYC en México: Anonymous, ETH y LTC",
  description:
    "Compara Anonymous Casino, ETH Casino y LTC Casino: registro con email y contraseña, pagos crypto, juegos, retiros, privacidad, límites y riesgos.",
  path: "/casinos-sin-kyc",
});

const FAQ_ITEMS = [
  {
    question: "¿Qué es un casino sin KYC?",
    answer:
      "Es un casino que publica una política de registro sin verificación documental tradicional. En Anonymous Casino, ETH Casino y LTC Casino el flujo descrito usa email y contraseña. Las políticas son del operador y pueden cambiar.",
  },
  {
    question: "¿Sin KYC significa anonimato absoluto?",
    answer:
      "No. Email, IP, dispositivo, wallets y blockchains públicas pueden generar trazabilidad. No-KYC no es licencia mexicana ni invisibilidad técnica.",
  },
  {
    question: "¿Cuál recomienda JugadaMax primero?",
    answer:
      "En este cluster editorial, Anonymous Casino aparece primero (4.9/5), seguido de ETH Casino (4.7/5) y LTC Casino (4.6/5). Las puntuaciones son opiniones editoriales de JugadaMax.",
  },
  {
    question: "¿Anonymous Casino y CryptoCasino.CC son lo mismo?",
    answer:
      "Sí. Anonymous Casino es la marca promocional del casino disponible en CryptoCasino.CC.",
  },
  {
    question: "¿Estos casinos aceptan OXXO o SPEI?",
    answer:
      "No se presentan aquí como casinos fiat mexicanos. Su propuesta es crypto-only con pagos desde wallets.",
  },
] as const;

export default function CasinosSinKycPage() {
  const anonymousReview = getReviewBySlug("cryptocasino");
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

      <header className="relative mb-8 overflow-hidden rounded-2xl border border-[#E0001B]/25 bg-gradient-to-br from-[#050607] via-[#0B0D12] to-[#111417] p-5 sm:p-6 lg:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(224,0,27,0.14),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(16,187,215,0.08),transparent_50%)]"
        />
        <div className="relative space-y-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Casinos sin KYC en México
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Comparamos casinos crypto que publican políticas de registro sin verificación documental.
            Anonymous Casino (CryptoCasino.CC), ETH Casino y LTC Casino permiten crear una cuenta
            mediante email y contraseña según sus materiales públicos, pero la disponibilidad,
            controles antifraude, redes, límites y retiros dependen de cada operador y de tu
            jurisdicción.
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Enfoque de la página">
            <li className="inline-flex items-center rounded-full border border-[#FF1C24]/35 bg-[#B30016]/20 px-2.5 py-1 text-xs font-medium text-[#FF4A2E]">
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

      <section aria-labelledby="anonymous-nokyc-card" className="mb-6">
        <h2 id="anonymous-nokyc-card" className="sr-only">
          Anonymous Casino
        </h2>
        <AnonymousCasinoFeaturedCard context="nokyc" />
      </section>

      <section aria-labelledby="eth-nokyc-card" className="mb-6">
        <h2 id="eth-nokyc-card" className="sr-only">
          ETH Casino
        </h2>
        <EthCasinoFeaturedCard context="nokyc" className="mt-4" />
      </section>

      <section aria-labelledby="ltc-nokyc-card" className="mb-8">
        <h2 id="ltc-nokyc-card" className="sr-only">
          LTC Casino
        </h2>
        <LtcCasinoFeaturedCard context="crypto" className="mt-4" />
      </section>

      <section aria-labelledby="cual-elegir" className="mb-8">
        <h2 id="cual-elegir" className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
          ¿Cuál elegir?
        </h2>
        <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
          <li>
            <span className="font-semibold text-foreground">Anonymous Casino:</span> elección
            editorial más alta de JugadaMax para cobertura no-KYC amplia en CryptoCasino.CC.
          </li>
          <li>
            <span className="font-semibold text-foreground">ETH Casino:</span> mejor encaje para
            usuarios centrados en Ethereum.
          </li>
          <li>
            <span className="font-semibold text-foreground">LTC Casino:</span> mejor encaje para
            usuarios centrados en Litecoin.
          </li>
        </ul>
        <p className="mt-3 text-sm text-muted-foreground">
          Las puntuaciones son opiniones editoriales de JugadaMax y no garantías de pago, licencia o
          anonimato.
        </p>
      </section>

      <section aria-labelledby="comparacion-resumen" className="mb-8">
        <h2 id="comparacion-resumen" className="text-lg font-bold tracking-tight text-foreground sm:text-xl">
          Resumen comparativo
        </h2>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <article className="rounded-xl border border-[#E0001B]/25 bg-[#0B0D12]/70 p-5">
            <h3 className="font-semibold text-foreground">Anonymous Casino</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li>Valoración editorial JugadaMax: {anonymousReview?.rating ?? 4.9}/5</li>
              <li>Opera en CryptoCasino.CC</li>
              <li>Posicionamiento sin KYC</li>
              <li>Registro con email y contraseña</li>
              <li>8 criptomonedas confirmadas</li>
              <li>Slots, crypto games y live casino</li>
              <li>Varias cuentas según Terms, con cautela de abuso</li>
            </ul>
            <Link
              href="/reviews/cryptocasino"
              className={cn("mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-[#FF4A2E] underline-offset-2 hover:underline", focusRing)}
            >
              Leer reseña de Anonymous Casino
            </Link>
          </article>
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
            <Link href="/reviews/cryptocasino" className={cn("font-medium text-[#FF4A2E] underline-offset-2 hover:underline", focusRing)}>
              Reseña Anonymous Casino
            </Link>
          </li>
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
