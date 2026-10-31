import type { Metadata } from "next";
import { H2, P, UL, Small, InlineLink, RelatedLinks } from "@/components/Prose";
import { CtaButton, APP_URL } from "@/components/CtaButton";
import { PrevNextNav } from "@/components/PrevNextNav";
import { pageMetadata } from "@/lib/seo";
import { ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "IPO分析は初心者から中上級者まで|レベル別の読み方",
  description:
    "財務諸表が読めなくても大丈夫。IPO分析ページで選べる初心者向け・中上級者向けの2つの読み方をご紹介します。",
  path: "/for-beginners-and-advanced",
});

export default function ForBeginnersAndAdvancedPage() {
  return (
    <article>
      <ArticleJsonLd
        title="IPO分析は初心者から中上級者まで|レベル別の読み方"
        description="財務諸表が読めなくても大丈夫。IPO分析ページで選べる初心者向け・中上級者向けの2つの読み方をご紹介します。"
        path="/for-beginners-and-advanced"
      />
      <h1 className="mb-6 font-heading text-3xl font-bold text-brand-tealDark">
        IPO分析は初心者から中上級者まで|レベル別の読み方
      </h1>

      <P>
        財務諸表を見ても、何を見ればいいか分からない。そう感じて、IPO分析を避けていませんか。
      </P>
      <P>
        「IPO企業情報AI分析レポート」の分析ページには、初心者向けと中上級者向けの2つの読み方を用意しています。この記事では、その違いをご紹介します。
      </P>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>分析ページへ</CtaButton>

      <H2>初心者向けの分析</H2>
      <P>
        初心者向けの分析は、財務諸表が読めなくても理解できるように書き直しています。専門用語を避け、やさしい言葉で要点を伝えます。
      </P>

      <H2>中上級者向けの分析</H2>
      <P>
        中上級者向けの分析は、9軸それぞれの詳しい評価と参考資料をそのまま読める形です。表やグラフを使った詳しいデータも、省略せずに掲載しています。
      </P>
      <P>
        9軸それぞれの内容は、<InlineLink href="/9axis-method">IPOの9軸分析メソッドとは</InlineLink>でご紹介しています。参考資料を全文公開している理由は<InlineLink href="/9axis-free-guide">こちら</InlineLink>でご紹介しています。
      </P>

      <H2>いつでも切り替えて読めます</H2>
      <P>
        分析ページでは、初心者向けと中上級者向けをいつでも切り替えられます。まず初心者向けで概要をつかみ、気になった部分だけ中上級者向けで詳しく読むといった使い方もできます。
      </P>

      <H2>まとめ</H2>
      <UL>
        <li>分析ページには、初心者向けと中上級者向けの2つの読み方があります。</li>
        <li>初心者向けは、財務諸表が読めなくても理解できるように書いています。</li>
        <li>中上級者向けは、9軸の詳しい評価と参考資料をそのまま読めます。</li>
      </UL>

      <H2>自分に合う読み方を試してみてください</H2>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>分析ページへ</CtaButton>

      <RelatedLinks
        links={[
          { href: "/9axis-method", label: "IPOの9軸分析メソッドとは" },
          { href: "/9axis-free-guide", label: "IPO分析の9軸参考資料を無料で全公開" },
          { href: "/edinet-ai-analysis", label: "目論見書(EDINET)をAIが自動解析" },
        ]}
      />

      <PrevNextNav current="/for-beginners-and-advanced" />

      <Small>
        本サイトの内容は、投資の勧誘や助言ではありません。判断材料の提供を目的としています。最終的な投資判断は、ご自身の責任でお願いします。
      </Small>
    </article>
  );
}
