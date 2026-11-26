import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/motion/reveal";
import { formatPostDate, getPosts } from "@/data/posts";

/** The three newest blog posts. Hidden until there is at least one post. */
export function LatestPostsSection() {
  const posts = getPosts().slice(0, 3);
  if (posts.length === 0) return null;

  return (
    <section id="writing" className="mx-auto max-w-6xl scroll-mt-24 px-5 sm:px-8">
      <SectionHeading index="06" eyebrow="Writing" title="Latest from the blog" />
      <Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col rounded-2xl border border-white/10 bg-slate-900/40 p-6 transition-colors hover:border-blue-500/40 hover:bg-slate-900/70"
            >
              <time dateTime={post.date} className="font-mono text-xs text-slate-500">
                {formatPostDate(post.date)}
              </time>
              <h3 className="mt-3 text-lg font-semibold text-white group-hover:text-blue-300">{post.title}</h3>
              <p className="mt-2 flex-1 text-sm text-slate-400">{post.description}</p>
            </Link>
          ))}
        </div>
        <Link href="/blog" className="mt-6 inline-flex items-center gap-1 text-sm text-slate-300 hover:text-white">
          All posts <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </Reveal>
    </section>
  );
}
