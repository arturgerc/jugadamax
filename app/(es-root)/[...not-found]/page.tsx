import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "La página que buscas no existe o ya no está disponible en JugadaMax.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function SpanishCatchAllNotFoundPage(): never {
  notFound();
}
