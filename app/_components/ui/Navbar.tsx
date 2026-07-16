"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import { navLinks, siteConfig } from "@/app/data/portfolio";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [active, setActive] = useState<string>("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Scroll-spy via IntersectionObserver.
  useEffect(() => {
    const ids = navLinks.map((l) => l.id);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`flex w-full max-w-4xl items-center justify-between gap-2 rounded-full px-3 py-2 transition-all duration-500 ${
          scrolled
            ? "glass-strong shadow-[0_10px_40px_-12px_rgba(0,0,0,0.7)]"
            : "border border-ink-50/5 bg-ink-50/[0.02] backdrop-blur-sm"
        }`}
      >
        {/* Brand */}
        <button
          onClick={() => go("home")}
          className="group flex shrink-0 items-center gap-2 rounded-full px-2 py-1"
          aria-label="Go to top"
        >
          <span className="relative grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 font-display text-sm font-bold text-white shadow-[0_0_18px_-2px_rgba(124,58,237,0.8)]">
            AS
          </span>
          <span className="hidden font-display text-sm font-semibold tracking-tight text-ink-50 sm:block">
            Abhijit
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-0.5 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className={`relative rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
                  active === link.id
                    ? "text-ink-50"
                    : "text-ink-400 hover:text-ink-50"
                }`}
              >
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-ink-50/10 ring-1 ring-ink-50/15"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA + toggles */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={siteConfig.resume}
            download
            className="hidden items-center gap-1.5 rounded-full bg-ink-50 px-3.5 py-1.5 text-sm font-semibold text-void transition hover:opacity-90 sm:flex"
          >
            <FiDownload className="text-[15px]" />
            Resume
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full bg-ink-50/10 text-ink-50 ring-1 ring-ink-50/15 lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 z-40 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-strong absolute inset-x-4 top-24 rounded-3xl p-3"
            >
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => go(link.id)}
                      className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-base font-medium transition ${
                        active === link.id
                          ? "bg-ink-50/10 text-ink-50"
                          : "text-ink-200 hover:bg-ink-50/5"
                      }`}
                    >
                      {link.label}
                      {active === link.id && (
                        <span className="h-2 w-2 rounded-full bg-cyan-400" />
                      )}
                    </button>
                  </li>
                ))}
              </ul>
              <a
                href={siteConfig.resume}
                download
                className="mt-2 flex items-center justify-center gap-2 rounded-2xl bg-ink-50 px-4 py-3 text-base font-semibold text-void"
              >
                <FiDownload /> Download Resume
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
