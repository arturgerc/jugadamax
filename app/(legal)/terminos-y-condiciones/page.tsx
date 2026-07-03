import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";

export const metadata: Metadata = buildMetadata({
  title: "Términos y condiciones",
  description:
    "Consulta los términos de uso de JugadaMax, un sitio editorial para mayores de 18 años sobre casinos online, apuestas, métodos de pago y juego responsable.",
  path: "/terminos-y-condiciones",
});

export default function TerminosYCondicionesPage() {
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Términos y condiciones", path: "/terminos-y-condiciones" },
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
            Términos y condiciones
          </h1>
          <p className="text-muted-foreground">
            Última actualización: julio de 2026. Al usar jugadamax.com aceptas estos términos.
          </p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Uso del sitio</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            JugadaMax es un sitio informativo y editorial. Puedes leer guías, reseñas y contenido
            sobre casinos online y apuestas siempre que lo uses de forma lícita y responsable. No
            debes intentar dañar el sitio, acceder sin autorización ni usar el contenido para
            actividades fraudulentas.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Contenido editorial</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Nuestro contenido es informativo y editorial. No constituye asesoría legal, financiera,
            fiscal ni de apuestas. Las reseñas reflejan evaluaciones editoriales, no garantías sobre
            operadores, bonos o resultados.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Mayores de 18 años</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            El sitio está dirigido a personas mayores de 18 años en jurisdicciones donde el juego
            online esté permitido para adultos. Si eres menor de edad, no debes usar este sitio ni
            registrarte en operadores enlazados.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Juego responsable</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Promovemos el juego responsable. El juego online debe ser entretenimiento, no una fuente
            de ingresos. Consulta nuestra página de{" "}
            <a href="/juego-responsable" className="font-medium text-primary underline underline-offset-2">
              juego responsable
            </a>{" "}
            para recomendaciones y señales de riesgo.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Información sobre operadores</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Describimos operadores según información pública y nuestra metodología editorial. La
            disponibilidad, licencias, bonos, pagos y términos pueden cambiar. Debes verificar
            siempre la información directamente en el sitio oficial del operador y en la legislación
            aplicable en tu jurisdicción.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Enlaces externos y afiliados</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Algunos enlaces son de afiliado. Si te registras a través de ellos y el enlace está
            activo, podemos recibir compensación. Esto no tiene costo adicional para ti. Consulta la{" "}
            <a href="/divulgacion-afiliados" className="font-medium text-primary underline underline-offset-2">
              divulgación de afiliados
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">
            Sin garantía de disponibilidad, bonos o resultados
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            JugadaMax no garantiza ganancias, pagos, bonos, cuotas, disponibilidad de operadores ni
            resultados de juego. Cada operador define sus propias condiciones y puede restringir
            países, métodos de pago o promociones.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Responsabilidad del usuario</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Eres responsable de verificar la legalidad del juego online en tu jurisdicción, leer los
            términos del operador, gestionar tu presupuesto y decidir si un sitio o promoción te
            conviene. JugadaMax no procesa apuestas ni fondos de jugadores.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Propiedad intelectual</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            El contenido editorial, diseño y marca de JugadaMax están protegidos. No reproduzcas
            material del sitio con fines comerciales sin autorización. Las marcas de operadores
            pertenecen a sus respectivos titulares.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Cambios en los términos</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Podemos actualizar estos términos. Los cambios relevantes se reflejarán en esta página
            con una fecha de actualización.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold text-foreground">Contacto</h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Consultas sobre estos términos:{" "}
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
