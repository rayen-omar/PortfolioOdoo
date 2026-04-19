"use client"

const expertise = [
  "odoo 15, 16, 17, 18, 19",
  "Python et PostgreSQL",
  "Architecture modulaire maintenable",
  "Integrations API et automatisations",
  "Qualite de code et documentation",
  "Accompagnement des equipes",
]

export function ProExpertise() {
  return (
    <section id="skills" className="bg-secondary/10 px-4 py-24">
      <div className="container mx-auto">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-primary">
              Expertise
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Une approche technique rigoureuse
            </h2>
            <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
              Chaque implementation est pensee pour etre stable, evolutive et
              comprensible par vos equipes sur le long terme.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {expertise.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-border/70 bg-card px-4 py-3 text-sm font-medium text-foreground shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

