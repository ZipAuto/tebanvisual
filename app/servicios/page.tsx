import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Music, Video, Calendar, Share2, Plane, Lightbulb, ArrowRight, Check, MessageCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services"

export const metadata: Metadata = {
  title: "Servicios de Produccion Audiovisual | Teban Visual",
  description: "Videos musicales, comerciales, eventos, contenido para redes sociales, drones cinematograficos y mas. Servicios de produccion audiovisual profesional en Colombia.",
  openGraph: {
    title: "Servicios de Produccion Audiovisual | Teban Visual",
    description: "Videos musicales, comerciales, eventos, contenido para redes sociales y mas.",
  }
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  music: Music,
  video: Video,
  calendar: Calendar,
  share: Share2,
  plane: Plane,
  lightbulb: Lightbulb,
}

export default function ServiciosPage() {
  return (
    <div className="pt-20">
      {/* Header with Background */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5849.JPG-BWNxDVFffIzUJXtjgvuQtcmCXjRQ1D.jpeg"
            alt="Produccion audiovisual"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="text-primary text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
              Nuestros Servicios
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mt-4 mb-4 md:mb-6 leading-tight">
              Soluciones audiovisuales profesionales
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Ofrecemos una gama completa de servicios de produccion audiovisual 
              adaptados a tus necesidades. Desde videos musicales hasta estrategias 
              de contenido, tenemos la solucion perfecta para tu proyecto.
            </p>
            <Button 
              asChild 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 md:h-14 px-6 md:px-8"
            >
              <Link href="/cotizar">
                Cotizar Proyecto
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8 md:space-y-12">
            {services.map((service, index) => {
              const Icon = iconMap[service.icon] || Video
              const isEven = index % 2 === 0

              return (
                <Card 
                  key={service.id} 
                  className="bg-card border-border overflow-hidden"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-2 ${isEven ? "" : "lg:flex-row-reverse"}`}>
                    {/* Image */}
                    <div className={`relative aspect-video lg:aspect-auto ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                      {service.portfolio[0] && (
                        <Image
                          src={service.portfolio[0].image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent lg:hidden" />
                    </div>

                    {/* Content */}
                    <CardContent className={`p-6 md:p-8 lg:p-10 flex flex-col justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h2 className="text-xl md:text-2xl font-bold text-foreground">
                            {service.title}
                          </h2>
                          <p className="text-primary text-sm">{service.subtitle}</p>
                        </div>
                      </div>

                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features preview */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <Check className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button 
                          asChild 
                          className="bg-primary hover:bg-primary/90 text-primary-foreground"
                        >
                          <Link href={`/servicios/${service.slug}`} className="flex items-center gap-2">
                            Ver detalles
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                        <Button 
                          asChild 
                          variant="outline"
                        >
                          <Link href="/cotizar">
                            Cotizar
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            No encuentras lo que buscas?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Creamos paquetes personalizados segun tus necesidades especificas. 
            Contactanos para una cotizacion a medida.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button 
              asChild 
              size="lg" 
              className="bg-background text-foreground hover:bg-background/90"
            >
              <Link href="/cotizar">Solicitar Cotizacion</Link>
            </Button>
            <Button 
              asChild 
              size="lg"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white"
            >
              <a href="https://wa.me/573143167898" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
