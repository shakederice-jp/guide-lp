import type { Metadata } from "next";
import Image from "next/image";
import { H2, P, UL, Small, InlineLink, RelatedLinks } from "@/components/Prose";
import { CtaButton, APP_URL } from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "IPO投資はデイトレ・短期・長期でどう違う?投資スタイル別の見方|大手町調査室九課",
};

export default function InvestmentStylesPage() {
  return (
    <article>
      <h1 className="mb-6 font-heading text-3xl font-bold text-brand-tealDark">
        IPO投資はデイトレ・短期・長期でどう違う?投資スタイル別の見方
      </h1>

      <P>
        多くのIPO情報サイトは、抽選に当選して上場初日に売ることを前提に作られています。
      </P>
      <P>
        「IPO企業情報AI分析レポート」は、超短期・短期・長期という3つの投資スタイルに分けて分析しています。この記事では、その考え方をご紹介します。
      </P>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>無料で分析を見てみる</CtaButton>

      <H2>9軸を3つの時間軸に分けています</H2>
      <P>
        分析の9軸は、投資スタイルに応じた3つのグループに分かれています。
      </P>
      <UL>
        <li>超短期(初値売り・当日の値動き):需給の軽さ・ロックアップ・上場タイミング</li>
        <li>短期(数週間〜数ヶ月):バリュエーション・VCや大株主の売り圧力・成長性</li>
        <li>長期(数年単位):経営陣・ユニットエコノミクス・競合環境</li>
      </UL>
      <P>
        9軸それぞれの内容は、<InlineLink href="/9axis-method">IPOの9軸分析メソッドとは</InlineLink>でご紹介しています。
      </P>

      <H2>グループごとの点数も確認できます</H2>
      <P>
        9軸の詳細分析が完了した銘柄では、超短期・短期・長期それぞれのグループ平均点を表示しています。自分の投資スタイルに近いグループの点数から、先に確認いただけます。
      </P>

      <P>
        この投資スタイル別の考え方は、どの有料プランでも共通してお読みいただけます。
      </P>
      <div className="my-6 overflow-hidden rounded-2xl border border-brand-pale">
        <Image
          src="/pricing-plans.png"
          alt="IPO企業情報AI分析レポートの料金プラン画面。超短期・短期・長期といった投資スタイル別の分析がどのプランでも読めることを示す案内と、無料会員・A分析見放題プラン・B分析見放題+通知プラン・C フルパックプランの4つが並んでいる"
          width={905}
          height={760}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          画面は一例です
        </p>
      </div>

      <H2>どの投資スタイルでも判断材料になります</H2>
      <P>
        投資スタイルは、人それぞれです。どのタイプの方でも、9つの視点が判断材料になるよう設計しています。
      </P>
      <UL>
        <li>初値で売り抜けたい方</li>
        <li>数週間から数ヶ月で利益を取りたい方</li>
        <li>数年単位でじっくり育てたい方</li>
      </UL>
      <P>
        長期保有の視点は、<InlineLink href="/deep-dive-3-points">儲けの仕組み・上場ストーリー・競合との違い</InlineLink>の深掘り3要素とも組み合わせてお読みいただけます。
      </P>

      <H2>まとめ</H2>
      <UL>
        <li>9軸は、超短期・短期・長期という3つの投資スタイルのグループに分かれています。</li>
        <li>各グループの平均点を、分析ページで確認できます。</li>
        <li>デイトレ狙いの方から長期保有の方まで、判断材料として活用いただけます。</li>
      </UL>

      <H2>投資スタイル別の分析を見てみてください</H2>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>無料で分析を見てみる</CtaButton>

      <RelatedLinks
        links={[
          { href: "/9axis-method", label: "IPOの9軸分析メソッドとは" },
          { href: "/deep-dive-3-points", label: "儲けの仕組み・上場ストーリー・競合との違い" },
          { href: "/below-offering-price-risk", label: "IPOの公募割れリスクとは?" },
        ]}
      />

      <Small>
        本サイトの内容は、投資の勧誘や助言ではありません。判断材料の提供を目的としています。最終的な投資判断は、ご自身の責任でお願いします。
      </Small>
    </article>
  );
}
