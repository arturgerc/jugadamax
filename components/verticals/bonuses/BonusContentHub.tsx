import Link from "next/link";
import { getArticles } from "@/lib/content";
import {
  BONUS_SURFACES,
  sectionHeadingClassName,
} from "@/components/verticals/bonuses/bonus-visual";
import { cn, focusRing } from "@/lib/utils";

const REVIEW_LINKS = [
  { href: "/reviews/betsson", label: "Reseña Betsson" },
  { href: "/reviews/betfury", label: "Reseña BetFury" },
  { href: "/reviews/bitcasino", label: "Reseña Bitcasino" },
  { href: "/reviews/1xbet", label: "Reseña 1xBet" },
  { href: "/reviews/gamdom", label: "Reseña Gamdom" },
  { href: "/reviews", label: "Todas las reseñas" },
] as const;

/**
 * Bonus content hub — news, guides, and full reviews.
 */
export function BonusContentHub() {
  const news = getArticles("news").slice(0, 3);
  const guides = getArticles("guide").slice(0, 4);

  return (
    <section
      id="hub-bonos"
      aria-labelledby="hub-bonos-heading"
      className="mb-8 scroll-mt-24 sm:mb-10 lg:mb-12"
    >
      <div className={BONUS_SURFACES.editorialShell}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(56,189,248,0.08),transparent_55%)]"
        />
        <div className="relative p-3.5 sm:p-5 lg:p-6">
          <div className="max-w-3xl space-y-1">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-sky-300/90">
              Contenido editorial
            </p>
            <h2 id="hub-bonos-heading" className={sectionHeadingClassName()}>
              Noticias, guías y reseñas de bonos
            </h2>
            <p className="text-sm text-muted-foreground sm:text-base">
              Lee cambios de operadores, guías educativas y reseñas completas antes de aceptar una
              promoción.
            </p>
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
            <div className="rounded-xl border border-sky-500/15 bg-[#0d1520]/70 p-3.5 sm:p-4">
              <h3 className="text-sm font-semibold text-foreground sm:text-base">
                Noticias y cambios
              </h3>
              <ul className="mt-3 space-y-1.5">
                {news.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/noticias/${item.slug}`}
                      className={cn(
                        "block rounded-lg border border-transparent px-2 py-2 transition-colors duration-150 hover:border-sky-400/20 hover:bg-sky-500/[0.06]",
                        focusRing,
                      )}
                    >
                      <span className="text-sm font-medium text-foreground">
                        {item.title}
                        <span aria-hidden="true" className="ml-1 text-sky-300/70">
                          →
                        </span>
                      </span>
                      <span className="mt-0.5 block text-xs text-muted-foreground">
                        {item.summary}
                      </span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/noticias"
                    className={cn(
                      "inline-flex min-h-11 items-center px-2 text-sm font-medium text-sky-200 underline-offset-2 hover:underline",
                      focusRing,
                    )}
                  >
                    Ver noticias →
                  </Link>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-sky-500/15 bg-[#0d1520]/70 p-3.5 sm:p-4">
              <h3 className="text-sm font-semibold text-foreground sm:text-base">Guías</h3>
              <ul className="mt-3 space-y-1.5">
                {guides.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={`/guias/${item.slug}`}
                      className={cn(
                        "block rounded-lg border border-transparent px-2 py-2 transition-colors duration-150 hover:border-sky-400/20 hover:bg-sky-500/[0.06]",
                        focusRing,
                      )}
                    >
                      <span className="text-sm font-medium text-foreground">
                        {item.title}
                        <span aria-hidden="true" className="ml-1 text-sky-300/70">
                          →
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/guias"
                    className={cn(
                      "inline-flex min-h-11 items-center px-2 text-sm font-medium text-sky-200 underline-offset-2 hover:underline",
                      focusRing,
                    )}
                  >
                    Ver guías →
                  </Link>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-sky-500/20 bg-[#101820]/80 p-3.5 sm:p-4">
              <h3 className="text-sm font-semibold text-foreground sm:text-base">
                Reseñas completas
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {REVIEW_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={cn(
                        "inline-flex min-h-11 items-center rounded-full border border-sky-500/20 bg-[#0A1931]/55 px-3 py-1.5 text-xs font-medium text-foreground transition-colors duration-150 hover:border-sky-400/40 hover:bg-sky-500/10",
                        focusRing,
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
