// Landing Page for Freight Rate Consulting — 超圧縮（3スクロール想定）
import { HeroSection } from "@/components/lp/hero-section"
import { CompactValueSection } from "@/components/lp/compact-value-section"
import { CredentialsSection } from "@/components/lp/credentials-section"
import { SampleDeliverablesSection } from "@/components/lp/sample-deliverables-section"
import { DiagnosisSection } from "@/components/lp/diagnosis-section"
import { MobileStickyCta } from "@/components/lp/mobile-sticky-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-16 sm:pb-0">
      <HeroSection />
      <CompactValueSection />
      <CredentialsSection />
      <SampleDeliverablesSection />
      <DiagnosisSection />
      <MobileStickyCta />
    </main>
  )
}
