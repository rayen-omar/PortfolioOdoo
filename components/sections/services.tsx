"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, ArrowRightLeft, Wand2, BookOpen, Rocket, Settings } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Développement de modules personnalisés",
    description:
      "Création de modules odoo adaptés à vos besoins spécifiques avec intégration à vos systèmes existants.",
    color: "from-blue-600 to-cyan-400",
  },
  {
    icon: ArrowRightLeft,
    title: "Migration odoo",
    description:
      "Migration sécurisée entre versions odoo ou depuis d'autres systèmes ERP avec préservation des données.",
    color: "from-indigo-600 to-purple-500",
  },
  {
    icon: Wand2,
    title: "Personnalisation & Configuration",
    description:
      "Adaptation d'odoo à vos processus métier avec configuration avancée des modules standards.",
    color: "from-rose-500 to-orange-400",
  },
  {
    icon: BookOpen,
    title: "Formation & Support",
    description:
      "Formation de vos équipes à odoo et support technique continu pour une adoption réussie.",
    color: "from-emerald-600 to-teal-400",
  },
  {
    icon: Rocket,
    title: "Déploiement & Hébergement",
    description:
      "Installation sur serveur VPS avec configuration optimale pour performance et sécurité.",
    color: "from-blue-700 to-indigo-600",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" className="py-16 sm:py-24 px-4 bg-background relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
           ref={ref}
           initial={{ opacity: 0, scale: 0.95 }}
           animate={inView ? { opacity: 1, scale: 1 } : {}}
           transition={{ duration: 0.8 }}
           className="text-center mb-10 sm:mb-20"
         >
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.25em] border border-primary/20 mb-6 font-sans">
             <Settings className="w-3 h-3" />
             Expertise & Offres
           </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-8 tracking-tight text-foreground font-heading uppercase py-2 px-6 text-center mx-auto max-w-[95vw]">
              Solutions <span className="text-primary/80">&</span> 
              <span className="bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text italic px-2"> Sur Mesure</span>
            </h2>
           <div className="w-24 h-2 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full opacity-50 shadow-[0_0_20px_rgba(59,130,246,0.3)]"></div>
         </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="h-full bg-card border border-border/70 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group overflow-hidden relative rounded-xl">
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <CardHeader className="relative z-10">
                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${service.color} rounded-lg flex items-center justify-center mb-4 shadow-sm transition-transform duration-300`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors leading-snug">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-base leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardContent>

                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

