"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiGithub,
  FiExternalLink,
  FiChevronDown,
  FiArrowUpRight,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import TiltCard from "../ui/TiltCard";
import PhoneMockup from "./PhoneMockup";
import { useTheme, readableColor } from "../ui/theme";
import { projects, projectFilters, type Project } from "@/app/data/portfolio";

/* ---------------- Featured (GymBuddy) ---------------- */

function Featured({ p }: { p: Project }) {
  const [open, setOpen] = useState(false);
  const study: { label: string; text?: string }[] = [
    { label: "The problem", text: p.problem },
    { label: "Architecture", text: p.architecture },
    { label: "Hardest parts", text: p.challenges },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="glass-strong gradient-border relative overflow-hidden rounded-[2rem] p-6 sm:p-9"
    >
      <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: content */}
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip !border-violet-400/30 !bg-violet-500/10 !text-violet-200">
              <HiSparkles /> Featured
            </span>
            <span className="chip !border-emerald-400/30 !bg-emerald-500/10 !text-emerald-200">
              <span className="status-dot !h-2 !w-2" /> {p.status}
            </span>
          </div>

          <h3 className="mt-4 font-display text-3xl font-bold text-ink-50 sm:text-4xl">
            {p.title}
          </h3>
          <p className="mt-1 text-lg text-cyan-200/90">{p.tagline}</p>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-300">
            {p.description}
          </p>

          {/* metrics */}
          {p.metrics && (
            <div className="mt-5 grid grid-cols-4 gap-2">
              {p.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-ink-50/10 bg-ink-50/[0.03] p-3 text-center"
                >
                  <p className="font-display text-lg font-bold text-ink-50">
                    {m.value}
                  </p>
                  <p className="text-[10px] uppercase tracking-wide text-ink-500">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* features */}
          <ul className="mt-5 grid gap-x-5 gap-y-2 sm:grid-cols-2">
            {p.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm text-ink-200"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                {f}
              </li>
            ))}
          </ul>

          {/* tech */}
          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <span key={t} className="chip !py-1 !text-xs">
                {t}
              </span>
            ))}
          </div>

          {/* actions */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_-8px_rgba(124,58,237,0.9)]"
              aria-expanded={open}
            >
              Read case study
              <FiChevronDown
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </button>
            {p.links.github && (
              <a
                href={p.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink-50/15 px-5 py-2.5 text-sm font-medium text-ink-200 transition hover:border-ink-50/30 hover:text-ink-50"
              >
                <FiGithub /> GitHub
              </a>
            )}
          </div>

          {/* case study */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="mt-6 grid gap-3 border-t border-ink-50/10 pt-6">
                  {study.map(
                    (s) =>
                      s.text && (
                        <div key={s.label}>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-200/80">
                            {s.label}
                          </p>
                          <p className="mt-1 text-sm leading-relaxed text-ink-300">
                            {s.text}
                          </p>
                        </div>
                      )
                  )}
                  <p className="mt-1 text-sm italic text-ink-400">
                    Planned, architected, built, deployed and released —
                    entirely on my own.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right: phone */}
        <div className="order-first flex justify-center lg:order-last">
          <PhoneMockup />
        </div>
      </div>
    </motion.div>
  );
}

/* ---------------- Grid card ---------------- */

function Card({ p }: { p: Project }) {
  const light = useTheme() === "light";
  const accentText = readableColor(p.accent, light);
  return (
    <TiltCard className="h-full" glow={`${p.accent}55`} max={7}>
      <div className="glass gradient-border flex h-full flex-col rounded-3xl p-6">
        {/* top strip visual */}
        <div
          className="relative mb-5 h-24 overflow-hidden rounded-2xl"
          style={{
            background: `linear-gradient(135deg, ${p.accent}44, transparent 70%), radial-gradient(circle at 80% 20%, ${p.accent}33, transparent 60%)`,
          }}
        >
          <div className="grid-bg absolute inset-0 opacity-40" />
          <span
            className={`absolute right-3 top-3 rounded-full bg-gradient-to-r ${p.gradient} px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white`}
          >
            {p.category}
          </span>
          <span className="absolute bottom-3 left-4 font-display text-2xl font-bold text-ink-50/90">
            {p.title.split(" — ")[0]}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <h3 className="font-display text-lg font-bold text-ink-50">
            {p.title}
          </h3>
          <span className="text-xs text-ink-500">{p.year}</span>
        </div>
        <p className="mt-1 text-sm font-medium" style={{ color: accentText }}>
          {p.tagline}
        </p>
        <p className="mt-3 flex-grow text-sm leading-relaxed text-ink-400">
          {p.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {p.tech.slice(0, 5).map((t) => (
            <span
              key={t}
              className="rounded-lg border border-ink-50/10 bg-ink-50/[0.03] px-2 py-0.5 text-[11px] text-ink-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex gap-2">
          {p.links.github && (
            <a
              href={p.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-ink-50/12 bg-ink-50/[0.03] py-2 text-sm font-medium text-ink-200 transition hover:bg-ink-50/[0.08] hover:text-ink-50"
            >
              <FiGithub size={15} /> Code
            </a>
          )}
          {p.links.live ? (
            <a
              href={p.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2 text-sm font-semibold text-ink-50"
              style={{ background: `linear-gradient(90deg, ${accentText}, ${accentText}cc)` }}
            >
              <FiExternalLink size={15} /> Live
            </a>
          ) : (
            <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-ink-50/10 py-2 text-xs text-ink-500">
              <FiArrowUpRight size={14} /> Source only
            </span>
          )}
        </div>
      </div>
    </TiltCard>
  );
}

/* ---------------- Section ---------------- */

export default function Projects() {
  const [filter, setFilter] =
    useState<(typeof projectFilters)[number]>("All");

  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);
  const shown =
    filter === "All" ? rest : rest.filter((p) => p.category === filter);

  return (
    <Section id="projects" label="Projects" width="full">
      <SectionHeading
        eyebrow="Selected work"
        title={
          <>
            Real products,{" "}
            <span className="text-aurora">shipped end-to-end</span>
          </>
        }
        subtitle="Not demos — apps with auth, payments, databases, deployment and real release pipelines."
      />

      <div className="mt-12">
        <Featured p={featured} />
      </div>

      {/* filters */}
      <div className="mt-12 flex flex-wrap justify-center gap-2">
        {projectFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              filter === f
                ? "bg-ink-50 text-void"
                : "border border-ink-50/12 bg-ink-50/[0.02] text-ink-300 hover:border-ink-50/25 hover:text-ink-50"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* grid */}
      <motion.div layout className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.4 }}
            >
              <Card p={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
