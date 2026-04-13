"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Play, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FadeIn, ParallaxSection } from "@/components/parallax-section"
import { cn } from "@/lib/utils"

const portfolioItems = [
  {
    id: 1,
    title: "Sesion Quince Anos",
    category: "Eventos",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC07862-EtDgzntk39dlNmryFEbwDm5FvDak2s.jpg",
  },
  {
    id: 2,
    title: "Produccion Musical",
    category: "Videos Musicales",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5849.JPG-BWNxDVFffIzUJXtjgvuQtcmCXjRQ1D.jpeg",
  },
  {
    id: 3,
    title: "Behind The Scenes",
    category: "Detras de Camaras",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5853.JPG-tuyAFBW9jpDevVyuUx8qdAsU322JU3.jpeg",
  },
  {
    id: 4,
    title: "Sesion Elegante",
    category: "Fotografia",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_9882-o8JPdGbblw9dDMRM4QdCDBmkLuU2O7.jpg",
  },
  {
    id: 5,
    title: "Vuelo FPV",
    category: "Drones",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0114.JPG-xYFomn9ReppjNSRWp1Md7qIvLe7U1j.jpeg",
  },
]

export function PortfolioPreview() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

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

        {/* Gallery Grid - Mobile optimized */}
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

        {/* Video Reel Section */}
        <FadeIn delay={400}>
          <ParallaxSection
            backgroundImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5849.JPG-BWNxDVFffIzUJXtjgvuQtcmCXjRQ1D.jpeg"
            overlay="dark"
            minHeight="auto"
            className="mt-12 md:mt-16 rounded-2xl md:rounded-3xl overflow-hidden"
          >
            <div className="py-16 md:py-24 text-center">
              <div className="max-w-2xl mx-auto px-4">
                <button className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform group">
                  <Play className="h-6 w-6 md:h-8 md:w-8 text-primary-foreground ml-1 group-hover:scale-110 transition-transform" />
                </button>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-foreground mb-3">
                  Ver Showreel 2024
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Una muestra de nuestros mejores trabajos en video
                </p>
              </div>
            </div>
          </ParallaxSection>
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
      
      {/* Overlay */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent transition-opacity duration-300",
        isHovered ? "opacity-100" : "opacity-0 sm:opacity-0"
      )} />
      
      {/* Content */}
      <div className={cn(
        "absolute inset-0 flex flex-col justify-end p-3 md:p-4 transition-all duration-300",
        isHovered ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0 sm:translate-y-4 sm:opacity-0"
      )}>
        <span className="text-primary text-xs font-semibold uppercase tracking-wider">
          {item.category}
        </span>
        <h3 className="text-foreground font-semibold text-sm md:text-base mt-1">{item.title}</h3>
      </div>

      {/* Play button */}
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
