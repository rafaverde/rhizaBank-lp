import { AdvantagesSection } from "@/components/sections/advantages-section"
import { BenefitsSection } from "@/components/sections/benefits-section"
import { Hero } from "@/components/sections/hero"

export default function Home() {
  return (
    <main>
      <Hero />
      <BenefitsSection />
      <AdvantagesSection />
    </main>
  )
}
