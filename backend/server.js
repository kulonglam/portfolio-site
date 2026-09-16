import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();

const requiredEnv = ["EMAIL_USER", "EMAIL_PASS", "EMAIL_RECEIVER"];
const missing = requiredEnv.filter((key) => !process.env[key]);
if (missing.length) {
  console.error(`Missing required env vars: ${missing.join(", ")}`);
  process.exit(1);
}

function withProtocol(url) {
  if (!url) return "";
  return url.startsWith("http") ? url : `https://${url}`;
}

const frontendUrl =
  withProtocol(process.env.FRONTEND_URL) || "http://localhost:5173";
const allowedOrigins = [
  frontendUrl,
  "http://localhost:5173",
  "http://127.0.0.1:5173",
];

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const app = express();
app.set("trust proxy", 1);
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST"],
  })
);
app.use(express.json({ limit: "32kb" }));

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many messages. Please try again later." },
});

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error) => {
  if (error) console.error("Email transporter error:", error.message);
  else console.log("Email transporter is ready");
});

app.get("/api/health", (_req, res) => {
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() });
});

app.post("/api/contact", contactLimiter, async (req, res) => {
  const { name, email, message, website } = req.body;

  if (website) {
    return res.status(200).json({ success: true, message: "Message sent!" });
  }

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: "All fields are required" });
  }

  if (name.length > 100 || email.length > 254 || message.length > 5000) {
    return res.status(400).json({ error: "Input exceeds allowed length" });
  }

  if (!isValidEmail(email)) {
    return res.status(400).json({ error: "Invalid email address" });
  }

  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br>");

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      replyTo: email.trim(),
      subject: `New Message from ${name.trim()}`,
      text: `From: ${name.trim()} (${email.trim()})\n\n${message.trim()}`,
      html: `<p><strong>From:</strong> ${safeName} (${safeEmail})</p><p>${safeMessage}</p>`,
    });

    return res.status(200).json({ success: true, message: "Message sent!" });
  } catch (err) {
    console.error("Error sending email:", err.message);
    return res.status(500).json({ error: "Failed to send message" });
  }
});

app.get("/api/contact", (_req, res) => {
  res.json({
    message: "Contact API. POST here to send a message.",
  });
});

app.use("/api/*", (_req, res) => {
  res.status(404).json({ error: "API route not found" });
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
if (process.env.NODE_ENV === "production") {
  const frontendPath = path.join(__dirname, "../frontend/dist");
  app.use(express.static(frontendPath));
  app.get(/^\/(?!api).*/, (_req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

app.use((err, _req, res, next) => {
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({ error: "Origin not allowed" });
  }
  next(err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`CORS allowed for: ${allowedOrigins.join(", ")}`);
});
