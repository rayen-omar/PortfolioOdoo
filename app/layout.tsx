import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "BenAmor Rayeen - Développeur Odoo Freelance | Solutions ERP Personnalisées",
  description:
    "Développeur Odoo freelance spécialisé dans les solutions ERP personnalisées. 3+ ans d'expérience en développement Odoo 15, 16, 17. Modules personnalisés, migrations, intégrations.",
  keywords: [
    "Développeur Odoo",
    "Odoo freelance",
    "ERP personnalisé",
    "Développement Odoo",
    "Migration Odoo",
    "Modules Odoo",
    "Tunisie",
    "BenAmor Rayeen",
  ],
  authors: [{ name: "BenAmor Rayeen" }],
  creator: "BenAmor Rayeen",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://rayeen.dev",
    title: "BenAmor Rayeen - Développeur Odoo Freelance",
    description:
      "Développeur Odoo freelance spécialisé dans les solutions ERP personnalisées",
    siteName: "BenAmor Rayeen",
  },
  twitter: {
    card: "summary_large_image",
    title: "BenAmor Rayeen - Développeur Odoo Freelance",
    description:
      "Développeur Odoo freelance spécialisé dans les solutions ERP personnalisées",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
