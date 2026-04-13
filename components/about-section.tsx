"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Camera, Film, Sparkles, Users, Play } from "lucide-react"
import { ParallaxSection, FadeIn } from "@/components/parallax-section"

const features = [
  {
    icon: Camera,
    title: "Equipo Profesional",
    description: "Camaras Sony, lentes cinematograficos y equipos de iluminacion de ultima generacion."
  },
  {
    icon: Film,
    title: "Calidad Cinematografica",
    description: "Post-produccion con color grading profesional y efectos visuales de alto nivel."
  },
  {
    icon: Sparkles,
    title: "Creatividad Sin Limites",
    description: "Cada proyecto es unico. Desarrollamos conceptos creativos adaptados a tu vision."
  },
  {
    icon: Users,
    title: "Equipo Dedicado",
    description: "Profesionales apasionados comprometidos con la excelencia en cada detalle."
  }
]

const stats = [
  { value: "500+", label: "Proyectos Realizados" },
  { value: "8+", label: "Anos de Experiencia" },
  { value: "50+", label: "Clientes Satisfechos" },
  { value: "24h", label: "Tiempo de Respuesta" },
]

export function AboutSection() {
  return (
    <section className="relative">
      {/* Parallax Background Section */}
      <ParallaxSection
        backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5853.JPG-tuyAFBW9jpDevVyuUx8qdAsU322JU3.jpeg"
        overlay="gradient"
        minHeight="auto"
        className="py-16 md:py-24"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Images - Mobile optimized */}
            <FadeIn direction="left">
              <div className="relative">
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="space-y-3 md:space-y-4">
                    <div className="relative aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden group">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5849.JPG-BWNxDVFffIzUJXtjgvuQtcmCXjRQ1D.jpeg"
                        alt="Teban Visual en accion"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/90 flex items-center justify-center">
                          <Play className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground ml-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3 md:space-y-4 pt-6 md:pt-8">
                    <div className="relative aspect-[3/4] rounded-xl md:rounded-2xl overflow-hidden group">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0114.JPG-xYFomn9ReppjNSRWp1Md7qIvLe7U1j.jpeg"
                        alt="Piloto de drone FPV"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Badge - Mobile adjusted */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-lg">
                  <p className="text-xl md:text-2xl font-bold text-center">8+</p>
                  <p className="text-xs md:text-sm whitespace-nowrap">Anos de experiencia</p>
                </div>
              </div>
            </FadeIn>

            {/* Content */}
            <FadeIn direction="right" delay={200}>
              <div className="lg:pl-4 mt-8 lg:mt-0">
                <span className="text-primary text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
                  Sobre Nosotros
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4 md:mb-6 leading-tight">
                  Pasion por contar historias a traves del lente
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                  En Teban Visual combinamos creatividad, tecnologia y pasion para crear 
                  contenido audiovisual que impacta. Desde videos musicales hasta campanas 
                  publicitarias, cada proyecto recibe nuestra dedicacion completa.
                </p>

                {/* Features - Mobile 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                  {features.map((feature, index) => (
                    <FadeIn key={feature.title} delay={300 + index * 100}>
                      <div className="flex gap-3 md:gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground text-sm md:text-base mb-1">{feature.title}</h3>
                          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </div>

                <Button asChild size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link href="/nosotros">Conocer mas</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </ParallaxSection>

      {/* Stats Section */}
      <div className="bg-card py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <FadeIn key={stat.label} delay={index * 100}>
                <div className="text-center">
                  <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">{stat.value}</p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 md:mt-2">{stat.label}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
