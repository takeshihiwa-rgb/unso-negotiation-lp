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

        {/* 中段：公的データの土台 */}
        <div className="mb-10 rounded-xl border border-slate-700 bg-slate-800/50 px-6 py-8 sm:px-8">
          <p className="mb-6 text-center text-sm font-medium leading-relaxed text-slate-200 sm:text-base">
            土台は官庁・日本銀行等の公表指標です。
          </p>
          <ul className="mx-auto max-w-xl space-y-3 sm:max-w-none">
            {dataSources.map((src) => (
              <li key={src} className="flex items-center gap-3 text-base text-slate-200">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500/20 text-xs text-amber-400">
                  ✓
                </span>
                {src}
              </li>
            ))}
          </ul>
          <p className="mt-8 text-center text-base font-bold leading-relaxed text-amber-400 sm:text-left">
            公的根拠で筋を立て、荷主が上司に説明できる形にする。
            <br />
            反論の余地を構造で潰す。それが「断られない」理由です。
          </p>
        </div>

        {/* 下段：監修体制＋監修者の想い（1カード・全幅） */}
        <div className="overflow-hidden rounded-2xl border border-slate-700 bg-slate-800/40 shadow-lg">
          <div className="relative">
            <div
              className="pointer-events-none absolute inset-0 bg-[url('/supervision-bg.png')] bg-cover bg-[center_20%] opacity-[0.12]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/88 to-slate-900/92"
              aria-hidden
            />
            <div className="relative z-10 px-6 py-8 text-center sm:px-10 sm:py-10 md:text-left">
              <p className="text-xs font-semibold tracking-wide text-amber-400">監修体制</p>
              <p className="mt-3 text-lg font-bold leading-relaxed text-white sm:text-xl">
                2兆円規模の大手メーカー現役課長が監修
              </p>
              <p className="mt-3 text-sm text-slate-400">稟議に耐える観点を入れています</p>
            </div>
          </div>

          <figure className="border-t border-slate-700 bg-slate-900/35 px-6 py-8 sm:px-10">
            <blockquote className="text-sm font-medium leading-relaxed text-slate-200 sm:text-base">
              <p>
                「私はメーカー側で何百もの稟議を見てきました。通る資料には、共通の『型』があります。運送会社様が持つ現場の価値を、荷主の言葉（ロジック）に翻訳して届けたい。それがこのサービスの原点です。」
              </p>
            </blockquote>
            <figcaption className="mt-4 text-xs text-slate-500">監修者より</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
