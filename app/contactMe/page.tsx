"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaDocker,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const floatingLogos = [
  {
    id: 1,
    icon: <FaReact size={60} className="text-cyan-400" />,
    position: { top: "8%", left: "5%" },
    movement: { x: [-25, 25], y: [-20, 20] },
    duration: 20,
  },
  {
    id: 2,
    icon: <SiNextdotjs size={50} className="text-white" />,
    position: { top: "12%", right: "8%" },
    movement: { x: [-20, 20], y: [-25, 25] },
    duration: 22,
  },
  {
    id: 3,
    icon: <SiTailwindcss size={45} className="text-sky-400" />,
    position: { top: "45%", left: "3%" },
    movement: { x: [-18, 18], y: [-30, 30] },
    duration: 19,
  },
  {
    id: 4,
    icon: <FaNodeJs size={65} className="text-green-500" />,
    position: { bottom: "15%", left: "8%" },
    movement: { x: [-28, 28], y: [-22, 22] },
    duration: 21,
  },
  {
    id: 5,
    icon: <SiMongodb size={55} className="text-green-700" />,
    position: { bottom: "12%", right: "10%" },
    movement: { x: [-30, 30], y: [-25, 25] },
    duration: 23,
  },
  {
    id: 6,
    icon: <SiExpress size={60} className="text-gray-300" />,
    position: { top: "30%", right: "5%" },
    movement: { x: [-25, 25], y: [-20, 20] },
    duration: 18,
  },
  {
    id: 7,
    icon: <FaDatabase size={70} className="text-orange-400" />,
    position: { bottom: "8%", left: "25%" },
    movement: { x: [-32, 32], y: [-27, 27] },
    duration: 24,
  },
  {
    id: 8,
    icon: <SiTypescript size={65} className="text-blue-400" />,
    position: { top: "60%", right: "8%" },
    movement: { x: [-28, 28], y: [-23, 23] },
    duration: 20,
  },
  {
    id: 9,
    icon: <FaDocker size={55} className="text-blue-500" />,
    position: { top: "15%", left: "30%" },
    movement: { x: [-22, 22], y: [-28, 28] },
    duration: 21,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      // alert("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-28 md:pt-32 px-4 pb-20 bg-gradient-to-b from-black via-indigo-950 to-black">
      {floatingLogos.map((logo) => (
        <motion.div
          key={logo.id}
          className="absolute cursor-pointer filter drop-shadow-lg opacity-60"
          initial={{ x: 0, y: 0, rotate: 0, scale: 1 }}
          animate={{
            x: logo.movement.x,
            y: logo.movement.y,
            rotate: [0, 10, -10, 0],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: logo.duration,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.3,
            opacity: 1,
            transition: { scale: { duration: 0.3 } },
          }}
          style={{
            ...logo.position,
            filter: "drop-shadow(0 0 15px rgba(255, 255, 255, 0.1))",
          }}
        >
          {logo.icon}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-300">
            Let&apos;s collaborate and build something amazing together
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center gap-6 mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/abhijit-sahane-034277229/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full shadow-lg"
            whileHover={{
              scale: 1.15,
              boxShadow: "0 0 30px rgba(37, 99, 235, 0.6)",
              rotate: [0, -10, 10, -10, 0],
            }}
            transition={{ rotate: { duration: 0.5 } }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLinkedin size={32} className="text-white" />
          </motion.a>

          <motion.a
            href="https://github.com/AbhiSahane0"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full shadow-lg"
            whileHover={{
              scale: 1.15,
              boxShadow: "0 0 30px rgba(107, 114, 128, 0.6)",
              rotate: [0, -10, 10, -10, 0],
            }}
            transition={{ rotate: { duration: 0.5 } }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub size={32} className="text-white" />
          </motion.a>

          <motion.a
            href="mailto:cloudabhi123@gmail.com"
            className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full shadow-lg"
            whileHover={{
              scale: 1.15,
              boxShadow: "0 0 30px rgba(6, 182, 212, 0.6)",
              rotate: [0, -10, 10, -10, 0],
            }}
            transition={{ rotate: { duration: 0.5 } }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope size={32} className="text-white" />
          </motion.a>
        </motion.div>

        <motion.div
          className="backdrop-blur-md bg-white/5 rounded-2xl p-8 shadow-2xl border border-white/10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <label
                htmlFor="name"
                className="block text-gray-300 font-semibold mb-2 text-sm"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                placeholder="Your good name !"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <label
                htmlFor="email"
                className="block text-gray-300 font-semibold mb-2 text-sm"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300"
                placeholder="yourEmail@gmail.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <label
                htmlFor="message"
                className="block text-gray-300 font-semibold mb-2 text-sm"
              >
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-none"
                placeholder="Tell me if you have any suggestion or enything else !"
              />
            </motion.div>

            <motion.button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={
                !isSubmitting
                  ? {
                      scale: 1.02,
                      boxShadow: "0 0 40px rgba(6, 182, 212, 0.6)",
                    }
                  : {}
              }
              whileTap={!isSubmitting ? { scale: 0.98 } : {}}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    ⏳
                  </motion.span>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl -z-10"
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
