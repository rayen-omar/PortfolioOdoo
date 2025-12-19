"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const benefits = [
  "3+ ans d'expérience en développement Odoo",
  "Expertise versions 15, 16, 17, 18, 19",
  "Solutions complètement personnalisées",
  "Code propre et maintenable",
  "Communication transparente",
  "Respect des délais",
  "Support après livraison",
  "Prix compétitifs en Tunisie",
]

const sectors = [
  "Agences de voyage et tourisme",
  "Impression et communication visuelle",
  "Commerce et retail",
  "E-commerce et vente en ligne",
  "Distribution et logistique",
  "Manufacturing",
  "Services et consulting",
  "Immobilier et gestion de patrimoine",
  "Santé et pharmaceutique",
  "Éducation et formation",
  "Finance et banque",
  "Agriculture et agroalimentaire",
  "Hôtellerie et restauration",
  "Transport et logistique",
  "Énergie et utilities",
]

export function WhyChoose() {
  return (
    <section id="why-choose" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pourquoi me choisir ?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Un développeur Odoo expérimenté qui comprend vos besoins et
              transforme vos idées en solutions concrètes.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-primary" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Secteurs d'expertise
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              J'ai accompagné des entreprises dans différents secteurs avec
              des solutions Odoo adaptées à leurs besoins spécifiques.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sectors.map((sector, index) => (
                <motion.div
                  key={sector}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 bg-secondary rounded-lg hover:bg-primary/5 transition-colors"
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

