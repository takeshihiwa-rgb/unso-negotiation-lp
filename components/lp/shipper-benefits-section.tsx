export function ShipperBenefitsSection() {
  const benefits = [
    "上司への説明がしやすくなる",
    "感覚ではなく数字で判断できる",
    "社内調整の負担が減る",
  ]

  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="mb-6 text-xl font-bold text-slate-900 sm:text-2xl">
            {"荷主側にもメリットがあります"}
          </h2>
          
          <div className="mb-8 space-y-4 text-base leading-relaxed text-slate-600">
            <p>
              {"本サービスは「値上げのお願い」ではなく"}
              <br />
              <span className="font-bold text-slate-900">
                {"荷主の社内決裁が通る形に整えるための資料"}
              </span>
              {"です"}
            </p>
          </div>

          <div className="mb-8 mx-auto max-w-md rounded-lg border border-slate-200 bg-white px-4 py-5 text-left">
            <p className="mb-2 text-sm font-bold text-slate-900">
              {"なぜ荷主の社内決裁に効くのか"}
            </p>
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              {
                "当社サービスは大手製造業で物流・生産・調達の稟議を知り尽くした実績を持っています。"
              }
            </p>
          </div>

          <p className="mb-8 text-base leading-relaxed text-slate-600">
            {"そのため、荷主担当者にとっても"}
          </p>

          <div className="mb-8 space-y-3">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="mx-auto flex max-w-md items-center gap-3 rounded-lg border border-slate-200 bg-white px-4 py-3"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                  {"✓"}
                </div>
                <span className="text-slate-700">{benefit}</span>
              </div>
            ))}
          </div>

          <p className="text-sm text-slate-500">
            {"というメリットがあります"}
          </p>

          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-6">
            <p className="text-base leading-relaxed text-slate-700">
              {"結果として、無理な交渉ではなく"}
              <br />
              <span className="font-bold text-amber-700">
                {"双方にとって納得できる形"}
              </span>
              {"で運賃改定が進みます"}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
