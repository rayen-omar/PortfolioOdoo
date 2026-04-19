"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const trustPoints = [
  "odoo Techno-Functional Consultant",
  "Livraison orientee resultat",
  "Support post-livraison",
]

export function ProHero() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-20 pt-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-background to-background" />
      <div className="container mx-auto">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-5 inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
            Portfolio professionnel odoo
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Developpement odoo sur mesure pour structurer et accelerer votre
            entreprise
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            J accompagne les entreprises dans la conception, la personnalisation
            et l evolution de leur ERP odoo avec une approche claire, fiable et
            orientee impact metier.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="shadow-sm">
              <Link href="#contact">
                Demander un devis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#projects">Voir les projets</Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {trustPoints.map((item) => (
              <div
                key={item}
                className="flex items-center justify-center gap-2 rounded-lg border border-border/70 bg-card px-4 py-3 text-sm text-foreground"
              >
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

