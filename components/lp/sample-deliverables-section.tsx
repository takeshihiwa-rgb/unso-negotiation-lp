import Image from "next/image"

const samples = [
  { src: "/images/sample-cover.png", alt: "レポート表紙" },
  { src: "/images/sample-cost-structure.png", alt: "コスト構造の変容分析" },
  { src: "/images/sample-summary.png", alt: "エグゼクティブ・サマリー" },
  { src: "/images/sample-bridge.png", alt: "適正運賃ブリッジ" },
] as const

export function SampleDeliverablesSection() {
  return (
    <section className="bg-white px-5 py-14 sm:py-16">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 text-center text-sm font-medium text-amber-600">
          納品物のサンプル
        </p>
        <h2 className="mb-3 text-center text-xl font-bold text-slate-900 sm:text-2xl">
          こんな資料をお届けします
        </h2>
        <p className="mb-10 text-center text-sm text-slate-500">
          そのまま荷主への提出資料として使えます
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {samples.map(({ src, alt }) => (
            <div
              key={src}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
              <div className="px-4 py-3">
                <p className="text-sm font-medium text-slate-700">{alt}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-xs text-slate-400">
          ※実際の納品物から抜粋（一部マスク済み）
        </p>
      </div>
    </section>
  )
}
