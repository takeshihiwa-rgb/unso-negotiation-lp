"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const SAMPLES: { src: string; alt: string; caption: string }[] = [
  {
    src: "/deliverable-samples/01-fact-sheet-cover.png",
    alt: "貴社向け 物流コスト環境の変化と適正運賃に関するご報告（表紙サンプル）",
    caption: "ファクトシート表紙",
  },
  {
    src: "/deliverable-samples/02-cost-structure.png",
    alt: "コスト構造の急激な変容（2019-2025）",
    caption: "コスト構造の推移",
  },
  {
    src: "/deliverable-samples/03-freight-bridge.png",
    alt: "持続可能な物流網に向けた適正運賃ブリッジ",
    caption: "適正運賃ブリッジ（ウォーターフォール）",
  },
  {
    src: "/deliverable-samples/04-proposal-cover.png",
    alt: "物流持続可能性の確保に向けた運賃改定のご提案（表紙サンプル）",
    caption: "改定提案 表紙",
  },
  {
    src: "/deliverable-samples/05-executive-summary.png",
    alt: "エグゼクティブ・サマリー",
    caption: "エグゼクティブ・サマリー",
  },
];

/** 納品物サンプル画像モーダル。`children` がクリックで開くトリガー（通常は Button）。 */
export function DeliverableSamplesDialog({ children }: { children: ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent
        className="max-h-[90vh] max-w-[min(100vw-2rem,56rem)] gap-0 overflow-y-auto p-4 sm:p-6"
        showCloseButton
      >
        <DialogHeader className="pb-4">
          <DialogTitle>納品物サンプル（イメージ）</DialogTitle>
          <DialogDescription>
            実際の納品では、貴社データに基づきカスタマイズした資料をお渡しします。掲載数値・表現はサンプルです。
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-8 pb-2">
          {SAMPLES.map(({ src, alt, caption }) => (
            <figure key={src} className="space-y-2">
              <figcaption className="text-xs font-medium text-muted-foreground">{caption}</figcaption>
              <div className="relative w-full overflow-hidden rounded-md border bg-muted/30">
                <Image
                  src={src}
                  alt={alt}
                  width={1600}
                  height={900}
                  className="h-auto w-full object-contain"
                  sizes="(max-width: 896px) 100vw, 896px"
                />
              </div>
            </figure>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
