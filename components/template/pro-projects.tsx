"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "TravelPro",
    type: "ERP pour agence de voyage",
    summary:
      "Centralisation des reservations, finance et operations avec automatisation du workflow commercial.",
  },
  {
    title: "Nexprint Studio",
    type: "E-commerce impression",
    summary:
      "Digitalisation du cycle devis-commande-production pour une execution plus rapide et fiable.",
  },
  {
    title: "Module paie & fiscalite",
    type: "Conformite tunisienne",
    summary:
      "Automatisation de la retenue a la source et generation des fichiers de declaration employeur.",
  },
]

export function ProProjects() {
  return (
    <section id="projects" className="px-4 py-24">
      <div className="container mx-auto">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
              Projets
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Resultats concrets sur des cas reels
            </h2>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="border border-border/70 bg-card shadow-sm"
            >
              <CardHeader>
                <p className="text-sm font-medium text-primary">{project.type}</p>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}


