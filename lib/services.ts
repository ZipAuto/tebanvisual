export interface PortfolioItem {
  id: string
  title: string
  image: string
  videoUrl?: string
  category: string
}

export interface ServiceCategory {
  id: string
  slug: string
  title: string
  subtitle: string
  description: string
  icon: string
  features: string[]
  portfolio: PortfolioItem[]
  cta: string
}

export const services: ServiceCategory[] = [
  {
    id: "videos-musicales",
    slug: "videos-musicales",
    title: "Videos Musicales",
    subtitle: "Tu musica merece ser vista",
    description: "Produccion cinematografica para artistas que buscan destacar. Desde videoclips sencillos hasta producciones con narrativa compleja, creamos visuales que conectan con tu audiencia.",
    icon: "music",
    features: [
      "Direccion artistica profesional",
      "Grabacion en 4K/6K cinematografico",
      "Color grading estilo cine",
      "Efectos visuales y motion graphics",
      "Locaciones indoor y outdoor",
      "Drones cinematograficos incluidos"
    ],
    portfolio: [
      {
        id: "vm-1",
        title: "Videoclip Regional Mexicano",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5849.JPG-BWNxDVFffIzUJXtjgvuQtcmCXjRQ1D.jpeg",
        category: "Videos Musicales"
      },
      {
        id: "vm-2",
        title: "Behind The Scenes",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5853.JPG-tuyAFBW9jpDevVyuUx8qdAsU322JU3.jpeg",
        category: "Videos Musicales"
      }
    ],
    cta: "Cotizar Video Musical"
  },
  {
    id: "comerciales",
    slug: "comerciales",
    title: "Comerciales",
    subtitle: "Tu marca en movimiento",
    description: "Videos publicitarios que conectan con tu audiencia y generan resultados medibles. Creamos contenido que convierte espectadores en clientes.",
    icon: "video",
    features: [
      "Concepto creativo y guion",
      "Produccion de alto impacto",
      "Casting y direccion de talento",
      "Post-produccion cinematografica",
      "Adaptaciones para todas las plataformas",
      "Musica y sonido con licencia"
    ],
    portfolio: [
      {
        id: "com-1",
        title: "Spot Publicitario",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5849.JPG-BWNxDVFffIzUJXtjgvuQtcmCXjRQ1D.jpeg",
        category: "Comerciales"
      }
    ],
    cta: "Cotizar Comercial"
  },
  {
    id: "eventos",
    slug: "eventos",
    title: "Eventos",
    subtitle: "Captura cada momento",
    description: "Cobertura profesional de eventos corporativos, sociales y conciertos con equipos de ultima generacion. Cada momento importante merece ser inmortalizado.",
    icon: "calendar",
    features: [
      "Equipo multicamara profesional",
      "Cobertura con drones",
      "Transmision en vivo disponible",
      "Edicion rapida para highlights",
      "Video resumen cinematografico",
      "Entrega express disponible"
    ],
    portfolio: [
      {
        id: "ev-1",
        title: "Sesion Quince Anos",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC07862-EtDgzntk39dlNmryFEbwDm5FvDak2s.jpg",
        category: "Eventos"
      },
      {
        id: "ev-2",
        title: "Sesion Elegante",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC_9882-o8JPdGbblw9dDMRM4QdCDBmkLuU2O7.jpg",
        category: "Eventos"
      }
    ],
    cta: "Cotizar Cobertura"
  },
  {
    id: "redes-sociales",
    slug: "redes-sociales",
    title: "Redes Sociales",
    subtitle: "Contenido que conecta",
    description: "Creacion de contenido optimizado para Instagram, TikTok, YouTube y todas las plataformas digitales. Contenido viral que posiciona tu marca.",
    icon: "share",
    features: [
      "Estrategia de contenido mensual",
      "Reels, TikToks y Shorts",
      "Formato vertical optimizado",
      "Tendencias y viral content",
      "Calendario de publicacion",
      "Analisis y metricas"
    ],
    portfolio: [
      {
        id: "rs-1",
        title: "Contenido para Instagram",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5849.JPG-BWNxDVFffIzUJXtjgvuQtcmCXjRQ1D.jpeg",
        category: "Redes Sociales"
      }
    ],
    cta: "Cotizar Contenido"
  },
  {
    id: "booking-drones",
    slug: "booking-drones",
    title: "Booking Drones",
    subtitle: "Perspectivas unicas",
    description: "Alquiler de drones cinematograficos con piloto certificado para tus producciones aereas. Tomas espectaculares que elevan tu proyecto.",
    icon: "plane",
    features: [
      "Drones DJI profesionales",
      "Piloto certificado incluido",
      "Grabacion 4K/6K RAW",
      "FPV cinematografico disponible",
      "Seguro de vuelo incluido",
      "Permisos gestionados"
    ],
    portfolio: [
      {
        id: "dr-1",
        title: "Vuelo FPV Cinematografico",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0114.JPG-xYFomn9ReppjNSRWp1Md7qIvLe7U1j.jpeg",
        category: "Drones"
      }
    ],
    cta: "Reservar Drone"
  },
  {
    id: "produccion-estrategia",
    slug: "produccion-estrategia",
    title: "Produccion + Estrategia",
    subtitle: "Vision integral",
    description: "Consultoria y produccion audiovisual estrategica para marcas que buscan resultados a largo plazo. Tu socio creativo de confianza.",
    icon: "lightbulb",
    features: [
      "Analisis de marca y competencia",
      "Estrategia audiovisual integral",
      "Produccion continua mensual",
      "Direccion creativa dedicada",
      "Metricas y optimizacion",
      "Soporte prioritario"
    ],
    portfolio: [
      {
        id: "pe-1",
        title: "Campana Integral",
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5853.JPG-tuyAFBW9jpDevVyuUx8qdAsU322JU3.jpeg",
        category: "Estrategia"
      }
    ],
    cta: "Agendar Consultoria"
  }
]

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return services.find(s => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map(s => s.slug)
}
