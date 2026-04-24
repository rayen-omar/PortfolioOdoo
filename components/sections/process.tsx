"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Search, FileText, Code2, CheckCircle, Headphones, Cpu, ArrowRight } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Consultation",
    description: "Analyse approfondie de vos processus métier pour définir la meilleure stratégie.",
    step: "01",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: FileText,
    title: "Architecture",
    description: "Conception de l'architecture technique et proposition d'un planning précis.",
    step: "02",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Code2,
    title: "Développement",
    description: "Réalisation itérative de vos modules avec des points d'étape réguliers.",
    step: "03",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    icon: CheckCircle,
    title: "Déploiement",
    description: "Tests rigoureux, formation de vos équipes et mise en production sécurisée.",
    step: "04",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: Headphones,
    title: "ACCOMPAGNEMENT",
    description: "Support technique continu et évolutions de votre solution sur le long terme.",
    step: "05",
    color: "from-indigo-500/20 to-blue-500/20",
  },
]

export function Process() {
  return (
    <section id="process" className="py-32 px-4 bg-background relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.25em] border border-primary/20 mb-6 font-sans">
            <Cpu className="w-3 h-3" />
            Méthodologie & Accompagnement
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-foreground font-heading uppercase py-2 px-4">
            Processus <span className="text-primary/80">&</span> 
            <span className="bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text italic px-2"> Agilité</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full opacity-50 shadow-[0_0_20px_rgba(59,130,246,0.3)]"></div>
        </motion.div>

        <div className="relative">
          {/* Main Connector Line */}
          <div className="hidden lg:block absolute top-[4.5rem] left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Vertical line indicator for mobile */}
                  <div className="lg:hidden absolute left-6 top-12 bottom-0 w-px bg-primary/20 -z-10 h-full"></div>

                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    {/* Icon Circle */}
                    <div className="relative mb-8">
                       <div className={`w-16 h-16 rounded-[1.5rem] bg-gradient-to-br ${step.color} backdrop-blur-xl border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500 relative z-20`}>
                          <Icon className="h-7 w-7 text-primary" />
                       </div>
                       {/* Step Number Badge */}
                       <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center text-[10px] font-black text-primary shadow-xl z-30">
                          {step.step}
                       </div>
                    </div>

                    {/* Card Content */}
                    <div className="bg-card/30 backdrop-blur-sm p-6 rounded-[2rem] border border-white/5 hover:border-primary/30 transition-all duration-500 h-full w-full">
                       <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-foreground group-hover:text-primary transition-colors">
                          {step.title}
                       </h3>
                       <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                          {step.description}
                       </p>
                    </div>

                    {/* Connector Arrow (Desktop) */}
                    {index < steps.length - 1 && (
                      <div className="hidden lg:flex absolute top-[4.5rem] -right-4 translate-x-1/2 text-primary/30 z-30">
                         <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

