import type { Metadata } from "next";
import Link from "next/link";
import {
  getAuthorById,
  getCasinoById,
  getReviews,
} from "@/lib/content";
import { filterReviewsForSurface } from "@/content/operators/status";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import { AuthorByline } from "@/components/review/AuthorByline";

export const metadata: Metadata = buildMetadata({
  title: "Reseñas de casinos y casas de apuestas",
  description:
    "Reseñas editoriales de casinos crypto, casinos fiat y casas de apuestas para jugadores en México.",
  path: "/reviews",
  languageAlternates: {
    "es-MX": "/reviews",
    en: "/en/reviews",
  },
});

export default function ReviewsIndexPage() {
  const reviews = filterReviewsForSurface(getReviews(), "reviews")
    .slice()
    .sort((a, b) => {
      const publishedDifference =
        Date.parse(b.publishedAt) - Date.parse(a.publishedAt);

      if (publishedDifference !== 0) return publishedDifference;

      const updatedDifference =
        Date.parse(b.updatedAt ?? b.publishedAt) -
        Date.parse(a.updatedAt ?? a.publishedAt);

      if (updatedDifference !== 0) return updatedDifference;

      return a.title.localeCompare(b.title, "es");
    });
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Reseñas", path: "/reviews" },
  ]);

  return (
    <Container className="py-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <header className="mb-6 space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Reseñas de casinos y casas de apuestas
        </h1>
        <p className="max-w-2xl text-muted-foreground">
          Consulta reseñas editoriales de operadores analizados por JugadaMax. Revisamos información
          disponible sobre seguridad, pagos, bonos informados por el operador y experiencia de
          usuario.
        </p>
      </header>

      {reviews.length === 0 ? (
        <p className="text-sm text-muted-foreground">
          Pronto publicaremos reseñas editoriales en esta sección.
        </p>
      ) : (
        <ul className="grid gap-4 sm:grid-cols-2">
          {reviews.map((review) => {
            const casino = getCasinoById(review.casinoId);
            const author = getAuthorById(review.authorId);
            const href = `/reviews/${review.slug}`;

            return (
              <li key={review.id}>
                <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-card p-5 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.45)]">
                  {casino ? (
                    <p className="text-xs font-medium uppercase tracking-wide text-accent">
                      Reseña de {casino.name}
                    </p>
                  ) : null}
                  <h2 className="mt-1 text-lg font-semibold text-foreground">
                    <Link href={href} className="transition-colors hover:text-primary">
                      {review.title}
                    </Link>
                  </h2>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {review.verdict}
                  </p>
                  {author ? (
                    <AuthorByline
                      author={author}
                      publishedAt={review.publishedAt}
                      updatedAt={review.updatedAt}
                      className="mt-3"
                    />
                  ) : null}
                  <Link
                    href={href}
                    className="mt-4 inline-flex min-h-11 items-center text-sm font-medium text-primary underline underline-offset-2"
                  >
                    Leer reseña
                  </Link>
                </article>
              </li>
            );
          })}
        </ul>
      )}

      <p className="mt-8 text-sm text-muted-foreground">
        <Link
          href="/como-evaluamos"
          className="font-medium text-primary underline underline-offset-2 hover:text-[var(--jm-gold-strong)]"
        >
          Cómo evaluamos los operadores
        </Link>
      </p>
    </Container>
  );
}
