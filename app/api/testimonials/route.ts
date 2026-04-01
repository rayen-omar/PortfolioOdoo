import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "testimonials.json");

// Define Testimonial type
interface Testimonial {
  id: string;
  company: string;
  name: string;
  rating: number;
  text: string;
  photo?: string;
  email?: string;
  project?: string;
  approved: boolean;
  createdAt: string;
}

// GET: return approved testimonials only (by default) or all for admin
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const isAdmin = searchParams.get("all") === "true";

    if (!fs.existsSync(DATA_PATH)) {
      return NextResponse.json([]);
    }
    const fileData = fs.readFileSync(DATA_PATH, "utf8");
    const testimonials: Testimonial[] = JSON.parse(fileData);

    const filtered = isAdmin ? testimonials : testimonials.filter((t) => t.approved);
    return NextResponse.json(filtered);
  } catch (error) {
    console.error("GET testimonials error:", error);
    return NextResponse.json({ error: "Failed to fetch testimonials" }, { status: 500 });
  }
}

// POST: receive form data, save to data/testimonials.json as pending
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { company, name, rating, text, photo, email, project } = body;

    if (!company || !text) {
      return NextResponse.json(
        { error: "Company and Text are required." },
        { status: 400 }
      );
    }

    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      company,
      name: name || "",
      rating: rating || 5,
      text,
      photo: photo || "",
      email: email || "",
      project: project || "",
      approved: false,
      createdAt: new Date().toISOString(),
    };

    let testimonials: Testimonial[] = [];
    if (fs.existsSync(DATA_PATH)) {
      const fileData = fs.readFileSync(DATA_PATH, "utf8");
      testimonials = JSON.parse(fileData);
    }

    testimonials.push(newTestimonial);
    fs.writeFileSync(DATA_PATH, JSON.stringify(testimonials, null, 2));

    return NextResponse.json({ success: true, message: "Testimonial submitted for approval." });
  } catch (error) {
    console.error("POST testimonial error:", error);
    return NextResponse.json({ error: "Failed to save testimonial" }, { status: 500 });
  }
}

// PATCH/DELETE for admin functionality (optional but helpful for the admin page)
export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, approved } = body;

    const fileData = fs.readFileSync(DATA_PATH, "utf8");
    const testimonials: Testimonial[] = JSON.parse(fileData);
    const updated = testimonials.map((t) =>
      t.id === id ? { ...t, approved } : t
    );

    fs.writeFileSync(DATA_PATH, JSON.stringify(updated, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const fileData = fs.readFileSync(DATA_PATH, "utf8");
    const testimonials: Testimonial[] = JSON.parse(fileData);
    const filtered = testimonials.filter((t) => t.id !== id);

    fs.writeFileSync(DATA_PATH, JSON.stringify(filtered, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete" }, { status: 500 });
  }
}
