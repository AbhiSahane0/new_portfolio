"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
  FiMapPin,
  FiCheckCircle,
  FiDownload,
} from "react-icons/fi";
import Section from "../ui/Section";
import SectionHeading from "../ui/SectionHeading";
import { sendFeedback } from "@/app/services/apis/sendFeedback";
import { siteConfig } from "@/app/data/portfolio";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in every field before sending.");
      setStatus("error");
      return;
    }
    setStatus("sending");
    const { success, error: err } = await sendFeedback(form);
    if (!success) {
      setError(err || "Something went wrong. Please try again.");
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
  };

  const contacts = [
    {
      Icon: FiMail,
      label: "Email",
      value: siteConfig.email,
      href: siteConfig.socials.email,
    },
    {
      Icon: FiGithub,
      label: "GitHub",
      value: "AbhiSahane0",
      href: siteConfig.socials.github,
    },
    {
      Icon: FiLinkedin,
      label: "LinkedIn",
      value: "Abhijit Sahane",
      href: siteConfig.socials.linkedin,
    },
    {
      Icon: FiMapPin,
      label: "Location",
      value: siteConfig.location,
      href: undefined,
    },
  ];

  const inputCls =
    "peer w-full rounded-xl border border-ink-50/12 bg-ink-50/[0.03] px-4 py-3 text-ink-50 placeholder-transparent outline-none transition focus:border-cyan-400/60 focus:bg-ink-50/[0.06] focus:ring-2 focus:ring-cyan-400/20";
  const labelCls =
    "pointer-events-none absolute left-4 top-3 text-ink-500 transition-all peer-focus:-top-2.5 peer-focus:text-xs peer-focus:text-cyan-300 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-ink-300 peer-[:not(:placeholder-shown)]:bg-void peer-[:not(:placeholder-shown)]:px-1 peer-focus:bg-void peer-focus:px-1";

  return (
    <Section id="contact" label="Contact">
      <SectionHeading
        eyebrow="Get in touch"
        title={
          <>
            Have an idea? <span className="text-aurora">Let&apos;s ship it.</span>
          </>
        }
        subtitle="Freelance projects, full-time roles or a quick question — my inbox is open."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        {/* left: info */}
        <div className="space-y-3">
          {contacts.map(({ Icon, label, value, href }) => {
            const inner = (
              <div className="glass glow-hover flex items-center gap-4 rounded-2xl p-4 transition hover:border-ink-50/25">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 text-lg text-cyan-200 ring-1 ring-ink-50/10">
                  <Icon />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wide text-ink-500">
                    {label}
                  </p>
                  <p className="truncate font-medium text-ink-50">{value}</p>
                </div>
              </div>
            );
            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="block"
              >
                {inner}
              </a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}

          <a
            href={siteConfig.resume}
            download
            className="flex items-center justify-center gap-2 rounded-2xl border border-ink-50/12 bg-ink-50/[0.02] p-4 font-medium text-ink-200 transition hover:border-ink-50/25 hover:text-ink-50"
          >
            <FiDownload /> Download Résumé
          </a>
        </div>

        {/* right: form */}
        <div className="glass-strong gradient-border rounded-3xl p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {status === "success" ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-16 text-center"
              >
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-emerald-400 to-cyan-500 text-black"
                >
                  <FiCheckCircle size={30} />
                </motion.span>
                <h3 className="mt-5 font-display text-xl font-bold text-ink-50">
                  Message sent!
                </h3>
                <p className="mt-2 max-w-sm text-sm text-ink-400">
                  Thanks for reaching out — it means a lot. I&apos;ll get back to
                  you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 rounded-full border border-ink-50/15 px-5 py-2 text-sm text-ink-200 transition hover:text-ink-50"
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={onSubmit}
                className="space-y-5"
                noValidate
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="relative">
                    <input
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      placeholder="Your name"
                      className={inputCls}
                      autoComplete="name"
                    />
                    <label htmlFor="name" className={labelCls}>
                      Your name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      placeholder="Your email"
                      className={inputCls}
                      autoComplete="email"
                    />
                    <label htmlFor="email" className={labelCls}>
                      Your email
                    </label>
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    placeholder="Your message"
                    className={`${inputCls} resize-none`}
                  />
                  <label htmlFor="message" className={labelCls}>
                    Tell me about your project…
                  </label>
                </div>

                <div aria-live="polite" className="min-h-[1.25rem]">
                  {status === "error" && error && (
                    <motion.p
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-rose-400"
                    >
                      {error}
                    </motion.p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-violet-500 to-cyan-400 py-3.5 font-semibold text-white shadow-[0_0_30px_-8px_rgba(124,58,237,0.9)] transition disabled:opacity-60"
                >
                  <span className="absolute inset-0 -translate-x-full bg-white/25 transition-transform duration-500 group-hover:translate-x-full" />
                  {status === "sending" ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink-50/40 border-t-white" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <FiSend /> Send message
                    </>
                  )}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}
