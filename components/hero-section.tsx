import Image from "next/image"
import { TrendingUp } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-secondary to-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <TrendingUp className="h-4 w-4" />
              国交省「標準運賃」準拠
            </div>
            <h1 className="mb-6 text-balance text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              その運賃、
              <br />
              <span className="text-primary">もらい損ねて</span>いませんか？
            </h1>
            <p className="mb-4 text-xl font-medium text-foreground sm:text-2xl">
              国交省の「標準運賃」を根拠に、
              <br className="hidden sm:block" />
              利益を取り戻す。
            </p>
            <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              燃料高騰・人件費増を荷主に転嫁できない社長へ。
              <br className="hidden sm:block" />
              最短3日で「角を立てない」交渉資料を作成します。
            </p>
          </div>
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl shadow-xl">
              <Image
                src="/images/truck-highway-dusk.jpg"
                alt="夕暮れの高速道路を走行する大型トラック"
                width={500}
                height={350}
                className="h-auto w-full object-cover"
                priority
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
