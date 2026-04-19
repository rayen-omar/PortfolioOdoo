"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, ArrowRight, TrendingUp, Code, ShoppingCart, Database } from "lucide-react"

const versions = [
  {
    version: "odoo 19",
    year: "2024",
    status: "Dernière version supportée",
    description: "Version la plus récente avec fonctionnalités avancées",
    features: [
      "Interface utilisateur modernisée",
      "Performances optimisées",
      "Nouveaux modules (planning, documents)",
      "E-commerce amélioré",
      "Meilleure expérience mobile",
      "API robustes",
      "Support technique prolongé",
    ],
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
    recommended: true,
  },
  {
    version: "odoo 18",
    year: "2023",
    status: "Stable et performante",
    description: "Bon équilibre entre stabilité et nouveautés",
    features: [
      "Améliorations e-commerce",
      "Gestion de stock avancée",
      "Nouveaux rapports",
      "Intégrations améliorées",
      "Interface optimisée",
    ],
    icon: ShoppingCart,
    color: "from-blue-500 to-cyan-500",
    recommended: true,
  },
  {
    version: "odoo 17",
    year: "2023",
    status: "Idéal pour e-commerce",
    description: "Excellente version pour projets e-commerce",
    features: [
      "E-commerce avancé",
      "Gestion multi-sites",
      "Améliorations comptabilité",
      "Nouveaux widgets",
      "Performance améliorée",
    ],
    icon: Code,
    color: "from-purple-500 to-pink-500",
    recommended: false,
  },
  {
    version: "odoo 16",
    year: "2022",
    status: "Stable mais obsolète",
    description: "Version stable mais migration recommandée",
    features: [
      "Modules standards complets",
      "Interface moderne",
      "Bonnes performances",
      "Support disponible",
    ],
    icon: Database,
    color: "from-orange-500 to-red-500",
    recommended: false,
  },
  {
    version: "odoo 15",
    year: "2022",
    status: "Migration recommandée",
    description: "Version ancienne, migration vers odoo 19 recommandée",
    features: [
      "Fonctionnalités de base",
      "Modules standards",
      "Support limité",
      "Migration nécessaire",
    ],
    icon: Database,
    color: "from-gray-500 to-slate-500",
    recommended: false,
  },
]

const migrationPaths = [
  {
    from: "odoo 15",
    to: "odoo 19",
    steps: ["Audit système", "Planification", "Migration données", "Tests", "Formation"],
    duration: "3-4 semaines",
    complexity: "Moyenne à élevée",
  },
  {
    from: "odoo 16",
    to: "odoo 19",
    steps: ["Audit", "Migration", "Tests", "Formation"],
    duration: "2-3 semaines",
    complexity: "Moyenne",
  },
  {
    from: "odoo 17",
    to: "odoo 19",
    steps: ["Audit", "Migration", "Tests"],
    duration: "1-2 semaines",
    complexity: "Faible à moyenne",
  },
  {
    from: "odoo 18",
    to: "odoo 19",
    steps: ["Audit", "Migration", "Tests"],
    duration: "1 semaine",
    complexity: "Faible",
  },
]

export function VersionComparison() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="versions" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
           ref={ref}
           initial={{ opacity: 0, scale: 0.95 }}
           animate={inView ? { opacity: 1, scale: 1 } : {}}
           transition={{ duration: 0.8 }}
           className="text-center mb-20"
         >
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/20 mb-6 font-sans">
             <TrendingUp className="w-3 h-3" />
             Expertise Multi-versions
           </div>
           <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-foreground font-sans">
             Historique <span className="text-muted-foreground mr-2">&</span> 
             <span className="text-primary italic font-black">Evolutions</span>
           </h2>
           <div className="w-24 h-2 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full opacity-50 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
         </motion.div>

        {/* Version Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {versions.map((version, index) => {
            const Icon = version.icon
            return (
              <motion.div
                key={version.version}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className={`h-full hover:shadow-2xl transition-all duration-300 border-2 ${
                  version.recommended ? "border-primary/50 bg-primary/5" : "border-border/50"
                } group overflow-hidden relative`}>
                  {version.recommended && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-semibold">
                      Recommandé
                    </div>
                  )}
                  
                  <CardHeader className="relative z-10">
                    <div className={`w-14 h-14 bg-gradient-to-br ${version.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-2xl">{version.version}</CardTitle>
                      <span className="text-sm text-muted-foreground">{version.year}</span>
                    </div>
                    <CardDescription className="font-semibold text-foreground">
                      {version.status}
                    </CardDescription>
                    <p className="text-sm text-muted-foreground mt-2">
                      {version.description}
                    </p>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <ul className="space-y-2">
                      {version.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${version.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Migration Paths */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Chemins de Migration odoo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {migrationPaths.map((path, index) => (
              <motion.div
                key={`${path.from}-${path.to}`}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                className="bg-card/50 backdrop-blur-sm p-6 rounded-lg border-2 border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-bold text-lg">{path.from}</span>
                  <ArrowRight className="h-5 w-5 text-primary" />
                  <span className="font-bold text-lg text-primary">{path.to}</span>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold mb-2">Étapes :</p>
                    <ul className="space-y-1">
                      {path.steps.map((step, idx) => (
                        <li key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t border-border/50">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold">Durée :</span> {path.duration}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold">Complexité :</span> {path.complexity}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground mb-6">
            Besoin d'aide pour choisir votre version odoo ou planifier votre migration ?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg hover:shadow-xl text-lg"
          >
            Audit gratuit version odoo actuelle
          </a>
        </motion.div>
      </div>
    </section>
  )
}




