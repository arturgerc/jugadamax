import Link from "next/link";
import { ABOUT_AUTHOR_ORDER } from "@/components/verticals/about/about-config";
import { getAuthors } from "@/lib/content";
import {
  ARTURS_STOLIKS_LINKEDIN_URL,
  JUGADAMAX_COMPANY_LINKEDIN_URL,
} from "@/lib/site";
import { cn, focusRing } from "@/lib/utils";
import type { Author } from "@/types/content";

function orderAboutAuthors(authors: Author[]): Author[] {
  return [...authors].sort((a, b) => {
    const ai = ABOUT_AUTHOR_ORDER.indexOf(
      a.id as (typeof ABOUT_AUTHOR_ORDER)[number],
    );
    const bi = ABOUT_AUTHOR_ORDER.indexOf(
      b.id as (typeof ABOUT_AUTHOR_ORDER)[number],
    );
    const aRank = ai === -1 ? ABOUT_AUTHOR_ORDER.length : ai;
    const bRank = bi === -1 ? ABOUT_AUTHOR_ORDER.length : bi;
    return aRank - bRank;
  });
}

function AuthorMonogram({ author }: { author: Author }) {
  const isOrg = author.kind === "organization";
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-flex size-12 shrink-0 items-center justify-center rounded-xl border text-sm font-bold tracking-tight",
        isOrg
          ? "border-cyan-400/30 bg-gradient-to-br from-[#0d1a22] to-[#0A1931] text-cyan-200 shadow-[0_0_18px_-8px_rgba(34,211,238,0.35)]"
          : "border-emerald-400/30 bg-gradient-to-br from-[#0f1c18] to-[#0A1931] text-emerald-200 shadow-[0_0_18px_-8px_rgba(16,185,129,0.35)]",
      )}
    >
      {isOrg ? "JM" : "AS"}
    </span>
  );
}

export function AboutAuthors() {
  const authors = orderAboutAuthors(getAuthors()).filter(
    (author) =>
      author.id === "arturs-stoliks" || author.id === "redaccion-jugadamax",
  );

  return (
    <section
      id="autores"
      aria-labelledby="about-authors-heading"
      className="mb-8 scroll-mt-24 rounded-2xl border border-cyan-500/15 bg-gradient-to-b from-[#101820]/80 to-[#0c121c]/50 p-4 sm:mb-10 sm:p-5"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="about-authors-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Autores y equipo editorial
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Atribución clara. LinkedIn se usa para identidad y distribución, no como fuente factual
          de operadores o calificaciones.
        </p>
      </div>

      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {authors.map((author) => {
          const isOrg = author.kind === "organization";
          const linkedInHref = isOrg
            ? JUGADAMAX_COMPANY_LINKEDIN_URL
            : (author.links?.find((link) => /linkedin/i.test(link.url))?.url ??
              ARTURS_STOLIKS_LINKEDIN_URL);
          const kindLabel = isOrg ? "Equipo editorial" : "Autor";
          const displayName = isOrg ? "Redacción JugadaMax" : author.name;
          const role = isOrg
            ? "Redacción JugadaMax"
            : (author.role ?? "Fundador y editor de JugadaMax");
          const profileCta = isOrg ? "Conocer al equipo" : "Ver perfil";

          return (
            <li key={author.id}>
              <article className="flex h-full flex-col rounded-xl border border-white/10 bg-[#111417]/75 p-4">
                <div className="flex items-start gap-3">
                  <AuthorMonogram author={author} />
                  <div className="min-w-0">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent">
                      {kindLabel}
                    </p>
                    <h3 className="mt-0.5 text-lg font-bold text-foreground">
                      {displayName}
                    </h3>
                    <p className="text-sm text-muted-foreground">{role}</p>
                  </div>
                </div>

                {author.bio ? (
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
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
                    {profileCta}
                  </Link>
                  <a
                    href={linkedInHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex min-h-11 items-center rounded-md border border-white/15 bg-white/[0.03] px-3.5 text-sm font-medium text-foreground transition-colors hover:border-cyan-400/40",
                      focusRing,
                    )}
                  >
                    {isOrg ? "LinkedIn JugadaMax" : "LinkedIn"}
                  </a>
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
