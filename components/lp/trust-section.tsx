import { BarChart3, Shield, Eye } from "lucide-react"

export function TrustSection() {
  const trustItems = [
    {
      icon: BarChart3,
      title: "公的データ活用",
    },
    {
      icon: Shield,
      title: "大手メーカー物流課長監修",
    },
    {
      icon: Eye,
      title: "荷主視点設計",
    },
  ]

  return (
    <section className="bg-white px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {trustItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-700">
              <item.icon className="h-5 w-5 text-amber-600" />
              <span className="text-sm font-medium">{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
