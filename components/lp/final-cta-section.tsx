"use client"

import { Button } from "@/components/ui/button"

export function FinalCtaSection() {
  const scrollToDiagnosis = () => {
    const element = document.getElementById("diagnosis")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="bg-slate-900 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">
          このまま損し続けますか？
        </h2>
        <p className="mb-8 text-slate-300">
          まずは
          <br />
          <span className="font-bold text-white">あなたの損失額を確認してください</span>
        </p>

        <Button
          onClick={scrollToDiagnosis}
          size="lg"
          className="group relative w-full overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 px-10 py-7 text-lg font-bold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40 sm:w-auto sm:px-14"
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            <span className="rounded bg-white/20 px-2 py-0.5 text-sm">無料</span>
            損失額を今すぐ確認（1分）
          </span>
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
        </Button>

        <div className="mt-16 space-y-1 text-xs text-slate-500">
          <p>© 2026 運賃交渉支援サービス</p>
          <p className="text-slate-400">Product by NicheBase</p>
        </div>
      </div>
    </section>
  )
}
