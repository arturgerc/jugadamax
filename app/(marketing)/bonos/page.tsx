import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { AffiliateDisclosure } from "@/components/trust/AffiliateDisclosure";
import { ResponsibleGamblingNotice } from "@/components/trust/ResponsibleGamblingNotice";

export const metadata: Metadata = buildMetadata({
  title: "Bonos de casino en México: cómo leer promociones y requisitos | JugadaMax",
  description:
    "Guía editorial de JugadaMax sobre bonos de casino en México: requisitos de apuesta, límites, juegos excluidos, bonos crypto, promociones fiat y señales de alerta.",
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
  "Retiros garantizados",
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

const fiatOperatorLinks = [
  { href: "/reviews/codere", label: "Codere" },
  { href: "/reviews/caliente", label: "Caliente" },
  { href: "/reviews/betsson", label: "Betsson" },
] as const;

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
    <Container className="py-8 sm:py-10">
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
          operador. JugadaMax no publica cifras promocionales no verificadas en esta página.
        </p>
      </div>

      <div className="space-y-12">
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
            <span className="font-medium text-foreground">Gamdom</span>. En JugadaMax estos
            operadores aparecen como candidatos editoriales internacionales del segmento crypto.
            Antes de registrarte, revisa en el sitio oficial si hay promociones vigentes,
            requisitos, límites, verificación y disponibilidad para tu jurisdicción.
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

        <section aria-labelledby="bonos-fiat-operators-heading">
          <h2
            id="bonos-fiat-operators-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Bonos en operadores locales o fiat
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Operadores con enfoque local o fiat como Codere, Caliente y Betsson pueden publicar
            promociones orientadas a México o LATAM, pero las condiciones cambian con frecuencia.
            JugadaMax no publica montos ni códigos promocionales en esta página. Revisa siempre la
            oferta vigente, requisitos de apuesta y elegibilidad en el sitio oficial.
          </p>
          <nav aria-label="Reseñas de operadores fiat" className="mt-4 flex flex-wrap gap-3">
            {fiatOperatorLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-flex min-h-11 items-center rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/casinos-fiat"
              className="inline-flex min-h-11 items-center rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-primary/60"
            >
              Ver casinos fiat
            </Link>
          </nav>
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
  );
}
