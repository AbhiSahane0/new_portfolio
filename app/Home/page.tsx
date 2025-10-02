"use client";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import { motion } from "framer-motion";

function Page() {
  const icons = [
    { id: 1, icon: <FaReact size={60} className="text-cyan-400" /> },
    { id: 2, icon: <SiNextdotjs size={60} className="text-white" /> },
    { id: 3, icon: <SiTailwindcss size={60} className="text-sky-400" /> },
    { id: 4, icon: <SiTypescript size={60} className="text-blue-500" /> },
  ];

  return (
    <section className="relative flex h-screen items-center justify-center bg-gradient-to-b from-black via-indigo-950 to-black overflow-hidden">
      {/* Floating icons */}
      {icons.map((item, i) => (
        <motion.div
          key={item.id}
          className="absolute"
          initial={{ x: 0, y: 0 }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            repeatType: "mirror",
          }}
          style={{
            top: `${20 + i * 15}%`,
            left: `${15 + i * 20}%`,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Center content */}
      <div className="z-10 text-center">
        <h1 className="text-5xl font-bold text-white">Hi, I’m Abhi 👋</h1>
        <p className="mt-4 text-xl text-gray-300">
          I build modern web apps with React, Next.js, TypeScript & Tailwind
        </p>
      </div>
    </section>
  );
}

export default Page;
