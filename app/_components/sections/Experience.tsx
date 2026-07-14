"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { useTheme, readableColor } from "../ui/theme";
import { timeline } from "@/app/data/portfolio";

export default function Experience() {
  const light = useTheme() === "light";
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <Section id="experience" label="Experience and journey">
      <SectionHeading
        eyebrow="The journey"
        title={
          <>
            From centering a div to{" "}
            <span className="text-aurora">shipping to the store</span>
          </>
        }
        subtitle="Frontend → backend → cloud → data engineering → production apps → freelance. Every step earned by building."
      />

      <div ref={ref} className="relative mt-16">
        {/* rail */}
        <div className="absolute left-[19px] top-0 h-full w-[2px] bg-ink-50/8 md:left-1/2 md:-translate-x-1/2" />
        <motion.div
          style={{ scaleY }}
          className="absolute left-[19px] top-0 h-full w-[2px] origin-top bg-gradient-to-b from-cyan-400 via-violet-500 to-fuchsia-500 md:left-1/2 md:-translate-x-1/2"
        />

        <div className="space-y-10 md:space-y-4">
          {timeline.map((item, i) => {
            const left = i % 2 === 0;
            return (
              <div
                key={i}
                className={`relative flex md:items-center ${
                  left ? "md:justify-start" : "md:justify-end"
                }`}
              >
                {/* node */}
                <span
                  className="absolute left-[13px] top-1.5 z-10 grid h-[15px] w-[15px] place-items-center rounded-full border-2 border-void md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2"
                  style={{
                    background: item.accent,
                    boxShadow: `0 0 16px 2px ${item.accent}`,
                  }}
                />

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className={`ml-11 w-full md:ml-0 md:w-[calc(50%-2.5rem)] ${
                    left ? "md:pr-10 md:text-right" : "md:pl-10"
                  }`}
                >
                  <div className="glass gradient-border glow-hover rounded-2xl p-5 transition-transform hover:-translate-y-1">
                    <div
                      className={`flex flex-wrap items-center gap-2 ${
                        left ? "md:justify-end" : ""
                      }`}
                    >
                      <span
                        className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-void"
                        style={{ background: readableColor(item.accent, light) }}
                      >
                        {item.period}
                      </span>
                      <span className="text-xs text-ink-500">{item.type}</span>
                    </div>

                    <h3 className="mt-2 font-display text-lg font-bold text-ink-50">
                      {item.title}
                    </h3>
                    {item.org && (
                      <p className="text-sm font-medium text-ink-300">
                        {item.org}
                      </p>
                    )}

                    <ul
                      className={`mt-3 space-y-1.5 ${
                        left ? "md:ml-auto" : ""
                      }`}
                    >
                      {item.points.map((pt) => (
                        <li
                          key={pt}
                          className={`text-sm leading-relaxed text-ink-400 ${
                            left ? "md:text-right" : ""
                          }`}
                        >
                          {pt}
                        </li>
                      ))}
                    </ul>

                    {item.tech && (
                      <div
                        className={`mt-3 flex flex-wrap gap-1.5 ${
                          left ? "md:justify-end" : ""
                        }`}
                      >
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-md border border-ink-50/10 bg-ink-50/[0.03] px-1.5 py-0.5 text-[11px] text-ink-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
