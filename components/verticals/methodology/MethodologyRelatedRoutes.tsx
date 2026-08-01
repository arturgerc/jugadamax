import Link from "next/link";
import { METHOD_RELATED_ROUTES } from "@/components/verticals/methodology/methodology-config";
import { cn, focusRing } from "@/lib/utils";

export function MethodologyRelatedRoutes() {
  return (
    <section aria-labelledby="method-related-heading">
      <h2
        id="method-related-heading"
        className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
      >
        Secciones relacionadas
      </h2>
      <ul className="mt-4 flex flex-wrap gap-2">
        {METHOD_RELATED_ROUTES.map((route) => (
          <li key={route.href}>
            <Link
              href={route.href}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full border border-white/12 bg-[#0A1931]/55 px-3.5 text-sm font-medium text-foreground transition-colors hover:border-emerald-400/40",
                focusRing,
              )}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
