import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { VercelAnalytics } from '@/components/vercel-analytics'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: '運賃交渉の根拠づくり | 運送会社経営者向け',
  description: '公的機関が公示するデータをもとに、荷主担当者が社内決済を通しやすい交渉資料を作成。原価の整理から交渉シナリオまで伴走します。',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased">
        {children}
        <VercelAnalytics />
      </body>
    </html>
  )
}
