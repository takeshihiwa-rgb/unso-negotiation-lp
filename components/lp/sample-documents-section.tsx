"use client"

import { FileText, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DeliverableSamplesDialog } from "@/components/deliverable-sample-viewer"

const sampleDocuments = [
  {
    id: 1,
    title: "提案書",
    subtitle: "稟議用",
    sections: [
      "現状の運賃と標準運賃の比較",
      "改定後の運賃案",
      "貴社へのメリット",
    ],
  },
  {
    id: 2,
    title: "分析レポート",
    subtitle: "損失の見える化",
    sections: [
      "車両別コスト構造",
      "距離帯別の標準運賃比較",
      "年間損失額の試算",
      "業界平均との比較",
      "燃料費・人件費の推移",
    ],
  },
  {
    id: 3,
    title: "交渉台本",
    subtitle: "話し方",
    sections: [
      "切り出し方のセリフ例",
      "想定Q&A",
    ],
  },
]

export function SampleDocumentsSection() {
  return (
    <section className="bg-white px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-amber-600">
            サンプル
          </p>
          <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
            納品物のイメージ
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {sampleDocuments.map((doc) => (
            <div
              key={doc.id}
              className="rounded-xl border border-slate-200 bg-slate-50 p-5 text-center"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <p className="font-bold text-slate-900">{doc.title}</p>
              <p className="text-sm text-slate-500">{doc.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <DeliverableSamplesDialog>
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="h-auto flex-col gap-1 border-slate-300 px-8 py-4 sm:flex-row sm:items-center sm:gap-3"
            >
              <span className="flex items-center gap-2 font-medium text-slate-900">
                <Eye className="h-4 w-4 shrink-0" aria-hidden />
                このまま使える資料を見る
              </span>
              <span className="text-sm font-normal text-amber-900">
                → 納品物サンプルに添付
              </span>
            </Button>
          </DeliverableSamplesDialog>
        </div>
      </div>
    </section>
  )
}
