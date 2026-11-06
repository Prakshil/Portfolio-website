import { ImageResponse } from "next/og";

export const alt = "Prakshil Patel | Full-Stack Developer & AI/ML Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#000000",
          backgroundImage:
            "radial-gradient(circle at 25% 25%, rgba(217, 70, 239, 0.25) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(249, 115, 22, 0.2) 0%, transparent 50%)",
          color: "#ffffff",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        {/* Top Tagline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              backgroundColor: "#d946ef",
            }}
          />
          <span
            style={{
              fontSize: "20px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#9ca3af",
              fontFamily: "monospace",
            }}
          >
            Portfolio & Engineering Dossier
          </span>
        </div>

        {/* Center Main Heading */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <h1
            style={{
              fontSize: "76px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              margin: 0,
              color: "#ffffff",
            }}
          >
            Prakshil Patel
          </h1>
          <p
            style={{
              fontSize: "34px",
              fontWeight: 400,
              margin: 0,
              background: "linear-gradient(to right, #d946ef, #f97316)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Full-Stack Developer & AI/ML Engineer
          </p>
          <p
            style={{
              fontSize: "22px",
              color: "#d1d5db",
              maxWidth: "900px",
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            Enterprise web platforms, autonomous multi-agent systems, deep learning pipelines, and complexity theory research.
          </p>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "16px" }}>
            <span
              style={{
                fontSize: "16px",
                color: "#9ca3af",
                padding: "6px 14px",
                borderRadius: "999px",
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              IIT Kanpur Research
            </span>
            <span
              style={{
                fontSize: "16px",
                color: "#9ca3af",
                padding: "6px 14px",
                borderRadius: "999px",
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              Deskera
            </span>
            <span
              style={{
                fontSize: "16px",
                color: "#9ca3af",
                padding: "6px 14px",
                borderRadius: "999px",
                backgroundColor: "rgba(255, 255, 255, 0.06)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              Adani University
            </span>
          </div>

          <span
            style={{
              fontSize: "18px",
              color: "#f97316",
              fontFamily: "monospace",
            }}
          >
            prakshil.vercel.app
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
