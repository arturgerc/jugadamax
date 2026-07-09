import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { cn, focusRing } from "@/lib/utils";

const actionCards = [
  {
    title: "Bonos de casino",
    text: "Compara promociones, giros gratis, requisitos y límites antes de depositar.",
    href: "/bonos",
    badge: "Bonos",
    accent: "border-primary/25 bg-primary/5",
  },
  {
    title: "Casinos crypto",
    text: "500 Casino, Gamdom, BetFury y operadores crypto para revisar en México/LATAM.",
    href: "/casinos-crypto",
    badge: "Crypto",
    accent: "border-primary/20 bg-[#16233f]/80",
  },
  {
    title: "Casinos fiat",
    text: "Betsson MX y operadores con pagos locales como OXXO, SPEI y tarjetas.",
    href: "/casinos-fiat",
    badge: "Pagos locales",
    accent: "border-emerald-500/20 bg-emerald-500/5",
  },
  {
    title: "Guía USDT",
    text: "Qué revisar antes de usar USDT, redes, wallets, límites y verificación.",
    href: "/guias/casinos-con-usdt-mexico",
    badge: "USDT",
    accent: "border-white/10 bg-[#16233f]/60",
  },
  {
    title: "Reseñas",
    text: "Lee análisis editoriales antes de registrarte en un operador.",
    href: "/reviews",
    badge: "Reviews",
    accent: "border-white/10 bg-[#16233f]/60",
  },
  {
    title: "Noticias",
    text: "Actualizaciones, guías y novedades de casino online para México.",
    href: "/noticias",
    badge: "Noticias",
    accent: "border-white/10 bg-[#16233f]/60",
  },
] as const;

/**
 * Lightweight internal-route grid for homepage discovery — no images or JS.
 */
export function HomepageActionGrid() {
  return (
    <section aria-labelledby="explora-jugadamax-heading" className="py-10">
      <Container>
        <div className="max-w-2xl space-y-1">
          <h2
            id="explora-jugadamax-heading"
            className="text-xl font-bold tracking-tight text-foreground sm:text-2xl"
          >
            Explora JugadaMax
          </h2>
          <p className="text-sm text-muted-foreground sm:text-base">
            Rutas rápidas para comparar casinos, bonos, pagos y guías sin perder tiempo.
          </p>
        </div>

        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {actionCards.map((card) => (
            <li key={card.href}>
              <Link
                href={card.href}
                className={cn(
                  "flex h-full flex-col gap-2 rounded-xl border p-4 transition-colors hover:border-primary/40",
                  card.accent,
                  focusRing,
                )}
              >
                <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-[#111417]/60 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-primary">
                  {card.badge}
                </span>
                <h3 className="text-base font-semibold text-foreground">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.text}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
