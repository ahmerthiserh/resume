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
  /** Extra line under the summary, e.g. related products. */
  note?: string;
  /** "freelance" = built as a subcontractor, not directly for the end client. */
  group?: "freelance";
  /** Spans two grid columns on large screens. */
  wide?: boolean;
  architectureOverview?: string;
  highlights?: string[];
  detailedStack?: DetailedTechStack[];
  externalLinks?: ExternalLinkItem[];
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
  title: "Full-Stack Software Engineer | Mobile, Backend & Payments",
  availability: "Available for Contract & Remote Engagements",
  bio: "Full-stack software engineer building mobile apps, backend services and payment systems with Flutter, Node.js and Laravel. Shipped Mini Mart, a marketplace live on the web, Google Play and the App Store; V Pay, a payment gateway that issues virtual bank accounts and reconciles webhook payments; and an offline-first POS that keeps retail stores selling through internet outages.",
  location: "Gombe, Nigeria · GMT+1 (overlaps with Europe)",
  phone: "+2348061939536",
  phoneDisplay: "+234 806 193 9536",
  email: "ahmadisah6293@gmail.com",
  resumePath: "/CV.pdf",
  linkedin: "https://linkedin.com/in/ahmerthiserh",
  github: "https://github.com/ahmerthiserh",
  x: "https://x.com/_ahmerth",
  googlePlayDeveloper: "https://play.google.com/store/apps/dev?id=5333141421915649889",
  appStoreDeveloper: "https://apps.apple.com/us/developer/vetris-tech-solutions/id1894172843",
};

export interface Highlight {
  value: number;
  from?: number;
  decimals?: number;
  suffix?: string;
  label: string;
  detail: string;
}

export const HIGHLIGHTS: Highlight[] = [
  { value: 15, suffix: "+", label: "Products built & launched", detail: "Web platforms and iOS/Android apps" },
  { value: 10, label: "Apps on Google Play", detail: "4 also on the Apple App Store" },
  { value: 99.9, from: 90, decimals: 1, suffix: "%", label: "Platform uptime", detail: "Commerce & banking services at Vetris Tech" },
  { value: 2022, from: 2010, label: "Building software since", detail: "Gombe · Kano · Remote" },
];

export const TECHNICAL_STACK: SkillCategory[] = [
  {
    title: "Web Frontend",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
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
    wide: true,
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
    title: "V Pay",
    role: "Built at Vetris Tech · Fintech",
    summary:
      "Payment infrastructure for businesses: automated virtual account generation, instant deposit confirmation and merchant settlements with low fees.",
    stack: ["Node.js", "Laravel", "MySQL", "Redis", "Webhooks"],
    image: "/projects/vpay.jpg",
    live: "https://pay.vetristech.com/",
    actionText: "Web Platform ↗",
    links: [{ label: "Web Platform ↗", url: "https://pay.vetristech.com/" }],
    status: "Live web platform",
  },
  {
    id: "fluxbills",
    title: "Fluxbills",
    role: "Built at Vetris Tech · Utilities",
    summary:
      "Utility payments platform and API: multi-network airtime and data bundles, cable TV renewals, exam PINs and automated electricity token generation.",
    stack: ["Node.js", "Laravel", "MySQL", "REST APIs"],
    image: "/projects/fluxbills.jpg",
    live: "https://bills.vetristech.com/",
    actionText: "Web Platform ↗",
    links: [{ label: "Web Platform ↗", url: "https://bills.vetristech.com/" }],
    status: "Live web platform",
  },
  {
    id: "zamtake-data-link",
    title: "Zamtake Data Link",
    role: "Client platform · Telecom",
    summary:
      "Retail digital services platform for automated data bundle purchases, airtime recharges and utility bill payments, on the web and in iOS and Android apps.",
    note: "One of several data and airtime (VTU) platforms I've built, alongside V-DATA, AY Data Station, Mbela Sub, Shalele Data Plug and Futuhi Data Sub.",
    stack: [],
    image: "/projects/zamtake.jpg",
    live: "https://zamtakedatalink.com/",
    actionText: "Web App ↗",
    links: [
      { label: "Web App ↗", url: "https://zamtakedatalink.com/" },
      { label: "Google Play ↗", url: "https://play.google.com/store/apps/details?id=com.zamtakedatalink.app2" },
      { label: "App Store ↗", url: "https://apps.apple.com/us/app/zamtake-data-link/id6768110173" },
    ],
    status: "Live on Web, Play Store & App Store",
  },
  {
    id: "vem",
    title: "Vem",
    role: "Built at Vetris Tech · Fashion marketplace",
    summary:
      "Marketplace for premium fabrics, traditional clothing and fashion accessories, bringing trusted sellers and buyers together on the web and mobile.",
    stack: [],
    image: "/projects/vem.jpg",
    live: "https://vem.vetristech.com/",
    actionText: "Web App ↗",
    links: [
      { label: "Web App ↗", url: "https://vem.vetristech.com/" },
      { label: "Google Play ↗", url: "https://play.google.com/store/apps/details?id=vem.vetristech.com" },
      { label: "App Store ↗", url: "https://apps.apple.com/app/vem/id6798015280" },
    ],
    status: "Live on Web, Play Store & App Store",
  },
  {
    id: "hisbah-command-gombe",
    wide: true,
    title: "Hisbah Command Gombe",
    role: "Enterprise client system · Public sector",
    summary:
      "Administrative platform for the Gombe State Hisbah Command: digital case logging, officer deployment directory and command oversight.",
    stack: [],
    image: "/projects/hisbah.jpg",
    live: "https://hisbahcommandgombe.com/",
    actionText: "Website ↗",
    links: [{ label: "Website ↗", url: "https://hisbahcommandgombe.com/" }],
    status: "Live",
  },
  {
    id: "sales-rep-analytics",
    title: "SalesRepAnalytics",
    role: "Freelance · subcontracted",
    group: "freelance",
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
  {
    id: "digicollegepro",
    title: "DigiCollegePro",
    role: "Freelance · subcontracted",
    group: "freelance",
    summary:
      "Multi-campus higher education ERP: admissions, faculties, course registration, 5.0 CGPA results, bursary fees and senate broadsheets, with 6 role-based dashboards and transcripts printed on the school's letterhead.",
    stack: [],
    image: "/projects/collegepro.jpg",
    live: "https://collegepro.digisoft.com.ng",
    actionText: "Live Platform ↗",
    links: [{ label: "Live Platform ↗", url: "https://collegepro.digisoft.com.ng" }],
    status: "Live platform",
  },
  {
    id: "digismartsave",
    title: "DigiSmartSave (Micro Credit)",
    role: "Freelance · subcontracted",
    group: "freelance",
    summary:
      "Interest-free savings and finance cooperative platform: goal-based savings, Murabaha and Ijara asset financing, and profit-sharing investment pools, with every cost shown upfront.",
    stack: [],
    image: "/projects/digismartsave.jpg",
    live: "https://digismartsave.digisoft.com.ng",
    actionText: "Live Platform ↗",
    links: [{ label: "Live Platform ↗", url: "https://digismartsave.digisoft.com.ng" }],
    status: "Live platform",
  },
  {
    id: "agile-adamawa",
    title: "AGILE Adamawa Management Portal",
    role: "Freelance · contributor",
    group: "freelance",
    summary:
      "Portal for the AGILE girls' education programme in Adamawa State: enrollment, weekly attendance, grant payments, caregiver records and multi-level data validation for 145,000+ beneficiaries in 4,000+ schools.",
    stack: [],
    image: "/projects/agilecct.jpg",
    live: "https://adamawaagilecct.org.ng",
    actionText: "Portal ↗",
    links: [{ label: "Portal ↗", url: "https://adamawaagilecct.org.ng" }],
    status: "Live · government programme",
  },
];

export interface MobileApp {
  id: string;
  name: string;
  category: string;
  summary: string;
  icon: string;
  screenshot: string;
  playStore?: string;
  appStore?: string;
}

/** Apps published under the Vetris Tech developer account. Data/VTU apps are represented by Zamtake only. */
export const MOBILE_APPS: MobileApp[] = [
  {
    id: "mini-mart",
    name: "Mini Mart",
    category: "Marketplace",
    summary: "Multi-vendor marketplace connecting buyers with verified market stores, local sellers and online businesses.",
    icon: "/apps/minimart-icon.png",
    screenshot: "/apps/minimart.jpg",
    playStore: "https://play.google.com/store/apps/details?id=minimart.vetristech.com",
    appStore: "https://apps.apple.com/app/mini-mart-marketplace/id6804913345",
  },
  {
    id: "zamtake-data-link",
    name: "Zamtake Data Link",
    category: "Telecom · Data & airtime",
    summary: "Buy data bundles and airtime, and pay cable TV and electricity bills instantly from a wallet.",
    icon: "/apps/zamtake-icon.png",
    screenshot: "/apps/zamtake.jpg",
    playStore: "https://play.google.com/store/apps/details?id=com.zamtakedatalink.app2",
    appStore: "https://apps.apple.com/us/app/zamtake-data-link/id6768110173",
  },
  {
    id: "vem",
    name: "VEM",
    category: "Fashion marketplace",
    summary: "Shop premium fabrics, traditional clothing, caps and fashion accessories from trusted sellers.",
    icon: "/apps/vem-icon.png",
    screenshot: "/apps/vem.jpg",
    playStore: "https://play.google.com/store/apps/details?id=vem.vetristech.com",
    appStore: "https://apps.apple.com/app/vem/id6798015280",
  },
  {
    id: "mazaf-ecommerce",
    name: "Mazaf Ecommerce",
    category: "E-commerce · Client app",
    summary: "Official shopping app of Mazaf Mini Depot: groceries, beverages, household and personal care products across Nigeria.",
    icon: "/apps/mazaf-icon.png",
    screenshot: "/apps/mazaf.jpg",
    playStore: "https://play.google.com/store/apps/details?id=com.mazafecommerce.app",
    appStore: "https://apps.apple.com/us/app/mazaf-e-commerce/id6798672639",
  },
  {
    id: "unimate",
    name: "UniMate",
    category: "Education · Finance",
    summary: "Student companion for planning lectures, coursework and deadlines, and managing a student budget.",
    icon: "/apps/unimate-icon.png",
    screenshot: "/apps/unimate.jpg",
    playStore: "https://play.google.com/store/apps/details?id=com.vetristech.UniMate",
  },
  {
    id: "ludora",
    name: "Ludora",
    category: "Game",
    summary: "A colourful Ludo game with smart bots, pass-and-play with friends and online matches.",
    icon: "/apps/ludora-icon.png",
    screenshot: "/apps/ludora.jpg",
    playStore: "https://play.google.com/store/apps/details?id=com.acem702.ludora",
  },
  {
    id: "status-saver",
    name: "Status Saver",
    category: "Utility",
    summary: "Save WhatsApp status videos and images to your phone in one tap.",
    icon: "/apps/statussaver-icon.png",
    screenshot: "/apps/statussaver.jpg",
    playStore: "https://play.google.com/store/apps/details?id=com.vetristech.statussaver",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "AWS Global Tech",
    location: "Kano, Nigeria",
    role: "Software & Product Development Engineer",
    period: "April 2026 — Present",
    achievements: [
      "Built Point-of-Sale (POS) modules in Laravel and PHP for retail operations across multiple store locations.",
      "Designed an offline database sync mechanism so cashiers keep processing sales during regional internet outages.",
      "Implemented role-based access control and audit logs covering inventory movements, returns and cash ledgers.",
      "Built reporting dashboards with date-range filters for revenue trends, cashier performance and inventory turnover.",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "SQLite Sync", "RBAC", "Docker", "REST APIs"],
  },
  {
    company: "Vetris Tech",
    location: "Gombe / Remote",
    role: "Lead Software Engineer & Technical Co-Founder",
    period: "2024 — Present",
    achievements: [
      "Lead engineering for 15+ web platforms and mobile apps across commerce, payments, telecom and the public sector, including 10 apps on Google Play and 4 on the App Store.",
      "Built and launched Mini Mart on the web, Google Play and the App Store with Flutter and Node.js, including merchant storefronts, wallet checkout and offline-first caching.",
      "Built V Pay and Fluxbills: virtual account issuance, instant deposits and utility payments with idempotent webhook processing, maintaining 99.9% uptime.",
      "Delivered client platforms including Zamtake Data Link and the Hisbah Command Gombe administrative system.",
    ],
    technologies: ["Flutter", "Dart", "Node.js", "PostgreSQL", "Hive", "Redis", "Paystack"],
  },
  {
    company: "Briatek Computers Nigeria Limited",
    location: "Gombe, Nigeria",
    role: "Full-Stack Developer Intern",
    period: "2022 — April 2026",
    achievements: [
      "Built and maintained business web applications with Laravel, MySQL and JavaScript.",
      "Optimized SQL queries and database schemas to cut response times on high-volume reporting endpoints.",
      "Integrated utility APIs, payment endpoints and automated notification services into client platforms.",
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
