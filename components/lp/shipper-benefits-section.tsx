export function ShipperBenefitsSection() {
  const benefits = [
    "上司への説明がしやすい",
    "数字で判断できる",
    "社内調整の負担が減る",
  ]

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="mb-8 text-xl font-bold text-slate-900 sm:text-2xl">
            なぜ荷主も納得するのか？
          </h2>

          <p className="mb-4 text-base leading-relaxed text-slate-600">この資料は</p>
          <div className="mb-6 space-y-2 text-base leading-relaxed text-slate-700">
            <p>
              👉 <span className="text-slate-500">「値上げのお願い」ではなく</span>
            </p>
            <p>
              👉{" "}
              <span className="font-bold text-slate-900">社内決裁が通る資料</span>
              です
            </p>
          </div>

          <div className="mb-10 space-y-3">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="mx-auto flex max-w-md items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                  ✔
                </div>
                <span className="text-left text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>

          <p className="mb-4 text-sm text-slate-500">👉 結果</p>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-base font-bold leading-relaxed text-amber-900">
              双方納得の形で運賃改定が進みます
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
