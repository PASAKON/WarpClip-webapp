import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "WarpClip — ตัดต่อ Short-Form Video เร็วระดับ Warp Speed";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#09090b",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Lime glow accent */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 520,
            height: 520,
            background: "radial-gradient(circle, rgba(204,255,0,0.18) 0%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* W mark + wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              background: "#CCFF00",
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 100 100"
              style={{ display: "block" }}
            >
              <path
                d="M18 26 L32 76 L50 44 L68 76 L82 26"
                fill="none"
                stroke="#09090b"
                strokeWidth="13"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <span
            style={{
              fontSize: 28,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "-0.5px",
            }}
          >
            WarpClip
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 58,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            maxWidth: 820,
          }}
        >
          {"ตัดต่อ Short-Form Video "}
          <span style={{ color: "#CCFF00" }}>เร็วระดับ Warp Speed</span>
        </div>

        {/* Subline */}
        <div
          style={{
            marginTop: 20,
            fontSize: 26,
            color: "#a1a1aa",
            fontWeight: 400,
          }}
        >
          บริการตัดต่อคลิปสั้น TikTok / Reels / Shorts
        </div>

        {/* Bottom-right pill */}
        <div
          style={{
            position: "absolute",
            bottom: 64,
            right: 80,
            background: "rgba(204,255,0,0.12)",
            border: "1px solid rgba(204,255,0,0.3)",
            borderRadius: 999,
            padding: "10px 24px",
            color: "#CCFF00",
            fontSize: 18,
            fontWeight: 600,
          }}
        >
          warpclip.com
        </div>
      </div>
    ),
    { ...size },
  );
}
