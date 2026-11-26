/** Renders a post body written in the simple plain-text format described in data/posts.ts. */
export function PostBody({ body }: { body: string }) {
  const blocks = body
    .trim()
    .split(/\n\s*\n/)
    .map((b) => b.trim())
    .filter(Boolean);

  return (
    <div className="space-y-5 text-base leading-relaxed text-slate-300 sm:text-lg">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2 key={i} className="pt-4 text-2xl font-bold tracking-tight text-white">
              {block.slice(3)}
            </h2>
          );
        }
        const lines = block.split("\n").map((l) => l.trim());
        if (lines.every((l) => /^\d+\.\s/.test(l))) {
          return (
            <ol key={i} className="list-decimal space-y-2 pl-6 marker:font-mono marker:text-blue-400">
              {lines.map((l, j) => (
                <li key={j}>{l.replace(/^\d+\.\s+/, "")}</li>
              ))}
            </ol>
          );
        }
        if (lines.every((l) => /^(-|→)\s/.test(l))) {
          return (
            <ul key={i} className="list-disc space-y-2 pl-6 marker:text-blue-400">
              {lines.map((l, j) => (
                <li key={j}>{l.replace(/^(-|→)\s+/, "")}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i}>
            {lines.map((l, j) => (
              <span key={j}>
                {j > 0 && <br />}
                {l}
              </span>
            ))}
          </p>
        );
      })}
    </div>
  );
}
