"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CheckCircle2, Award, Briefcase, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Briefcase, value: "1+", label: "Année d'expérience réelle" },
    { icon: CheckCircle2, value: "5+", label: "Projets livrés" },
    { icon: Users, value: "100%", label: "Satisfaction Client" },
  ]

  return (
    <section id="profil" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] sm:text-[12px] font-mono uppercase tracking-[0.1em] border border-primary/20 mb-6"><div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(213,255,79,0.8)] animate-pulse"></div>Mon Profil
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-foreground font-heading uppercase py-2 px-4">
            Vision <span className="text-primary/80">&</span> 
            <span className="bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text italic px-2"> Expertise</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full opacity-50 "></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Bonjour, je suis BenAmor, Techno-Functional odoo.</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              Basé en Tunisie et disponible pour des missions à l'international (100% remote), je parle à la fois le langage de votre entreprise et celui de la machine.
            </p>
            <div className="space-y-6 mt-6">
               <div>
                  <h4 className="text-lg font-semibold flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Consultant odoo Auto-entrepreneur
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    J'interviens en tant qu'indépendant pour accompagner les entreprises dans leur transformation digitale. J'élimine le fossé de communication en auditant vos besoins métiers (comptabilité, supply chain, RH) tout en développant moi-même les extensions Python/XML complexes nécessaires.
                  </p>
               </div>
               <div>
                  <h4 className="text-lg font-semibold flex items-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-primary" />
                    Formation Académique : Sciences de l'Informatique
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Diplômé d'une <strong>Licence et d'un Master en Sciences de l'Informatique</strong>, je possède une maîtrise approfondie de l'architecture logicielle, des bases de données et des algorithmes. Ce bagage solide me permet de concevoir des solutions ERP robustes, sécurisées et performantes.
                  </p>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className={index === 2 ? 'col-span-2' : ''}
                >
                  <Card className="h-full bg-card/50 border-white/5 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group cursor-default">
                    <CardContent className="p-8 text-center space-y-4">
                      <div className="w-14 h-14 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-4xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">
                          {stat.value}
                        </h4>
                        <p className="text-sm text-muted-foreground font-semibold uppercase tracking-wider">
                          {stat.label}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}








