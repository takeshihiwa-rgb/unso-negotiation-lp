import { ClipboardCheck, FileText, MessageSquare, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "適正運賃診断",
    description:
      "貴社の運行データをもとに、国交省の標準運賃と比較。現在の運賃との乖離を明確に数値化します。",
    highlight: "最短3日で完了",
  },
  {
    icon: FileText,
    number: "02",
    title: "交渉資料の自動生成",
    description:
      "荷主様への提示用資料を自動作成。標準運賃の根拠、燃料費・人件費の推移など、説得力のある資料をお渡しします。",
    highlight: "そのまま提出可能",
  },
  {
    icon: MessageSquare,
    number: "03",
    title: "交渉シナリオ提供",
    description:
      "「どう切り出すか」「反論への対処法」など、実践的な交渉の進め方をアドバイス。角を立てずに交渉を進めるノウハウをお伝えします。",
    highlight: "成功事例ベース",
  },
]

export function SolutionSection() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-success/10 px-4 py-2 text-sm font-medium text-success">
            <ArrowRight className="h-4 w-4" />
            解決策
          </div>
          <h2 className="mb-4 text-balance text-2xl font-bold text-foreground sm:text-3xl">
            3ステップで「適正運賃」を実現
          </h2>
          <p className="text-muted-foreground">
            私たちが提供するのは、交渉を成功に導くための具体的なツールです
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="absolute left-0 right-0 top-16 hidden h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block" />

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  {/* Step number circle */}
                  <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-card bg-primary shadow-lg">
                    <step.icon className="h-7 w-7 text-primary-foreground" />
                  </div>

                  {/* Step number badge */}
                  <div className="mb-4 inline-flex items-center rounded-full bg-secondary px-3 py-1">
                    <span className="text-sm font-semibold text-primary">STEP {step.number}</span>
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-foreground">{step.title}</h3>

                  <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>

                  <div className="inline-flex items-center rounded-lg bg-primary/10 px-4 py-2">
                    <span className="text-sm font-medium text-primary">{step.highlight}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
