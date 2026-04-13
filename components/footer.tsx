import Link from "next/link"
import Image from "next/image"
import { Instagram, Youtube, Phone, Mail, MapPin, MessageCircle } from "lucide-react"

const footerLinks = {
  servicios: [
    { href: "/servicios/videos-musicales", label: "Videos Musicales" },
    { href: "/servicios/comerciales", label: "Comerciales" },
    { href: "/servicios/eventos", label: "Eventos" },
    { href: "/servicios/redes-sociales", label: "Redes Sociales" },
    { href: "/servicios/booking-drones", label: "Booking Drones" },
  ],
  empresa: [
    { href: "/nosotros", label: "Nosotros" },
    { href: "/portafolio", label: "Portafolio" },
    { href: "/contacto", label: "Contacto" },
    { href: "/cotizar", label: "Cotizar Proyecto" },
  ],
}

const socialLinks = [
  { href: "https://instagram.com/tebanvisual", icon: Instagram, label: "Instagram" },
  { href: "https://youtube.com/@tebanvisual", icon: Youtube, label: "YouTube" },
  { href: "https://wa.me/573143167898", icon: MessageCircle, label: "WhatsApp" },
]

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-4">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Teban%20Visual%20%281%29-fnIhif7GIj8fpExbJec68UVA4xTi7j.png"
              alt="Teban Visual"
              width={180}
              height={72}
              className="h-14 md:h-16 w-auto"
            />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Produccion audiovisual profesional con calidad cinematografica. 
              Transformamos tus ideas en historias visuales impactantes.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Servicios</h3>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+573143167898" 
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  +57 314 316 7898
                </a>
              </li>
              <li>
                <a 
                  href="mailto:contacto@tebanvisual.com" 
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  contacto@tebanvisual.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                <span>Colombia</span>
              </li>
            </ul>
            
            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/573143167898?text=Hola!%20Me%20gustaria%20obtener%20informacion%20sobre%20sus%20servicios."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-[#25D366] text-white text-sm font-medium py-2.5 px-4 rounded-lg hover:bg-[#20BD5A] transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              Chat WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              {new Date().getFullYear()} Teban Visual. Todos los derechos reservados.
            </p>
            <p>
              Produccion audiovisual profesional en Colombia
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
