import Link from "next/link";
import {
  PARTNERS_CONTACT,
  PARTNERS_COPY,
  type PartnersLocale,
} from "@/components/verticals/partners/partners-config";
import { cn, focusRing } from "@/lib/utils";

export function PartnersContactCTA({ locale }: { locale: PartnersLocale }) {
  const copy = PARTNERS_COPY[locale];

  return (
    <section
      id={copy.contactSectionId}
      aria-labelledby="partners-contact-heading"
      className="mb-2 scroll-mt-24"
    >
      <div className="overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-[#1a160f]/90 via-[#111417] to-[#0A1931] p-5 sm:p-6 lg:p-8">
        <h2
          id="partners-contact-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          {copy.contactTitle}
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          {copy.contactBody}
        </p>
        <ul className="mt-4 space-y-2 text-sm sm:text-base">
          <li>
            <span className="text-muted-foreground">{copy.contactEmailLabel}: </span>
            <a
              href={PARTNERS_CONTACT.emailHref}
              className={cn(
                "font-semibold text-primary underline underline-offset-2",
                focusRing,
              )}
            >
              {PARTNERS_CONTACT.emailDisplay}
            </a>
          </li>
          <li>
            <span className="text-muted-foreground">
              {copy.contactTelegramLabel}:{" "}
            </span>
            <a
              href={PARTNERS_CONTACT.telegramHref}
              target="_blank"
              rel="me noopener noreferrer"
              className={cn(
                "font-semibold text-primary underline underline-offset-2",
                focusRing,
              )}
            >
              {PARTNERS_CONTACT.telegramHandle}
            </a>
          </li>
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href={PARTNERS_CONTACT.emailHref}
            className={cn(
              "inline-flex min-h-11 items-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]",
              focusRing,
            )}
          >
            {copy.contactEmailAction}
          </a>
          <a
            href={PARTNERS_CONTACT.telegramHref}
            target="_blank"
            rel="me noopener noreferrer"
            className={cn(
              "inline-flex min-h-11 items-center rounded-md border border-white/15 bg-[#111417]/60 px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/45",
              focusRing,
            )}
          >
            {copy.contactTelegramAction}
          </a>
          <a
            href={PARTNERS_CONTACT.linkedInHref}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex min-h-11 items-center rounded-md border border-white/15 bg-[#111417]/60 px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/45",
              focusRing,
            )}
          >
            {copy.contactLinkedInAction}
          </a>
          <Link
            href={copy.contactPageHref}
            className={cn(
              "inline-flex min-h-11 items-center rounded-md border border-white/15 bg-[#111417]/60 px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/45",
              focusRing,
            )}
          >
            {copy.contactPageAction}
          </Link>
        </div>
      </div>
    </section>
  );
}
