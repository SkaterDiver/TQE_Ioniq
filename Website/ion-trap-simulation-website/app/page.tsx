import { HeroSection } from "@/components/hero-section"
import { QuantumBackground } from "@/components/quantum-background"
import { SectionIonTrap } from "@/components/section-ion-trap"
import { SectionTask } from "@/components/section-task"
import { Section3DTrap } from "@/components/section-3d-trap"
import { Section2DTrap } from "@/components/section-2d-trap"
import { SectionComparison } from "@/components/section-comparison"
import { SectionConclusion } from "@/components/section-conclusion"
import { SectionReferences } from "@/components/section-references"
import { FloatingNav } from "@/components/floating-nav"
import { KeyboardNavigation } from "@/components/keyboard-navigation"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden" role="main" aria-label="Ion Trap Simulation Study">
      <QuantumBackground />
      <KeyboardNavigation />
      <HeroSection />
      <SectionIonTrap />
      <SectionTask />
      <Section3DTrap />
      <Section2DTrap />
      <SectionComparison />
      <SectionConclusion />
      <SectionReferences />
      <FloatingNav />
    </main>
  )
}
