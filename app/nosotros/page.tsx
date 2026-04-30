import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Camera, Sparkles, Users, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://tebanvisual.com'

export const metadata: Metadata = {
  title: "Quienes Somos | Teban Visual - Productora Audiovisual en Colombia",
  description:
    "Conoce a Teban Visual: más de 8 años creando videos musicales, comerciales y contenido audiovisual profesional en Colombia. Equipo apasionado con tecnologia cinematografica de punta.",
  keywords: [
    "productora audiovisual Colombia",
    "equipo de produccion audiovisual",
    "camarografos Colombia",
    "directores audiovisuales Colombia",
    "drones cinematograficos Colombia",
    "Sony FX6 Colombia",
  ],
  alternates: { canonical: `${SITE_URL}/nosotros/` },
  openGraph: {
    title: "Quienes Somos | Teban Visual",
    description:
      "Equipo de produccion audiovisual profesional con más de 8 años de experiencia en Colombia.",
    url: `${SITE_URL}/nosotros/`,
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Equipo Teban Visual' }],
  },
}

const stats = [
  { value: "500+", label: "Proyectos Realizados" },
  { value: "8+", label: "Años de Experiencia" },
  { value: "100%", label: "Clientes Satisfechos" },
  { value: "24h", label: "Tiempo de Respuesta" },
]

const values = [
  {
    icon: Camera,
    title: "Excelencia Tecnica",
    description: "Utilizamos equipos de ultima generacion y tecnicas cinematograficas profesionales en cada proyecto."
  },
  {
    icon: Sparkles,
    title: "Creatividad",
    description: "Cada proyecto es unico. Desarrollamos conceptos creativos que conectan con tu audiencia."
  },
  {
    icon: Users,
    title: "Compromiso",
    description: "Nos involucramos en cada detalle de tu proyecto como si fuera nuestro."
  },
  {
    icon: Clock,
    title: "Puntualidad",
    description: "Respetamos los tiempos de entrega acordados sin comprometer la calidad."
  },
]

const equipment = [
  "Sony FX6 / FX3",
  "Lentes Cinematograficos",
  "DJI Inspire 3",
  "DJI FPV",
  "Iluminacion Aputure",
  "Audio Profesional",
  "Estabilizadores DJI RS",
  "Monitores de Campo",
]

export default function NosotrosPage() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Sobre Nosotros
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
                Pasion por contar historias visuales
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Somos un equipo de profesionales apasionados por la produccion audiovisual. 
                Desde hace más de 8 años, hemos ayudado a artistas, marcas y empresas a 
                contar sus historias a traves del lente.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nuestra mision es transformar ideas en experiencias visuales memorables, 
                combinando creatividad, tecnologia y un profundo entendimiento de las 
                necesidades de cada cliente.
              </p>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5849.JPG-BWNxDVFffIzUJXtjgvuQtcmCXjRQ1D.jpeg"
                      alt="Teban Visual en accion"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5853.JPG-tuyAFBW9jpDevVyuUx8qdAsU322JU3.jpeg"
                      alt="Behind the scenes"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary-foreground">{stat.value}</p>
                <p className="text-primary-foreground/80 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary text-sm font-medium tracking-wider uppercase">
              Nuestros Valores
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4">
              Lo que nos define
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title} className="bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary text-sm font-medium tracking-wider uppercase">
                Nuestro Equipo
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6">
                Tecnologia de punta para resultados profesionales
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Invertimos constantemente en el mejor equipo del mercado para garantizar 
                que cada proyecto tenga la mas alta calidad tecnica. Desde camaras 
                cinematograficas hasta drones profesionales, tenemos todo lo necesario 
                para cualquier tipo de produccion.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {equipment.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-video rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0114.JPG-xYFomn9ReppjNSRWp1Md7qIvLe7U1j.jpeg"
                alt="Equipo de produccion"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Listos para trabajar juntos?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Cuentanos sobre tu proyecto y descubre como podemos ayudarte a 
            crear contenido audiovisual de alta calidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="/cotizar" className="flex items-center gap-2">
                Cotizar Proyecto
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/portafolio">Ver Portafolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
