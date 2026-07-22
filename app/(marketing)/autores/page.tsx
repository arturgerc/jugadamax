import type { Metadata } from "next";
import Link from "next/link";
import { getAuthors } from "@/lib/content";
import { buildMetadata } from "@/lib/seo/metadata";
import { breadcrumbJsonLd } from "@/lib/seo/jsonld";
import { Container } from "@/components/layout/Container";
import {
  ARTURS_STOLIKS_LINKEDIN_URL,
  JUGADAMAX_COMPANY_LINKEDIN_URL,
} from "@/lib/site";
import { cn, focusRing } from "@/lib/utils";

export const metadata: Metadata = buildMetadata({
  title: "Autores de JugadaMax",
  description:
    "Conoce al equipo editorial de JugadaMax: autores identificados, metodología pública y contenido para México y LATAM. 18+.",
  path: "/autores",
});

export default function AuthorsIndexPage() {
  const authors = getAuthors();
  const breadcrumb = breadcrumbJsonLd([
    { name: "Inicio", path: "/" },
    { name: "Autores", path: "/autores" },
  ]);

  return (
    <Container className="max-w-7xl py-6 sm:py-8 lg:py-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <header className="mb-7 max-w-3xl space-y-2 sm:mb-10">
        <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Autores
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
          Perfiles editoriales de JugadaMax. LinkedIn se usa para identidad y distribución, no como
          fuente factual de operadores o promociones.
        </p>
      </header>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {authors.map((author) => {
          const isOrg = author.kind === "organization";
          const linkedInHref = isOrg
            ? JUGADAMAX_COMPANY_LINKEDIN_URL
            : ARTURS_STOLIKS_LINKEDIN_URL;
          const linkedInLabel = isOrg ? "LinkedIn JugadaMax" : "LinkedIn";

          return (
            <li key={author.id}>
              <article className="flex h-full flex-col rounded-xl border border-white/10 bg-[#111417]/60 p-4">
                <div className="flex items-start gap-3">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "inline-flex size-11 shrink-0 items-center justify-center rounded-xl border text-sm font-bold",
                      isOrg
                        ? "border-cyan-400/30 bg-[#0d1a22] text-cyan-200"
                        : "border-emerald-400/30 bg-[#0f1c18] text-emerald-200",
                    )}
                  >
                    {isOrg ? "JM" : "AS"}
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                      {isOrg ? "Equipo editorial" : "Autor"}
                    </p>
                    <h2 className="mt-0.5 text-lg font-bold text-foreground">
                      {author.name}
                    </h2>
                    {author.role ? (
                      <p className="text-sm text-muted-foreground">{author.role}</p>
                    ) : null}
                  </div>
                </div>
                {author.bio ? (
                  <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">
                    {author.bio}
                  </p>
                ) : null}
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  <Link
                    href={`/autores/${author.slug}`}
                    className={cn(
                      "inline-flex min-h-11 items-center rounded-md border border-primary/35 bg-primary/10 px-3.5 text-sm font-semibold text-primary",
                      focusRing,
                    )}
                  >
                    {isOrg ? "Conocer al equipo" : "Ver perfil"}
                  </Link>
                  <a
                    href={linkedInHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex min-h-11 items-center rounded-md border border-white/15 px-3.5 text-sm font-medium text-foreground",
                      focusRing,
                    )}
                  >
                    {linkedInLabel}
                  </a>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
