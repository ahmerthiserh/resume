import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { getPosts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-27");
  const posts = getPosts();
  return [
    { url: SITE_URL, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/blog`, lastModified: posts[0] ? new Date(posts[0].date) : lastModified, changeFrequency: "weekly", priority: 0.8 },
    ...posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: new Date(p.date),
      changeFrequency: "yearly" as const,
      priority: 0.7,
    })),
    { url: `${SITE_URL}/CV.pdf`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
