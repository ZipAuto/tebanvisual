import type { Metadata } from "next"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tebanvisual.com'

export const metadata: Metadata = {
  title: "Portafolio - Trabajos de Produccion Audiovisual",
  description:
    "Explora el portafolio de Teban Visual: videos musicales, comerciales, eventos, fotografia y mas. Mas de 500 proyectos realizados en Colombia con calidad cinematografica.",
  keywords: [
    "portafolio produccion audiovisual",
    "videos musicales Colombia ejemplos",
    "comerciales publicitarios Colombia ejemplos",
    "eventos cobertura video Colombia",
    "trabajos fotografia profesional Colombia",
    "showreel productora Colombia",
  ],
  alternates: { canonical: `${SITE_URL}/portafolio/` },
  openGraph: {
    title: "Portafolio | Teban Visual",
    description: "Mas de 500 proyectos de produccion audiovisual profesional en Colombia.",
    url: `${SITE_URL}/portafolio/`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Portafolio Teban Visual' }],
  },
}

export default function PortafolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
