"use client";

import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="relative w-16 h-8 rounded-full border-2 border-neutral-600 dark:border-neutral-400 bg-neutral-300 dark:bg-neutral-700 transition-colors duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 cursor-pointer overflow-hidden group"
    >
      {/* Track background animation */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          backgroundColor: isDark ? "#404040" : "#e5e5e5",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      {/* Sliding thumb */}
      <motion.div
        className="absolute top-0.5 h-7 w-7 rounded-full flex items-center justify-center shadow-md"
        animate={{
          left: isDark ? "2px" : "34px",
          backgroundColor: isDark ? "#262626" : "#ffffff",
          rotate: isDark ? 0 : 180,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <motion.div
          animate={{ rotate: isDark ? 0 : 180 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {isDark ? (
            <Moon className="h-4 w-4 text-neutral-300" />
          ) : (
            <Sun className="h-4 w-4 text-amber-500" />
          )}
        </motion.div>
      </motion.div>

      {/* Subtle icon hints on the track */}
      <div className="absolute inset-0 flex items-center justify-between px-2 pointer-events-none">
        <Moon className={`h-3 w-3 transition-opacity duration-300 ${isDark ? "opacity-60" : "opacity-20"}`} />
        <Sun className={`h-3 w-3 transition-opacity duration-300 ${isDark ? "opacity-20" : "opacity-60"}`} />
      </div>
    </button>
  );
}
