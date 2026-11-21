import { PROFILE_DATA, PROJECTS, MOBILE_APPS, TECHNICAL_STACK, CREDENTIALS } from "@/data/portfolio";

/** The one official address of the site. Every canonical URL, sitemap entry and schema uses it. */
export const SITE_URL = "https://www.ahmadisah.com.ng";

export const SITE_TITLE = "Ahmad Isah — Full-Stack Software Engineer in Nigeria";
export const SITE_DESCRIPTION =
  "Ahmad Isah is a full-stack software engineer in Gombe, Nigeria, building mobile apps (Flutter), backend services (Node.js, Laravel) and payment systems. Co-founder and lead engineer at Vetris Tech.";

export const SITE_KEYWORDS = [
  "Ahmad Isah",
  "Ahmad Isah software engineer",
  "Ahmad Isah developer",
  "Ahmad Isah Gombe",
  "Ahmad Isah Vetris Tech",
  "ahmerthiserh",
  "full-stack software engineer Nigeria",
  "Flutter developer Nigeria",
  "Node.js developer Nigeria",
  "Laravel developer Nigeria",
  "fintech developer Nigeria",
  "software engineer Gombe",
  "Vetris Tech",
];

/** Structured data so Google understands who Ahmad Isah is and what he has built. */
export function buildJsonLd() {
  const personId = `${SITE_URL}/#person`;
  const skills = Array.from(new Set(TECHNICAL_STACK.flatMap((c) => c.skills)));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": personId,
        name: PROFILE_DATA.name,
        givenName: "Ahmad",
        familyName: "Isah",
        alternateName: ["ahmerthiserh"],
        jobTitle: "Full-Stack Software Engineer",
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        image: `${SITE_URL}/opengraph-image`,
        email: `mailto:${PROFILE_DATA.email}`,
        telephone: PROFILE_DATA.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Gombe",
          addressRegion: "Gombe State",
          addressCountry: "NG",
        },
        nationality: { "@type": "Country", name: "Nigeria" },
        worksFor: [
          { "@type": "Organization", name: "Vetris Tech", url: "https://vetristech.com" },
          { "@type": "Organization", name: "AWS Global Tech" },
        ],
        knowsAbout: skills,
        hasCredential: CREDENTIALS.filter((c) => c.type === "certification").map((c) => ({
          "@type": "EducationalOccupationalCredential",
          name: c.title,
          recognizedBy: { "@type": "Organization", name: c.issuer },
        })),
        sameAs: [PROFILE_DATA.linkedin, PROFILE_DATA.github],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: "Ahmad Isah",
        description: SITE_DESCRIPTION,
        inLanguage: "en",
        publisher: { "@id": personId },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profile`,
        url: SITE_URL,
        name: SITE_TITLE,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        mainEntity: { "@id": personId },
        dateModified: new Date("2026-11-21").toISOString(),
      },
      {
        "@type": "ItemList",
        name: "Projects by Ahmad Isah",
        itemListElement: [
          ...PROJECTS.map((p) => ({
            "@type": "WebApplication",
            name: p.title,
            description: p.summary,
            url: p.live,
            applicationCategory: "BusinessApplication",
            creator: { "@id": personId },
          })),
          ...MOBILE_APPS.map((a) => ({
            "@type": "MobileApplication",
            name: a.name,
            description: a.summary,
            url: a.playStore ?? a.appStore,
            operatingSystem: a.appStore ? "Android, iOS" : "Android",
            applicationCategory: a.category,
            creator: { "@id": personId },
          })),
        ].map((item, i) => ({ "@type": "ListItem", position: i + 1, item })),
      },
    ],
  };
}
