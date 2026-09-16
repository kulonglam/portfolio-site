import { ArrowUpRight } from "lucide-react";
import FadeIn from "../components/FadeIn";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section className="page-shell">
      <FadeIn>
        <p className="section-kicker">Projects</p>
        <h1 className="section-title">Selected work</h1>
        <p className="section-lead">
          Featured systems from the CV — with live demos and source where
          available.
        </p>
      </FadeIn>

      <div className="mt-16 space-y-8">
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={index * 0.08}>
            <article className="group overflow-hidden rounded-2xl border border-line bg-paper-elev/70 shadow-sm transition duration-500 hover:-translate-y-1 hover:border-signal/25 hover:shadow-soft">
              <div
                className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.accent} md:h-56`}
              >
                <div className="absolute inset-0 bg-grid opacity-25" />
                <div className="absolute -right-8 top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl transition duration-700 group-hover:scale-125" />
                <div className="absolute inset-0 flex flex-col justify-between p-6 text-white md:p-8">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
                    <span className="ml-3 rounded bg-white/10 px-2 py-0.5 font-mono text-[10px] tracking-wide text-white/70">
                      {String(index + 1).padStart(2, "0")} · preview
                    </span>
                  </div>
                  <div>
                    <p className="font-display text-2xl font-bold md:text-3xl">
                      {project.preview}
                    </p>
                    <p className="mt-2 text-sm text-white/65">
                      {project.stack.join(" · ")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-end md:p-8">
                <div>
                  <h2 className="font-display text-2xl font-bold text-ink transition group-hover:text-signal md:text-3xl">
                    {project.title}
                  </h2>
                  <p className="mt-3 max-w-2xl leading-relaxed text-ink-muted">
                    {project.desc}
                  </p>
                </div>
                <div className="flex flex-wrap gap-4 md:flex-col md:items-end">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-arrow"
                    >
                      Live demo
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-ink-muted transition hover:text-signal"
                  >
                    GitHub
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
