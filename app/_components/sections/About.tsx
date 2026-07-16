"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import {
  aboutParagraphs,
  aboutPhilosophy,
  aboutHighlights,
} from "@/app/data/portfolio";

const learned = [
  "Deployment",
  "Authentication",
  "Payments",
  "Backend",
  "Cloud",
  "Databases",
  "Play Store release",
  "DevOps",
];

export default function About() {
  return (
    <Section id="about" label="About me">
      <SectionHeading
        eyebrow="About"
        title={
          <>
            I don&apos;t follow tutorials.{" "}
            <span className="text-aurora">I ship products.</span>
          </>
        }
        subtitle="The fastest way I learn something is to build a real thing with it — and put it in front of real users."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Story */}
        <div className="space-y-4">
          {aboutParagraphs.map((p, i) => (
            <Reveal key={i} dir="left" delay={i * 0.08}>
              <div className="glass gradient-border glow-hover rounded-2xl p-6 text-[15px] leading-relaxed text-ink-200 sm:text-base">
                {i === 0 && (
                  <span className="float-left mr-3 mt-1 font-display text-4xl font-bold text-aurora">
                    “
                  </span>
                )}
                {p}
              </div>
            </Reveal>
          ))}

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-3 pt-2 sm:grid-cols-4">
            {aboutHighlights.map((h, i) => (
              <Reveal key={h.k} dir="up" delay={0.1 + i * 0.06}>
                <div className="glass h-full rounded-2xl p-4">
                  <p className="font-display text-sm font-semibold text-ink-50">
                    {h.k}
                  </p>
                  <p className="mt-1 text-xs text-ink-400">{h.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Philosophy panel */}
        <Reveal dir="right">
          <div className="glass-strong gradient-border relative overflow-hidden rounded-3xl p-7">
            <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-violet-600/30 blur-3xl" />
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-200/80">
              My philosophy
            </p>
            <h3 className="mt-3 font-display text-3xl font-bold leading-tight text-ink-50 sm:text-4xl">
              {aboutPhilosophy}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">
              To master mobile development I didn&apos;t build a to-do list — I
              built and shipped a production app. Here&apos;s what building real
              products taught me:
            </p>

            <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3">
              {learned.map((l, i) => (
                <motion.li
                  key={l}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-2 text-sm text-ink-200"
                >
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 text-black">
                    <FiCheck size={12} strokeWidth={3} />
                  </span>
                  {l}
                </motion.li>
              ))}
            </ul>

            <div className="mt-7 flex items-center gap-3 rounded-2xl border border-ink-50/10 bg-ink-50/[0.03] p-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 font-display font-bold text-white">
                AS
              </span>
              <p className="text-sm text-ink-300">
                Currently a <span className="text-ink-50">Frontend Developer</span>{" "}
                — and learning backend, cloud &amp; data engineering by shipping.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
