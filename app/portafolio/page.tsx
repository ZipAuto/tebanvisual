"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "Todos" },
  { id: "fotografia", label: "Fotografía" },
  { id: "videos-musicales", label: "Videos Musicales" },
  { id: "eventos", label: "Eventos" },
  { id: "drones", label: "Drones" },
  { id: "comerciales", label: "Comerciales" },
]

const portfolioItems = [
  // Fotografía — todas las fotos de la carpeta Fotografia
  { id: 1,  title: "Sesión Profesional",       category: "fotografia",       image: "/Fotografia/DSC03020.jpg" },
  { id: 2,  title: "Retrato Artístico",         category: "fotografia",       image: "/Fotografia/DSC04392.jpg" },
  { id: 3,  title: "Sesión de Moda",            category: "fotografia",       image: "/Fotografia/DSC05182.jpg" },
  { id: 4,  title: "Sesión Elegante",           category: "fotografia",       image: "/Fotografia/DSC05223-2.jpg" },
  { id: 5,  title: "Fotografía Artística",      category: "fotografia",       image: "/Fotografia/DSC05991.jpg" },
  { id: 6,  title: "Retrato Cinemático",        category: "fotografia",       image: "/Fotografia/DSC06008.jpg" },
  { id: 7,  title: "Sesión Conceptual",         category: "fotografia",       image: "/Fotografia/DSC06308.jpg" },
  { id: 8,  title: "Fotografía Editorial",      category: "fotografia",       image: "/Fotografia/DSC08444.jpg" },
  { id: 9,  title: "Retrato con Luz Natural",   category: "fotografia",       image: "/Fotografia/DSC08444-2.jpg" },
  { id: 10, title: "Sesión Exterior",           category: "fotografia",       image: "/Fotografia/DSC09135.jpg" },
  { id: 11, title: "Fotografía de Evento",      category: "eventos",          image: "/Fotografia/DSC09735 2.jpg.jpeg" },
  { id: 12, title: "Sesión Quince Años",        category: "eventos",          image: "/Fotografia/DSC09830.jpg.jpeg" },
  { id: 13, title: "Fotografía de Boda",        category: "eventos",          image: "/Fotografia/DSC_1436 2.jpg.jpeg" },
  { id: 14, title: "Retrato Urbano",            category: "fotografia",       image: "/Fotografia/DSC_2086.jpg.jpeg" },
  { id: 15, title: "Sesión Lifestyle",          category: "fotografia",       image: "/Fotografia/DSC_2088 2.jpg.jpeg" },
  { id: 16, title: "Fotografía Comercial",      category: "comerciales",      image: "/Fotografia/DSC_3495.jpg.jpeg" },
  { id: 17, title: "Retrato en Estudio",        category: "fotografia",       image: "/Fotografia/DSC_6126.jpg" },
  { id: 18, title: "Sesión Behind the Scenes",  category: "videos-musicales", image: "/Fotografia/DSC_8852.jpg" },
  { id: 19, title: "Producción Musical",        category: "videos-musicales", image: "/Fotografia/DSC_9323.jpg.jpeg" },
  { id: 20, title: "Artista en Escena",         category: "videos-musicales", image: "/Fotografia/DSC_9325.jpg.jpeg" },
  { id: 21, title: "Sesión Artística",          category: "fotografia",       image: "/Fotografia/IMG_0052.JPG.jpeg" },
  { id: 22, title: "Retrato Femenino",          category: "fotografia",       image: "/Fotografia/IMG_0911.JPG.jpeg" },
  { id: 23, title: "Fotografía de Moda",        category: "fotografia",       image: "/Fotografia/IMG_0926.JPG.jpeg" },
  { id: 24, title: "Look Book",                 category: "fotografia",       image: "/Fotografia/IMG_0927.JPG.jpeg" },
  { id: 25, title: "Sesión Urbana",             category: "fotografia",       image: "/Fotografia/IMG_1416.JPG.jpeg" },
  { id: 26, title: "Editorial de Moda",         category: "fotografia",       image: "/Fotografia/IMG_1417.JPG.jpeg" },
  { id: 27, title: "Fotografía de Vida",        category: "fotografia",       image: "/Fotografia/IMG_1851.JPG.jpeg" },
  { id: 28, title: "Sesión Cotidiana",          category: "fotografia",       image: "/Fotografia/IMG_1859.JPG.jpeg" },
  { id: 29, title: "Evento al Aire Libre",      category: "eventos",          image: "/Fotografia/IMG_20220709_122037.jpg" },
  { id: 30, title: "Artista en Set",            category: "videos-musicales", image: "/Fotografia/IMG_9881.JPG.jpeg" },
  { id: 31, title: "Behind The Scenes",         category: "videos-musicales", image: "/Fotografia/IMG_9883.JPG.jpeg" },
  // Drones
  { id: 32, title: "Piloto FPV en Acción",      category: "drones",           image: "/piloto1.jpg" },
  { id: 33, title: "Operador DJI Profesional",  category: "drones",           image: "/piloto2.jpg" },
]

export default function PortafolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const filtered = activeCategory === "all"
    ? portfolioItems
    : portfolioItems.filter((i) => i.category === activeCategory)

  const openLightbox = (idx: number) => setLightboxIndex(idx)
  const closeLightbox = () => setLightboxIndex(null)
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null))
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null))

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">Portafolio</span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">Nuestro trabajo</h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explora una selección de nuestros proyectos más destacados: fotografía profesional,
              videos musicales, eventos y más. Haz clic en cualquier imagen para verla en tamaño completo.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 border-b border-border sticky top-[64px] z-30 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                size="sm"
                onClick={() => { setActiveCategory(cat.id); setLightboxIndex(null) }}
                className={cn(
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground"
                    : "border-border text-muted-foreground hover:text-foreground"
                )}
              >
                {cat.label}
                <span className="ml-1.5 text-xs opacity-70">
                  ({cat.id === "all" ? portfolioItems.length : portfolioItems.filter(i => i.category === cat.id).length})
                </span>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry-style Gallery */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No hay proyectos en esta categoría.</p>
            </div>
          ) : (
            <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
              {filtered.map((item, idx) => (
                <div
                  key={item.id}
                  className="break-inside-avoid group relative cursor-pointer rounded-xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md"
                  onClick={() => openLightbox(idx)}
                >
                  <div className="relative w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{ display: "block" }}
                    />
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-background/0 group-hover:bg-background/50 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center shadow-lg">
                        <ZoomIn className="h-5 w-5 text-primary-foreground" />
                      </div>
                      <p className="text-foreground text-xs font-medium text-center px-2 bg-background/80 rounded px-2 py-0.5">{item.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-background/97 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Cerrar"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Counter */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-card border border-border px-3 py-1 rounded-full text-sm text-muted-foreground z-10">
            {lightboxIndex + 1} / {filtered.length}
          </div>

          {/* Prev */}
          <button
            className="absolute left-3 md:left-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>

          {/* Image */}
          <div
            className="max-w-5xl max-h-[85vh] w-full mx-16 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[75vh] flex items-center justify-center">
              <Image
                src={filtered[lightboxIndex].image}
                alt={filtered[lightboxIndex].title}
                width={1200}
                height={900}
                className="max-w-full max-h-[75vh] w-auto h-auto object-contain rounded-xl shadow-2xl"
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-foreground font-semibold">{filtered[lightboxIndex].title}</p>
              <p className="text-muted-foreground text-sm capitalize mt-1">
                {categories.find(c => c.id === filtered[lightboxIndex].category)?.label}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            className="absolute right-3 md:right-6 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            ¿Te gustaría ser parte de nuestro portafolio?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Crea contenido increíble con nosotros. Contáctanos y comencemos a
            trabajar en tu próximo proyecto.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/cotizar">Solicitar Cotización</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
