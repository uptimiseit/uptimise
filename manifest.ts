// app/manifest.ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Uptimise IT // Software Factory",
    short_name: "UptimiseIT",
    description: "AI-Native Software Engineering & High-Velocity Digital Infrastructure.",
    start_url: "/",
    display: "standalone",
    background_color: "#030712", // Matches your dark theme spectrum code
    theme_color: "#6366f1",      // Your master indigo brand accent
    icons: [
      {
        src: "/favicon.png",     // Put your actual brand image here
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/favicon.png",     // Put your actual brand image here
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}