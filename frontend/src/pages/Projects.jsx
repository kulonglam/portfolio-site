import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Polling App", desc: "A full-stack polling app with authentication and real-time results.", link: "#" },
  { title: "PathFinder App", desc: "A refugee-support app with multilingual support and maps.", link: "#" },
  { title: "Civic Education Platform", desc: "Platform for civic awareness, elections, and youth engagement.", link: "#" }
];

export default function Projects() {
  return (
    <motion.section
      className="max-w-6xl mx-auto px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white-800 mb-10 text-center">
        Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white border rounded-lg shadow p-6 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4">{project.desc}</p>
            <a href={project.link} className="text-blue-600 hover:underline">
              View Project →
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
