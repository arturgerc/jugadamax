import type { Metadata } from "next";
import Link from "next/link";
import type { Casino } from "@/types/content";
import { getCasinosByVertical } from "@/lib/content";
import { filterCasinosForSurface } from "@/content/operators/status";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { ComparisonTable } from "@/components/comparison/ComparisonTable";
import { AffiliateDisclosure } from "@/components/trust/AffiliateDisclosure";
import { ResponsibleGamblingNotice } from "@/components/trust/ResponsibleGamblingNotice";
import { CryptoCasinoInfoSections } from "@/components/verticals/CryptoCasinoInfoSections";
import { OfferCard } from "@/components/affiliate/OfferCard";
import {
  BETFURY_AFFILIATE_URL,
  BCGAME_MX_OFFICIAL_URL,
  FIVEHUNDRED_CASINO_GLOBAL_AFFILIATE_URL,
  GAMDOM_GLOBAL_AFFILIATE_URL,
  MELLSTROY_GLOBAL_AFFILIATE_URL,
  RAINBET_REFERRAL_URL,
  ROOBET_GLOBAL_AFFILIATE_URL,
  STAKE_MX_OFFICIAL_URL,
} from "@/lib/affiliate/constants";

export const metadata: Metadata = buildMetadata({
  title: "Mejores casinos crypto en México",
  description:
    "Compara casinos crypto, Bitcoin, USDT, bonos, métodos de pago y términos oficiales para México y LATAM. 18+ | Juega con responsabilidad.",
  path: "/casinos-crypto",
  languageAlternates: {
    "es-MX": "/casinos-crypto",
    en: "/en/casinos-crypto",
  },
});

const SPANISH_CRYPTO_RANKING_ORDER = [
  "betfury",
  "500-casino",
  "gamdom",
  "rainbet",
  "roobet",
  "stake",
  "mellstroy",
  "bcgame",
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
    id: "betfury",
    slug: "betfury",
    name: "BetFury",
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 1 },
    affiliateUrl: BETFURY_AFFILIATE_URL,
    logo: {
      src: "/operators/betfury.svg",
      alt: "BetFury",
      width: 80,
      height: 40,
    },
    summary:
      "Candidato de casino crypto y casino gamificado. Revisa promociones, términos, requisitos de apuesta, verificación y jurisdicción antes de registrarte.",
    locale: "es-MX",
  },
  {
    id: "500-casino",
    slug: "500-casino",
    name: "500 Casino",
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 2 },
    affiliateUrl: FIVEHUNDRED_CASINO_GLOBAL_AFFILIATE_URL,
    summary:
      "Candidato de casino crypto para México/LATAM. Revisa términos, disponibilidad, verificación y métodos de pago antes de registrarte.",
    locale: "es-MX",
  },
  {
    id: "gamdom",
    slug: "gamdom",
    name: "Gamdom",
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 3 },
    affiliateUrl: GAMDOM_GLOBAL_AFFILIATE_URL,
    summary:
      "Candidato de casino crypto internacional. Revisa disponibilidad, métodos de pago, límites y verificación antes de registrarte.",
    locale: "es-MX",
  },
  {
    id: "rainbet",
    slug: "rainbet",
    name: "Rainbet",
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 4 },
    affiliateUrl: RAINBET_REFERRAL_URL,
    logo: {
      src: "/operators/rainbet.png",
      alt: "Rainbet",
      width: 80,
      height: 40,
    },
    summary:
      "Rainbet es un casino crypto internacional con slots, live casino, sportsbook y Originals. Candidato de comparación por debajo de BetFury, 500 Casino y Gamdom; revisa promociones, pagos, verificación y jurisdicción antes de registrarte.",
    locale: "es-MX",
  },
  {
    id: "roobet",
    slug: "roobet",
    name: "Roobet",
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 5 },
    affiliateUrl: ROOBET_GLOBAL_AFFILIATE_URL,
    summary:
      "Candidato de casino crypto internacional. El enlace de referido está disponible mientras la campaña de afiliado sigue pendiente; revisa términos y disponibilidad antes de registrarte.",
    locale: "es-MX",
  },
  {
    id: "stake",
    slug: "stake",
    name: "Stake",
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 6 },
    summary:
      "Stake se muestra como operador crypto/global para comparar. Disponibilidad, bonos, pagos y verificación dependen de los términos oficiales y de tu jurisdicción.",
    locale: "es-MX",
  },
  {
    id: "mellstroy",
    slug: "mellstroy",
    name: "Mellstroy / MellAff",
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 7 },
    affiliateUrl: MELLSTROY_GLOBAL_AFFILIATE_URL,
    summary:
      "Candidato de casino crypto/social casino internacional para tráfico LATAM. Revisa términos oficiales y disponibilidad antes de registrarte.",
    locale: "es-MX",
  },
  {
    id: "bcgame",
    slug: "bcgame",
    name: "BC.Game",
    verticals: ["crypto-casino"],
    rankByVertical: { "crypto-casino": 8 },
    summary:
      "BC.Game se incluye como comparación editorial para usuarios que revisan operadores crypto. JugadaMax no tiene una campaña afiliada confirmada para México; revisa términos oficiales, jurisdicción, verificación, pagos y límites antes de registrarte.",
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
  // Monetized ranking = active affiliate/referral partners only.
  const casinos = rankSpanishCryptoCasinos(affiliateCryptoCasinos);
  // Editorial catalogue is still used for the educational payment-method section.
  const editorialCasinos = filterCasinosForSurface(
    getCasinosByVertical("crypto-casino"),
    "casinos-crypto",
  );
  const cryptoPayments = uniqueCryptoPayments(editorialCasinos);
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
            <li className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/8 px-2.5 py-1 text-xs font-medium text-emerald-400">
              18+ | Juega con responsabilidad
            </li>
          </ul>
          <nav aria-label="Navegación rápida" className="flex flex-wrap gap-2 pt-1">
            <Link
              href="#ranking-casinos-crypto"
              className="inline-flex items-center rounded-full border border-border/60 px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary/60"
            >
              Ranking crypto
            </Link>
            <Link
              href="#casinos-crypto-internacionales"
              className="inline-flex items-center rounded-full border border-border/60 px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary/60"
            >
              Internacionales
            </Link>
            <Link
              href="#guias-crypto-mexico"
              className="inline-flex items-center rounded-full border border-border/60 px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary/60"
            >
              Guías para México
            </Link>
            <Link
              href="/como-evaluamos"
              className="inline-flex items-center rounded-full border border-border/60 px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:border-primary/60"
            >
              Metodología
            </Link>
          </nav>
        </div>
      </header>

      <div className="mb-8 space-y-3">
        <AffiliateDisclosure />
        <ResponsibleGamblingNotice />
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          La disponibilidad, bonos, métodos de pago, verificación y retiros dependen de los términos
          oficiales del operador y de tu jurisdicción. Revisa las leyes locales y las condiciones
          vigentes antes de registrarte.
        </p>
      </div>

      <section aria-labelledby="oferta-crypto-destacada-heading" className="mb-8">
        <h2
          id="oferta-crypto-destacada-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Oferta crypto destacada
        </h2>
        <OfferCard
          operatorName="BetFury"
          operatorId="betfury"
          badge="Crypto partner destacado"
          headline="BetFury: bonus crypto y casino gamificado"
          subheadline="Bonus Cabinet, Free Spins, cashback y promociones por nivel"
          offerText="Hasta 590% + Free Spins según términos oficiales"
          promoCode="dilyl6y3r"
          paymentBadges={["BFG", "Crypto", "Free Spins", "Cashback"]}
          featureBullets={[
            "Bonus Cabinet con depósitos escalonados según términos oficiales",
            "Hasta $10,500 visible en la promoción del operador",
            "Free Fury Wheel, cashback, rakeback y bonos semanales según nivel",
            "Código de campaña informado: dilyl6y3r",
          ]}
          primaryCtaLabel="Ver bonos BetFury"
          primaryCtaHref={BETFURY_AFFILIATE_URL}
          secondaryCtaLabel="Leer reseña"
          secondaryCtaHref="/reviews/betfury"
          termsNote="Bonos, porcentajes, free spins, cashback, retiros, verificación y disponibilidad dependen de los términos oficiales de BetFury y de tu jurisdicción."
          responsibleNote="18+ | Juega con responsabilidad"
          visual={{
            eyebrow: "Bonus Cabinet",
            title: "Hasta 590% + Free Spins",
            subtitle: "Hasta $10,500 según términos oficiales",
            chips: ["BFG", "Free Spins", "Cashback"],
            variant: "betfury",
            compact: true,
          }}
          visualVariant="crypto"
          mobileMaxBullets={3}
          logo={{
            src: "/operators/betfury.svg",
            alt: "BetFury",
            width: 80,
            height: 40,
          }}
          className="mt-4"
        />
      </section>

      <section aria-labelledby="otros-crypto-heading" className="mb-8">
        <h2
          id="otros-crypto-heading"
          className="text-lg font-bold tracking-tight text-foreground sm:text-xl"
        >
          500 Casino — alternativa crypto
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          BetFury sigue como oferta destacada. 500 Casino aparece aquí como alternativa crypto de
          comparación con prioridad editorial más baja.
        </p>
        <OfferCard
          operatorName="500 Casino"
          operatorId="500-casino"
          badge="Crypto candidato"
          headline="500 Casino: casino crypto, slots y sportsbook"
          subheadline="Operador crypto para revisar junto a BetFury, Gamdom y otros"
          offerText="Promociones, juegos y pagos según términos oficiales"
          paymentBadges={["Crypto", "Slots", "Live", "Sportsbook"]}
          featureBullets={[
            "Casino crypto con slots, live casino y sportsbook",
            "Promociones visibles en el operador según términos oficiales",
            "Código/referido disponible para seguimiento de campaña",
            "Revisa disponibilidad, verificación, límites y jurisdicción",
          ]}
          primaryCtaLabel="Visitar 500 Casino"
          primaryCtaHref={FIVEHUNDRED_CASINO_GLOBAL_AFFILIATE_URL}
          secondaryCtaLabel="Leer reseña"
          secondaryCtaHref="/reviews/500-casino"
          termsNote="Promociones, juegos, pagos, retiros, verificación y disponibilidad dependen de los términos oficiales de 500 Casino y de tu jurisdicción."
          responsibleNote="18+ | Juega con responsabilidad"
          visual={{
            eyebrow: "Crypto casino",
            title: "500 Casino",
            subtitle: "Casino crypto, slots y sportsbook",
            chips: ["Crypto", "Slots", "Sportsbook"],
            variant: "fivehundred",
            compact: true,
          }}
          visualVariant="crypto"
          emphasis="comparison-primary"
          mobileMaxBullets={3}
          className="mt-4"
        />
      </section>

      <section aria-labelledby="como-leer-ranking-heading" className="mb-8">
        <h2
          id="como-leer-ranking-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Cómo leer este ranking crypto
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <article className="rounded-lg border border-border/60 bg-card p-5">
            <h3 className="font-semibold text-foreground">Partners crypto activos</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              BetFury aparece como oferta destacada arriba. 500 Casino, Gamdom, Rainbet, Roobet, Stake y
              Mellstroy se presentan como candidatos del segmento crypto con enlaces activos o
              enlaces oficiales. BC.Game aparece más abajo como comparación editorial no monetizada con enlace al sitio oficial de
              México. La disponibilidad, pagos, verificación, bonos y retiros dependen de cada
              operador y de tu jurisdicción.
            </p>
          </article>
        </div>
      </section>

      <section
        id="ranking-casinos-crypto"
        aria-labelledby="comparar-crypto-heading"
        className="mb-8"
      >
        <h2
          id="comparar-crypto-heading"
          className="text-lg font-bold tracking-tight text-foreground sm:text-xl"
        >
          Otros casinos crypto para comparar
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
          BetFury y 500 Casino aparecen como ofertas destacadas arriba. Abajo puedes comparar Gamdom,
          Rainbet, Roobet, Stake y otros operadores crypto.
        </p>
        <div className="mt-4 grid gap-4 md:grid-cols-2" aria-label="Comparar casinos crypto">
          <OfferCard
            operatorName="Gamdom"
            operatorId="gamdom"
            badge="Crypto candidato"
            headline="Gamdom"
            subheadline="Casino crypto internacional para comparar"
            offerText="Disponibilidad y promociones según términos oficiales"
            paymentBadges={["Crypto", "Casino", "Promos"]}
            featureBullets={[
              "Casino crypto internacional",
              "Revisa límites, pagos y verificación",
              "Comparar antes de registrarte",
            ]}
            primaryCtaLabel="Visitar Gamdom"
            primaryCtaHref={GAMDOM_GLOBAL_AFFILIATE_URL}
            secondaryCtaLabel="Ver ranking crypto"
            secondaryCtaHref="/casinos-crypto"
            termsNote="Disponibilidad, bonos, pagos y retiros dependen de términos oficiales y jurisdicción."
            responsibleNote="18+ | Juega con responsabilidad"
            visual={{
              eyebrow: "Crypto casino",
              title: "Gamdom",
              subtitle: "Casino crypto internacional",
              chips: ["Crypto", "Casino", "Promos"],
              variant: "crypto",
              compact: true,
            }}
            visualVariant="dark"
            emphasis="comparison-secondary"
            mobileMaxBullets={2}
            className="p-3 sm:p-4"
          />
          <OfferCard
            operatorName="Rainbet"
            operatorId="rainbet"
            badge="Crypto candidato"
            headline="Rainbet"
            subheadline="Casino crypto, sportsbook y rewards"
            offerText="Promociones, rewards y free spins según términos oficiales"
            paymentBadges={["BTC", "ETH", "USDT", "SOL"]}
            featureBullets={[
              "Casino crypto con sportsbook y Originals",
              "Rewards: rakeback, daily, weekly y monthly",
              "Wager Lock y No Wager Lock según términos",
              "Revisa KYC, pagos, retiros y disponibilidad",
            ]}
            primaryCtaLabel="Visitar Rainbet"
            primaryCtaHref={RAINBET_REFERRAL_URL}
            secondaryCtaLabel="Leer reseña"
            secondaryCtaHref="/reviews/rainbet"
            termsNote="Promociones, rewards, pagos, retiros, verificación y disponibilidad dependen de los términos oficiales de Rainbet y de tu jurisdicción."
            responsibleNote="18+ | Juega con responsabilidad"
            visual={{
              eyebrow: "Crypto rewards",
              title: "Rewards + Sportsbook",
              subtitle: "Originals, VIP y promos según términos",
              chips: ["Crypto", "Originals", "Sportsbook", "Rewards"],
              variant: "rainbet",
              compact: true,
            }}
            visualVariant="crypto"
            mobileMaxBullets={2}
            logo={{
              src: "/operators/rainbet.png",
              alt: "Rainbet",
              width: 96,
              height: 56,
            }}
            className="p-3 sm:p-4"
          />
          <OfferCard
            operatorName="Roobet"
            operatorId="roobet"
            badge="Comparar"
            headline="Roobet"
            subheadline="Casino crypto internacional para comparar"
            offerText="Revisa términos oficiales antes de registrarte"
            paymentBadges={["Crypto", "Casino"]}
            featureBullets={[
              "Candidato crypto internacional",
              "Disponibilidad depende de jurisdicción",
              "Pagos, retiros y verificación dependen del operador",
            ]}
            primaryCtaLabel="Visitar Roobet"
            primaryCtaHref={ROOBET_GLOBAL_AFFILIATE_URL}
            secondaryCtaLabel="Guía de Roobet"
            secondaryCtaHref="/guias/roobet-mexico-crypto"
            termsNote="Promociones, pagos, retiros y elegibilidad dependen de los términos oficiales de Roobet y de tu jurisdicción."
            responsibleNote="18+ | Juega con responsabilidad"
            visual={{
              eyebrow: "Crypto casino",
              title: "Roobet",
              subtitle: "Comparar según términos oficiales",
              chips: ["Crypto", "Casino"],
              variant: "crypto",
              compact: true,
            }}
            visualVariant="dark"
            emphasis="comparison-secondary"
            mobileMaxBullets={2}
            className="p-3 sm:p-4"
          />
          <OfferCard
            operatorName="Stake"
            operatorId="stake"
            badge="Comparar"
            headline="Stake"
            subheadline="Operador crypto/global para México"
            offerText="Revisa términos oficiales en stake.mx"
            paymentBadges={["BTC", "ETH", "USDT", "LTC"]}
            featureBullets={[
              "Casino crypto y sportsbook según dominio local",
              "Disponibilidad depende de jurisdicción",
              "Pagos, retiros y verificación dependen del operador",
            ]}
            primaryCtaLabel="Ver Stake México"
            primaryCtaHref={STAKE_MX_OFFICIAL_URL}
            secondaryCtaLabel="Leer reseña"
            secondaryCtaHref="/reviews/stake"
            termsNote="Bonos, pagos, retiros, verificación y disponibilidad dependen de los términos oficiales de Stake y de tu jurisdicción."
            responsibleNote="18+ | Juega con responsabilidad"
            visual={{
              eyebrow: "Crypto casino",
              title: "Stake",
              subtitle: "Sitio oficial México",
              chips: ["Crypto", "Sportsbook"],
              variant: "crypto",
              compact: true,
            }}
            visualVariant="dark"
            emphasis="comparison-secondary"
            mobileMaxBullets={2}
            logo={{
              src: "/operators/stake.svg",
              alt: "Stake",
              width: 80,
              height: 40,
            }}
            className="p-3 sm:p-4"
          />
          <OfferCard
            operatorName="Mellstroy / MellAff"
            operatorId="mellstroy"
            badge="Comparar"
            headline="Mellstroy"
            subheadline="Casino crypto/social para LATAM"
            offerText="Disponibilidad y promociones según términos oficiales"
            paymentBadges={["Crypto"]}
            featureBullets={[
              "Candidato crypto internacional",
              "Revisa términos oficiales y disponibilidad",
              "Pagos, retiros y verificación dependen del operador",
            ]}
            primaryCtaLabel="Visitar Mellstroy"
            primaryCtaHref={MELLSTROY_GLOBAL_AFFILIATE_URL}
            termsNote="Promociones, pagos, retiros y elegibilidad dependen de los términos oficiales del operador y de tu jurisdicción."
            responsibleNote="18+ | Juega con responsabilidad"
            visual={{
              eyebrow: "Crypto casino",
              title: "Mellstroy",
              subtitle: "Comparar según términos",
              chips: ["Crypto", "LATAM"],
              variant: "crypto",
              compact: true,
            }}
            visualVariant="dark"
            emphasis="comparison-secondary"
            mobileMaxBullets={2}
            className="p-3 sm:p-4"
          />
          <OfferCard
            operatorName="BC.Game"
            operatorId="bcgame"
            badge="Comparar"
            headline="BC.Game"
            subheadline="Comparación editorial crypto"
            offerText="Revisa términos oficiales en BC.Game MX"
            paymentBadges={["BTC", "ETH", "USDT"]}
            featureBullets={[
              "Operador crypto internacional",
              "Disponibilidad depende de jurisdicción",
              "Pagos, retiros y verificación dependen del operador",
            ]}
            primaryCtaLabel="Ver BC.Game MX"
            primaryCtaHref={BCGAME_MX_OFFICIAL_URL}
            termsNote="JugadaMax no tiene campaña afiliada confirmada para México. Bonos, pagos, retiros y verificación dependen de los términos oficiales del operador."
            responsibleNote="18+ | Juega con responsabilidad"
            visual={{
              eyebrow: "Crypto casino",
              title: "BC.Game",
              subtitle: "Sitio oficial México",
              chips: ["Crypto", "Casino"],
              variant: "crypto",
              compact: true,
            }}
            visualVariant="dark"
            emphasis="comparison-secondary"
            mobileMaxBullets={2}
            className="p-3 sm:p-4"
          />
        </div>
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

      <section
        id="casinos-crypto-internacionales"
        aria-labelledby="comparativa-crypto-heading"
        className="mb-12 sm:mb-14"
      >
        <h2
          id="comparativa-crypto-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Comparativa de casinos crypto
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          Resumen de operadores, bonos informados y métodos de pago disponibles.
        </p>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Los operadores internacionales pueden aceptar pagos crypto, pero eso no elimina requisitos
          de verificación, límites, restricciones regionales ni riesgo de pérdida.
        </p>
        <div className="mt-5 min-w-0 max-w-full">
          <ComparisonTable casinos={casinos} vertical="crypto-casino" />
        </div>
      </section>

      <section id="guias-crypto-mexico" aria-labelledby="guias-crypto-mexico-heading" className="mb-12">
        <h2
          id="guias-crypto-mexico-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          Guías crypto para jugadores en México
        </h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <Link
            href="/guias/casinos-con-usdt-mexico"
            className="flex h-full flex-col rounded-lg border border-border/60 bg-card p-5 transition-colors hover:border-primary/60"
          >
            <span className="font-semibold text-foreground">Casinos con USDT en México</span>
            <span className="mt-2 text-sm text-muted-foreground">
              Redes, riesgos de stablecoins y qué revisar antes de depositar.
            </span>
          </Link>
          <Link
            href="/guias/casinos-con-bitcoin-mexico"
            className="flex h-full flex-col rounded-lg border border-border/60 bg-card p-5 transition-colors hover:border-primary/60"
          >
            <span className="font-semibold text-foreground">Casinos con Bitcoin en México</span>
            <span className="mt-2 text-sm text-muted-foreground">
              Wallets, confirmaciones, comisiones y volatilidad.
            </span>
          </Link>
          <Link
            href="/guias/casinos-no-kyc-mexico"
            className="flex h-full flex-col rounded-lg border border-border/60 bg-card p-5 transition-colors hover:border-primary/60"
          >
            <span className="font-semibold text-foreground">Casinos no KYC en México</span>
            <span className="mt-2 text-sm text-muted-foreground">
              Qué significa, cuándo puede aplicar verificación y señales de alerta.
            </span>
          </Link>
          <Link
            href="/guias/como-elegir-casino-crypto-mexico"
            className="flex h-full flex-col rounded-lg border border-border/60 bg-card p-5 transition-colors hover:border-primary/60"
          >
            <span className="font-semibold text-foreground">Cómo elegir un casino crypto</span>
            <span className="mt-2 text-sm text-muted-foreground">
              Checklist editorial: seguridad, pagos, términos y juego responsable.
            </span>
          </Link>
        </div>
      </section>

      <section aria-labelledby="crypto-tambien-revisar-heading" className="mb-12">
        <h2
          id="crypto-tambien-revisar-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          También puedes revisar
        </h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          Guías y rutas relacionadas para comparar métodos de pago, operadores y bonos antes de
          registrarte.
        </p>
        <nav aria-label="Enlaces relacionados" className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/guias/casinos-con-usdt-mexico"
            className="inline-flex min-h-11 items-center rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
          >
            Casinos con USDT en México
          </Link>
          <Link
            href="/guias/500-casino-mexico"
            className="inline-flex min-h-11 items-center rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
          >
            Guía de 500 Casino
          </Link>
          <Link
            href="/guias/roobet-mexico-crypto"
            className="inline-flex min-h-11 items-center rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
          >
            Guía de Roobet
          </Link>
          <Link
            href="/guias/gamdom-mexico-crypto"
            className="inline-flex min-h-11 items-center rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
          >
            Guía de Gamdom
          </Link>
          <Link
            href="/bonos"
            className="inline-flex min-h-11 items-center rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
          >
            Bonos de casino
          </Link>
          <Link
            href="/casinos-fiat"
            className="inline-flex min-h-11 items-center rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
          >
            Casinos fiat
          </Link>
        </nav>
      </section>

      <CryptoCasinoInfoSections paymentMethods={cryptoPayments} />
    </Container>
  );
}
