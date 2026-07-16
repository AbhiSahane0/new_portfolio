"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FiUsers, FiActivity, FiCreditCard, FiClipboard } from "react-icons/fi";

const tiles = [
  { icon: FiUsers, label: "Members", value: "248", tint: "from-violet-500/30 to-violet-500/5", color: "#c4b5fd" },
  { icon: FiActivity, label: "Attendance", value: "92%", tint: "from-cyan-500/30 to-cyan-500/5", color: "#67e8f9" },
  { icon: FiCreditCard, label: "Revenue", value: "₹1.2L", tint: "from-emerald-500/30 to-emerald-500/5", color: "#6ee7b7" },
  { icon: FiClipboard, label: "Plans", value: "36", tint: "from-fuchsia-500/30 to-fuchsia-500/5", color: "#f0abfc" },
];

const rows = [
  { n: "Riya Sharma", t: "Checked in · 7:02 AM", c: "#a78bfa" },
  { n: "Arjun Mehta", t: "Plan renewed", c: "#22d3ee" },
  { n: "Kabir Singh", t: "New member", c: "#34d399" },
];

/** Pure-CSS Android app mockup for GymBuddy — no image assets, no broken links. */
export default function PhoneMockup() {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className="relative mx-auto w-[248px] shrink-0 [transform-style:preserve-3d]"
      animate={reduced ? {} : { y: [0, -14, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* glow */}
      <div className="absolute inset-0 -z-10 scale-110 rounded-[3rem] bg-gradient-to-br from-violet-600/40 to-cyan-500/30 blur-3xl" />

      <div className="rounded-[2.6rem] border border-white/15 bg-[#0a0a16] p-2.5 shadow-[0_40px_80px_-30px_rgba(124,58,237,0.7)]">
        <div className="relative overflow-hidden rounded-[2.1rem] bg-[#07070f]">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black" />

          {/* header */}
          <div className="bg-gradient-to-br from-violet-600 to-fuchsia-600 px-4 pb-5 pt-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[10px] text-white/70">Good morning 👋</p>
                <p className="font-display text-sm font-bold text-white">
                  Iron Paradise Gym
                </p>
              </div>
              <div className="h-8 w-8 rounded-full border-2 border-white/40 bg-white/20" />
            </div>
          </div>

          {/* body */}
          <div className="space-y-3 p-3">
            <div className="grid grid-cols-2 gap-2">
              {tiles.map((t) => {
                const Icon = t.icon;
                return (
                  <div
                    key={t.label}
                    className={`rounded-xl border border-white/5 bg-gradient-to-br ${t.tint} p-2.5`}
                  >
                    <Icon style={{ color: t.color }} className="text-sm" />
                    <p className="mt-1.5 font-display text-base font-bold text-white">
                      {t.value}
                    </p>
                    <p className="text-[9px] text-ink-400">{t.label}</p>
                  </div>
                );
              })}
            </div>

            <p className="px-1 pt-1 text-[10px] font-semibold text-ink-300">
              Recent activity
            </p>
            {rows.map((r) => (
              <div
                key={r.n}
                className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.03] p-2"
              >
                <span
                  className="grid h-7 w-7 place-items-center rounded-full text-[10px] font-bold text-black"
                  style={{ background: r.c }}
                >
                  {r.n[0]}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-[11px] font-medium text-white">
                    {r.n}
                  </p>
                  <p className="truncate text-[9px] text-ink-500">{r.t}</p>
                </div>
              </div>
            ))}
          </div>

          {/* tab bar */}
          <div className="flex items-center justify-around border-t border-white/5 bg-black/40 px-2 py-2.5">
            {["home", "plans", "pay", "you"].map((tab, i) => (
              <div
                key={tab}
                className={`h-1.5 rounded-full ${
                  i === 0 ? "w-6 bg-cyan-400" : "w-4 bg-white/15"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
