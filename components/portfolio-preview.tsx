"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, ArrowRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/parallax-section"
import { cn } from "@/lib/utils"

const portfolioItems = [
  {
    id: 1,
    title: "Sesion Quince Años",
    category: "Eventos",
    image: "/Fotografia/DSC03020.jpg",
  },
  {
    id: 2,
    title: "Produccion Musical",
    category: "Videos Musicales",
    image: "/Fotografia/DSC05182.jpg",
  },
  {
    id: 3,
    title: "Behind The Scenes",
    category: "Detras de Camaras",
    image: "/Fotografia/DSC06008.jpg",
  },
  {
    id: 4,
    title: "Sesion Elegante",
    category: "Fotografia",
    image: "/Fotografia/DSC_8852.jpg",
  },
  {
    id: 5,
    title: "Vuelo FPV",
    category: "Drones",
    image: "/piloto1.jpg",
  },
]

export function PortfolioPreview() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [deSolPlaying, setDeSolPlaying] = useState(false)

  return (
    <section className="py-16 md:py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, currentColor 1px, transparent 0), linear-gradient(180deg, currentColor 1px, transparent 0)`,
          backgroundSize: '64px 64px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-8 md:mb-12">
            <div>
              <span className="text-primary text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
                Portafolio
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4">
                Nuestro trabajo habla por si mismo
              </h2>
            </div>
            <Button asChild variant="outline" className="w-fit">
              <Link href="/portafolio" className="flex items-center gap-2">
                Ver todo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </FadeIn>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {/* Large item */}
          <FadeIn delay={100} className="col-span-2 row-span-2">
            <PortfolioItem
              item={portfolioItems[0]}
              isHovered={hoveredId === portfolioItems[0].id}
              onHover={setHoveredId}
              isLarge
            />
          </FadeIn>

          {/* Smaller items */}
          {portfolioItems.slice(1).map((item, index) => (
            <FadeIn key={item.id} delay={200 + index * 100} className="col-span-1">
              <PortfolioItem
                item={item}
                isHovered={hoveredId === item.id}
                onHover={setHoveredId}
              />
            </FadeIn>
          ))}
        </div>

        {/* De Sol a SOL Series Section */}
        <FadeIn delay={400}>
          <div className="mt-12 md:mt-16 relative rounded-2xl md:rounded-3xl overflow-hidden">
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src="/DeSolaSol.jpg"
                alt="De Sol a SOL - Serie audiovisual de Teban Visual"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-background/70" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />
            </div>

            <div className="relative z-10 py-16 md:py-24 text-center px-4">
              <div className="max-w-2xl mx-auto">
                {/* Badge */}
                <span className="inline-block bg-primary/20 border border-primary/40 text-primary text-xs font-semibold tracking-widest uppercase px-4 py-1.5 rounded-full mb-6">
                  Serie Audiovisual Original
                </span>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                  De Sol a SOL
                  <span className="block text-primary text-lg md:text-xl font-medium mt-1">by TebanVisual</span>
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8 max-w-xl mx-auto">
                  Una serie audiovisual que transforma historias reales en contenido impactante.
                  Acompañamos a trabajadores durante toda su jornada para capturar su esfuerzo,
                  esencia y autenticidad, convirtiéndolos en piezas cinematográficas ideales para
                  redes sociales. Un proyecto que conecta marcas, personas y audiencias desde lo real.
                </p>

                {/* Play button + CTA */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                  {!deSolPlaying ? (
                    <button
                      onClick={() => setDeSolPlaying(true)}
                      className="flex items-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-full font-medium transition-all hover:scale-105 shadow-lg"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                        <Play className="h-4 w-4 ml-0.5" />
                      </div>
                      Ver Primer Capítulo
                    </button>
                  ) : (
                    <div className="w-full max-w-2xl aspect-video rounded-xl overflow-hidden">
                      <iframe
                        src="https://www.youtube.com/embed/m0fmN_1JVak?autoplay=1&rel=0"
                        title="De Sol a SOL - Capitulo 1 - Teban Visual"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      />
                    </div>
                  )}
                  {!deSolPlaying && (
                    <a
                      href="https://www.youtube.com/watch?v=m0fmN_1JVak&t=115s"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Abrir en YouTube
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

interface PortfolioItemProps {
  item: typeof portfolioItems[0]
  isHovered: boolean
  onHover: (id: number | null) => void
  isLarge?: boolean
}

function PortfolioItem({ item, isHovered, onHover, isLarge }: PortfolioItemProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group h-full",
        isLarge ? "aspect-square md:aspect-auto" : "aspect-square"
      )}
      onMouseEnter={() => onHover(item.id)}
      onMouseLeave={() => onHover(null)}
      onTouchStart={() => onHover(item.id)}
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className={cn(
          "object-cover transition-transform duration-700",
          isHovered && "scale-110"
        )}
      />

      <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent transition-opacity duration-300",
        isHovered ? "opacity-100" : "opacity-0 sm:opacity-0"
      )} />

      <div className={cn(
        "absolute inset-0 flex flex-col justify-end p-3 md:p-4 transition-all duration-300",
        isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 sm:translate-y-4 sm:opacity-0"
      )}>
        <span className="text-primary text-xs font-semibold uppercase tracking-wider">
          {item.category}
        </span>
        <h3 className="text-foreground font-semibold text-sm md:text-base mt-1">{item.title}</h3>
      </div>

      <div className={cn(
        "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
        isHovered ? "opacity-100" : "opacity-0"
      )}>
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/90 flex items-center justify-center">
          <Play className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground ml-1" />
        </div>
      </div>
    </div>
  )
}
