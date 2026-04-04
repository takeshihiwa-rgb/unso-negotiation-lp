import { BarChart3, Briefcase, Shield } from "lucide-react"

const badges = [
  { icon: BarChart3, label: "公的根拠が軸。荷主に「感覚論」とは言わせない。" },
  { icon: Briefcase, label: "物価・人件費・運賃を一本の論理にし、稟議の穴を塞ぐ。" },
  { icon: Shield, label: "大手メーカー現役課長が監修。現場で通る言い方になる。" },
] as const

const dataSources = [
  "国土交通省 標準的な運賃（公示）",
  "総務省 消費者物価指数",
  "厚生労働省 毎月勤労統計",
]

export function CredentialsSection() {
  return (
    <section className="bg-slate-900 px-5 py-14 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-center text-xl font-bold text-white sm:text-2xl">
          なぜ、この資料なら値上げ交渉が通るのか
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
              <p className="text-sm font-bold leading-snug text-white whitespace-pre-line sm:text-base">
                {label}
              </p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-8 sm:flex-row sm:gap-10">
          <div className="w-full shrink-0 sm:w-auto">
            <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/50 text-center shadow-lg sm:w-56">
              <div
                className="pointer-events-none absolute inset-0 bg-[url('/supervision-bg.png')] bg-cover bg-[center_15%] opacity-[0.09]"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/75 to-slate-900/85"
                aria-hidden
              />
              <div className="relative z-10 px-6 py-6">
                <p className="text-xs font-semibold tracking-wide text-amber-400">監修体制</p>
                <p className="mt-3 text-base font-bold leading-relaxed text-white">
                  2兆円規模の
                  <br />
                  大手メーカー現役課長が監修
                </p>
                <p className="mt-3 text-xs text-slate-400">
                  稟議に耐える観点を
                  <br />
                  入れています
                </p>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <p className="mb-4 text-sm leading-relaxed text-slate-300">
              土台は官庁・日本銀行等の公表指標です。
            </p>
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
            <p className="mt-6 text-base font-bold leading-relaxed text-amber-400">
              公的根拠で筋を立て、荷主が上司に説明できる形にする。
              <br />
              反論の余地を構造で潰す。それが「断られない」理由です。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
