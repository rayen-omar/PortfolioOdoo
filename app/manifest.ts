import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Rayeen.Dev - Odoo Techno-Functional Consultant | Solutions ERP Personnalisees',
    short_name: 'Rayeen.Dev',
    description: 'Odoo Techno-Functional Consultant specialise dans les solutions ERP personnalisees. 3+ ans d\'experience en developpement Odoo 15, 16, 17.',
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
        src: '/imageicon1.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/imageicon1.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/imageicon1.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/imageicon1.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}










