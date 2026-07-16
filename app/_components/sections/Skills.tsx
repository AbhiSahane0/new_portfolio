"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import TiltCard from "../ui/TiltCard";
import { useTheme, readableColor } from "../ui/theme";
import { skillGroups, marqueeTech } from "@/app/data/portfolio";

function Marquee() {
  const light = useTheme() === "light";
  const row = [...marqueeTech, ...marqueeTech];
  return (
    <div
      className="group relative mt-12 overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
      }}
    >
      <div className="flex w-max animate-marquee gap-4 group-hover:[animation-play-state:paused]">
        {row.map((t, i) => {
          const Icon = t.Icon;
          return (
            <div
              key={i}
              className="glass flex shrink-0 items-center gap-2.5 rounded-full px-5 py-2.5"
            >
              <Icon
                className="text-xl"
                style={{ color: readableColor(t.color, light) }}
              />
              <span className="text-sm font-medium text-ink-200">{t.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Skills() {
  const light = useTheme() === "light";
  return (
    <Section id="skills" label="Skills" width="full">
      <SectionHeading
        eyebrow="Toolbox"
        title={
          <>
            Skills that cover the{" "}
            <span className="text-aurora">whole product</span>
          </>
        }
        subtitle="Frontend, backend, databases, cloud and data engineering — the full arc from pixel to production."
      />

      <Marquee />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: gi * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <TiltCard className="h-full" max={6}>
              <div className="glass gradient-border h-full rounded-3xl p-6">
                <div className="flex items-center justify-between">
                  <h3
                    className={`grad-clip font-display text-lg font-bold bg-gradient-to-r ${group.accent} bg-clip-text text-transparent`}
                  >
                    {group.title}
                  </h3>
                  <span className="text-xs text-ink-500">
                    {group.skills.length} skills
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink-400">{group.blurb}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((s, i) => {
                    const Icon = s.Icon;
                    return (
                      <motion.span
                        key={s.name}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: gi * 0.04 + i * 0.04 }}
                        whileHover={{ y: -3 }}
                        className="group/skill flex items-center gap-1.5 rounded-xl border border-ink-50/10 bg-ink-50/[0.03] px-2.5 py-1.5 text-sm text-ink-200 transition-colors hover:border-ink-50/20 hover:bg-ink-50/[0.07]"
                        style={{ willChange: "transform" }}
                      >
                        <Icon
                          className="text-base transition-transform group-hover/skill:scale-110"
                          style={{ color: readableColor(s.color, light) }}
                        />
                        {s.name}
                      </motion.span>
                    );
                  })}
                </div>
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
