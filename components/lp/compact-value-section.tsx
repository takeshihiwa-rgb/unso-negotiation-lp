import { Eye, BarChart3, FileCheck } from "lucide-react"

const steps = [
  { icon: Eye, tag: "診断", label: "あなたの運賃は適正か？", sub: "証拠で見える化" },
  { icon: BarChart3, tag: "試算", label: "どれだけ値上げ余地があるか？", sub: "公的データで試算" },
  { icon: FileCheck, tag: "分析", label: "なぜその数字になるのか？", sub: "理由を分解して提示" },
] as const

export function CompactValueSection() {
  return (
    <section className="border-b border-slate-100 bg-white px-5 py-12 sm:py-14">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold text-amber-600">このサービスでできること</p>
          <p className="text-lg leading-relaxed text-slate-800 sm:text-xl">
            運賃値上げ交渉に必要な「根拠資料」を作成します。
          </p>
          <p className="mt-2 text-lg font-bold text-slate-900 sm:text-xl">
            問題は「交渉力不足」ではなく「根拠不足」です。
          </p>
          <p className="mt-3 text-base text-amber-700">
            → 根拠があれば、話は変わります。
          </p>
          <p className="mt-2 text-base font-bold text-slate-900">
            そして「難しい原価計算や作業は不要」です。
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {steps.map(({ icon: Icon, tag, label, sub }) => (
            <div
              key={tag}
              className="flex items-start gap-4 rounded-2xl bg-white px-5 py-6 shadow-md sm:flex-col sm:items-center sm:px-5 sm:py-8 sm:text-center"
            >
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-slate-900 sm:mx-auto sm:h-20 sm:w-20">
                <Icon className="h-8 w-8 text-amber-400" />
              </div>
              <div>
                <span className="inline-block rounded-full bg-amber-100 px-3 py-0.5 text-xs font-bold text-amber-700">{tag}</span>
                <p className="text-lg font-bold text-slate-900">{label}</p>
                <p className="mt-1 text-sm text-slate-500">{sub}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-lg bg-amber-50 px-5 py-4 text-center">
          <p className="text-sm leading-relaxed text-amber-950 sm:text-base">
            すべて<span className="font-bold">証拠付き</span>で出します。
            そのまま<span className="font-bold">交渉資料として使えます</span>。
          </p>
        </div>
        <p className="mt-3 text-center text-xs text-slate-400 sm:text-sm">
          標準運賃・物価など公的データで裏付けます
        </p>
      </div>
    </section>
  )
}
