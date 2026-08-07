import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you requested does not exist or is no longer available on JugadaMax.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function EnCatchAllNotFoundPage(): never {
  notFound();
}
