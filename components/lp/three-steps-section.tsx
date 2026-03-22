import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Eye, FileText, MessageSquare } from "lucide-react"

const steps = [
  {
    number: "1",
    label: "可視化",
    title: "最短で簡易診断",
    description: "距離・車格・現在運賃から適正値との乖離を体感（デモ用固定表の試算）",
    icon: Eye,
  },
  {
    number: "2",
    label: "論理武装",
    title: "精密な原価・運賃レポート",
    description: "公示データの動きと貴社の実態を掛け合わせ、社内に持ち帰りやすい根拠資料に",
    icon: FileText,
  },
  {
    number: "3",
    label: "実戦",
    title: "交渉シナリオ",
    description: "「言われたらこう返す」運送業特有の押し問答への対応をシナリオ化",
    icon: MessageSquare,
  },
]

export function ThreeStepsSection() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-xl font-bold text-foreground sm:text-2xl">
          角を立てない支援の流れ
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon
            return (
              <Card key={step.number} className="relative border-border bg-card">
                <CardHeader className="pb-3">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent">
                      <Icon className="h-5 w-5 text-accent-foreground" />
                    </div>
                    <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Step {step.number}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-accent-foreground">{step.label}</p>
                  <CardTitle className="text-base text-foreground">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
