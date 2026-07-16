"use client";

import { motion } from "framer-motion";
import {
  FiServer,
  FiCloud,
  FiCreditCard,
  FiDatabase,
  FiZap,
} from "react-icons/fi";
import { HiRocketLaunch } from "react-icons/hi2";
import type { IconType } from "react-icons";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Counter from "../ui/Counter";
import TiltCard from "../ui/TiltCard";
import { useTheme, readableColor } from "../ui/theme";
import { differentiators, achievements } from "@/app/data/portfolio";

const iconMap: Record<string, IconType> = {
  rocket: HiRocketLaunch,
  cloud: FiCloud,
  server: FiServer,
  card: FiCreditCard,
  database: FiDatabase,
  bolt: FiZap,
};

export default function Different() {
  const light = useTheme() === "light";
  return (
    <Section id="different" label="What makes me different" width="full">
      <SectionHeading
        eyebrow="Why me"
        title={
          <>
            I don&apos;t just write React.{" "}
            <span className="text-aurora">I build the whole thing.</span>
          </>
        }
        subtitle="The difference between a developer who hands you components and one who hands you a working product."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((d, i) => {
          const Icon = iconMap[d.icon] ?? FiZap;
          return (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
            >
              <TiltCard className="h-full" glow={`${d.accent}55`} max={6}>
                <div className="glass gradient-border relative h-full overflow-hidden rounded-3xl p-6">
                  <div
                    className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-25 blur-2xl"
                    style={{ background: d.accent }}
                  />
                  <div
                    className="grid h-12 w-12 place-items-center rounded-2xl text-2xl"
                    style={{
                      color: readableColor(d.accent, light),
                      background: `${d.accent}1f`,
                      border: `1px solid ${d.accent}40`,
                    }}
                  >
                    <Icon />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink-50">
                    {d.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">
                    {d.body}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>

      {/* Achievements counters */}
      <div className="mt-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-strong gradient-border grid grid-cols-2 gap-px overflow-hidden rounded-[2rem] lg:grid-cols-4"
        >
          {achievements.map((a) => (
            <div
              key={a.label}
              className="flex flex-col items-center gap-1.5 bg-ink-50/[0.02] px-4 py-8 text-center"
            >
              <span className="font-display text-4xl font-bold text-aurora sm:text-5xl">
                <Counter to={a.value} suffix={a.suffix} />
              </span>
              <p className="mt-1 font-display text-sm font-semibold text-ink-50">
                {a.label}
              </p>
              <p className="text-xs text-ink-500">{a.sub}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
