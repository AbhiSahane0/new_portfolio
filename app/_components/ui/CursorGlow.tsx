"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * A soft aurora glow that trails the cursor. Desktop / fine-pointer only,
 * and disabled under reduced-motion. Purely decorative.
 */
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 260, damping: 40, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 260, damping: 40, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const move = (e: MouseEvent) => {
      x.set(e.clientX - 250);
      y.set(e.clientY - 250);
    };
    window.addEventListener("mousemove", move, { passive: true });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[5] h-[500px] w-[500px] rounded-full"
      style={{
        x: sx,
        y: sy,
        background:
          "radial-gradient(circle, rgba(124,58,237,0.13) 0%, rgba(34,211,238,0.07) 35%, transparent 68%)",
      }}
    />
  );
}
