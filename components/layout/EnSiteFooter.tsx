import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { enFooterInfo, enFooterSections } from "@/components/layout/en-nav-links";
import { SocialLinks } from "@/components/social/SocialLinks";
import { Logo } from "@/components/brand/Logo";
import { focusRing, cn } from "@/lib/utils";

export function EnSiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border/60 bg-[var(--jm-graphite)]">
      <Container className="py-10">
        <p className="mb-8 flex flex-wrap items-center gap-2 rounded-md border border-accent/40 bg-card/60 px-4 py-3 text-sm text-muted-foreground">
          <span
            aria-label="Adults 18+ only"
            className="inline-flex shrink-0 items-center rounded bg-accent px-2 py-0.5 text-xs font-bold text-accent-foreground"
          >
            +18
          </span>
          <span>Gambling involves risk. Play responsibly. Adults 18+ only.</span>
        </p>

        <Link
          href="/en"
          aria-label="JugadaMax Global — Home"
          className={cn("mb-8 inline-flex rounded-md", focusRing)}
        >
          <Logo size="sm" decorative />
        </Link>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <nav aria-label="Sections">
            <h2 className="mb-3 text-sm font-semibold text-foreground">Sections</h2>
            <ul className="space-y-2">
              {enFooterSections.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground",
                      focusRing,
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Information">
            <h2 className="mb-3 text-sm font-semibold text-foreground">Information</h2>
            <ul className="space-y-2">
              {enFooterInfo.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground",
                      focusRing,
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks variant="footer" locale="en" />
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          © {year} JugadaMax. Independent crypto casino reviews and guides. Adults 18+ only.
          Availability varies by jurisdiction. Do not use VPNs or false location information to
          access restricted services.
        </p>
      </Container>
    </footer>
  );
}
