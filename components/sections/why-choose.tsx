"use client"

import { motion } from "framer-motion"
import { Award, ShieldAlert, Cpu, Zap, Briefcase, CheckCircle2, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function WhyChoose() {
  return (
    <section id="why-choose" className="py-16 sm:py-24 px-4 bg-background relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-10 sm:mb-16"
         >
           <div className="inline-flex items-center gap-3 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.25em] border border-primary/20 mb-6 font-sans">
             <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(59,130,246,0.8)] animate-pulse"></div>Valeur & Engagement
           </div>
           <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-8 tracking-tight text-foreground font-heading uppercase py-2 px-6 text-center mx-auto max-w-[95vw]">
             Pourquoi me <span className="bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text italic px-2"> Choisir ?</span>
           </h2>
           <div className="w-24 h-2 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full opacity-50 shadow-[0_0_20px_rgba(59,130,246,0.3)]"></div>
         </motion.div>

        {/* Simple Comparison Grid - Centered as the main content */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 font-sans">
           <div className="p-8 bg-card border border-border/50 rounded-2xl text-center shadow-sm">
              <ShieldAlert className="w-12 h-12 text-destructive/60 mx-auto mb-6" />
              <h4 className="text-sm font-black text-foreground mb-3 uppercase tracking-tight">Consultant Fonctionnel</h4>
              <p className="text-muted-foreground italic leading-relaxed">"C'est impossible" <br /> quand c'est hors standard.</p>
           </div>
           
           <div className="p-8 bg-card border border-border/50 rounded-2xl text-center shadow-sm">
              <Cpu className="w-12 h-12 text-destructive/60 mx-auto mb-6" />
              <h4 className="text-sm font-black text-foreground mb-3 uppercase tracking-tight">Consultant Technique</h4>
              <p className="text-muted-foreground italic leading-relaxed">Code sans comprendre <br /> le besoin métier réel.</p>
           </div>

           <div className="p-8 bg-primary/5 border border-primary/20 rounded-2xl text-center relative overflow-hidden group shadow-lg">
              <Zap className="w-12 h-12 text-primary mx-auto mb-6" />
              <h4 className="text-sm font-black text-primary mb-3 uppercase tracking-tight">Le Techno-Fonctionnel</h4>
              <p className="text-foreground font-bold text-lg leading-tight">Fait le pont : l'excellence métier au service du développement.</p>
              <div className="absolute top-0 right-0 p-2">
                 <span className="text-[8px] bg-primary text-white font-black px-2 py-0.5 rounded-full">L'EXCELLENCE</span>
              </div>
           </div>
        </div>
                {/* Complete About / Experience Section merged into WhyChoose */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold font-sans">Bonjour, je suis BenAmor, Consultant Techno-Fonctionnel odoo.</h3>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4 font-sans">
              Basé en Tunisie et disponible pour des missions à l'international (100% remote), je parle à la fois le langage de votre entreprise et celui de la machine.
            </p>
            <div className="space-y-6 mt-6">
               <div>
                  <h4 className="text-lg font-semibold flex items-center gap-2 mb-2 font-sans">
                    <Briefcase className="w-5 h-5 text-primary" />
                    Consultant odoo Auto-entrepreneur
                  </h4>
                  <p className="text-muted-foreground leading-relaxed font-sans">
                    J'interviens en tant qu'indépendant pour accompagner les entreprises dans leur transformation digitale. J'élimine le fossé de communication en auditant vos besoins métiers (comptabilité, supply chain, RH) tout en développant moi-même les extensions Python/XML complexes nécessaires.
                  </p>
               </div>
               <div>
                  <h4 className="text-lg font-semibold flex items-center gap-2 mb-2 font-sans">
                    <Award className="w-5 h-5 text-primary" />
                    Formation Académique : Sciences de l'Informatique
                  </h4>
                  <p className="text-muted-foreground leading-relaxed font-sans">
                    Diplômé d'une <strong>Licence et d'un Master en Sciences de l'Informatique</strong>, je possède une maîtrise approfondie de l'architecture logicielle, des bases de données et des algorithmes. Ce bagage solide me permet de concevoir des solutions ERP robustes, sécurisées et performantes.
                  </p>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: Briefcase, value: "1+", label: "Année d'expérience réelle" },
              { icon: CheckCircle2, value: "5+", label: "Projets livrés" },
              { icon: Users, value: "100%", label: "Satisfaction Client" }
            ].map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  className={index === 2 ? 'col-span-2' : ''}
                >
                  <Card className="h-full bg-card/50 border-border/50 backdrop-blur-sm hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 group cursor-default font-sans">
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





