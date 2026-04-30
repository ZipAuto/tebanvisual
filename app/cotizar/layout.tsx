import type { Metadata } from "next"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tebanvisual.com'

export const metadata: Metadata = {
  title: "Cotizar Proyecto Audiovisual",
  description:
    "Solicita una cotizacion gratis para tu video musical, comercial, evento o contenido para redes sociales. Respondemos en menos de 24 horas. Sin compromisos.",
  keywords: [
    "cotizar video musical Colombia",
    "cotizar comercial publicitario Colombia",
    "precio produccion audiovisual Colombia",
    "cotizacion gratis video profesional",
    "presupuesto produccion video Colombia",
  ],
  alternates: { canonical: `${SITE_URL}/cotizar/` },
  openGraph: {
    title: "Cotiza tu Proyecto | Teban Visual",
    description: "Obtén una propuesta personalizada para tu produccion audiovisual. Gratis y sin compromisos.",
    url: `${SITE_URL}/cotizar/`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Cotizar - Teban Visual' }],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function CotizarLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
