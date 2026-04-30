"use client"

import { useState } from "react"
import { MessageCircle, Video } from "lucide-react"

interface VideoWithFallbackProps {
  src: string
  poster?: string
  title: string
  description?: string
  whatsappNumber?: string
}

export function VideoWithFallback({
  src,
  poster,
  title,
  description,
  whatsappNumber = "573143167898",
}: VideoWithFallbackProps) {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    const msg = encodeURIComponent(`Hola! Me interesa ver el video de ${title}. ¿Pueden compartírmelo?`)
    return (
      <div className="aspect-video flex flex-col items-center justify-center bg-card border border-border rounded-xl gap-4 p-6 text-center">
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
          <Video className="h-7 w-7 text-primary" />
        </div>
        <div>
          <p className="font-semibold text-foreground">{title}</p>
          {description && <p className="text-sm text-muted-foreground mt-1">{description}</p>}
          <p className="text-xs text-muted-foreground mt-2">
            Video disponible bajo consulta
          </p>
        </div>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${msg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-medium py-2.5 px-4 rounded-lg transition-colors"
        >
          <MessageCircle className="h-4 w-4" />
          Ver por WhatsApp
        </a>
      </div>
    )
  }

  return (
    <video
      controls
      playsInline
      className="w-full aspect-video object-cover rounded-xl"
      poster={poster}
      onError={() => setHasError(true)}
    >
      <source src={src} type="video/mp4" onError={() => setHasError(true)} />
      Tu navegador no soporta video HTML5.
    </video>
  )
}
