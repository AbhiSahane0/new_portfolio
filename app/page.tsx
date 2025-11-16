"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaGit,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiExpress,
  SiMongodb,
  SiReactquery,
} from "react-icons/si";

const logos = [
  {
    id: 1,
    icon: <FaReact size={80} className="text-cyan-400" />,
    position: { top: "10%", left: "8%" },
    movement: { x: [-30, 30], y: [-20, 20] },
    duration: 18,
    showOnMobile: true,
  },
  {
    id: 2,
    icon: <SiNextdotjs size={60} className="text-white" />,
    position: { top: "15%", right: "12%" },
    movement: { x: [-25, 25], y: [-30, 30] },
    duration: 22,
    showOnMobile: true,
  },
  {
    id: 3,
    icon: <SiTailwindcss size={40} className="text-sky-400" />,
    position: { top: "50%", left: "5%" },
    movement: { x: [-20, 20], y: [-35, 35] },
    duration: 20,
    showOnMobile: true,
  },
  {
    id: 4,
    icon: <FaDocker size={60} className="text-blue-500" />,
    position: { top: "8%", right: "50%" },
    movement: { x: [-35, 35], y: [-25, 25] },
    duration: 25,
    showOnMobile: true,
  },
  {
    id: 5,
    icon: <FaNodeJs size={80} className="text-green-500" />,
    position: { bottom: "20%", left: "10%" },
    movement: { x: [-28, 28], y: [-22, 22] },
    duration: 19,
    showOnMobile: true,
  },
  {
    id: 6,
    icon: <SiMongodb size={60} className="text-green-700" />,
    position: { bottom: "15%", right: "15%" },
    movement: { x: [-32, 32], y: [-28, 28] },
    duration: 23,
    showOnMobile: false,
  },
  {
    id: 7,
    icon: <FaJava size={70} className="text-red-500" />,
    position: { top: "35%", left: "15%" },
    movement: { x: [-20, 10], y: [-30, 30] },
    duration: 21,
    showOnMobile: true,
  },
  {
    id: 8,
    icon: <SiExpress size={70} className="text-gray-300" />,
    position: { top: "35%", right: "10%" },
    movement: { x: [-30, 30], y: [-20, 20] },
    duration: 17,
    showOnMobile: true,
  },
  {
    id: 9,
    icon: <SiRedux size={70} className="text-purple-600" />,
    position: { bottom: "10%", left: "65%" },
    movement: { x: [-25, 25], y: [-32, 32] },
    duration: 24,
    showOnMobile: true,
  },
  {
    id: 10,
    icon: <SiReactquery size={60} className="text-teal-400" />,
    position: { top: "60%", right: "10%" },
    movement: { x: [-28, 28], y: [-25, 25] },
    duration: 20,
    showOnMobile: true,
  },
  {
    id: 11,
    icon: <FaDatabase size={80} className="text-orange-400" />,
    position: { bottom: "8%", left: "25%" },
    movement: { x: [-33, 33], y: [-27, 27] },
    duration: 22,
    showOnMobile: false,
  },
  {
    id: 12,
    icon: <FaGit size={50} className="text-cyan-300" />,
    position: { top: "10%", left: "25%" },
    movement: { x: [-25, 25], y: [-20, 20] },
    duration: 19,
    showOnMobile: false,
  },
  {
    id: 13,
    icon: <SiTypescript size={80} className="text-blue-400" />,
    position: { bottom: "0%", left: "45%" },
    movement: { x: [-30, 30], y: [-25, 25] },
    duration: 21,
    showOnMobile: true,
  },
  {
    id: 14,
    icon: <FaGithub size={80} className="text-blue-400" />,
    position: { top: "10%", right: "30%" },
    movement: { x: [-30, 30], y: [-25, 25] },
    duration: 21,
    showOnMobile: false,
  },
];

export default function Page() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28 md:pt-32 lg:pt-40 px-4">
      {/* Floating tech logos */}
      {logos.map((logo) => (
        <motion.div
          key={logo.id}
          className={`absolute cursor-pointer filter drop-shadow-lg ${
            logo.showOnMobile ? "" : "hidden md:block"
          }`}
          initial={{ x: 0, y: 0, rotate: 0, scale: 1, opacity: 0.7 }}
          animate={{
            x: logo.movement.x,
            y: logo.movement.y,
            rotate: [0, 15, -15, 0],
            opacity: [0.7, 0.9, 0.7],
          }}
          transition={{
            duration: logo.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.4,
            rotate: [0, -10, 10, -10, 10, 0],
            opacity: 1,
            transition: {
              scale: { duration: 0.3 },
              rotate: {
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              },
            },
          }}
          style={{
            ...logo.position,
            filter: "drop-shadow(0 0 20px rgba(255, 255, 255, 0.1))",
          }}
        >
          <motion.div
            whileHover={{
              filter: ["brightness(1)", "brightness(1.5)", "brightness(1)"],
            }}
            transition={{
              duration: 0.6,
              repeat: Infinity,
            }}
          >
            {logo.icon}
          </motion.div>
        </motion.div>
      ))}

      {/* Hero content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I&apos;m Abhijit{" "}
          <motion.span
            className="inline-block"
            animate={{
              rotate: [0, 14, -8, 14, -4, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut",
            }}
          >
            👋
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          A{" "}
          <span className="text-white font-semibold">Full-Stack Developer</span>{" "}
          focused on delivering
          <span className="text-cyan-400 font-semibold">
            {" "}
            intuitive and performant user experiences
          </span>{" "}
          while building{" "}
          <span className="text-blue-400 font-semibold">
            scalable and maintainable backend systems
          </span>{" "}
          which are capable of handling large-scale data and requests. Turn
          ideas into robust, real-world products that delight users and meet
          business goals.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href={"/myProjects"}>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-full shadow-lg cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
          </Link>
          <Link href={"/contactMe"}>
            <motion.button
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-full backdrop-blur-sm cursor-pointer"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </Link>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
}
