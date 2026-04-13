"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Music, Video, Calendar, Share2, Plane, Lightbulb, ArrowRight, Play, Check } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/services"
import { FadeIn } from "@/components/parallax-section"
import { cn } from "@/lib/utils"

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  music: Music,
  video: Video,
  calendar: Calendar,
  share: Share2,
  plane: Plane,
  lightbulb: Lightbulb,
}

export function ServicesSection() {
  const [activeService, setActiveService] = useState(0)
  const currentService = services[activeService]
  const Icon = iconMap[currentService.icon] || Video

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
          backgroundSize: '48px 48px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="text-primary text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
              Nuestros Servicios
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
              Soluciones audiovisuales para cada necesidad
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
              Desde videos musicales hasta estrategias de contenido completas, 
              tenemos el servicio perfecto para tu proyecto.
            </p>
          </div>
        </FadeIn>

        {/* Service Tabs - Horizontal scroll on mobile */}
        <div className="mb-8 md:mb-12 overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0">
          <div className="flex gap-2 md:gap-3 md:justify-center min-w-max md:min-w-0 md:flex-wrap">
            {services.map((service, index) => {
              const ServiceIcon = iconMap[service.icon] || Video
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(index)}
                  className={cn(
                    "flex items-center gap-2 px-4 md:px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap",
                    activeService === index
                      ? "bg-primary text-primary-foreground"
                      : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50"
                  )}
                >
                  <ServiceIcon className="h-4 w-4" />
                  <span className="hidden sm:inline">{service.title}</span>
                  <span className="sm:hidden">{service.title.split(" ")[0]}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Active Service Detail */}
        <FadeIn key={currentService.id}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                    {currentService.title}
                  </h3>
                  <p className="text-primary text-sm font-medium">{currentService.subtitle}</p>
                </div>
              </div>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-6">
                {currentService.description}
              </p>

              {/* Features */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {currentService.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Link href="/cotizar">
                    {currentService.cta}
                  </Link>
                </Button>
                <Button 
                  asChild 
                  variant="outline" 
                  size="lg"
                >
                  <Link href={`/servicios/${currentService.slug}`}>
                    Ver mas detalles
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Portfolio Preview */}
            <div className="order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {currentService.portfolio.map((item, index) => (
                  <div 
                    key={item.id}
                    className={cn(
                      "relative rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer",
                      index === 0 ? "col-span-2 aspect-video" : "aspect-square"
                    )}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/90 flex items-center justify-center">
                        <Play className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-foreground font-medium text-sm md:text-base">{item.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeIn>

        {/* All Services Grid - Mobile friendly */}
        <div className="mt-16 md:mt-24">
          <FadeIn>
            <h3 className="text-xl md:text-2xl font-bold text-foreground text-center mb-8">
              Todos nuestros servicios
            </h3>
          </FadeIn>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {services.map((service, index) => {
              const ServiceIcon = iconMap[service.icon] || Video
              return (
                <FadeIn key={service.id} delay={index * 100}>
                  <Link href={`/servicios/${service.slug}`}>
                    <Card className="h-full bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                      <CardContent className="p-4 md:p-6 text-center">
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                          <ServiceIcon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                        </div>
                        <h4 className="font-semibold text-foreground text-sm md:text-base group-hover:text-primary transition-colors">
                          {service.title}
                        </h4>
                      </CardContent>
                    </Card>
                  </Link>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
