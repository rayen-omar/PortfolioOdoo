"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { CheckCircle2, Award, Briefcase, Code2, Users, Github } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
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
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
              Mon Profil
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            La vraie valeur d'un <span className="text-gradient">Techno-Fonctionnel</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Bonjour, je suis Rayeen, Consultant Techno-Fonctionnel Odoo.</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              Basé en Tunisie et disponible pour des missions à l'international (100% remote), je parle à la fois le langage de votre entreprise et celui de la machine.
            </p>
            <div className="space-y-6 mt-6">
               <div>
                  <h4 className="text-lg font-semibold flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Consultant Odoo Auto-entrepreneur
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
            
            <div className="pt-6">
               <Button asChild size="lg" className="shadow-md">
                  <Link href="#contact">
                    Discuter de votre projet
                  </Link>
               </Button>
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
                <Card 
                  key={index} 
                  className={`bg-card border-border/60 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${index === 2 ? 'col-span-2' : ''}`}
                >
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-3xl font-bold text-foreground mb-1">{stat.value}</h4>
                      <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
