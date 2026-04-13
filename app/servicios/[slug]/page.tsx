import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, ArrowRight, Play, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { services, getServiceBySlug, getAllServiceSlugs } from "@/lib/services"

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)
  
  if (!service) {
    return {
      title: "Servicio no encontrado | Teban Visual",
    }
  }

  return {
    title: `${service.title} | Teban Visual`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Teban Visual`,
      description: service.description,
    }
  }
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="pt-20">
      {/* Hero Header with Background */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          {service.portfolio[0] && (
            <Image
              src={service.portfolio[0].image}
              alt={service.title}
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
              <Button 
                asChild 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 md:h-14 px-6 md:px-8"
              >
                <Link href="/cotizar">
                  {service.cta}
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white h-12 md:h-14 px-6 md:px-8"
              >
                <a href="https://wa.me/573143167898?text=Hola!%20Me%20interesa%20el%20servicio%20de%20" target="_blank" rel="noopener noreferrer">
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
            Que incluye este servicio
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {service.features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-background border border-border"
              >
                <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Trabajos Realizados */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              Trabajos realizados
            </h2>
            <p className="text-muted-foreground text-sm md:text-base">
              Algunos proyectos de {service.title.toLowerCase()} que hemos realizado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            {service.portfolio.map((item) => (
              <div 
                key={item.id}
                className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={item.image}
                  alt={item.title}
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

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              Listo para comenzar tu proyecto?
            </h2>
            <p className="text-primary-foreground/80 mb-8">
              Cotiza sin compromiso y recibe una propuesta personalizada
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button 
                asChild 
                size="lg"
                className="bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/cotizar">
                  Cotizar ahora
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg"
                variant="outline"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <a href="https://wa.me/573143167898" target="_blank" rel="noopener noreferrer">
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
              Preguntas frecuentes
            </h2>
            
            <div className="space-y-4">
              <Card className="bg-card border-border">
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Cuanto cuesta este servicio?
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    El precio depende de las necesidades especificas de tu proyecto. 
                    Contactanos para recibir una cotizacion personalizada sin compromiso.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Cuanto tiempo toma la entrega?
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Los tiempos varian segun la complejidad. Proyectos simples se 
                    entregan en 1-2 semanas, los mas complejos en 3-4 semanas.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-card border-border">
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-semibold text-foreground mb-2">
                    Incluyen revisiones?
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Si, todos nuestros proyectos incluyen revisiones para asegurar 
                    tu satisfaccion total con el resultado final.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-12 md:py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-foreground mb-8 text-center">
            Otros servicios
          </h2>
          
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
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
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
  )
}
