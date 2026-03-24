"use client"

import { Button } from "@/components/ui/button"

export function MobileStickyCta() {
  const scrollToDiagnosis = () => {
    document.getElementById("diagnosis")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-3 backdrop-blur-sm sm:hidden">
      <Button
        onClick={scrollToDiagnosis}
        size="lg"
        className="w-full bg-gradient-to-r from-amber-500 to-orange-500 py-4 text-sm font-bold text-white shadow-lg"
      >
        運送会社向け 値上げ可能額を確認
      </Button>
    </div>
  )
}
