import { ImageResponse } from "next/og";

export const runtime = "edge";

const size = { width: 1200, height: 630 };

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #020420 0%, #0a0e2e 55%, #141938 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            color: "#38bdf8",
            fontSize: "26px",
            letterSpacing: "6px",
            textTransform: "uppercase",
          }}
        >
          Program & Migration Manager
        </div>
        <div
          style={{
            marginTop: "20px",
            fontSize: "104px",
            fontWeight: 800,
            color: "white",
            lineHeight: 1.05,
          }}
        >
          Reshma Jabeen
        </div>
        <div
          style={{
            marginTop: "28px",
            fontSize: "34px",
            color: "#cbd5e1",
            maxWidth: "900px",
            lineHeight: 1.3,
          }}
        >
          19+ years delivering cloud migration, integration & enterprise
          transformation programs.
        </div>
        <div
          style={{
            marginTop: "44px",
            display: "flex",
            gap: "16px",
            fontSize: "24px",
          }}
        >
          {["PSM II", "PSPO II", "Azure", "ITIL", "Scrum"].map((c) => (
            <div
              key={c}
              style={{
                padding: "10px 22px",
                borderRadius: "999px",
                border: "2px solid #38bdf855",
                color: "#818cf8",
              }}
            >
              {c}
            </div>
          ))}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: "48px",
            right: "80px",
            fontSize: "22px",
            color: "#64748b",
          }}
        >
          Built by IntelliForge AI
        </div>
      </div>
    ),
    { ...size }
  );
}
