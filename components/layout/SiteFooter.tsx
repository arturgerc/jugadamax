import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { primaryNav, legalNav } from "@/components/layout/nav-links";
import { ResponsibleGamblingNotice } from "@/components/trust/ResponsibleGamblingNotice";
import { Logo } from "@/components/brand/Logo";
import { SocialLinks } from "@/components/social/SocialLinks";
import { focusRing, cn } from "@/lib/utils";

/**
 * Site footer. Includes primary content links plus all trust/legal links
 * (Navigation contract, SC-002) and a persistent responsible-gambling +18
 * notice.
 */
export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-border/60 bg-[var(--jm-graphite)]">
      <Container className="max-w-7xl py-10">
        <ResponsibleGamblingNotice className="mb-8" />

        <Link href="/" aria-label="JugadaMax — Inicio" className={cn("mb-8 inline-flex rounded-md", focusRing)}>
          <Logo size="sm" decorative />
        </Link>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <nav aria-label="Secciones">
            <h2 className="mb-3 text-sm font-semibold text-foreground">Secciones</h2>
            <ul className="space-y-2">
              {primaryNav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground",
                      focusRing,
                    )}
                  >
                    {link.footerLabel ?? link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Información y legal">
            <h2 className="mb-3 text-sm font-semibold text-foreground">Información</h2>
            <ul className="space-y-2">
              {legalNav.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={cn(
                      "rounded-sm text-sm text-muted-foreground transition-colors hover:text-foreground",
                      focusRing,
                    )}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks variant="footer" />
        </div>

        <p className="mt-10 text-xs text-muted-foreground">
          © {year} JugadaMax. Información sobre casinos crypto, casinos fiat y apuestas deportivas en
          México. Solo para mayores de 18 años. Juega de forma responsable.
        </p>
      </Container>
    </footer>
  );
}
