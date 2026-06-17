import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Find Your Feathers",
  description:
    "Discover Your Wings. A sister site to I Am One Self — The Holy Earth Foundation.",
  keywords: [
    "Find Your Feathers",
    "Discover Your Wings",
    "spiritual awakening",
    "Holy Earth Foundation",
  ],
  openGraph: {
    title: "Find Your Feathers",
    description: "Discover Your Wings. A sister site to I Am One Self.",
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
        {children}
      </body>
    </html>
  );
}
