import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public", "autoconnect-logo.png"),
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000000",
          backgroundImage:
            "radial-gradient(circle at 50% 35%, rgba(232,93,4,0.35), rgba(0,0,0,0) 60%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} width={520} height={120} alt="AutoConnect" />
        <div
          style={{
            marginTop: 40,
            maxWidth: 880,
            fontSize: 36,
            color: "#f5f5f5",
            fontWeight: 300,
            letterSpacing: 2,
            textAlign: "center",
          }}
        >
          The CX Platform Connecting Every Moment in the Customer Lifecycle
        </div>
      </div>
    ),
    { ...size },
  );
}
