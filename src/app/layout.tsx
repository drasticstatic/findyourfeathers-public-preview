import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DisclaimerBadge from "@/components/DisclaimerBadge";
import PageScrollProgress from "@/components/PageScrollProgress";
import ScrollProgress from "@/components/ScrollProgress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Next.js static export doesn't prepend basePath to icon URLs in Metadata API.
// This workaround ensures favicons resolve correctly on GitHub Pages.
const FYF_BASE = process.env.NODE_ENV === "production" ? "/findyourfeathers-public-preview" : "";

export const metadata: Metadata = {
  title: "Find Your Feathers",
  description:
    "Discover Your Wings. A sacred space for healing, transformation, and the journey home to yourself.",
  icons: {
    icon: [
      { url: `${FYF_BASE}/favicon.ico`, sizes: "any" },
      { url: `${FYF_BASE}/favicon.svg`, type: "image/svg+xml" },
      { url: `${FYF_BASE}/favicon-32.png`, type: "image/png", sizes: "32x32" },
    ],
    apple: `${FYF_BASE}/apple-touch-icon.png`,
  },
  keywords: [
    "Find Your Feathers",
    "Discover Your Wings",
    "healing",
    "transformation",
    "personal growth",
    "inner journey",
  ],
  openGraph: {
    title: "Find Your Feathers",
    description: "Discover Your Wings. A sacred space for healing and transformation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100">
        <Navbar />
        <DisclaimerBadge />
        <PageScrollProgress />
        <ScrollProgress />
        <main className="flex-1 pt-[92px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
