import Link from "next/link";

// 姉妹サイト(2026/11/19新設): 大手町調査室九課の全サイトへの相互リンク。
const SISTER_SITES: [string, string][] = [
  ["IPO分析アプリ(米国版)", "https://finance-tower.com/ipo-us"],
  ["IPO投資の教科書", "https://finance-tower.com/learn"],
  ["中学生・高校生のためのお金の流れ入門", "https://finance-tower.com/money-flow"],
  ["大学生向け 人生設計・マネープラン入門", "https://finance-tower.com/students"],
  ["メモレバ(AIダイエット手帳)", "https://finance-tower.com/diet"],
  ["大手町調査室九課", "https://finance-tower.com"],
];

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
            href="https://finance-tower.com/ipo-jp"
            className="hover:text-brand-teal"
          >
            IPO企業情報AI分析レポート
          </a>
          {SISTER_SITES.map(([name, url]) => (
            <a key={url} href={url} className="hover:text-brand-teal">
              {name}
            </a>
          ))}
        </nav>
        <p>&copy; {new Date().getFullYear()} 大手町調査室九課</p>
      </div>
    </footer>
  );
}
