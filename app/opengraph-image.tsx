import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Ahmad Isah — Full-Stack Software Engineer in Nigeria";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/** The preview card shown when the site is shared on LinkedIn, WhatsApp, X and in Google. */
export default async function OpengraphImage() {
  const photo = await readFile(join(process.cwd(), "assets/og-portrait.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "radial-gradient(circle at 78% 30%, #1e3a8a 0%, #030712 60%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 0 64px 72px", width: 720 }}>
          <div style={{ fontSize: 26, color: "#93c5fd" }}>www.ahmadisah.com.ng</div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 92, fontWeight: 800, letterSpacing: -3, lineHeight: 1 }}>Ahmad Isah</div>
            <div style={{ fontSize: 40, marginTop: 20, color: "#e2e8f0" }}>Full-Stack Software Engineer</div>
            <div style={{ fontSize: 27, marginTop: 12, color: "#94a3b8" }}>
              Mobile apps · Backend services · Payment systems
            </div>
          </div>

          <div style={{ display: "flex", gap: 12, fontSize: 22, color: "#cbd5e1" }}>
            {["Flutter", "Node.js", "Laravel", "Gombe, Nigeria"].map((t) => (
              <div
                key={t}
                style={{ padding: "8px 16px", borderRadius: 999, border: "1px solid rgba(255,255,255,0.18)", background: "rgba(255,255,255,0.06)" }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Portrait in an arch frame */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flex: 1, paddingRight: 40 }}>
          <div
            style={{
              display: "flex",
              padding: 4,
              borderTopLeftRadius: 200,
              borderTopRightRadius: 200,
              borderBottomLeftRadius: 32,
              borderBottomRightRadius: 32,
              background: "linear-gradient(180deg, #60a5fa, #7c3aed 60%, rgba(255,255,255,0.05))",
              boxShadow: "0 30px 80px rgba(37,99,235,0.45)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photoSrc}
              alt=""
              width={392}
              height={490}
              style={{
                objectFit: "cover",
                borderTopLeftRadius: 196,
                borderTopRightRadius: 196,
                borderBottomLeftRadius: 28,
                borderBottomRightRadius: 28,
              }}
            />
          </div>
        </div>
      </div>
    ),
    size
  );
}
