"use client";

import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { navLinks, siteConfig } from "@/app/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-ink-50/8 px-5 py-12 sm:px-8">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[1.4fr_1fr_auto]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 font-display text-sm font-bold text-white">
              AS
            </span>
            <span className="font-display text-lg font-semibold text-ink-50">
              {siteConfig.name}
            </span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-400">
            {siteConfig.tagline} Available for freelance & full-time roles.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { Icon: FiGithub, href: siteConfig.socials.github, label: "GitHub" },
              { Icon: FiLinkedin, href: siteConfig.socials.linkedin, label: "LinkedIn" },
              { Icon: FiMail, href: siteConfig.socials.email, label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-ink-50/10 text-ink-300 transition hover:border-ink-50/25 hover:text-ink-50"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer" className="grid grid-cols-2 gap-2 sm:gap-x-8">
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() =>
                document
                  .getElementById(l.id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="text-left text-sm text-ink-400 transition hover:text-ink-50"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-11 items-center gap-2 self-start rounded-full border border-ink-50/12 px-4 text-sm text-ink-200 transition hover:border-ink-50/25 hover:text-ink-50"
        >
          <FiArrowUp /> Back to top
        </button>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-ink-50/8 pt-6 text-xs text-ink-500 sm:flex-row">
        <p>
          © {year} {siteConfig.name}. Built with Next.js, TypeScript, Tailwind
          &amp; Framer Motion.
        </p>
        <p className="flex items-center gap-1.5">
          <span className="status-dot !h-2 !w-2" /> {siteConfig.availability}
        </p>
      </div>
    </footer>
  );
}
