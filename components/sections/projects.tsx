"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ExternalLink, Code, Database, Zap, TrendingUp } from "lucide-react"
import Image from "next/image"
import Tilt from "react-parallax-tilt"
import { VideoPlayer } from "@/components/ui/video-player"

const projects = [
  {
    id: 1,
    title: "TravelPro",
    type: "Système de gestion pour agences de voyage",
    description:
      "Solution ERP complète pour la gestion des réservations, clients, fournisseurs et finances.",
    longDescription:
      "TravelPro est une solution ERP complète développée pour automatiser tous les processus d'une agence de voyage. Le système permet de gérer les réservations multi-services (vols, hôtels, circuits), intégrer un Point de Vente (POS), gérer le crédit client et les paiements, générer des rapports avancés, et gérer les fournisseurs avec calcul automatique des commissions.",
    modules: [
      "Module de réservation multi-services (vols, hôtels, circuits)",
      "Système de Point de Vente (POS) intégré",
      "Gestion du crédit client et paiements",
      "Reporting et analytics avancés",
      "Gestion des fournisseurs et commissions",
    ],
    technologies: ["Odoo 17", "Python", "PostgreSQL", "JavaScript"],
    results: "Automatisation complète du workflow d'une agence de voyage",
    image: "/images/travelpro.jpg",
    video: "/demo travel pro.mp4",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Nexprint Studio",
    type: "Plateforme e-commerce pour services d'impression",
    description:
      "Solution complète pour entreprises d'impression et communication visuelle.",
    longDescription:
      "Nexprint Studio est une plateforme e-commerce spécialisée pour les entreprises d'impression et de communication visuelle. La solution inclut un catalogue de produits personnalisables (cartes de visite, flyers, panneaux), un système de devis et commandes en ligne, un workflow de production et manufacturing, une gestion complète des clients avec historique, et un module de facturation automatisée.",
    modules: [
      "Catalogue produits personnalisables (cartes de visite, flyers, panneaux)",
      "Système de devis et commandes en ligne",
      "Workflow de production et manufacturing",
      "Gestion des clients et historique",
      "Module de facturation automatisée",
    ],
    technologies: ["Odoo 16", "Python", "PostgreSQL", "E-commerce Integration"],
    results: "Digitalisation complète du processus de vente et production",
    image: "/images/nexprint.jpg",
    video: "/demo nexprint.mp4",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Gestion automatisée de la paie et fiscalité tunisienne",
    type: "Module Odoo 15 - Paie & Fiscalité",
    description:
      "Développement d'un module Odoo pour la gestion de la Retenue à la Source (RAS) et la génération de la Déclaration Employeur (.txt).",
    longDescription:
      "Module Odoo complet pour la gestion automatisée de la paie et de la fiscalité tunisienne. Le module inclut la gestion de la Retenue à la Source (RAS), la génération automatique de la Déclaration Employeur au format .txt, l'intégration complète avec le module de paie d'Odoo, la configuration des taux fiscaux tunisiens, et la création de rapports PDF personnalisés (factures, bons de livraison). Le projet inclut également des tests unitaires et fonctionnels avec Pytest, ainsi qu'une documentation technique claire et structurée.",
    modules: [
      "Gestion de la Retenue à la Source (RAS)",
      "Génération de la Déclaration Employeur (.txt)",
      "Intégration avec le module de paie Odoo",
      "Configuration des taux fiscaux tunisiens",
      "Création de rapports PDF personnalisés (factures, bons de livraison)",
      "Tests unitaires et fonctionnels avec Pytest",
      "Documentation technique complète",
    ],
    technologies: ["Odoo 15", "Python", "PostgreSQL", "Pytest", "QWeb"],
    results: "Automatisation complète de la gestion de paie et fiscalité conforme à la législation tunisienne",
    image: "/demo-projet-fiscal.png",
    gradient: "from-green-500 to-emerald-500",
  },
]

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="projects"
      className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.22),transparent_55%)]" />
      
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
            <span className="px-4 py-2 bg-white/5 text-white rounded-full text-sm font-semibold border border-white/10">
              Portfolio
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
            Mes <span className="text-gradient">Réalisations</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Découvrez quelques-uns de mes projets Odoo les plus réussis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -4 }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={1000}
                transitionSpeed={1000}
                className="h-full"
              >
                <Card className="h-full bg-white/5 border border-white/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group overflow-hidden relative rounded-xl text-white">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Video or Image */}
                  <div className={`relative h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                    {project.video ? (
                      <>
                        <VideoPlayer
                          src={project.video}
                          className="absolute inset-0 h-full w-full"
                          autoPlay={false}
                          loop={true}
                          muted={true}
                          defaultPlaybackRate={1.5}
                          title={`Démonstration vidéo de ${project.title} - ${project.type}`}
                          ariaLabel={`Vidéo de démonstration du projet ${project.title}, ${project.type} développé avec ${project.technologies.join(', ')}`}
                        />
                        <div className="absolute top-4 right-4 z-20">
                          <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                            {project.technologies[0]}
                          </span>
                        </div>
                      </>
                    ) : project.image ? (
                      <>
                        <Image
                          src={project.image}
                          alt={`${project.title} - ${project.type} - Capture d'écran du projet Odoo développé par BenAmor Rayeen`}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute top-4 right-4 z-20">
                          <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                            {project.technologies[0]}
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Code className="h-24 w-24 text-white/20" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                            {project.technologies[0]}
                          </span>
                        </div>
                      </>
                    )}
                  </div>

                  <CardHeader className="relative z-10">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors leading-snug">
                        {project.title}
                      </CardTitle>
                      <motion.div
                        whileHover={{ rotate: 90, scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <ExternalLink className="h-5 w-5 text-white/70 group-hover:text-primary transition-colors" />
                      </motion.div>
                    </div>
                    <CardDescription className="text-base text-white/70">
                      {project.type}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <p className="text-white/70 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-white/5 text-white/90 rounded-full text-sm font-medium border border-white/10"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full group/btn bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300"
                        >
                          <span className="group-hover/btn:translate-x-1 transition-transform inline-block">
                            Voir les détails
                          </span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-950 border border-white/10 text-white">
                        <DialogHeader>
                          <DialogTitle className="text-2xl flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                            {project.title}
                          </DialogTitle>
                          <DialogDescription className="text-base text-white/70">
                            {project.type}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-6">
                          {/* Video Demo */}
                          {project.video && (
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Code className="h-4 w-4 text-primary" />
                                Démo Vidéo
                              </h4>
                              <div className="relative w-full rounded-lg overflow-hidden bg-black">
                                <VideoPlayer
                                  src={project.video}
                                  className="w-full"
                                  autoPlay={false}
                                  loop={true}
                                  muted={true}
                                  defaultPlaybackRate={1.5}
                                  title={`Démonstration vidéo complète de ${project.title} - ${project.type}`}
                                  ariaLabel={`Vidéo de démonstration complète du projet ${project.title}, ${project.type} développé avec ${project.technologies.join(', ')}`}
                                />
                              </div>
                            </div>
                          )}
                          {/* Image Demo */}
                          {!project.video && project.image && (
                            <div>
                              <h4 className="font-semibold mb-3 flex items-center gap-2">
                                <Code className="h-4 w-4 text-primary" />
                                Capture d'écran
                              </h4>
                              <div className="relative w-full h-64 rounded-lg overflow-hidden bg-white/5">
                                <Image
                                  src={project.image}
                                  alt={`${project.title} - ${project.type} - Détails du projet Odoo développé par BenAmor Rayeen`}
                                  fill
                                  className="object-contain"
                                  unoptimized
                                />
                              </div>
                            </div>
                          )}
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              <Database className="h-4 w-4 text-primary" />
                              Description
                            </h4>
                            <p className="text-white/70 leading-relaxed">
                              {project.longDescription}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              <Code className="h-4 w-4 text-primary" />
                              Modules développés
                            </h4>
                            <ul className="list-disc list-inside space-y-1 text-white/70">
                              {project.modules.map((module, idx) => (
                                <li key={idx}>{module}</li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              <Zap className="h-4 w-4 text-primary" />
                              Technologies
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="px-3 py-1 bg-white/5 text-white/90 rounded-full text-sm font-medium border border-white/10"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2 flex items-center gap-2">
                              <TrendingUp className="h-4 w-4 text-primary" />
                              Résultats
                            </h4>
                            <p className="text-white/70 leading-relaxed">
                              {project.results}
                            </p>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>

                  {/* Shine effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                </Card>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
