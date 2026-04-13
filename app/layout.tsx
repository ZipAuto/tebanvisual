import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingButtons } from '@/components/floating-buttons'
import { ScrollProgress } from '@/components/parallax-section'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: 'Teban Visual | Produccion Audiovisual Profesional',
  description: 'Servicios profesionales de produccion audiovisual: videos musicales, comerciales, eventos, contenido para redes sociales y mas. Calidad cinematografica en Colombia.',
  keywords: ['produccion audiovisual', 'videos musicales', 'comerciales', 'eventos', 'drones', 'Colombia', 'Teban Visual'],
  authors: [{ name: 'Teban Visual' }],
  openGraph: {
    title: 'Teban Visual | Produccion Audiovisual Profesional',
    description: 'Servicios profesionales de produccion audiovisual con calidad cinematografica.',
    type: 'website',
    locale: 'es_CO',
  },
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
    <html lang="es" className="dark bg-background scroll-smooth">
      <body className={`${montserrat.variable} font-sans antialiased bg-background text-foreground`}>
        <ScrollProgress />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
