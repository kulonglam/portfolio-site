import { Link } from "react-router-dom";
import { profile } from "../data/content";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line bg-paper-elev/50 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="font-display text-2xl font-bold text-ink">
            {profile.name}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-muted">
            {profile.title}
            <br />
            {profile.location}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
          <a
            href={`mailto:${profile.email}`}
            className="text-ink-muted transition hover:text-signal"
          >
            Email
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-muted transition hover:text-signal"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-muted transition hover:text-signal"
          >
            GitHub
          </a>
          <Link to="/contact" className="text-signal transition hover:text-signal-dark">
            Contact
          </Link>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-6xl px-6 py-4 text-xs text-ink-muted md:px-8">
          © {new Date().getFullYear()} {profile.fullName}
        </p>
      </div>
    </footer>
  );
}
