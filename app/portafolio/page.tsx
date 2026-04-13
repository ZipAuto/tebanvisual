"use client"

import { useState } from "react"
import type { Metadata } from "next"
import Image from "next/image"
import { Play, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "Todos" },
  { id: "videos-musicales", label: "Videos Musicales" },
  { id: "comerciales", label: "Comerciales" },
  { id: "eventos", label: "Eventos" },
  { id: "fotografia", label: "Fotografia" },
]

const portfolioItems = [
  {
    id: 1,
    title: "Sesion Quince Anos",
    category: "eventos",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC07862-EtDgzntk39dlNmryFEbwDm5FvDak2s.jpg",
    description: "Sesion fotografica y video para celebracion de quince anos",
  },
  {
    id: 2,
    title: "Behind The Scenes - Evento Musical",
    category: "videos-musicales",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5849.JPG-BWNxDVFffIzUJXtjgvuQtcmCXjRQ1D.jpeg",
    description: "Cobertura detras de camaras de produccion musical",
  },
  {
    id: 3,
    title: "Produccion en Vivo",
    category: "videos-musicales",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5853.JPG-tuyAFBW9jpDevVyuUx8qdAsU322JU3.jpeg",
    description: "Grabacion de evento musical en vivo",
  },
  {
    id: 4,
    title: "Sesion Elegante",
    category: "fotografia",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_9882-o8JPdGbblw9dDMRM4QdCDBmkLuU2O7.jpg",
    description: "Sesion fotografica profesional",
  },
  {
    id: 5,
    title: "Operador de Drone",
    category: "comerciales",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0114.JPG-xYFomn9ReppjNSRWp1Md7qIvLe7U1j.jpeg",
    description: "Tomas aereas con drones profesionales",
  },
]

export default function PortafolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedItem, setSelectedItem] = useState<typeof portfolioItems[0] | null>(null)

  const filteredItems = activeCategory === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory)

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Portafolio
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Nuestro trabajo
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explora una seleccion de nuestros proyectos mas destacados. Cada trabajo 
              representa nuestro compromiso con la excelencia y la creatividad.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? "default" : "outline"}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  activeCategory === category.id 
                    ? "bg-primary text-primary-foreground" 
                    : "border-border text-muted-foreground hover:text-foreground"
                )}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-primary text-xs font-medium uppercase tracking-wider mb-1">
                    {categories.find(c => c.id === item.category)?.label}
                  </span>
                  <h3 className="text-foreground font-semibold text-lg">{item.title}</h3>
                </div>

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center">
                    <Play className="h-6 w-6 text-primary-foreground ml-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No hay proyectos en esta categoria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setSelectedItem(null)}
          >
            <X className="h-6 w-6" />
          </button>
          
          <div 
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src={selectedItem.image}
                alt={selectedItem.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                {categories.find(c => c.id === selectedItem.category)?.label}
              </span>
              <h3 className="text-foreground text-xl font-semibold mt-1">{selectedItem.title}</h3>
              <p className="text-muted-foreground mt-2">{selectedItem.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Te gustaria ser parte de nuestro portafolio?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Crea contenido increible con nosotros. Contactanos y comencemos a 
            trabajar en tu proximo proyecto.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <a href="/cotizar">Solicitar Cotizacion</a>
          </Button>
        </div>
      </section>
    </div>
  )
}
