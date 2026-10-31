export type Article = { href: string; label: string };

// 記事の読む順番。トップページの「記事一覧」と、各記事下部の「前の記事・次の記事」ナビで共通して使用します。
export const ARTICLES: Article[] = [
  { href: "/launch", label: "「IPO企業情報AI分析レポート」が本日ローンチ" },
  { href: "/features", label: "既存のIPO情報サイトとどう違う?AI分析レポートの16の特徴" },
  { href: "/9axis-method", label: "IPOの9軸分析メソッドとは?" },
  { href: "/edinet-ai-analysis", label: "目論見書(EDINET)をAIが自動解析" },
  { href: "/ai-reliability", label: "AIのIPO分析は信用できる?" },
  { href: "/9axis-free-guide", label: "IPO分析の9軸参考資料を無料で全公開" },
  { href: "/1million-simulation", label: "公募価格で100万円買っていたら今いくら?" },
  { href: "/ai-accuracy-check", label: "AIのIPO事前分析は当たった?" },
  { href: "/lockup-countdown", label: "IPOのロックアップ解除とは?" },
  { href: "/deep-dive-3-points", label: "儲けの仕組み・上場ストーリー・競合との違い" },
  { href: "/investment-styles", label: "IPO投資はデイトレ・短期・長期でどう違う?" },
  { href: "/below-offering-price-risk", label: "IPOの公募割れリスクとは?" },
  { href: "/referral-program", label: "友達紹介で2か月無料" },
  { href: "/for-beginners-and-advanced", label: "IPO分析は初心者から中上級者まで" },
  { href: "/our-story", label: "大手町調査室九課をつくった理由" },
];
