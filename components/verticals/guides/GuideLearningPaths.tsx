import Link from "next/link";
import { GUIDE_LEARNING_PATHS } from "@/components/verticals/guides/guide-hub-config";
import { cn, focusRing } from "@/lib/utils";

const PATH_MARKERS = [
  {
    index: "01",
    letter: "C",
    marker:
      "border-primary/40 bg-primary/10 text-primary shadow-[0_0_14px_-6px_rgba(255,184,0,0.45)]",
    bar: "bg-primary",
  },
  {
    index: "02",
    letter: "P",
    marker:
      "border-cyan-400/40 bg-cyan-500/10 text-cyan-200 shadow-[0_0_14px_-6px_rgba(34,211,238,0.4)]",
    bar: "bg-cyan-400",
  },
  {
    index: "03",
    letter: "S",
    marker:
      "border-violet-400/40 bg-violet-500/10 text-violet-200 shadow-[0_0_14px_-6px_rgba(167,139,250,0.4)]",
    bar: "bg-violet-400",
  },
] as const;

/**
 * “Por dónde empezar” educational journey cards.
 */
export function GuideLearningPaths() {
  return (
    <section
      id="por-donde-empezar"
      aria-labelledby="por-donde-empezar-heading"
      className="mb-7 scroll-mt-24 sm:mb-10 lg:mb-12"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="por-donde-empezar-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Por dónde empezar
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Tres rutas de aprendizaje según lo que quieras entender primero.
        </p>
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
        {GUIDE_LEARNING_PATHS.map((path, i) => {
          const marker = PATH_MARKERS[i] ?? PATH_MARKERS[0];
          return (
            <li key={path.href}>
              <Link
                href={path.href}
                className={cn(
                  "relative flex h-full flex-col overflow-hidden rounded-xl border bg-[#111417]/70 p-4 transition-colors duration-150",
                  path.accent,
                  focusRing,
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn("absolute left-0 top-0 h-full w-0.5", marker.bar)}
                />
                <span className="flex items-center gap-2">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "inline-flex size-8 items-center justify-center rounded-full border text-[0.7rem] font-bold",
                      marker.marker,
                    )}
                  >
                    {marker.letter}
                  </span>
                  <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    {marker.index}
                  </span>
                </span>
                <span className="mt-2.5 text-sm font-bold text-foreground sm:text-base">
                  {path.title}
                </span>
                <span className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {path.description}
                </span>
                <span className="mt-3 inline-flex min-h-11 items-center text-sm font-medium text-primary">
                  Empezar →
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
