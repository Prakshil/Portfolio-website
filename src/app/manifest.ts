import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Prakshil Patel | Full-Stack Developer & AI/ML Engineer",
    short_name: "Prakshil Patel",
    description:
      "Official portfolio of Prakshil Patel — Full-Stack Developer and AI/ML Engineer building scalable web applications and deep learning architectures.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "maskable",
      },
    ],
  };
}
