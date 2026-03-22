"use client"

import { Button } from "@/components/ui/button"

export function MobileStickyCta() {
  const scrollToDiagnosis = () => {
    const element = document.getElementById("diagnosis")
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur-sm sm:hidden">
      <Button
        onClick={scrollToDiagnosis}
        size="lg"
        className="group relative w-full overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 py-4 text-base font-bold text-white shadow-lg"
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          <span className="rounded bg-white/20 px-2 py-0.5 text-xs">無料</span>
          取りこぼし額を確認する
        </span>
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
      </Button>
    </div>
  )
}
