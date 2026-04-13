"use client"

import { useState, useEffect } from "react"
import { Phone, MessageCircle, ChevronUp, Instagram } from "lucide-react"
import { cn } from "@/lib/utils"

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const whatsappNumber = "573143167898"
  const whatsappMessage = encodeURIComponent("Hola! Me gustaria obtener informacion sobre sus servicios de produccion audiovisual.")

  return (
    <>
      {/* Floating Action Buttons - Right Side */}
      <div className="fixed bottom-6 right-4 md:right-6 z-50 flex flex-col items-end gap-3">
        {/* Scroll to top */}
        <button
          onClick={scrollToTop}
          className={cn(
            "w-12 h-12 rounded-full bg-secondary text-secondary-foreground shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110",
            showScrollTop ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
          )}
          aria-label="Volver arriba"
        >
          <ChevronUp className="h-5 w-5" />
        </button>

        {/* Expandable contact options */}
        <div className="relative">
          {/* Expanded buttons */}
          <div className={cn(
            "absolute bottom-16 right-0 flex flex-col gap-3 transition-all duration-300",
            isExpanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          )}>
            <a
              href="tel:+573143167898"
              className="w-12 h-12 rounded-full bg-foreground text-background shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Llamar"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="https://instagram.com/tebanvisual"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Main WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform relative group"
            aria-label="WhatsApp"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
            {/* Pulse animation */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25" />
          </a>
        </div>
      </div>

      {/* WhatsApp Chat Widget - Mobile optimized */}
      <div className="fixed bottom-6 left-4 md:left-6 z-50 hidden md:block">
        <div className="bg-card border border-border rounded-2xl shadow-xl p-4 max-w-[280px]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Teban Visual</p>
              <p className="text-xs text-muted-foreground">Responde en minutos</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-3">
            Hola! Como podemos ayudarte con tu proyecto audiovisual?
          </p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] text-white text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-[#20BD5A] transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            Iniciar conversacion
          </a>
        </div>
      </div>
    </>
  )
}
