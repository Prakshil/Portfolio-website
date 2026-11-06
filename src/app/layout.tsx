import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollReveal from "@/components/ScrollReveal";
import SmoothScroll from "@/components/SmoothScroll";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.prakshilpatel.in";

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Prakshil Patel | Full-Stack Developer & AI/ML Engineer",
    template: "%s | Prakshil Patel",
  },
  description:
    "Official portfolio of Prakshil Patel — Full-Stack Developer & AI/ML Engineer. Discover production web platforms, autonomous multi-agent AI systems, deep learning pipelines, and complexity theory research.",
  keywords: [
    "Prakshil Patel",
    "Prakshil",
    "Prakshil M Patel",
    "Prakshil Patel Portfolio",
    "Prakshil Patel Developer",
    "Prakshil Patel AI",
    "Prakshil Patel Machine Learning",
    "Prakshil Patel Software Engineer",
    "Prakshil Patel IIT Kanpur",
    "Prakshil Patel Deskera",
    "Prakshil Patel DigiXLT",
    "Prakshil Patel Adani University",
    "Prakshil Patel GitHub",
    "Prakshil Patel Full Stack",
    "Full-Stack Developer",
    "AI/ML Engineer",
    "Deep Learning",
    "Computer Vision",
    "Agentic AI",
    "Next.js Developer",
    "React Developer",
    "PyTorch",
    "FastAPI",
    "TypeScript",
    "MLOps",
  ],
  authors: [{ name: "Prakshil Patel", url: siteUrl }],
  creator: "Prakshil Patel",
  publisher: "Prakshil Patel",
  applicationName: "Prakshil Patel Portfolio",
  category: "technology",
  classification: "Software Engineering & Artificial Intelligence Portfolio",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
  },
  openGraph: {
    title: "Prakshil Patel | Full-Stack Developer & AI/ML Engineer",
    description:
      "Official portfolio of Prakshil Patel — Full-Stack Developer and AI/ML Engineer building scalable web apps, multi-agent AI architectures, and deep learning pipelines.",
    url: siteUrl,
    siteName: "Prakshil Patel Portfolio",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Prakshil Patel | Full-Stack Developer & AI/ML Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prakshil Patel | Full-Stack Developer & AI/ML Engineer",
    description:
      "Explore the portfolio of Prakshil Patel — Full-Stack Developer & AI/ML Engineer specializing in scalable web systems, agentic AI, and deep learning.",
    creator: "@Prakshil",
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "google7c5808ba0fbd580a",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Prakshil Patel",
      givenName: "Prakshil",
      familyName: "Patel",
      alternateName: ["Prakshil", "Prakshil M Patel", "Prakshil M. Patel"],
      gender: "https://schema.org/Male",
      jobTitle: "Full-Stack Developer & AI/ML Engineer",
      description:
        "Prakshil Patel is a Full-Stack Developer and AI/ML Engineer specializing in scalable web platforms, autonomous multi-agent systems, computer vision, and deep learning pipelines.",
      url: siteUrl,
      image: `${siteUrl}/opengraph-image`,
      email: "mailto:prakshilmpatel@gmail.com",
      sameAs: [
        "https://github.com/Prakshil",
        "https://www.linkedin.com/in/prakshil-patel/",
        "mailto:prakshilmpatel@gmail.com",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Adani University",
        sameAs: "https://www.adaniuni.ac.in/",
      },
      worksFor: [
        {
          "@type": "Organization",
          name: "Deskera",
          sameAs: "https://www.deskera.com/",
        },
        {
          "@type": "CollegeOrUniversity",
          name: "Indian Institute of Technology Kanpur",
          alternateName: "IIT Kanpur",
          sameAs: "https://www.iitk.ac.in/",
        },
        {
          "@type": "Organization",
          name: "DigiXLT",
        },
      ],
      knowsAbout: [
        "Full-Stack Development",
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "Agentic AI",
        "Graph Neural Networks",
        "Next.js",
        "React.js",
        "Node.js",
        "Express.js",
        "FastAPI",
        "Python",
        "PyTorch",
        "TypeScript",
        "PostgreSQL",
        "Snowflake",
        "MLOps",
        "Algorithmic Complexity",
        "Tensor Decomposition",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Prakshil Patel Portfolio",
      alternateName: [
        "Prakshil Patel",
        "Prakshil Patel Official Website",
        "Prakshil Patel Developer Portfolio",
      ],
      description:
        "Official portfolio and engineering dossier of Prakshil Patel — Full-Stack Developer and AI/ML Engineer.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#profilepage`,
      url: siteUrl,
      name: "Prakshil Patel | Full-Stack Developer & AI/ML Engineer",
      description:
        "Professional portfolio and engineering showcase of Prakshil Patel.",
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#person`,
      },
      mainEntity: {
        "@id": `${siteUrl}/#person`,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/opengraph-image`,
      },
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#projects`,
      name: "Featured Projects by Prakshil Patel",
      description:
        "Collection of full-stack web applications and AI/ML projects built by Prakshil Patel.",
      itemListElement: [
        {
          "@type": "SoftwareApplication",
          position: 1,
          name: "CollabSpace - Project Management Platform",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: "https://collabspace24.vercel.app",
          author: { "@id": `${siteUrl}/#person` },
        },
        {
          "@type": "SoftwareApplication",
          position: 2,
          name: "EduHub - AI-Powered Learning Management System",
          applicationCategory: "EducationalApplication",
          operatingSystem: "Web",
          url: "https://eduhub-lms-beta.vercel.app/",
          author: { "@id": `${siteUrl}/#person` },
        },
        {
          "@type": "SoftwareApplication",
          position: 3,
          name: "Civic Trust Portal – Citizen-First Digital Platform (SDG-16)",
          applicationCategory: "GovernmentApplication",
          operatingSystem: "Web",
          url: "https://civictrust-coral.vercel.app/",
          author: { "@id": `${siteUrl}/#person` },
        },
        {
          "@type": "SoftwareApplication",
          position: 4,
          name: "Café POS – Restaurant Management & Point-of-Sale System",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          author: { "@id": `${siteUrl}/#person` },
        },
        {
          "@type": "SoftwareApplication",
          position: 5,
          name: "SchemaCraft - Natural Language to Database Schema",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Web",
          url: "https://schemacraf-31.onrender.com",
          author: { "@id": `${siteUrl}/#person` },
        },
        {
          "@type": "SoftwareApplication",
          position: 6,
          name: "DataSentinel – Multi-Agent Data Quality Platform",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Cloud",
          author: { "@id": `${siteUrl}/#person` },
        },
        {
          "@type": "SoftwareApplication",
          position: 7,
          name: "Multi-Label Chest X-Ray Disease Classification",
          applicationCategory: "HealthcareApplication",
          operatingSystem: "Cross-platform",
          author: { "@id": `${siteUrl}/#person` },
        },
        {
          "@type": "SoftwareApplication",
          position: 8,
          name: "TrainWatch – Lightweight ML Training & GPU Monitoring Library",
          applicationCategory: "DeveloperApplication",
          operatingSystem: "Cross-platform",
          author: { "@id": `${siteUrl}/#person` },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://skillicons.dev" />
        <link rel="dns-prefetch" href="https://skillicons.dev" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-fuchsia-500 selection:text-white`}
      >
        <SmoothScroll />
        <ScrollReveal />
        <Toaster theme="dark" />
        {children}
      </body>
    </html>
  );
}
