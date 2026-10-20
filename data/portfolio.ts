export interface DetailedTechStack {
  category: string;
  items: string[];
}

export interface ExternalLinkItem {
  label: string;
  url: string;
  isPrimary?: boolean;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  summary: string;
  stack: string[];
  live: string;
  actionText: string;
  status: string;
  image?: string;
  architectureOverview: string;
  highlights: string[];
  detailedStack: DetailedTechStack[];
  externalLinks: ExternalLinkItem[];
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
  avatar: "/avatar.png",
  availability: "Available for Q4 Contracts",
  bioHighlight1: "Flutter",
  bioHighlight2: "Node.js, Laravel",
  bio: "Full-Stack Software Engineer specializing in cross-platform mobile systems and scalable backend/payment architectures. Proven track record engineering offline-first POS engines, automated reconciliation pipelines, and commercial production platforms.",
  timezone: "GMT+1 (Nigeria / Europe overlap)",
  email: "ahmadisah6293@gmail.com",
  resumePath: "/CV.pdf",
  linkedin: "https://www.linkedin.com/in/ahmerthiserh",
  github: "https://github.com/ahmerthiserh",
};

export const PROJECTS: Project[] = [
  {
    id: "mini-mart",
    title: "Mini Mart",
    role: "Lead Engineer & Co-Founder",
    summary:
      "Multi-platform commerce ecosystem connecting neighborhood retail vendors with localized buyers. Features real-time catalog search, offline caching, and instant order routing.",
    stack: ["Flutter", "Node.js", "PostgreSQL", "Hive"],
    image: "/projects/minimart.jpeg",
    live: "https://play.google.com/store/apps/details?id=minimart.vetristech.com",
    actionText: "Play Store ↗",
    status: "Production",
    architectureOverview:
      "Engineered an offline-first cross-platform Flutter application backed by an asynchronous Node.js and PostgreSQL distributed backend. Built custom local state hydration pipelines that allow continuous catalog browsing and cart persistence even in zero-bandwidth environments, reconciling deltas automatically upon network recovery.",
    highlights: [
      "Offline-first cache sync with automated delta replication when network connectivity is restored.",
      "Optimistic UI cart checkout reducing perceived transaction latency to sub-150ms.",
      "Dual-storage client architecture leveraging Hive for ultra-fast local key-value lookups alongside relational PostgreSQL on the server.",
    ],
    detailedStack: [
      { category: "Client Framework", items: ["Flutter", "Dart", "Provider/Riverpod"] },
      { category: "Backend Engine", items: ["Node.js", "Express", "TypeScript"] },
      { category: "Database & Storage", items: ["PostgreSQL", "Hive (Local)", "SQLite"] },
      { category: "Infrastructure & APIs", items: ["Docker", "Google Cloud", "RESTful APIs", "FCM"] },
    ],
    externalLinks: [
      {
        label: "Open Live Product ↗",
        url: "https://play.google.com/store/apps/details?id=minimart.vetristech.com",
        isPrimary: true,
      },
      {
        label: "GitHub / Case Study ↗",
        url: "https://github.com/ahmerthiserh",
        isPrimary: false,
      },
    ],
  },
  {
    id: "v-pay",
    title: "V Pay & FluxBills",
    role: "Fintech Systems Architect",
    summary:
      "High-reliability payment processing and utility engine. Features automated virtual bank account issuance, instant wallet settlements, and idempotent webhook reconciliation.",
    stack: ["Node.js", "Laravel", "MySQL", "Redis"],
    image: "/projects/pay.png",
    live: "https://github.com/ahmerthiserh",
    actionText: "Architecture ↗",
    status: "Enterprise API",
    architectureOverview:
      "Architected an API-first multi-tenant financial transaction engine that issues automated dynamic virtual bank accounts and processes real-time utility billings. Designed a distributed Redis-queued event processing pipeline with strict database row-level locking to guarantee idempotent webhook settlements and eliminate duplicate debits during gateway timeouts.",
    highlights: [
      "Idempotent webhook reconciliation protocol guaranteeing zero duplicate disbursements across high-concurrency payment streams.",
      "Asynchronous Redis BullMQ worker pipelines decoupling webhook ingestion from transaction ledger writing.",
      "ACID-compliant double-entry ledger bookkeeping with automated cryptographic audit logs.",
    ],
    detailedStack: [
      { category: "Backend & Framework", items: ["Node.js", "Laravel 11", "PHP 8.3"] },
      { category: "Cache & Message Broker", items: ["Redis", "BullMQ / Horizon"] },
      { category: "Data Layer", items: ["MySQL (InnoDB)", "Read Replicas"] },
      { category: "Protocols & Security", items: ["HMAC Webhooks", "Idempotency Keys", "mTLS", "Docker"] },
    ],
    externalLinks: [
      {
        label: "GitHub / Case Study ↗",
        url: "https://github.com/ahmerthiserh",
        isPrimary: true,
      },
    ],
  },
  {
    id: "pos-engine",
    title: "Offline-First POS Engine",
    role: "Backend & Systems Lead",
    summary:
      "Fault-tolerant retail point-of-sale infrastructure with local database caching, maintaining uninterrupted retail operations during network blackouts with automated state reconciliation on reconnect.",
    stack: ["Laravel", "PHP", "SQLite Sync"],
    live: "https://github.com/ahmerthiserh",
    actionText: "Core Repo ↗",
    status: "Commercial Core",
    architectureOverview:
      "Constructed a dual-layer sync point-of-sale engine allowing retail cashiers to process hundreds of daily sales, print cryptographic receipts, and deduct localized inventory entirely offline. When connection recovers, the local SQLite daemon dispatches encrypted batch payloads to a central Laravel cluster, automatically managing version conflict resolution and inventory rollback triggers.",
    highlights: [
      "Dual-layer sync architecture using embedded SQLite client databases that cache sales receipts during complete internet blackouts.",
      "Automatic bulk synchronization with automated rollback mechanisms for race-condition inventory conflicts.",
      "Local LAN terminal sync mechanism enabling multi-register price book consistency before cloud uplink.",
    ],
    detailedStack: [
      { category: "Core Framework", items: ["Laravel 10/11", "PHP", "Daemon Workers"] },
      { category: "Client Embedded DB", items: ["SQLite 3", "Encrypted Cache"] },
      { category: "Central Database", items: ["MySQL", "Redis Pub/Sub"] },
      { category: "Architecture & DevOps", items: ["Offline Sync Protocol", "Docker", "Linux Systemd", "REST APIs"] },
    ],
    externalLinks: [
      {
        label: "Core Architecture Repo ↗",
        url: "https://github.com/ahmerthiserh",
        isPrimary: true,
      },
    ],
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
