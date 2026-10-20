export interface Project {
  title: string;
  role: string;
  summary: string;
  stack: string[];
  live: string;
  actionText: string;
  status: string;
}

export interface ExperienceItem {
  period: string;
  company: string;
  role: string;
  description: string;
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const PROFILE_DATA = {
  name: "Ahmad Isah",
  title: "Full-Stack Software Engineer | Mobile & Cloud Architecture",
  availability: "Available for Q4 Contracts",
  bioHighlight1: "Flutter",
  bioHighlight2: "Node.js, Laravel",
  bio: "Full-Stack Software Engineer specializing in cross-platform mobile systems and scalable backend/payment architectures. Proven track record engineering offline-first POS engines, automated reconciliation pipelines, and commercial production platforms.",
  timezone: "GMT+1 (Nigeria / Europe overlap)",
  email: "ahmadisah6293@gmail.com",
  resumePath: "/Ahmad_Isah_CV.pdf",
  linkedin: "https://www.linkedin.com/in/ahmerthiserh",
  github: "https://github.com/ahmerthiserh",
};

export const PROJECTS: Project[] = [
  {
    title: "Mini Mart",
    role: "Lead Engineer / Co-Founder",
    summary:
      "Multi-platform commerce ecosystem connecting neighborhood retail vendors with localized buyers. Features real-time catalog search, offline caching, and instant order routing.",
    stack: ["Flutter", "Node.js", "PostgreSQL", "Hive"],
    live: "https://play.google.com/store/apps/details?id=minimart.vetristech.com",
    actionText: "Play Store ↗",
    status: "Production",
  },
  {
    title: "V Pay & FluxBills",
    role: "Fintech Systems Architect",
    summary:
      "High-reliability payment processing and utility engine. Features automated virtual bank account issuance, instant wallet settlements, and idempotent webhook reconciliation.",
    stack: ["Node.js", "Laravel", "MySQL", "Redis"],
    live: "https://github.com/ahmerthiserh",
    actionText: "Architecture ↗",
    status: "Enterprise API",
  },
  {
    title: "Offline-First POS Engine",
    role: "Backend & Systems Lead",
    summary:
      "Fault-tolerant retail point-of-sale infrastructure with local database caching, maintaining uninterrupted retail operations during network blackouts with automated state reconciliation on reconnect.",
    stack: ["Laravel", "PHP", "SQLite Sync"],
    live: "https://github.com/ahmerthiserh",
    actionText: "Core Repo ↗",
    status: "Commercial Core",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    period: "2024 — Present",
    company: "Vetris Tech",
    role: "Lead Software Engineer & Technical Co-Founder",
    description:
      "Spearheaded overall technical architecture for high-volume commerce and fintech systems. Shipped Mini Mart cross-platform marketplace and architected the V Pay core transaction infrastructure.",
    technologies: ["Flutter", "Node.js", "PostgreSQL", "Hive", "Redis"],
  },
  {
    period: "April 2026 — Present",
    company: "AWS Global Tech",
    role: "Software & Product Development Engineer",
    description:
      "Architected enterprise POS modules, resilient offline sync nodes, multi-tier RBAC security models, and high-throughput real-time analytics dashboards for commercial retail clients.",
    technologies: ["Laravel", "Node.js", "MySQL", "Docker", "REST APIs"],
  },
  {
    period: "2022 — April 2026",
    company: "Briatek Computers",
    role: "Full-Stack Developer Intern",
    description:
      "Maintained commercial web applications, optimized SQL query latency by over 40%, built automated ingestion pipelines, and integrated third-party payment and messaging APIs.",
    technologies: ["PHP", "Laravel", "JavaScript", "MySQL", "Git"],
  },
];

export const TECHNICAL_STACK: SkillCategory[] = [
  {
    title: "Mobile & Frontend",
    skills: ["Flutter", "Dart", "React Native", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend & Systems",
    skills: ["Node.js", "Express", "Laravel", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "DevOps & Tools",
    skills: ["GitLab CI/CD", "GitHub Actions", "Docker", "Linux", "REST/Webhooks"],
  },
  {
    title: "Architecture Patterns",
    skills: ["Idempotency", "Offline First", "Event Queues", "RBAC", "ACID Compliance"],
  },
];
