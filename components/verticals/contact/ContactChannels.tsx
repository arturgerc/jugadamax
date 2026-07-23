import {
  CONTACT_COPY,
  CONTACT_LINKS,
  contactChannelsSectionId,
  type ContactLocale,
} from "@/components/verticals/contact/contact-config";
import { cn, focusRing } from "@/lib/utils";

export function ContactChannels({ locale }: { locale: ContactLocale }) {
  const copy = CONTACT_COPY[locale];
  const sectionId = contactChannelsSectionId(locale);

  const channels = [
    {
      key: "email",
      title: copy.channelEmailTitle,
      body: copy.channelEmailBody,
      href: CONTACT_LINKS.emailHref,
      display: CONTACT_LINKS.emailDisplay,
      cta: copy.channelEmailCta,
      external: false,
      priority: true,
    },
    {
      key: "telegram",
      title: copy.channelTelegramTitle,
      body: copy.channelTelegramBody,
      href: CONTACT_LINKS.telegramHref,
      display: CONTACT_LINKS.telegramHandle,
      cta: copy.channelTelegramCta,
      external: true,
      priority: true,
    },
    {
      key: "linkedin",
      title: copy.channelLinkedInTitle,
      body: copy.channelLinkedInBody,
      href: CONTACT_LINKS.linkedInHref,
      display: CONTACT_LINKS.linkedInLabel,
      cta: copy.channelLinkedInCta,
      external: true,
      priority: false,
    },
  ] as const;

  return (
    <section
      id={sectionId}
      aria-labelledby="contact-channels-heading"
      className="mb-7 scroll-mt-24 sm:mb-10"
    >
      <div className="mb-4 max-w-3xl space-y-1.5 sm:mb-5">
        <h2
          id="contact-channels-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
        >
          {copy.channelsTitle}
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          {copy.channelsBody}
        </p>
      </div>

      <ul className="grid gap-3 lg:grid-cols-3">
        {channels.map((channel) => (
          <li
            key={channel.key}
            className={cn(
              "flex flex-col rounded-xl border p-4",
              channel.priority
                ? "border-primary/30 bg-gradient-to-b from-[#1a160f]/80 to-[#111417]/90"
                : "border-white/12 bg-[#111417]/70",
            )}
          >
            <h3 className="text-base font-semibold tracking-tight text-foreground">
              {channel.title}
            </h3>
            <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
              {channel.body}
            </p>
            <p className="mt-3 text-sm font-semibold text-foreground">
              {channel.display}
            </p>
            <a
              href={channel.href}
              {...(channel.external
                ? { target: "_blank", rel: "me noopener noreferrer" }
                : {})}
              className={cn(
                "mt-3 inline-flex min-h-11 items-center justify-center rounded-md px-4 text-sm font-semibold transition-colors",
                channel.priority
                  ? "bg-primary text-primary-foreground hover:bg-[var(--jm-gold-strong)]"
                  : "border border-white/15 bg-[#0A1931]/50 text-foreground hover:border-primary/45",
                focusRing,
              )}
            >
              {channel.cta}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
