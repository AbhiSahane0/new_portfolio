"use client";

import { motion } from "framer-motion";
import {
  FiCode,
  FiSmartphone,
  FiLayout,
  FiLayers,
  FiZap,
  FiCloud,
  FiArrowRight,
} from "react-icons/fi";
import { TbApi, TbBug } from "react-icons/tb";
import type { IconType } from "react-icons";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { freelanceServices, siteConfig } from "@/app/data/portfolio";

const iconMap: Record<string, IconType> = {
  react: FiCode,
  mobile: FiSmartphone,
  layout: FiLayout,
  stack: FiLayers,
  api: TbApi,
  bug: TbBug,
  gauge: FiZap,
  cloud: FiCloud,
};

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Freelancing() {
  return (
    <Section id="freelance" label="Freelancing" width="full">
      <div className="glass-strong gradient-border relative overflow-hidden rounded-[2.5rem] p-8 sm:p-12">
        <div className="pointer-events-none absolute -left-20 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-violet-600/25 blur-3xl" />

        <div className="relative grid items-center gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* left pitch */}
          <div>
            <span className="chip !border-emerald-400/30 !bg-emerald-500/10 !text-emerald-200">
              <span className="status-dot !h-2 !w-2" /> {siteConfig.availability}
            </span>
            <h2 className="mt-5 font-display text-3xl font-bold leading-tight text-ink-50 sm:text-4xl">
              Let&apos;s build your{" "}
              <span className="text-aurora">product.</span>
            </h2>
            <p className="mt-4 max-w-md text-[15px] leading-relaxed text-ink-300">
              Whether it&apos;s a quick fix, a new feature, or a whole app taken
              from idea to the store — I take ownership and ship. Clear
              communication, production-quality code, real results.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <button
                onClick={() => go("contact")}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 font-semibold text-white shadow-[0_0_30px_-8px_rgba(124,58,237,0.9)]"
              >
                Hire me
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={siteConfig.resume}
                download
                className="inline-flex items-center gap-2 rounded-full border border-ink-50/15 px-6 py-3 font-medium text-ink-200 transition hover:border-ink-50/30 hover:text-ink-50"
              >
                Download résumé
              </a>
            </div>
          </div>

          {/* right services grid */}
          <div className="grid gap-3 sm:grid-cols-2">
            {freelanceServices.map((s, i) => {
              const Icon = iconMap[s.icon] ?? FiCode;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  whileHover={{ y: -4 }}
                  className="glass flex items-start gap-3 rounded-2xl p-4"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-ink-50/[0.05] text-lg text-cyan-300 ring-1 ring-ink-50/10">
                    <Icon />
                  </span>
                  <div>
                    <p className="font-display text-sm font-semibold text-ink-50">
                      {s.title}
                    </p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-400">
                      {s.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}
