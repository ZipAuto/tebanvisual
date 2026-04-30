import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

function YoutubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tebanvisual.com'

export const metadata: Metadata = {
  title: "Contacto | Teban Visual - Produccion Audiovisual Colombia",
  description:
    "Contacta a Teban Visual para cotizar tu video musical, comercial o evento. Respondemos en menos de 24 horas. WhatsApp: +57 314 316 7898. Colombia.",
  keywords: [
    "contacto produccion audiovisual",
    "cotizar video Colombia",
    "productora audiovisual contacto",
    "WhatsApp produccion video Colombia",
  ],
  alternates: { canonical: `${SITE_URL}/contacto/` },
  openGraph: {
    title: "Contactanos | Teban Visual",
    description: "Hablemos de tu proyecto audiovisual. Respondemos en menos de 24 horas.",
    url: `${SITE_URL}/contacto/`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Contacto Teban Visual' }],
  },
}

const contactMethods = [
  {
    icon: Phone,
    title: "Telefono",
    description: "Llamanos directamente",
    value: "+57 314 316 7898",
    href: "tel:+573143167898",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Escribenos un correo",
    value: "Estebanphotorojas@gmail.com",
    href: "mailto:Estebanphotorojas@gmail.com",
  },
  {
    icon: MapPin,
    title: "Ubicacion",
    description: "Donde estamos",
    value: "Colombia",
    href: null,
  },
]

const socialLinks = [
  {
    icon: InstagramIcon,
    name: "Instagram",
    handle: "@tebanvisual",
    href: "https://instagram.com/tebanvisual",
  },
  {
    icon: YoutubeIcon,
    name: "YouTube",
    handle: "@tebanvisual",
    href: "https://www.youtube.com/@tebanvisual_oficial",
  },
]

export default function ContactoPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Contacto
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Estamos aqui para ayudarte
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tienes un proyecto en mente? Contactanos y hagamos realidad tu vision. 
              Respondemos en menos de 24 horas.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method) => (
              <Card key={method.title} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <method.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{method.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                  {method.href ? (
                    <a 
                      href={method.href}
                      className="text-primary hover:underline font-medium"
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{method.value}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
              La forma mas rapida de contactarnos
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Escribenos por WhatsApp y recibe una respuesta inmediata. Estamos 
              disponibles de lunes a sabado de 8am a 6pm.
            </p>
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
              <a href="https://wa.me/573143167898" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Escribir por WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Links */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Siguenos en redes sociales
            </h2>
            <p className="text-muted-foreground">
              Mira nuestro trabajo mas reciente y mantente al dia con nuestros proyectos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <social.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{social.name}</h3>
                  <p className="text-sm text-muted-foreground">{social.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Listo para comenzar tu proyecto?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Completa nuestro formulario de cotizacion y recibe una propuesta 
            personalizada para tu proyecto.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/cotizar" className="flex items-center gap-2">
              Solicitar Cotizacion
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
