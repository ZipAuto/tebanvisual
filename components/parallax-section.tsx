"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ParallaxSectionProps {
  children: ReactNode
  backgroundImage?: string
  videoSrc?: string
  overlay?: "light" | "dark" | "gradient" | "none"
  speed?: number
  className?: string
  minHeight?: string
}

export function ParallaxSection({
  children,
  backgroundImage,
  videoSrc,
  overlay = "dark",
  speed = 0.5,
  className,
  minHeight = "100vh"
}: ParallaxSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollPosition = window.scrollY
        const elementTop = rect.top + scrollPosition
        const windowHeight = window.innerHeight
        
        // Only apply parallax when element is in view
        if (scrollPosition + windowHeight > elementTop && scrollPosition < elementTop + rect.height) {
          const relativeScroll = scrollPosition - elementTop + windowHeight
          setOffset(relativeScroll * speed * 0.1)
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initial calculation
    
    return () => window.removeEventListener("scroll", handleScroll)
  }, [speed])

  const overlayClasses = {
    light: "bg-background/30",
    dark: "bg-background/70",
    gradient: "bg-gradient-to-b from-background via-background/50 to-background",
    none: ""
  }

  return (
    <section 
      ref={sectionRef}
      className={cn("relative overflow-hidden", className)}
      style={{ minHeight }}
    >
      {/* Background Media */}
      {backgroundImage && (
        <div 
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{ transform: `translateY(${offset}px)` }}
        >
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      
      {videoSrc && (
        <div 
          className="absolute inset-0 w-full h-[120%] -top-[10%]"
          style={{ transform: `translateY(${offset}px)` }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      )}

      {/* Overlay */}
      {overlay !== "none" && (
        <div className={cn("absolute inset-0 z-[1]", overlayClasses[overlay])} />
      )}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}

// Fade in on scroll animation component
interface FadeInProps {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right"
  className?: string
}

export function FadeIn({ children, delay = 0, direction = "up", className }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: "50px" }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const directionClasses = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8"
  }

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${directionClasses[direction]}`,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

// Scroll progress indicator
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrolled = (window.scrollY / scrollHeight) * 100
      setProgress(scrolled)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-border z-[60]">
      <div 
        className="h-full bg-primary transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
