"use client";

import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Star, Upload, Loader2, CheckCircle2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import Head from "next/head";

export default function LaissezUnAvisPage() {
  const { toast } = useToast();
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

  return (
    <main className="min-h-screen pt-32 pb-24 px-4 bg-background relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent z-0"></div>
      
      <div className="container mx-auto max-w-lg relative z-10">
        <Link href="/">
          <Button variant="ghost" className="mb-8 hover:bg-transparent hover:text-primary transition-colors text-muted-foreground p-0 h-auto">
            <ArrowLeft className="w-4 h-4 mr-2" /> Retour au portfolio
          </Button>
        </Link>
        <div className="bg-card border border-border/70 rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-xl">
          <div className="relative z-10 space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-black text-foreground italic tracking-tighter uppercase">Laissez un avis</h3>
              <p className="text-muted-foreground text-xs font-semibold">Votre retour est précieux pour BenAmor.</p>
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
                    placeholder="Ex: odoo Expert"
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
    </main>
  );
}
