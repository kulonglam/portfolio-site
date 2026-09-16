import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import FadeIn from "../components/FadeIn";
import { profile } from "../data/content";

function apiBaseUrl() {
  const raw = import.meta.env.VITE_API_URL || "";
  if (!raw) return "";
  return raw.startsWith("http") ? raw : `https://${raw}`;
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const website = e.currentTarget.website?.value ?? "";

    try {
      const res = await fetch(`${apiBaseUrl()}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, website }),
      });

      let data = {};
      try {
        data = await res.json();
      } catch {
        throw new Error("Invalid server response");
      }

      if (res.ok) {
        setStatus({
          success: true,
          message: data.message || "Message sent. I’ll get back to you soon.",
        });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({
          success: false,
          message: data.error || `Something went wrong (${res.status}).`,
        });
      }
    } catch (err) {
      setStatus({
        success: false,
        message: err.message || "Network error — please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page-shell">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <FadeIn>
          <p className="section-kicker">Contact</p>
          <h1 className="section-title">Let’s work together</h1>
          <p className="section-lead">
            Open to full-stack, backend, and technical support roles. Send a
            message or reach me directly.
          </p>

          <div className="mt-10 space-y-4">
            {[
              { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
              { label: "Phone", value: profile.phone, href: profile.phoneHref },
              { label: "LinkedIn", value: "kulong-lam-wuol", href: profile.linkedin },
              { label: "GitHub", value: "kulonglam", href: profile.github },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between border-b border-line py-4 transition hover:border-signal"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
                    {item.label}
                  </p>
                  <p className="mt-1 font-medium text-ink group-hover:text-signal">
                    {item.value}
                  </p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-ink-muted transition group-hover:text-signal"
                />
              </a>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-line bg-paper-elev/80 p-6 shadow-soft md:p-8"
          >
            <div className="space-y-5">
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute left-[-9999px] h-0 w-0 opacity-0"
              />

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold text-ink"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                  autoComplete="name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-ink"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="field-input"
                  autoComplete="email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-ink"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="field-input resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className={`btn-primary w-full ${
                  loading ? "cursor-not-allowed opacity-70" : ""
                }`}
              >
                {loading ? "Sending…" : "Send message"}
                {!loading && <ArrowUpRight size={16} />}
              </button>

              {status && (
                <p
                  className={`text-sm ${
                    status.success ? "text-signal-dark" : "text-red-600"
                  }`}
                  role="status"
                >
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
