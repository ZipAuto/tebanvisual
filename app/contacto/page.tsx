import type { Metadata } from "next"
import Link from "next/link"
import { Phone, Mail, MapPin, Instagram, Youtube, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contacto | Teban Visual",
  description: "Contactanos para cotizar tu proyecto audiovisual. Estamos listos para ayudarte a crear contenido increible.",
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
    value: "contacto@tebanvisual.com",
    href: "mailto:contacto@tebanvisual.com",
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
    icon: Instagram,
    name: "Instagram",
    handle: "@tebanvisual",
    href: "https://instagram.com/tebanvisual",
  },
  {
    icon: Youtube,
    name: "YouTube",
    handle: "@tebanvisual",
    href: "https://youtube.com/@tebanvisual",
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
