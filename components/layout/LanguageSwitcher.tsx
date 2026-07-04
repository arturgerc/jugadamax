import Link from "next/link";
import { cn, focusRing } from "@/lib/utils";
import { getLanguageAlternate } from "@/components/layout/en-nav-links";

interface LanguageSwitcherProps {
  /** Current page path, e.g. "/reviews/stake" or "/en/reviews/stake". */
  currentPath: string;
  className?: string;
}

/**
 * Minimal Español / English switcher.
 * Uses exact alternates only; otherwise falls back to locale home with a clear title.
 */
export function LanguageSwitcher({ currentPath, className }: LanguageSwitcherProps) {
  const isEnglish = currentPath.startsWith("/en");
  const alternate = getLanguageAlternate(currentPath);

  const esHref = isEnglish ? (alternate ?? "/") : currentPath;
  const enHref = isEnglish ? currentPath : (alternate ?? "/en");

  const esTitle =
    isEnglish && !alternate ? "Spanish site homepage (no equivalent page for this URL)" : undefined;
  const enTitle =
    !isEnglish && !alternate ? "English site homepage (no equivalent page for this URL)" : undefined;

  const linkClass = (active: boolean) =>
    cn(
      "rounded-sm px-1.5 py-0.5 text-xs font-medium transition-colors",
      active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
      focusRing,
    );

  return (
    <nav aria-label="Language" className={cn("flex items-center gap-1", className)}>
      <Link
        href={esHref}
        className={linkClass(!isEnglish)}
        lang="es-MX"
        title={esTitle}
        aria-label={esTitle ? `Español — ${esTitle}` : "Español"}
      >
        Español
      </Link>
      <span aria-hidden="true" className="text-xs text-muted-foreground/60">
        |
      </span>
      <Link
        href={enHref}
        className={linkClass(isEnglish)}
        lang="en"
        title={enTitle}
        aria-label={enTitle ? `English — ${enTitle}` : "English"}
      >
        English
      </Link>
    </nav>
  );
}
