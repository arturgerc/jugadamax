import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = buildMetadata({
  title: "Partners / Media Kit",
  description:
    "Información para socios, afiliados y managers sobre JugadaMax, proyecto editorial de iGaming para México y LATAM con guías, reseñas, canales sociales y estándares de tráfico responsable.",
  path: "/partners",
});

export default function PartnersPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Socios / Media Kit", path: "/partners" },
  ]);

  return (
    <Container className="py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <article className="mx-auto max-w-3xl space-y-6">
        <header className="space-y-3">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Socios / Media Kit
          </h1>
          <p className="text-muted-foreground sm:text-base">
            JugadaMax es un proyecto editorial de iGaming para México y Spanish LATAM, enfocado en
            guías, reseñas, métodos de pago, casinos crypto, apuestas y juego responsable para
            audiencias mayores de 18 años.
          </p>
          <p className="text-sm text-muted-foreground sm:text-base">
            Esta página resume nuestro enfoque editorial, canales de tráfico y estándares para
            posibles socios, afiliados y managers de iGaming.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Qué es JugadaMax</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            JugadaMax (jugadamax.com) es un proyecto editorial y de medios en crecimiento. Publicamos
            reseñas de casinos, guías de casinos crypto, guías de métodos de pago, contenido de
            apuestas y información de juego responsable. Nuestro enfoque es México y Spanish LATAM
            primero.
          </p>
          <p className="text-sm text-muted-foreground sm:text-base">
            No operamos casinos, no procesamos apuestas, depósitos ni retiros. Somos un sitio
            informativo y editorial.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Audiencia</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Usuarios hispanohablantes interesados en casinos online, apuestas deportivas, pagos
            crypto, métodos de pago fiat/locales y juego responsable. Todo el contenido está pensado
            para personas mayores de 18 años.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Canales de tráfico</h2>
          <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
            <li>SEO — guías, reseñas y páginas verticales</li>
            <li>TikTok — contenido social en formato corto</li>
            <li>Instagram — actualizaciones visuales</li>
            <li>YouTube — guías y contenido en video</li>
            <li>Telegram — canal oficial de novedades</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Estándares de tráfico</h2>
          <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
            <li>Solo mayores de 18 años</li>
            <li>Juego responsable en páginas relevantes</li>
            <li>Sin bots</li>
            <li>Sin spam</li>
            <li>Sin tráfico incentivado</li>
            <li>Sin reseñas falsas</li>
            <li>Sin pruebas falsas de pagos</li>
            <li>Sin mensajes de VPN o evasión de restricciones</li>
            <li>Sin targeting de jurisdicciones prohibidas</li>
            <li>Sin promesas engañosas de bonos o ganancias</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Qué no hacemos</h2>
          <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
            <li>Reseñas falsas o valoraciones inventadas</li>
            <li>Capturas falsas de pagos o retiros</li>
            <li>Ganancias garantizadas o retiros instantáneos prometidos</li>
            <li>Promesas engañosas de bonos</li>
            <li>Targeting de GEO prohibidos</li>
            <li>Contenido de VPN o evasión de controles</li>
            <li>Contenido dirigido a menores</li>
            <li>Tráfico de bots o spam</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Oportunidades de colaboración</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Estamos abiertos a conversar sobre alianzas de afiliación, reseñas editoriales, guías de
            métodos de pago, guías de casinos crypto, campañas de juego responsable para audiencias
            18+ y colaboraciones de contenido para México y LATAM.
          </p>
          <p className="text-sm text-muted-foreground sm:text-base">
            Evaluamos operadores de forma individual, publicamos pros y contras equilibrados y
            aplicamos atributos sponsored/nofollow en enlaces de afiliado cuando corresponda. No
            afirmamos partnerships aprobados que no existan.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Contacto</h2>
          <ul className="space-y-2 text-sm text-muted-foreground sm:text-base">
            <li>
              Email:{" "}
              <a
                href="mailto:jugadamaxcom@gmail.com"
                className="font-medium text-primary underline underline-offset-2"
              >
                jugadamaxcom@gmail.com
              </a>
            </li>
            <li>
              Telegram:{" "}
              <a
                href="https://t.me/jugadamax"
                target="_blank"
                rel="me noopener noreferrer"
                className="font-medium text-primary underline underline-offset-2"
              >
                @jugadamax
              </a>
            </li>
          </ul>
          <p className="text-sm text-muted-foreground sm:text-base">
            También podemos compartir información adicional del proyecto por email o Telegram.
          </p>
        </section>

        <p className="text-xs text-muted-foreground">
          Solo para mayores de 18 años. Juego responsable. JugadaMax es un sitio editorial — no un
          operador de casino.
        </p>
      </article>
    </Container>
  );
}
