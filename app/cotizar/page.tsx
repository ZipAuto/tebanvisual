"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Send, CheckCircle, ArrowRight, ArrowLeft, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent } from "@/components/ui/card"
import { services } from "@/lib/services"
import { FadeIn } from "@/components/parallax-section"
import { cn } from "@/lib/utils"

const productionTypes = [
  { id: "video-musical", label: "Video Musical" },
  { id: "comercial", label: "Comercial / Publicidad" },
  { id: "evento", label: "Cobertura de Evento" },
  { id: "redes-sociales", label: "Contenido para Redes Sociales" },
  { id: "corporativo", label: "Video Corporativo" },
  { id: "documental", label: "Documental" },
  { id: "otro", label: "Otro" },
]

const projectStages = [
  { id: "idea", label: "Tengo una idea inicial" },
  { id: "concepto", label: "Tengo un concepto definido" },
  { id: "guion", label: "Ya tengo guion/storyboard" },
  { id: "listo", label: "Todo listo, solo necesito produccion" },
]

const deliveryTimes = [
  { id: "urgente", label: "Urgente (menos de 1 semana)" },
  { id: "normal", label: "Normal (2-4 semanas)" },
  { id: "flexible", label: "Flexible (mas de 1 mes)" },
]

const extraServices = [
  { id: "drone", label: "Tomas con drone" },
  { id: "actor", label: "Casting de talentos/actores" },
  { id: "locacion", label: "Busqueda de locaciones" },
  { id: "musica", label: "Musica/sonido original" },
  { id: "animacion", label: "Animacion/Motion graphics" },
  { id: "transmision", label: "Transmision en vivo" },
]

export default function CotizarPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    // Step 1: Contact
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    // Step 2: Project Type
    tipoProduccion: "",
    otroTipo: "",
    // Step 3: Project Details
    etapaProyecto: "",
    descripcion: "",
    referencia: "",
    // Step 4: Requirements
    tiempoEntrega: "",
    locacion: "",
    serviciosExtra: [] as string[],
    comentarios: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const totalSteps = 4

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1)
  }

  const handleBack = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleExtraServiceChange = (serviceId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      serviciosExtra: checked
        ? [...prev.serviciosExtra, serviceId]
        : prev.serviciosExtra.filter(id => id !== serviceId)
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Build WhatsApp message
    const extraServicesLabels = formData.serviciosExtra
      .map(id => extraServices.find(s => s.id === id)?.label)
      .filter(Boolean)
      .join(", ")

    const tipoLabel = formData.tipoProduccion === "otro" 
      ? formData.otroTipo 
      : productionTypes.find(t => t.id === formData.tipoProduccion)?.label

    const message = `*NUEVA SOLICITUD DE COTIZACION*

*DATOS DE CONTACTO*
Nombre: ${formData.nombre}
Email: ${formData.email}
Telefono: ${formData.telefono}
Empresa: ${formData.empresa || "No especificada"}

*TIPO DE PROYECTO*
Tipo: ${tipoLabel}
Etapa: ${projectStages.find(s => s.id === formData.etapaProyecto)?.label}

*DESCRIPCION*
${formData.descripcion}

${formData.referencia ? `*Referencias:* ${formData.referencia}` : ""}

*REQUERIMIENTOS*
Tiempo de entrega: ${deliveryTimes.find(t => t.id === formData.tiempoEntrega)?.label}
Locacion: ${formData.locacion || "Por definir"}
${extraServicesLabels ? `Servicios adicionales: ${extraServicesLabels}` : ""}

${formData.comentarios ? `*Comentarios adicionales:*\n${formData.comentarios}` : ""}`

    const whatsappUrl = `https://wa.me/573143167898?text=${encodeURIComponent(message)}`
    
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      window.open(whatsappUrl, "_blank")
    }, 1000)
  }

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.nombre && formData.email && formData.telefono
      case 2:
        return formData.tipoProduccion && (formData.tipoProduccion !== "otro" || formData.otroTipo)
      case 3:
        return formData.etapaProyecto && formData.descripcion
      case 4:
        return formData.tiempoEntrega
      default:
        return false
    }
  }

  if (isSubmitted) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center bg-background">
        <FadeIn>
          <div className="text-center max-w-md mx-auto px-4">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Solicitud Enviada
            </h1>
            <p className="text-muted-foreground mb-8">
              Te hemos redirigido a WhatsApp para completar tu solicitud. 
              Respondemos en menos de 24 horas.
            </p>
            <div className="flex flex-col gap-4">
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white">
                <a href="https://wa.me/573143167898" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Abrir WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/">Volver al inicio</Link>
              </Button>
            </div>
          </div>
        </FadeIn>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-background">
      {/* Header with Background */}
      <section className="relative py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_5853.JPG-tuyAFBW9jpDevVyuUx8qdAsU322JU3.jpeg"
            alt="Teban Visual"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="max-w-2xl">
              <span className="text-primary text-sm font-semibold tracking-[0.2em] uppercase">
                Cotizacion
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
                Hablemos de tu proyecto
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                Responde algunas preguntas sobre tu proyecto y te enviaremos una 
                cotizacion personalizada. Sin compromisos.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {/* Progress */}
            <div className="mb-8 md:mb-12">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Paso {step} de {totalSteps}</span>
                <span className="text-sm text-primary font-medium">{Math.round((step / totalSteps) * 100)}%</span>
              </div>
              <div className="h-2 bg-card rounded-full overflow-hidden">
                <div 
                  className="h-full bg-primary transition-all duration-500 ease-out rounded-full"
                  style={{ width: `${(step / totalSteps) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Step 1: Contact Info */}
              {step === 1 && (
                <FadeIn key="step1">
                  <Card className="bg-card border-border">
                    <CardContent className="p-6 md:p-8">
                      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        Tus datos de contacto
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        Para poder enviarte la cotizacion
                      </p>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="nombre">Nombre completo *</Label>
                            <Input
                              id="nombre"
                              required
                              value={formData.nombre}
                              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                              placeholder="Tu nombre"
                              className="bg-background border-border h-12"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="email">Email *</Label>
                            <Input
                              id="email"
                              type="email"
                              required
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="tu@email.com"
                              className="bg-background border-border h-12"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="telefono">WhatsApp *</Label>
                            <Input
                              id="telefono"
                              required
                              value={formData.telefono}
                              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                              placeholder="+57 300 000 0000"
                              className="bg-background border-border h-12"
                            />
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="empresa">Empresa / Marca</Label>
                            <Input
                              id="empresa"
                              value={formData.empresa}
                              onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                              placeholder="Nombre de tu empresa (opcional)"
                              className="bg-background border-border h-12"
                            />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              )}

              {/* Step 2: Production Type */}
              {step === 2 && (
                <FadeIn key="step2">
                  <Card className="bg-card border-border">
                    <CardContent className="p-6 md:p-8">
                      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        Que tipo de produccion necesitas?
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        Selecciona el que mejor describa tu proyecto
                      </p>

                      <RadioGroup
                        value={formData.tipoProduccion}
                        onValueChange={(value) => setFormData({ ...formData, tipoProduccion: value })}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                      >
                        {productionTypes.map((type) => (
                          <div key={type.id}>
                            <RadioGroupItem
                              value={type.id}
                              id={type.id}
                              className="peer sr-only"
                            />
                            <Label
                              htmlFor={type.id}
                              className={cn(
                                "flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all",
                                formData.tipoProduccion === type.id
                                  ? "border-primary bg-primary/5"
                                  : "border-border hover:border-primary/50"
                              )}
                            >
                              <div className={cn(
                                "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                                formData.tipoProduccion === type.id
                                  ? "border-primary"
                                  : "border-muted-foreground"
                              )}>
                                {formData.tipoProduccion === type.id && (
                                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                                )}
                              </div>
                              <span className="text-foreground font-medium">{type.label}</span>
                            </Label>
                          </div>
                        ))}
                      </RadioGroup>

                      {formData.tipoProduccion === "otro" && (
                        <div className="mt-4 space-y-2">
                          <Label htmlFor="otroTipo">Especifica el tipo de produccion *</Label>
                          <Input
                            id="otroTipo"
                            value={formData.otroTipo}
                            onChange={(e) => setFormData({ ...formData, otroTipo: e.target.value })}
                            placeholder="Describe el tipo de produccion"
                            className="bg-background border-border h-12"
                          />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </FadeIn>
              )}

              {/* Step 3: Project Details */}
              {step === 3 && (
                <FadeIn key="step3">
                  <Card className="bg-card border-border">
                    <CardContent className="p-6 md:p-8">
                      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        Cuentanos sobre tu proyecto
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        Mientras mas detalles, mejor cotizacion
                      </p>

                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label>En que etapa esta tu proyecto? *</Label>
                          <RadioGroup
                            value={formData.etapaProyecto}
                            onValueChange={(value) => setFormData({ ...formData, etapaProyecto: value })}
                            className="space-y-2"
                          >
                            {projectStages.map((stage) => (
                              <div key={stage.id}>
                                <RadioGroupItem
                                  value={stage.id}
                                  id={stage.id}
                                  className="peer sr-only"
                                />
                                <Label
                                  htmlFor={stage.id}
                                  className={cn(
                                    "flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all",
                                    formData.etapaProyecto === stage.id
                                      ? "border-primary bg-primary/5"
                                      : "border-border hover:border-primary/50"
                                  )}
                                >
                                  <div className={cn(
                                    "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                                    formData.etapaProyecto === stage.id
                                      ? "border-primary"
                                      : "border-muted-foreground"
                                  )}>
                                    {formData.etapaProyecto === stage.id && (
                                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                                    )}
                                  </div>
                                  <span className="text-foreground">{stage.label}</span>
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="descripcion">Describe tu proyecto *</Label>
                          <Textarea
                            id="descripcion"
                            required
                            value={formData.descripcion}
                            onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                            placeholder="Cuentanos que tienes en mente: objetivo del video, estilo visual, duracion estimada, audiencia objetivo..."
                            rows={5}
                            className="bg-background border-border resize-none"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="referencia">Referencias visuales (opcional)</Label>
                          <Input
                            id="referencia"
                            value={formData.referencia}
                            onChange={(e) => setFormData({ ...formData, referencia: e.target.value })}
                            placeholder="Links de YouTube, Instagram o descripcion del estilo deseado"
                            className="bg-background border-border h-12"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              )}

              {/* Step 4: Requirements */}
              {step === 4 && (
                <FadeIn key="step4">
                  <Card className="bg-card border-border">
                    <CardContent className="p-6 md:p-8">
                      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        Requerimientos adicionales
                      </h2>
                      <p className="text-muted-foreground mb-6">
                        Ultimos detalles para tu cotizacion
                      </p>

                      <div className="space-y-6">
                        <div className="space-y-2">
                          <Label>Tiempo de entrega esperado *</Label>
                          <RadioGroup
                            value={formData.tiempoEntrega}
                            onValueChange={(value) => setFormData({ ...formData, tiempoEntrega: value })}
                            className="space-y-2"
                          >
                            {deliveryTimes.map((time) => (
                              <div key={time.id}>
                                <RadioGroupItem
                                  value={time.id}
                                  id={time.id}
                                  className="peer sr-only"
                                />
                                <Label
                                  htmlFor={time.id}
                                  className={cn(
                                    "flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all",
                                    formData.tiempoEntrega === time.id
                                      ? "border-primary bg-primary/5"
                                      : "border-border hover:border-primary/50"
                                  )}
                                >
                                  <div className={cn(
                                    "w-5 h-5 rounded-full border-2 flex items-center justify-center",
                                    formData.tiempoEntrega === time.id
                                      ? "border-primary"
                                      : "border-muted-foreground"
                                  )}>
                                    {formData.tiempoEntrega === time.id && (
                                      <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                                    )}
                                  </div>
                                  <span className="text-foreground">{time.label}</span>
                                </Label>
                              </div>
                            ))}
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="locacion">Locacion de grabacion</Label>
                          <Input
                            id="locacion"
                            value={formData.locacion}
                            onChange={(e) => setFormData({ ...formData, locacion: e.target.value })}
                            placeholder="Ciudad, lugar especifico o 'por definir'"
                            className="bg-background border-border h-12"
                          />
                        </div>

                        <div className="space-y-3">
                          <Label>Servicios adicionales que necesitas</Label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {extraServices.map((service) => (
                              <div
                                key={service.id}
                                className={cn(
                                  "flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all",
                                  formData.serviciosExtra.includes(service.id)
                                    ? "border-primary bg-primary/5"
                                    : "border-border hover:border-primary/50"
                                )}
                                onClick={() => handleExtraServiceChange(
                                  service.id, 
                                  !formData.serviciosExtra.includes(service.id)
                                )}
                              >
                                <Checkbox
                                  id={service.id}
                                  checked={formData.serviciosExtra.includes(service.id)}
                                  onCheckedChange={(checked) => 
                                    handleExtraServiceChange(service.id, checked as boolean)
                                  }
                                />
                                <Label 
                                  htmlFor={service.id} 
                                  className="cursor-pointer text-foreground"
                                >
                                  {service.label}
                                </Label>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="comentarios">Comentarios adicionales</Label>
                          <Textarea
                            id="comentarios"
                            value={formData.comentarios}
                            onChange={(e) => setFormData({ ...formData, comentarios: e.target.value })}
                            placeholder="Cualquier otra informacion relevante..."
                            rows={3}
                            className="bg-background border-border resize-none"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              )}

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6">
                {step > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    onClick={handleBack}
                    className="gap-2"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Atras
                  </Button>
                ) : (
                  <div />
                )}

                {step < totalSteps ? (
                  <Button
                    type="button"
                    size="lg"
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  >
                    Siguiente
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    size="lg"
                    disabled={!canProceed() || isSubmitting}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  >
                    {isSubmitting ? (
                      "Enviando..."
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Enviar Solicitud
                      </>
                    )}
                  </Button>
                )}
              </div>

              <p className="text-center text-sm text-muted-foreground mt-6">
                Al enviar seras redirigido a WhatsApp para completar tu solicitud
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
