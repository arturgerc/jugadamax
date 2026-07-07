import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { AffiliateDisclosure } from "@/components/trust/AffiliateDisclosure";
import { ResponsibleGamblingNotice } from "@/components/trust/ResponsibleGamblingNotice";
import { BETSSON_MX_CASINO_WELCOME_URL } from "@/lib/affiliate/constants";

export const metadata: Metadata = buildMetadata({
  title: "Bonos de casino en MГ©xico: cГіmo leer promociones y requisitos | JugadaMax",
  description:
    "GuГ­a editorial de JugadaMax sobre bonos de casino en MГ©xico: requisitos de apuesta, lГ­mites, juegos excluidos, bonos crypto, promociones fiat y seГ±ales de alerta.",
  path: "/bonos",
});

const bonusChecklist = [
  "Requisitos de apuesta",
  "LГ­mite de retiro",
  "Juegos excluidos",
  "Apuesta mГЎxima",
  "Fecha de vencimiento",
  "VerificaciГіn de cuenta",
  "PaГ­ses o usuarios elegibles",
] as const;

const alertSignals = [
  "Promesas de ganancias",
  "Bonos sin condiciones",
  "Promesas sobre retiros sin condiciones claras",
  "Falta de tГ©rminos claros",
  "PresiГіn para depositar rГЎpido",
  "Cuentas duplicadas o abuso promocional",
] as const;

const cryptoGuideLinks = [
  { href: "/casinos-crypto", label: "Ranking de casinos crypto" },
  { href: "/guias/500-casino-mexico", label: "500 Casino en MГ©xico" },
  { href: "/guias/roobet-mexico-crypto", label: "Roobet en MГ©xico" },
  { href: "/guias/gamdom-mexico-crypto", label: "Gamdom en MГ©xico" },
  { href: "/guias/casinos-con-usdt-mexico", label: "Casinos con USDT" },
] as const;

const ctaLinks = [
  { href: "/casinos-crypto", label: "Ver ranking de casinos crypto" },
  { href: "/guias/casinos-con-usdt-mexico", label: "Leer guГ­a de USDT" },
  { href: "/como-evaluamos", label: "CГіmo evaluamos" },
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
            Bonos de casino en MГ©xico: cГіmo leer promociones sin caer en trampas
          </h1>
          <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Los bonos pueden ser Гєtiles para explorar un casino, pero no son dinero gratis ni
            garantizan ganancias. Antes de aceptar una promociГіn, revisa requisitos de apuesta,
            lГ­mites, verificaciГіn, juegos elegibles y reglas de retiro en los tГ©rminos oficiales del
            operador.
          </p>
          <ul className="flex flex-wrap gap-2" aria-label="Enfoque de la pГЎgina">
            <li className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
              Requisitos В· LГ­mites В· TГ©rminos
            </li>
            <li className="inline-flex items-center rounded-full border border-white/10 bg-[#16233f]/60 px-2.5 py-1 text-xs font-medium text-muted-foreground">
              MГ©xico
            </li>
            <li className="inline-flex items-center rounded-full border border-accent/30 bg-accent/8 px-2.5 py-1 text-xs font-medium text-accent">
              GuГ­a editorial
            </li>
          </ul>
        </div>
      </header>

      <div className="mb-10 space-y-3">
        <AffiliateDisclosure />
        <ResponsibleGamblingNotice />
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          La disponibilidad de promociones varГ­a segГєn tu jurisdicciГіn y los tГ©rminos oficiales del
          operador. JugadaMax no publica cifras promocionales no verificadas en esta pГЎgina.
        </p>
      </div>

      <div className="space-y-12">
        <section aria-labelledby="bonos-checklist-heading">
          <h2
            id="bonos-checklist-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            QuГ© mirar antes de aceptar un bono
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
              otros flujos de pago tradicionales cuando el operador los ofrece bajo sus tГ©rminos
              vigentes. Sus promociones suelen explicarse en MXN y pueden incluir reglas distintas a
              las de casinos internacionales.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              Las marcas crypto o internacionales pueden implicar wallets, redes blockchain,
              stablecoins y reglas de verificaciГіn diferentes. Un bono en crypto no elimina requisitos
              de apuesta, lГ­mites ni posibles controles de cuenta.
            </p>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              JugadaMax no afirma que un operador concreto acepte un mГ©todo de pago o bono
              especГ­fico. Confirma siempre la promociГіn vigente y sus condiciones en el sitio
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
            Como referencia editorial, en JugadaMax tambiГ©n cubrimos candidatos internacionales del
            segmento crypto como{" "}
            <span className="font-medium text-foreground">500 Casino</span>,{" "}
            <span className="font-medium text-foreground">Roobet</span> y{" "}
            <span className="font-medium text-foreground">Gamdom</span>. En JugadaMax estos
            operadores aparecen como candidatos editoriales internacionales del segmento crypto.
            Antes de registrarte, revisa en el sitio oficial si hay promociones vigentes,
            requisitos, lГ­mites, verificaciГіn y disponibilidad para tu jurisdicciГіn.
          </p>
          <nav aria-label="GuГ­as crypto relacionadas" className="mt-4">
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
            promociones orientadas a MГ©xico o LATAM, pero las condiciones cambian con frecuencia.
            JugadaMax no publica montos ni cГіdigos promocionales en esta pГЎgina. Revisa siempre la
            oferta vigente, requisitos de apuesta y elegibilidad en el sitio oficial.
          </p>
          <article className="mt-5 rounded-2xl border border-primary/25 bg-primary/5 p-5 sm:p-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="min-w-0 space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-lg font-semibold text-foreground">Betsson MX</h3>
                  <span className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-2 py-0.5 text-[0.65rem] font-medium uppercase tracking-wide text-primary">
                    Partner fiat aprobado
                  </span>
                </div>
                <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  Betsson MX puede ofrecer promociones de bienvenida segГєn tГ©rminos oficiales. Antes
                  de activar cualquier bono, revisa requisitos de apuesta, lГ­mites, juegos elegibles,
                  verificaciГіn y disponibilidad.
                </p>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  Bonos y disponibilidad dependen de los tГ©rminos oficiales. Bonos, disponibilidad,
                  mГ©todos de pago, verificaciГіn y retiros dependen de los tГ©rminos oficiales de
                  Betsson MX y de tu jurisdicciГіn.
                </p>
                <p className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/8 px-2.5 py-1 text-xs font-medium text-emerald-400">
                  18+ | Juega con responsabilidad
                </p>
              </div>
              <div className="shrink-0 lg:w-56">
                <a
                  href={BETSSON_MX_CASINO_WELCOME_URL}
                  target="_blank"
                  rel="sponsored nofollow noopener noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]"
                >
                  Ver promociГіn en Betsson MX
                </a>
              </div>
            </div>
          </article>

          <nav aria-label="Operadores fiat" className="mt-4 flex flex-wrap gap-3">
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
            SeГ±ales de alerta
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
              El juego online es solo para mayores de 18 aГ±os y debe ser entretenimiento, no una
              fuente de ingresos. Define presupuesto y lГ­mites antes de aceptar bonos o depositar.
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
          <nav aria-label="Enlaces Гєtiles" className="flex flex-wrap gap-3">
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
