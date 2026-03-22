import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">運賃交渉支援</span>
        </div>
        <Button asChild>
          <a href="#contact">無料相談</a>
        </Button>
      </div>
    </header>
  )
}
