import type { Metadata } from "next";
import { getArticles } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { ArticleList } from "@/components/content/ArticleList";

export const metadata: Metadata = buildMetadata({
  title: "Noticias de casinos y apuestas en México",
  description:
    "Noticias y anuncios editoriales de JugadaMax sobre casinos crypto, casinos fiat y apuestas deportivas en México.",
  path: "/noticias",
});

export default function NewsIndexPage() {
  const items = getArticles("news");
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Noticias", path: "/noticias" },
  ]);

  return (
    <Container className="py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <header className="mb-6 space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Noticias</h1>
        <p className="max-w-2xl text-muted-foreground">
          Anuncios y notas editoriales sobre nuestra cobertura de operadores en México.
        </p>
      </header>

      <ArticleList articles={items} />
    </Container>
  );
}
