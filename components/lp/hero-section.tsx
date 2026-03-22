"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToDiagnosis = () => {
    const element = document.getElementById("diagnosis")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
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

      <div className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            <span dangerouslySetInnerHTML={{ __html: "値上げしたい。" }} />
            <br />
            <span className="text-amber-400" dangerouslySetInnerHTML={{ __html: "でも関係が壊れるのが怖い。" }} />
          </h1>

          <p className="mb-8 text-lg leading-relaxed text-slate-200 sm:text-xl">
            <span dangerouslySetInnerHTML={{ __html: "その不安を解消し、" }} />
            <br className="sm:hidden" />
            <span className="font-bold" dangerouslySetInnerHTML={{ __html: "荷主が断れない形" }} />
            <span dangerouslySetInnerHTML={{ __html: "で交渉できる資料を作ります。" }} />
          </p>

          <div className="mb-10 flex flex-wrap items-center justify-center gap-6 text-slate-300">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-amber-400 sm:text-3xl">+12%</span>
              <span className="text-sm" dangerouslySetInnerHTML={{ __html: "平均改善率" }} />
            </div>
            <div className="hidden h-8 w-px bg-slate-600 sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-amber-400 sm:text-3xl">25<span dangerouslySetInnerHTML={{ __html: "年" }} /></span>
              <span className="text-sm" dangerouslySetInnerHTML={{ __html: "物流実務経験" }} />
            </div>
          </div>

          <Button
            onClick={scrollToDiagnosis}
            size="lg"
            className="group relative w-full overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 px-10 py-7 text-lg font-bold text-white shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/40 sm:w-auto sm:px-14"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span className="rounded bg-white/20 px-2 py-0.5 text-sm" dangerouslySetInnerHTML={{ __html: "無料" }} />
              <span dangerouslySetInnerHTML={{ __html: "取りこぼし額を確認する" }} />
              <span className="text-sm opacity-80">(1<span dangerouslySetInnerHTML={{ __html: "分" }} />)</span>
            </span>
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
          </Button>

          {mounted && (
            <p className="mt-4 text-sm text-slate-400">
              <span dangerouslySetInnerHTML={{ __html: "しつこい営業は一切行いません" }} />
            </p>
          )}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-slate-400" />
        </div>
      </div>
    </section>
  )
}
