import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BenAmor.Dev - Odoo Techno-Functional Consultant | Solutions ERP Personnalisees',
    short_name: 'BenAmor.Dev',
    description: 'Portfolio de BenAmor, Consultant Odoo Freelance. Plus de 3 ans d experience en developpement, integration et migration ERP Odoo pour PME.',
    start_url: '/',
    display: 'standalone',
    orientation: 'portrait-primary',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    categories: ['business', 'productivity', 'developer'],
    lang: 'fr',
    dir: 'ltr',
    scope: '/',
    icons: [
      {
        src: '/logo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
        purpose: 'any',
      },
      {
        src: '/logo.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
    ],
  }
}











