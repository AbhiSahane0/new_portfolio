"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Dir = "up" | "down" | "left" | "right" | "none";

const offset: Record<Dir, { x: number; y: number }> = {
  up: { x: 0, y: 36 },
  down: { x: 0, y: -36 },
  left: { x: 44, y: 0 },
  right: { x: -44, y: 0 },
  none: { x: 0, y: 0 },
};

/** In-view reveal wrapper. Fires once, respects reduced motion via CSS override. */
export default function Reveal({
  children,
  dir = "up",
  delay = 0,
  duration = 0.7,
  className,
  amount = 0.25,
  as = "div",
}: {
  children: ReactNode;
  dir?: Dir;
  delay?: number;
  duration?: number;
  className?: string;
  amount?: number;
  as?: "div" | "section" | "li" | "span";
}) {
  const M = motion[as];
  const { x, y } = offset[dir];
  return (
    <M
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </M>
  );
}

/** Staggered container + item helpers for lists/grids. */
export const staggerParent: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};
