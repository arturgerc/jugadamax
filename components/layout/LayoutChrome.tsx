"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

/**
 * Renders Spanish site chrome for all routes except /en/*, which supply their
 * own layout in app/en/layout.tsx.
 */
export function LayoutChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en");

  useEffect(() => {
    document.documentElement.lang = isEnglish ? "en" : "es-MX";
  }, [isEnglish]);

  if (isEnglish) {
    return <>{children}</>;
  }

  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  );
}
