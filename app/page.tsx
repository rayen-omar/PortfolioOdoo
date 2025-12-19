"use client"

import { Hero } from "@/components/sections/hero"
import { Services } from "@/components/sections/services"
import { Projects } from "@/components/sections/projects"
import { Skills } from "@/components/sections/skills"
import { Process } from "@/components/sections/process"
import { WhyChoose } from "@/components/sections/why-choose"
import { Testimonials } from "@/components/sections/testimonials"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Projects />
      <Skills />
      <Process />
      <WhyChoose />
      <Testimonials />
      <Contact />
    </div>
  )
}
