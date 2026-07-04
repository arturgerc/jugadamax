import type { Metadata } from "next";
import { EnSiteHeader } from "@/components/layout/EnSiteHeader";
import { EnSiteFooter } from "@/components/layout/EnSiteFooter";

export const metadata: Metadata = {
  title: {
    default: "JugadaMax Global — Crypto Casino Reviews & Guides",
    template: "%s | JugadaMax Global",
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <EnSiteHeader />
      <main className="flex-1">{children}</main>
      <EnSiteFooter />
    </>
  );
}
