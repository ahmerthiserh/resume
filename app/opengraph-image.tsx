import { ImageResponse } from "next/og";

export const alt = "Ahmad Isah — Full-Stack Software Engineer in Nigeria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The preview card shown when the site is shared on LinkedIn, WhatsApp, X and in Google. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "radial-gradient(circle at 80% 20%, #1e3a8a 0%, #030712 55%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #3b82f6, #7c3aed)",
              fontSize: 28,
              fontWeight: 800,
            }}
          >
            AI
          </div>
          <div style={{ fontSize: 28, color: "#93c5fd" }}>www.ahmadisah.com.ng</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 104, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>Ahmad Isah</div>
          <div style={{ fontSize: 44, marginTop: 22, color: "#e2e8f0" }}>Full-Stack Software Engineer</div>
          <div style={{ fontSize: 30, marginTop: 14, color: "#94a3b8" }}>
            Mobile apps · Backend services · Payment systems
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, fontSize: 24, color: "#cbd5e1" }}>
          {["Flutter", "Node.js", "Laravel", "Next.js", "Gombe, Nigeria"].map((t) => (
            <div
              key={t}
              style={{ padding: "8px 18px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)" }}
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
