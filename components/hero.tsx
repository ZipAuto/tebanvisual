"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Play, ChevronDown, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video/Image Background with Parallax */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        {/* Fallback image */}
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5849.JPG-BWNxDVFffIzUJXtjgvuQtcmCXjRQ1D.jpeg"
          alt="Teban Visual - Produccion Audiovisual"
          fill
          className={cn(
            "object-cover transition-opacity duration-1000",
            isVideoLoaded ? "opacity-0" : "opacity-100"
          )}
          priority
        />
        
        {/* Video element */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-1000",
            isVideoLoaded ? "opacity-100" : "opacity-0"
          )}
          poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5849.JPG-BWNxDVFffIzUJXtjgvuQtcmCXjRQ1D.jpeg"
        >
          {/* Add your video source here */}
          {/* <source src="/videos/intro-teban-visual.mp4" type="video/mp4" /> */}
        </video>

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12 md:pt-20 md:pb-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Logo - Prominent on mobile */}
          <div className="mb-6 md:mb-8">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Teban%20Visual%20%281%29-fnIhif7GIj8fpExbJec68UVA4xTi7j.png"
              alt="Teban Visual"
              width={300}
              height={120}
              className="w-48 md:w-64 lg:w-80 h-auto"
              priority
            />
          </div>

          {/* Tagline */}
          <span className="inline-block text-primary text-xs md:text-sm font-semibold tracking-[0.2em] uppercase mb-4 md:mb-6">
            Produccion Audiovisual Profesional
          </span>
          
          {/* Main Headline - Mobile optimized */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-4 md:mb-6">
            Transformamos tus{" "}
            <span className="text-primary">ideas</span>
            <br className="hidden sm:block" />
            {" "}en{" "}
            <span className="text-primary">historias visuales</span>
          </h1>
          
          {/* Subtitle - Mobile optimized */}
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mb-8 md:mb-10 leading-relaxed px-4">
            Videos musicales, comerciales, eventos y contenido para redes sociales 
            con calidad cinematografica que conecta con tu audiencia.
          </p>

          {/* CTA Buttons - Mobile stack */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto px-4 sm:px-0">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base h-12 md:h-14 px-6 md:px-8 w-full sm:w-auto"
            >
              <Link href="/cotizar">
                Cotizar Proyecto
              </Link>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-foreground/30 text-foreground hover:bg-foreground/10 text-base h-12 md:h-14 px-6 md:px-8 w-full sm:w-auto"
            >
              <Link href="/portafolio" className="flex items-center justify-center gap-2">
                <Play className="h-4 w-4" />
                Ver Portafolio
              </Link>
            </Button>
          </div>

          {/* Quick WhatsApp - Mobile prominent */}
          <a
            href="https://wa.me/573143167898?text=Hola!%20Me%20gustaria%20obtener%20informacion%20sobre%20sus%20servicios."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            O escribe directo por WhatsApp
          </a>
        </div>

        {/* Stats - Mobile horizontal scroll friendly */}
        <div className="mt-12 md:mt-16">
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">500+</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Proyectos</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">8+</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Años</p>
            </div>
            <div className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">100%</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">Satisfaccion</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={scrollToContent}
        className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce cursor-pointer"
        aria-label="Scroll para ver mas"
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
      </button>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-[5]" />
    </section>
  )
}
