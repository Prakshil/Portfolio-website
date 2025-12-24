import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollReveal from "@/components/ScrollReveal";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Prakshil Patel | Full-Stack Developer & AI/ML Enthusiast",
    template: "%s | Prakshil Patel",
  },
  description:
    "Full-Stack Developer and AI/ML enthusiast building scalable, user-focused applications — from clean UI to robust APIs and intelligent features.",
  keywords: [
    "Prakshil Patel",
    "Full-Stack Developer",
    "Frontend",
    "Backend",
    "Next.js",
    "React",
    "AI",
    "Machine Learning",
    "Portfolio",
  ],
  authors: [{ name: "Prakshil Patel" }],
  creator: "Prakshil Patel",
  icons: {
    icon: [{ url: "./icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Prakshil Patel | Full-Stack Developer & AI/ML Enthusiast",
    description:
      "I build scalable, user-focused web apps and intelligent, data-driven features — from polished UI to robust APIs.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Prakshil Patel | Full-Stack Developer & AI/ML Enthusiast",
    description:
      "Full-Stack Developer and AI/ML enthusiast building scalable products with clean UI and robust APIs.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroll />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
