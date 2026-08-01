import Link from "next/link";
import { ABOUT_PUBLISHING_AREAS } from "@/components/verticals/about/about-config";
import { cn, focusRing } from "@/lib/utils";

export function AboutPublishingAreas() {
  return (
    <section
      aria-labelledby="about-publish-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="about-publish-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          Qué publicamos
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Cuatro formatos editoriales distintos. Los rankings no son hechos neutrales ni objetivos
          absolutos.
        </p>
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {ABOUT_PUBLISHING_AREAS.map((item) => (
          <li key={item.href} className="min-w-0">
            <article className="flex h-full flex-col rounded-xl border border-white/10 bg-[#111417]/60 p-4">
              <h3 className="text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.body}
              </p>
              <Link
                href={item.href}
                className={cn(
                  "mt-4 inline-flex min-h-11 w-fit items-center rounded-md border border-primary/35 bg-primary/10 px-3.5 text-sm font-semibold text-primary",
                  focusRing,
                )}
              >
                {item.label}
              </Link>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
