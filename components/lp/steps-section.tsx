import { Search, FileText, MessageCircle, ArrowDown } from "lucide-react"

export function StepsSection() {
  const steps = [
    {
      icon: Search,
      number: "1",
      title: "ズレを可視化",
      description: "原価と標準運賃のギャップを数字で明確化",
    },
    {
      icon: FileText,
      number: "2",
      title: "否定できない資料に変換",
      description: "公的データで社内決裁が通る形に整備",
    },
    {
      icon: MessageCircle,
      number: "3",
      title: "断られない交渉設計",
      description: "関係を壊さず、納得される伝え方を具体化",
    },
  ]

  return (
    <section className="bg-slate-50 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 text-center text-sm font-medium uppercase tracking-wider text-amber-600">
          プロセス
        </p>
        <h2 className="mb-12 text-center text-xl font-bold text-slate-900 sm:text-2xl">
          交渉が通る<span className="text-amber-600">仕組み</span>
        </h2>

        <div className="relative space-y-6">
          {steps.map((step, index) => (
            <div key={step.number}>
              <div className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-shadow hover:shadow-md">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 text-xl font-bold text-white shadow-lg">
                  {step.number}
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="mb-1 text-base font-bold text-slate-900 sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {step.description}
                  </p>
                </div>
                <step.icon className="hidden h-8 w-8 shrink-0 text-amber-500 sm:block" />
              </div>
              {index < steps.length - 1 && (
                <div className="flex justify-center py-2">
                  <ArrowDown className="h-5 w-5 text-slate-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
