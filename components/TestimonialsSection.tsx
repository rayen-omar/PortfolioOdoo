"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Star, Quote, Upload, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";

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



  const getInitial = (name: string) => name.charAt(0).toUpperCase();

  const colors = [
    "bg-blue-500", "bg-purple-500", "bg-indigo-500", "bg-rose-500", "bg-emerald-500", "bg-amber-500"
  ];

  return (
    <section id="testimonials" className="py-24 px-4 bg-background relative overflow-hidden">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-[10px] font-black uppercase tracking-[0.25em] border border-primary/20 mb-6 font-sans"
          >
            <Star className="w-3 h-3 fill-current" /> Retours & Avis
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tight text-foreground font-heading uppercase py-2 px-4">
            Ils me font <span className="bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text italic px-2"> Confiance</span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full opacity-50 shadow-[0_0_20px_rgba(59,130,246,0.3)] mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed mb-8">
            Découvrez comment j&apos;accompagne les entreprises dans leur transformation digitale avec odoo.
          </p>
        </div>

        <div className="w-full">
          <div className="w-full space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        </div>
      </div>
    </section>
  );
}


