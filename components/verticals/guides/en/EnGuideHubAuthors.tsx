import Link from "next/link";
import { EN_GUIDE_AUTHOR_DISPLAY } from "@/components/verticals/guides/en/en-guide-hub-config";
import { getAuthors } from "@/lib/content";
import {
  ARTURS_STOLIKS_LINKEDIN_URL,
  JUGADAMAX_COMPANY_LINKEDIN_URL,
} from "@/lib/site";
import { cn, focusRing } from "@/lib/utils";
import type { Author } from "@/types/content";

/** Prefer human author before organizational editorial entity. */
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

/**
 * Editorial author cards for English Guide Hub — English display copy only.
 */
export function EnGuideHubAuthors() {
  const authors = orderGuideHubAuthors(getAuthors()).filter(
    (author) => author.id in EN_GUIDE_AUTHOR_DISPLAY,
  );

  return (
    <section
      id="editorial-authors"
      aria-labelledby="editorial-authors-heading"
      className="scroll-mt-24 rounded-2xl border border-cyan-500/15 bg-gradient-to-b from-[#101820]/80 to-[#0c121c]/50 p-4 sm:p-5"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="editorial-authors-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Authors and editorial team
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Clear attribution for English learning content. LinkedIn is used for identity and
          distribution, not as a factual source.
        </p>
      </div>

      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
        {authors.map((author) => {
          const display =
            EN_GUIDE_AUTHOR_DISPLAY[author.id as keyof typeof EN_GUIDE_AUTHOR_DISPLAY];
          const isOrg = author.kind === "organization";
          const linkedInHref = isOrg
            ? JUGADAMAX_COMPANY_LINKEDIN_URL
            : (author.links?.find((link) => /linkedin/i.test(link.url))?.url ??
              ARTURS_STOLIKS_LINKEDIN_URL);
          const linkedInLabel = isOrg ? "JugadaMax LinkedIn" : "LinkedIn";

          return (
            <li key={author.id}>
              <article className="flex h-full flex-col rounded-xl border border-white/10 bg-[#111417]/75 p-4">
                <div className="flex items-start gap-3">
                  <AuthorMonogram author={author} />
                  <div className="min-w-0">
                    <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent">
                      {display.kindLabel}
                    </p>
                    <h3 className="mt-0.5 text-lg font-bold text-foreground">
                      {display.displayName}
                    </h3>
                    <p className="text-sm text-muted-foreground">{display.role}</p>
                  </div>
                </div>

                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {display.bio}
                </p>

                <ul
                  className="mt-3 flex flex-wrap gap-1.5"
                  aria-label="Specialties"
                >
                  {display.specialties.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/12 bg-[#0A1931]/60 px-2.5 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  <Link
                    href={display.profileHref}
                    className={cn(
                      "inline-flex min-h-11 items-center rounded-md border border-primary/35 bg-primary/10 px-3.5 text-sm font-semibold text-primary",
                      focusRing,
                    )}
                  >
                    {display.profileCta}
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
