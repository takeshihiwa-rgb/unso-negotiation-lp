"use client"

import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">適</span>
          </div>
          <span className="text-lg font-bold text-foreground">
            適正運賃診断
          </span>
        </div>
        <Button className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
          <Phone className="h-4 w-4" />
          <span className="hidden sm:inline">お問い合わせ</span>
          <span className="sm:hidden">相談</span>
        </Button>
      </div>
    </header>
  )
}
