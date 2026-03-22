import { FileText, BarChart3, MessageSquare } from "lucide-react"

export function SolutionSection() {
  const solutions = [
    {
      icon: BarChart3,
      label: "根拠",
      description: "公的データ",
    },
    {
      icon: FileText,
      label: "資料",
      description: "稟議が通る形",
    },
    {
      icon: MessageSquare,
      label: "伝え方",
      description: "関係を壊さない",
    },
  ]

  return (
    <section className="bg-slate-900 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="mb-4 text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          断られない交渉構造を
          <br />
          <span className="text-amber-400">設計します</span>
        </h2>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {solutions.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-700 bg-slate-800/50 p-6"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/20">
                <item.icon className="h-7 w-7 text-amber-400" />
              </div>
              <p className="text-lg font-bold text-white">{item.label}</p>
              <p className="mt-1 text-sm text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
