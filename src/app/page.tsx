"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black relative overflow-hidden">
      {/* Favicon watermark */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" aria-hidden>
        <motion.img
          src={`${siteBasePath}/favicon.svg`}
          alt=""
          className="h-[40vh] w-[40vh] max-w-[60vw] max-h-[60vw] opacity-[0.08] dark:opacity-[0.06] select-none"
          animate={{ scale: [1, 1.03, 1], opacity: [0.08, 0.12, 0.08] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start relative z-10">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <img
            src={`${siteBasePath}/favicon.svg`}
            alt=""
            className="mx-auto h-16 w-16 mb-4 opacity-50 pointer-events-none select-none"
            aria-hidden
          />
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Find Your Feathers
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Discover Your Wings. A sacred space for healing, transformation,
            and the journey home to yourself.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-emerald-600 dark:bg-emerald-500 px-5 text-white transition-colors hover:bg-emerald-700 dark:hover:bg-emerald-400 md:w-[158px]"
            href="#explore"
          >
            Begin Your Journey
          </a>
        </div>
      </main>
    </div>
  );
}
