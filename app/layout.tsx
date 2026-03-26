import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rayeen.dev"),
  title: {
    default:
      "BenAmor Rayeen - Odoo Techno-Functional Consultant | Solutions ERP Personnalisees",
    template: "%s | BenAmor Rayeen - Odoo Techno-Functional Consultant",
  },
  description:
    "Odoo Techno-Functional Consultant specialise dans les solutions ERP personnalisees. 3+ ans d'experience en developpement Odoo 15, 16, 17, 18, 19. Modules personnalises, migrations et integrations en Tunisie.",
  keywords: [
    "Odoo Techno-Functional Consultant",
    "Consultant Odoo",
    "ERP personnalisé",
    "Développement Odoo",
    "Migration Odoo",
    "Modules Odoo",
    "Odoo 15",
    "Odoo 16",
    "Odoo 17",
    "Odoo 18",
    "Odoo 19",
    "Développeur Python",
    "Python",
    "PostgreSQL",
    "Développement PostgreSQL",
    "ERP Tunisie",
    "Solutions ERP",
    "Intégration Odoo",
    "Personnalisation Odoo",
    "Formation Odoo",
    "Support Odoo",
    "Développement ERP",
    "Système ERP",
    "Tunisie",
    "BenAmor Rayeen",
    "Rayeen Dev",
    "Consultant Odoo",
    "Odoo Techno-Functional Consultant",
    "Développeur ERP freelance",
    "Customisation Odoo",
    "Développement sur mesure",
    "Automatisation processus",
    "Business Intelligence",
    "Reporting Odoo",
    "E-commerce Odoo",
    "CRM Odoo",
    "Gestion de projet Odoo",
    "Développement backend",
    "Framework Odoo",
    "JavaScript",
    "JS",
    "XML",
    "QWeb",
    "API REST",
    "API Odoo",
    "Intégration API",
    "Développement web",
    "Freelance développeur",
    "Développeur indépendant",
    "Programmeur Odoo",
    "Spécialiste Odoo",
    "Développement modules personnalisés",
    "Optimisation Odoo",
    "Performance Odoo",
    "Sécurité Odoo",
    "Déploiement Odoo",
    "Hébergement Odoo",
    "Maintenance Odoo",
    "Upgrade Odoo",
    "Migration données",
    "Import données",
    "Export données",
    "Workflow Odoo",
    "Automatisation workflow",
    "Point de vente POS",
    "Gestion stock",
    "Comptabilité Odoo",
    "Facturation Odoo",
    "Gestion commerciale",
    "Gestion RH",
    "Paie Odoo",
    "Fiscalité Tunisie",
    "Développeur Tunisie",
    "Freelance Tunisie",
  ],
  authors: [{ name: "BenAmor Rayeen", url: "https://rayeen.dev" }],
  creator: "BenAmor Rayeen",
  publisher: "BenAmor Rayeen",
  category: "Technology",
  classification: "Développement Logiciel",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://rayeen.dev",
    title:
      "BenAmor Rayeen - Odoo Techno-Functional Consultant | Solutions ERP Personnalisees",
    description:
      "Odoo Techno-Functional Consultant specialise dans les solutions ERP personnalisees. 3+ ans d'experience en developpement Odoo 15, 16, 17, 18, 19. Modules personnalises, migrations, integrations.",
    siteName: "Rayeen.Dev",
    images: [
      {
        url: "/photo.png",
        width: 1200,
        height: 630,
        alt: "BenAmor Rayeen - Odoo Techno-Functional Consultant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BenAmor Rayeen - Odoo Techno-Functional Consultant",
    description:
      "Odoo Techno-Functional Consultant specialise dans les solutions ERP personnalisees. 3+ ans d'experience en developpement Odoo 15, 16, 17, 18, 19.",
    images: ["/photo.png"],
    creator: "@rayeen_dev",
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
    canonical: "https://rayeen.dev",
  },
  icons: {
    icon: "/icon-192.png",
    apple: "/icon-192.png",
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
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
        <StructuredData />
      </body>
    </html>
  );
}

// Composant pour les données structurées JSON-LD
function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "BenAmor Rayeen",
    jobTitle: "Odoo Techno-Functional Consultant",
    description:
      "Odoo Techno-Functional Consultant specialise dans les solutions ERP personnalisees avec 3+ ans d'experience",
    url: "https://rayeen.dev",
    image: "https://rayeen.dev/photo.png",
    sameAs: [
      // Ajoutez vos liens sociaux ici
      // "https://linkedin.com/in/rayeen",
      // "https://github.com/rayeen",
    ],
    knowsAbout: [
      "Odoo",
      "Odoo 15",
      "Odoo 16",
      "Odoo 17",
      "Odoo 18",
      "Odoo 19",
      "Python",
      "PostgreSQL",
      "JavaScript",
      "XML",
      "QWeb",
      "API REST",
      "ERP",
      "CRM",
      "E-commerce",
      "Business Intelligence",
      "Développement de modules personnalisés",
      "Migration Odoo",
      "Intégration ERP",
      "Automatisation de processus",
      "Gestion de projet",
      "Reporting",
      "Point de vente POS",
      "Gestion stock",
      "Comptabilité",
      "Facturation",
      "Gestion RH",
      "Paie",
      "Fiscalité",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "TN",
      addressLocality: "Tunisie",
    },
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Rayeen.Dev - Services Odoo",
    description:
      "Services de développement Odoo personnalisés, migrations et intégrations ERP",
    url: "https://rayeen.dev",
    image: "https://rayeen.dev/photo.png",
    provider: {
      "@type": "Person",
      name: "BenAmor Rayeen",
    },
    areaServed: {
      "@type": "Country",
      name: "Tunisie",
    },
    serviceType: [
      "Développement de modules Odoo personnalisés",
      "Migration Odoo",
      "Personnalisation et configuration Odoo",
      "Formation et support Odoo",
      "Déploiement et hébergement Odoo",
    ],
    priceRange: "$$",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Rayeen.Dev",
    url: "https://rayeen.dev",
    description: "Portfolio de BenAmor Rayeen - Odoo Techno-Functional Consultant",
    author: {
      "@type": "Person",
      name: "BenAmor Rayeen",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://rayeen.dev/?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
