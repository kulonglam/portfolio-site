import React from "react";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const toggle = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", toggle);
    return () => window.removeEventListener("scroll", toggle);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  return visible ? (
    <button onClick={scrollTop} className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-600 p-3 rounded-full shadow-lg">
      <ArrowUp size={24} />
    </button>
  ) : null;
}
