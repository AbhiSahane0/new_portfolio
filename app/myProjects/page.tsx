"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGithub,
  FaExternalLinkAlt,
  FaCode,
  FaDocker,
} from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiJavascript } from "react-icons/si";
import { MdCloud } from "react-icons/md";

const floatingIcons = [
  {
    id: 1,
    icon: <FaReact size={50} className="text-cyan-400" />,
    position: { top: "8%", left: "5%" },
    movement: { x: [-20, 20], y: [-15, 15] },
    duration: 18,
  },
  {
    id: 2,
    icon: <SiNextdotjs size={45} className="text-white" />,
    position: { top: "12%", right: "6%" },
    movement: { x: [-18, 18], y: [-20, 20] },
    duration: 20,
  },
  {
    id: 5,
    icon: <SiJavascript size={45} className="text-white" />,
    position: { top: "2%", right: "6%" },
    movement: { x: [-5, 25], y: [-5, 5] },
    duration: 20,
  },
  {
    id: 3,
    icon: <FaNodeJs size={55} className="text-green-500" />,
    position: { top: "25%", left: "6%" },
    movement: { x: [-22, 22], y: [-18, 18] },
    duration: 19,
  },
  {
    id: 4,
    icon: <SiMongodb size={50} className="text-green-600" />,
    position: { top: "15%", left: "15%" },
    movement: { x: [-20, 20], y: [-20, 20] },
    duration: 21,
  },
  {
    id: 6,
    icon: <FaDocker size={50} className="text-green-600" />,
    position: { top: "20%", right: "15%" },
    movement: { x: [-20, 20], y: [-20, 20] },
    duration: 21,
  },
];

const projects = [
  {
    id: 1,
    title: "The Wild Oasis",
    year: "2025",
    description:
      "A full-stack hotel management application with real-time data synchronization, enabling seamless CRUD operations for bookings, cabins, and guests.",
    features: [
      "Implemented efficient client-side and server-state management using React Query, optimizing performance and reducing redundant API calls by 30%",
      "Built dynamic, reusable, and responsive UI components with React Hook Form and Tailwind CSS",
      "Real-time data synchronization with Supabase backend",
    ],
    techStack: [
      "React.js",
      "Supabase",
      "React Query",
      "React Hook Form",
      "Context API",
      "Tailwind CSS",
    ],
    category: "Full-Stack",
    gradient: "from-emerald-500 to-teal-600",
    icon: <MdCloud className="text-emerald-400" />,
    github: "#",
    live: "#",
  },
  {
    id: 2,
    title: "P2P Data-Sharing Platform",
    year: "2025",
    description:
      "A decentralized application enabling secure, real-time, and offline data sharing using peer-to-peer technology and IPFS.",
    features: [
      "Built decentralized file sharing with OTP-based user registration",
      "Implemented message queuing for reliable file retrieval",
      "Session management using localStorage for seamless user experience",
    ],
    techStack: [
      "React.js",
      "Redux",
      "Peer.js",
      "MongoDB",
      "Express.js",
      "IPFS",
    ],
    category: "Full-Stack",
    gradient: "from-purple-500 to-pink-600",
    icon: <FaDatabase className="text-purple-400" />,
    github: "#",
    live: "#",
  },
  {
    id: 3,
    title: "MovieVerse Website",
    year: "2024",
    description:
      "A comprehensive movie discovery platform with advanced search, rating system, and personalized watchlist features.",
    features: [
      "Integrated external movie API for real-time data fetching",
      "Implemented React hooks for dynamic interface updates",
      "Built user-friendly search and filtering system",
    ],
    techStack: ["JavaScript", "React.js", "HTML", "CSS", "REST APIs"],
    category: "Frontend",
    gradient: "from-blue-500 to-cyan-600",
    icon: <FaReact className="text-blue-400" />,
    github: "#",
    live: "#",
  },
  {
    id: 4,
    title: "SkyCast Weather App",
    year: "2024",
    description:
      "A sleek weather application delivering real-time forecasts with location-based search and GPS integration.",
    features: [
      "Location-based weather forecasting via city search and GPS",
      "Responsive interface built with Tailwind CSS",
      "Displays temperature, humidity, and wind speed metrics",
    ],
    techStack: ["JavaScript", "Tailwind CSS", "Weather API"],
    category: "Frontend",
    gradient: "from-sky-500 to-blue-600",
    icon: <MdCloud className="text-sky-400" />,
    github: "#",
    live: "#",
  },
];

const categories = ["All", "Full-Stack", "Frontend"];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="relative min-h-screen overflow-hidden pt-20 md:pt-28  px-4 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Floating Icons */}
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

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              rotate: [0, 10, -10, 10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaCode className="text-cyan-400 text-4xl md:text-5xl" />
          </motion.div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 md:mb-4">
            My Projects
          </h1>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4">
            Turning ideas into real-world applications
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex justify-center gap-3 md:gap-4 mb-12 md:mb-16 flex-wrap px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full font-semibold text-sm md:text-base transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg"
                  : "bg-white/5 text-gray-300 border border-white/10 hover:border-white/30"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <motion.div
                className="backdrop-blur-md bg-white/5 rounded-2xl p-6 md:p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)",
                }}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} text-3xl`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      {project.icon}
                    </motion.div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-400">{project.year}</p>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white`}
                  >
                    {project.category}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4 flex-grow">
                  <p className="text-xs md:text-sm font-semibold text-cyan-400 mb-2">
                    Key Features:
                  </p>
                  <ul className="space-y-1.5">
                    {project.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="text-xs md:text-sm text-gray-400 flex items-start gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                      >
                        <span className="text-cyan-400 mt-0.5 flex-shrink-0">
                          •
                        </span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <p className="text-xs md:text-sm font-semibold text-purple-400 mb-2">
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {project.techStack.map((tech, i) => (
                      <motion.span
                        key={i}
                        className="px-2 md:px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.3 + i * 0.03 }}
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

                {/* Links */}
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${project.gradient} text-white rounded-lg font-semibold text-sm`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub size={18} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-white/20 text-white rounded-lg font-semibold text-sm hover:bg-white/10"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt size={16} />
                    Live
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-xl text-gray-400">
              No projects found in this category
            </p>
          </motion.div>
        )}
      </div>

      {/* Decorative Gradient Blobs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl -z-10"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
}
