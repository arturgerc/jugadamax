import {
  CONTACT_COPY,
  CONTACT_LINKS,
  type ContactLocale,
} from "@/components/verticals/contact/contact-config";
import { SocialIcon } from "@/components/social/SocialIcon";
import { cn, focusRing } from "@/lib/utils";

const SECONDARY = [
  { kind: "tiktok" as const, href: CONTACT_LINKS.tiktokHref, label: "TikTok" },
  {
    kind: "instagram" as const,
    href: CONTACT_LINKS.instagramHref,
    label: "Instagram",
  },
  {
    kind: "youtube" as const,
    href: CONTACT_LINKS.youtubeHref,
    label: "YouTube",
  },
];

export function ContactSocialSecondary({ locale }: { locale: ContactLocale }) {
  const copy = CONTACT_COPY[locale];

  return (
    <section
      aria-labelledby="contact-social-heading"
      className="mb-7 sm:mb-10"
    >
      <div className="mb-3 max-w-3xl space-y-1.5">
        <h2
          id="contact-social-heading"
          className="text-lg font-bold tracking-tight text-foreground sm:text-xl"
        >
          {copy.socialTitle}
        </h2>
        <p className="text-sm text-muted-foreground">{copy.socialBody}</p>
      </div>

      <ul className="flex flex-wrap gap-2">
        {SECONDARY.map((item) => (
          <li key={item.kind}>
            <a
              href={item.href}
              target="_blank"
              rel="me noopener noreferrer"
              aria-label={item.label}
              className={cn(
                "inline-flex min-h-10 items-center gap-2 rounded-md border border-white/12 bg-[#111417]/60 px-3 text-sm font-medium text-muted-foreground transition-colors hover:border-white/20 hover:text-foreground",
                focusRing,
              )}
            >
              <SocialIcon kind={item.kind} className="h-4 w-4" />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
