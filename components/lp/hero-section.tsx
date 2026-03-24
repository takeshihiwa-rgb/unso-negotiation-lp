"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Fuel, Users, TrendingDown } from "lucide-react"

const realities = [
  { icon: Fuel, text: "燃料は上がっている" },
  { icon: Users, text: "人件費も上がっている" },
  { icon: TrendingDown, text: "でも運賃は据え置き" },
] as const

export function HeroSection() {
  const scrollToDiagnosis = () => {
    document.getElementById("diagnosis")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-truck-bg.jpg"
          alt="highway truck"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-900/95" />
      </div>

      <div className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 py-12">
        <div className="mx-auto max-w-xl text-center">
          <p className="mb-4 inline-block rounded-full border border-amber-300/40 bg-amber-500/20 px-4 py-1.5 text-sm font-semibold text-amber-200">
            運送会社向け｜運賃値上げ交渉支援サービス
          </p>
          <h1 className="mb-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            値上げしないと赤字。
          </h1>
          <p className="mb-8 text-xl leading-relaxed text-slate-200 sm:text-2xl">
            でも、言い方を間違えると切られる。
          </p>
          <p className="mb-8 text-base leading-relaxed text-slate-300 sm:text-lg">
            公的データを根拠に、荷主が断りにくい交渉資料を作成します。
          </p>

          <div className="mb-6 space-y-3 sm:mx-auto sm:max-w-sm">
            {realities.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3 text-lg text-slate-300">
                <Icon className="h-6 w-6 shrink-0 text-amber-400/80" />
                <span>{text}</span>
              </div>
            ))}
          </div>
          <p className="mb-10 text-lg font-medium text-slate-300 sm:text-xl">
            → このギャップ、説明できますか？
          </p>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-6 text-slate-300">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-amber-400 sm:text-4xl">+12%</span>
              <span className="text-sm">平均改善率</span>
            </div>
            <div className="hidden h-6 w-px bg-slate-600 sm:block" />
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-amber-400 sm:text-4xl">25年</span>
              <span className="text-sm">物流実務経験</span>
            </div>
          </div>

          <Button
            onClick={scrollToDiagnosis}
            size="lg"
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 py-8 text-lg font-bold text-white shadow-lg shadow-orange-500/30 hover:scale-[1.02] sm:w-auto sm:px-14 sm:text-xl"
          >
            運送会社向け 無料診断を始める（30秒）
          </Button>
          <p className="mt-4 text-sm text-slate-400">※営業電話は一切しません</p>
        </div>
      </div>
    </section>
  )
}
