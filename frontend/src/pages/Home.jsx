import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { profile } from "../data/content";

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Full-bleed visual plane */}
      <div className="absolute inset-0 bg-gradient-to-br from-paper via-paper-warm to-[#d9e6e7]" />
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 -top-20 h-[42rem] w-[42rem] rounded-full bg-signal/25 blur-3xl animate-soft-pulse"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 h-[36rem] w-[36rem] rounded-full bg-[#1a4a4e]/12 blur-3xl animate-float"
        aria-hidden="true"
      />
      <div className="noise-overlay" aria-hidden="true" />

      <motion.p
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-8 right-0 select-none font-display text-[22vw] font-extrabold leading-none text-ink/[0.035] md:text-[18vw]"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        KL
      </motion.p>

      <div className="page-shell relative z-10 flex min-h-[72vh] flex-col justify-center !pt-36">
        <p className="section-kicker animate-fade-up">{profile.title}</p>
        <h1 className="animate-fade-up-delay max-w-5xl font-display text-5xl font-extrabold leading-[0.92] tracking-tight text-ink sm:text-6xl md:text-7xl xl:text-8xl">
          {profile.name}
        </h1>
        <p className="animate-fade-up-delay-2 mt-7 max-w-xl text-lg leading-relaxed text-ink-muted md:text-xl">
          Building scalable web applications and reliable backends — with clarity,
          care, and production-minded craft.
        </p>
        <div className="animate-fade-up-delay-3 mt-10 flex flex-wrap items-center gap-4">
          <Link to="/projects" className="btn-primary">
            View projects
            <ArrowUpRight size={16} />
          </Link>
          <a href={profile.resume} className="btn-secondary" download>
            Download CV
          </a>
        </div>
        <p className="animate-fade-up-delay-3 mt-8 text-sm font-medium text-ink-muted">
          {profile.location}
        </p>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-muted md:flex"
        animate={reduce ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
          Scroll
        </span>
        <ArrowDown size={16} />
      </motion.div>
    </section>
  );
}
