"use client"

import { motion } from "framer-motion"
import { Award, ShieldAlert, Cpu, Zap } from "lucide-react"

export function WhyChoose() {
  return (
    <section id="why-choose" className="py-24 px-4 bg-background">
      <div className="container mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/20 mb-6 font-sans">
             <Award className="w-3 h-3" />
             Valeur & Engagement
           </div>
           <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-foreground font-sans">
             Pourquoi me <span className="text-primary italic font-black">Choisir ?</span>
           </h2>
           <div className="w-24 h-2 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full opacity-50 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
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
        

      </div>
    </section>
  )
}
