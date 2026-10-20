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
  image?: string;
  live: string;
  actionText: string;
  status: string;
  architectureOverview: string;
  highlights: string[];
  detailedStack: DetailedTechStack[];
  externalLinks: ExternalLinkItem[];
}

export interface ExperienceItem {
  period: string;
  company: string;
  location: string;
  role: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface CredentialItem {
  title: string;
  issuer: string;
  year?: string;
  type: "certification" | "education";
}

export const PROFILE_DATA = {
  name: "Ahmad Isah",
  title: "Full-Stack Software Engineer | Mobile & Cloud Architecture",
  availability: "Available for Contract & Remote Engagements",
  bio: "Full-Stack Software Engineer with proven experience architecting, building, and launching full-cycle mobile and cloud-based applications. Engineering lead behind multi-platform commerce, fintech, and offline-first POS systems across West Africa. Specialized in building fault-tolerant backend services (Node.js, Laravel), responsive cross-platform mobile apps (Flutter, React Native), and high-concurrency payment integrations with automated reconciliation.",
  location: "Gombe, Nigeria (Operating in GMT+1 / Nigeria · Europe overlap)",
  phone: "+2348061939536",
  email: "ahmadisah6293@gmail.com",
  resumePath: "/CV.pdf",
  linkedin: "https://linkedin.com/in/ahmerthiserh",
  github: "https://github.com/ahmerthiserh",
};

export const TECHNICAL_STACK: SkillCategory[] = [
  {
    title: "Mobile Development",
    skills: [
      "Flutter",
      "Dart",
      "React Native",
      "Cross-Platform Architecture",
      "Offline Data Sync",
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      "Node.js",
      "Express",
      "PHP",
      "Laravel",
      "RESTful APIs",
      "Webhooks",
      "Microservices",
    ],
  },
  {
    title: "Databases & Cloud",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "MongoDB",
      "Docker",
      "Git",
      "CI/CD Actions",
    ],
  },
  {
    title: "FinTech & Integrations",
    skills: [
      "Payment Gateways (Paystack, Flutterwave, Stripe)",
      "Idempotent Webhook Processing",
      "OAuth2",
      "JWT",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "mini-mart",
    title: "Mini Mart (Multi-Platform Commerce Ecosystem)",
    role: "Lead Engineer & Co-Founder",
    summary:
      "Cross-platform mobile and web marketplace built with Flutter and Node.js. Features location-based merchant discovery, cart management, and multi-channel checkout.",
    stack: ["Flutter", "Node.js", "PostgreSQL", "Hive", "Offline Cache"],
    image: "/projects/minimart.jpeg",
    live: "https://play.google.com/store/apps/details?id=minimart.vetristech.com",
    actionText: "Play Store ↗",
    status: "Live on Web, Play Store & App Store",
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
    title: "V Pay & FluxBills (FinTech & Utility API Gateway)",
    role: "Fintech Systems Architect",
    summary:
      "API-driven payment engine handling automated virtual bank account issuance, instant wallet settlements, and bill payment endpoints. Built with strict idempotency keys to eliminate duplicate transactions under network latency drops.",
    stack: ["Node.js", "Laravel", "MySQL", "Redis", "Webhooks"],
    image: "/projects/pay.png",
    live: "https://github.com/ahmerthiserh",
    actionText: "Core Repo ↗",
    status: "Enterprise API / Production",
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
    title: "Offline-First POS Architecture",
    role: "Backend & Systems Lead",
    summary:
      "Fault-tolerant retail point-of-sale system leveraging local caching nodes to execute sales offline and automatically synchronize ledger state once connectivity is restored.",
    stack: ["Laravel", "PHP", "SQLite Sync", "RBAC", "REST APIs"],
    live: "https://github.com/ahmerthiserh",
    actionText: "Core Spec ↗",
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
    company: "Vetris Tech",
    location: "Remote / Nigeria",
    role: "Lead Software Engineer & Technical Co-Founder",
    period: "2024 — Present",
    achievements: [
      "Architected and shipped multi-tenant commerce and mobile banking services, achieving 99.9% platform uptime across high-concurrency transaction periods.",
      "Built and launched the Mini Mart multi-platform commerce ecosystem across Web, Google Play, and the App Store using Flutter and Node.js.",
      "Implemented real-time catalog search, localized merchant verification, and offline-first client-side data caching.",
      "Engineered the V Pay API gateway, automating virtual bank account generation and real-time webhook payment reconciliations with zero-downtime ledger consistency.",
    ],
    technologies: ["Flutter", "Dart", "Node.js", "PostgreSQL", "Hive", "Redis", "Paystack"],
  },
  {
    company: "AWS Global Tech",
    location: "Kano, Nigeria",
    role: "Software & Product Development Engineer",
    period: "April 2026 — Present",
    achievements: [
      "Designed and built enterprise Point-of-Sale (POS) modules using Laravel and PHP, streamlining retail operations across multi-location stores.",
      "Designed a fault-tolerant offline database sync mechanism, allowing retail cashiers to process uninterrupted transactions during regional internet outages.",
      "Implemented granular Role-Based Access Control (RBAC) and automated audit logs to safeguard inventory movements, returns, and cash ledgers.",
      "Engineered real-time reporting dashboards with date-range metrics to monitor revenue trends, cashier performance, and inventory velocity.",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "SQLite Sync", "RBAC", "Docker", "REST APIs"],
  },
  {
    company: "Briatek Computers Nigeria Limited",
    location: "Gombe, Nigeria",
    role: "Full-Stack Developer Intern",
    period: "2022 — April 2026",
    achievements: [
      "Built and maintained core business web applications using Laravel, MySQL, and modern front-end frameworks.",
      "Optimized complex SQL queries and relational database schemas, reducing data retrieval latency on high-volume reporting endpoints.",
      "Integrated third-party utility APIs, payment endpoints, and automated notification services into client platforms.",
    ],
    technologies: ["PHP", "Laravel", "MySQL", "JavaScript", "REST APIs", "Git"],
  },
];

export const CREDENTIALS: CredentialItem[] = [
  {
    title: "Meta Back-End Developer Specialization",
    issuer: "Coursera",
    year: "2023",
    type: "certification",
  },
  {
    title: "Meta Front-End Developer Specialization",
    issuer: "Coursera",
    year: "2023",
    type: "certification",
  },
  {
    title: "Database Structures and Management with MySQL",
    issuer: "Coursera",
    year: "2023",
    type: "certification",
  },
  {
    title: "Career Essentials in Software Development",
    issuer: "Microsoft & LinkedIn",
    year: "2024",
    type: "certification",
  },
  {
    title: "Senior School Certificate Examination (SSCE)",
    issuer: "NECO",
    type: "education",
  },
];
