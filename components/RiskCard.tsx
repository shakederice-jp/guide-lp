type RiskItem = {
  severity: "高" | "中";
  category: string;
  title: string;
  desc: string;
};

const SEVERITY_STYLE: Record<RiskItem["severity"], { bg: string; border: string; dot: string; badge: string }> = {
  高: {
    bg: "bg-red-50",
    border: "border-red-300",
    dot: "bg-red-500",
    badge: "bg-red-500 text-white",
  },
  中: {
    bg: "bg-amber-50",
    border: "border-amber-300",
    dot: "bg-amber-500",
    badge: "bg-amber-500 text-white",
  },
};

export function RiskCategoryCard({ items }: { items: RiskItem[] }) {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-brand-pale bg-white">
      <div className="border-b border-brand-pale bg-brand-cream px-5 py-4">
        <p className="font-heading text-base font-bold text-brand-tealDark">
          ⚠ 事業等のリスク(重要度別)
        </p>
        <p className="mt-1 text-xs text-brand-subtle">
          目論見書に記載された事業リスク要因を、技術・セキュリティ・市場・人口動態・資金調達・法的規制・人材・組織のカテゴリ別に整理した例
        </p>
      </div>
      <div className="space-y-3 p-4">
        {items.map((item, i) => {
          const s = SEVERITY_STYLE[item.severity];
          return (
            <div key={i} className={`rounded-xl border ${s.border} ${s.bg} p-4`}>
              <div className="mb-2 flex items-center gap-2">
                <span className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-bold ${s.badge}`}>
                  <span className={`h-1.5 w-1.5 rounded-full bg-white`} />
                  {item.severity}
                </span>
                <span className="rounded-full bg-white px-2 py-0.5 text-xs text-brand-subtle">
                  {item.category}
                </span>
              </div>
              <p className="mb-1 font-bold text-brand-ink">{item.title}</p>
              <p className="text-sm text-brand-ink">{item.desc}</p>
            </div>
          );
        })}
      </div>
      <p className="bg-white px-4 py-2 text-center text-xs text-brand-subtle">
        サンプルデータによる例示です
      </p>
    </div>
  );
}
