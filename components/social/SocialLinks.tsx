import type { ReactNode } from "react";
import { cn, focusRing } from "@/lib/utils";
import { SocialIcon } from "@/components/social/SocialIcon";
import {
  OFFICIAL_SOCIAL_LINKS,
  type SocialLinkItem,
} from "@/components/social/social-links-data";

export type SocialLinksVariant = "footer" | "contact" | "floating";

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

function FooterSocialLinks() {
  return (
    <nav aria-label="Redes sociales oficiales">
      <h2 className="mb-3 text-sm font-semibold text-foreground">Síguenos</h2>
      <ul className="flex flex-wrap gap-2">
        {OFFICIAL_SOCIAL_LINKS.map((item) => (
          <li key={item.kind}>
            <SocialAnchor
              item={item}
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

function ContactSocialLinks() {
  return (
    <ul className="space-y-3">
      {OFFICIAL_SOCIAL_LINKS.map((item) => (
        <li key={item.kind}>
          <SocialAnchor
            item={item}
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
                {item.description}
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
      className="fixed right-3 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <div className="flex flex-col gap-1.5 rounded-xl border border-border/60 bg-[var(--jm-graphite)]/95 p-2 shadow-lg backdrop-blur-sm">
        {OFFICIAL_SOCIAL_LINKS.filter((item) => item.kind !== "email").map((item) => (
          <SocialAnchor
            key={item.kind}
            item={item}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-[var(--jm-navy)] hover:text-foreground",
              focusRing,
            )}
          >
            <SocialIcon kind={item.kind} />
          </SocialAnchor>
        ))}
      </div>
    </aside>
  );
}

export function SocialLinks({ variant }: { variant: SocialLinksVariant }) {
  switch (variant) {
    case "footer":
      return <FooterSocialLinks />;
    case "contact":
      return <ContactSocialLinks />;
    case "floating":
      return <FloatingSocialLinks />;
    default:
      return null;
  }
}
