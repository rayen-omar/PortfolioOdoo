"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle, Code2 } from "lucide-react"
import { useEffect } from "react"

const faqData = [
  {
    question: "Quelle version odoo choisir pour mon entreprise ?",
    answer:
      "Le choix de la version odoo dépend de vos besoins spécifiques. odoo 19 est la dernière version avec les fonctionnalités les plus récentes et le meilleur support. odoo 18 offre un bon équilibre entre stabilité et nouveautés. odoo 17 est idéal pour l'e-commerce avancé. odoo 16 et 15 sont encore supportées mais je recommande une migration vers une version plus récente pour bénéficier des dernières améliorations. En tant qu'expert odoo en Tunisie, je peux vous aider à choisir la version adaptée à votre secteur d'activité et vos besoins.",
  },
  {
    question: "Quelles sont les différences entre odoo 15 et odoo 19 ?",
    answer:
      "odoo 19 apporte de nombreuses améliorations par rapport à odoo 15 : interface utilisateur modernisée, performances optimisées, nouvelles fonctionnalités e-commerce, amélioration de la gestion de stock, nouveaux modules (planning, documents), meilleure intégration avec les outils externes, et support technique prolongé. odoo 19 offre également une meilleure expérience mobile et des API plus robustes. La migration d'odoo 15 vers odoo 19 nécessite une planification minutieuse pour préserver vos données et personnalisations. Je propose des audits gratuits pour évaluer la complexité de votre migration.",
  },
  {
    question: "Quel est le coût d'une migration odoo ?",
    answer:
      "Le coût d'une migration odoo varie selon plusieurs facteurs : version source et cible (migration odoo 15 vers 19, odoo 16 vers 19, etc.), volume de données, nombre de modules personnalisés, complexité des intégrations, et besoins de formation. Pour une migration standard d'odoo 15/16/17 vers odoo 19, les tarifs démarrent à partir de 3000 TND pour les petites structures. Je propose un devis gratuit personnalisé après analyse de votre système actuel. Le devis inclut l'audit, la migration, les tests, et la formation de base.",
  },
  {
    question: "Proposez-vous un support multi-versions odoo ?",
    answer:
      "Oui, je suis expert sur toutes les versions odoo 15, 16, 17, 18 et 19. Je peux intervenir sur votre installation quelle que soit la version, que vous soyez à Tunis, Sousse, Sfax, Monastir ou ailleurs en Tunisie. Mon support multi-versions inclut : maintenance, résolution de bugs, développement de modules compatibles, optimisation des performances, et conseil pour les upgrades. Je maîtrise les spécificités de chaque version et peux vous accompagner dans votre migration progressive vers les versions les plus récentes.",
  },
  {
    question: "Combien de temps prend une migration odoo 15 vers odoo 19 ?",
    answer:
      "La durée d'une migration odoo 15 vers odoo 19 dépend de la complexité de votre installation : nombre de modules personnalisés, volume de données, intégrations externes. Pour une migration standard : 2-3 semaines (audit 2 jours, migration 1 semaine, tests 1 semaine, formation 2 jours). Pour des installations complexes avec beaucoup de personnalisations : 4-6 semaines. Je travaille en étroite collaboration avec vos équipes pour minimiser les interruptions et garantir une transition en douceur. Un plan de migration détaillé vous est fourni avant le début des travaux.",
  },
  {
    question: "Développez-vous des modules odoo personnalisés pour tous les secteurs ?",
    answer:
      "Oui, je développe des modules odoo personnalisés pour tous les secteurs d'activité en Tunisie : agences de voyage (comme TravelPro), impression et communication visuelle (comme Nexprint), e-commerce, retail, distribution, manufacturing, services, immobilier, santé, éducation, finance, agriculture, hôtellerie, transport, etc. Chaque module est conçu selon vos processus métier spécifiques et intégré parfaitement avec les modules standards d'odoo. Mes modules sont compatibles avec odoo 15, 16, 17, 18 et 19, avec documentation complète et support après livraison.",
  },
  {
    question: "Proposez-vous des services pour entreprises à Tunis, Sousse, Sfax ?",
    answer:
      "Absolument ! Bien que basé à Monastir, je propose mes services de développement odoo pour toutes les entreprises tunisiennes, notamment à Tunis, Sousse, Sfax, et dans toutes les autres villes. Je peux me déplacer pour des réunions, formations, ou audits sur site. La majorité du travail peut également se faire en remote avec des visioconférences régulières. J'ai déjà accompagné des entreprises dans toute la Tunisie avec des résultats probants. Contactez-moi pour discuter de vos besoins spécifiques.",
  },
  {
    question: "Quelle est votre expérience avec odoo e-commerce ?",
    answer:
      "J'ai une solide expérience en développement de solutions e-commerce odoo, notamment avec le projet Nexprint Studio (plateforme e-commerce pour services d'impression sur odoo 16). Je maîtrise les modules e-commerce d'odoo 15, 16, 17, 18 et 19, incluant : catalogues produits personnalisables, gestion des commandes en ligne, intégration de moyens de paiement tunisiens, gestion des stocks en temps réel, personnalisation de produits, workflow de production, et intégration avec les marketplaces. Je peux créer des boutiques en ligne performantes adaptées au marché tunisien.",
  },
]

// FAQ Schema.org structured data
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export function FAQ() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Inject FAQ schema
  useEffect(() => {
    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(faqSchema)
    script.id = "faq-schema"
    document.head.appendChild(script)

    return () => {
      const existingScript = document.getElementById("faq-schema")
      if (existingScript) {
        document.head.removeChild(existingScript)
      }
    }
  }, [])

  return (
    <section id="faq" className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div ref={ref} className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-3 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] sm:text-[12px] font-mono uppercase tracking-[0.1em] border border-primary/20 mb-6"><div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(213,255,79,0.8)] animate-pulse"></div>FAQ & Aide
            </div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-foreground font-heading uppercase py-2 px-4">
              Questions <span className="text-primary/80">&</span> 
              <span className="bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text italic px-2"> Fréquentes</span>
            </h2>
            <div className="w-24 h-2 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full opacity-50 "></div>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {/* Show only first 4 questions visually, rest hidden for SEO */}
            {faqData.slice(0, 4).map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border rounded-lg px-4 hover:border-primary/50 transition-colors"
              >
                  <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
          
          {/* SEO: All FAQ questions hidden but accessible to search engines */}
          <div className="sr-only">
            {faqData.map((item, index) => (
              <div key={`seo-${index}`}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Contactez-moi
          </a>
        </div>
      </div>
    </section>
  )
}







