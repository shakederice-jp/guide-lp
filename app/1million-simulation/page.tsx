import type { Metadata } from "next";
import Image from "next/image";
import { H2, P, UL, Small, RelatedLinks } from "@/components/Prose";
import { CtaButton, APP_URL } from "@/components/CtaButton";
import { PrevNextNav } from "@/components/PrevNextNav";
import { pageMetadata } from "@/lib/seo";
import { ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "IPOを公募価格で100万円買っていたら今いくら?シミュレーション機能",
  description:
    "IPO銘柄を公募価格で100万円買っていたら今いくらか。投資シミュレーション機能の使い方をご紹介します。",
  path: "/1million-simulation",
});

export default function OneMillionSimulationPage() {
  return (
    <article>
      <ArticleJsonLd
        title="IPOを公募価格で100万円買っていたら今いくら?シミュレーション機能"
        description="IPO銘柄を公募価格で100万円買っていたら今いくらか。投資シミュレーション機能の使い方をご紹介します。"
        path="/1million-simulation"
      />
      <h1 className="mb-6 font-heading text-3xl font-bold text-brand-tealDark">
        IPOを公募価格で100万円買っていたら今いくら?シミュレーション機能
      </h1>

      <P>
        もし、あのIPO銘柄に100万円投資していたら今いくらになっているか。気になったことはありませんか。
      </P>
      <P>
        「IPO企業情報AI分析レポート」には、公募価格で100万円投資したと仮定するシミュレーション機能があります。この記事では、その使い方をご紹介します。
      </P>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>分析ページへ</CtaButton>

      <H2>銘柄カードで誰でもすぐに確認できます</H2>
      <P>
        トップページの銘柄カードには「100万円投資なら現在、¥◯◯◯(+◯.◯%)」の表示が自動で出ます。対象は、上場済みで公募価格が確定している銘柄です。
      </P>
      <P>ログインや、追跡の手続きは必要ありません。</P>
      <div className="my-6 overflow-hidden rounded-2xl border border-brand-pale">
        <Image
          src="/simulation-cards.png"
          alt="IPO企業情報AI分析レポートの銘柄カード。各銘柄について、公募価格で100万円買っていたら現在いくらかの金額と騰落率が表示され、初心者向け分析・中・上級者向け分析のボタンが並んでいる"
          width={755}
          height={818}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          2026年9月時点の表示(画面は一例です)
        </p>
      </div>

      <H2>マイページでは、保有銘柄をまとめて確認</H2>
      <P>
        分析ページの「追跡開始」ボタンを押すと、その銘柄をマイポートフォリオに登録できます。マイページでは、登録した銘柄をまとめて確認できます。評価額や損益の割合も、あわせて表示します。
      </P>
      <div className="my-6 mx-auto overflow-hidden rounded-2xl border border-brand-pale" style={{ maxWidth: 712 }}>
        <Image
          src="/simulation-100shares.png"
          alt="分析ページの投資シミュレーション(100株購入の場合)の例。シナリオ別の試算額と、追跡開始ボタンが表示されている"
          width={712}
          height={713}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          サンプルデータによる例示です
        </p>
      </div>

      <H2>株価は毎日更新されます</H2>
      <P>
        株価データは、日次のバッチ処理で毎日更新しています。追跡には期限を設けていません。上場後、長期にわたって株価を追い続けられます。
      </P>

      <H2>100万円という基準額の考え方</H2>
      <P>
        基準額の100万円は、ご自身の総資産とは関係ありません。その銘柄1つに100万円投資したと仮定した、独立したシミュレーションです。
      </P>
      <P>複数の銘柄を追跡すれば、銘柄ごとの結果を並べて比較できます。</P>

      <H2>まとめ</H2>
      <UL>
        <li>トップページの銘柄カードには、ログインなしで投資シミュレーションの結果が自動表示されます。</li>
        <li>分析ページから追跡開始すると、マイページでまとめて確認できます。</li>
        <li>株価は毎日更新され、期限なく長期で追いかけられます。</li>
        <li>基準額の100万円は、銘柄ごとに独立した仮定の金額です。</li>
      </UL>

      <H2>実際にシミュレーションを見てみてください</H2>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>分析ページへ</CtaButton>

      <RelatedLinks
        links={[
          { href: "/9axis-method", label: "IPOの9軸分析メソッドとは" },
          { href: "/ai-accuracy-check", label: "AIのIPO事前分析は当たった?" },
          { href: "/investment-styles", label: "IPO投資はデイトレ・短期・長期でどう違う?" },
        ]}
      />

      <PrevNextNav current="/1million-simulation" />

      <Small>
        本サイトの内容は、投資の勧誘や助言ではありません。判断材料の提供を目的としています。最終的な投資判断は、ご自身の責任でお願いします。
      </Small>
    </article>
  );
}
