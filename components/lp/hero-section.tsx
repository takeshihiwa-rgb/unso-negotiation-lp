"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Fuel, Users, TrendingDown } from "lucide-react"

const realities = [
  { icon: Fuel, text: "燃料は上がっている" },
  { icon: Users, text: "人件費も上がっている" },
  { icon: TrendingDown, text: "でも運賃は据え置き" },
] as const

/** β版バッジ（md 以上：円形・h1 右上） */
function BetaBadge({ className }: { className?: string }) {
  return (
    <div
      className={className}
      aria-label="β版限定・特別価格実施中"
      role="img"
    >
      <span
        className="flex h-full w-full select-none flex-col items-center justify-center rounded-full bg-[#E67E22] px-1 text-center font-bold leading-[1.15] text-white shadow-[0_4px_14px_rgba(0,0,0,0.28)] [text-shadow:0_1px_1px_rgba(0,0,0,0.15)]"
        aria-hidden
      >
        <span>β版限定</span>
        <span className="mt-0.5">特別価格</span>
        <span className="mt-0.5">実施中</span>
      </span>
    </div>
  )
}

export function HeroSection() {
  const scrollToDiagnosis = () => {
    document.getElementById("diagnosis")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-truck-bg.jpg"
          alt="highway truck"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/92 via-slate-900/88 to-slate-950/95" />
      </div>

      <div className="relative z-10">
        {/* ターゲット帯：誰向けかを最上部で即認識 */}
        <div className="w-full border-b border-amber-700/50 bg-gradient-to-r from-amber-600 via-amber-500 to-orange-600 px-4 py-3 text-center shadow-md shadow-black/20 sm:py-3.5">
          <p className="mx-auto max-w-4xl text-balance text-sm font-bold leading-snug tracking-tight text-white sm:text-base md:text-lg">
            【フォワーダー・運送会社経営者様へ】 荷主への運賃改定交渉をデータで支援
          </p>
        </div>

        {/* md 未満のみ：帯直下の全幅リボン（はみ出し防止・円形は md 以上のみ） */}
        <div className="border-b border-white/10 md:hidden">
          <p
            role="status"
            aria-label="β版限定・特別価格実施中"
            className="w-full bg-[#E67E22] px-3 py-2.5 text-center text-[11px] font-bold leading-snug text-white shadow-[inset_0_-1px_0_rgba(0,0,0,0.08)] [text-shadow:0_1px_1px_rgba(0,0,0,0.12)] sm:px-4 sm:py-3 sm:text-xs"
          >
            <span className="inline-flex flex-wrap items-center justify-center gap-x-0 gap-y-1">
              <span>β版限定</span>
              <span className="mx-1.5 text-white/55 sm:mx-2" aria-hidden>
                |
              </span>
              <span>特別価格</span>
              <span className="mx-1.5 text-white/55 sm:mx-2" aria-hidden>
                |
              </span>
              <span>実施中</span>
            </span>
          </p>
        </div>

        {/* Primary: 感情フック → 約束（最大） → CTA（ファーストビュー優先） */}
        <div className="relative flex min-h-[min(100svh,880px)] flex-col items-center justify-center px-5 pb-10 pt-10 sm:pb-12 sm:pt-14">
          <div className="mx-auto w-full max-w-4xl text-center">
            <p className="mb-3 inline-block rounded-full border border-amber-300/40 bg-amber-500/20 px-4 py-1.5 text-xs font-semibold text-amber-200 sm:text-sm">
              運送会社向け｜運賃値上げ交渉支援
            </p>

            <p className="mx-auto max-w-lg text-sm font-medium leading-relaxed text-slate-200 [text-shadow:0_1px_12px_rgba(0,0,0,0.45)] sm:text-base">
              値上げしないと赤字。
              <span className="mx-1 text-slate-400 sm:mx-2">／</span>
              でも、言い方を間違えると切られる。
            </p>

            <div className="relative mt-6 sm:mt-7">
              <h1 className="text-balance text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl sm:leading-snug md:text-4xl md:leading-tight lg:text-5xl [text-shadow:0_2px_28px_rgba(0,0,0,0.55)]">
                もう、荷主への交渉で悩みたくない。
              </h1>
              <p className="mx-auto mt-4 max-w-3xl text-balance text-xs font-medium leading-relaxed text-white sm:mt-5 sm:text-sm md:text-lg lg:mt-6 lg:text-2xl [text-shadow:0_1px_16px_rgba(0,0,0,0.45)]">
                公的データを根拠に、荷主が断りにくい交渉資料を作成します。
              </p>
              {/* md 以上のみ：メインコピー右上の円形シール（未満は帯直下の全幅リボン） */}
              <div className="pointer-events-none absolute -top-[40px] -right-[20px] z-10 hidden h-[224px] w-[224px] translate-x-[112px] -translate-y-[224px] rotate-[10deg] md:block md:h-[240px] md:w-[240px] md:translate-x-[120px] md:-translate-y-[240px]">
                <BetaBadge className="h-full w-full text-[22px] leading-[1.12] md:text-2xl" />
              </div>
            </div>

            <Button
              onClick={scrollToDiagnosis}
              size="lg"
              className="mt-8 w-full bg-gradient-to-r from-amber-500 to-orange-500 py-7 text-base font-bold text-white shadow-lg shadow-orange-500/35 hover:scale-[1.02] sm:mt-9 sm:w-auto sm:px-12 sm:py-8 sm:text-lg"
            >
              運送会社向け 無料診断を始める（30秒）
            </Button>
            <p className="mt-3 text-xs text-slate-400 sm:text-sm">※営業電話は一切しません</p>
          </div>
        </div>

        {/* Secondary: 自分ごと化・信頼（メインより一段小さく） */}
        <div className="border-t border-white/10 bg-slate-950/55 px-5 py-8 backdrop-blur-[2px] sm:py-10">
          <div className="mx-auto max-w-xl text-center">
            <div className="space-y-2.5 text-left sm:mx-auto sm:max-w-sm sm:text-left">
              {realities.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-3 text-base text-slate-200">
                  <Icon className="h-5 w-5 shrink-0 text-amber-400/85 sm:h-6 sm:w-6" aria-hidden />
                  <span>{text}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-base font-medium text-slate-200 sm:text-lg">
              → このギャップ、説明できますか？
            </p>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-slate-300">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-amber-400 sm:text-3xl">+12%</span>
                <span className="text-xs sm:text-sm">平均改善率</span>
              </div>
              <div className="hidden h-6 w-px bg-slate-600 sm:block" />
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-amber-400 sm:text-3xl">25年</span>
                <span className="text-xs sm:text-sm">物流実務経験</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
