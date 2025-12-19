"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Tilt from "react-parallax-tilt"
import { useState } from "react"

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-12 px-4 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/20">
        {/* Grid pattern removed to avoid errors */}
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const randomX = Math.random() * 100
          const randomY = Math.random() * 100
          return (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
              initial={{
                x: `${randomX}%`,
                y: `${randomY}%`,
              }}
              animate={{
                y: [`${randomY}%`, `${(randomY + 20) % 100}%`, `${randomY}%`],
                x: [`${randomX}%`, `${(randomX + 10) % 100}%`, `${randomX}%`],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          )
        })}
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full border border-primary/20 mb-4"
            >
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Développeur Odoo Expert
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
            >
              Transformez votre entreprise avec des{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-primary">solutions Odoo</span>
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-3 bg-primary/20 -z-0"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </span>{" "}
              sur mesure
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl text-foreground/90 font-medium"
            >
              Développeur Odoo Expert | 3+ ans d'expérience | Solutions ERP
              personnalisées
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg text-foreground/80 max-w-xl"
            >
              Spécialisé dans le développement de modules Odoo personnalisés,
              migrations et intégrations pour optimiser vos processus métier.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                asChild
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
              >
                <Link href="#contact">
                  <span className="relative z-10 flex items-center">
                    Demander un devis gratuit
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="group border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                <Link href="#projects">Voir mes réalisations</Link>
              </Button>
              <Button
                asChild
                variant="ghost"
                size="lg"
                className="group hover:bg-primary/10 transition-all duration-300"
              >
                <Link href="/cv.pdf" download>
                  <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                  Télécharger mon CV
                </Link>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { value: "3+", label: "Ans d'expérience" },
                { value: "15+", label: "Projets livrés" },
                { value: "100%", label: "Satisfaction client" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                  className="text-center p-4 rounded-lg bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                >
                  <motion.div
                    className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: 1.2 + index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo avec effet Tilt */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative flex items-center justify-center"
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              transitionSpeed={1000}
              className="relative w-full max-w-sm"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent rounded-3xl blur-2xl opacity-75 animate-pulse"></div>
                
                {/* Photo container */}
                <div className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl bg-gradient-to-br from-primary/10 to-secondary/20 p-1.5">
                  <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-gradient-to-br from-primary/5 to-secondary/10">
                    {/* Image avec Next.js Image */}
                    {!imageError && (
                      <div className="absolute inset-0 z-20 w-full h-full">
                        <Image
                          src="/photo.png"
                          alt="BenAmor Rayeen - Développeur Odoo"
                          fill
                          className="object-cover rounded-xl"
                          priority
                          unoptimized
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          onLoad={() => {
                            setImageLoaded(true)
                            console.log('Image chargée avec succès')
                          }}
                          onError={(e) => {
                            console.error('Erreur de chargement de l\'image:', e)
                            setImageError(true)
                          }}
                          style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.3s' }}
                        />
                      </div>
                    )}
                    {/* Fallback - affiché seulement si l'image ne charge pas */}
                    {imageError && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/30 z-10">
                        <div className="text-6xl mb-4">👨‍💻</div>
                        <h3 className="text-2xl font-bold text-primary">BenAmor Rayeen</h3>
                        <p className="text-foreground/70">Développeur Odoo</p>
                      </div>
                    )}
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-30 pointer-events-none"></div>
                  </div>
                </div>

                {/* Floating badges */}
                <motion.div
                  className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full shadow-lg text-sm font-semibold"
                  initial={{ scale: 0, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
                >
                  Odoo Expert
                </motion.div>

                <motion.div
                  className="absolute -bottom-4 -left-4 bg-secondary border-2 border-primary/20 px-4 py-2 rounded-full shadow-lg text-sm font-semibold backdrop-blur-sm"
                  initial={{ scale: 0, rotate: 10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.7, type: "spring", stiffness: 200 }}
                >
                  3+ ans d'expérience
                </motion.div>
              </div>
            </Tilt>

            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
