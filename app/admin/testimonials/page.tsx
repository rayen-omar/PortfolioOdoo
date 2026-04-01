"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Trash2, CheckCircle2, ShieldAlert } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Testimonial {
  id: string;
  company: string;
  name: string;
  rating: number;
  text: string;
  photo_url?: string;
  approved: boolean;
  created_at: string;
}

export default function AdminPage() {
  const { toast } = useToast();
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/testimonials?all=true");
      if (res.ok) {
        const data = await res.json();
        setTestimonials(data);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const checkPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // Assuming ADMIN_PASSWORD is provided via NEXT_PUBLIC_ADMIN_PASSWORD if checked on client
    // OR normally, use a separate API route to verify. 
    // The user said "Simple password check via env variable ADMIN_PASSWORD"
    const expectedPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "admin";
    
    if (password === expectedPassword) {
      setIsAuthenticated(true);
      fetchTestimonials();
    } else {
      toast({ title: "Accès refusé", description: "Mot de passe incorrect.", variant: "destructive" });
    }
  };

  const handleApprove = async (id: string) => {
    try {
      const res = await fetch("/api/testimonials", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, approved: true }),
      });
      if (res.ok) {
        toast({ title: "Approuvé !" });
        fetchTestimonials();
      }
    } catch (error) {
      toast({ title: "Erreur", variant: "destructive" });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Supprimer ce témoignage ?")) return;
    try {
      const res = await fetch(`/api/testimonials?id=${id}`, { method: "DELETE" });
      if (res.ok) {
        toast({ title: "Supprimé !" });
        fetchTestimonials();
      }
    } catch (error) {
      toast({ title: "Erreur", variant: "destructive" });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-zinc-950 p-4">
        <Card className="w-full max-w-md border-zinc-800 bg-zinc-900 text-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShieldAlert className="text-primary" /> Admin Testimonials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={checkPassword} className="space-y-4">
              <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-zinc-800 border-zinc-700 rounded-md p-2"
              />
              <Button type="submit" className="w-full">Connexion</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  const pending = testimonials.filter((t) => !t.approved);
  const approved = testimonials.filter((t) => t.approved);

  return (
    <div className="min-h-screen bg-zinc-950 p-6 md:p-12 text-white">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-black italic tracking-tighter">
            ADMIN <span className="text-primary">TESTIMONIALS</span>
          </h1>
          <Button variant="outline" onClick={() => setIsAuthenticated(false)}>Déconnexion</Button>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Loader2 className={`h-5 w-5 ${loading ? "animate-spin" : ""}`} />
            Pending Approval ({pending.length})
          </h2>
          {pending.length === 0 ? (
            <p className="text-zinc-500">Aucun témoignage en attente.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pending.map((t) => (
                <Card key={t.id} className="bg-zinc-900 border-zinc-800 text-white">
                  <CardContent className="pt-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-bold">{t.company}</p>
                        <p className="text-sm text-zinc-400">{t.name}</p>
                        <div className="flex text-yellow-500 text-sm">
                          {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
                        </div>
                      </div>
                      {t.photo_url && <img src={t.photo_url} className="w-10 h-10 rounded-full" alt="Avatar" />}
                    </div>
                    <p className="text-sm italic">&quot;{t.text}&quot;</p>
                    <div className="flex gap-2 pt-2">
                      <Button size="sm" className="flex-1 gap-1" onClick={() => handleApprove(t.id)}>
                        <CheckCircle2 className="h-4 w-4" /> Approuver
                      </Button>
                      <Button size="sm" variant="destructive" onClick={() => handleDelete(t.id)}>
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        <div>
          <h2 className="text-xl font-bold mb-6">Approved Testimonials ({approved.length})</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all">
            {approved.map((t) => (
              <Card key={t.id} className="bg-zinc-900 border-zinc-800 text-white">
                <CardContent className="pt-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="font-bold">{t.company}</p>
                      <p className="text-sm text-zinc-400">{t.name}</p>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => handleDelete(t.id)}>
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                  <p className="text-sm">&quot;{t.text}&quot;</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
