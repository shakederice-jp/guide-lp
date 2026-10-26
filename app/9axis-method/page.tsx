import type { Metadata } from "next";
import Image from "next/image";
import { H2, P, UL, Small, InlineLink, RelatedLinks } from "@/components/Prose";
import { CtaButton, APP_URL } from "@/components/CtaButton";
import { RiskCategoryCard } from "@/components/RiskCard";

export const metadata: Metadata = {
  title: "IPOの9軸分析メソッドとは?AIが多角的に評価する9つの視点|大手町調査室九課",
};

function Axis({ label, desc }: { label: string; desc: string }) {
  return (
    <li>
      <strong>{label}</strong> ― {desc}
    </li>
  );
}

export default function NineAxisMethodPage() {
  return (
    <article>
      <h1 className="mb-6 font-heading text-3xl font-bold text-brand-tealDark">
        IPOの9軸分析メソッドとは?AIが多角的に評価する9つの視点
      </h1>

      <P>
        「このIPO銘柄、買いですか？」という質問には、実はそのままお答えできません。初値で売り抜けたい方と、数年単位で応援したい方とでは、見るべきポイントがまったく違うからです。
      </P>
      <P>
        「IPO企業情報AI分析レポート」では、1つの銘柄を9つの軸に分けて評価する「9軸分析メソッド」を採用しています。この記事では、9軸の全体像と、そう設計した理由をご紹介します。
      </P>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>無料で分析を見てみる</CtaButton>

      <H2>9軸の全体像 ― 3つの時間軸 × 3つの視点</H2>
      <P>
        9つの軸は、超短期・短期・長期という3つの時間軸に、それぞれ3つずつ割り振られています。
      </P>

      <H2>超短期(初値・当日のトレード視点)</H2>
      <UL>
        <Axis label="需給の軽さ" desc="上場時に市場に出回る株数の多さ・少なさを見ます。出回る株が少ないほど、値動きが大きくなりやすい傾向があります。" />
        <Axis label="ロックアップ" desc="大株主やVC・PEによる売却制限の内容を見ます。制限が緩い、または解除が近い場合は、需給への影響を確認しておく材料になります。" />
        <Axis label="上場タイミング" desc="上場時期の市場全体の地合いなど、タイミングに関わる要因を見ます。" />
      </UL>
      <div className="my-6 overflow-hidden rounded-2xl border border-brand-pale">
        <Image
          src="/chapter1-ultra-short.png"
          alt="流通比率と平均初値騰落率の関係を示すグラフ。流通比率が低いほど初値の上昇率が高い傾向をサンプルデータで例示している"
          width={730}
          height={414}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          サンプルデータによる例示です
        </p>
      </div>

      <H2>短期(数週間〜数か月の視点)</H2>
      <UL>
        <Axis label="バリュエーション" desc="公開価格が、事業内容や業績に対して割安・割高のどちらに寄っているかを見ます。" />
        <Axis label="VCや大株主の売り圧力" desc="ロックアップ解除後、VC・PEなどの既存株主が売却してくる可能性の大きさを見ます。" />
        <Axis label="成長性" desc="売上・利益などの推移から、事業がどう伸びてきたか、伸びしろがどこにあるかを見ます。" />
      </UL>
      <div className="my-6 mx-auto overflow-hidden rounded-2xl border border-brand-pale" style={{ maxWidth: 697 }}>
        <Image
          src="/axis-detail-short.png"
          alt="超短期・短期の軸別スコアカードの例。需給の軽さ・ロックアップ・上場タイミングと、バリュエーション・VCや大株主の売り圧力・成長性の評価が表示されている"
          width={697}
          height={694}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          サンプルデータによる例示です
        </p>
      </div>

      <H2>長期(数年単位の視点)</H2>
      <UL>
        <Axis label="経営陣" desc="経営陣の経歴や、目論見書に示された経営方針を見ます。" />
        <Axis label="ユニットエコノミクス" desc="売上に対する利益の出方など、事業として利益を生み出す構造を見ます。" />
        <Axis label="競合環境" desc="同業他社と比べた立ち位置や、事業の強み・弱みを見ます。" />
      </UL>
      <div className="my-6 mx-auto overflow-hidden rounded-2xl border border-brand-pale" style={{ maxWidth: 616 }}>
        <Image
          src="/axis-detail-long.png"
          alt="長期の軸別スコアカードの例。経営陣・ユニットエコノミクス・競合環境の評価と、有料プラン限定のバリュー・グロースマップが表示されている"
          width={616}
          height={711}
          className="h-auto w-full"
        />
        <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
          サンプルデータによる例示です
        </p>
      </div>

      <P>
        超短期・短期・長期それぞれの見方は、<InlineLink href="/investment-styles">IPO投資はデイトレ・短期・長期でどう違う?</InlineLink>で詳しくご紹介しています。
      </P>

      <H2>なぜ9つに分けるのか</H2>
      <P>
        IPO銘柄をひとつの点数やグレードだけで表すと、「なぜその評価なのか」が見えにくくなります。また、超短期で気になる点と、長期で気になる点は、同じ銘柄でも異なることが少なくありません。
      </P>
      <P>
        そこで「IPO企業情報AI分析レポート」では、あえて1つの結論にまとめず、9つの軸に分けて評価する設計にしました。プロが見ているような視点を、個人投資家の方にも多角的にお届けしたい、という想いによるものです。
      </P>

      <H2>各軸のレポートの作られ方</H2>
      <P>
        各軸のレポートは、目論見書(EDINET)などの一次情報をもとにAIが作成しています。良い点だけを並べるのではなく、注意点やリスク、投資する場合に気をつけたい点もあわせて整理する構成にしています。
      </P>
      <P>
        「買うべき」「買わないほうがいい」といった断定はせず、判断のための材料をお届けすることを心がけています。分析の裏側にある設計の工夫は、<InlineLink href="/ai-reliability">AIが「嘘をつかない」ための設計思想</InlineLink>でご紹介しています。
      </P>
      <RiskCategoryCard
        items={[
          {
            severity: "高",
            category: "技術・セキュリティ",
            title: "システム障害リスク",
            desc: "基幹システムに障害が発生した場合、サービス停止や信頼低下につながる可能性があります。",
          },
          {
            severity: "高",
            category: "市場・人口動態",
            title: "市場成長の不確実性",
            desc: "想定する市場規模が、法制度や需要動向により計画どおりに拡大しない可能性があります。",
          },
          {
            severity: "中",
            category: "資金調達",
            title: "資金調達リスク",
            desc: "継続的な投資資金の調達に失敗した場合、事業計画の見直しを迫られる可能性があります。",
          },
          {
            severity: "中",
            category: "法的規制",
            title: "規制変更リスク",
            desc: "関連法令が改正された場合、事業運営や収益計画に影響が生じる可能性があります。",
          },
          {
            severity: "中",
            category: "人材・組織",
            title: "人材確保リスク",
            desc: "専門人材の採用が難航した場合、事業拡大のペースに影響する可能性があります。",
          },
        ]}
      />

      <H2>9軸のもとになったデータは、無料で確認できます</H2>
      <P>
        9軸それぞれの参考資料は、折りたたみなしで無料公開しています。会員登録前に、どんな観点で分析しているかを確認したい方は、<InlineLink href="/9axis-free-guide">9軸の参考資料の無料公開ページ</InlineLink>をご覧ください。
      </P>

      <H2>まとめ</H2>
      <UL>
        <li>9軸分析メソッドは、超短期・短期・長期の3つの時間軸に、それぞれ3つずつの視点を割り振った分析の枠組みです。</li>
        <li>各軸のレポートは、目論見書などの一次情報をもとに、良い点・注意点・投資する場合の留意点をあわせて整理しています。</li>
        <li>投資の判断そのものは断定せず、材料としてお届けしています。</li>
      </UL>

      <H2>9軸の分析を、実際の銘柄で見てみてください</H2>
      <P>無料会員登録は課金不要です。毎月2銘柄は、無料でご覧いただけます。</P>
      <CtaButton href={APP_URL}>無料で分析を見てみる</CtaButton>

      <RelatedLinks
        links={[
          { href: "/edinet-ai-analysis", label: "AIによる目論見書(EDINET)自動解析の仕組み" },
          { href: "/9axis-free-guide", label: "9軸の参考資料を無料公開" },
          { href: "/investment-styles", label: "IPO投資はデイトレ・短期・長期でどう違う?" },
        ]}
      />

      <Small>
        本サイトの内容は、投資の勧誘や助言ではなく、判断材料の提供を目的としています。最終的な投資判断は、ご自身の責任でお願いします。
      </Small>
    </article>
  );
}
