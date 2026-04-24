import Link from "next/link"
import { Github, Linkedin, Mail, Phone, Facebook } from "lucide-react"
import { LogoB } from "@/components/ui/logo"

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/rayen-omar",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rayen-benamor-1739a9378/",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:rayeen@benamor.tech",
    icon: Mail,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/21695129848",
    icon: Phone,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61585465568145",
    icon: Facebook,
  },
]

export function Footer() {
  return (
    <footer className="bg-background text-white py-20 relative overflow-hidden border-t border-border/30">
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none select-none">
        <span className="text-[20vw] font-serif italic whitespace-nowrap text-primary">BenAmor</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-24">
          {/* Column 1: About */}
          <div className="space-y-8">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center p-2 border border-primary/20 shadow-lg">
                <LogoB className="w-full h-full" />
              </div>
              <h3 className="text-3xl font-serif italic pr-4">BenAmor</h3>
            </div>
            
            <p className="text-muted-foreground/80 leading-relaxed max-w-sm">
              odoo Techno-Functional spécialisé dans les solutions ERP personnalisées. 
              Transformez la gestion de votre entreprise avec élégance et performance.
            </p>

            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  >
                    <Icon className="h-4 w-4" />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h3 className="text-2xl font-serif italic mb-10 pr-4">Navigation</h3>
            <ul className="space-y-6">
              {[
                { name: "Services", href: "#services" },
                { name: "Projets", href: "#projects" },
                { name: "Compétences", href: "#skills" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[11px] font-black uppercase tracking-[0.25em] text-muted-foreground/60 hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-2xl font-serif italic mb-10 pr-4">Contact</h3>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground/40">Localisation</p>
                <p className="text-sm font-medium">Monastir, Tunisie</p>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground/40">Email</p>
                <Link href="mailto:rayeen@benamor.tech" className="text-sm font-medium hover:text-primary transition-colors">
                  rayeen@benamor.tech
                </Link>
              </div>

              <div className="space-y-2">
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-muted-foreground/40">Téléphone</p>
                <div className="flex flex-col gap-1">
                  <Link href="tel:+21695129848" className="text-sm font-medium hover:text-primary transition-colors">
                    +216 95129848
                  </Link>
                  <Link href="https://wa.me/21695129848" className="text-sm font-bold text-primary hover:brightness-110 transition-all">
                    WhatsApp Business
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}



