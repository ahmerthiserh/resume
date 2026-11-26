import type { Metadata } from "next";
import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { formatPostDate, getPosts } from "@/data/posts";
import { SITE_URL } from "@/lib/site";

const TITLE = "Blog: notes on Flutter, payments and shipping software";
const DESCRIPTION =
  "Articles by Ahmad Isah, a full-stack software engineer, on building mobile apps, payment systems and products at Vetris Tech.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog" },
  openGraph: { type: "website", url: `${SITE_URL}/blog`, title: TITLE, description: DESCRIPTION },
};

export default function BlogIndex() {
  const posts = getPosts();

  return (
    <PageShell>
      <section className="mx-auto max-w-3xl px-5 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.25em] text-blue-400">Blog</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          <span className="text-gradient">Writing</span>
        </h1>
        <p className="mt-4 text-lg text-slate-400">
          Notes from building mobile apps, payment systems and products at Vetris Tech.
        </p>

        {posts.length === 0 ? (
          <p className="mt-12 text-slate-500">The first posts are on their way.</p>
        ) : (
          <ul className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} className="group block py-7">
                  <time dateTime={post.date} className="font-mono text-xs text-slate-500">
                    {formatPostDate(post.date)}
                  </time>
                  <h2 className="mt-2 text-xl font-semibold text-white transition-colors group-hover:text-blue-300 sm:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-slate-400">{post.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </PageShell>
  );
}
