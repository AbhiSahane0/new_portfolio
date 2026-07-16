"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** Consistent eyebrow + title + subtitle block for every section. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
}) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className={`chip ${isCenter ? "mx-auto" : ""} !bg-ink-50/[0.04]`}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
          {eyebrow}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-5 font-display text-3xl font-bold tracking-tight text-ink-50 sm:text-4xl md:text-5xl"
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className={`mt-4 text-base leading-relaxed text-ink-400 sm:text-lg ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
