"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { LogoB } from "@/components/ui/logo"

const navItems = [
  { name: "Accueil", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Témoignages", href: "#testimonials" },
  { name: "Projets", href: "#projects" },
  { name: "Mon Profil", href: "#why-choose" },
  { name: "Compétences", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-sm"
          : "bg-background/80 backdrop-blur-md"
      }`}
    >
      <nav className="container mx-auto px-4 py-3.5">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-3.5 hover:opacity-90 transition-all active:scale-95 group">
              <div className="relative w-11 h-11 overflow-hidden rounded-xl bg-primary/5 flex items-center justify-center p-1.5 border border-primary/10 shadow-sm group-hover:border-primary/30 transition-colors">
                <LogoB className="w-full h-full" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-foreground leading-tight">
                  BenAmor
                </span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/80 leading-tight">
                  odoo Techno-Functional
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-7">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="shadow-sm">
              <Link href="#contact">Demander un devis</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-4 right-4 mt-2 p-5 bg-background/95 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl md:hidden overflow-hidden origin-top"
            >
              <div className="flex flex-col space-y-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      className="flex items-center w-full px-4 py-3.5 text-base font-semibold rounded-2xl text-foreground/80 hover:text-primary hover:bg-primary/10 active:scale-95 transition-all"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.05 + 0.1, duration: 0.3 }}
                  className="pt-4 mt-2 border-t border-border/40"
                >
                  <Button asChild className="w-full rounded-2xl py-6 text-base font-bold shadow-xl shadow-primary/25 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                    <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Demander un devis</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}


