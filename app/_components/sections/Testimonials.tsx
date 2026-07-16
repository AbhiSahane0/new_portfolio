"use client";

import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { useTheme, readableColor } from "../ui/theme";
import { testimonials } from "@/app/data/portfolio";

function go(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Testimonials() {
  const light = useTheme() === "light";
  return (
    <Section id="testimonials" label="Testimonials" width="full">
      <SectionHeading
        eyebrow="Kind words"
        title={
          <>
            What clients will say{" "}
            <span className="text-aurora">— your review goes here</span>
          </>
        }
        subtitle="These are placeholders, reserved for the people I work with next. Want the first spot?"
      />

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.figure
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, delay: i * 0.08 }}
            className="glass gradient-border glow-hover relative flex flex-col rounded-3xl p-6 transition-transform hover:-translate-y-1"
          >
            <FaQuoteLeft
              className="text-2xl"
              style={{ color: readableColor(t.accent, light), opacity: 0.7 }}
            />
            <blockquote className="mt-4 flex-grow text-[15px] leading-relaxed text-ink-200">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-50/10 pt-4">
              <span
                className="grid h-11 w-11 place-items-center rounded-full font-display text-sm font-bold text-void"
                style={{ background: readableColor(t.accent, light) }}
              >
                {t.name
                  .split(" ")
                  .map((w) => w[0])
                  .join("")}
              </span>
              <div>
                <p className="text-sm font-semibold text-ink-50">{t.name}</p>
                <p className="text-xs text-ink-400">{t.role}</p>
              </div>
            </figcaption>
          </motion.figure>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-8 flex max-w-xl flex-col items-center gap-4 rounded-3xl border border-dashed border-ink-50/15 p-6 text-center sm:flex-row sm:text-left"
      >
        <p className="flex-grow text-sm text-ink-300">
          <span className="font-semibold text-ink-50">Be my next case study.</span>{" "}
          Let&apos;s build something worth writing a review about.
        </p>
        <button
          onClick={() => go("contact")}
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-ink-50 px-5 py-2.5 text-sm font-semibold text-void transition hover:opacity-90"
        >
          Start a project <FiArrowRight />
        </button>
      </motion.div>
    </Section>
  );
}
