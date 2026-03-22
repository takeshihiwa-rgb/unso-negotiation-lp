"use client"

import { useState, useMemo, useCallback, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Calculator, AlertTriangle, Mail } from "lucide-react"

const QUOTE_MAIL_TO = "info@nichbase.com"
const MAIL_SUBJECT = "運賃交渉資料の作成依頼"

type DiagnosisResult = {
  suggestedFare: number
  difference: number
  monthlyLoss: number
  annualLoss: number
}

type InquiryFields = {
  companyName: string
  contactName: string
  contactEmail: string
  contactPhone: string
  requestNote: string
}

/** メール本文内の金額表記（例: 10,000 円）を統一 */
function formatYenForMail(n: number): string {
  return `${n.toLocaleString("en-US")} 円`
}

type DiagnosisMailPayload = {
  result: DiagnosisResult
  vehicleLabel: string
  distanceLabel: string
  currentFareYen: number
}

function generateMailtoLink(inquiry: InquiryFields, diagnosis: DiagnosisMailPayload | null): string {
  const subject = encodeURIComponent(MAIL_SUBJECT)
  const noteBlock =
    inquiry.requestNote.trim() !== ""
      ? `【ご要望・備考】\n${inquiry.requestNote.trim()}\n\n`
      : ""

  const introLines = diagnosis
    ? `運賃交渉に用いる資料の作成について、お見積りとご相談をお願いいたします。\nLPの無料診断シミュレーション結果を下記に記載します。\n\n`
    : `運賃交渉に用いる資料の作成について、お見積りとご相談をお願いいたします。\n※無料診断シミュレーションは未実施です。\n\n`

  const diagnosisBlock = diagnosis
    ? `【診断結果】\n` +
      `・車格：${diagnosis.vehicleLabel}\n` +
      `・距離：${diagnosis.distanceLabel}\n` +
      `・現在運賃：${formatYenForMail(diagnosis.currentFareYen)}\n` +
      `・目安運賃（現在+10%）：${formatYenForMail(diagnosis.result.suggestedFare)}\n` +
      `・年間損失（試算）：${formatYenForMail(diagnosis.result.annualLoss)}\n\n`
    : ""

  const closing =
    `このたびお問い合わせいただきありがとうございます。\n` +
    `内容を拝見のうえ、担当より改めてご連絡し、お見積りと具体的な進め方についてご案内いたします。\n` +
    `お急ぎの場合やご不明点がございましたら、このメールへのご返信またはお電話にてお気軽にお知らせください。`

  const bodyPlain =
    `【見積・依頼】\n` +
    introLines +
    `【貴社情報】\n` +
    `・会社名：${inquiry.companyName.trim()}\n` +
    `・担当者：${inquiry.contactName.trim()}\n` +
    `・メール：${inquiry.contactEmail.trim()}\n` +
    `・電話：${inquiry.contactPhone.trim()}\n\n` +
    noteBlock +
    diagnosisBlock +
    closing

  const body = encodeURIComponent(bodyPlain)
  return `mailto:${QUOTE_MAIL_TO}?subject=${subject}&body=${body}`
}

/** デモ用：目安運賃を「現在運賃 ×（1 + この率）」で算出 */
const SUGGESTED_UPRATE = 0.1

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
  companyName: "",
  contactName: "",
  contactEmail: "",
  contactPhone: "",
  requestNote: "",
}

type QuoteMailMode = "with-diagnosis" | "without-diagnosis"

export function DiagnosisSection() {
  const [vehicleClass, setVehicleClass] = useState<string>("")
  const [distance, setDistance] = useState<string>("")
  const [currentFare, setCurrentFare] = useState<string>("")
  const [showResult, setShowResult] = useState(false)
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false)
  const [quoteMailMode, setQuoteMailMode] = useState<QuoteMailMode>("without-diagnosis")
  const [inquiry, setInquiry] = useState<InquiryFields>(emptyInquiry)
  const [inquiryErrors, setInquiryErrors] = useState<Partial<Record<keyof InquiryFields, string>>>({})

  const result = useMemo(() => {
    const fareNum = parseFloat(currentFare)

    if (!vehicleClass || !distance || !currentFare || isNaN(fareNum) || fareNum <= 0) {
      return null
    }

    // 目安運賃 = 現在運賃 + 10%（デモ用の単純モデル）
    const difference = Math.round(fareNum * SUGGESTED_UPRATE)
    const suggestedFare = fareNum + difference
    // 月損失 = 差額 × 月間回数（仮20）
    const monthlyLoss = difference * 20
    // 年間損失 = 月損失 × 12
    const annualLoss = monthlyLoss * 12

    return {
      suggestedFare,
      difference,
      monthlyLoss: Math.round(monthlyLoss),
      annualLoss: Math.round(annualLoss),
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
    const next: Partial<Record<keyof InquiryFields, string>> = {}
    if (!inquiry.companyName.trim()) next.companyName = "会社名を入力してください"
    if (!inquiry.contactName.trim()) next.contactName = "担当者名を入力してください"
    if (!inquiry.contactEmail.trim()) {
      next.contactEmail = "メールアドレスを入力してください"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiry.contactEmail.trim())) {
      next.contactEmail = "有効なメール形式で入力してください"
    }
    if (!inquiry.contactPhone.trim()) next.contactPhone = "電話番号を入力してください"
    setInquiryErrors(next)
    return Object.keys(next).length === 0
  }, [inquiry])

  const openMailClient = useCallback(() => {
    const diagnosis: DiagnosisMailPayload | null =
      quoteMailMode === "with-diagnosis" && result
        ? (() => {
            const fare = parseInt(currentFare, 10)
            if (isNaN(fare)) return null
            return {
              result,
              vehicleLabel,
              distanceLabel,
              currentFareYen: fare,
            }
          })()
        : null

    if (quoteMailMode === "with-diagnosis" && !diagnosis) return

    const href = generateMailtoLink(inquiry, diagnosis)
    window.location.href = href
  }, [quoteMailMode, result, currentFare, vehicleLabel, distanceLabel, inquiry])

  const handleQuoteSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validateInquiry()) return
    openMailClient()
    setQuoteDialogOpen(false)
  }

  return (
    <section id="diagnosis" className="bg-slate-50 px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg">
            <Calculator className="h-7 w-7 text-white" />
          </div>
          <p className="mb-2 text-sm font-medium text-amber-600">
            {"無料診断"}
          </p>
          <h2 className="mb-2 text-xl font-bold text-slate-900 sm:text-2xl">
            <span className="text-amber-600">{"1分"}</span>{"で取りこぼし額が分かります"}
          </h2>
          <p className="mb-3 text-sm text-slate-600">
            {"診断をせずに、まず見積・依頼だけされたい方はこちらからどうぞ。"}
          </p>
          <Button
            type="button"
            variant="outline"
            className="mb-6 w-full border-slate-300 bg-white py-6 text-base font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
            onClick={() => {
              setInquiryErrors({})
              setQuoteMailMode("without-diagnosis")
              setQuoteDialogOpen(true)
            }}
          >
            <Mail className="mr-2 h-5 w-5 shrink-0 text-amber-700" />
            {"診断なしで見積・依頼する"}
          </Button>
        </div>

        <Card className="border-slate-200 bg-white shadow-xl">
          <CardContent className="space-y-5 pt-6">
            {/* 車格選択 */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-slate-700">
                {"車格"}
              </Label>
              <div className="grid grid-cols-2 gap-2">
                {VEHICLE_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setVehicleClass(option.value)
                      setShowResult(false)
                    }}
                    className={`rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all ${
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

            {/* 距離選択 */}
            <div className="space-y-2">
              <Label className="text-sm font-semibold text-slate-700">
                {"距離"}
              </Label>
              <div className="grid grid-cols-3 gap-2">
                {DISTANCE_OPTIONS.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setDistance(option.value)
                      setShowResult(false)
                    }}
                    className={`rounded-lg border-2 px-3 py-3 text-sm font-medium transition-all ${
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

            {/* 現在運賃入力 */}
            <div className="space-y-2">
              <Label htmlFor="currentFare" className="text-sm font-semibold text-slate-700">
                {"現在の運賃（円）"}
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
                className="border-slate-200 bg-white text-center text-lg font-medium focus:border-amber-500 focus:ring-amber-500"
              />
            </div>

            <Button
              onClick={handleSubmit}
              disabled={!result}
              size="lg"
              className="group relative w-full overflow-hidden bg-gradient-to-r from-amber-500 to-orange-500 py-6 text-base font-bold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 disabled:opacity-50"
            >
              <span className="relative z-10">{"取りこぼし額を計算する"}</span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            </Button>
          </CardContent>
        </Card>

        {showResult && result && (
          <div className="mt-6 space-y-4">
            <Card className="border-red-200 bg-red-50 shadow-lg">
              <CardContent className="py-6 text-center">
                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-100">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
                <p className="mb-1 text-sm text-slate-600">
                  {"あなたの年間取りこぼし額"}
                </p>
                <p className="text-3xl font-bold text-red-600 sm:text-4xl">
                  {result.annualLoss.toLocaleString()}
                  <span className="ml-1 text-xl">{"円"}</span>
                </p>
                <p className="mt-3 text-xs text-slate-500">
                  {"※1運行あたり「現在比+10%」を取りこぼしとみなし、月20回×12ヶ月で試算"}
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 bg-white">
              <CardContent className="py-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">{"現在の運賃"}</span>
                    <span className="font-medium text-slate-900">{parseInt(currentFare).toLocaleString()} {"円"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">{"目安運賃（現在＋10%）"}</span>
                    <span className="font-medium text-amber-600">{result.suggestedFare.toLocaleString()} {"円"}</span>
                  </div>
                  <div className="flex justify-between border-t border-slate-100 pt-2">
                    <span className="text-slate-600">{"1回あたりの差額（10%分）"}</span>
                    <span className="font-bold text-red-600">+{result.difference.toLocaleString()} {"円"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">{"月間損失（20回）"}</span>
                    <span className="font-bold text-red-600">+{result.monthlyLoss.toLocaleString()} {"円"}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Button
              type="button"
              onClick={() => {
                setInquiryErrors({})
                setQuoteMailMode("with-diagnosis")
                setQuoteDialogOpen(true)
              }}
              className="group relative h-auto w-full overflow-hidden rounded-lg bg-gradient-to-r from-slate-800 to-slate-900 py-4 text-base font-bold text-white shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              <Mail className="mr-2 h-5 w-5" />
              <span>{"この損失を止める（交渉資料を依頼する）"}</span>
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            </Button>

            <button
              onClick={() => setShowResult(false)}
              className="block w-full text-center text-sm text-slate-500 underline transition-colors hover:text-slate-700"
            >
              {"条件を変更して再計算"}
            </button>
          </div>
        )}

        <Dialog
          open={quoteDialogOpen}
          onOpenChange={(open) => {
            setQuoteDialogOpen(open)
            if (!open) setInquiryErrors({})
          }}
        >
          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-md">
            <form onSubmit={handleQuoteSubmit}>
              <DialogHeader>
                <DialogTitle>{"見積・依頼（メール作成）"}</DialogTitle>
                <DialogDescription>
                  {quoteMailMode === "with-diagnosis"
                    ? "診断結果の数値がメール本文に含まれます。送信でメールアプリが開きます。"
                    : "診断は未実施の依頼です。診断数値はメールに含まれません。送信でメールアプリが開きます。"}
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="quote-company">{"会社名"}</Label>
                  <Input
                    id="quote-company"
                    value={inquiry.companyName}
                    onChange={(e) =>
                      setInquiry((s) => ({ ...s, companyName: e.target.value }))
                    }
                    placeholder="例：株式会社○○運輸"
                    className={inquiryErrors.companyName ? "border-red-500" : ""}
                    autoComplete="organization"
                  />
                  {inquiryErrors.companyName ? (
                    <p className="text-xs text-red-600">{inquiryErrors.companyName}</p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quote-contact">{"担当者名"}</Label>
                  <Input
                    id="quote-contact"
                    value={inquiry.contactName}
                    onChange={(e) =>
                      setInquiry((s) => ({ ...s, contactName: e.target.value }))
                    }
                    placeholder="例：山田 太郎"
                    className={inquiryErrors.contactName ? "border-red-500" : ""}
                    autoComplete="name"
                  />
                  {inquiryErrors.contactName ? (
                    <p className="text-xs text-red-600">{inquiryErrors.contactName}</p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quote-email">{"連絡用メール"}</Label>
                  <Input
                    id="quote-email"
                    type="email"
                    inputMode="email"
                    value={inquiry.contactEmail}
                    onChange={(e) =>
                      setInquiry((s) => ({ ...s, contactEmail: e.target.value }))
                    }
                    placeholder="例：taro@example.co.jp"
                    className={inquiryErrors.contactEmail ? "border-red-500" : ""}
                    autoComplete="email"
                  />
                  {inquiryErrors.contactEmail ? (
                    <p className="text-xs text-red-600">{inquiryErrors.contactEmail}</p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quote-phone">{"電話番号"}</Label>
                  <Input
                    id="quote-phone"
                    type="tel"
                    inputMode="tel"
                    value={inquiry.contactPhone}
                    onChange={(e) =>
                      setInquiry((s) => ({ ...s, contactPhone: e.target.value }))
                    }
                    placeholder="例：03-1234-5678"
                    className={inquiryErrors.contactPhone ? "border-red-500" : ""}
                    autoComplete="tel"
                  />
                  {inquiryErrors.contactPhone ? (
                    <p className="text-xs text-red-600">{inquiryErrors.contactPhone}</p>
                  ) : null}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quote-note">{"ご要望・備考（任意）"}</Label>
                  <Textarea
                    id="quote-note"
                    value={inquiry.requestNote}
                    onChange={(e) =>
                      setInquiry((s) => ({ ...s, requestNote: e.target.value }))
                    }
                    placeholder="希望納期、対象路線の概要など"
                    rows={3}
                    className="resize-y"
                  />
                </div>
              </div>
              <DialogFooter className="gap-2 sm:gap-0">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setQuoteDialogOpen(false)}
                >
                  {"キャンセル"}
                </Button>
                <Button type="submit" className="bg-slate-900 hover:bg-slate-800">
                  <Mail className="mr-2 h-4 w-4" />
                  {"メールアプリで送信"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        <p className="mt-6 text-center text-xs text-slate-400">
          {"※簡易シミュレーションです。目安運賃は現在の運賃に10%を加えたデモ値です。実際の金額とは異なる場合があります。"}
        </p>
      </div>
    </section>
  )
}
