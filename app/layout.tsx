import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingButtons } from '@/components/floating-buttons'
import { ScrollProgress } from '@/components/parallax-section'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tebanvisual.com'
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || '573143167898'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Teban Visual | Produccion Audiovisual Profesional en Colombia',
    template: '%s | Teban Visual',
  },
  description:
    'Produccion audiovisual profesional en Colombia. Videos musicales, comerciales, eventos, contenido para redes sociales y drones cinematograficos. Mas de 8 anos de experiencia y 500+ proyectos realizados. Cotiza sin compromiso.',
  keywords: [
    'produccion audiovisual Colombia',
    'videos musicales Colombia',
    'comerciales publicitarios',
    'produccion de video profesional',
    'drones cinematograficos Colombia',
    'contenido redes sociales',
    'video marketing Colombia',
    'filmacion eventos Colombia',
    'Teban Visual',
    'productora audiovisual',
    'video production Colombia',
    'reels Instagram Colombia',
    'TikTok produccion profesional',
    'grabacion 4K Colombia',
    'color grading Colombia',
  ],
  authors: [{ name: 'Teban Visual', url: SITE_URL }],
  creator: 'Teban Visual',
  publisher: 'Teban Visual',
  category: 'Produccion Audiovisual',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: SITE_URL,
    siteName: 'Teban Visual',
    title: 'Teban Visual | Produccion Audiovisual Profesional en Colombia',
    description:
      'Produccion audiovisual profesional: videos musicales, comerciales, eventos y contenido para redes sociales. Calidad cinematografica en Colombia.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Teban Visual - Produccion Audiovisual Profesional en Colombia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Teban Visual | Produccion Audiovisual Profesional',
    description:
      'Videos musicales, comerciales y contenido profesional en Colombia. Calidad cinematografica.',
    images: ['/og-image.jpg'],
    creator: '@tebanvisual',
    site: '@tebanvisual',
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'ProfessionalService', 'EntertainmentBusiness'],
      '@id': `${SITE_URL}/#business`,
      name: 'Teban Visual',
      alternateName: 'Teban Visual Produccion Audiovisual',
      description:
        'Produccion audiovisual profesional en Colombia. Videos musicales, comerciales, eventos, contenido para redes sociales y drones cinematograficos.',
      url: SITE_URL,
      telephone: `+${WHATSAPP}`,
      email: 'contacto@tebanvisual.com',
      image: `${SITE_URL}/og-image.jpg`,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'CO',
        addressLocality: 'Colombia',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 4.711,
        longitude: -74.0721,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Colombia',
      },
      priceRange: '$$',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '08:00',
          closes: '18:00',
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '09:00',
          closes: '14:00',
        },
      ],
      sameAs: [
        'https://instagram.com/tebanvisual',
        'https://youtube.com/@tebanvisual',
        `https://wa.me/${WHATSAPP}`,
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Servicios de Produccion Audiovisual',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Videos Musicales' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Comerciales Publicitarios' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Cobertura de Eventos' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Contenido para Redes Sociales' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Booking Drones Cinematograficos' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Produccion y Estrategia Integral' } },
        ],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        reviewCount: '48',
        bestRating: '5',
        worstRating: '1',
      },
      founder: {
        '@type': 'Person',
        name: 'Teban Visual',
      },
      foundingDate: '2016',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        minValue: 2,
        maxValue: 10,
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Teban Visual',
      description: 'Produccion audiovisual profesional en Colombia',
      publisher: { '@id': `${SITE_URL}/#business` },
      potentialAction: {
        '@type': 'SearchAction',
        target: { '@type': 'EntryPoint', urlTemplate: `${SITE_URL}/portafolio/?q={search_term_string}` },
        'query-input': 'required name=search_term_string',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark bg-background scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased bg-background text-foreground`}>
        <ScrollProgress />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingButtons />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
