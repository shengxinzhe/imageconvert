import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/constants";

export const runtime = "edge";
export const alt = `${SITE_NAME} — Free HEIC, WebP & AVIF converters`;
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
          background: "#fafafa",
          padding: 80,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "#0d9373",
          }}
        />
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#171717",
            letterSpacing: "-0.02em",
          }}
        >
          {SITE_NAME}
        </div>
        <div style={{ fontSize: 36, color: "#525252", marginTop: 16 }}>
          Free HEIC, WebP &amp; AVIF converters
        </div>
        <div style={{ fontSize: 26, color: "#737373", marginTop: 12 }}>
          Private · Browser-local · No upload
        </div>
        <div
          style={{
            fontSize: 22,
            color: "#0d9373",
            marginTop: 48,
            fontFamily: "monospace",
          }}
        >
          heicsave.com
        </div>
      </div>
    ),
    { ...size }
  );
}
