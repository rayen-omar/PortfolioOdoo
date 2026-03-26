"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, FileText, Code, CheckCircle, Headphones } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Consultation gratuite",
    description: "Analyse approfondie de vos besoins et processus métier pour définir la meilleure solution.",
    step: "01",
  },
  {
    icon: FileText,
    title: "Proposition détaillée",
    description: "Devis personnalisé avec planning précis et architecture technique de la solution.",
    step: "02",
  },
  {
    icon: Code,
    title: "Développement agile",
    description: "Développement itératif avec mises à jour régulières et validation continue.",
    step: "03",
  },
  {
    icon: CheckCircle,
    title: "Tests & Livraison",
    description: "Tests complets, formation des utilisateurs et déploiement en production.",
    step: "04",
  },
  {
    icon: Headphones,
    title: "Support continu",
    description: "Accompagnement post-livraison avec support technique et évolutions futures.",
    step: "05",
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 px-4 bg-secondary/10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comment je travaille avec vous
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un processus structuré pour garantir le succès de votre projet
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-primary/20">
            <div className="absolute top-0 left-0 right-0 h-full bg-primary/40"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="h-full border border-border/70 bg-card hover:border-primary/30 hover:shadow-md transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center">
                          <Icon className="h-6 w-6 text-primary" />
                        </div>
                        <span className="text-2xl font-bold text-primary/30">
                          {step.step}
                        </span>
                      </div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

