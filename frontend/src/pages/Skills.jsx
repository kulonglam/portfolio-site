import FadeIn from "../components/FadeIn";
import { skillGroups } from "../data/content";

export default function Skills() {
  return (
    <section className="page-shell">
      <FadeIn>
        <p className="section-kicker">Skills</p>
        <h1 className="section-title">Technical toolkit</h1>
        <p className="section-lead">
          Languages, frameworks, databases, and practices used to design, build,
          test, and support production systems.
        </p>
      </FadeIn>

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <FadeIn
            key={group.title}
            delay={index * 0.06}
            className={`rounded-2xl border border-line bg-paper-elev/70 p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-signal/25 hover:shadow-soft ${
              index === 0 ? "md:col-span-2 md:bg-gradient-to-br md:from-ink md:to-[#16363a] md:text-white md:border-transparent" : ""
            }`}
          >
            <h2
              className={`font-display text-xl font-bold ${
                index === 0 ? "md:text-white" : "text-ink"
              }`}
            >
              {group.title}
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {group.items.map((skill) => (
                <li
                  key={skill}
                  className={`rounded-md border px-3.5 py-2 text-sm font-medium transition ${
                    index === 0
                      ? "border-white/15 bg-white/10 text-white/90 md:hover:bg-white/15"
                      : "border-line bg-white text-ink-soft hover:border-signal/30 hover:text-signal"
                  }`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
