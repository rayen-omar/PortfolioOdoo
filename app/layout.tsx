import type { Metadata } from "next";
import { Inter, Outfit, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import type { ReactNode } from "react";
import { CursorEffect } from "@/components/ui/cursor-effect";
import { CursorTrail } from "@/components/ui/cursor-trail";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading" });
const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: "--font-serif" 
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.benamor.tech"),
  title: {
    default:
      "BenAmor | Développeur & Consultant odoo – Expert",
    template: "%s | BenAmor - odoo",
  },
  description:
    "BenAmor, Développeur & Techno-Functional odoo Freelance en Tunisie. Expert en intégration odoo, migration ERP (Sage vers odoo), odoo 18, 19 et développement sur mesure.",
  keywords: [
    "développeur odoo tunisie",
    "consultant odoo tunisie",
    "freelance odoo tunisie",
    "migration erp odoo",
    "intégrateur odoo",
    "odoo developer tunisia",
    "migration sage odoo",
    "odoo 18 tunisie",
    "odoo 19 developer",
    "odoo 19",
    "odoo 18",
    "odoo fonctionnel",
    "odoo technique",
    "odoo agence voyage",
    "odoo cabinet comptable",
    "odoo freelance",
    "integration odoo"
  ],
  authors: [{ name: "BenAmor", url: "https://www.benamor.tech" }],
  creator: "BenAmor",
  publisher: "BenAmor",
  category: "Technology",
  classification: "Développement Logiciel",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.benamor.tech",
    title:
      "BenAmor | Développeur & Consultant odoo – Expert en Tunisie",
    description:
      "Développeur & Consultant odoo Freelance basé à Monastir, Tunisie. Spécialiste intégration, migration ERP, odoo 18/19, dev technique & fonctionnel.",
    siteName: "Benamor.tech",
    images: [
      {
        url: "/photo.png",
        width: 1200,
        height: 630,
        alt: "BenAmor - Développeur & Consultant odoo Freelance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BenAmor | Consultant odoo Expert",
    description:
      "Développeur & Consultant odoo Freelance basé à Monastir, Tunisie. Spécialiste intégration, migration ERP, odoo 18/19.",
    images: ["/photo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.benamor.tech",
  },
  icons: {
    icon: "/logo_b.svg",
    apple: "/logo_b.svg",
  },
  manifest: "/manifest.json",
  other: {
    "theme-color": "#3b82f6",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${outfit.variable} ${playfair.variable}`}>
      <head>
        <link rel="canonical" href="https://www.benamor.tech" />
      </head>
      <body className="font-sans">
        <CursorTrail />
        <CursorEffect />
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
        <Analytics />
      </body>
    </html>
  );
}



