import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle, Shield } from "lucide-react"

const benefits = [
  "初回相談は完全無料",
  "最短3日で診断完了",
  "強引な営業は一切なし",
]

export function CTASection() {
  return (
    <section className="bg-primary py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary-foreground/20 px-4 py-2 text-sm font-medium text-primary-foreground">
            <Shield className="h-4 w-4" />
            無料診断
          </div>

          <h2 className="mb-6 text-balance text-2xl font-bold text-primary-foreground sm:text-3xl lg:text-4xl">
            まずは自社の
            <br className="sm:hidden" />
            「もらい損ね」を詳しく知る
          </h2>

          <p className="mb-8 text-lg text-primary-foreground/80">
            無料の詳細診断で、標準運賃との正確な差額と
            <br className="hidden sm:block" />
            改善のための具体的なアクションをお伝えします。
          </p>

          <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-primary-foreground/90"
              >
                <CheckCircle className="h-4 w-4 text-primary-foreground" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="h-14 gap-2 bg-card px-8 text-lg font-semibold text-primary shadow-lg transition-all hover:bg-card/90 hover:shadow-xl"
          >
            無料診断を予約する
            <ArrowRight className="h-5 w-5" />
          </Button>

          <p className="mt-6 text-sm text-primary-foreground/60">
            ※ お電話・メールにてご連絡いたします
          </p>
        </div>
      </div>
    </section>
  )
}
