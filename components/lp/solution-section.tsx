import { Search, FileCheck, MessageSquare } from "lucide-react"

export function SolutionSection() {
  const solutions = [
    {
      icon: Search,
      number: "①",
      title: "ズレを可視化",
      description: "原価と運賃の差を数字で明確化",
    },
    {
      icon: FileCheck,
      number: "②",
      title: "否定できない資料に変換",
      description: "公的データベースで裏付け",
    },
    {
      icon: MessageSquare,
      number: "③",
      title: "断られない伝え方を設計",
      description: "関係を壊さず通す",
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
        <p className="mx-auto mb-4 max-w-xl text-slate-300">
          私たちは
          <br />
          <span className="font-bold text-white">荷主が「断れない形」に整えます</span>
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {solutions.map((item) => (
            <div
              key={item.number}
              className="rounded-xl border border-slate-700 bg-slate-800/50 p-6 text-left sm:text-center"
            >
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-amber-500/20 sm:mx-auto">
                <item.icon className="h-7 w-7 text-amber-400" />
              </div>
              <p className="mb-1 text-sm font-bold text-amber-400">{item.number}</p>
              <p className="text-lg font-bold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
