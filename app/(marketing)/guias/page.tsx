import type { Metadata } from "next";
import { getArticles } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { ArticleList } from "@/components/content/ArticleList";

export const metadata: Metadata = buildMetadata({
  title: "Guías de casinos y apuestas en México",
  description:
    "Guías editoriales de JugadaMax para elegir casinos crypto, casinos fiat y casas de apuestas en México con información clara y juego responsable +18.",
  path: "/guias",
});

export default function GuidesIndexPage() {
  const guides = getArticles("guide");
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Guías", path: "/guias" },
  ]);

  return (
    <Container className="py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <header className="mb-6 space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Guías</h1>
        <p className="max-w-2xl text-muted-foreground">
          Guías editoriales para elegir y comparar operadores en México de forma informada.
        </p>
      </header>

      <ArticleList articles={guides} />
    </Container>
  );
}
