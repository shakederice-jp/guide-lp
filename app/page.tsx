import type { Metadata } from "next";
import Image from "next/image";
import { H2, P, UL, InlineLink } from "@/components/Prose";
import { CtaButton, APP_URL } from "@/components/CtaButton";
import { ARTICLES } from "@/lib/articles";
import { pageMetadata } from "@/lib/seo";
import { ItemListJsonLd, FaqJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "IPOをAIが徹底分析|デイトレ~長期投資家別",
  description:
    "IPO銘柄をAIが目論見書から詳細に分析。デイトレ・短期・長期の投資スタイル別に、9つの軸で多角的に解説します。無料会員は毎月2銘柄を無料でご覧いただけます。",
  path: "/",
});

const FAQ_ITEMS = [
  {
    q: "IPO企業情報AI分析レポートとは何ですか?",
    a: "目論見書(EDINET)をAIが解析し、超短期・短期・長期の9つの軸で多角的に評価するサービスです。無料会員登録で、毎月2銘柄を無料でご覧いただけます。",
  },
  {
    q: "初心者でも使えますか?",
    a: "財務諸表が読めなくても理解できる初心者向けの分析と、9軸の詳しいデータをそのまま読める中上級者向けの分析があります。いつでも切り替えてお読みいただけます。",
  },
  {
    q: "すべての銘柄を無料で見られますか?",
    a: "毎月、日付順で最初の2銘柄は無料でご覧いただけます。それ以外の銘柄は、単体購入または有料プランでのご利用になります。",
  },
  {
    q: "AIの分析はどこまで信用できますか?",
    a: "情報源は目論見書などの一次情報に絞り、AIが示した数字は本文の引用と照合してから採用しています。",
  },
  {
    q: "友達紹介はありますか?",
    a: "友達紹介プログラムでは、紹介した方・された方の両方が2か月間どの銘柄も無料でご覧いただけます(先着100名限定)。",
  },
];

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
        <CtaButton href={APP_URL}>分析ページへ</CtaButton>
      </section>

      <div className="my-6 overflow-hidden rounded-2xl border border-brand-pale">
        <Image
          src="/top-simulation-results.png"
          alt="投資シミュレーション実績の例。公募価格で100万円買っていたら現在いくらかを、銘柄ごとに損益つきで示している"
          width={1015}
          height={765}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          サンプルデータによる例示です
        </p>
      </div>

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
      <ItemListJsonLd items={ARTICLES} />
      <UL>
        {ARTICLES.map((a) => (
          <li key={a.href}>
            <InlineLink href={a.href}>{a.label}</InlineLink>
          </li>
        ))}
      </UL>

      <div className="my-6 overflow-hidden rounded-2xl border border-brand-pale">
        <Image
          src="/top-calendar-wide.png"
          alt="IPOカレンダーの例。月間表示のスケジュールと、料金プラン・マーケットトレンドへのリンクが並んで表示されている"
          width={1432}
          height={715}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          画面は一例です
        </p>
      </div>

      <H2>無料会員でできること</H2>
      <UL>
        <li>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</li>
        <li>
          友達紹介では紹介した方・紹介された方の両方が、2か月間どの銘柄も無料でご覧いただけます(先着100名限定)。
        </li>
      </UL>

      <div className="my-6 overflow-hidden rounded-2xl border border-brand-pale">
        <Image
          src="/top-schedule-list.png"
          alt="IPO予定企業一覧の例。無料体験の案内と、各銘柄のAI分析要約が表示されている"
          width={1025}
          height={603}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          画面は一例です
        </p>
      </div>

      <H2>よくある質問</H2>
      <FaqJsonLd items={FAQ_ITEMS.map((f) => ({ q: f.q, a: f.a }))} />
      <div className="space-y-4">
        {FAQ_ITEMS.map((f) => (
          <div key={f.q} className="rounded-xl border border-brand-pale bg-white p-4">
            <p className="mb-1 font-bold text-brand-tealDark">Q. {f.q}</p>
            <p className="text-sm text-brand-ink">A. {f.a}</p>
          </div>
        ))}
      </div>

      <CtaButton href={APP_URL}>分析ページへ</CtaButton>
    </div>
  );
}
