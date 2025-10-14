import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import "../index.css"; // For rotating gradient

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      console.log("📨 Sending request:", form);
      const API_BASE_URL = import.meta.env.VITE_API_URL || "";
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      console.log("Raw response:", res);

      let data;
      try {
        data = await res.json();
        console.log(" Parsed JSON:", data);
      } catch (parseErr) {
        console.error(" Failed to parse JSON:", parseErr);
        throw new Error("Invalid server response");
      }

      if (res.ok) {
        setStatus({ success: true, message: data.message || "Message sent!" });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({
          success: false,
          message: data.error || `Error: ${res.status} ${res.statusText}`,
        });
      }
    } catch (err) {
      console.error("🚨 Network/Server error:", err);
      setStatus({
        success: false,
        message: err.message || "Network error, try again later",
      });
    } finally {
      setLoading(false);
    }
  };

  // Mouse parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const particles = Array.from({ length: 12 }).map((_, i) => ({
    size: Math.random() * 6 + 4,
    left: Math.random() * 100 + "%",
    top: Math.random() * 100 + "%",
    delay: Math.random() * 2,
    duration: Math.random() * 6 + 4,
    depthFactor: Math.random() * 20 + 10,
  }));

  return (
    <motion.section
      className="relative max-w-3xl mx-auto px-6 py-20 overflow-hidden"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 rotate-gradient -z-30 rounded-2xl opacity-30 blur-3xl"></div>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-20 animate-pulse -z-20 blur-3xl"></div>

      {/* Floating particles */}
      {particles.map((p, index) => {
        const x = useTransform(mouseX, [0, window.innerWidth], [-p.depthFactor, p.depthFactor]);
        const y = useTransform(mouseY, [0, window.innerHeight], [-p.depthFactor, p.depthFactor]);
        return (
          <motion.div
            key={index}
            className="absolute bg-white rounded-full opacity-20"
            style={{
              width: p.size,
              height: p.size,
              left: p.left,
              top: p.top,
              x,
              y,
            }}
            animate={{
              y: ["0%", "20%", "0%"],
              x: ["0%", "15%", "0%"],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              repeatType: "mirror",
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        );
      })}

      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center relative z-10">
        Contact Me
      </h2>

      <motion.form
        onSubmit={handleSubmit}
        className="relative space-y-6 bg-gray-900 shadow-xl p-8 rounded-2xl border border-gray-700 z-10"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {[
          { label: "Name", type: "text", name: "name" },
          { label: "Email", type: "email", name: "email" },
        ].map((field) => (
          <motion.div
            key={field.name}
            className="relative"
            whileHover={{ scale: 1.02, boxShadow: "0 8px 20px rgba(59,130,246,0.4)" }}
            whileFocusWithin={{ scale: 1.02, boxShadow: "0 8px 20px rgba(59,130,246,0.5)" }}
          >
            <input
              type={field.type}
              name={field.name}
              value={form[field.name]}
              onChange={handleChange}
              placeholder=" "
              required
              className="peer w-full p-4 pt-6 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 placeholder-transparent transition-shadow"
            />
            <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-blue-400 peer-focus:text-sm">
              {field.label}
            </label>
          </motion.div>
        ))}

        <motion.div
          whileHover={{ scale: 1.01, boxShadow: "0 8px 20px rgba(59,130,246,0.4)" }}
          whileFocusWithin={{ scale: 1.01, boxShadow: "0 8px 20px rgba(59,130,246,0.5)" }}
          className="relative"
        >
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            required
            placeholder=" "
            className="peer w-full p-4 pt-6 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-4 focus:ring-blue-500 placeholder-transparent transition-shadow"
          />
          <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-blue-400 peer-focus:text-sm">
            Message
          </label>
        </motion.div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-lg font-medium text-white transition ${
            loading ? "bg-gray-600 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className={`mt-3 text-center ${status.success ? "text-green-400" : "text-red-400"}`}>
            {status.message}
          </p>
        )}
      </motion.form>
    </motion.section>
  );
}
