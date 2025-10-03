import { FaGithub, FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-gray-900 text-gray-400 py-6 mt-10"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }} // animates only the first time it's in view
    >
    
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Copyright */}
        <p className="text-sm mb-4">
          © {new Date().getFullYear()} Kulong Lam Wuol. All rights reserved.
        </p>

        {/* Social Icons with Custom Tooltips */}
        <div className="flex justify-center space-x-6 text-2xl">
          {/* WhatsApp */}
          <div className="relative group">
            <a
              href="https://whatsapp.com/+256777285894"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-500 transition transform hover:scale-125 duration-300"
            >
              <FaWhatsapp />
            </a>
            <span className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              WhatsApp
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
            </span>
          </div>

          {/* Facebook */}
          <div className="relative group">
            <a
              href="https://www.facebook.com/kulong.lam/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition transform hover:scale-125 duration-300"
            >
              <FaFacebook />
            </a>
            <span className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              Facebook
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
            </span>
          </div>

          {/* Twitter */}
          <div className="relative group">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-400 transition transform hover:scale-125 duration-300"
            >
              <FaTwitter />
            </a>
            <span className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              Twitter
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
            </span>
          </div>

          {/* GitHub */}
          <div className="relative group">
            <a
              href="https://github.com/kulonglam"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-200 transition transform hover:scale-125 duration-300"
            >
              <FaGithub />
            </a>
            <span className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              GitHub
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
            </span>
          </div>

          {/* LinkedIn */}
          <div className="relative group">
            <a
              href="https://linkedin.com/in/kulong-lam-wuol-07ab04168"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition transform hover:scale-125 duration-300"
            >
              <FaLinkedin />
            </a>
            <span className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs rounded-md px-2 py-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              LinkedIn
              <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"></span>
            </span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
