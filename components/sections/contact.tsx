"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useToast } from "@/hooks/use-toast"
import { Send, Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react"

const contactFormSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  phone: z.string().optional(),
  company: z.string().optional(),
  projectType: z.string().min(1, "Veuillez sélectionner un type de projet"),
  budget: z.string().optional(),
  message: z.string(),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [lastSubmitTime, setLastSubmitTime] = useState<number | null>(null)
  const { ref, inView: isInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })

  const projectType = watch("projectType")
  const [remainingTime, setRemainingTime] = useState(0)

  // Vérifier l'anti-spam
  const canSubmit = () => {
    if (lastSubmitTime === null) return true
    const timeSinceLastSubmit = Date.now() - lastSubmitTime
    return timeSinceLastSubmit >= 60000 // 60 secondes
  }

  const getRemainingTime = () => {
    if (lastSubmitTime === null) return 0
    const timeSinceLastSubmit = Date.now() - lastSubmitTime
    const remaining = Math.ceil((60000 - timeSinceLastSubmit) / 1000)
    return remaining > 0 ? remaining : 0
  }

  // Timer pour l'anti-spam
  useEffect(() => {
    if (lastSubmitTime === null) {
      setRemainingTime(0)
      return
    }

    const interval = setInterval(() => {
      const timeSinceLastSubmit = Date.now() - lastSubmitTime
      const remaining = Math.ceil((60000 - timeSinceLastSubmit) / 1000)
      const finalRemaining = remaining > 0 ? remaining : 0
      setRemainingTime(finalRemaining)
      if (finalRemaining === 0) {
        clearInterval(interval)
      }
    }, 1000)

    return () => clearInterval(interval)
  }, [lastSubmitTime])

  // Réinitialiser les messages après 5 secondes
  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        setSuccess(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [success])

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [error])

  const onSubmit = async (data: ContactFormValues) => {
    // Vérification anti-spam
    if (!canSubmit()) {
      const remaining = remainingTime > 0 ? remainingTime : getRemainingTime()
      setError(`Veuillez patienter ${remaining} seconde${remaining > 1 ? 's' : ''} avant de renvoyer un message.`)
      toast({
        title: "Trop de messages",
        description: `Veuillez patienter ${remaining} seconde${remaining > 1 ? 's' : ''} avant de renvoyer un message.`,
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)
    setError(null)
    setSuccess(false)

    try {
      // Vérifier que les variables d'environnement sont configurées
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Configuration EmailJS manquante. Veuillez redémarrer le serveur après avoir créé le fichier .env.local")
      }

      // Préparer les paramètres pour EmailJS avec les noms de champs corrects
      const templateParams = {
        user_name: data.name || "",
        user_email: data.email || "",
        user_phone: data.phone || "",
        company_name: data.company || "",
        project_type: data.projectType || "",
        budget: data.budget || "",
        message: data.message || "",
      }

      // Envoyer l'email via EmailJS avec send (plus fiable que sendForm)
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )
      
      setSuccess(true)
      setLastSubmitTime(Date.now())
      toast({
        title: "Message envoyé !",
        description: "Je vous répondrai dans les plus brefs délais.",
      })
      
      reset()
    } catch (error: any) {
      console.error("Erreur lors de l'envoi de l'email:", error)
      
      let errorMessage = "Une erreur est survenue. Veuillez réessayer."
      
      if (error instanceof Error) {
        errorMessage = error.message
      } else if (error?.text) {
        // Erreur EmailJS avec détails
        errorMessage = `Erreur EmailJS: ${error.text}`
        console.error("Détails EmailJS:", error)
      } else if (typeof error === 'string') {
        errorMessage = error
      }
      
      setError(errorMessage)
      toast({
        title: "Erreur",
        description: errorMessage,
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-b from-secondary/10 via-background to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto relative z-10">
        <motion.div
          ref={ref}
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
              Contact
            </span>
          </motion.div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-foreground">
            Prêt à <span className="text-gradient">digitaliser</span> votre entreprise ?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contactez-moi pour un devis gratuit et une consultation personnalisée
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Informations de contact
              </h3>
              <div className="space-y-4">
                {[
                  {
                    icon: Mail,
                    title: "Email",
                    content: "benomorr326@gmail.com",
                    href: "mailto:benomorr326@gmail.com",
                  },
                  {
                    icon: Phone,
                    title: "Téléphone / WhatsApp",
                    content: "+216 95129848",
                    href: "https://wa.me/21695129848",
                  },
                  {
                    icon: MapPin,
                    title: "Localisation",
                    content: "Monastir, Tunisie",
                    href: null,
                  },
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-lg bg-card border border-border/70 hover:border-primary/30 transition-all duration-300 group"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium mb-1">{item.title}</p>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith("http") ? "_blank" : undefined}
                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{item.content}</p>
                        )}
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="pt-6 border-t space-y-3"
            >
              <div className="flex items-center gap-3 text-muted-foreground">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Horaires de disponibilité</p>
                  <p className="text-sm">Du lundi au vendredi : 9h - 18h (GMT+1)</p>
                  <p className="text-sm">Réponse sous 24h en moyenne</p>
                </div>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-foreground">Garantie</p>
                  <p className="text-sm">Support 30 jours après livraison</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form 
              onSubmit={handleSubmit(onSubmit)} 
              className="space-y-6 bg-card p-6 rounded-xl border border-border/70 shadow-sm"
            >
              {/* Messages de succès/erreur */}
              {success && (
                <div className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
                  <p className="font-medium">Message envoyé avec succès !</p>
                  <p className="text-sm mt-1">Je vous répondrai dans les plus brefs délais.</p>
                </div>
              )}
              {error && (
                <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
                  <p className="font-medium">Erreur</p>
                  <p className="text-sm mt-1">{error}</p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">
                    Nom / Entreprise <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="name"
                    {...register("name")}
                    placeholder="Votre nom"
                    className="mt-1 focus:border-primary focus:ring-primary"
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email">
                    Email <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="votre@email.com"
                    className="mt-1 focus:border-primary focus:ring-primary"
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register("phone")}
                    placeholder="+216 XX XXX XXX"
                    className="mt-1 focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Entreprise</Label>
                  <Input
                    id="company"
                    {...register("company")}
                    placeholder="Nom de votre entreprise"
                    className="mt-1 focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="projectType">
                  Type de projet <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={projectType}
                  onValueChange={(value) => setValue("projectType", value)}
                >
                  <SelectTrigger className="mt-1 focus:border-primary focus:ring-primary">
                    <SelectValue placeholder="Sélectionnez un type de projet" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="custom-module">
                      Développement de module personnalisé
                    </SelectItem>
                    <SelectItem value="migration">Migration Odoo</SelectItem>
                    <SelectItem value="customization">
                      Personnalisation & Configuration
                    </SelectItem>
                    <SelectItem value="training">Formation & Support</SelectItem>
                    <SelectItem value="deployment">
                      Déploiement & Hébergement
                    </SelectItem>
                    <SelectItem value="other">Autre</SelectItem>
                  </SelectContent>
                </Select>
                {errors.projectType && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.projectType.message}
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="budget">Budget estimé en dt (optionnel)</Label>
                <Input
                  id="budget"
                  type="text"
                  placeholder=""
                  className="mt-1 focus:border-primary focus:ring-primary"
                  {...register("budget")}
                />
              </div>

              <div>
                <Label htmlFor="message">
                  Message <span className="text-destructive">*</span>
                </Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder="Décrivez votre projet et vos besoins..."
                  className="mt-1 min-h-[120px] focus:border-primary focus:ring-primary"
                />
                {errors.message && (
                  <p className="text-sm text-destructive mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
                disabled={isSubmitting || !canSubmit()}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <motion.div
                      className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Envoi en cours...
                  </span>
                ) : !canSubmit() ? (
                  <span className="flex items-center">
                    Attendez {remainingTime}s
                  </span>
                ) : (
                  <>
                    <span className="relative z-10 flex items-center">
                      <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      Envoyer le message
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
