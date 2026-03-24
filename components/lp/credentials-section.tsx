import { BarChart3, Briefcase, Shield } from "lucide-react"

const badges = [
  { icon: BarChart3, label: "公的データ活用" },
  { icon: Briefcase, label: "25年の物流実務" },
  { icon: Shield, label: "2兆円規模の大手メーカー\n現役課長監修" },
] as const

const dataSources = [
  "国土交通省 標準的な運賃",
  "総務省 消費者物価指数",
  "厚労省 毎月勤労統計",
]

export function CredentialsSection() {
  return (
    <section className="bg-slate-900 px-5 py-14 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-center text-xl font-bold text-white sm:text-2xl">
          なぜ私たちが「根拠」を出せるのか
        </h2>

        <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
          {badges.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/60 px-5 py-5 sm:flex-col sm:items-center sm:px-4 sm:py-6 sm:text-center"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-500/20 sm:h-14 sm:w-14">
                <Icon className="h-6 w-6 text-amber-400" />
              </div>
              <p className="text-base font-bold leading-snug text-white whitespace-pre-line">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-10">
          <div className="w-full shrink-0 sm:w-auto">
            <div className="rounded-2xl border border-slate-700 bg-slate-800/50 px-6 py-6 text-center shadow-lg sm:w-56">
              <p className="text-xs font-semibold tracking-wide text-amber-400">監修体制</p>
              <p className="mt-3 text-base font-bold leading-relaxed text-white">
                2兆円規模の
                <br />
                大手メーカー現役課長が監修
              </p>
              <p className="mt-3 text-xs text-slate-400">
                現場感のある交渉観点を
                <br />
                反映しています
              </p>
            </div>
          </div>

          <div className="flex-1">
            <ul className="space-y-3">
              {dataSources.map((src) => (
                <li key={src} className="flex items-center gap-3 text-base text-slate-200">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xs text-amber-400">
                    ✓
                  </span>
                  {src}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-base font-bold text-amber-400">
              → これらを独自アルゴリズムで統合し、
              <br />
              「顧客が断れない」資料を提案。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
