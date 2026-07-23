import Link from "next/link";
import {
  PARTNERS_CONTACT,
  PARTNERS_COPY,
  type PartnersLocale,
} from "@/components/verticals/partners/partners-config";
import {
  authorLinkedInHref,
  authorProfileHref,
} from "@/components/verticals/partners/partners-data";
import { cn, focusRing } from "@/lib/utils";
import type { Author } from "@/types/content";

export function PartnersEditorialIdentity({
  locale,
  authors,
}: {
  locale: PartnersLocale;
  authors: Author[];
}) {
  const copy = PARTNERS_COPY[locale];

  return (
    <section
      aria-labelledby="partners-identity-heading"
      className="mb-8 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="partners-identity-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          {copy.identityTitle}
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          {copy.identityBody}
        </p>
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {authors.map((author) => {
          const isOrg = author.kind === "organization";
          const linkedIn =
            authorLinkedInHref(author) ??
            (isOrg
              ? PARTNERS_CONTACT.companyLinkedInHref
              : PARTNERS_CONTACT.founderLinkedInHref);

          return (
            <li key={author.id}>
              <article className="flex h-full flex-col rounded-xl border border-white/10 bg-[#111417]/75 p-4">
                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-accent">
                  {isOrg
                    ? locale === "es"
                      ? "Equipo editorial"
                      : "Editorial desk"
                    : locale === "es"
                      ? "Fundador"
                      : "Founder"}
                </p>
                <h3 className="mt-1 text-lg font-bold text-foreground">
                  {author.name}
                </h3>
                {author.role ? (
                  <p className="text-sm text-muted-foreground">{author.role}</p>
                ) : null}
                {author.bio ? (
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {author.bio}
                  </p>
                ) : null}
                <div className="mt-auto flex flex-wrap gap-2 pt-4">
                  <Link
                    href={authorProfileHref(author, locale)}
                    className={cn(
                      "inline-flex min-h-11 items-center rounded-md border border-primary/35 bg-primary/10 px-3.5 text-sm font-semibold text-primary",
                      focusRing,
                    )}
                  >
                    {copy.profileCta}
                  </Link>
                  <a
                    href={linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "inline-flex min-h-11 items-center rounded-md border border-white/15 bg-white/[0.03] px-3.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40",
                      focusRing,
                    )}
                  >
                    {copy.linkedInCta}
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
