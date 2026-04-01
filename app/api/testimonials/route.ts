import { NextRequest, NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

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

// GET: return approved testimonials (front) or all for admin
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const isAdmin = searchParams.get("all") === "true";

    let query = supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: false });

    if (!isAdmin) {
      query = query.eq("approved", true);
    }

    const { data, error } = await query;

    if (error) throw error;

    return NextResponse.json(data || []);
  } catch (error) {
    console.error("GET testimonials error:", error);
    return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
  }
}

// POST: receive form data
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { company, name, rating, text, photo, email, project } = body;

    if (!company || !text) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const { data, error } = await supabase
      .from("testimonials")
      .insert([
        {
          company,
          name: name || "",
          rating: rating || 5,
          text,
          photo_url: photo || "",
          email: email || "",
          project: project || "",
          approved: false,
        },
      ])
      .select();

    if (error) throw error;

    return NextResponse.json(data?.[0]);
  } catch (error) {
    console.error("POST testimonial error:", error);
    return NextResponse.json({ error: "Failed to save" }, { status: 500 });
  }
}

// PATCH: approve testimonial
export async function PATCH(req: NextRequest) {
  try {
    const { id, approved } = await req.json();

    const { data, error } = await supabase
      .from("testimonials")
      .update({ approved })
      .eq("id", id)
      .select();

    if (error) throw error;

    return NextResponse.json(data?.[0]);
  } catch (error) {
    console.error("PATCH testimonial error:", error);
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

// DELETE: remove testimonial
export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    
    if (!id) {
        // Fallback for body-based delete if searchParams empty
        const body = await req.json().catch(() => ({}));
        const bodyId = body.id;
        if (!bodyId) return NextResponse.json({ error: "ID missing" }, { status: 400 });
        
        const { error } = await supabase.from("testimonials").delete().eq("id", bodyId);
        if (error) throw error;
        return NextResponse.json({ success: true });
    }

    const { error } = await supabase
      .from("testimonials")
      .delete()
      .eq("id", id);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE testimonial error:", error);
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
