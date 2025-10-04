"use client";
import { motion } from "framer-motion";

export default function AboutMe() {
  const paragraphs = [
    <>
      I’ve always been curious about{" "}
      <span className="text-cyan-400 font-semibold">technology</span> and its
      ever-evolving nature. I started my coding journey at{" "}
      <span className="text-white font-semibold">18</span> — a bit late, but my
      first laptop quickly turned curiosity into{" "}
      <span className="text-green-400 font-semibold">passion</span>. During my
      B.Tech, I learned the fundamentals of web development — yes, even things
      as simple as{" "}
      <span className="text-yellow-400 font-semibold">centering a div</span> —
      and gradually built more complex projects.
    </>,
    <>
      <span className="text-purple-400 font-semibold">Learning</span> is my
      lifestyle. I dive into documentation, explore new tools, and experiment
      with technologies — sometimes more than scrolling social media or posting
      Instagram stories. Every day is an opportunity to{" "}
      <span className="text-cyan-400 font-semibold">
        grow, build, and challenge myself
      </span>
      .
    </>,
    <>
      I got my first internship as a{" "}
      <span className="text-blue-400 font-semibold">Frontend Developer</span>,
      which gave me a real platform to apply my skills and deliver results.
      Today, even as a{" "}
      <span className="text-white font-semibold">Full-Stack Developer</span>, my
      focus is on crafting{" "}
      <span className="text-green-400 font-semibold">
        intuitive front-end experiences
      </span>{" "}
      while building{" "}
      <span className="text-yellow-400 font-semibold">
        scalable, maintainable backends
      </span>
      .
    </>,
    <>
      I enjoy turning{" "}
      <span className="text-cyan-400 font-semibold">
        ideas into products that work
      </span>
      , and I’m always pushing myself to{" "}
      <span className="text-purple-400 font-semibold">
        learn, innovate, and leave an impact
      </span>
      .
    </>,
  ];

  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-black via-indigo-950 to-black text-white min-h-screen flex items-center">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center mb-6">
          About Me
        </h2>

        {paragraphs.map((para, idx) => (
          <motion.p
            key={idx}
            className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: idx * 0.3 }}
          >
            {para}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
