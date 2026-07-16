"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { useRef, type ReactNode } from "react";

/**
 * 3D mouse-tilt card with a moving light sheen. Lifts on hover.
 * Falls back to a plain container under reduced motion.
 */
export default function TiltCard({
  children,
  className = "",
  max = 8,
  glow = "rgba(124,58,237,0.35)",
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glow?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);

  const rx = useSpring(useTransform(my, [0, 1], [max, -max]), {
    stiffness: 200,
    damping: 20,
  });
  const ry = useSpring(useTransform(mx, [0, 1], [-max, max]), {
    stiffness: 200,
    damping: 20,
  });

  const sheenX = useTransform(mx, [0, 1], ["0%", "100%"]);
  const sheenY = useTransform(my, [0, 1], ["0%", "100%"]);

  const handleMove = (e: React.MouseEvent) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };

  const reset = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`group relative ${className}`}
      style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d", transformPerspective: 1000 }}
      whileHover={{ y: -8, boxShadow: `0 30px 60px -24px ${glow}` }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      {children}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [sheenX, sheenY],
            ([px, py]) =>
              `radial-gradient(340px circle at ${px} ${py}, rgba(255,255,255,0.10), transparent 42%)`
          ),
        }}
      />
    </motion.div>
  );
}
