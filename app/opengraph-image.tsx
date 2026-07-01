import { ImageResponse } from "next/og";
import { logoBrand } from "@/components/brand/Logo";

export const alt = "JugadaMax — Casinos crypto, casinos fiat y apuestas en México";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 72px",
          background: `linear-gradient(145deg, ${logoBrand.navy} 0%, ${logoBrand.graphite} 55%, ${logoBrand.elevated} 100%)`,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Wordmark row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 40 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: logoBrand.elevated,
              border: `2px solid ${logoBrand.gold}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: logoBrand.gold,
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            J
          </div>
          <div style={{ display: "flex", fontSize: 52, fontWeight: 700, letterSpacing: "-0.02em" }}>
            <span style={{ color: logoBrand.text }}>Jugada</span>
            <span style={{ color: logoBrand.gold }}>Max</span>
          </div>
        </div>

        {/* Headline */}
        <p
          style={{
            margin: 0,
            maxWidth: 920,
            fontSize: 40,
            fontWeight: 600,
            lineHeight: 1.25,
            color: logoBrand.text,
          }}
        >
          Casinos crypto, casinos fiat y apuestas en México
        </p>

        {/* Trust line */}
        <p
          style={{
            margin: "28px 0 0",
            fontSize: 22,
            color: logoBrand.muted,
            letterSpacing: "0.01em",
          }}
        >
          Rankings editoriales · +18 · Juego responsable
        </p>
      </div>
    ),
    { ...size },
  );
}
