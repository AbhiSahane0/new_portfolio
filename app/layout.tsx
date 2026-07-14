import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "../globals.css";
import { siteConfig } from "./data/portfolio";
import SpaceBackground from "./_components/background/SpaceBackground";
import Navbar from "./_components/ui/Navbar";
import ScrollProgress from "./_components/ui/ScrollProgress";
import CursorGlow from "./_components/ui/CursorGlow";
import { themeInitScript } from "./_components/ui/theme";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const title = `${siteConfig.name} — ${siteConfig.role}`;
const description =
  "Abhijit Sahane builds production-ready web & mobile products end-to-end with React, React Native, Node.js, Supabase and cloud. Available for freelance.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s — ${siteConfig.name}`,
  },
  description,
  applicationName: `${siteConfig.name} Portfolio`,
  authors: [{ name: siteConfig.name, url: siteConfig.socials.github }],
  creator: siteConfig.name,
  keywords: [
    "Abhijit Sahane",
    "React Developer",
    "React Native Developer",
    "Freelance Frontend Developer",
    "Full-Stack Developer",
    "Node.js",
    "Supabase",
    "TypeScript",
    "Mobile App Developer",
    "Hire React Developer",
    "Freelance",
    "Pune",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title,
    description,
    siteName: `${siteConfig.name} — Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@AbhiSahane0",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#05050e",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  jobTitle: siteConfig.role,
  description,
  url: siteConfig.url,
  email: siteConfig.email,
  address: { "@type": "PostalAddress", addressLocality: "Pune", addressCountry: "IN" },
  sameAs: [siteConfig.socials.github, siteConfig.socials.linkedin],
  knowsAbout: [
    "React",
    "React Native",
    "TypeScript",
    "Node.js",
    "Supabase",
    "PostgreSQL",
    "Cloud",
    "Data Engineering",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-void font-sans text-ink-50 antialiased">
        {/* Set theme before paint to avoid a flash of the wrong theme. */}
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#projects"
          className="sr-only rounded-md bg-ink-50 px-4 py-2 font-semibold text-void focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]"
        >
          Skip to work
        </a>

        <SpaceBackground />
        <CursorGlow />
        <ScrollProgress />
        <Navbar />

        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
