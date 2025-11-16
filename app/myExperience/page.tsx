"use client";
import { motion } from "framer-motion";
import { FaBriefcase, FaCode, FaRocket } from "react-icons/fa";
import { SiReact, SiTypescript, SiTailwindcss, SiGithub } from "react-icons/si";

const floatingIcons = [
  {
    id: 1,
    icon: <SiReact size={50} className="text-cyan-400" />,
    position: { top: "10%", left: "5%" },
    movement: { x: [-20, 20], y: [-15, 15] },
    duration: 18,
  },
  {
    id: 2,
    icon: <SiTypescript size={45} className="text-blue-400" />,
    position: { top: "15%", right: "8%" },
    movement: { x: [-18, 18], y: [-20, 20] },
    duration: 20,
  },
  {
    id: 3,
    icon: <SiTailwindcss size={40} className="text-sky-400" />,
    position: { bottom: "15%", left: "6%" },
    movement: { x: [-22, 22], y: [-18, 18] },
    duration: 19,
  },
  {
    id: 4,
    icon: <SiGithub size={45} className="text-gray-300" />,
    position: { bottom: "12%", right: "10%" },
    movement: { x: [-20, 20], y: [-20, 20] },
    duration: 21,
  },
];

const experiences = [
  {
    id: 1,
    company: "Dscission",
    role: "Frontend Developer",
    duration: "June 2025 – Present",
    type: "Full-Time",
    location: "Pune",
    workDuration: "5 Months",
    icon: <FaBriefcase className="text-cyan-400" />,
    techStack: [
      "TypeScript",
      "React.js",
      "React Native",
      "REST APIs",
      "Git/GitHub",
    ],
    achievements: [
      "Developed and maintained web and mobile applications for harvesting platform, including key modules like notifications, product management, and contract creation.",
      "Managed and optimized internal company frontend applications, delivering enhancements and features to improve performance.",
      "Built interactive demo portals for healthcare clients to showcase application workflows.",
    ],
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    company: "Digitally Drunk",
    role: "Frontend Development Intern",
    duration: "Oct 2023 – Jan 2024",
    type: "Internship",
    location: "Remote",
    workDuration: "3 Months",
    icon: <FaCode className="text-purple-400" />,
    techStack: ["React.js", "Tailwind CSS", "Material UI", "Git", "GitHub"],
    achievements: [
      "Developed a responsive and interactive user interface for a Bitcoin payment platform.",
      "Built reusable components, ensured cross-browser compatibility, and collaborated with the team using Git and GitHub.",
    ],
    color: "from-purple-500 to-pink-600",
  },
];

export default function ExperiencePage() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-20 md:pt-28 lg:pt-40 px-4 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Floating Icons - Hidden on mobile for cleaner look */}
      <div className="hidden md:block">
        {floatingIcons.map((item) => (
          <motion.div
            key={item.id}
            className="absolute cursor-pointer filter drop-shadow-lg opacity-50"
            initial={{ x: 0, y: 0, rotate: 0 }}
            animate={{
              x: item.movement.x,
              y: item.movement.y,
              rotate: [0, 10, -10, 0],
              opacity: [0.5, 0.7, 0.5],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.3, opacity: 1 }}
            style={item.position}
          >
            {item.icon}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaRocket className="text-cyan-400 text-4xl md:text-5xl" />
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4 px-4">
            My Professional Journey
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Building innovative solutions and growing as a developer
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Line */}
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 md:w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`relative mb-12 md:mb-16 pl-16 md:pl-0 ${
                index % 2 === 0
                  ? "md:mr-auto md:pr-12 lg:pr-16"
                  : "md:ml-auto md:pl-12 lg:pl-16"
              } md:w-1/2 w-full`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              {/* Experience Card */}
              <motion.div
                className="backdrop-blur-md bg-white/5 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
                }}
              >
                {/* Company and Role */}
                <div className="mb-4">
                  <motion.div
                    className={`inline-block px-3 md:px-4 py-1 rounded-full text-xs font-semibold mb-3 bg-gradient-to-r ${exp.color} text-white`}
                  >
                    {exp.type}
                  </motion.div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-lg md:text-xl text-gray-300 font-semibold mb-2">
                    {exp.company}
                  </p>
                  <div className="flex flex-wrap gap-2 md:gap-3 text-xs md:text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      📅 {exp.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      - {exp.location} - {exp.workDuration}
                    </span>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                  <p className="text-xs md:text-sm font-semibold text-cyan-400 mb-2">
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {exp.techStack.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-2 md:px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ delay: index * 0.2 + 0.5 + i * 0.05 }}
                        whileHover={{
                          scale: 1.1,
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <p className="text-xs md:text-sm font-semibold text-purple-400 mb-3">
                    Key Achievements:
                  </p>
                  <ul className="space-y-2 md:space-y-2.5">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        className="text-xs md:text-sm text-gray-300 flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{
                          delay: index * 0.2 + 0.6 + i * 0.1,
                        }}
                      >
                        <span className="text-cyan-400 mt-0.5 md:mt-1 flex-shrink-0">
                          ▸
                        </span>
                        <span className="leading-relaxed">{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          ))}

          {/* End of Timeline Badge */}
          <motion.div
            className="relative text-center pt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white text-sm md:text-base font-semibold shadow-lg">
              🚀 And the Journey Continues...
            </div>
          </motion.div>
        </div>

        {/* Decorative Gradient Blob */}
        <motion.div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full blur-3xl -z-10"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}
