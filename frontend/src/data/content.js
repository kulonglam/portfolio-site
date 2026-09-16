export const profile = {
  name: "Kulong Lam",
  fullName: "Kulong Lam Wuol Nyar",
  title: "Software Engineer · Full-Stack Developer",
  location: "Kampala, Uganda",
  email: "makhol1990@gmail.com",
  phone: "+256 777 285 894",
  phoneHref: "tel:+256777285894",
  whatsapp: "https://wa.me/256777285894",
  github: "https://github.com/kulonglam",
  linkedin: "https://www.linkedin.com/in/kulong-lam-wuol",
  resume: "/resume.pdf",
  summary:
    "Software engineer with hands-on experience in full-stack web development, technical troubleshooting, database management, and software quality assurance. Skilled in designing scalable applications with Python, Django, Node.js, JavaScript, PostgreSQL, and MongoDB — with a focus on reliable, customer-focused solutions.",
};

export const experience = [
  {
    role: "Full-Stack Developer",
    org: "Karibu Groceries Management System",
    type: "Student Project",
    period: "Jan 2026 – Present",
    location: "Kampala, Uganda",
    stack: ["Node.js", "Express.js", "MongoDB", "Vue.js"],
    points: [
      "Design and develop a full-stack grocery management system for inventory, procurement, cash sales, and credit sales.",
      "Build and validate REST APIs; implement JWT authentication and role-based authorization.",
      "Test application functionality, verify business logic, and resolve defects across the development lifecycle.",
      "Perform MongoDB validation for data integrity; deploy and maintain the app on Render.",
    ],
  },
  {
    role: "Full-Stack Developer",
    org: "Human Resource Management Information System",
    type: "Final Year Project · Bugema University",
    period: "Jan 2023 – Dec 2023",
    location: "Kampala, Uganda",
    stack: ["Django", "PostgreSQL", "JavaScript", "React"],
    points: [
      "Built and tested a full-stack HRMIS covering payroll, attendance, leave, recruitment, and reporting.",
      "Created automated API tests, unit tests, and smoke tests for critical workflows.",
      "Applied MFA, RBAC, encryption, audit logging, upload validation, and API rate limiting.",
      "Developed Uganda-specific PAYE/NSSF exports and payroll reconciliation tools.",
    ],
  },
  {
    role: "IT Intern",
    org: "Web Info-Net Ltd",
    type: "Industrial Training",
    period: "Jun 2023 – Aug 2023",
    location: "Kampala, Uganda",
    stack: ["Windows", "Linux", "Networking", "Databases"],
    points: [
      "Installed and configured Windows and Linux systems; maintained LAN/WAN infrastructure.",
      "Diagnosed hardware and software issues; provided end-user technical support.",
      "Installed and managed databases and web hosting; supported website deployment.",
      "Assisted with server administration and computer maintenance.",
    ],
  },
];

export const projects = [
  {
    title: "Karibu Groceries Management System",
    desc: "Full-stack inventory and sales platform with REST APIs, JWT auth, role-based access, and real-time operational dashboards.",
    stack: ["Node.js", "Express.js", "MongoDB", "Vue.js"],
    github: "https://github.com/kulonglam/Karibu-project1",
    live: "https://kgl-frontend.onrender.com",
    accent: "from-[#0d7377] via-[#1a6b5c] to-[#0e1218]",
    preview: "Inventory · Sales · Auth",
  },
  {
    title: "Human Resource Management Information System",
    desc: "Role-based HR platform for payroll, attendance, leave, and recruitment — with automated tests, CI checks, and Uganda PAYE/NSSF tooling.",
    stack: ["Python", "Django", "PostgreSQL", "React"],
    github: "https://github.com/kulonglam",
    live: "https://human-resource-management-system-i1d3.onrender.com",
    accent: "from-[#1e3a4c] via-[#0d7377] to-[#14323a]",
    preview: "Payroll · Leave · RBAC",
  },
  {
    title: "Polling App",
    desc: "Full-stack polling platform with authentication, session management, and PostgreSQL-backed results.",
    stack: ["Express", "EJS", "PostgreSQL"],
    github: "https://github.com/kulonglam/voting_app",
    accent: "from-[#244046] via-[#0f5c60] to-[#0e1218]",
    preview: "Polls · Sessions · Results",
  },
];

export const skillGroups = [
  {
    title: "Languages & Frameworks",
    items: ["Python", "Java", "JavaScript", "Node.js", "Django", "Express.js", "Vue.js"],
  },
  {
    title: "Web & UI",
    items: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "React"],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL"],
  },
  {
    title: "Tools & Practices",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "Jira",
      "VS Code",
      "Agile",
      "System design",
      "Debugging",
    ],
  },
  {
    title: "Systems",
    items: ["Windows", "Linux", "Networking", "Technical support"],
  },
];

export const education = [
  {
    title: "Bachelor of Science in Software Engineering",
    org: "Bugema University, Kampala",
    detail: "Graduated Jul 2023 · CGPA 3.83 / 5.0",
  },
  {
    title: "Certificate in Software Engineering",
    org: "Refactory Academy, Kampala",
    detail: "JavaScript, Node.js, MongoDB, Vue.js · Pending graduation",
  },
];

export const certifications = [
  "Google Data Analytics Professional Certificate — Coursera (In Progress)",
  "Foundation in Cybersecurity — Coursera",
  "International Computer Driving Licence (ICDL) — Engage Consults, Aug 2025",
];

export const languages = [
  { name: "Nuer", level: "Native" },
  { name: "English", level: "C1 / C2" },
  { name: "Italian", level: "A1" },
];
