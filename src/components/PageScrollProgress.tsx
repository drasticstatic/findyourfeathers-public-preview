"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * PageScrollProgress — thin gold bar that fills as the user scrolls.
 * Dynamically measures the disclaimer badge height so it always sits
 * just below the badge on every screen size, never cutting through it.
 */
export default function PageScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [top, setTop] = useState(92); // fallback: desktop badge height

  const measureBadge = useCallback(() => {
    const badge = document.querySelector("[data-disclaimer-badge]");
    if (badge) {
      const rect = badge.getBoundingClientRect();
      // Badge is position:fixed, so its top is already relative to viewport.
      // top = navbar(64px) + badge rendered height
      setTop(rect.bottom);
    }
  }, []);

  useEffect(() => {
    measureBadge();
    // Re-measure on resize (text wraps, badge height changes)
    window.addEventListener("resize", measureBadge);
    return () => window.removeEventListener("resize", measureBadge);
  }, [measureBadge]);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setProgress(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="fixed inset-x-0 z-30 h-0.5 bg-neutral-100 dark:bg-neutral-900"
      style={{ top: `${top}px` }}
    >
      <div
        className="h-full bg-gradient-to-r from-emerald-500 via-emerald-400 to-emerald-500"
        style={{ width: `${progress * 100}%`, willChange: "width" }}
      />
    </div>
  );
}
