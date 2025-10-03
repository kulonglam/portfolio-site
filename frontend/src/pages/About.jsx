import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      className="max-w-4xl mx-auto px-6 py-20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-white-800 mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-lg text-white-600 leading-relaxed text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        I'm a passionate<span className="font-semibold text-blue-600"> Software Engineer</span> with expertise in building scalable web applications
        and efficient backend systems.
        I specialize in building full-stack web applications using modern technologies.
        I enjoy creating efficient, scalable, and user-friendly solutions, and I am constantly learning and exploring new technologies to improve my skills.
      </motion.p>

      <div className="mt-8 grid md:grid-cols-2 gap-8">
        {[
          { title: "Education", text: "Bachelor of Science in Software Engineering (CGPA 3.83) from Bugema University."},
          {title: "Certification", text: "CISCO Networking Academy, ICDL"},
          { title: "Experience", text: "2+ years in data management, IT support, and full-stack development." }
        ].map((card, index) => (
          <motion.div
            key={index}
            className="bg-blue-50 p-6 rounded-lg shadow"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{card.title}</h3>
            <p className="text-gray-700">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
