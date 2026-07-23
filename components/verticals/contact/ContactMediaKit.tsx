import Link from "next/link";
import {
  CONTACT_COPY,
  type ContactLocale,
} from "@/components/verticals/contact/contact-config";
import { cn, focusRing } from "@/lib/utils";

export function ContactMediaKit({ locale }: { locale: ContactLocale }) {
  const copy = CONTACT_COPY[locale];

  return (
    <section
      aria-labelledby="contact-media-kit-heading"
      className="mb-7 sm:mb-10"
    >
      <div className="overflow-hidden rounded-2xl border border-emerald-500/20 bg-gradient-to-br from-[#101816]/95 via-[#111417] to-[#0A1931] p-5 sm:p-6">
        <h2
          id="contact-media-kit-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          {copy.mediaKitTitle}
        </h2>
        <p className="mt-2 max-w-3xl text-sm text-muted-foreground sm:text-base">
          {copy.mediaKitBody}
        </p>
        <Link
          href={copy.mediaKitHref}
          className={cn(
            "mt-4 inline-flex min-h-11 items-center rounded-md border border-emerald-500/35 bg-emerald-500/12 px-4 text-sm font-semibold text-emerald-200 transition-colors hover:border-emerald-400/50 hover:bg-emerald-500/18",
            focusRing,
          )}
        >
          {copy.mediaKitCta}
        </Link>
      </div>
    </section>
  );
}
