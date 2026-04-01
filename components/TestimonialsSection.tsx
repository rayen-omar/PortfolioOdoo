"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Star, Quote, Upload, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

interface Testimonial {
  id: string;
  company: string;
  name: string;
  rating: number;
  text: string;
  photo_url?: string;
  email?: string;
  project?: string;
  approved: boolean;
  created_at: string;
}

export default function TestimonialsSection() {
  const { toast } = useToast();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form states
  const [company, setCompany] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [project, setProject] = useState("");
  const [rating, setRating] = useState(5);
  const [text, setText] = useState("");
  const [photo, setPhoto] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("/api/testimonials");
      if (res.ok) {
        const data = await res.json();
        setTestimonials(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!company || !text) {
      toast({ title: "Champs requis", description: "Veuillez remplir l'entreprise et le témoignage.", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/testimonials", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ company, name, rating, text, photo, email, project }),
      });

      const data = await res.json();

      if (res.ok) {
        setIsSuccess(true);
        toast({ title: "Témoignage envoyé !", description: "Il sera visible après validation." });
        // Clear form
        setCompany("");
        setName("");
        setEmail("");
        setProject("");
        setRating(5);
        setText("");
        setPhoto(null);
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        throw new Error(data.error || "Une erreur est survenue lors de l'enregistrement.");
      }
    } catch (error: any) {
      console.error("Erreur submission:", error);
      toast({ 
        title: "Erreur d'envoi", 
        description: error.message || "Échec de l'envoi du témoignage. Vérifiez votre connexion ou la configuration Supabase.", 
        variant: "destructive" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getInitial = (name: string) => name.charAt(0).toUpperCase();

  const colors = [
    "bg-blue-500", "bg-purple-500", "bg-indigo-500", "bg-rose-500", "bg-emerald-500", "bg-amber-500"
  ];

  return (
    <section id="testimonials" className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Background decoration - matching Services */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-widest border border-primary/20 mb-6"
          >
            <Star className="w-3 h-3 fill-current" /> Témoignages
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-foreground">
            ILS ME FONT <span className="text-primary italic font-black">CONFIANCE</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full opacity-50 shadow-[0_0_20px_rgba(59,130,246,0.5)] mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            Découvrez comment j&apos;accompagne les entreprises dans leur transformation digitale avec Odoo.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Testimonials Grid (2/3 width on desktop) */}
          <div className="lg:w-2/3 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {isLoading ? (
                <div className="col-span-full flex justify-center py-20">
                  <Loader2 className="w-10 h-10 animate-spin text-primary" />
                </div>
              ) : Array.isArray(testimonials) && testimonials.length > 0 ? (
                testimonials.map((t, i) => (
                  <motion.div
                    key={t.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                  >
                    <Card className="h-full bg-card border border-border/70 hover:border-primary/30 hover:shadow-lg transition-all duration-300 relative group overflow-hidden rounded-xl">
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                      <div className="absolute top-4 right-4 text-primary/10 group-hover:text-primary/30 transition-colors">
                        <Quote className="w-10 h-10 rotate-180" />
                      </div>
                      <CardContent className="p-6 space-y-4 relative z-10">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, idx) => (
                            <Star
                              key={idx}
                              className={`w-3 h-3 ${idx < t.rating ? "fill-yellow-500 text-yellow-500" : "text-border"}`}
                            />
                          ))}
                        </div>
                        <p className="text-foreground/90 text-md leading-relaxed italic">
                          &quot;{t.text}&quot;
                        </p>
                        <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                          {t.photo_url ? (
                            <img src={t.photo_url} className="w-10 h-10 rounded-full object-cover border-2 border-primary/20" alt={t.company} />
                          ) : (
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-white text-xs ${colors[i % colors.length]} shadow-lg`}>
                              {getInitial(t.company)}
                            </div>
                          )}
                          <div>
                            <h4 className="font-bold text-foreground uppercase tracking-tight text-sm">{t.company}</h4>
                            <p className="text-muted-foreground text-[10px] font-medium">{t.name}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))
              ) : (
                <div className="col-span-full text-center py-10 text-muted-foreground italic bg-card/30 rounded-2xl border border-dashed border-border/50">
                  Aucun témoignage disponible pour le moment.
                </div>
              )}
            </div>
          </div>

          {/* Right: Review Form (1/3 width on desktop) */}
          <div className="lg:w-1/3">
            <div className="bg-card border border-border/70 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl sticky top-24">
              <div className="relative z-10 space-y-6">
                <div className="text-center space-y-2">
                  <h3 className="text-2xl font-black text-foreground italic tracking-tighter uppercase">Laissez un avis</h3>
                  <p className="text-muted-foreground text-xs font-semibold">Votre retour est précieux pour Rayeen.</p>
                </div>

                {isSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-10 space-y-4 text-center"
                  >
                    <CheckCircle2 className="w-12 h-12 text-emerald-500" />
                    <h4 className="text-lg font-bold text-foreground">ENVOYÉ !</h4>
                    <p className="text-xs text-muted-foreground">En attente de validation.</p>
                    <Button variant="ghost" size="sm" onClick={() => setIsSuccess(false)}>Nouvel avis</Button>
                  </motion.div>
                ) : (
                  <div className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest pl-1">Entreprise *</label>
                      <input
                        type="text"
                        placeholder="Ex: Odoo Expert"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full bg-background border border-border/50 rounded-xl px-3 py-2 text-sm text-foreground focus:border-primary outline-none transition-all placeholder:text-muted-foreground/30 font-medium"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest pl-1">Votre Nom *</label>
                      <input
                        type="text"
                        placeholder="Ex: Jean Dupont..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-background border border-border/50 rounded-xl px-3 py-2 text-sm text-foreground focus:border-primary outline-none transition-all placeholder:text-muted-foreground/30 font-medium"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest pl-1">Email</label>
                      <input
                        type="email"
                        placeholder="votre@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-background border border-border/50 rounded-xl px-3 py-2 text-sm text-foreground focus:border-primary outline-none transition-all placeholder:text-muted-foreground/30 font-medium"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest pl-1">Note</label>
                      <div className="flex gap-2 justify-center py-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            onClick={() => setRating(star)}
                            className="transition-transform active:scale-95 hover:scale-110"
                          >
                            <Star className={`w-6 h-6 ${star <= rating ? "fill-yellow-500 text-yellow-500" : "text-border"}`} />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-2">
                        <label className="text-[10px] font-black uppercase text-muted-foreground tracking-widest pl-1">Photo & Témoignage *</label>
                        <div className="flex gap-3 items-start">
                          <div
                            onClick={() => fileInputRef.current?.click()}
                            className="w-12 h-12 flex-shrink-0 rounded-xl border-2 border-dashed border-border flex items-center justify-center cursor-pointer hover:border-primary transition-all overflow-hidden bg-background relative group"
                          >
                            {photo ? (
                              <img src={photo} className="w-full h-full object-cover" alt="X" />
                            ) : (
                              <Upload className="w-4 h-4 text-muted-foreground/40 group-hover:text-primary" />
                            )}
                            <input type="file" ref={fileInputRef} onChange={handlePhotoUpload} className="hidden" accept="image/*" />
                          </div>
                          <textarea
                            placeholder="Votre expérience..."
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            rows={3}
                            className="w-full bg-background border border-border/50 rounded-xl px-3 py-2 text-sm text-foreground focus:border-primary outline-none transition-all placeholder:text-muted-foreground/30 font-medium resize-none shadow-inner"
                          />
                        </div>
                    </div>

                    <Button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-black text-sm italic tracking-tighter shadow-lg shadow-primary/20 mt-4"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <Loader2 className="w-4 h-4 animate-spin" /> ENVOI...
                        </div>
                      ) : (
                        "PUBLIER L'AVIS"
                      )}
                    </Button>
                  </div>
                )}
              </div>
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-2xl rounded-full translate-x-5 -translate-y-5" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
