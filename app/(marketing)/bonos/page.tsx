import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { AffiliateDisclosure } from "@/components/trust/AffiliateDisclosure";
import { ResponsibleGamblingNotice } from "@/components/trust/ResponsibleGamblingNotice";
import { OfferCard } from "@/components/affiliate/OfferCard";
import { MobileStickyOfferCta } from "@/components/affiliate/MobileStickyOfferCta";
import { OneXBetFeaturedCard } from "@/components/affiliate/OneXBetFeaturedCard";
import { MelbetFeaturedCard } from "@/components/affiliate/MelbetFeaturedCard";
import {
  BETFURY_AFFILIATE_URL,
  BETSSON_MX_CASINO_WELCOME_URL,
} from "@/lib/affiliate/constants";

export const metadata: Metadata = buildMetadata({
  title: "Bonos de casino en México",
  description:
    "Guía editorial de bonos de casino, requisitos de apuesta, condiciones, límites y términos oficiales para México y LATAM. 18+ | Juega con responsabilidad.",
  path: "/bonos",
});

const bonusChecklist = [
  "Requisitos de apuesta",
  "Límite de retiro",
  "Juegos excluidos",
  "Apuesta máxima",
  "Fecha de vencimiento",
  "Verificación de cuenta",
  "Países o usuarios elegibles",
] as const;

const alertSignals = [
  "Promesas de ganancias",
  "Bonos sin condiciones",
  "Promesas sobre retiros sin condiciones claras",
  "Falta de términos claros",
  "Presión para depositar rápido",
  "Cuentas duplicadas o abuso promocional",
] as const;

const cryptoGuideLinks = [
  { href: "/casinos-crypto", label: "Ranking de casinos crypto" },
  { href: "/guias/500-casino-mexico", label: "500 Casino en México" },
  { href: "/guias/roobet-mexico-crypto", label: "Roobet en México" },
  { href: "/guias/gamdom-mexico-crypto", label: "Gamdom en México" },
  { href: "/guias/casinos-con-usdt-mexico", label: "Casinos con USDT" },
] as const;

const betssonTermsNote =
  "Promoción publicada por Betsson MX. Bonos, giros, métodos de pago, verificación y retiros dependen de los términos oficiales del operador y de tu jurisdicción.";
const betssonResponsibleNote = "18+ | Juega con responsabilidad";

const ctaLinks = [
  { href: "/casinos-crypto", label: "Ver ranking de casinos crypto" },
  { href: "/guias/casinos-con-usdt-mexico", label: "Leer guía de USDT" },
  { href: "/como-evaluamos", label: "Cómo evaluamos" },
] as const;

export default function BonosPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Bonos", path: "/bonos" },
  ]);

  return (
    <>
    <Container className="py-8 pb-24 sm:py-10 md:pb-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <header className="relative mb-8 overflow-hidden rounded-2xl border border-white/10 bg-card p-5 sm:p-6 lg:p-8">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,184,0,0.06),transparent_55%)]"
        />
        <div className="relative space-y-4">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Bonos de casino en México: cómo leer promociones sin caer en trampas
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Los bonos pueden ser útiles para explorar un casino, pero no son dinero gratis ni
            garantizan ganancias. Antes de aceptar una promoción, revisa requisitos de apuesta,
            límites, verificación, juegos elegibles y reglas de retiro en los términos oficiales del
            operador.
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Enfoque de la página">
            <li className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              Requisitos · Límites · Términos
            </li>
            <li className="inline-flex items-center rounded-full border border-white/10 bg-[#16233f]/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
              México
            </li>
            <li className="inline-flex items-center rounded-full border border-accent/30 bg-accent/8 px-2.5 py-1 text-xs font-medium text-accent">
              Guía editorial
            </li>
          </ul>
        </div>
      </header>

      <div className="mb-10 space-y-3">
        <AffiliateDisclosure />
        <ResponsibleGamblingNotice />
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          La disponibilidad de promociones varía según tu jurisdicción y los términos oficiales del
          operador. Las cifras mostradas reflejan promociones publicadas por el operador y pueden
          cambiar sin aviso.
        </p>
      </div>

      <div className="space-y-12">
        <section aria-labelledby="bonos-destacados-heading">
          <h2
            id="bonos-destacados-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Bonos destacados en México
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Ofertas de partners aprobados con términos publicados por el operador. Revisa siempre
            requisitos de apuesta, límites y elegibilidad antes de depositar.
          </p>
          <OfferCard
            operatorName="Betsson"
            operatorId="betsson"
            badge="Oferta destacada"
            headline="Promoción de casino Betsson MX"
            subheadline="Oferta destacada para usuarios de México"
            offerText="Hasta $15,000 MXN + 200 giros gratis"
            paymentBadges={["Visa", "Mastercard", "OXXO", "SPEI"]}
            featureBullets={[
              "Promoción de bienvenida publicada por Betsson MX",
              "Depósito desde $200 o mínimo $100 por SPEI según términos oficiales",
              "+25 giros gratis extra si usas la app, según términos oficiales",
              "Revisa requisitos de apuesta, límites y juegos elegibles",
              "Verifica elegibilidad antes de depositar",
            ]}
            primaryCtaLabel="Ver bono Betsson"
            primaryCtaHref={BETSSON_MX_CASINO_WELCOME_URL}
            secondaryCtaLabel="Leer reseña"
            secondaryCtaHref="/reviews/betsson"
            termsNote={betssonTermsNote}
            responsibleNote={betssonResponsibleNote}
            visual={{
              eyebrow: "Oferta publicada por Betsson MX",
              title: "Hasta $15,000 MXN + 200 giros gratis",
              subtitle: "+25 giros extra en la app, según términos",
              chips: ["OXXO", "SPEI", "Visa", "Mastercard"],
              variant: "betsson",
            }}
            visualVariant="mexico"
            mobileMaxBullets={3}
            logo={{
              src: "/operators/betsson.svg",
              alt: "Betsson",
              width: 80,
              height: 40,
            }}
            className="mt-5"
          />

          <div className="mt-5 rounded-xl border border-border/60 bg-[#111417] p-4 sm:p-5">
            <h3 className="text-base font-semibold text-foreground sm:text-lg">
              Cómo reclamar el bono Betsson
            </h3>
            <ol className="mt-4 grid gap-3 sm:grid-cols-3">
              {[
                "Entra desde el enlace de JugadaMax",
                "Crea tu cuenta y revisa la promoción vigente",
                "Deposita según los términos oficiales y verifica los giros disponibles",
              ].map((step, index) => (
                <li
                  key={step}
                  className="flex gap-3 rounded-lg border border-white/10 bg-[#16233f]/60 p-3"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex size-7 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-xs font-bold text-primary"
                  >
                    {index + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step}</p>
                </li>
              ))}
            </ol>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Los montos y giros reflejan una promoción publicada por Betsson MX y pueden cambiar.
              Confirma siempre la oferta vigente en el sitio del operador.
            </p>
          </div>

          <h3
            id="bonos-crypto-destacados-heading"
            className="mt-8 text-lg font-bold tracking-tight text-foreground sm:text-xl"
          >
            Bonos crypto destacados
          </h3>
          <OfferCard
            operatorName="BetFury"
            operatorId="betfury"
            badge="Crypto destacado"
            headline="BetFury Bonus Cabinet"
            subheadline="Depósitos escalonados, Free Spins y recompensas por nivel"
            offerText="Hasta 590% + Free Spins según términos oficiales"
            promoCode="d9lksw0db"
            paymentBadges={["BFG", "Crypto", "Free Spins", "Cashback"]}
            featureBullets={[
              "Bonus Cabinet con depósitos escalonados según términos oficiales",
              "Free Fury Wheel, cashback y rakeback según nivel",
              "Código promocional: d9lksw0db",
            ]}
            mobileMaxBullets={3}
            primaryCtaLabel="Ver bonos BetFury"
            primaryCtaHref={BETFURY_AFFILIATE_URL}
            secondaryCtaLabel="Leer reseña"
            secondaryCtaHref="/reviews/betfury"
            termsNote="Bonos, free spins, cashback, retiros y verificación dependen de los términos oficiales de BetFury y de tu jurisdicción."
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
            logo={{
              src: "/operators/betfury.svg",
              alt: "BetFury",
              width: 80,
              height: 40,
            }}
            className="mt-4"
          />
        </section>

        <section aria-labelledby="bonos-mixtos-heading">
          <h2
            id="bonos-mixtos-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Paquetes de bienvenida y operadores mixtos
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Algunos operadores combinan casino online, slots, live casino y apuestas deportivas en
            una sola cuenta. El paquete de 1xBet se refiere al casino; el bono de Melbet es
            deportivo. Confirma siempre requisitos de apuesta, depósitos elegibles, límites y
            elegibilidad antes de aceptar una promoción.
          </p>
          <OneXBetFeaturedCard context="bonus" />
          <MelbetFeaturedCard context="bonus" />
        </section>

        <section aria-labelledby="bonos-crypto-operators-heading">
          <h2
            id="bonos-crypto-operators-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Bonos en operadores crypto
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Como referencia editorial, en JugadaMax también cubrimos candidatos internacionales del
            segmento crypto como{" "}
            <span className="font-medium text-foreground">500 Casino</span>,{" "}
            <span className="font-medium text-foreground">Roobet</span> y{" "}
            <span className="font-medium text-foreground">Gamdom</span>. Antes de registrarte, revisa
            en el sitio oficial si hay promociones vigentes, requisitos, límites, verificación y
            disponibilidad para tu jurisdicción.
          </p>
          <nav aria-label="Guías crypto relacionadas" className="mt-4">
            <ul className="grid gap-3 sm:grid-cols-2">
              {cryptoGuideLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg border border-border/60 bg-card p-4 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </section>

        <section aria-labelledby="bonos-checklist-heading">
          <h2
            id="bonos-checklist-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Qué mirar antes de aceptar un bono
          </h2>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {bonusChecklist.map((item) => (
              <li
                key={item}
                className="rounded-lg border border-border/60 bg-card px-4 py-3 text-sm text-muted-foreground sm:text-base"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="bonos-fiat-crypto-heading">
          <h2
            id="bonos-fiat-crypto-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Bonos fiat vs bonos crypto
          </h2>
          <div className="mt-4 space-y-4 rounded-lg border border-border/60 bg-card p-5 sm:p-6">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Las marcas fiat o locales pueden orientarse a pesos mexicanos, tarjetas, OXXO, SPEI u
              otros flujos de pago tradicionales cuando el operador los ofrece bajo sus términos
              vigentes. Sus promociones suelen explicarse en MXN y pueden incluir reglas distintas a
              las de casinos internacionales.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Las marcas crypto o internacionales pueden implicar wallets, redes blockchain,
              stablecoins y reglas de verificación diferentes. Un bono en crypto no elimina requisitos
              de apuesta, límites ni posibles controles de cuenta.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              JugadaMax no afirma que un operador concreto acepte un método de pago o bono
              específico. Confirma siempre la promoción vigente y sus condiciones en el sitio
              oficial antes de depositar.
            </p>
          </div>
        </section>

        <section aria-labelledby="bonos-alertas-heading">
          <h2
            id="bonos-alertas-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Señales de alerta
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {alertSignals.map((item) => (
              <li
                key={item}
                className="flex gap-2 rounded-lg border border-amber-500/20 bg-amber-500/5 px-4 py-3 text-sm text-muted-foreground sm:text-base"
              >
                <span aria-hidden="true" className="text-amber-500/80">
                  !
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="bonos-responsable-heading">
          <h2
            id="bonos-responsable-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Juego responsable
          </h2>
          <div className="mt-4 rounded-lg border border-border/60 bg-card p-5 sm:p-6">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              El juego online es solo para mayores de 18 años y debe ser entretenimiento, no una
              fuente de ingresos. Define presupuesto y límites antes de aceptar bonos o depositar.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              JugadaMax no opera casinos, no procesa pagos y no garantiza bonos, disponibilidad,
              retiros ni resultados.
            </p>
          </div>
        </section>

        <section aria-labelledby="bonos-cta-heading">
          <h2 id="bonos-cta-heading" className="sr-only">
            Siguiente lectura
          </h2>
          <nav aria-label="Enlaces útiles" className="flex flex-wrap gap-3">
            {ctaLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </section>
      </div>
    </Container>
    <MobileStickyOfferCta
      primaryLabel="Ver bono Betsson"
      primaryHref={BETSSON_MX_CASINO_WELCOME_URL}
      secondaryLabel="Leer reseña"
      secondaryHref="/reviews/betsson"
    />
    </>
  );
}
