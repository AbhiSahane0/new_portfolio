"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowRight,
  FiDownload,
  FiGithub,
  FiLinkedin,
  FiArrowDown,
} from "react-icons/fi";
import { HiSparkles } from "react-icons/hi2";
import Typing from "../ui/Typing";
import Counter from "../ui/Counter";
import Magnetic from "../ui/Magnetic";
import { useTheme, readableColor } from "../ui/theme";
import {
  heroRoles,
  heroStats,
  marqueeTech,
  siteConfig,
} from "@/app/data/portfolio";

// A few tech orbs floating around the hero (desktop only).
const orbs = [
  { i: 0, className: "left-[6%] top-[22%]", size: 58, dur: 7 },
  { i: 2, className: "right-[8%] top-[18%]", size: 66, dur: 8.5 },
  { i: 4, className: "left-[12%] bottom-[20%]", size: 50, dur: 6.5 },
  { i: 7, className: "right-[10%] bottom-[24%]", size: 60, dur: 9 },
  { i: 3, className: "left-[3%] top-[52%]", size: 44, dur: 7.8 },
  { i: 11, className: "right-[4%] top-[54%]", size: 46, dur: 8.2 },
];

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const reduced = useReducedMotion();
  const light = useTheme() === "light";

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-5 pt-28 pb-16"
    >
      {/* Floating planet */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-24 hidden h-72 w-72 rounded-full lg:block"
        style={{
          background:
            "radial-gradient(circle at 32% 30%, #a78bfa 0%, #6d28d9 30%, #1e1b4b 70%, #0b0a1f 100%)",
          boxShadow:
            "inset -18px -12px 60px rgba(0,0,0,0.7), 0 0 90px -10px rgba(124,58,237,0.55)",
        }}
        animate={reduced ? {} : { y: [0, -18, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="absolute left-1/2 top-1/2 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 rotate-[24deg] rounded-[50%] border border-ink-50/10" />
        <div className="absolute left-1/2 top-1/2 h-[150%] w-[150%] -translate-x-1/2 -translate-y-1/2 rotate-[24deg] rounded-[50%] border border-cyan-300/10" />
      </motion.div>

      {/* Floating tech orbs */}
      {orbs.map((o) => {
        const tech = marqueeTech[o.i];
        const Icon = tech.Icon;
        return (
          <motion.div
            key={o.i}
            aria-hidden
            className={`absolute z-0 hidden md:block ${o.className}`}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{
              opacity: 0.9,
              scale: 1,
              y: reduced ? 0 : [0, -14, 0],
            }}
            transition={{
              opacity: { duration: 0.8, delay: 0.4 },
              scale: { duration: 0.8, delay: 0.4 },
              y: { duration: o.dur, repeat: Infinity, ease: "easeInOut" },
            }}
            whileHover={{ scale: 1.15 }}
          >
            <div
              className="glass grid place-items-center rounded-2xl"
              style={{ width: o.size, height: o.size }}
            >
              <Icon
                className="text-2xl"
                style={{ color: readableColor(tech.color, light) }}
              />
            </div>
          </motion.div>
        );
      })}

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Availability */}
        <motion.button
          onClick={() => go("contact")}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mx-auto inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-sm text-ink-200 transition hover:text-ink-50"
        >
          <span className="status-dot" />
          {siteConfig.availability}
          <span className="text-ink-500">·</span>
          <span className="text-ink-400">Pune, India</span>
        </motion.button>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          className="mt-7 font-display text-[2.6rem] font-bold leading-[1.05] tracking-tight text-ink-50 sm:text-6xl md:text-[4.6rem]"
        >
          Building{" "}
          <span className="text-aurora">production-ready</span>
          <br className="hidden sm:block" /> web &amp; mobile apps.
        </motion.h1>

        {/* Name + typing role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18 }}
          className="mt-6 flex flex-col items-center justify-center gap-2 text-lg text-ink-200 sm:flex-row sm:text-xl"
        >
          <span className="font-display font-medium text-ink-50">
            Hi, I&apos;m {siteConfig.name.split(" ")[0]}
          </span>
          <span className="hidden text-ink-500 sm:inline">—</span>
          <span className="font-display font-semibold text-cyan-300">
            <Typing words={heroRoles} />
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.28 }}
          className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink-400 sm:text-lg"
        >
          I ship complete products — from a React front end to a Node/Supabase
          backend, payments, cloud and a real{" "}
          <span className="text-ink-200">Play Store release</span>. Frontend ·
          React · React Native · Node.js · Azure · Data Engineering.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38 }}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Magnetic>
            <button
              onClick={() => go("projects")}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 font-semibold text-white shadow-[0_0_30px_-6px_rgba(124,58,237,0.8)] transition"
            >
              <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 group-hover:translate-x-full" />
              View Projects
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </Magnetic>

          <Magnetic>
            <button
              onClick={() => go("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-ink-50/15 bg-ink-50/5 px-6 py-3 font-semibold text-ink-50 backdrop-blur-md transition hover:border-ink-50/30 hover:bg-ink-50/10"
            >
              <HiSparkles className="text-cyan-300" />
              Hire Me
            </button>
          </Magnetic>

          <a
            href={siteConfig.resume}
            download
            className="inline-flex items-center gap-2 rounded-full border border-ink-50/10 px-5 py-3 font-medium text-ink-200 transition hover:border-ink-50/25 hover:text-ink-50"
          >
            <FiDownload /> Resume
          </a>

          <div className="flex items-center gap-2">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink-50/10 text-ink-200 transition hover:border-ink-50/25 hover:text-ink-50"
            >
              <FiGithub size={19} />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-11 w-11 place-items-center rounded-full border border-ink-50/10 text-ink-200 transition hover:border-ink-50/25 hover:text-ink-50"
            >
              <FiLinkedin size={19} />
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="glass mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-3xl sm:grid-cols-4"
        >
          {heroStats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-1 bg-ink-50/[0.02] px-3 py-5"
            >
              <dd className="font-display text-2xl font-bold text-ink-50 sm:text-3xl">
                <Counter to={s.value} prefix={s.prefix} suffix={s.suffix} />
              </dd>
              <dt className="text-center text-xs leading-tight text-ink-400">
                {s.label}
              </dt>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => go("about")}
        aria-label="Scroll to about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-ink-500 hover:text-ink-50"
        animate={reduced ? {} : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <FiArrowDown size={22} />
      </motion.button>
    </section>
  );
}
