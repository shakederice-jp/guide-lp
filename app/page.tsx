import { H2, P, UL, InlineLink } from "@/components/Prose";
import { CtaButton, APP_URL } from "@/components/CtaButton";

const FOUR_THOUGHTS = [
  {
    label: "多角的に深掘りする",
    desc: "プロが見ているような視点で、IPO情報をAIが多角的に深掘りして個人投資家に届けたい",
    href: "/9axis-method",
  },
  {
    label: "難しい情報をわかりやすく",
    desc: "専門知識がないと読み解きにくい財務諸表や経営データを、わかりやすく届けたい",
    href: "/edinet-ai-analysis",
  },
  {
    label: "目論見書を要点だけに",
    desc: "100ページ以上ある目論見書の要点だけを、時間がない個人投資家に届けたい",
    href: "/edinet-ai-analysis",
  },
  {
    label: "長い目で応援する投資家を増やしたい",
    desc: "上場直後の短期売買だけでなく、上場後も長く追い続けて会社の将来性を応援する投資家の判断を手助けしたい",
    href: "/investment-styles",
  },
];

const ARTICLES: { href: string; label: string }[] = [
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

export default function TopPage() {
  return (
    <div>
      <section className="mb-14 text-center">
        <h1 className="mb-4 font-heading text-3xl font-bold leading-snug text-brand-tealDark">
          IPOをAIが徹底分析
          <br />
          デイトレ〜長期投資家別
        </h1>
        <P>
          IPO銘柄をAIが目論見書から詳細に分析。デイトレ・短期・長期の投資スタイル別に、9つの軸で多角的に解説します。無料会員は毎月2銘柄を無料でご覧いただけます。
        </P>
        <CtaButton href={APP_URL}>無料で分析を見てみる</CtaButton>
      </section>

      <H2>大手町調査室九課の4つの想い</H2>
      <div className="mb-4 grid gap-4 sm:grid-cols-2">
        {FOUR_THOUGHTS.map((t) => (
          <InlineLink key={t.label} href={t.href}>
            <div className="rounded-xl border border-brand-pale bg-white p-4 h-full">
              <p className="mb-1 font-heading font-bold text-brand-tealDark">{t.label}</p>
              <p className="text-sm text-brand-ink">{t.desc}</p>
            </div>
          </InlineLink>
        ))}
      </div>
      <P>
        想いの背景は、<InlineLink href="/our-story">時代の変化を、チャンスに変える会社を応援したい</InlineLink>で詳しくお伝えしています。
      </P>

      <H2>記事一覧</H2>
      <UL>
        {ARTICLES.map((a) => (
          <li key={a.href}>
            <InlineLink href={a.href}>{a.label}</InlineLink>
          </li>
        ))}
      </UL>

      <H2>無料会員でできること</H2>
      <UL>
        <li>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</li>
        <li>
          友達紹介では紹介した方・紹介された方の両方が、2か月間どの銘柄も無料でご覧いただけます(先着100名限定)。
        </li>
      </UL>
      <CtaButton href={APP_URL}>無料で分析を見てみる</CtaButton>
    </div>
  );
}
