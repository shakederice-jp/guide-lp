import type { Metadata } from "next";
import { H2, P, UL, Small, InlineLink, RelatedLinks } from "@/components/Prose";
import { CtaButton, APP_URL } from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "AIのIPO分析は信用できる?間違いを減らすための設計思想|大手町調査室九課",
};

export default function AiReliabilityPage() {
  return (
    <article>
      <h1 className="mb-6 font-heading text-3xl font-bold text-brand-tealDark">
        AIのIPO分析は信用できる?間違いを減らすための設計思想
      </h1>

      <P>
        生成AIは、もっともらしい誤りを作り出すことがあります。これは「ハルシネーション」と呼ばれる、よく知られた弱点です。
      </P>
      <P>
        「IPO企業情報AI分析レポート」は、この弱点に正面から向き合っています。そのうえで、いくつもの対策を重ねています。この記事では、その設計思想をご紹介します。
      </P>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>無料で分析を見てみる</CtaButton>

      <H2>対策① 情報源は一次情報(目論見書)だけ</H2>
      <P>
        情報源を、EDINET上の目論見書だけに限定しています。SNSの投稿や、信憑性の低いネット上の情報は一切使いません。
      </P>
      <P>
        一次情報だけに絞ることで、AIが不確かな情報を拾ってしまうリスクを抑えています。詳しくは<InlineLink href="/edinet-ai-analysis">目論見書(EDINET)をAIが自動解析</InlineLink>でご紹介しています。
      </P>

      <H2>対策② 本文の引用と数字を照合</H2>
      <P>
        AIが出す数字や記載には、本文からの引用を一緒に示すよう求めています。引用が目論見書の本文に実在するかを確認します。さらに、引用の中の数字が本文と一致するかも確認します。
      </P>
      <P>
        両方が確認できた場合だけ、採用します。合わない場合は、その箇所を使いません。これは、AIが事実と異なる内容を作り出す「ハルシネーション」を防ぐための仕組みです。
      </P>

      <H2>対策③ 9つの軸という型で出力を整える</H2>
      <P>
        AIの出力を自由な文章のまま出すのではなく、9つの軸という決まった型に当てはめています。型があることで、話がそれる心配を減らせます。根拠のない断定が入り込むことも、防ぎやすくなります。
      </P>
      <P>
        詳しくは<InlineLink href="/9axis-method">IPOの9軸分析メソッドとは?</InlineLink>をご覧ください。
      </P>

      <H2>対策④ 断定を避け、材料として届ける</H2>
      <P>
        「買うべき」「必ず上がる」といった断定的な表現は使いません。投資判断につながる材料を、誠実にお届けすることを心がけています。
      </P>

      <H2>対策⑤ 結果を公開して答え合わせする</H2>
      <P>
        事前の分析と、実際の値動きを突き合わせる取り組みも行っています。詳しくは<InlineLink href="/ai-accuracy-check">AIのIPO事前分析は当たった?</InlineLink>でご紹介しています。
      </P>

      <H2>まとめ</H2>
      <UL>
        <li>情報源は、EDINET上の目論見書という一次情報だけに限定しています。</li>
        <li>AIが出す数字や記載は、本文の引用と照合してから採用します。</li>
        <li>9つの軸という型に当てはめることで、話が逸れたり断定が入り込んだりするのを防いでいます。</li>
        <li>事前の分析と実際の値動きを、答え合わせとして公開しています。</li>
      </UL>

      <H2>対策を重ねた分析を、実際に見てみてください</H2>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>無料で分析を見てみる</CtaButton>

      <RelatedLinks
        links={[
          { href: "/edinet-ai-analysis", label: "目論見書(EDINET)をAIが自動解析" },
          { href: "/9axis-method", label: "IPOの9軸分析メソッドとは" },
          { href: "/ai-accuracy-check", label: "AIのIPO事前分析は当たった?" },
        ]}
      />

      <Small>
        本サイトの内容は、投資の勧誘や助言ではありません。判断材料の提供を目的としています。最終的な投資判断は、ご自身の責任でお願いします。
      </Small>
    </article>
  );
}
