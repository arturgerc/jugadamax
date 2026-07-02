"use client";

import { useEffect, useState } from "react";
import { primaryNav, legalNav } from "@/components/layout/nav-links";
import { focusRing, cn } from "@/lib/utils";

/**
 * Mobile navigation (client component).
 *
 * Plain button + plain links, no Radix/shadcn Sheet, no animation. The panel is
 * a FIXED overlay with a very high z-index so it can never be clipped or trapped
 * by the sticky / backdrop-blurred header's stacking context. The button glyph
 * toggles ☰ -> ✕ so the open state is always visible. No horizontal overflow
 * (inset-x-4 + internal vertical scroll only). Closes on link click, outside
 * click (scrim), or Escape.
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  const links = [...primaryNav, ...legalNav];

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        aria-controls="mobile-nav-panel"
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex h-11 w-11 items-center justify-center rounded-md text-2xl leading-none text-foreground",
          focusRing,
        )}
      >
        <span aria-hidden="true">{open ? "✕" : "☰"}</span>
      </button>

      {open && (
        <>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[9998] w-full cursor-default bg-black/50"
          />
          <nav
            id="mobile-nav-panel"
            aria-label="Navegación móvil"
            className="fixed inset-x-4 top-20 z-[9999] max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-lg border border-border bg-[var(--jm-navy)] p-2 shadow-2xl"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex min-h-11 items-center rounded-sm border-b border-border/30 px-2 text-base font-medium text-foreground last:border-b-0",
                  focusRing,
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </>
      )}
    </div>
  );
}
