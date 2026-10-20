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
  links?: ExternalLinkItem[];
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
    live: "https://minimart.vetristech.com/",
    actionText: "Web App ↗",
    links: [
      { label: "Web App ↗", url: "https://minimart.vetristech.com/" },
      { label: "Google Play ↗", url: "https://play.google.com/store/apps/details?id=minimart.vetristech.com" },
      { label: "App Store ↗", url: "https://apps.apple.com/app/mini-mart-marketplace/id6804913345" },
    ],
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
        label: "Web App ↗",
        url: "https://minimart.vetristech.com/",
        isPrimary: true,
      },
      {
        label: "Google Play ↗",
        url: "https://play.google.com/store/apps/details?id=minimart.vetristech.com",
        isPrimary: true,
      },
      {
        label: "Apple App Store ↗",
        url: "https://apps.apple.com/app/mini-mart-marketplace/id6804913345",
        isPrimary: true,
      },
      {
        label: "GitHub / Profile ↗",
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
    id: "sales-rep-analytics",
    title: "SalesRepAnalytics",
    role: "Lead Engineer & Full-Stack Architect",
    summary:
      "Enterprise sales performance and revenue intelligence platform. Automates sales representative tracking, multi-tier commission calculations, pipeline forecasting, and real-time KPI visualization across distributed sales teams.",
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "REST APIs",
    ],
    image: "/projects/salesrepanalytics.jpg",
    live: "https://salesrepanalytics.com/",
    actionText: "Live Platform ↗",
    links: [
      { label: "Live Platform ↗", url: "https://salesrepanalytics.com/" },
    ],
    status: "Live Platform",
    architectureOverview:
      "Architected an enterprise-grade multi-tenant revenue analytics suite built with Next.js, Node.js, and PostgreSQL. Designed high-throughput analytical query pipelines aggregating quota velocity and commission tiers with sub-second dashboard latencies.",
    highlights: [
      "Real-time metrics aggregation and performance leaderboards with cached analytics queries.",
      "Role-Based Access Control (RBAC) separating sales reps, regional managers, and executive leadership dashboards.",
      "Automated pipeline velocity tracking and commission ledger calculation engine.",
    ],
    detailedStack: [
      { category: "Frontend Framework", items: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"] },
      { category: "Backend Engine", items: ["Node.js", "Express", "REST APIs", "Prisma"] },
      { category: "Database & Storage", items: ["PostgreSQL", "Redis Caching"] },
      { category: "Architecture & Security", items: ["RBAC", "JWT / OAuth2", "CI/CD Actions", "Docker"] },
    ],
    externalLinks: [
      {
        label: "Live Platform ↗",
        url: "https://salesrepanalytics.com/",
        isPrimary: true,
      },
      {
        label: "GitHub / Profile ↗",
        url: "https://github.com/ahmerthiserh",
        isPrimary: false,
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
