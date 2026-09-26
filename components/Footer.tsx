import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-brand-pale bg-white">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-4 py-8 text-center text-sm text-brand-subtle">
        <nav className="flex flex-wrap justify-center gap-4">
          <Link href="/" className="hover:text-brand-teal">
            トップ
          </Link>
          <Link href="/about" className="hover:text-brand-teal">
            運営者情報
          </Link>
          <Link href="/privacy" className="hover:text-brand-teal">
            プライバシーポリシー
          </Link>
          <a
            href="https://ipo.finance-tower.com"
            className="hover:text-brand-teal"
          >
            IPO企業情報AI分析レポート
          </a>
        </nav>
        <p>&copy; {new Date().getFullYear()} 大手町調査室九課</p>
      </div>
    </footer>
  );
}
