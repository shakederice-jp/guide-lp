import type { Metadata } from "next";
import Image from "next/image";
import { H2, P, UL, Small, InlineLink, RelatedLinks } from "@/components/Prose";
import { CtaButton, APP_URL } from "@/components/CtaButton";
import { PrevNextNav } from "@/components/PrevNextNav";
import { pageMetadata } from "@/lib/seo";
import { ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "IPO企業の儲けの仕組み・上場ストーリー・競合との違いを読み解く",
  description:
    "9軸のスコア分析より前に無料で読める「深掘り3要素」。儲けの仕組み・上場ストーリー・競合との違いをご紹介します。",
  path: "/deep-dive-3-points",
});

export default function DeepDive3PointsPage() {
  return (
    <article>
      <ArticleJsonLd
        title="IPO企業の儲けの仕組み・上場ストーリー・競合との違いを読み解く"
        description="9軸のスコア分析より前に無料で読める「深掘り3要素」。儲けの仕組み・上場ストーリー・競合との違いをご紹介します。"
        path="/deep-dive-3-points"
      />
      <h1 className="mb-6 font-heading text-3xl font-bold text-brand-tealDark">
        IPO企業の儲けの仕組み・上場ストーリー・競合との違いを読み解く
      </h1>

      <P>
        9軸のスコア分析に入る前に、その会社を知っておきたいと感じたことはありませんか。
      </P>
      <P>
        「IPO企業情報AI分析レポート」の分析ページには、スコア分析より前に読める無料の「深掘り3要素」を用意しています。この記事では、その内容をご紹介します。
      </P>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>分析ページへ</CtaButton>

      <H2>3つの要素</H2>
      <P>
        深掘り3要素は、儲けの仕組み・上場までのストーリー・競合との違いの3つです。いずれも目論見書(EDINET)をもとに、AIが文章にまとめています。
      </P>
      <UL>
        <li>儲けの仕組み:どのような事業で、どのように利益を出しているか</li>
        <li>上場までのストーリー:創業からIPOに至った経緯</li>
        <li>競合との違い:同業他社と比べた位置づけ</li>
      </UL>
      <div className="my-6 overflow-hidden rounded-2xl border border-brand-pale">
        <Image
          src="/deep-dive-accordion.png"
          alt="無料公開の深掘り3要素アコーディオン。ビジネスモデル(儲けの仕組み)・上場までのストーリー・競合企業との違いの3項目が、折りたたみ形式で並んでいる"
          width={1041}
          height={394}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          画面は一例です
        </p>
      </div>

      <H2>有料分析より前に、無料で読めます</H2>
      <P>
        この3要素は、スコア分析のパートより上に配置しています。登録前の方でも、無料で読んでいただけます。
      </P>
      <P>
        折りたたみ形式になっているため、気になった要素だけを開いてお読みいただけます。9軸の詳しいスコア分析は<InlineLink href="/9axis-method">IPOの9軸分析メソッドとは</InlineLink>でご紹介しています。
      </P>

      <H2>マーケットトレンドでも読めます</H2>
      <P>
        深掘り3要素は、マーケットトレンドのページでも独立した記事として取り上げています。分析ページより短くまとめているため、気になる銘柄をすばやく確認できます。
      </P>

      <H2>断定的な投資助言ではありません</H2>
      <P>
        3要素はいずれも、事実と見方を伝えることを目的にしています。「買うべき」といった断定的な表現は避けています。
      </P>

      <H2>まとめ</H2>
      <UL>
        <li>分析ページには、儲けの仕組み・上場ストーリー・競合との違いの3要素を無料で掲載しています。</li>
        <li>有料のスコア分析より前に、登録前の方でもお読みいただけます。</li>
        <li>マーケットトレンドのページでも、短くまとめた記事として読めます。</li>
      </UL>

      <H2>深掘り3要素を実際にご覧ください</H2>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>分析ページへ</CtaButton>

      <RelatedLinks
        links={[
          { href: "/9axis-method", label: "IPOの9軸分析メソッドとは" },
          { href: "/edinet-ai-analysis", label: "目論見書(EDINET)をAIが自動解析" },
          { href: "/for-beginners-and-advanced", label: "IPO分析は初心者から中上級者まで" },
        ]}
      />

      <PrevNextNav current="/deep-dive-3-points" />

      <Small>
        本サイトの内容は、投資の勧誘や助言ではありません。判断材料の提供を目的としています。最終的な投資判断は、ご自身の責任でお願いします。
      </Small>
    </article>
  );
}
