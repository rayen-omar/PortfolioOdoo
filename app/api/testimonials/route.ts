import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

// Client Supabase côté serveur (avec les clés service pour les opérations admin)
function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

// GET — Lire tous les témoignages approuvés
export async function GET() {
  try {
    const supabase = getSupabase()
    const { data, error } = await supabase
      .from("testimonials")
      .select("id, name, company, project, feedback, created_at")
      .eq("approved", true)
      .order("created_at", { ascending: false })

    if (error) throw error

    return NextResponse.json(data || [])
  } catch (error) {
    console.error("GET testimonials error:", error)
    return NextResponse.json([], { status: 200 })
  }
}

// POST — Soumettre un nouveau témoignage (en attente d'approbation)
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, company, project, feedback, email } = body

    if (!name || !company || !project || !feedback) {
      return NextResponse.json(
        { error: "Champs obligatoires manquants" },
        { status: 400 }
      )
    }

    const supabase = getSupabase()
    const { data, error } = await supabase
      .from("testimonials")
      .insert([
        {
          name: name.trim(),
          company: company.trim(),
          project: project.trim(),
          feedback: feedback.trim(),
          email: email?.trim() || "",
          approved: false, // En attente de validation par Rayeen
        },
      ])
      .select()
      .single()

    if (error) throw error

    return NextResponse.json({ success: true, id: data.id })
  } catch (error) {
    console.error("POST testimonial error:", error)
    return NextResponse.json(
      { error: "Erreur lors de l'enregistrement" },
      { status: 500 }
    )
  }
}
