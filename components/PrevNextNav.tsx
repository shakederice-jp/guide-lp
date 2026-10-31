import Link from "next/link";
import { ARTICLES } from "@/lib/articles";

export function PrevNextNav({ current }: { current: string }) {
  const idx = ARTICLES.findIndex((a) => a.href === current);
  if (idx === -1) return null;

  const prev = idx > 0 ? ARTICLES[idx - 1] : null;
  const next = idx < ARTICLES.length - 1 ? ARTICLES[idx + 1] : null;

  if (!prev && !next) return null;

  return (
    <nav className="my-10 flex flex-col gap-3 border-t border-brand-pale pt-6 sm:flex-row">
      {prev ? (
        <Link
          href={prev.href}
          className="flex-1 rounded-xl border border-brand-pale bg-white p-4 transition hover:border-brand-teal"
        >
          <span className="block text-xs text-brand-subtle">← 前の記事</span>
          <span className="font-bold text-brand-tealDark">{prev.label}</span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
      {next ? (
        <Link
          href={next.href}
          className="flex-1 rounded-xl border border-brand-pale bg-white p-4 text-right transition hover:border-brand-teal"
        >
          <span className="block text-xs text-brand-subtle">次の記事 →</span>
          <span className="font-bold text-brand-tealDark">{next.label}</span>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  );
}
