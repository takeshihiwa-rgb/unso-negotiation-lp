"use client"

import { useState, useMemo, useCallback, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Calculator, TrendingUp, Mail, FileCheck, MessageSquare, Package } from "lucide-react"

const QUOTE_MAIL_TO = "info@nichbase.com"
const MAIL_SUBJECT = "運賃交渉資料のお見積もり依頼"

type DiagnosisResult = {
  suggestedFare: number
  difference: number
  monthlyLoss: number
  annualLoss: number
  upratePercent: number
}

type InquiryFields = {
  contactEmail: string
}

function formatYenForMail(n: number): string {
  return `${n.toLocaleString("en-US")} 円`
}

type DiagnosisMailPayload = {
  result: DiagnosisResult
  vehicleLabel: string
  distanceLabel: string
  currentFareYen: number
}

function generateMailtoLink(
  email: string,
  diagnosis: DiagnosisMailPayload | null,
): string {
  const subject = encodeURIComponent(MAIL_SUBJECT)

  const introLines = diagnosis
    ? `運賃交渉資料のお見積もりをお願いいたします。\n診断結果を下記に記載します。\n\n`
    : `運賃交渉資料のお見積もりをお願いいたします。\n※無料診断は未実施です。\n\n`

  const fiveYear = diagnosis ? Math.round(diagnosis.result.annualLoss * 5) : 0

  const diagnosisBlock = diagnosis
    ? `【診断結果】\n` +
      `・現在運賃：${formatYenForMail(diagnosis.currentFareYen)}\n` +
      `・値上げ余地：+${diagnosis.result.upratePercent}%\n` +
      `・目安運賃：${formatYenForMail(diagnosis.result.suggestedFare)}\n` +
      `・年間損失（試算）：${formatYenForMail(diagnosis.result.annualLoss)}\n` +
      `・5年間の累積損失（試算）：${formatYenForMail(fiveYear)}\n\n`
    : ""

  const routeBlock = diagnosis
    ? `【ルート情報】\n` +
      `・車格：${diagnosis.vehicleLabel}\n` +
      `・距離：${diagnosis.distanceLabel}\n\n`
    : `【補足】\n` + `・車格・距離・発着地はメール返信で共有します\n\n`

  const bodyPlain =
    introLines +
    `【連絡先】\n` +
    `・メール：${email.trim()}\n\n` +
    routeBlock +
    diagnosisBlock +
    `お見積もりと商品詳細をお送りください。`

  const body = encodeURIComponent(bodyPlain)
  return `mailto:${QUOTE_MAIL_TO}?subject=${subject}&body=${body}`
}

const SUGGESTED_UPRATE = 0.1
const UPRATE_PERCENT = 10

const VEHICLE_OPTIONS = [
  { value: "4t", label: "4トン車" },
  { value: "10t", label: "10トン車" },
]

const DISTANCE_OPTIONS = [
  { value: "50", label: "50km" },
  { value: "100", label: "100km" },
  { value: "200", label: "200km" },
]

const emptyInquiry: InquiryFields = {
  contactEmail: "",
}

type QuoteMailMode = "with-diagnosis" | "without-diagnosis"

function scrollToInquiryForm() {
  document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function DiagnosisSection() {
  const [vehicleClass, setVehicleClass] = useState<string>("")
  const [distance, setDistance] = useState<string>("")
  const [currentFare, setCurrentFare] = useState<string>("")
  const [showResult, setShowResult] = useState(false)
  const [quoteMailMode, setQuoteMailMode] = useState<QuoteMailMode>("without-diagnosis")
  const [inquiry, setInquiry] = useState<InquiryFields>(emptyInquiry)
  const [inquiryErrors, setInquiryErrors] = useState<Record<string, string>>({})

  const result = useMemo(() => {
    const fareNum = parseFloat(currentFare)

    if (!vehicleClass || !distance || !currentFare || isNaN(fareNum) || fareNum <= 0) {
      return null
    }

    const difference = Math.round(fareNum * SUGGESTED_UPRATE)
    const suggestedFare = fareNum + difference
    const monthlyLoss = difference * 20
    const annualLoss = monthlyLoss * 12

    return {
      suggestedFare,
      difference,
      monthlyLoss: Math.round(monthlyLoss),
      annualLoss: Math.round(annualLoss),
      upratePercent: UPRATE_PERCENT,
    }
  }, [vehicleClass, distance, currentFare])

  const handleSubmit = () => {
    if (result) {
      setShowResult(true)
    }
  }

  const vehicleLabel = VEHICLE_OPTIONS.find((v) => v.value === vehicleClass)?.label || ""
  const distanceLabel = DISTANCE_OPTIONS.find((d) => d.value === distance)?.label || ""

  const validateInquiry = useCallback((): boolean => {
    const next: Record<string, string> = {}
    if (!inquiry.contactEmail.trim()) {
      next.contactEmail = "メールアドレスを入力してください"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.contactEmail.trim())) {
      next.contactEmail = "有効なメール形式で入力してください"
    }
    setInquiryErrors(next)
    return Object.keys(next).length === 0
  }, [inquiry])

  const openMailClient = useCallback(() => {
    const isDiag = quoteMailMode === "with-diagnosis"

    const diagnosis: DiagnosisMailPayload | null =
      isDiag && result
        ? (() => {
            const fare = parseInt(currentFare, 10)
            if (isNaN(fare)) return null
            return { result, vehicleLabel, distanceLabel, currentFareYen: fare }
          })()
        : null

    const href = generateMailtoLink(inquiry.contactEmail, diagnosis)
    window.location.href = href
  }, [quoteMailMode, result, currentFare, vehicleLabel, distanceLabel, inquiry])

  const handleQuoteSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validateInquiry()) return
    openMailClient()
  }

  const fiveYearLoss = result ? Math.round(result.annualLoss * 5) : 0

  return (
    <section id="diagnosis" className="bg-slate-50 px-5 py-14 sm:py-16">
      <div className="mx-auto max-w-2xl">
        {/* --- 3-A: 入力フォーム --- */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg">
            <Calculator className="h-7 w-7 text-white" />
          </div>
          <p className="text-sm font-medium text-amber-600">運送会社向け 無料診断</p>
          <p className="mt-3 text-base leading-relaxed text-slate-700 sm:text-lg">
            まずは「いくら交渉の余地があるか」を可視化。
            <br />
            30秒で、御社の適正運賃とのギャップを算出します。
          </p>
          <h2 className="mt-3 text-xl font-bold text-slate-900 sm:text-2xl">
            <span className="text-amber-600">30秒</span>で値上げ可能額を表示
          </h2>
          <button
            type="button"
            className="mt-4 text-sm text-slate-500 underline hover:text-slate-700"
            onClick={() => {
              setInquiryErrors({})
              setQuoteMailMode("without-diagnosis")
              scrollToInquiryForm()
            }}
          >
            診断せずに見積もりを依頼する
          </button>
        </div>

        <Card className="border-slate-200 bg-white shadow-lg">
          <CardContent className="space-y-5 pt-6">
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-slate-700">車格</Label>
              <div className="grid grid-cols-2 gap-2">
                {VEHICLE_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setVehicleClass(option.value)
                      setShowResult(false)
                    }}
                    className={`rounded-lg border-2 px-4 py-3 text-base font-medium transition-all ${
                      vehicleClass === option.value
                        ? "border-amber-500 bg-amber-50 text-amber-700"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-sm font-semibold text-slate-700">距離</Label>
              <div className="grid grid-cols-3 gap-2">
                {DISTANCE_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setDistance(option.value)
                      setShowResult(false)
                    }}
                    className={`rounded-lg border-2 px-3 py-3 text-base font-medium transition-all ${
                      distance === option.value
                        ? "border-amber-500 bg-amber-50 text-amber-700"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentFare" className="text-sm font-semibold text-slate-700">
                現在の運賃（円）
              </Label>
              <Input
                id="currentFare"
                type="number"
                placeholder="例: 35000"
                value={currentFare}
                onChange={(e) => {
                  setCurrentFare(e.target.value)
                  setShowResult(false)
                }}
                className="border-slate-200 bg-white py-3 text-center text-lg font-medium focus:border-amber-500 focus:ring-amber-500"
              />
            </div>

            <Button
              type="button"
              onClick={handleSubmit}
              disabled={!result}
              size="lg"
              className="w-full bg-gradient-to-r from-amber-500 to-orange-500 py-7 text-lg font-bold text-white shadow-md disabled:opacity-50"
            >
              運送会社向け 値上げ可能額を確認
            </Button>
            <p className="text-center text-xs leading-relaxed text-slate-500">
              ※入力した情報は、資料作成の目安以外には使用しません。営業電話も一切ありません
            </p>
          </CardContent>
        </Card>

        {/* --- 3-B: 結果表示 --- */}
        {showResult && result && (
          <div className="mt-6 space-y-4">
            <Card className="border-amber-300 bg-gradient-to-b from-amber-50 to-white shadow-md">
              <CardContent className="py-6 text-center">
                <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-amber-100">
                  <TrendingUp className="h-5 w-5 text-amber-600" />
                </div>
                <p className="text-sm text-slate-600">あなたの運賃は</p>
                <p className="mt-1 text-4xl font-bold text-amber-600 sm:text-5xl">
                  +{result.upratePercent}%<span className="text-4xl sm:text-5xl">以上</span>
                </p>
                <p className="mt-2 text-base font-bold text-slate-900">値上げ余地があります</p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white">
              <CardContent className="py-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">現在の運賃</span>
                    <span className="font-medium text-slate-900">
                      {parseInt(currentFare, 10).toLocaleString()} 円
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">目安運賃（+{result.upratePercent}%）</span>
                    <span className="font-medium text-amber-600">
                      {result.suggestedFare.toLocaleString()} 円
                    </span>
                  </div>
                  <div className="flex justify-between border-t border-slate-100 pt-2">
                    <span className="text-slate-600">年間損失（試算）</span>
                    <span className="font-bold text-red-600">
                      {result.annualLoss.toLocaleString()} 円
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">5年間の累積損失</span>
                    <span className="font-bold text-red-600">
                      {fiveYearLoss.toLocaleString()} 円
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              type="button"
              onClick={() => {
                setInquiryErrors({})
                setQuoteMailMode("with-diagnosis")
                scrollToInquiryForm()
              }}
              className="h-auto w-full bg-gradient-to-r from-slate-800 to-slate-900 py-4 text-base font-bold text-white"
            >
              <Mail className="mr-2 h-5 w-5" />
              運送会社向け 見積もりを依頼する
            </Button>

            <button
              type="button"
              onClick={() => setShowResult(false)}
              className="block w-full text-center text-sm text-slate-500 underline hover:text-slate-700"
            >
              条件を変更して再計算
            </button>
          </div>
        )}

        {/* --- 3-C: 追い込みブロック --- */}
        <div className="mt-10 rounded-xl border border-slate-200 bg-white px-6 py-8 text-center shadow-sm">
          <p className="text-base leading-relaxed text-slate-700">
            値上げできない理由は
            <br />
            <span className="font-bold text-slate-900">「交渉力」ではありません。</span>
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-700">
            <span className="font-bold text-slate-900">「根拠」がないだけです。</span>
          </p>
          <p className="mt-4 text-base font-bold text-amber-700">
            → 根拠があれば、話は変わります。
          </p>
        </div>

        {/* --- 3-D: 見積もりフォーム --- */}
        <div id="inquiry" className="mt-10 scroll-mt-4">
          <Card className="border-slate-200 bg-white shadow-lg">
            <CardContent className="pt-6 pb-6">
              <div className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-amber-100">
                <Mail className="h-5 w-5 text-amber-600" />
              </div>
              <h3 className="mb-1 text-center text-lg font-bold text-slate-900">
                運送会社向け 無料で見積もりを受け取る
              </h3>
              <p className="mb-6 text-center text-sm text-slate-500">
                {quoteMailMode === "with-diagnosis"
                  ? "メールアドレス入力だけで完了します"
                  : "メールアドレス入力だけで完了します"}
              </p>
              <form onSubmit={handleQuoteSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="inq-email" className="text-sm font-semibold text-slate-700">
                    メールアドレス
                  </Label>
                  <Input
                    id="inq-email"
                    type="email"
                    inputMode="email"
                    value={inquiry.contactEmail}
                    onChange={(e) => setInquiry((s) => ({ ...s, contactEmail: e.target.value }))}
                    placeholder="例：taro@example.co.jp"
                    className={`py-4 text-base ${inquiryErrors.contactEmail ? "border-red-500" : ""}`}
                    autoComplete="email"
                  />
                  {inquiryErrors.contactEmail ? (
                    <p className="text-sm text-red-600">{inquiryErrors.contactEmail}</p>
                  ) : null}
                </div>

                {quoteMailMode === "with-diagnosis" && (
                  <p className="text-center text-xs text-slate-400">
                    ※車格・距離・運賃は診断結果から自動送信されます（発地・着地はメール返信で確認）
                  </p>
                )}
                {quoteMailMode === "without-diagnosis" && (
                  <p className="text-center text-xs text-slate-400">
                    ※車格・距離・発着地はメール返信で確認します
                  </p>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-slate-800 to-slate-900 py-7 text-lg font-bold hover:from-slate-700 hover:to-slate-800"
                >
                  運送会社向け 見積もりを依頼する
                </Button>
                <p className="text-center text-xs text-slate-400">
                  ※営業電話・しつこい連絡は一切ありません
                </p>
              </form>

              {/* ご利用の流れ */}
              <div className="mt-6 border-t border-slate-100 pt-6">
                <p className="mb-4 text-center text-sm font-semibold text-slate-500">ご利用の流れ</p>
                <div className="space-y-3">
                  {[
                    { icon: FileCheck, step: "1", text: "お見積もりをメールでお届け" },
                    { icon: MessageSquare, step: "2", text: "商品を選択・お申し込み" },
                    { icon: Package, step: "3", text: "納品（そのまま交渉に使えます）" },
                  ].map(({ icon: Icon, step, text }) => (
                    <div key={step} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100">
                        <Icon className="h-4 w-4 text-slate-500" />
                      </div>
                      <p className="text-sm text-slate-600">
                        <span className="mr-1.5 font-bold text-slate-800">{step}.</span>
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-center text-sm text-slate-600">
                  納品後に請求書が届きます。
                  <span className="font-bold text-slate-800">安心の後払い。</span>
                </p>
                <p className="mt-2 text-center text-xs text-slate-400">
                  ※契約の義務はありません
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="mt-5 text-center text-xs leading-relaxed text-slate-400">
          ※簡易試算です。目安運賃は現在運賃+10%のデモ値です。交渉代行・契約書作成は行いません。
        </p>

        <div className="mt-12 space-y-1 text-center text-xs text-slate-400">
          <p>© 2026 運賃交渉支援サービス</p>
          <p>Product by NicheBase</p>
        </div>
      </div>
    </section>
  )
}
