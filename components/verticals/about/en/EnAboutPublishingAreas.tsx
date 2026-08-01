import Link from "next/link";
import { EN_ABOUT_PUBLISHING_AREAS } from "@/components/verticals/about/en/en-about-config";
import { cn, focusRing } from "@/lib/utils";

export function EnAboutPublishingAreas() {
  return (
    <section
      aria-labelledby="en-about-publish-heading"
      className="mb-8 scroll-mt-24 sm:mb-10"
    >
      <div className="max-w-3xl space-y-1">
        <h2
          id="en-about-publish-heading"
          className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-[1.65rem]"
        >
          What we publish
        </h2>
        <p className="text-sm text-muted-foreground sm:text-base">
          Four distinct editorial formats. Rankings are not neutral or objective facts.
        </p>
      </div>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {EN_ABOUT_PUBLISHING_AREAS.map((item) => (
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
