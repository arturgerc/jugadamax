import Link from "next/link";
import { getAuthors } from "@/lib/content";
import {
  ARTURS_STOLIKS_LINKEDIN_URL,
  JUGADAMAX_COMPANY_LINKEDIN_URL,
} from "@/lib/site";
import { cn, focusRing } from "@/lib/utils";
import type { Author } from "@/types/content";

/** Prefer human author before organizational editorial entity on Guide Hub. */
function orderGuideHubAuthors(authors: Author[]): Author[] {
  const preferred = ["arturs-stoliks", "redaccion-jugadamax"];
  return [...authors].sort((a, b) => {
    const ai = preferred.indexOf(a.id);
    const bi = preferred.indexOf(b.id);
    const aRank = ai === -1 ? preferred.length : ai;
    const bRank = bi === -1 ? preferred.length : bi;
    return aRank - bRank;
  });
}

function AuthorMonogram({
  author,
}: {
  author: Author;
}) {
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

/**
 * Editorial author cards for Guide Hub — Arturs first, LinkedIn identity links visible.
 */
export function GuideHubAuthors() {
  const authors = orderGuideHubAuthors(getAuthors());

  return (
    <section
      id="autores-editoriales"
      aria-labelledby="autores-editoriales-heading"
      className="scroll-mt-24 rounded-2xl border border-cyan-500/15 bg-gradient-to-b from-[#101820]/80 to-[#0c121c]/50 p-4 sm:p-5"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="autores-editoriales-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Autores y equipo editorial
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Perfiles internos con atribución clara. LinkedIn se usa para identidad y
          distribución, no como fuente factual.
        </p>
      </div>

      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {authors.map((author) => {
          const isOrg = author.kind === "organization";
          const linkedInHref = isOrg
            ? JUGADAMAX_COMPANY_LINKEDIN_URL
            : (author.links?.find((link) => /linkedin/i.test(link.url))?.url ??
              ARTURS_STOLIKS_LINKEDIN_URL);
          const linkedInLabel = isOrg ? "LinkedIn JugadaMax" : "LinkedIn";
          const profileCta = isOrg ? "Conocer al equipo" : "Ver perfil";

          return (
            <li key={author.id}>
              <article className="flex h-full flex-col rounded-xl border border-white/10 bg-[#111417]/75 p-4">
                <div className="flex items-start gap-3">
                  <AuthorMonogram author={author} />
                  <div className="min-w-0">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent">
                      {isOrg ? "Equipo editorial" : "Autor"}
                    </p>
                    <h3 className="mt-0.5 text-lg font-bold text-foreground">
                      {author.name}
                    </h3>
                    {author.role ? (
                      <p className="text-sm text-muted-foreground">{author.role}</p>
                    ) : null}
                  </div>
                </div>

                {author.bio ? (
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {author.bio}
                  </p>
                ) : null}

                {author.specialties && author.specialties.length > 0 ? (
                  <ul
                    className="mt-3 flex flex-wrap gap-1.5"
                    aria-label="Especialidades"
                  >
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
                    {linkedInLabel}
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
