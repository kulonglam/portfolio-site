import React from "react";
import { motion } from "framer-motion";

const skills = [
  "React.js", "Node.js", "Express.js", "Django",
  "MongoDB", "PostgreSQL", "Tailwind CSS", "REST APIs",
  "Data Analysis", "Git/GitHub", "Docker", "Linux", "UI/UX", "EJS", "Networking"
];

export default function Skills() {
  return (
    <motion.section
      className="max-w-5xl mx-auto px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white-800 mb-10 text-center">
        Skills
      </h2>
      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-white border rounded-lg shadow p-4 text-center font-medium text-gray-700 hover:shadow-lg hover:scale-105 transition"
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
