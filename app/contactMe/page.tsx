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

import { sendFeedback } from "@/app/services/apis/sendFeedback";

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
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setErrorMsg("");
    setSuccessMsg("");

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill all fields before submitting.");
      return;
    }

    setIsSubmitting(true);

    const { success, error } = await sendFeedback(formData);

    setIsSubmitting(false);

    if (!success) {
      setErrorMsg(error || "Something went wrong. Try again.");
      return;
    }

    setSuccessMsg(
      "Thanks for your message, it means a lot to me. I will get back to you soon."
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-28 md:pt-32 px-4 pb-20 bg-gradient-to-b from-black via-indigo-950 to-black">
      {floatingLogos.map((logo) => (
        <motion.div
          key={logo.id}
          className="absolute opacity-60"
          animate={{ x: logo.movement.x, y: logo.movement.y }}
          transition={{
            duration: logo.duration,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={logo.position}
        >
          {logo.icon}
        </motion.div>
      ))}

      <div className="relative z-10 max-w-2xl mx-auto">
        <motion.div className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-lg text-gray-300">
            Let&apos;s collaborate and build something amazing
          </p>
        </motion.div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://www.linkedin.com/in/abhijit-sahane-034277229/"
            className="p-4 bg-blue-700 rounded-full"
          >
            <FaLinkedin size={32} className="text-white" />
          </a>
          <a
            href="https://github.com/AbhiSahane0"
            className="p-4 bg-gray-900 rounded-full"
          >
            <FaGithub size={32} className="text-white" />
          </a>
          <a
            href="mailto:cloudabhi123@gmail.com"
            className="p-4 bg-cyan-600 rounded-full"
          >
            <FaEnvelope size={32} className="text-white" />
          </a>
        </div>

        {/* Contact Form */}
        <div className="backdrop-blur-md bg-white/5 rounded-2xl p-8 shadow-2xl border border-white/10">
          {errorMsg && (
            <p className="text-red-400 text-center mb-2">{errorMsg}</p>
          )}
          {successMsg && (
            <p className="text-green-400 text-center mb-2">{successMsg}</p>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-gray-300">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"
                placeholder="Your good name"
              />
            </div>

            <div>
              <label className="text-gray-300">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"
                placeholder="yourEmail@gmail.com"
              />
            </div>

            <div>
              <label className="text-gray-300">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"
                placeholder="Tell me something..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
