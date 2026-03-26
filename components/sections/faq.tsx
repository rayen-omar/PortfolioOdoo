"use client"

import { useInView } from "react-intersection-observer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"
import { useEffect } from "react"

const faqData = [
  {
    question: "Quelle version Odoo choisir pour mon entreprise ?",
    answer:
      "Le choix de la version Odoo dépend de vos besoins spécifiques. Odoo 19 est la dernière version avec les fonctionnalités les plus récentes et le meilleur support. Odoo 18 offre un bon équilibre entre stabilité et nouveautés. Odoo 17 est idéal pour l'e-commerce avancé. Odoo 16 et 15 sont encore supportées mais je recommande une migration vers une version plus récente pour bénéficier des dernières améliorations. En tant qu'expert Odoo en Tunisie, je peux vous aider à choisir la version adaptée à votre secteur d'activité et vos besoins.",
  },
  {
    question: "Quelles sont les différences entre Odoo 15 et Odoo 19 ?",
    answer:
      "Odoo 19 apporte de nombreuses améliorations par rapport à Odoo 15 : interface utilisateur modernisée, performances optimisées, nouvelles fonctionnalités e-commerce, amélioration de la gestion de stock, nouveaux modules (planning, documents), meilleure intégration avec les outils externes, et support technique prolongé. Odoo 19 offre également une meilleure expérience mobile et des API plus robustes. La migration d'Odoo 15 vers Odoo 19 nécessite une planification minutieuse pour préserver vos données et personnalisations. Je propose des audits gratuits pour évaluer la complexité de votre migration.",
  },
  {
    question: "Quel est le coût d'une migration Odoo ?",
    answer:
      "Le coût d'une migration Odoo varie selon plusieurs facteurs : version source et cible (migration Odoo 15 vers 19, Odoo 16 vers 19, etc.), volume de données, nombre de modules personnalisés, complexité des intégrations, et besoins de formation. Pour une migration standard d'Odoo 15/16/17 vers Odoo 19, les tarifs démarrent à partir de 3000 TND pour les petites structures. Je propose un devis gratuit personnalisé après analyse de votre système actuel. Le devis inclut l'audit, la migration, les tests, et la formation de base.",
  },
  {
    question: "Proposez-vous un support multi-versions Odoo ?",
    answer:
      "Oui, je suis expert sur toutes les versions Odoo 15, 16, 17, 18 et 19. Je peux intervenir sur votre installation quelle que soit la version, que vous soyez à Tunis, Sousse, Sfax, Monastir ou ailleurs en Tunisie. Mon support multi-versions inclut : maintenance, résolution de bugs, développement de modules compatibles, optimisation des performances, et conseil pour les upgrades. Je maîtrise les spécificités de chaque version et peux vous accompagner dans votre migration progressive vers les versions les plus récentes.",
  },
  {
    question: "Combien de temps prend une migration Odoo 15 vers Odoo 19 ?",
    answer:
      "La durée d'une migration Odoo 15 vers Odoo 19 dépend de la complexité de votre installation : nombre de modules personnalisés, volume de données, intégrations externes. Pour une migration standard : 2-3 semaines (audit 2 jours, migration 1 semaine, tests 1 semaine, formation 2 jours). Pour des installations complexes avec beaucoup de personnalisations : 4-6 semaines. Je travaille en étroite collaboration avec vos équipes pour minimiser les interruptions et garantir une transition en douceur. Un plan de migration détaillé vous est fourni avant le début des travaux.",
  },
  {
    question: "Développez-vous des modules Odoo personnalisés pour tous les secteurs ?",
    answer:
      "Oui, je développe des modules Odoo personnalisés pour tous les secteurs d'activité en Tunisie : agences de voyage (comme TravelPro), impression et communication visuelle (comme Nexprint), e-commerce, retail, distribution, manufacturing, services, immobilier, santé, éducation, finance, agriculture, hôtellerie, transport, etc. Chaque module est conçu selon vos processus métier spécifiques et intégré parfaitement avec les modules standards d'Odoo. Mes modules sont compatibles avec Odoo 15, 16, 17, 18 et 19, avec documentation complète et support après livraison.",
  },
  {
    question: "Proposez-vous des services pour entreprises à Tunis, Sousse, Sfax ?",
    answer:
      "Absolument ! Bien que basé à Monastir, je propose mes services de développement Odoo pour toutes les entreprises tunisiennes, notamment à Tunis, Sousse, Sfax, et dans toutes les autres villes. Je peux me déplacer pour des réunions, formations, ou audits sur site. La majorité du travail peut également se faire en remote avec des visioconférences régulières. J'ai déjà accompagné des entreprises dans toute la Tunisie avec des résultats probants. Contactez-moi pour discuter de vos besoins spécifiques.",
  },
  {
    question: "Quelle est votre expérience avec Odoo e-commerce ?",
    answer:
      "J'ai une solide expérience en développement de solutions e-commerce Odoo, notamment avec le projet Nexprint Studio (plateforme e-commerce pour services d'impression sur Odoo 16). Je maîtrise les modules e-commerce d'Odoo 15, 16, 17, 18 et 19, incluant : catalogues produits personnalisables, gestion des commandes en ligne, intégration de moyens de paiement tunisiens, gestion des stocks en temps réel, personnalisation de produits, workflow de production, et intégration avec les marketplaces. Je peux créer des boutiques en ligne performantes adaptées au marché tunisien.",
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
        <div ref={ref} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20 mb-4">
            <HelpCircle className="h-4 w-4" />
            Questions Fréquentes
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Questions Fréquentes
          </h2>
          {/* SEO Content - Hidden but accessible */}
          <div className="sr-only">
            <p>FAQ Odoo Techno-Functional Consultant Tunisie. Reponses aux questions les plus frequentes sur Odoo, les migrations, et mes services de developpement.</p>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Réponses aux questions courantes
          </p>
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

