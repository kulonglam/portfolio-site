import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-screen bg-gradient-to-r from-blue-50 to-white px-6">
      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4">
        Hi, I'm <span className="text-blue-600">Kulong Lam</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
        I'm a Software Engineer building modern web applications and scalable solutions.
      </p>
      <div className="space-x-4">
        <Link
          to="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          View Projects
        </Link>
        <Link
          to="/contact"
          className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300 transition"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
}
