import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = buildMetadata({
  title: "Política de privacidad",
  description:
    "Conoce cómo JugadaMax trata la información de contacto, datos técnicos básicos, enlaces externos y privacidad en su sitio editorial sobre casinos online y apuestas.",
  path: "/politica-de-privacidad",
});

export default function PoliticaDePrivacidadPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Política de privacidad", path: "/politica-de-privacidad" },
  ]);

  return (
    <Container className="py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <article className="mx-auto max-w-3xl space-y-6">
        <header className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Política de privacidad
          </h1>
          <p className="text-muted-foreground">
            Última actualización: julio de 2026. Esta política describe cómo JugadaMax trata la
            información en su sitio editorial.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Quiénes somos</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            JugadaMax (jugadamax.com) es un sitio editorial y de medios sobre casinos online,
            apuestas deportivas, métodos de pago y juego responsable, con enfoque en México y
            LATAM. No operamos casinos, no procesamos apuestas, depósitos ni retiros.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Qué información podemos tratar</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Como sitio informativo, podemos tratar datos limitados: información que nos envíes por
            correo, datos técnicos básicos de navegación (como dirección IP, tipo de navegador o
            páginas visitadas) y datos agregados de analítica si están activos.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Información de contacto</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Si nos escribes por email, usamos tu mensaje y datos de contacto para responder
            consultas editoriales, correcciones o propuestas de colaboración. No vendemos listas de
            contacto ni compartimos tu correo con operadores de juego por defecto.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Datos técnicos, cookies y analítica</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Podemos usar cookies o tecnologías similares para funcionamiento básico, medición de
            tráfico o mejoras del sitio. Si implementamos herramientas de analítica, buscamos
            configurarlas de forma agregada. Puedes gestionar cookies desde la configuración de tu
            navegador.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Enlaces externos y operadores de juego</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            JugadaMax enlaza a sitios de terceros, incluidos operadores de casino y apuestas. Esos
            sitios tienen sus propias políticas de privacidad, términos y prácticas de datos. Al
            salir de jugadamax.com, aplican las reglas del sitio de destino.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Afiliados y medición de clics</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Algunos enlaces son de afiliado. Cuando un enlace está activo y aprobado, podemos recibir
            una comisión si te registras en un operador. Esto puede implicar parámetros de seguimiento
            en la URL del operador. Consulta nuestra{" "}
            <a href="/divulgacion-afiliados" className="font-medium text-primary underline underline-offset-2">
              divulgación de afiliados
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Menores de edad</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            JugadaMax está dirigido a personas mayores de 18 años. No recopilamos de forma
            intencionada información de menores. Si detectamos datos de un menor, procuraremos
            eliminarlos.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Seguridad</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Aplicamos medidas razonables para proteger la información que gestionamos. Ningún sitio
            web puede garantizar seguridad absoluta; te recomendamos no enviar datos sensibles por
            canales no seguros.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Cambios en esta política</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Podemos actualizar esta política para reflejar cambios en el sitio o en nuestras
            prácticas. La fecha de actualización se indicará en esta página.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Contacto</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Para consultas sobre privacidad:{" "}
            <a
              href="mailto:jugadamaxcom@gmail.com"
              className="font-medium text-primary underline underline-offset-2"
            >
              jugadamaxcom@gmail.com
            </a>
            .
          </p>
        </section>

        <p className="text-xs text-muted-foreground">
          Solo para mayores de 18 años. Juega de forma responsable.
        </p>
      </article>
    </Container>
  );
}
