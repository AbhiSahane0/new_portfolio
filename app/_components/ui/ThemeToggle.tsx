"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme, toggleTheme } from "./theme";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      title={`Switch to ${isDark ? "light" : "dark"} theme`}
      className={`relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border border-white/10 text-ink-200 transition hover:border-white/25 hover:text-ink-50 ${className}`}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={theme}
          initial={{ y: 14, opacity: 0, rotate: -30 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -14, opacity: 0, rotate: 30 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="grid place-items-center"
        >
          {isDark ? (
            <FiMoon size={17} className="text-cyan-200" />
          ) : (
            <FiSun size={17} className="text-amber-500" />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
