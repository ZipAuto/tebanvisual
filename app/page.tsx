import { Hero } from "@/components/hero"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioPreview } from "@/components/portfolio-preview"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <AboutSection />
      <PortfolioPreview />
      <CTASection />
    </>
  )
}
