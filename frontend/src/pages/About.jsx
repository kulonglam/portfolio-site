import FadeIn from "../components/FadeIn";
import {
  certifications,
  education,
  languages,
  profile,
} from "../data/content";

export default function About() {
  return (
    <section className="page-shell">
      <FadeIn>
        <p className="section-kicker">About</p>
        <h1 className="section-title">{profile.fullName}</h1>
        <p className="section-lead">{profile.summary}</p>
      </FadeIn>

      <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn delay={0.08} className="rounded-2xl border border-line bg-paper-elev/70 p-8 shadow-soft md:p-10">
          <h2 className="font-display text-xl font-bold text-ink">Education</h2>
          <ul className="mt-8 space-y-8">
            {education.map((item) => (
              <li key={item.title} className="border-t border-line pt-6 first:border-0 first:pt-0">
                <p className="font-semibold text-ink">{item.title}</p>
                <p className="mt-2 text-signal">{item.org}</p>
                <p className="mt-1 text-sm text-ink-muted">{item.detail}</p>
              </li>
            ))}
          </ul>
        </FadeIn>

        <div className="space-y-6">
          <FadeIn delay={0.14} className="rounded-2xl border border-line bg-gradient-to-br from-ink to-[#16363a] p-8 text-white shadow-soft md:p-10">
            <h2 className="font-display text-xl font-bold">Certifications</h2>
            <ul className="mt-6 space-y-4">
              {certifications.map((item) => (
                <li
                  key={item}
                  className="border-t border-white/10 pt-4 text-sm leading-relaxed text-white/75 first:border-0 first:pt-0"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={0.2} className="rounded-2xl border border-line bg-paper-elev/70 p-8 shadow-soft">
            <h2 className="font-display text-xl font-bold text-ink">Languages</h2>
            <ul className="mt-6 space-y-3">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-baseline justify-between gap-4 border-b border-line pb-3 last:border-0 last:pb-0"
                >
                  <span className="font-medium text-ink">{lang.name}</span>
                  <span className="text-sm text-ink-muted">{lang.level}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
