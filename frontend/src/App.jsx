import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import axios from "axios";


export default function App() {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    axios
      .get("/api/contact")
      .then((res) => setMessage(res.data.message))
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  return (
    <div className="bg-gray-950 text-gray-100 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />
    
      {/* Page Content */}
      <main className="flex-grow">
        <Outlet />

        {/* Backend Message Section (Dismissible) */}
        {visible && (
          <div className="relative max-w-3xl mx-auto mt-10 p-6 bg-gray-900 rounded-2xl shadow-lg border border-gray-800 text-center">
            <button
              onClick={() => setVisible(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-red-400 transition"
            >
              ✕
            </button>
            <h1 className="text-3xl font-bold text-blue-400">
              Kulong Lam Portfolio
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Message from backend:{" "}
              <span className="font-semibold text-green-400">{message}</span>
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to top */}
      <ScrollToTop />
    </div>
  );
}
