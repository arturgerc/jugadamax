import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticles, getAuthorBySlug, getAuthors } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  breadcrumbJsonLd,
  personJsonLd,
  profileOrganizationJsonLd,
} from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import {
  ARTURS_STOLIKS_LINKEDIN_URL,
  JUGADAMAX_COMPANY_LINKEDIN_URL,
} from "@/lib/site";
import { cn, focusRing } from "@/lib/utils";

export function generateStaticParams() {
  return getAuthors().map((author) => ({ slug: author.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) {
    return { title: "Página no encontrada", robots: { index: false, follow: true } };
  }

  return buildMetadata({
    title: `${author.name} · Autores JugadaMax`,
    description:
      author.bio ??
      `Perfil editorial de ${author.name} en JugadaMax. Contenido sobre casinos, crypto y apuestas para México.`,
    path: `/autores/${author.slug}`,
  });
}

export default async function AuthorProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  const guides = getArticles("guide").filter((g) => g.authorId === author.id);
  const news = getArticles("news").filter((n) => n.authorId === author.id);
  const isPerson = author.kind !== "organization";
  const profilePath = `/autores/${author.slug}`;
  const sameAs = [
    ...(author.links?.map((l) => l.url) ?? []),
    ...(!isPerson ? [JUGADAMAX_COMPANY_LINKEDIN_URL] : []),
  ];
  const linkedInHref = isPerson
    ? ARTURS_STOLIKS_LINKEDIN_URL
    : JUGADAMAX_COMPANY_LINKEDIN_URL;
  const linkedInLabel = isPerson ? "LinkedIn" : "LinkedIn JugadaMax";
  const monogram = isPerson ? "AS" : "JM";

  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Autores", path: "/autores" },
    { name: author.name, path: profilePath },
  ]);

  const profileLd = isPerson
    ? personJsonLd({
        name: author.name,
        path: profilePath,
        description: author.bio,
        jobTitle: author.role,
        sameAs: sameAs.length > 0 ? sameAs : undefined,
      })
    : profileOrganizationJsonLd({
        name: author.name,
        path: profilePath,
        description: author.bio,
        sameAs: sameAs.length > 0 ? sameAs : undefined,
      });

  return (
    <Container className="max-w-7xl py-6 sm:py-8 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileLd) }}
      />

      <article className="mx-auto max-w-3xl space-y-6">
        <header className="space-y-3 rounded-2xl border border-white/10 bg-gradient-to-b from-[#121820] to-[#0A1931] p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <span
              aria-hidden="true"
              className={cn(
                "inline-flex size-12 shrink-0 items-center justify-center rounded-xl border text-sm font-bold tracking-tight",
                isPerson
                  ? "border-emerald-400/30 bg-gradient-to-br from-[#0f1c18] to-[#0A1931] text-emerald-200"
                  : "border-cyan-400/30 bg-gradient-to-br from-[#0d1a22] to-[#0A1931] text-cyan-200",
              )}
            >
              {monogram}
            </span>
            <div className="min-w-0 space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                {isPerson ? "Autor" : "Equipo editorial"}
              </p>
              <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                {author.name}
              </h1>
              {author.role ? (
                <p className="text-sm font-medium text-muted-foreground sm:text-base">
                  {author.role}
                </p>
              ) : null}
            </div>
          </div>
          {author.bio ? (
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
              {author.bio}
            </p>
          ) : null}
          {author.credentials ? (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {author.credentials}
            </p>
          ) : null}
          {author.specialties && author.specialties.length > 0 ? (
            <ul className="flex flex-wrap gap-2" aria-label="Especialidades">
              {author.specialties.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/12 bg-[#0A1931]/60 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          ) : null}
          <div className="flex flex-wrap gap-2 pt-1">
            <a
              href={linkedInHref}
              target="_blank"
              rel={isPerson ? "me noopener noreferrer" : "noopener noreferrer"}
              className={cn(
                "inline-flex min-h-11 items-center rounded-md border border-primary/35 bg-primary/10 px-3.5 text-sm font-medium text-primary",
                focusRing,
              )}
            >
              {linkedInLabel}
            </a>
          </div>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Los perfiles de LinkedIn se usan para identidad y distribución. No son fuentes
            factuales de casinos, pagos, bonos o licencias.
          </p>
        </header>

        {guides.length > 0 ? (
          <section aria-labelledby="author-guides-heading" className="space-y-3">
            <h2
              id="author-guides-heading"
              className="text-xl font-bold tracking-tight text-foreground"
            >
              Guías de {author.name}
            </h2>
            <ul className="space-y-2">
              {guides.map((guide) => (
                <li key={guide.id}>
                  <Link
                    href={`/guias/${guide.slug}`}
                    className={cn(
                      "block rounded-lg border border-white/10 bg-[#111417]/50 px-3.5 py-3 transition-colors hover:border-primary/40",
                      focusRing,
                    )}
                  >
                    <span className="font-semibold text-foreground">{guide.title}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {guide.summary}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {news.length > 0 ? (
          <section aria-labelledby="author-news-heading" className="space-y-3">
            <h2
              id="author-news-heading"
              className="text-xl font-bold tracking-tight text-foreground"
            >
              Noticias
            </h2>
            <ul className="space-y-2">
              {news.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/noticias/${item.slug}`}
                    className={cn(
                      "block rounded-lg border border-white/10 bg-[#111417]/50 px-3.5 py-3 transition-colors hover:border-primary/40",
                      focusRing,
                    )}
                  >
                    <span className="font-semibold text-foreground">{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <nav aria-label="Enlaces relacionados" className="flex flex-wrap gap-2">
          <Link
            href="/guias"
            className={cn(
              "inline-flex min-h-11 items-center rounded-full border border-border/60 px-3.5 text-sm font-medium",
              focusRing,
            )}
          >
            Centro de guías
          </Link>
          <Link
            href="/como-evaluamos"
            className={cn(
              "inline-flex min-h-11 items-center rounded-full border border-border/60 px-3.5 text-sm font-medium",
              focusRing,
            )}
          >
            Cómo evaluamos
          </Link>
          <Link
            href="/autores"
            className={cn(
              "inline-flex min-h-11 items-center rounded-full border border-border/60 px-3.5 text-sm font-medium",
              focusRing,
            )}
          >
            Todos los autores
          </Link>
        </nav>
      </article>
    </Container>
  );
}
