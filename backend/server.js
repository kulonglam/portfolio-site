import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import path from "path";
import { fileURLToPath } from "url";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, 
  },
});

// Verify transporter
transporter.verify((error, success) => {
  if (error) console.error("Email transporter error:", error);
  else console.log("Email transporter is ready");
});

// POST /api/contact - receive contact form
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Message from ${name}`,
      text: `From: ${name} (${email})\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    });

    return res.status(200).json({ success: true, message: "Message sent!" });
  } catch (err) {
    console.error("Error sending email:", err);
    return res.status(500).json({ error: "Failed to send message" });
  }
});

// Optional GET /api/contact for testing
app.get("/api/contact", (req, res) => {
  res.json({
    message: "This is the contact API. Use POST to send a message.",
  });
});

// Serve frontend safely
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
if (process.env.NODE_ENV === "production") { 
const frontendPath = path.join(__dirname, "../frontend/dist");

app.use(express.static(frontendPath));
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});
}

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
