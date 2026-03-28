"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Send, Quote, Lock, ShieldCheck, Loader2 } from "lucide-react"
import emailjs from "@emailjs/browser"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

// ⚠️ CODE SECRET — Changez ce code et partagez-le UNIQUEMENT avec vos clients
// Pour changer: remplacez la chaîne ci-dessous par votre propre mot de passe secret
const SECRET_ACCESS_CODE = "rayeen2024client"

const testimonialFormSchema = z.object({
  accessCode: z.string().min(1, "Le code d'accès est requis"),
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  company: z.string().min(2, "Le nom de l'entreprise est requis"),
  project: z.string().min(1, "Veuillez sélectionner un projet"),
  feedback: z.string().min(20, "Le témoignage doit contenir au moins 20 caractères"),
  email: z.string().email("Email invalide").optional().or(z.literal("")),
})

type TestimonialFormValues = z.infer<typeof testimonialFormSchema>

interface Testimonial {
  id: number
  name: string
  company: string
  project: string
  feedback: string
  approved: boolean
  createdAt: string
}

export function Testimonials() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [isLoading, setIsLoading] = useState(true)

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

  // Charger les témoignages approuvés depuis l'API
  const loadTestimonials = async () => {
    try {
      setIsLoading(true)
      const res = await fetch("/api/testimonials")
      if (res.ok) {
        const data = await res.json()
        setTestimonials(data)
      }
    } catch (error) {
      console.error("Erreur chargement témoignages:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadTestimonials()
  }, [])

  const onSubmit = async (data: TestimonialFormValues) => {
    // Vérification du code d'accès secret
    if (data.accessCode.trim() !== SECRET_ACCESS_CODE) {
      toast({
        title: "Code d'accès incorrect",
        description:
          "Seuls les clients ayant reçu le code d'accès peuvent publier un témoignage. Contactez Rayeen Omar pour obtenir votre code.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    try {
      // 1. Sauvegarder dans le fichier JSON (en attente de validation)
      const saveRes = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          company: data.company,
          project: data.project,
          feedback: data.feedback,
          email: data.email || "",
        }),
      })

      if (!saveRes.ok) {
        throw new Error("Erreur lors de la sauvegarde")
      }

      // 2. Envoyer un email de notification (EmailJS)
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (serviceId && publicKey) {
        await emailjs.send(
          serviceId,
          process.env.NEXT_PUBLIC_EMAILJS_TESTIMONIAL_TEMPLATE_ID ||
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          {
            to_name: "Rayeen Omar",
            from_name: data.name,
            from_email: data.email || "Non fourni",
            company: data.company,
            project_type: data.project,
            message: `[TÉMOIGNAGE - EN ATTENTE DE VALIDATION]\n\n${data.feedback}\n\n---\nPour approuver ce témoignage, utilisez l'API d'administration.`,
            subject: `Nouveau témoignage de ${data.name} — ${data.company}`,
          },
          publicKey
        )
      }

      toast({
        title: "Témoignage soumis avec succès ! ✅",
        description:
          "Merci ! Votre témoignage a été enregistré et sera publié après validation par Rayeen.",
      })

      reset()
    } catch (error) {
      console.error("Error:", error)
      toast({
        title: "Erreur d'envoi",
        description:
          "Une erreur est survenue lors de l'envoi. Vérifiez votre connexion et réessayez.",
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
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/20 mb-6">
            <Quote className="w-3 h-3" />
            Témoignages
          </div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-foreground">
            Retours <span className="text-muted-foreground mr-2">&</span> 
            <span className="text-primary italic font-black">Confiance</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full opacity-50 shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Liste des témoignages approuvés */}
          <div className="space-y-6">
            {isLoading ? (
              <div className="flex items-center justify-center py-16">
                <Loader2 className="h-8 w-8 animate-spin text-primary/50" />
              </div>
            ) : testimonials.length > 0 ? (
              testimonials.map((testimonial, index) => (
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
                {/* Bandeau info accès réservé */}
                <div className="flex items-center gap-2 bg-primary/5 border border-primary/20 rounded-lg px-3 py-2 mb-4">
                  <ShieldCheck className="h-4 w-4 text-primary flex-shrink-0" />
                  <p className="text-xs text-muted-foreground">
                    <span className="font-semibold text-primary">Accès réservé</span> — Réservé aux entreprises clientes. Vous avez reçu un code d'accès par email.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Code d'accès secret — en premier */}
                  <div>
                    <Label htmlFor="testimonial-access-code" className="flex items-center gap-1">
                      <Lock className="h-3 w-3 text-primary" />
                      Code d'accès client <span className="text-destructive">*</span>
                    </Label>
                    <Input
                      id="testimonial-access-code"
                      type="password"
                      {...register("accessCode")}
                      placeholder="Entrez le code reçu par email"
                      className="mt-1"
                      autoComplete="off"
                    />
                    {errors.accessCode && (
                      <p className="text-sm text-destructive mt-1">
                        {errors.accessCode.message}
                      </p>
                    )}
                    <p className="text-xs text-muted-foreground mt-1">
                      Vous n'avez pas de code ?{" "}
                      <a href="#contact" className="text-primary underline">
                        Contactez-moi
                      </a>
                    </p>
                  </div>

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
                      Exemple : &quot;Rayeen a livré le projet avant la date prévue, a répondu à tous nos besoins et a été très professionnel.&quot;
                    </p>
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Envoi en cours...
                      </>
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
