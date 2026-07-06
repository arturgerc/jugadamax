import type { Metadata } from "next";
import Link from "next/link";
import type { Casino } from "@/types/content";
import { getCasinosByVertical } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { RankingList } from "@/components/ranking/RankingList";
import { ComparisonTable } from "@/components/comparison/ComparisonTable";
import { AffiliateDisclosure } from "@/components/trust/AffiliateDisclosure";
import { ResponsibleGamblingNotice } from "@/components/trust/ResponsibleGamblingNotice";
import { CryptoCasinoInfoSections } from "@/components/verticals/CryptoCasinoInfoSections";

export const metadata: Metadata = buildMetadata({
  title: "Mejores Casinos Crypto en México",
  description:
    "Ranking de los mejores casinos crypto en México: bonos, métodos de pago en criptomonedas y evaluación editorial. Con divulgación de afiliados y juego responsable +18.",
  path: "/casinos-crypto",
  languageAlternates: {
    "es-MX": "/casinos-crypto",
    en: "/en/casinos-crypto",
  },
});

const SPANISH_CRYPTO_RANKING_ORDER = [
  "stake",
  "bitcasino",
  "500-casino",
  "roobet",
  "cryptocasino",
  "gamdom",
  "ethcasino",
  "ltccasino",
  "mellstroy",
] as const;

function rankSpanishCryptoCasinos(casinos: Casino[]): Casino[] {
  return casinos
    .map((casino) => {
      const rankIndex = SPANISH_CRYPTO_RANKING_ORDER.indexOf(
        casino.id as (typeof SPANISH_CRYPTO_RANKING_ORDER)[number],
      );
      const rank = rankIndex === -1 ? casino.rankByVertical["crypto-casino"] : rankIndex + 1;

      return {
        ...casino,
        rankByVertical: {
          ...casino.rankByVertical,
          "crypto-casino": rank,
        },
      };
    })
    .sort(
      (a, b) =>
        (a.rankByVertical["crypto-casino"] ?? 999) -
        (b.rankByVertical["crypto-casino"] ?? 999),
    );
}

const affiliateCryptoCasinos: Casino[] = [
  {
    id: "500-casino",
    slug: "500-casino",
    name: "500 Casino",
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 3 },
    affiliateUrl: "https://500.casino/r/ARTURGERC",
    summary:
      "Casino crypto internacional con programa de referidos activo. La disponibilidad, métodos de pago, bonos, verificación y retiros dependen de tu jurisdicción y de los términos oficiales del operador.",
    locale: "es-MX",
  },
  {
    id: "roobet",
    slug: "roobet",
    name: "Roobet",
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 4 },
    affiliateUrl: "https://roobet.com/?ref=arturgerc",
    summary:
      "Casino crypto internacional con registro por referido activo y aprobación de afiliado pendiente. Revisa disponibilidad regional, métodos de pago, bonos, verificación y condiciones oficiales antes de registrarte.",
    locale: "es-MX",
  },
  {
    id: "gamdom",
    slug: "gamdom",
    name: "Gamdom",
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 6 },
    affiliateUrl: "https://gamdom.com/r/arturgerc",
    summary:
      "Operador crypto internacional incluido como candidato editorial. Antes de usarlo, revisa términos oficiales, disponibilidad, métodos de pago, reglas de cuenta, bonos y requisitos de verificación.",
    locale: "es-MX",
  },
  {
    id: "mellstroy",
    slug: "mellstroy",
    name: "Mellstroy / MellAff",
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 9 },
    affiliateUrl: "https://mell9382.live/?p=etp3",
    summary:
      "Operador crypto de mayor riesgo editorial. JugadaMax lo coloca en posición baja y recomienda revisar con cuidado disponibilidad, términos, pagos, bonos y verificación antes de registrarte.",
    locale: "es-MX",
  },
];

function uniqueCryptoPayments(casinos: Casino[]) {
  const names = new Set<string>();
  for (const casino of casinos) {
    for (const p of casino.payments ?? []) {
      if (p.kind === "crypto") names.add(p.name);
    }
  }
  return [...names];
}

export default function CryptoCasinosPage() {
  const editorialCasinos = getCasinosByVertical("crypto-casino");
  const casinos = rankSpanishCryptoCasinos([...editorialCasinos, ...affiliateCryptoCasinos]);
  const cryptoPayments = uniqueCryptoPayments(casinos);
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Casinos Crypto", path: "/casinos-crypto" },
  ]);

  return (
    <Container className="py-8 sm:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Vertical intro */}
      <header className="relative mb-8 overflow-hidden rounded-2xl border border-white/10 bg-card p-5 sm:p-6 lg:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.06),transparent_55%)]"
        />
        <div className="relative space-y-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Mejores Casinos Crypto en México
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Comparamos casinos con criptomonedas para jugadores en México según seguridad, métodos de
            pago, bonos informados por el operador y experiencia de usuario.
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Enfoque de la página">
            <li className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              Bitcoin · Ethereum · USDT
            </li>
            <li className="inline-flex items-center rounded-full border border-white/10 bg-[#16233f]/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
              México
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
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          La disponibilidad varía según tu jurisdicción y los términos oficiales del operador.
          Métodos de pago, bonos, verificación y retiros pueden cambiar sin aviso. Revisa las leyes
          locales y las condiciones vigentes antes de registrarte.
        </p>
      </div>

      <section aria-label="Ranking de casinos crypto" className="mb-6">
        <RankingList casinos={casinos} vertical="crypto-casino" />
      </section>

      <p className="mb-10 max-w-3xl text-sm leading-relaxed text-muted-foreground">
        El orden se basa en nuestra{" "}
        <Link
          href="/como-evaluamos"
          className="font-medium text-primary underline underline-offset-2 hover:text-[var(--jm-gold-strong)]"
        >
          metodología editorial
        </Link>
        . Las promociones y condiciones pueden cambiar; verifica siempre la oferta vigente en el
        sitio del operador.
      </p>

      <section aria-labelledby="comparativa-crypto-heading" className="mb-12 sm:mb-14">
        <h2
          id="comparativa-crypto-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Comparativa de casinos crypto
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          Resumen de operadores, bonos informados y métodos de pago disponibles.
        </p>
        <div className="mt-5 min-w-0 max-w-full">
          <ComparisonTable casinos={casinos} vertical="crypto-casino" />
        </div>
      </section>

      <CryptoCasinoInfoSections paymentMethods={cryptoPayments} />
    </Container>
  );
}
