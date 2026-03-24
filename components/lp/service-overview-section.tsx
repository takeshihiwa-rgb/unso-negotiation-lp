"use client"

import { FileText } from "lucide-react"

export function ServiceOverviewSection() {
  const deliverables = [
    {
      name: "提案書",
      description: "そのまま提出可",
    },
    {
      name: "分析レポート",
      description: "損失の見える化",
    },
    {
      name: "交渉シナリオ",
      description: "話し方まで",
    },
  ]

  const flowSteps = [
    {
      step: "1",
      label: "無料診断（1分）",
      desc: "損失額を簡易算出",
    },
    {
      step: "2",
      label: "メールで最小確認",
      desc: "必要最低限のやり取りのみ",
      note: "電話営業なし",
    },
    {
      step: "3",
      label: "資料作成",
      desc: "荷主が断れない形に整えた交渉資料を作成",
    },
    {
      step: "4",
      label: "納品（そのまま使える）",
      desc: "そのまま提出・交渉に使える状態でお渡し",
    },
  ]

  return (
    <section className="bg-white px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-amber-600">
            サービス内容
          </p>
          <h2 className="mb-6 text-xl font-bold text-slate-900 sm:text-2xl lg:text-3xl">
            荷主が断る理由がなくなる資料を作成
          </h2>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm sm:p-8">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
              <FileText className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">納品物</h3>
            </div>
          </div>

          <div className="space-y-4">
            {deliverables.map((item, i) => (
              <div
                key={item.name}
                className="flex items-start gap-4 rounded-lg bg-white p-4"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-white">
                  {i + 1}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{item.name}</p>
                  <p className="text-sm text-slate-600">（{item.description}）</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-2 rounded-lg border border-amber-200 bg-amber-50 p-4 text-center">
            <p className="font-medium text-amber-800">そのまま使えます</p>
            <p className="text-sm text-amber-900/90">営業スキル不要</p>
          </div>
        </div>

        <div className="mt-8">
          <p className="mb-4 text-center text-sm font-medium text-slate-500">
            以下は本サービスに含まれません
          </p>
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { title: "交渉代行", desc: "交渉はお客様ご自身で行っていただきます" },
              { title: "法的対応", desc: "法的トラブルへの対応は含みません" },
              { title: "契約書レビュー", desc: "契約書の作成・確認は含みません" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl border border-slate-200 bg-white p-4 text-center"
              >
                <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <p className="font-bold text-slate-700">{item.title}</p>
                <p className="mt-1 text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="mb-8 text-center text-lg font-bold text-slate-900">
            利用の流れ
          </h3>
          <div className="space-y-4">
            {flowSteps.map((item) => (
              <div key={item.step} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-amber-400">
                  {item.step}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-900">{item.label}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
                  {item.note && (
                    <p className="mt-2 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
                      {item.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-500">
            納品後に請求書を送付いたします
          </p>
        </div>
      </div>
    </section>
  )
}
