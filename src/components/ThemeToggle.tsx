"use client";

import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

/**
 * Single-icon theme button.
 * Shows dark green moon in dark mode, light green sun in light mode.
 * Clicking toggles the theme.
 */
export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={`
        relative inline-flex items-center justify-center
        w-8 h-8 rounded-full
        transition-all duration-500 ease-in-out
        focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50
        cursor-pointer
        ${
          isDark
            ? "bg-[#1a2a1a] text-emerald-400 hover:bg-[#2a3a2a]"
            : "bg-[#e8f5e9] text-emerald-600 hover:bg-[#d8f0da]"
        }
      `}
    >
      <motion.div
        key={isDark ? "dark" : "light"}
        initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        exit={{ scale: 0.5, rotate: 90, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {isDark ? (
          <Moon className="h-4 w-4" />
        ) : (
          <Sun className="h-4 w-4" />
        )}
      </motion.div>
    </button>
  );
}
