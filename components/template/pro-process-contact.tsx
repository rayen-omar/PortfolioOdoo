"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const processSteps = [
  "Cadrage et audit des besoins",
  "Specification fonctionnelle et technique",
  "Developpement par iterations courtes",
  "Tests, recette et mise en production",
]

export function ProProcessContact() {
  return (
    <>
      <section id="process" className="bg-secondary/10 px-4 py-24">
        <div className="container mx-auto">
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
              Methode
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Un process simple et fiable
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-lg border border-border/70 bg-card p-5 shadow-sm"
              >
                <p className="mb-2 text-sm font-semibold text-primary">
                  Etape {index + 1}
                </p>
                <p className="font-medium text-foreground">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-4 py-24">
        <div className="container mx-auto">
          <div className="rounded-2xl border border-border/70 bg-card px-6 py-10 text-center shadow-sm md:px-12">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
              Contact
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Discutons de votre projet odoo
            </h2>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
              Partagez votre contexte et vos objectifs. Je vous propose une
              approche claire avec estimation de delais et priorites.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg">
                <Link href="mailto:benomorr326@gmail.com">Envoyer un email</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://wa.me/21695129848" target="_blank">
                  Contacter sur WhatsApp
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

