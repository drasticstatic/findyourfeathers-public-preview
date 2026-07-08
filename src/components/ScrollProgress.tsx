"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/**
 * ScrollProgress — circular emerald ring in bottom-right corner
 * that fills based on page scroll position. Shows percentage
 * on hover. Click to scroll to top.
 */
export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setProgress(pct);
      setVisible(scrollTop > 200);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - progress * circumference;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{
        opacity: visible ? 1 : 0,
        scale: visible ? 1 : 0.8,
      }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-emerald-100/80 backdrop-blur-md dark:bg-neutral-900 border border-emerald-200 dark:border-emerald-800/40 shadow-lg hover:shadow-xl transition-shadow group"
      aria-label="Scroll to top"
      title={`${Math.round(progress * 100)}% scrolled`}
    >
      <svg
        className="w-12 h-12 -rotate-90"
        viewBox="0 0 48 48"
      >
        {/* Background track */}
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          className="text-neutral-200 dark:text-neutral-800"
        />
        {/* Progress fill — gold */}
        <circle
          cx="24"
          cy="24"
          r={radius}
          fill="none"
          stroke="url(#emerald-gradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ willChange: "stroke-dashoffset" }}
        />
        <defs>
          <linearGradient id="emerald-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#059669" />
            <stop offset="50%" stopColor="#10b981" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
      </svg>
      {/* Center arrow */}
      <span className="absolute inset-0 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </span>
    </motion.button>
  );
}
