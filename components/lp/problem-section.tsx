import { HelpCircle } from "lucide-react"

export function ProblemSection() {
  return (
    <section className="bg-white px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-6">
          {[
            "そのやり方で本当に値上げできていますか？",
            "関係が悪くなるのが怖くて踏み込めていませんか？",
            "何を根拠に話せばいいか分からなくないですか？",
          ].map((text, i) => (
            <div 
              key={i} 
              className="flex items-start gap-4 rounded-lg border border-slate-200 bg-slate-50 p-5"
            >
              <HelpCircle className="mt-0.5 h-6 w-6 shrink-0 text-slate-400" />
              <p className="text-lg leading-relaxed text-slate-700">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-lg text-slate-600">
            問題は「交渉力」ではなく、
          </p>
          <p className="mt-3 text-2xl font-bold sm:text-3xl">
            <span className="text-red-600">断られる構造</span>
            <span className="text-slate-900">にあります。</span>
          </p>
        </div>
      </div>
    </section>
  )
}
