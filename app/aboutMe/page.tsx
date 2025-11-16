"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaLaptopCode,
  FaRocket,
  FaLightbulb,
  FaHeart,
  FaCode,
  FaServer,
} from "react-icons/fa";
import { SiReact, SiNodedotjs, SiMongodb, SiTypescript } from "react-icons/si";

const floatingTechIcons = [
  {
    id: 1,
    icon: <SiReact size={60} className="text-cyan-400" />,
    position: { top: "8%", left: "5%" },
    movement: { x: [-25, 25], y: [-20, 20] },
    duration: 20,
    showOnMobile: false,
  },
  {
    id: 2,
    icon: <SiNodedotjs size={55} className="text-green-500" />,
    position: { top: "12%", right: "8%" },
    movement: { x: [-20, 20], y: [-25, 25] },
    duration: 22,
    showOnMobile: false,
  },
  {
    id: 3,
    icon: <SiMongodb size={50} className="text-green-600" />,
    position: { bottom: "15%", left: "7%" },
    movement: { x: [-22, 22], y: [-18, 18] },
    duration: 19,
    showOnMobile: false,
  },
  {
    id: 4,
    icon: <SiTypescript size={55} className="text-blue-400" />,
    position: { bottom: "10%", right: "10%" },
    movement: { x: [-20, 20], y: [-22, 22] },
    duration: 21,
    showOnMobile: false,
  },
  {
    id: 5,
    icon: <FaCode size={45} className="text-purple-400" />,
    position: { top: "40%", left: "3%" },
    movement: { x: [-18, 18], y: [-20, 20] },
    duration: 23,
    showOnMobile: false,
  },
  {
    id: 6,
    icon: <FaServer size={45} className="text-orange-400" />,
    position: { top: "45%", right: "5%" },
    movement: { x: [-20, 20], y: [-18, 18] },
    duration: 24,
    showOnMobile: false,
  },
];

const milestones = [
  {
    icon: <FaLaptopCode className="text-cyan-400" />,
    title: "Started at 18",
    description: "Began coding journey during B.Tech",
  },
  {
    icon: <FaCode className="text-purple-400" />,
    title: "First Internship",
    description: "Frontend Developer role - real-world experience",
  },
  {
    icon: <FaRocket className="text-blue-400" />,
    title: "Full-Stack Now",
    description: "Building end-to-end scalable solutions",
  },
];

export default function AboutMe() {
  const paragraphs = [
    {
      text: (
        <>
          I&apos;ve always been curious about{" "}
          <span className="text-cyan-400 font-semibold">technology</span> and
          its ever-evolving nature. I started my coding journey at{" "}
          <span className="text-white font-semibold">18</span> — a bit late.
          During my B.Tech, I learned the fundamentals of web development — even
          things as simple as{" "}
          <span className="text-yellow-400 font-semibold">centering a div</span>{" "}
          — to gradually built more complex projects.
        </>
      ),
      icon: <FaLightbulb className="text-yellow-400" />,
    },
    {
      text: (
        <>
          <span className="text-purple-400 font-semibold">Learning</span> is my
          lifestyle. I like to dive into documentation, explore new tools, and
          experiment with technologies — sometimes more than scrolling social
          media or posting Instagram stories. For me every day is an opportunity
          to{" "}
          <span className="text-cyan-400 font-semibold">
            grow, build, and challenge myself
          </span>
          .
        </>
      ),
      icon: <FaRocket className="text-cyan-400" />,
    },
    {
      text: (
        <>
          I got my first internship as a{" "}
          <span className="text-blue-400 font-semibold">
            Frontend Developer
          </span>
          , which gave me a real platform to apply my skills and deliver
          results. Today, even as a{" "}
          <span className="text-white font-semibold">Full-Stack Developer</span>
          , my focus is on crafting <span>intuitive front-end experiences</span>{" "}
          while building{" "}
          <span className="text-yellow-400 font-semibold">
            scalable, maintainable backends.
          </span>{" "}
          <span>
            Currently I&apos;m working as a Front-end Developer at Dscission and{" "}
            <span className="text-green-400 font-semibold">
              looking for a Full Stack Developer role (MERN) where I can learn
              more and contribute
            </span>{" "}
          </span>
          .
        </>
      ),
      icon: <FaLaptopCode className="text-blue-400" />,
    },
    {
      text: (
        <>
          I enjoy turning{" "}
          <span className="text-cyan-400 font-semibold">
            ideas into products that work
          </span>
          , and I&apos;m always pushing myself to{" "}
          <span className="text-purple-400 font-semibold">
            learn, innovate, and leave an impact
          </span>
          .
        </>
      ),
      icon: <FaHeart className="text-pink-400" />,
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden pt-20 md:pt-28 lg:pt-40 px-4 pb-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Floating Tech Icons */}
      {floatingTechIcons.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute cursor-pointer filter drop-shadow-lg ${
            item.showOnMobile ? "" : "hidden md:block"
          }`}
          initial={{ x: 0, y: 0, rotate: 0, opacity: 0.4 }}
          animate={{
            x: item.movement.x,
            y: item.movement.y,
            rotate: [0, 10, -10, 0],
            opacity: [0.4, 0.7, 0.4],
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

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
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
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaLaptopCode className="text-cyan-400 text-5xl md:text-6xl" />
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            About Me
          </h1>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Story Cards */}
        <div className="space-y-6 md:space-y-8 mb-16">
          {paragraphs.map((para, idx) => (
            <motion.div
              key={idx}
              className="backdrop-blur-md bg-white/5 rounded-2xl p-6 md:p-8 shadow-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)",
              }}
            >
              <div className="flex items-start gap-4">
                <motion.div
                  className="text-4xl md:text-5xl flex-shrink-0"
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.3,
                  }}
                >
                  {para.icon}
                </motion.div>
                <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
                  {para.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Milestones Timeline */}
        <motion.div
          className="mt-16 md:mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 md:mb-12">
            My Journey in a Nutshell
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                className="backdrop-blur-md bg-gradient-to-br from-white/10 to-white/5 rounded-xl p-6 text-center border border-white/10 hover:border-white/30 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + idx * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                }}
              >
                <motion.div
                  className="text-5xl mb-4 inline-block"
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.5,
                  }}
                >
                  {milestone.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {milestone.title}
                </h3>
                <p className="text-gray-400 text-sm">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12 md:mt-16"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <Link href="/contactMe">
            <motion.div
              className="inline-block px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full text-white text-base md:text-lg font-semibold shadow-lg cursor-pointer"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 40px rgba(6, 182, 212, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 20px rgba(6, 182, 212, 0.3)",
                  "0 0 40px rgba(139, 92, 246, 0.4)",
                  "0 0 20px rgba(6, 182, 212, 0.3)",
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              💡 Let&apos;s Build Something Amazing Together
            </motion.div>
          </Link>
        </motion.div>

        {/* Decorative Gradient Blobs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl -z-10"
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
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </div>
    </section>
  );
}
