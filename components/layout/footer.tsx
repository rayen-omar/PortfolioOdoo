import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

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
]

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/70">
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-5 group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center p-1.5 border border-primary/20 shadow-sm transition-transform group-hover:scale-110">
                <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">BenAmor <span className="text-primary italic">Rayeen</span></h3>
            </div>
            <p className="text-muted-foreground mb-5 leading-relaxed">
              Odoo Techno-Functional Consultant spécialisé dans les solutions ERP
              personnalisées. Transformez votre entreprise avec Odoo.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-md hover:bg-secondary/70"
                  >
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{link.name}</span>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projets
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Compétences
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Monastir, Tunisie</li>
              <li>
                <Link
                  href="mailto:rayeen@benamor.tech"
                  className="hover:text-primary transition-colors"
                >
                  rayeen@benamor.tech
                </Link>
              </li>
              <li>
                <Link
                  href="tel:+21695129848"
                  className="hover:text-primary transition-colors"
                >
                  +216 95129848
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/21695129848"
                  className="hover:text-primary transition-colors"
                >
                  WhatsApp Business
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border/70 text-center text-foreground/70">
          <p>
            © {new Date().getFullYear()} BenAmor Rayeen. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}

