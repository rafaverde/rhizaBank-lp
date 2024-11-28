import { BenefitsSection } from "@/components/benefits-section"
import { Hero } from "@/components/hero"
import Image from "next/image"

export default function Home() {
  return (
    <main>
      <Hero />
      <BenefitsSection />
    </main>
  )
}
