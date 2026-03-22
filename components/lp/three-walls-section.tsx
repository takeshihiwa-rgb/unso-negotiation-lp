import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const walls = [
  {
    number: "1",
    title: "原価が複雑すぎる",
    honesty: "燃料・人件費・修繕…どこまで根拠にすればいいか分からない",
    essence: "数字の切り出し方が定まらず、資料化が遅れる",
    direction: "運行・コストの情報を前提に、公示データと掛け合わせて説明可能な形に整理",
  },
  {
    number: "2",
    title: "交渉するのが怖い",
    honesty: "言った途端、仕事が減るのではないか",
    essence: "感情論に聞こえやすく、社内で通しにくい",
    direction: "感情ではなく、第三者も追いうるロジックに変換",
  },
  {
    number: "3",
    title: "標準運賃だけでは通らない",
    honesty: "「目安でしょ？」と言われて終わる",
    essence: "単一指標では反論の余地が残る",
    direction: "複数の公示系列を束ね、担当者が上司に説明しやすい資料にする",
  },
]

export function ThreeWallsSection() {
  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-10 text-center text-xl font-bold text-foreground sm:text-2xl">
          値上げの前に、まず立ちはだかる三つの壁
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {walls.map((wall) => (
            <Card key={wall.number} className="border-border bg-card">
              <CardHeader className="pb-3">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {wall.number}
                </div>
                <CardTitle className="text-lg text-foreground">{wall.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <p className="mb-1 font-medium text-muted-foreground">本音</p>
                  <p className="text-foreground">{wall.honesty}</p>
                </div>
                <div>
                  <p className="mb-1 font-medium text-muted-foreground">本質</p>
                  <p className="text-foreground">{wall.essence}</p>
                </div>
                <div>
                  <p className="mb-1 font-medium text-accent-foreground">解決の方向</p>
                  <p className="text-foreground">{wall.direction}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
