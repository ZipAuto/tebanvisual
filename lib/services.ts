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
    subtitle: "Tu música merece ser vista",
    description: "Producción cinematográfica para artistas que buscan destacar. Desde videoclips sencillos hasta producciones con narrativa compleja, creamos visuales que conectan con tu audiencia.",
    icon: "music",
    features: [
      "Dirección artística profesional",
      "Grabación en 4K/6K cinematográfico",
      "Color grading estilo cine",
      "Efectos visuales y motion graphics",
      "Locaciones indoor y outdoor",
      "Drones cinematográficos incluidos"
    ],
    portfolio: [
      {
        id: "vm-1",
        title: "Producción Musical HEREDERO",
        image: "/Fotografia/HEREDERO.jpeg",
        videoUrl: "https://www.youtube.com/watch?v=DGoYBqhB8f4&t=2s",
        category: "Videos Musicales"
      },
      {
        id: "vm-2",
        title: "Producción Musical LOLA",
        image: "/Fotografia/DSC04392.jpg",
        videoUrl: "https://www.youtube.com/watch?v=1xS0Fh4SOxw&list=RD1xS0Fh4SOxw&start_radio=1",
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
      "Producción de alto impacto",
      "Casting y dirección de talento",
      "Post-producción cinematográfica",
      "Adaptaciones para todas las plataformas",
      "Música y sonido con licencia"
    ],
    portfolio: [
      {
        id: "com-1",
        title: "Palatino Grill",
        image: "/palestino.png",
        videoUrl: "/servicios/comerciales/",
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
    description: "Cobertura profesional de matrimonios, bodas, eventos corporativos y empresariales con equipos de última generación. Cada momento importante merece ser inmortalizado.",
    icon: "calendar",
    features: [
      "Equipo multicámara profesional",
      "Cobertura con drones",
      "Transmisión en vivo disponible",
      "Edición rápida para highlights",
      "Video resumen cinematográfico",
      "Entrega express disponible"
    ],
    portfolio: [
      {
        id: "ev-1",
        title: "Sesión Quince Años",
        image: "/Fotografia/DSC09830.jpg.jpeg",
        category: "Eventos"
      },
      {
        id: "ev-2",
        title: "Evento Elegante",
        image: "/Fotografia/DSC09735 2.jpg.jpeg",
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
    description: "Creación de contenido optimizado para Instagram, TikTok, YouTube y todas las plataformas digitales. Contenido viral que posiciona tu marca.",
    icon: "share",
    features: [
      "Estrategia de contenido mensual",
      "Reels, TikToks y Shorts",
      "Formato vertical optimizado",
      "Tendencias y viral content",
      "Calendario de publicación",
      "Análisis y métricas"
    ],
    portfolio: [
      {
        id: "rs-1",
        title: "Contenido Lifestyle",
        image: "/Fotografia/DSC_2086.jpg.jpeg",
        category: "Redes Sociales"
      },
      {
        id: "rs-2",
        title: "Sesión Urbana",
        image: "/Fotografia/IMG_1416.JPG.jpeg",
        category: "Redes Sociales"
      }
    ],
    cta: "Cotizar Contenido"
  },
  {
    id: "booking-drones",
    slug: "booking-drones",
    title: "Booking Drones",
    subtitle: "Perspectivas únicas",
    description: "Alquiler de drones cinematográficos con piloto certificado para tus producciones aéreas. Tomas espectaculares que elevan tu proyecto.",
    icon: "plane",
    features: [
      "Drones DJI profesionales",
      "Piloto certificado incluido",
      "Grabación 4K/6K RAW",
      "FPV cinematográfico disponible",
      "Seguro de vuelo incluido",
      "Permisos gestionados"
    ],
    portfolio: [
      {
        id: "dr-1",
        title: "Piloto FPV Certificado",
        image: "/piloto1.jpg",
        category: "Drones"
      },
      {
        id: "dr-2",
        title: "Operador DJI Profesional",
        image: "/piloto2.jpg",
        category: "Drones"
      }
    ],
    cta: "Reservar Drone"
  },
  {
    id: "produccion-estrategia",
    slug: "produccion-estrategia",
    title: "Produccion + Estrategia",
    subtitle: "Visión integral",
    description: "Consultoría y producción audiovisual estratégica para marcas que buscan resultados a largo plazo. Tu socio creativo de confianza.",
    icon: "lightbulb",
    features: [
      "Análisis de marca y competencia",
      "Estrategia audiovisual integral",
      "Producción continua mensual",
      "Dirección creativa dedicada",
      "Métricas y optimización",
      "Soporte prioritario"
    ],
    portfolio: [
      {
        id: "pe-1",
        title: "Planificación Estratégica",
        image: "/Estrategia.jpg",
        category: "Estrategia"
      },
      {
        id: "pe-2",
        title: "Ejecución y Resultados",
        image: "/Estrategia2.jpeg",
        category: "Estrategia"
      }
    ],
    cta: "Agendar Consultoría"
  }
]

export function getServiceBySlug(slug: string): ServiceCategory | undefined {
  return services.find(s => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map(s => s.slug)
}
