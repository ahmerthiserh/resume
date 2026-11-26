import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { PostBody } from "@/components/post-body";
import { POSTS, formatPostDate, getPost } from "@/data/posts";
import { PROFILE_DATA } from "@/data/portfolio";
import { SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: PROFILE_DATA.name, url: SITE_URL }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: [SITE_URL],
      tags: post.tags,
    },
  };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url,
    mainEntityOfPage: url,
    keywords: post.tags.join(", "),
    inLanguage: "en",
    author: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: PROFILE_DATA.name, url: SITE_URL },
    publisher: { "@type": "Person", "@id": `${SITE_URL}/#person`, name: PROFILE_DATA.name },
    isPartOf: { "@id": `${SITE_URL}/#website` },
    ...(post.originalUrl ? { sameAs: post.originalUrl } : {}),
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <article className="mx-auto max-w-3xl px-5 sm:px-8">
        <Link href="/blog" className="inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> All posts
        </Link>
        <h1 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl">{post.title}</h1>
        <p className="mt-4 font-mono text-xs text-slate-500">
          By <Link href="/" className="text-slate-300 hover:text-white">{PROFILE_DATA.name}</Link>
          {" · "}
          <time dateTime={post.date}>{formatPostDate(post.date)}</time>
        </p>
        <div className="mt-10">
          <PostBody body={post.body} />
        </div>
        {post.originalUrl && (
          <p className="mt-12 text-sm text-slate-500">
            First published on{" "}
            <a href={post.originalUrl} target="_blank" rel="noopener noreferrer" className="text-slate-300 underline hover:text-white">
              LinkedIn
            </a>
            .
          </p>
        )}
      </article>
    </PageShell>
  );
}
