import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, ArrowRight, Play, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { services, getServiceBySlug, getAllServiceSlugs } from "@/lib/services"
import { YouTubeGallery } from "@/components/youtube-gallery"
import { InstagramReelsGrid } from "@/components/instagram-reels-grid"
import { VideoWithFallback } from "@/components/video-with-fallback"

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://tebanvisual.com"
const WHATSAPP = process.env.NEXT_PUBLIC_WHATSAPP || "573143167898"
const BASE_PATH = "/tebanvisual"

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) return { title: "Servicio no encontrado | Teban Visual" }

  const keywordsMap: Record<string, string[]> = {
    "videos-musicales": ["video musical profesional Colombia", "producción videoclip Colombia", "grabación video musical 4K", "director de video musical Colombia", "videoclip artistas colombianos"],
    "comerciales": ["comercial publicitario Colombia", "spot publicitario video", "video publicitario empresa Colombia", "producción comercial Colombia", "video marketing Colombia"],
    "eventos": ["cobertura eventos video Colombia", "filmación bodas Colombia", "video matrimonios Colombia", "eventos empresariales video Colombia", "transmisión en vivo Colombia"],
    "redes-sociales": ["contenido redes sociales profesional Colombia", "producción reels Instagram", "videos TikTok profesionales Colombia", "YouTube Shorts Colombia", "estrategia contenido video"],
    "booking-drones": ["alquiler drones cinematográficos Colombia", "drone profesional filmación Colombia", "tomas aéreas Colombia", "piloto drones certificado Colombia", "FPV cinematográfico Colombia"],
    "produccion-estrategia": ["consultoría audiovisual Colombia", "estrategia contenido marca Colombia", "producción audiovisual mensual", "socio creativo marcas Colombia", "dirección creativa audiovisual"],
  }

  return {
    title: `${service.title} Profesionales en Colombia | Teban Visual`,
    description: `${service.description} Cotiza sin compromiso con Teban Visual, productora audiovisual con más de 8 años de experiencia en Colombia.`,
    keywords: keywordsMap[slug] || ["producción audiovisual Colombia", "Teban Visual"],
    alternates: { canonical: `${SITE_URL}/servicios/${slug}/` },
    openGraph: {
      title: `${service.title} | Teban Visual Colombia`,
      description: service.description,
      url: `${SITE_URL}/servicios/${slug}/`,
      images: service.portfolio[0]
        ? [{ url: service.portfolio[0].image, width: 1200, height: 630, alt: service.title }]
        : [{ url: "/og-image.jpg", width: 1200, height: 630, alt: service.title }],
    },
  }
}

/* ─── Per-service media data ─── */

const videosMusicalesCategories = [
  {
    name: "Videos Musicales Oficiales",
    videos: [
      { id: "DGoYBqhB8f4", title: "Video Musical Oficial" },
      { id: "__ALzYogGG4", title: "Video Musical Oficial" },
      { id: "QNhHbsHiZyQ", title: "Video Musical Oficial" },
      { id: "kECc-cLo0zA", title: "Video Musical Oficial" },
      { id: "EZNxq6bdnXY", title: "Video Musical Oficial" },
      { id: "PNmPvDe8QCg", title: "Video Musical Oficial" },
      { id: "-DOQr4FqnTc", title: "Video Musical Oficial" },
      { id: "1xS0Fh4SOxw", title: "Video Musical Oficial" },
      { id: "aRnr7nSrLDY", title: "Video Musical Oficial" },
      { id: "OEItRQuUtC4", title: "Video Musical Oficial" },
      { id: "6cptDWX2gaY", title: "Video Musical Oficial" },
    ],
  },
  {
    name: "Edición de Video",
    videos: [
      { id: "5myee-PlKpU", title: "Edición de Video Profesional" },
    ],
  },
  {
    name: "Live Sessions",
    videos: [
      { id: "mY-HhBYTCC4", title: "Live Session" },
      { id: "z96X0iCPE_g", title: "Live Session" },
      { id: "_aM_sxvMxRc", title: "Live Session" },
    ],
  },
  {
    name: "Colaboraciones Internacionales",
    videos: [
      { id: "gHHIEOvVRLU", title: "Colaboración Internacional" },
    ],
  },
]

const instagramReels = [
  { url: "https://www.instagram.com/reel/DSIKoOcDQYx/?igsh=MWF0bWVta2F1eTZvaA==", title: "Reel 1" },
  { url: "https://www.instagram.com/reel/DXNnIpykXnL/?igsh=MWt2NHU0MmI5YzNyZA==", title: "Reel 2" },
  { url: "https://www.instagram.com/reel/DTRF4VnEb1g/?igsh=emNiZ2dxcm54NHRh", title: "Reel 3" },
  { url: "https://www.instagram.com/reel/DQC8sDwiAc1/?igsh=MTQ3c2l3eTE3emI2ag==", title: "Reel 4" },
  { url: "https://www.instagram.com/reel/DWzlxJRjqqF/?igsh=Y252ajJxY2Nnc2x4", title: "Reel 5" },
  { url: "https://www.instagram.com/reel/DTjPIM6kcCr/?igsh=M3dubXg5dDJ2Nmtl", title: "Reel 6" },
  { url: "https://www.instagram.com/reel/DXey0sAiXCL/?igsh=MWgxaWFvaTZrYjdkcQ==", title: "Reel 7" },
]

/* ─── Per-service FAQs ─── */

const faqsBySlug: Record<string, { question: string; answer: string }[]> = {
  "videos-musicales": [
    { question: "¿Cuánto cuesta producir un video musical en Colombia?", answer: "El precio de un video musical profesional en Colombia varía según la complejidad, locaciones y duración. Contáctanos para recibir una cotización personalizada sin compromiso." },
    { question: "¿Cuánto tiempo tarda la producción de un videoclip?", answer: "El proceso completo (pre-producción, grabación y post-producción) tarda entre 2 y 4 semanas para proyectos estándar. Proyectos más complejos pueden requerir 5-8 semanas." },
    { question: "¿Incluyen drones en la producción del video musical?", answer: "Sí, ofrecemos tomas aéreas cinematográficas con drones DJI profesionales pilotados por operadores certificados como parte de muchos de nuestros paquetes de video musical." },
  ],
  "comerciales": [
    { question: "¿Qué tipo de comerciales producen?", answer: "Producimos spots para TV, redes sociales, plataformas digitales y cine. Desde micro-comerciales de 15 segundos hasta campañas integrales de varios formatos." },
    { question: "¿Cuánto cuesta un comercial publicitario en Colombia?", answer: "El costo depende de la duración, locaciones, talento y complejidad técnica. Cada proyecto recibe una propuesta personalizada sin compromiso." },
    { question: "¿Ofrecen servicios de guion y concepto creativo?", answer: "Sí, contamos con equipo creativo propio para desarrollar el concepto, guion, storyboard y dirección de arte de tu comercial." },
  ],
  "eventos": [
    { question: "¿Qué tipo de eventos cubren?", answer: "Cubrimos matrimonios, bodas, quinceañeros, eventos corporativos y empresariales, conciertos, lanzamientos de producto y conferencias." },
    { question: "¿Hacen transmisión en vivo de eventos?", answer: "Sí, ofrecemos servicios de streaming profesional a plataformas como YouTube, Facebook e Instagram para tu evento." },
    { question: "¿Con cuánta anticipación debo reservar la cobertura de mi evento?", answer: "Recomendamos reservar con al menos 2-4 semanas de anticipación para garantizar la disponibilidad del equipo. Para eventos grandes, lo antes posible." },
  ],
  "redes-sociales": [
    { question: "¿Cuántos videos producen al mes para redes sociales?", answer: "Los paquetes van desde 4 hasta 20+ piezas mensuales, adaptados a tu estrategia y presupuesto. Incluimos reels, TikToks, Shorts y contenido para feed." },
    { question: "¿Desarrollan la estrategia de contenido o solo producen?", answer: "Ofrecemos tanto producción pura como el servicio integral que incluye estrategia, calendario editorial, producción, edición y análisis de métricas." },
    { question: "¿Trabajan con marcas de cualquier sector?", answer: "Sí, tenemos experiencia con marcas de moda, gastronomía, música, servicios, retail, educación y más sectores en Colombia." },
  ],
  "booking-drones": [
    { question: "¿Los pilotos de drone están certificados?", answer: "Sí, todos nuestros pilotos cuentan con certificación de la Aeronáutica Civil de Colombia (UAEAC) y los seguros de responsabilidad requeridos." },
    { question: "¿Qué zonas pueden volar?", answer: "Operamos en zonas permitidas por la normativa colombiana. Gestionamos los permisos necesarios ante las autoridades competentes para cada vuelo." },
    { question: "¿En qué resolución graban los drones?", answer: "Utilizamos drones DJI Inspire 3 y Mavic Pro que graban en 4K y 6K RAW. También contamos con drones FPV para tomas cinematográficas dinámicas." },
  ],
  "produccion-estrategia": [
    { question: "¿En qué consiste el servicio de Producción + Estrategia?", answer: "Es un servicio integral donde nos convertimos en tu equipo audiovisual externo: desarrollamos la estrategia de contenido, producimos el material y medimos los resultados mes a mes." },
    { question: "¿Cuánto tiempo dura el contrato mínimo?", answer: "El plan de Producción + Estrategia está diseñado para resultados a largo plazo. Trabajamos con compromisos mínimos de 3 meses para ver resultados medibles." },
    { question: "¿Incluyen gestión de redes sociales?", answer: "Producimos y asesoramos el contenido. La gestión de cuentas (pauta, comunidad) se puede incluir como servicio adicional según tus necesidades." },
  ],
}

/* ─── Service-specific media sections ─── */

function ServiceMediaSection({ slug }: { slug: string }) {
  if (slug === "videos-musicales") {
    return (
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Nuestros videos musicales
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Selecciona una categoría y haz clic en cualquier video para reproducirlo
            </p>
          </div>
          <YouTubeGallery categories={videosMusicalesCategories} />
        </div>
      </section>
    )
  }

  if (slug === "comerciales") {
    return (
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Videos para Negocios
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Comerciales reales producidos por Teban Visual
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="rounded-xl overflow-hidden bg-card border border-border">
              <VideoWithFallback
                src={`${BASE_PATH}/paletinoGrill.mp4`}
                poster="/palestino.png"
                title="Palatino Grill"
                description="Comercial para restaurante"
              />
              <div className="p-4">
                <h3 className="font-semibold text-foreground">Palatino Grill</h3>
                <p className="text-sm text-muted-foreground">Comercial para restaurante</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (slug === "redes-sociales") {
    return (
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Contenido que hemos creado
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Reels y contenido profesional para redes sociales. Haz clic para ver en Instagram.
            </p>
          </div>
          <InstagramReelsGrid reels={instagramReels} />
        </div>
      </section>
    )
  }

  if (slug === "booking-drones") {
    return (
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Nuestros pilotos certificados
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Profesionales con certificación UAEAC listos para tu producción
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { src: "/piloto1.jpg", label: "Piloto FPV Certificado" },
              { src: "/piloto2.jpg", label: "Operador DJI Profesional" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-foreground font-semibold">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  if (slug === "produccion-estrategia") {
    return (
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Estrategia en acción
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Así planificamos y ejecutamos cada proyecto audiovisual
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              { src: "/Estrategia.jpg", label: "Planificación Estratégica" },
              { src: "/Estrategia2.jpeg", label: "Ejecución y Resultados" },
            ].map((img) => (
              <div key={img.src} className="relative aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-foreground font-semibold">{img.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }

  return null
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  if (!service) notFound()

  const faqs = faqsBySlug[slug] || [
    { question: "¿Cuánto cuesta este servicio?", answer: "El precio depende de las necesidades específicas de tu proyecto. Contáctanos para recibir una cotización personalizada sin compromiso." },
    { question: "¿Cuánto tiempo toma la entrega?", answer: "Los tiempos varían según la complejidad. Proyectos simples se entregan en 1-2 semanas, los más complejos en 3-4 semanas." },
    { question: "¿Incluyen revisiones?", answer: "Sí, todos nuestros proyectos incluyen revisiones para asegurar tu satisfacción total con el resultado final." },
  ]

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Servicios", item: `${SITE_URL}/servicios/` },
      { "@type": "ListItem", position: 3, name: service.title, item: `${SITE_URL}/servicios/${slug}/` },
    ],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <div className="pt-20">
        {/* Hero */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {service.portfolio[0] && (
              <Image
                src={service.portfolio[0].image}
                alt={`${service.title} - Teban Visual Colombia`}
                fill
                className="object-cover"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <Button asChild variant="ghost" className="mb-6 -ml-4 text-muted-foreground hover:text-foreground">
              <Link href="/servicios" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Volver a servicios
              </Link>
            </Button>

            <div className="max-w-3xl">
              <span className="text-primary text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
                {service.subtitle}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-4 md:mb-6 leading-tight">
                {service.title}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                {service.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 md:h-14 px-6 md:px-8">
                  <Link href="/cotizar">{service.cta}</Link>
                </Button>
                <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white h-12 md:h-14 px-6 md:px-8">
                  <a
                    href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Hola! Me interesa el servicio de ${service.title}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 md:py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8 text-center">
              Qué incluye este servicio
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border">
                  <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm md:text-base text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service-specific media */}
        <ServiceMediaSection slug={slug} />

        {/* Portfolio images (for services without custom media or as supplementary) */}
        {!["videos-musicales", "redes-sociales"].includes(slug) && (
          <section className="py-12 md:py-16 bg-card">
            <div className="container mx-auto px-4">
              <div className="text-center mb-8">
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">Trabajos realizados</h2>
                <p className="text-muted-foreground text-sm md:text-base">
                  Algunos proyectos de {service.title.toLowerCase()} que hemos realizado
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
                {service.portfolio.map((item) => (
                  <div key={item.id} className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer">
                    <Image
                      src={item.image}
                      alt={`${item.title} - ${service.title} Colombia`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
                        <Play className="h-6 w-6 text-primary-foreground ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform">
                      <p className="text-foreground font-semibold">{item.title}</p>
                      <p className="text-muted-foreground text-sm">{item.category}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center mt-8">
                <Button asChild variant="outline">
                  <Link href="/portafolio" className="flex items-center gap-2">
                    Ver todo el portafolio
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-12 md:py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                ¿Listo para comenzar tu proyecto?
              </h2>
              <p className="text-primary-foreground/80 mb-8">
                Cotiza sin compromiso y recibe una propuesta personalizada
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
                  <Link href="/cotizar">Cotizar ahora</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8 text-center">
                Preguntas frecuentes sobre {service.title.toLowerCase()}
              </h2>
              <div className="space-y-4">
                {faqs.map(({ question, answer }, i) => (
                  <Card key={i} className="bg-card border-border">
                    <CardContent className="p-4 md:p-6">
                      <h3 className="font-semibold text-foreground mb-2">{question}</h3>
                      <p className="text-muted-foreground text-sm md:text-base">{answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Other Services */}
        <section className="py-12 md:py-16 bg-card">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8 text-center">Otros servicios</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {services
                .filter((s) => s.slug !== slug)
                .slice(0, 3)
                .map((s) => (
                  <Link
                    key={s.slug}
                    href={`/servicios/${s.slug}`}
                    className="p-4 md:p-6 rounded-xl bg-background border border-border hover:border-primary/50 transition-all group"
                  >
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{s.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{s.subtitle}</p>
                    <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Ver servicio
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
