"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Progress } from "@/components/ui/progress"
import { Code2, Database, GitBranch, Server, Zap, Globe, Monitor, Terminal } from "lucide-react"

const skills = [
  { name: "Odoo Framework", level: 95, category: "Expert", icon: Code2 },
  { name: "Python", level: 90, category: "Avancé", icon: Zap },
  { name: "PostgreSQL", level: 85, category: "Avancé", icon: Database },
  { name: "JavaScript", level: 80, category: "Intermédiaire-Avancé", icon: Code2 },
  { name: "Git/GitHub", level: 75, category: "Intermédiaire", icon: GitBranch },
  { name: "Déploiement Linux", level: 70, category: "Intermédiaire", icon: Server },
]

const technologies = [
  "Odoo 17, 18, 19",
  "Python",
  "PostgreSQL",
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Node.js",
  "API REST",
  "ORM",
  "XML",
  "QWeb",
  "Owl Framework",
  "Git",
  "Docker",
  "Linux",
]

const odooModules = [
  "Odoo Online",
  "Odoo Entreprise",
  "Odoo Community",
  "Comptabilité",
  "Ventes",
  "Achats",
  "CRM",
  "Stock",
  "Contacts",
  "Website",
  "Configuration & Paramétrage",
]

export function Skills() {
  const { ref, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <section id="skills" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.1),transparent)]"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
              Compétences
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Mes <span className="text-gradient">Compétences</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise technique en développement Odoo et technologies associées
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills with Progress */}
          <div className="space-y-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group rounded-xl border border-border/70 bg-card/50 p-4 hover:border-primary/30 transition-colors"
                >
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">{skill.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {skill.category}
                        </p>
                      </div>
                    </div>
                    <motion.span
                      className="text-sm font-medium text-primary"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + 0.3, type: "spring" }}
                    >
                      {skill.level}%
                    </motion.span>
                  </div>
                  <div className="relative mt-2">
                    <Progress
                      value={isInView ? skill.level : 0}
                      className="h-2.5 bg-secondary"
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary to-primary/60 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={isInView ? { scaleX: skill.level / 100 } : {}}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                      style={{ transformOrigin: "left" }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Technologies Grid */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              Technologies & Outils
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {technologies.map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -2 }}
                  className="px-3.5 py-2 bg-secondary/70 rounded-md text-sm font-medium hover:bg-secondary transition-all duration-300 cursor-default border border-border/60"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Odoo Modules Grid */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Database className="h-5 w-5 text-primary" />
                Solutions & Modules Odoo
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {odooModules.map((module, index) => (
                  <motion.span
                    key={module}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -2 }}
                    className="px-3.5 py-2 bg-primary/10 text-primary rounded-md text-sm font-medium hover:bg-primary/20 transition-all duration-300 cursor-default border border-primary/20"
                  >
                    {module}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Langues
              </h3>
              <div className="space-y-3">
                {[
                  { lang: "Français", level: "Natif", progress: 100 },
                  { lang: "Arabe", level: "Natif", progress: 100 },
                  { lang: "Anglais", level: "Courant", progress: 85 },
                ].map((item, index) => (
                  <motion.div
                    key={item.lang}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 }}
                    className="flex justify-between items-center p-4 bg-card/60 rounded-lg transition-colors border border-border/60"
                  >
                    <span className="font-medium">{item.lang}</span>
                    <div className="flex items-center gap-3">
                      <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${item.progress}%` } : {}}
                          transition={{ delay: index * 0.1 + 0.5, duration: 1 }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground w-20 text-right">
                        {item.level}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
