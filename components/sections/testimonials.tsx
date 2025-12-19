"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Send, Quote } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const testimonialFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  company: z.string().min(2, "Le nom de l'entreprise est requis"),
  project: z.string().min(1, "Veuillez sélectionner un projet"),
  feedback: z.string().min(20, "Le témoignage doit contenir au moins 20 caractères"),
  email: z.string().email("Email invalide").optional(),
})

type TestimonialFormValues = z.infer<typeof testimonialFormSchema>

// Témoignages directs écrits par les clients
const existingTestimonials: Array<{
  id: number
  feedback: string
  name: string
  company: string
  project?: string
}> = []

export function Testimonials() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<TestimonialFormValues>({
    resolver: zodResolver(testimonialFormSchema),
  })

  const project = watch("project")


  const onSubmit = async (data: TestimonialFormValues) => {
    setIsSubmitting(true)
    try {
      // Simulate API call - Replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      console.log("Testimonial data:", data)
      
      toast({
        title: "Merci pour votre témoignage !",
        description: "Votre avis a été enregistré et sera publié après modération.",
      })
      
      reset()
      setShowForm(false)
    } catch (error) {
      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="testimonials" className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.05),transparent)]"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold border border-primary/20">
              Témoignages
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Ce que disent mes <span className="text-gradient">clients</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Témoignages directs écrits par mes clients. Vos retours sont précieux pour améliorer mes services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Témoignages directs écrits par les clients */}
          <div className="space-y-6">
            {existingTestimonials.length > 0 ? (
              existingTestimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-primary">
                    <CardContent className="pt-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Quote className="h-6 w-6 text-primary/40 flex-shrink-0 mt-1" />
                          <p className="text-foreground leading-relaxed text-base italic">
                            « {testimonial.feedback} »
                          </p>
                        </div>
                        <div className="pt-2 border-t border-border/50">
                          {testimonial.project && (
                            <p className="text-xs text-primary font-medium mb-2">
                              Projet : {testimonial.project}
                            </p>
                          )}
                          <p className="text-sm font-semibold text-foreground">
                            — {testimonial.name}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="text-center py-12"
              >
                <Quote className="h-12 w-12 text-primary/30 mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Aucun témoignage pour le moment. Soyez le premier à partager votre expérience !
                </p>
              </motion.div>
            )}
          </div>

          {/* Formulaire de témoignage */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Quote className="h-5 w-5 text-primary" />
                  Laissez votre témoignage
                </CardTitle>
                <p className="text-sm text-muted-foreground">
                  Partagez votre expérience et aidez d'autres clients à prendre une décision
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="testimonial-name">
                      Votre nom <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="testimonial-name"
                      {...register("name")}
                      placeholder="Votre nom complet"
                      className="mt-1"
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="testimonial-company">
                      Entreprise <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="testimonial-company"
                      {...register("company")}
                      placeholder="Nom de votre entreprise"
                      className="mt-1"
                    />
                    {errors.company && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.company.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="testimonial-project">
                      Projet concerné <span className="text-destructive">*</span>
                    </Label>
                    <Select
                      value={project}
                      onValueChange={(value) => setValue("project", value)}
                    >
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Sélectionnez un projet" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="TravelPro">TravelPro</SelectItem>
                        <SelectItem value="Nexprint Studio">Nexprint Studio</SelectItem>
                        <SelectItem value="Gestion Paie & Fiscalité">
                          Gestion Paie & Fiscalité
                        </SelectItem>
                        <SelectItem value="Autre projet">Autre projet</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.project && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.project.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="testimonial-email">Email (optionnel)</Label>
                    <Input
                      id="testimonial-email"
                      type="email"
                      {...register("email")}
                      placeholder="votre@email.com"
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="testimonial-feedback">
                      Votre témoignage <span className="text-destructive">*</span>
                    </Label>
                    <Textarea
                      id="testimonial-feedback"
                      {...register("feedback")}
                      placeholder="Écrivez votre témoignage direct sur votre expérience..."
                      className="mt-1 min-h-[120px]"
                    />
                    {errors.feedback && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.feedback.message}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">
                      Exemple : "Rayeen a livré le projet avant la date prévue, a répondu à tous nos besoins et a été très professionnel."
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Envoi en cours..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Publier mon témoignage
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

