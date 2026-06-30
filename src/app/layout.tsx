import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const SITE_URL = "https://reshma-jabeen-profile.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Reshma Jabeen | Program & Migration Manager Portfolio",
  description:
    "Reshma Jabeen — Program & Migration Manager with 19+ years delivering cloud migration, integration and enterprise transformation programs across financial services, telecom, healthcare and retail. PSM II, PSPO II, ITIL, Scrum & Microsoft Azure certified. Built by IntelliForge AI.",
  keywords: [
    "Reshma Jabeen",
    "Program Manager",
    "Migration Manager",
    "Cloud Migration",
    "Microsoft Azure",
    "SAP PI",
    "Agile",
    "Scrum",
    "PSM II",
    "PSPO II",
    "ITIL",
    "Tata Consultancy Services",
    "Ericsson",
    "Financial Services",
    "Digital Transformation",
    "Sweden",
    "IntelliForge AI",
  ],
  authors: [{ name: "Reshma Jabeen", url: SITE_URL }],
  creator: "IntelliForge AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Reshma Jabeen | Program & Migration Manager",
    description:
      "19+ years delivering million-dollar IT programs across cloud, integration and enterprise transformation. PSM II, PSPO II, ITIL, Scrum & Azure certified.",
    siteName: "Reshma Jabeen Portfolio",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Reshma Jabeen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reshma Jabeen | Program & Migration Manager",
    description:
      "19+ years delivering million-dollar IT programs across cloud, integration and enterprise transformation.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body>{children}</body>
    </html>
  );
}
