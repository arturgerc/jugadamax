"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { primaryNav, legalNav } from "@/components/layout/nav-links";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  );
}

/**
 * Mobile navigation (client). Toggles a full-width panel with the primary and
 * legal links. Touch targets are >=44px; no hover-only behavior (FR-033).
 */
export function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground"
      >
        <MenuIcon open={open} />
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full z-50 border-b border-border bg-[var(--jm-navy)] shadow-lg">
          <nav aria-label="Navegación móvil" className="flex flex-col px-4 py-2">
            {primaryNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center border-b border-border/40 text-base font-medium text-foreground"
              >
                {link.label}
              </a>
            ))}
            {legalNav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex min-h-11 items-center border-b border-border/20 text-sm text-muted-foreground",
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
