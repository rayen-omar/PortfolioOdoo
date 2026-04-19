import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Process } from "@/components/sections/process"
import { WhyChoose } from "@/components/sections/why-choose"
import { Contact } from "@/components/sections/contact"
import TestimonialsSection from "@/components/TestimonialsSection"

export default function Home() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "BenAmor",
    jobTitle: "Développeur & Consultant odoo – Expert",
    description: "Expert en intégration, migration ERP, et développement sur mesure odoo 18 et 19 en Tunisie.",
    url: "https://www.benamor.tech",
    image: "https://www.benamor.tech/photo.png",
    sameAs: [
      "https://www.linkedin.com/in/rayen-benamor-1739a9378/",
      "https://github.com/rayen-omar"
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "TN",
      addressLocality: "Monastir",
      addressRegion: "Monastir"
    },
    knowsAbout: [
      "odoo", "odoo 18", "odoo 19", "Migration ERP", "Intégration odoo", "Python", "PostgreSQL",
      "Développement Technique", "Consulting Fonctionnel", "Agence de voyage", "Cabinet Comptable"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Hero />
      <Services />
      <TestimonialsSection />
      <Projects />
      <WhyChoose />
      <About />
      <Skills />
      <Process />
      <Contact />
    </>
  )
}


