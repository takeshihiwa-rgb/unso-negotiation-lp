"use client"

import { Button } from "@/components/ui/button"
import { TrendingDown } from "lucide-react"

export function PainVisualizationSection() {
  const scrollToDiagnosis = () => {
    const element = document.getElementById("diagnosis")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="bg-slate-900 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-red-500/40 bg-red-950/40 px-4 py-1.5 text-sm text-red-200">
          <TrendingDown className="h-4 w-4" />
          痛みの可視化
        </div>
        <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl">
          知らないだけで、損しています
        </h2>
        <p className="mb-10 text-slate-400">例えば</p>

        <div className="rounded-2xl border border-slate-700 bg-slate-800/80 p-6 text-left shadow-xl sm:p-8">
          <ul className="space-y-2 text-slate-200">
            <li>・10t / 200km</li>
            <li>・現在運賃：35,000円</li>
          </ul>
          <p className="mt-6 text-lg text-amber-400">
            👉 本来あるべき運賃：42,000円
          </p>
          <div className="my-8 border-t border-slate-600" />
          <p className="text-xl font-bold text-white sm:text-2xl">
            差額：<span className="text-red-400">▲7,000円 / 回</span>
          </p>
          <p className="mt-6 text-slate-300">
            👉 月20回運行なら
            <br />
            <span className="text-xl font-bold text-red-400">▲140,000円 / 月の取りこぼし</span>
          </p>
          <p className="mt-6 text-slate-300">
            👉 年間
            <br />
            <span className="text-2xl font-bold text-red-400">▲168万円の損失</span>
          </p>
        </div>

        <p className="mt-10 text-lg font-medium text-slate-300">
          あなたはこの状態で
          <br />
          何年運行を続けますか？
        </p>

        <Button
          onClick={scrollToDiagnosis}
          size="lg"
          className="mt-10 w-full bg-gradient-to-r from-amber-500 to-orange-500 py-7 text-base font-bold text-white shadow-lg shadow-orange-500/30 hover:scale-[1.02] sm:w-auto sm:px-10"
        >
          無料で損失額を確認する（1分）
        </Button>
      </div>
    </section>
  )
}
