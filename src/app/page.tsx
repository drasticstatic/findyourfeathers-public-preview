"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, MapPinSearch, Construction, BookOpen } from "lucide-react";

function useMountCheck() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}

export default function Home() {
  useMountCheck();
  const isBrowser = typeof window !== "undefined";
  const isDev = isBrowser && (window.location.hostname === "localhost" || window.location.hostname.includes("127.0.0.1"));
  const siteBasePath = isDev ? "" : "/findyourfeathers-public-preview";

  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-transparent font-sans text-[var(--foreground)] relative overflow-hidden">
      {/* Favicon watermark */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" aria-hidden>
        <motion.img
          src={`${siteBasePath}/favicon.svg`}
          alt=""
          className="h-[40vh] w-[40vh] max-w-[60vw] max-h-[60vw] opacity-[0.06] select-none"
          animate={{ scale: [1, 1.03, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center py-20 px-6 text-center relative z-10">
        <div className="flex flex-col items-center gap-6">
          <motion.img
            src={`${siteBasePath}/favicon.svg`}
            alt=""
            className="mx-auto h-20 w-20 mb-2 opacity-60 pointer-events-none select-none"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          />
          <h1 className="text-4xl font-bold tracking-tight">
            Find Your Feathers
          </h1>
          <p className="max-w-md text-lg leading-8 text-[var(--muted)]">
            Discover Your Wings. A sacred space for healing, transformation,
            and the journey home to yourself.
          </p>

          {/* FAQ CTA — alive now (Heather's real Reiki FAQ). Sits above the
              construction notice so visitors have a clear way to engage. */}
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-emerald-600/25 transition-all hover:bg-emerald-700 hover:-translate-y-0.5 hover:shadow-emerald-600/40"
          >
            <BookOpen className="h-4 w-4" />
            Read the FAQ
          </Link>

          {/* Scroll indicator */}
          <div className="flex flex-col items-center gap-2 mt-4">
            <div className="flex flex-col items-center mb-1">
              <Construction className="h-8 w-8 text-emerald-500" />
            </div>
            <p className="text-sm text-[var(--muted)]">
              This site is under construction.
            </p>
            <p className="text-sm text-[var(--muted)]">
              Explore the map below
            </p>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="h-6 w-6 text-emerald-500" />
            </motion.div>
          </div>

        </div>
      </main>
    </div>
  );
}
