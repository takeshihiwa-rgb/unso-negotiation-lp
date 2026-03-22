import { AlertCircle, Clock, FileQuestion } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const painPoints = [
  {
    icon: AlertCircle,
    title: "値上げを言ったら仕事が切れる…",
    description:
      "長年の取引先との関係を壊したくない。でも、このままでは経営が立ち行かない…。そんなジレンマを抱えていませんか？",
  },
  {
    icon: FileQuestion,
    title: "根拠資料を作る時間がない…",
    description:
      "国交省の標準運賃は知っているけど、自社の状況に当てはめた資料を作る余裕がない。日々の運行管理で精一杯…。",
  },
  {
    icon: Clock,
    title: "どう切り出せばいいか分からない…",
    description:
      "「値上げしてほしい」と言うだけでは通じない。荷主を納得させる具体的なアプローチが分からない…。",
  },
]

export function PainSection() {
  return (
    <section className="bg-secondary py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="mb-4 text-balance text-2xl font-bold text-foreground sm:text-3xl">
            こんなお悩み、ありませんか？
          </h2>
          <p className="text-muted-foreground">
            多くの運送会社経営者が直面している課題です
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {painPoints.map((pain, index) => (
            <Card
              key={index}
              className="border-border bg-card transition-shadow hover:shadow-md"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10">
                  <pain.icon className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {pain.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {pain.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
