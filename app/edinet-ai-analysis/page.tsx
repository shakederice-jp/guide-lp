import type { Metadata } from "next";
import Image from "next/image";
import { H2, P, UL, Small, InlineLink, RelatedLinks } from "@/components/Prose";
import { CtaButton, APP_URL } from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "目論見書(EDINET)をAIが自動解析|100ページの要点を整理する仕組み|大手町調査室九課",
};

export default function EdinetAiAnalysisPage() {
  return (
    <article>
      <h1 className="mb-6 font-heading text-3xl font-bold text-brand-tealDark">
        目論見書(EDINET)をAIが自動解析|100ページの要点を整理する仕組み
      </h1>

      <P>
        上場を控えた企業が開示する目論見書は、IPOの一次情報です。ただし、100ページを超えることも珍しくありません。すべてを読み込む時間を、忙しい個人投資家が確保するのは簡単ではありません。
      </P>
      <P>
        「IPO企業情報AI分析レポート」は、この目論見書をAIが自動で読み解きます。この記事では、その仕組みをご紹介します。
      </P>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>無料で分析を見てみる</CtaButton>

      <H2>情報源は目論見書(EDINET)だけ</H2>
      <P>
        AIが参照する情報源は、金融庁のEDINET上に公開される目論見書だけです。SNSの噂や、信憑性の低いネット上の情報は使いません。
      </P>
      <P>
        情報源を一次情報だけに絞ることで、不確かな情報が入り込むのを防いでいます。この方針の背景は、<InlineLink href="/ai-reliability">AIのIPO分析は信用できる?</InlineLink>で詳しくご紹介しています。
      </P>

      <H2>読み取る項目</H2>
      <P>AIは目論見書から、数字や記載を幅広く読み取ります。たとえば次のような項目です。</P>
      <UL>
        <li>事業内容や収益構造</li>
        <li>財務諸表の推移(売上・利益など)</li>
        <li>上場前の発行済株式数と、公募・売出株数</li>
        <li>ロックアップ(売却制限)の条件や倍率</li>
        <li>代表者や主要株主の持株比率</li>
        <li>想定される市場規模</li>
      </UL>
      <div className="my-6 overflow-hidden rounded-2xl border border-brand-pale">
        <Image
          src="/ipo-key-figures-table.png"
          alt="目論見書から読み取った主要数値の表の例。上場日・市場・証券コード・業種・公募価格・初値・ロックアップ期間・主幹事がまとめて表示されている"
          width={756}
          height={432}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          サンプルデータによる例示です
        </p>
      </div>

      <H2>数字は本文の引用と照合してから採用</H2>
      <P>
        AIが事実と異なる内容を作り出してしまう、いわゆる「ハルシネーション」への対策です。目論見書は、長い文章の中に数字が散らばっています。読み違いや、思い込みによる誤りを防ぐための工夫をしています。
      </P>
      <P>
        AIには、本文からの引用を一緒に示すよう求めています。その引用が目論見書の本文に実在するかを確認します。さらに、引用の中に同じ数字があるかどうかも確認します。両方そろった場合だけ、採用する仕組みです。合わない数字は、採用せず捨てます。
      </P>
      <div className="my-6 overflow-hidden rounded-2xl border border-brand-pale">
        <Image
          src="/ai-summary-citations.png"
          alt="AI分析要約の例。本文からの引用データ根拠が一覧で示され、目論見書に記載がなかった項目はデータ不足として正直に示されている"
          width={751}
          height={612}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          サンプルデータによる例示です
        </p>
      </div>

      <H2>要点をわかりやすい形に整理</H2>
      <P>
        AIは、100ページを超える目論見書から要点を整理します。良い点だけでなく、注意したい点もあわせてお伝えします。
      </P>
      <P>
        整理した内容は9つの軸に分けてお届けします。詳しくは<InlineLink href="/9axis-method">IPOの9軸分析メソッドとは?</InlineLink>でご紹介しています。
      </P>

      <H2>初心者から中上級者まで読み方を選べます</H2>
      <P>
        同じ目論見書の解析結果でも、読み方は2つから選べます。詳しくは<InlineLink href="/for-beginners-and-advanced">IPO分析は初心者から中上級者まで</InlineLink>でご紹介しています。
      </P>

      <H2>まとめ</H2>
      <UL>
        <li>目論見書(EDINET)という一次情報だけを、情報源にしています。</li>
        <li>AIが読み取った数字は、本文の引用と照合してから採用します。</li>
        <li>100ページを超える目論見書の要点を、9つの軸に整理してお届けします。</li>
      </UL>

      <H2>目論見書の自動解析を実際に見てみてください</H2>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>無料で分析を見てみる</CtaButton>

      <RelatedLinks
        links={[
          { href: "/ai-reliability", label: "AIのIPO分析は信用できる?" },
          { href: "/9axis-method", label: "IPOの9軸分析メソッドとは" },
          { href: "/for-beginners-and-advanced", label: "IPO分析は初心者から中上級者まで" },
        ]}
      />

      <Small>
        本サイトの内容は、投資の勧誘や助言ではありません。判断材料の提供を目的としています。最終的な投資判断は、ご自身の責任でお願いします。
      </Small>
    </article>
  );
}
