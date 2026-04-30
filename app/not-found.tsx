import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, ArrowRight, MessageCircle } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-lg mx-auto">
        <p className="text-8xl font-bold text-primary mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
          Pagina no encontrada
        </h1>
        <p className="text-muted-foreground mb-8 leading-relaxed">
          La pagina que buscas no existe o fue movida.
          Explora nuestros servicios o contactanos directamente.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/" className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              Ir al inicio
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/servicios" className="flex items-center gap-2">
              Ver servicios
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-8">
          <a
            href="https://wa.me/573143167898?text=Hola!%20Necesito%20ayuda%20con%20su%20sitio%20web."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            O escribenos por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
