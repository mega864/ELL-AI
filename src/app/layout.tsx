import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";

export const viewport: Viewport = {
  themeColor: "#08090B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: SITE_CONFIG.meta.title,
  description: SITE_CONFIG.meta.description,
  keywords: [
    "ELL-AI",
    "Physical Systems Validation",
    "Boundary Testing",
    "Hardware-in-the-Loop",
    "AI Engineering Validation",
    "Failure Analysis",
    "Automotive ECU Testing",
    "Sensor Validation",
    "Test Scenario Generation"
  ],
  authors: [{ name: "ELL-AI Engineering Team" }],
  openGraph: {
    title: SITE_CONFIG.meta.title,
    description: SITE_CONFIG.meta.description,
    type: "website",
    locale: "en_US",
    siteName: "ELL-AI",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.meta.title,
    description: SITE_CONFIG.meta.description,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist+Mono:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#08090B] text-[#F5F6F2] antialiased selection:bg-[#2455E8] selection:text-white">
        {children}
      </body>
    </html>
  );
}
