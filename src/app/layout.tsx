import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#1E1C1C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: SITE_CONFIG.meta.title,
  description: SITE_CONFIG.meta.description,
  keywords: [
    "ELL-AI",
    "Physical AI Validation Platform",
    "Boundary Testing",
    "Hardware-in-the-Loop",
    "Physical Systems Validation",
    "Failure Analysis",
    "Automotive ECU Testing",
    "Autonomous Validation",
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
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark scroll-smooth ${inter.variable}`}>
      <body className="min-h-screen bg-[#1E1C1C] text-white antialiased selection:bg-[#FF4545] selection:text-white font-[var(--font-inter),system-ui,sans-serif]">
        {children}
      </body>
    </html>
  );
}
