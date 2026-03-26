import { NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

// PATCH — Approuver ou rejeter un témoignage
export async function PATCH(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  // Vérification du mot de passe admin
  const adminKey = req.headers.get("x-admin-key")
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin_rayeen_secret_2024"

  if (adminKey !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
  }

  try {
    const body = await req.json()
    const { approved } = body

    const supabase = getSupabase()
    const { error } = await supabase
      .from("testimonials")
      .update({ approved })
      .eq("id", params.id)

    if (error) throw error

    return NextResponse.json({
      success: true,
      message: approved ? "Témoignage approuvé et publié ✅" : "Témoignage rejeté ❌",
    })
  } catch (error) {
    console.error("PATCH testimonial error:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}

// DELETE — Supprimer un témoignage
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const adminKey = req.headers.get("x-admin-key")
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin_rayeen_secret_2024"

  if (adminKey !== ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 })
  }

  try {
    const supabase = getSupabase()
    const { error } = await supabase
      .from("testimonials")
      .delete()
      .eq("id", params.id)

    if (error) throw error

    return NextResponse.json({ success: true, message: "Témoignage supprimé" })
  } catch (error) {
    console.error("DELETE testimonial error:", error)
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
