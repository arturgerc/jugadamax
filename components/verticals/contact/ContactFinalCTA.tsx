import Link from "next/link";
import {
  CONTACT_COPY,
  CONTACT_LINKS,
  type ContactLocale,
} from "@/components/verticals/contact/contact-config";
import { cn, focusRing } from "@/lib/utils";

export function ContactFinalCTA({ locale }: { locale: ContactLocale }) {
  const copy = CONTACT_COPY[locale];

  return (
    <section
      aria-labelledby="contact-final-heading"
      className="mb-7 sm:mb-10"
    >
      <div className="overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-[#1a160f]/90 via-[#111417] to-[#0A1931] p-5 sm:p-6 lg:p-8">
        <h2
          id="contact-final-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          {copy.finalTitle}
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          {copy.finalBody}
        </p>
        <p className="mt-3 text-sm">
          <span className="text-muted-foreground">Email: </span>
          <a
            href={CONTACT_LINKS.emailHref}
            className={cn(
              "font-semibold text-primary underline underline-offset-2",
              focusRing,
            )}
          >
            {CONTACT_LINKS.emailDisplay}
          </a>
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          <a
            href={CONTACT_LINKS.emailHref}
            className={cn(
              "inline-flex min-h-11 items-center rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[var(--jm-gold-strong)]",
              focusRing,
            )}
          >
            {copy.finalEmailCta}
          </a>
          <a
            href={CONTACT_LINKS.telegramHref}
            target="_blank"
            rel="me noopener noreferrer"
            className={cn(
              "inline-flex min-h-11 items-center rounded-md border border-white/15 bg-[#111417]/60 px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/45",
              focusRing,
            )}
          >
            {copy.finalTelegramCta}
          </a>
          <Link
            href={copy.mediaKitHref}
            className={cn(
              "inline-flex min-h-11 items-center rounded-md border border-white/15 bg-[#111417]/60 px-4 text-sm font-medium text-foreground transition-colors hover:border-primary/45",
              focusRing,
            )}
          >
            {copy.finalMediaKitCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
