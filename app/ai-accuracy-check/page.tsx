import type { Metadata } from "next";
import Image from "next/image";
import { H2, P, UL, Small, InlineLink, RelatedLinks } from "@/components/Prose";
import { CtaButton, APP_URL } from "@/components/CtaButton";
import { PrevNextNav } from "@/components/PrevNextNav";
import { pageMetadata } from "@/lib/seo";
import { ArticleJsonLd } from "@/components/JsonLd";

export const metadata: Metadata = pageMetadata({
  title: "AIのIPO事前分析は当たった?実際の値動きとの「答え合わせ」企画",
  description:
    "AIの事前分析は実際の値動きと一致したのか。結果をすべて公開する「答え合わせ」企画の仕組みをご紹介します。",
  path: "/ai-accuracy-check",
});

export default function AiAccuracyCheckPage() {
  return (
    <article>
      <ArticleJsonLd
        title="AIのIPO事前分析は当たった?実際の値動きとの「答え合わせ」企画"
        description="AIの事前分析は実際の値動きと一致したのか。結果をすべて公開する「答え合わせ」企画の仕組みをご紹介します。"
        path="/ai-accuracy-check"
      />
      <h1 className="mb-6 font-heading text-3xl font-bold text-brand-tealDark">
        AIのIPO事前分析は当たった?実際の値動きとの「答え合わせ」企画
      </h1>

      <P>「AIが分析したと言っても、本当に当たっているのか」。そう感じる方も多いはずです。</P>
      <P>
        「IPO企業情報AI分析レポート」では、事前の分析と実際の値動きを突き合わせる「答え合わせ」に取り組んでいます。この記事では、その仕組みをご紹介します。
      </P>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>分析ページへ</CtaButton>

      <H2>答え合わせの仕組み</H2>
      <P>
        上場後、決まったタイミングで事前のAI分析と実際の値動きを比べます。タイミングは4つあります。上場2営業日後・10営業日後・1か月後、そしてロックアップ解除の前です。
      </P>
      <P>
        比べる内容は、AIが示した見立てと実際の株価の動きです。超短期・短期・長期の軸ごとに比べます。
      </P>

      <H2>結果はすべて公開します</H2>
      <P>
        結果は、良い場合もそうでない場合も公開しています。公開先はマーケットトレンドのページです。都合の良い結果だけを選ぶことはしません。
      </P>
      <P>継続して公開することで、分析の精度を確かめていただけます。</P>
      <div className="my-6 overflow-hidden rounded-2xl border border-brand-pale">
        <Image
          src="/recent-ipo-results.png"
          alt="最近上場した銘柄(直近60日)の一覧。上場日・銘柄・市場・公募価格・初値・公募価格比が、良い結果もそうでない結果もそのまま並んでいる"
          width={859}
          height={486}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          画面は一例です
        </p>
      </div>
      <P>
        個別銘柄のページでも、公募価格・初値・上場日終値といった実績値を事前のシナリオと並べて確認できます。
      </P>
      <div className="my-6 overflow-hidden rounded-2xl border border-brand-pale">
        <Image
          src="/price-scenario-short.png"
          alt="分析ページの株価シナリオ分析(短期)の例。強気・中立・弱気の3パターンを、それぞれの確率とあわせて示している"
          width={921}
          height={733}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          サンプルデータによる例示です
        </p>
      </div>
      <div className="my-6 overflow-hidden rounded-2xl border border-brand-pale">
        <Image
          src="/price-scenario-long.png"
          alt="分析ページの株価シナリオ分析(長期)の例。数年先までの強気・中立・弱気の3パターンを、それぞれの確率とあわせて示している"
          width={1031}
          height={734}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          サンプルデータによる例示です
        </p>
      </div>
      <div className="my-6 overflow-hidden rounded-2xl border border-brand-pale">
        <Image
          src="/scenario-vs-actual.png"
          alt="事前のAIシナリオと上場日終値実績を比べる答え合わせの例。公募価格・初値・上場日終値と公募価格比が並び、「まずここに注目」の見立てと実績が照らし合わされている"
          width={763}
          height={574}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          サンプルデータによる例示です
        </p>
      </div>

      <H2>断定はしません</H2>
      <P>
        この取り組みは、何%が正しかったという断定的な集計を目的にしていません。実際の値動きとあわせて確認できることを、大切にしています。
      </P>
      <P>
        分析自体の設計思想は、<InlineLink href="/ai-reliability">AIのIPO分析は信用できる?</InlineLink>でご紹介しています。
      </P>

      <H2>まとめ</H2>
      <UL>
        <li>上場2営業日後・10営業日後・1か月後・ロックアップ解除前の4つのタイミングで、答え合わせを行います。</li>
        <li>比べる内容は、AIの見立てと実際の株価の動きです。</li>
        <li>結果は良い場合もそうでない場合も、マーケットトレンドのページで公開します。</li>
      </UL>

      <H2>答え合わせの実例を見てみてください</H2>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>分析ページへ</CtaButton>

      <RelatedLinks
        links={[
          { href: "/ai-reliability", label: "AIのIPO分析は信用できる?" },
          { href: "/lockup-countdown", label: "IPOのロックアップ解除とは?" },
          { href: "/investment-styles", label: "IPO投資はデイトレ・短期・長期でどう違う?" },
        ]}
      />

      <PrevNextNav current="/ai-accuracy-check" />

      <Small>
        本サイトの内容は、投資の勧誘や助言ではありません。判断材料の提供を目的としています。最終的な投資判断は、ご自身の責任でお願いします。
      </Small>
    </article>
  );
}
