"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Home, Feather } from "lucide-react";

function useMountCheck() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}

export default function NotFound() {
  useMountCheck();
  const isBrowser = typeof window !== "undefined";
  const isDev = isBrowser && (window.location.hostname === "localhost" || window.location.hostname.includes("127.0.0.1"));
  const siteBasePath = isDev ? "" : "/findyourfeathers-public-preview";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-b from-emerald-100 via-emerald-50 to-neutral-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-800">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className="relative"
      >
        {/* 404 number with favicon watermark */}
        <div className="relative">
          <span className="text-[8rem] sm:text-[12rem] font-bold leading-none text-emerald-200/70 dark:text-neutral-800 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <Feather className="h-16 w-16 text-emerald-500 dark:text-emerald-400 opacity-60" />
          </div>
        </div>

        {/* Favicon watermark */}
        <div className="fixed top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" aria-hidden>
          <motion.img
            src={`${siteBasePath}/favicon.svg`}
            alt=""
            className="h-[50vh] w-[50vh] sm:h-[60vh] sm:w-[60vh] max-w-[80vw] max-h-[80vw] opacity-[0.10] dark:opacity-[0.06] select-none"
            animate={{ scale: [1, 1.03, 1], opacity: [0.10, 0.13, 0.10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <h1 className="mt-6 text-2xl sm:text-3xl font-semibold text-neutral-900 dark:text-neutral-50">
          This feather hasn't landed yet
        </h1>

        <p className="mt-4 max-w-md mx-auto text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed">
          The path you followed led somewhere unexpected. Sometimes the
          journey itself is the destination.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-8 py-3.5 text-sm font-medium text-white shadow-lg shadow-emerald-600/25 transition hover:bg-emerald-700 dark:bg-emerald-500 dark:shadow-emerald-500/20 dark:hover:bg-emerald-400"
          >
            <Home className="h-4 w-4" />
            Return Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
