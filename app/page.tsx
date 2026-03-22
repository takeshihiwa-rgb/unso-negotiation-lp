// Landing Page for Freight Rate Consulting
import { HeroSection } from "@/components/lp/hero-section"
import { ProblemSection } from "@/components/lp/problem-section"
import { SolutionSection } from "@/components/lp/solution-section"
import { ServiceOverviewSection } from "@/components/lp/service-overview-section"
import { StepsSection } from "@/components/lp/steps-section"
import { SampleDocumentsSection } from "@/components/lp/sample-documents-section"
import { ShipperBenefitsSection } from "@/components/lp/shipper-benefits-section"
import { DiagnosisSection } from "@/components/lp/diagnosis-section"
import { TrustSection } from "@/components/lp/trust-section"
import { FinalCtaSection } from "@/components/lp/final-cta-section"
import { MobileStickyCta } from "@/components/lp/mobile-sticky-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-16 sm:pb-0">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServiceOverviewSection />
      <StepsSection />
      <SampleDocumentsSection />
      <ShipperBenefitsSection />
      <DiagnosisSection />
      <TrustSection />
      <FinalCtaSection />
      <MobileStickyCta />
    </main>
  )
}
