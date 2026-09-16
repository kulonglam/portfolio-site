import FadeIn from "../components/FadeIn";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section className="page-shell">
      <FadeIn>
        <p className="section-kicker">Experience</p>
        <h1 className="section-title">Work & projects</h1>
        <p className="section-lead">
          Full-stack product work, industrial IT training, and production-minded
          systems for real business workflows.
        </p>
      </FadeIn>

      <div className="relative mt-16">
        <div
          className="absolute bottom-0 left-[11px] top-2 hidden w-px bg-gradient-to-b from-signal via-line to-transparent md:block"
          aria-hidden="true"
        />

        <div className="space-y-6">
          {experience.map((job, index) => (
            <FadeIn key={`${job.org}-${job.period}`} delay={index * 0.08}>
              <article className="group relative grid gap-6 rounded-2xl border border-line bg-paper-elev/60 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-signal/30 hover:shadow-soft md:grid-cols-[auto_1fr] md:gap-8 md:p-8">
                <div className="relative hidden pt-1 md:block">
                  <span className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full border-2 border-signal bg-paper">
                    <span className="h-2 w-2 rounded-full bg-signal" />
                  </span>
                </div>

                <div>
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                    <div>
                      <h2 className="font-display text-2xl font-bold text-ink transition group-hover:text-signal">
                        {job.role}
                      </h2>
                      <p className="mt-1 font-medium text-signal">{job.org}</p>
                      <p className="mt-1 text-sm text-ink-muted">
                        {job.type} · {job.location}
                      </p>
                    </div>
                    <p className="shrink-0 rounded-md bg-signal/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-signal">
                      {job.period}
                    </p>
                  </div>

                  <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    {job.stack.join(" · ")}
                  </p>

                  <ul className="mt-5 max-w-3xl space-y-2.5">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="relative pl-4 text-ink-muted leading-relaxed before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-signal"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
