"use client"

import { useState } from "react"
import Image from "next/image"
import { Play, X, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"

interface YouTubeVideo {
  id: string
  title: string
}

interface YouTubeCategory {
  name: string
  videos: YouTubeVideo[]
}

interface YouTubeGalleryProps {
  categories: YouTubeCategory[]
}

function getYouTubeId(url: string): string {
  const regexes = [
    /[?&]v=([^&#]+)/,
    /youtu\.be\/([^?&#]+)/,
    /youtube\.com\/embed\/([^?&#]+)/,
  ]
  for (const re of regexes) {
    const match = url.match(re)
    if (match) return match[1]
  }
  return url
}

function YouTubeThumb({ video, onClick }: { video: YouTubeVideo; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative aspect-video rounded-xl overflow-hidden group w-full bg-card border border-border hover:border-primary/50 transition-all"
      aria-label={`Ver video: ${video.title}`}
    >
      <Image
        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
        alt={video.title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        unoptimized
      />
      <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <Play className="h-5 w-5 md:h-6 md:w-6 text-primary-foreground ml-1" />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/90 to-transparent">
        <p className="text-foreground text-xs md:text-sm font-medium text-left line-clamp-2">{video.title}</p>
      </div>
    </button>
  )
}

export function YouTubeGallery({ categories }: YouTubeGalleryProps) {
  const [activeCategory, setActiveCategory] = useState(0)
  const [playingId, setPlayingId] = useState<string | null>(null)

  return (
    <div className="w-full">
      {/* Category tabs */}
      {categories.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-6 overflow-x-auto pb-1">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => { setActiveCategory(i); setPlayingId(null) }}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all",
                i === activeCategory
                  ? "bg-primary text-primary-foreground"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground"
              )}
            >
              {cat.name} ({cat.videos.length})
            </button>
          ))}
        </div>
      )}

      {/* Video grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories[activeCategory].videos.map((video) => (
          playingId === video.id ? (
            <div key={video.id} className="relative aspect-video rounded-xl overflow-hidden bg-background border border-primary">
              <button
                onClick={() => setPlayingId(null)}
                className="absolute top-2 right-2 z-10 w-8 h-8 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
                aria-label="Cerrar video"
              >
                <X className="h-4 w-4" />
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          ) : (
            <YouTubeThumb key={video.id} video={video} onClick={() => setPlayingId(video.id)} />
          )
        ))}
      </div>

      {/* Link to YouTube */}
      <div className="mt-6 text-center">
        <a
          href="https://www.youtube.com/@tebanvisual_oficial"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
          Ver canal completo en YouTube
        </a>
      </div>
    </div>
  )
}

export function parseYouTubeCategories(
  raw: { category: string; url: string; title: string }[]
): YouTubeCategory[] {
  const map = new Map<string, YouTubeVideo[]>()
  for (const item of raw) {
    const id = getYouTubeId(item.url)
    if (!map.has(item.category)) map.set(item.category, [])
    map.get(item.category)!.push({ id, title: item.title })
  }
  return Array.from(map.entries()).map(([name, videos]) => ({ name, videos }))
}
