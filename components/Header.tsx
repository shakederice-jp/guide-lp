import Link from "next/link";

export function Header() {
  return (
    <header className="bg-brand-header">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-1 px-4 py-5 text-center">
        <Link
          href="/"
          className="font-heading text-xl font-bold text-brand-tealDark"
        >
          大手町調査室九課
        </Link>
        <p className="text-sm text-brand-tealDark">IPO銘柄徹底分析の専門調査室</p>
      </div>
    </header>
  );
}
