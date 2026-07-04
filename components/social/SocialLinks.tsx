import type { ReactNode } from "react";
import { cn, focusRing } from "@/lib/utils";
import { SocialIcon } from "@/components/social/SocialIcon";
import {
  OFFICIAL_SOCIAL_LINKS,
  type SocialLinkItem,
} from "@/components/social/social-links-data";
import type { UiLocale } from "@/lib/i18n/ui-labels";

export type SocialLinksVariant = "footer" | "contact" | "floating";

function contactDescription(item: SocialLinkItem, locale: UiLocale): string {
  if (locale === "en") {
    const en: Partial<Record<SocialLinkItem["kind"], string>> = {
      email: "Editorial inquiries and partnerships",
      telegram: "Official news channel",
      tiktok: "Short-form social content",
      youtube: "Guides and video content",
      instagram: "Visual updates",
      linkedin: "JugadaMax company page",
    };
    return en[item.kind] ?? item.description;
  }
  return item.description;
}

function socialAriaLabel(item: SocialLinkItem, locale: UiLocale): string {
  if (locale === "en") {
    const en: Partial<Record<SocialLinkItem["kind"], string>> = {
      email: "Send email to JugadaMax",
      telegram: "Visit JugadaMax on Telegram",
      tiktok: "Visit JugadaMax on TikTok",
      youtube: "Visit JugadaMax on YouTube",
      instagram: "Visit JugadaMax on Instagram",
      linkedin: "Visit JugadaMax on LinkedIn",
    };
    return en[item.kind] ?? item.ariaLabel;
  }
  return item.ariaLabel;
}

function SocialAnchor({
  item,
  className,
  children,
}: {
  item: SocialLinkItem;
  className?: string;
  children: ReactNode;
}) {
  const isEmail = item.kind === "email";

  return (
    <a
      href={item.url}
      aria-label={item.ariaLabel}
      {...(isEmail
        ? {}
        : {
            target: "_blank",
            rel: "me noopener noreferrer",
          })}
      className={className}
    >
      {children}
    </a>
  );
}

function FooterSocialLinks({ locale }: { locale: UiLocale }) {
  const heading = locale === "en" ? "Follow us" : "Síguenos";
  const aria = locale === "en" ? "Official social channels" : "Redes sociales oficiales";

  return (
    <nav aria-label={aria}>
      <h2 className="mb-3 text-sm font-semibold text-foreground">{heading}</h2>
      <ul className="flex flex-wrap gap-2">
        {OFFICIAL_SOCIAL_LINKS.map((item) => (
          <li key={item.kind}>
            <SocialAnchor
              item={{ ...item, ariaLabel: socialAriaLabel(item, locale) }}
              className={cn(
                "inline-flex min-h-10 items-center gap-2 rounded-lg border border-border/60 bg-[var(--jm-navy)] px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground",
                focusRing,
              )}
            >
              <SocialIcon kind={item.kind} />
              <span className="hidden sm:inline">{item.label}</span>
            </SocialAnchor>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ContactSocialLinks({ locale }: { locale: UiLocale }) {
  return (
    <ul className="space-y-3">
      {OFFICIAL_SOCIAL_LINKS.map((item) => (
        <li key={item.kind}>
          <SocialAnchor
            item={{ ...item, ariaLabel: socialAriaLabel(item, locale) }}
            className={cn(
              "group flex gap-4 rounded-lg border border-border/60 bg-card p-4 transition-colors hover:border-primary/40",
              focusRing,
            )}
          >
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-[var(--jm-navy)]">
              <SocialIcon kind={item.kind} className="h-5 w-5" />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block text-sm font-semibold text-foreground group-hover:text-primary">
                {item.label}
              </span>
              <span className="mt-0.5 block text-sm text-muted-foreground">
                {contactDescription(item, locale)}
              </span>
              <span className="mt-1 block truncate text-xs text-primary/90 underline-offset-2 group-hover:underline">
                {item.kind === "email" ? "jugadamaxcom@gmail.com" : item.url.replace(/^https?:\/\//, "")}
              </span>
            </span>
          </SocialAnchor>
        </li>
      ))}
    </ul>
  );
}

function FloatingSocialLinks() {
  return (
    <aside
      aria-label="Canales oficiales"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <div className="flex flex-col gap-2.5 rounded-2xl border border-border/70 bg-[var(--jm-graphite)]/95 p-3 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.55)] backdrop-blur-sm">
        {OFFICIAL_SOCIAL_LINKS.filter((item) => item.kind !== "email").map((item) => (
          <SocialAnchor
            key={item.kind}
            item={item}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-transparent text-muted-foreground transition-[transform,colors,border-color,background-color] duration-200 hover:scale-[1.04] hover:border-primary/35 hover:bg-[var(--jm-navy)] hover:text-foreground",
              focusRing,
            )}
          >
            <SocialIcon kind={item.kind} className="h-[22px] w-[22px]" />
          </SocialAnchor>
        ))}
      </div>
    </aside>
  );
}

export function SocialLinks({
  variant,
  locale = "es",
}: {
  variant: SocialLinksVariant;
  locale?: UiLocale;
}) {
  switch (variant) {
    case "footer":
      return <FooterSocialLinks locale={locale} />;
    case "contact":
      return <ContactSocialLinks locale={locale} />;
    case "floating":
      return <FloatingSocialLinks />;
    default:
      return null;
  }
}
