"use client"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Calculator, TrendingDown, CheckCircle2, AlertCircle } from "lucide-react"

// 標準運賃ルックアップテーブル（税抜・1運行あたり）
const STANDARD_FARE_TABLE: Record<string, Record<string, number>> = {
  "50": {
    "4t": 28000,
    "10t": 38000,
  },
  "100": {
    "4t": 42000,
    "10t": 56000,
  },
  "200": {
    "4t": 68000,
    "10t": 92000,
  },
}

type DistanceKey = "50" | "100" | "200"
type TruckKey = "4t" | "10t"

export function QuickSimulator() {
  const [distance, setDistance] = useState<DistanceKey | "">("")
  const [truckType, setTruckType] = useState<TruckKey | "">("")
  const [currentFareInput, setCurrentFareInput] = useState("")
  const [inputError, setInputError] = useState("")

  // 入力値のバリデーションと数値変換
  const currentFare = useMemo(() => {
    const trimmed = currentFareInput.trim()
    if (trimmed === "") {
      setInputError("")
      return null
    }
    const num = Number(trimmed)
    if (isNaN(num)) {
      setInputError("数値を入力してください")
      return null
    }
    if (num < 0) {
      setInputError("0以上の値を入力してください")
      return null
    }
    setInputError("")
    return num
  }, [currentFareInput])

  // 標準運賃の取得
  const standardFare = useMemo(() => {
    if (!distance || !truckType) return null
    return STANDARD_FARE_TABLE[distance]?.[truckType] ?? null
  }, [distance, truckType])

  // 損失額の計算
  const loss = useMemo(() => {
    if (standardFare === null || currentFare === null) return null
    return standardFare - currentFare
  }, [standardFare, currentFare])

  const canShowResult = standardFare !== null && currentFare !== null && !inputError

  return (
    <section id="simulator" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Calculator className="h-4 w-4" />
            運賃試算（デモ）
          </div>
          <h2 className="mb-4 text-balance text-2xl font-bold text-foreground sm:text-3xl">
            今すぐ「もらい損ね額」をチェック
          </h2>
          <p className="mb-10 text-muted-foreground">
            距離・車格・現在の運賃を選択するだけで、標準運賃との差額を試算できます。
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <Card className="border-2 border-primary/20 bg-card shadow-lg">
            <CardHeader className="border-b border-border bg-secondary/30 pb-6">
              <CardTitle className="flex items-center gap-2 text-xl text-foreground">
                <Calculator className="h-5 w-5 text-primary" />
                運賃試算シミュレーター
              </CardTitle>
              <CardDescription>
                1運行あたり（税抜）で試算します
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8 p-6">
              {/* 距離選択 */}
              <fieldset className="space-y-3">
                <legend className="text-sm font-medium text-foreground">
                  おおよその片道距離
                </legend>
                <RadioGroup
                  value={distance}
                  onValueChange={(val) => setDistance(val as DistanceKey)}
                  className="grid grid-cols-3 gap-3"
                >
                  {[
                    { value: "50", label: "50km" },
                    { value: "100", label: "100km" },
                    { value: "200", label: "200km" },
                  ].map((opt) => (
                    <Label
                      key={opt.value}
                      htmlFor={`distance-${opt.value}`}
                      className={`flex cursor-pointer items-center justify-center rounded-lg border-2 px-4 py-3 text-center text-base font-medium transition-colors ${
                        distance === opt.value
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-card text-foreground hover:border-primary/50"
                      }`}
                    >
                      <RadioGroupItem
                        value={opt.value}
                        id={`distance-${opt.value}`}
                        className="sr-only"
                      />
                      {opt.label}
                    </Label>
                  ))}
                </RadioGroup>
              </fieldset>

              {/* 車格選択 */}
              <fieldset className="space-y-3">
                <legend className="text-sm font-medium text-foreground">
                  車格
                </legend>
                <RadioGroup
                  value={truckType}
                  onValueChange={(val) => setTruckType(val as TruckKey)}
                  className="grid grid-cols-2 gap-3"
                >
                  {[
                    { value: "4t", label: "4トン車" },
                    { value: "10t", label: "10トン車" },
                  ].map((opt) => (
                    <Label
                      key={opt.value}
                      htmlFor={`truck-${opt.value}`}
                      className={`flex cursor-pointer items-center justify-center rounded-lg border-2 px-4 py-3 text-center text-base font-medium transition-colors ${
                        truckType === opt.value
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border bg-card text-foreground hover:border-primary/50"
                      }`}
                    >
                      <RadioGroupItem
                        value={opt.value}
                        id={`truck-${opt.value}`}
                        className="sr-only"
                      />
                      {opt.label}
                    </Label>
                  ))}
                </RadioGroup>
              </fieldset>

              {/* 現在の運賃入力 */}
              <div className="space-y-2">
                <Label htmlFor="currentFare" className="text-sm font-medium text-foreground">
                  現在の運賃（1運行あたり・税抜）
                </Label>
                <div className="relative">
                  <Input
                    id="currentFare"
                    type="text"
                    inputMode="numeric"
                    placeholder="例: 35000"
                    value={currentFareInput}
                    onChange={(e) => setCurrentFareInput(e.target.value)}
                    aria-invalid={!!inputError}
                    aria-describedby={inputError ? "fare-error" : undefined}
                    className={`pr-10 text-base ${inputError ? "border-destructive" : ""}`}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                    円
                  </span>
                </div>
                {inputError && (
                  <p id="fare-error" className="flex items-center gap-1 text-sm text-destructive">
                    <AlertCircle className="h-4 w-4" />
                    {inputError}
                  </p>
                )}
              </div>

              {/* 結果表示 */}
              {standardFare !== null && (
                <div className="space-y-4 rounded-xl border-2 border-border bg-secondary/30 p-6">
                  <div className="rounded-lg bg-card p-4 shadow-sm">
                    <p className="mb-1 text-sm text-muted-foreground">標準運賃（試算）</p>
                    <p className="text-2xl font-bold text-primary">
                      {standardFare.toLocaleString()}円
                    </p>
                  </div>

                  {canShowResult && loss !== null && (
                    <>
                      {loss > 0 && (
                        <div className="rounded-xl border-2 border-destructive/30 bg-destructive/5 p-6">
                          <div className="mb-3 flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10">
                              <TrendingDown className="h-5 w-5 text-destructive" />
                            </div>
                            <p className="font-medium text-destructive">
                              1運行あたりの損失（試算）
                            </p>
                          </div>
                          <p className="text-center text-3xl font-bold text-destructive sm:text-4xl">
                            {loss.toLocaleString()}円
                          </p>
                        </div>
                      )}

                      {loss === 0 && (
                        <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-6 text-center">
                          <div className="mb-2 flex items-center justify-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-primary" />
                            <p className="font-medium text-primary">差はありません（試算）</p>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            現在の運賃は標準運賃と同等です。
                          </p>
                        </div>
                      )}

                      {loss < 0 && (
                        <div className="rounded-xl border-2 border-success/30 bg-success/5 p-6 text-center">
                          <div className="mb-2 flex items-center justify-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-success" />
                            <p className="font-medium text-success">
                              現在運賃の方が高い（試算上はプラス）
                            </p>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            現在の運賃は標準運賃より{Math.abs(loss).toLocaleString()}円高い設定です。
                          </p>
                        </div>
                      )}
                    </>
                  )}
                </div>
              )}

              {/* 注釈 */}
              <p className="text-center text-xs text-muted-foreground">
                ※ 本シミュレーターは例示・デモ試算であり、実運用の請求額を保証するものではありません。
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
