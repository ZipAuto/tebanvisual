import type { Metadata } from "next"
import { Hero } from "@/components/hero"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { PortfolioPreview } from "@/components/portfolio-preview"
import { CTASection } from "@/components/cta-section"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tebanvisual.com'

export const metadata: Metadata = {
  title: 'Teban Visual | Produccion Audiovisual Profesional en Colombia',
  description:
    'Productora audiovisual en Colombia especializada en videos musicales, comerciales publicitarios, eventos, contenido para redes sociales y drones cinematograficos. Mas de 8 anos de experiencia y 500+ proyectos. Cotiza gratis.',
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: 'Teban Visual | Produccion Audiovisual Profesional en Colombia',
    description:
      'Productora audiovisual en Colombia: videos musicales, comerciales, eventos y contenido digital con calidad cinematografica.',
    url: `${SITE_URL}/`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Teban Visual' }],
  },
}

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
