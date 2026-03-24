import { X } from "lucide-react"

export function ProblemSection() {
  const negatives = ["感覚で話す", "根拠が弱い", "荷主が社内説明できない"]

  return (
    <section className="bg-white px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-10 text-center text-2xl font-bold text-slate-900 sm:text-3xl">
          なぜ値上げが通らないのか？
        </h2>
        <p className="mb-6 text-center text-slate-600">多くの運送会社は</p>

        <div className="space-y-3">
          {negatives.map((text) => (
            <div
              key={text}
              className="flex items-center gap-3 rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-slate-800"
            >
              <X className="h-5 w-5 shrink-0 text-red-500" />
              <span className="font-medium">{text}</span>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-lg font-bold text-slate-900">だから断られます</p>

        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
          <p className="mb-4 text-slate-600">問題はあなたではありません</p>
          <p className="text-lg text-slate-700">
            👉 <span className="font-bold text-red-600">「断られる構造」</span>
            にあります
          </p>
        </div>
      </div>
    </section>
  )
}
