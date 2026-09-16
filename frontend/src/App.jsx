import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const location = useLocation();
  const reduce = useReducedMotion();

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-paper text-ink">
      <div className="pointer-events-none fixed inset-0 bg-mesh opacity-80" aria-hidden="true" />
      <div className="noise-overlay fixed" aria-hidden="true" />

      <Navbar />
      <main className="relative z-10 flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
