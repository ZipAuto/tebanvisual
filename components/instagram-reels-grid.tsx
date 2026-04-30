"use client"

import { ExternalLink, Play } from "lucide-react"

interface InstagramReel {
  url: string
  title?: string
}

interface InstagramReelsGridProps {
  reels: InstagramReel[]
}

function getReelId(url: string): string {
  const match = url.match(/\/reel\/([A-Za-z0-9_-]+)/)
  return match ? match[1] : ""
}

function ReelCard({ reel }: { reel: InstagramReel }) {
  const id = getReelId(reel.url)

  return (
    <a
      href={reel.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative aspect-[9/16] rounded-xl overflow-hidden bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] flex flex-col items-center justify-center cursor-pointer hover:scale-[1.02] transition-transform shadow-lg"
      aria-label={reel.title || `Ver Reel en Instagram`}
    >
      {/* Instagram logo watermark */}
      <div className="absolute top-3 right-3 opacity-80">
        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </div>

      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:24px_24px]" />

      {/* Play icon */}
      <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform border border-white/30">
        <Play className="h-6 w-6 text-white ml-1" />
      </div>

      {/* Reel label */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
        <p className="text-white text-xs font-medium text-center opacity-90">
          {reel.title || "Reel"} · @tebanvisual
        </p>
        {id && (
          <p className="text-white/60 text-[10px] text-center mt-0.5 truncate">
            {id.slice(0, 10)}…
          </p>
        )}
      </div>
    </a>
  )
}

export function InstagramReelsGrid({ reels }: InstagramReelsGridProps) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4">
        {reels.map((reel, i) => (
          <ReelCard key={i} reel={reel} />
        ))}
      </div>

      <div className="mt-6 text-center">
        <a
          href="https://www.instagram.com/tebanvisual"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
          Ver perfil completo en Instagram
        </a>
      </div>
    </div>
  )
}
