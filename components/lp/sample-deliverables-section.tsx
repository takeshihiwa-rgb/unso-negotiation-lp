import Image from "next/image"

const samples = [
  {
    src: "/samples/01-cover.png",
    title: "表紙",
    description:
      "運賃適正化を「事業継続投資」「サプライチェーン安定化」として提示します。2024年問題やコンプライアンスへの言及を含み、荷主の経営層・購買にそのまま回せる格式です。",
  },
  {
    src: "/samples/03-waterfall.png",
    title: "コスト因数分解（加重平均の証明）",
    description:
      "ウォーターフォールで人件費・燃料・車両・管理費の積み上げを示します。公インデックスと自社原価構成比を掛け合わせたモデルで、ベースコスト上昇を数式として説明します。",
  },
  {
    src: "/samples/04-gap-analysis.png",
    title: "ギャップ分析",
    description:
      "現行運賃・実勢運賃・国の基準運賃を並べ、マイナスギャップを明示します。「安い」ではなく、告示と相場のいずれと比較しても低位に留まっている異常値であることを示します。",
  },
  {
    src: "/samples/05-proposal-amount.png",
    title: "ご提案額の根拠（積み上げ）",
    description:
      "現行運賃に、原価ベース補正と将来リスク（安定確保プレミアム等）を足し算で提示します。感覚ではなく、ブロックごとの根拠で稟議に耐える説明にします。",
  },
  {
    src: "/samples/06-management-decision.png",
    title: "経営判断の要請",
    description:
      "運賃適正化に合意した場合のメリット（優先配車・荷主責任リスクの回避など）と、据え置き時のリスクを対比します。経営層の意思決定に必要な「比較の軸」を渡します。",
  },
  {
    src: "/samples/07-partnership.png",
    title: "パートナーシップのお約束（締め）",
    description:
      "優先配車・コンプライアンス・品質維持を三点で提示し、単なる値上げではなく「サプライを止めないための投資」として締めます。荷主側の社内説明に使えるトーンです。",
  },
] as const

export function SampleDeliverablesSection() {
  return (
    <section className="bg-white px-5 py-14 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-center text-sm font-medium text-amber-600">
          納品物のサンプル
        </p>
        <h2 className="mb-3 text-center text-xl font-bold text-slate-900 sm:text-2xl">
          こんな資料をお届けします
        </h2>
        <p className="mb-10 text-center text-sm text-slate-500">
          そのまま荷主への提出資料として使えます
        </p>

        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10">
          {samples.map(({ src, title, description }, i) => (
            <li key={src} className="flex flex-col">
              <div className="mb-2 flex items-baseline gap-2">
                <span className="text-xs font-bold tabular-nums text-amber-600">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-base font-bold leading-snug text-slate-900">{title}</h3>
              </div>
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-sm">
                <Image
                  src={src}
                  alt={`納品サンプル：${title}`}
                  fill
                  className="object-contain object-top"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {description}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-center text-xs text-slate-400">
          ※実際の納品物から抜粋（一部マスク済み）
        </p>
      </div>
    </section>
  )
}
