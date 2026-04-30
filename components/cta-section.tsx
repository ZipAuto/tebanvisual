"use client"

import { useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle } from "lucide-react"
import { FadeIn } from "@/components/parallax-section"

const BASE_PATH = "/tebanvisual"

export function CTASection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75
    }
  }, [])

  return (
    <section className="relative overflow-hidden">
      {/* Video background */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={`${BASE_PATH}/DeSolaSol.jpg`}
        >
          <source src={`${BASE_PATH}/videopresentacion.mp4`} type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background/60" />
      </div>

      <div className="relative z-10 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-3xl mx-auto text-center">
              {/* Logo */}
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Teban%20Visual%20%281%29-fnIhif7GIj8fpExbJec68UVA4xTi7j.png"
                alt="Teban Visual"
                width={200}
                height={80}
                className="h-12 md:h-16 w-auto mx-auto mb-8"
              />

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                Listo para llevar tu proyecto al siguiente nivel?
              </h2>
              <p className="text-muted-foreground text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto">
                Contactanos hoy y recibe una cotizacion personalizada para tu proyecto.
                Sin compromisos, solo soluciones creativas.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground h-12 md:h-14 px-6 md:px-8"
                >
                  <Link href="/cotizar" className="flex items-center gap-2">
                    Cotizar Ahora
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                <Button
                  asChild
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white h-12 md:h-14 px-6 md:px-8"
                >
                  <a
                    href="https://wa.me/573143167898?text=Hola!%20Me%20gustaria%20obtener%20informacion%20sobre%20sus%20servicios."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" />
                    WhatsApp Directo
                  </a>
                </Button>
              </div>

              {/* Trust badges */}
              <div className="mt-10 md:mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#25D366]" />
                  <span>Respuesta en 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Sin compromisos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span>Cotizacion gratis</span>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
