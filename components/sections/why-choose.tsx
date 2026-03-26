"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const benefits = [
  "Expertise versions 17, 18, 19",
  "Solutions techno-fonctionnelles complètement personnalisées",
  "Architecture propre, code maintenable et documentation",
  "Respect des délais avec gestion des risques",
  "Support et accompagnement après livraison",
  "Tarifs compétitifs en Tunisie",
]

const sectors = [
  "Agences de voyage & tourisme",
  "Impression & communication visuelle",
  "E-commerce & vente en ligne",
  "Services & consulting",
  "Immobilier & gestion de patrimoine",
  "Santé & pharmaceutique",
  "Éducation & formation",
  "Finance & banque",
  "Hôtellerie & restauration",
  "Transport & logistique",
]

export function WhyChoose() {
  return (
    <section id="why-choose" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Pourquoi me choisir ?
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6">
              Un Odoo Techno-Functional Consultant expérimenté qui traduit
              vos besoins en solutions concrètes, stables et alignées avec
              votre métier.
            </p>
            <div className="space-y-2.5">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-2.5 rounded-lg border border-border/60 bg-card/40 p-3"
                >
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5 text-primary" />
                  </div>
                  <p className="text-foreground">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sectors */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Secteurs d'expertise
            </h2>
            <p className="text-base md:text-lg text-muted-foreground mb-6">
              J'ai accompagné des entreprises dans différents secteurs avec
              des solutions Odoo adaptées à leurs besoins spécifiques.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-3 bg-card border border-border/60 rounded-lg transition-colors"
                >
                  <p className="font-medium">{sector}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

