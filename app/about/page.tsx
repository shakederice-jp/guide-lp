import type { Metadata } from "next";
import { H2, P, UL, InlineLink } from "@/components/Prose";

export const metadata: Metadata = {
  title: "運営者情報|大手町調査室九課",
};

const APP = "https://ipo.finance-tower.com";

export default function AboutPage() {
  return (
    <article>
      <h1 className="mb-6 font-heading text-3xl font-bold text-brand-tealDark">
        運営者情報
      </h1>

      <P>
        本サイトは、IPO(新規上場)銘柄をAIで分析するWebサービス「IPO企業情報AI分析レポート」のご案内サイトです。
      </P>

      <div className="mb-6 overflow-hidden rounded-xl border border-brand-pale">
        <table className="w-full text-left text-sm">
          <tbody>
            <tr className="border-b border-brand-pale">
              <th className="w-1/3 bg-brand-cream px-4 py-3 font-medium text-brand-tealDark">
                サイト名・運営
              </th>
              <td className="px-4 py-3">大手町調査室九課</td>
            </tr>
            <tr className="border-b border-brand-pale">
              <th className="w-1/3 bg-brand-cream px-4 py-3 font-medium text-brand-tealDark">
                お問い合わせ
              </th>
              <td className="px-4 py-3">
                サービスのお問い合わせページよりご連絡ください(
                <InlineLink href={`${APP}/contact`}>{APP}/contact</InlineLink>)
              </td>
            </tr>
            <tr>
              <th className="w-1/3 bg-brand-cream px-4 py-3 font-medium text-brand-tealDark">
                運営サービス
              </th>
              <td className="px-4 py-3">
                IPO企業情報AI分析レポート(
                <InlineLink href={APP}>{APP}</InlineLink>)
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <H2>事業内容</H2>
      <P>
        IPO銘柄について、目論見書(EDINET)などの一次情報をもとにAIが9つの軸で分析しています。その結果を、個人投資家の皆さまに提供しています。
      </P>

      <H2>ご利用にあたって</H2>
      <UL>
        <li>本サイトおよびサービスの分析・スコアは、AIによる試算値です。投資の勧誘や助言ではありません。</li>
        <li>最終的な投資判断は、ご自身の責任のもとで行ってください。</li>
        <li>本サイトの内容の無断転載・複製・スクレイピングを禁じます。</li>
        <li>サービスの料金・お申し込み・キャンセルなどの詳細は、サービスのサイトでご確認ください。</li>
      </UL>

      <H2>関連ページ</H2>
      <UL>
        <li><InlineLink href="/privacy">プライバシーポリシー(本サイト)</InlineLink></li>
        <li><InlineLink href={`${APP}/terms`}>サービスの利用規約</InlineLink></li>
        <li><InlineLink href={`${APP}/privacy`}>サービスのプライバシーポリシー</InlineLink></li>
        <li><InlineLink href={`${APP}/contact`}>サービスのお問い合わせ</InlineLink></li>
      </UL>
    </article>
  );
}
