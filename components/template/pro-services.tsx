"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code2, Database, Settings, Server } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Modules odoo personnalises",
    description:
      "Conception de modules adaptes a vos processus metier et integres a votre environnement existant.",
  },
  {
    icon: Database,
    title: "Migration et evolution",
    description:
      "Migration entre versions odoo avec preservation des donnees et plan de transition controle.",
  },
  {
    icon: Settings,
    title: "Integration et automatisation",
    description:
      "Connexion avec vos outils tiers et automatisation des workflows pour gagner en productivite.",
  },
  {
    icon: Server,
    title: "Deploiement et support",
    description:
      "Mise en production, securisation et support technique pour garantir la continuite de service.",
  },
]

export function ProServices() {
  return (
    <section id="services" className="px-4 py-24">
      <div className="container mx-auto">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
            Services
          </p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Une offre claire pour vos projets odoo
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.title}
                className="border border-border/70 bg-card shadow-sm"
              >
                <CardHeader>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}


