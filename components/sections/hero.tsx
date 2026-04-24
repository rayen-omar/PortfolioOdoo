"use client"

import { motion, useAnimation } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Tilt from "react-parallax-tilt"
import { useState, useEffect } from "react"

export function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [imageVersion] = useState(() => Date.now())
  const controls = useAnimation()

  useEffect(() => {
    let isMounted = true
    const animateText = async () => {
      while (isMounted) {
        await controls.start("visible")
        await new Promise(resolve => setTimeout(resolve, 2500))
        await controls.start("hidden")
        await new Promise(resolve => setTimeout(resolve, 300))
      }
    }
    animateText()
    return () => { isMounted = false }
  }, [controls])

  const renderPhoto = (isMobile: boolean) => {
    const photoInnerContent = (
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
                    src={`/photo1.png?v=${imageVersion}`}
                    alt="BenAmor - odoo Techno-Functional Consultant spécialisé en solutions ERP personnalisées avec 3+ ans d'expérience"
                    fill
                    className="object-cover rounded-xl"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onLoad={() => {
                      setImageLoaded(true)
                    }}
                    onError={() => {
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
                  <h3 className="text-2xl font-bold text-primary">BenAmor</h3>
                  <p className="text-sm font-medium text-foreground relative top-0.5">odoo Techno-Functional Consultant</p>
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
            odoo Techno-Functional Consultant
          </motion.div>

        </div>
    );

    return (
      <motion.div
        initial={{ opacity: 0, x: isMobile ? 0 : 50, y: isMobile ? 30 : 0, scale: 0.9 }}
        animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: isMobile ? 0.2 : 0.4, ease: "easeOut" }}
        className={`relative items-center justify-center ${isMobile ? 'flex lg:hidden w-full mt-14 mb-8' : 'hidden lg:flex lg:pl-16'}`}
      >
        {isMobile ? (
          <div className="relative w-full max-w-sm mx-auto">
            {photoInnerContent}
          </div>
        ) : (
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            transitionSpeed={1000}
            className="relative w-full max-w-sm mx-auto"
          >
            {photoInnerContent}
          </Tilt>
        )}

        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-secondary rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>
      </motion.div>
    );
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-32 lg:pb-12 px-4 overflow-hidden bg-background"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/10"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => {
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
        <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] xl:grid-cols-[60%_40%] gap-8 xl:gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-7"
          >


            <motion.h1
              initial="hidden"
              animate={controls}
              variants={{
                hidden: { opacity: 1, transition: { staggerChildren: 0.02, staggerDirection: -1 } },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.12, delayChildren: 0.2 }
                }
              }}
              className="min-h-[85px] sm:min-h-[90px] md:min-h-[105px] lg:min-h-[110px] xl:min-h-[135px] text-[1.5rem] min-[380px]:text-[1.65rem] sm:text-[2.2rem] md:text-[2.6rem] lg:text-[2.5rem] xl:text-[3.4rem] font-bold leading-[1.3] md:leading-[1.1] tracking-tight text-foreground flex flex-col items-start whitespace-nowrap"
            >
              <span className="flex gap-x-2 md:gap-x-3 mb-1 sm:mb-2 md:mb-4 w-full">
                <span className="inline-block">
                  {"Développeur".split("").map((char, index) => (
                    <motion.span key={`w1-${index}`} variants={{ hidden: { opacity: 0, display: "none" }, visible: { opacity: 1, display: "inline-block" } }}>{char}</motion.span>
                  ))}
                </span>
                <span className="inline-block text-muted-foreground/60">
                  <motion.span variants={{ hidden: { opacity: 0, display: "none" }, visible: { opacity: 1, display: "inline-block" } }}>&</motion.span>
                </span>
                <span className="inline-block">
                   {"Consultant".split("").map((char, index) => (
                    <motion.span key={`w2-${index}`} variants={{ hidden: { opacity: 0, display: "none" }, visible: { opacity: 1, display: "inline-block" } }}>{char}</motion.span>
                  ))}
                </span>
              </span>

              <span className="flex flex-wrap items-center mt-1">
                <motion.span 
                  className="relative inline-block"
                >
                  <span className="relative z-10 bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text pr-4 py-1 font-serif italic">
                    {"odoo Expert".split("").map((char, index) => (
                      <motion.span 
                        key={`w3-${index}`} 
                        variants={{ hidden: { opacity: 0, display: "none" }, visible: { opacity: 1, display: "inline-block" } }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </motion.span>
                    ))}
                  </span>
                  <motion.span
                    className="absolute bottom-1.5 left-0 right-0 h-2 sm:h-3 md:h-4 bg-primary/20 -z-0"
                    variants={{
                      hidden: { scaleX: 0 },
                      visible: { scaleX: 1, transition: { delay: 3.8, duration: 0.6, ease: "easeOut" } }
                    }}
                    style={{ originX: 0 }}
                  />
                </motion.span>

                {/* Curseur de machine à écrire */}
                <motion.span
                  initial={{ opacity: 1 }}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  className="inline-block w-1.5 md:w-2 h-7 sm:h-8 md:h-11 bg-primary ml-1 sm:ml-2 align-middle"
                />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg md:text-xl text-foreground/90 font-medium"
            >
              odoo Techno-Functional Consultant pour PME et entreprises en croissance
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-lg text-foreground/80 max-w-xl leading-relaxed"
            >
              Spécialisé dans le développement de modules odoo personnalisés,
              les migrations et les intégrations pour optimiser durablement vos
              processus métier.
            </motion.p>

            {/* Mobile-only visible photo */}
            {renderPhoto(true)}

            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15, delayChildren: 1.2 }
                }
              }}
              className="flex flex-col gap-4 pt-4"
            >
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } } }} className="w-full sm:w-auto">
                  <Button
                    asChild
                    size="lg"
                    className="w-full sm:w-auto group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
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
                </motion.div>
                
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } } }} className="w-full sm:w-auto">
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto group border-2 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  >
                    <Link href="#projects">Voir mes réalisations</Link>
                  </Button>
                </motion.div>
              </div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4 } } }} className="w-full sm:w-auto flex">
                <Button
                  asChild
                  variant="ghost"
                  size="lg"
                  className="w-full sm:w-auto group hover:bg-primary/10 transition-all duration-300"
                >
                  <Link href="/cv.pdf" download>
                    <Download className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                    Télécharger mon CV
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

          </motion.div>

          {/* Photo on desktop */}
          {renderPhoto(false)}
        </div>
      </div>

      {/* Modern Mouse Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2, duration: 1, ease: "easeOut" }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground/60 transition-colors hover:text-primary pl-[0.3em]">
          Découvrir
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-muted-foreground/30 hover:border-primary/50 transition-colors rounded-full flex justify-center p-1.5"
        >
          <motion.div
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-2.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

