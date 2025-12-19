# Portfolio Odoo Developer - Rayen

Portfolio professionnel moderne pour développeur Odoo freelance. Site web responsive et optimisé pour convertir les visiteurs en clients potentiels.

## 🚀 Technologies

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Shadcn/ui
- **Animations:** Framer Motion
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React

## ✨ Fonctionnalités

- ✅ Design moderne et responsive (mobile-first)
- ✅ Animations fluides avec Framer Motion
- ✅ Formulaire de contact avec validation
- ✅ SEO optimisé (meta tags, sitemap, robots.txt)
- ✅ Accessibilité (WCAG AA)
- ✅ Performance optimisée
- ✅ Dark mode ready (configuration prête)
- ✅ Sections complètes : Hero, Services, Projets, Compétences, Processus, Contact

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Ou avec yarn
yarn install
```

## 🛠️ Développement

```bash
# Lancer le serveur de développement
npm run dev

# Ou avec yarn
yarn dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 🏗️ Build

```bash
# Créer une build de production
npm run build

# Lancer le serveur de production
npm start
```

## 📝 Configuration

### Variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```env
# Email Configuration (pour le formulaire de contact)
# Option 1: EmailJS
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Option 2: Resend
RESEND_API_KEY=your_resend_api_key

# Analytics (optionnel)
NEXT_PUBLIC_GA_ID=your_google_analytics_id

# Site URL
NEXT_PUBLIC_SITE_URL=https://rayen.dev
```

### Personnalisation

1. **Informations personnelles** : Modifiez les données dans les composants de sections
2. **Couleurs** : Personnalisez les couleurs dans `app/globals.css` (variables CSS)
3. **Métadonnées SEO** : Mettez à jour `app/layout.tsx` avec vos informations
4. **Images** : Ajoutez vos images dans `public/images/`

## 🚀 Déploiement

### Vercel (Recommandé)

1. Poussez votre code sur GitHub
2. Importez le projet sur [Vercel](https://vercel.com)
3. Configurez les variables d'environnement
4. Déployez !

### Netlify

1. Poussez votre code sur GitHub
2. Importez le projet sur [Netlify](https://netlify.com)
3. Configurez les variables d'environnement
4. Déployez !

### Autres plateformes

Le projet est compatible avec tout hébergeur supportant Next.js (Node.js 18+).

## 📁 Structure du projet

```
portfolio-odoo/
├── app/
│   ├── layout.tsx          # Layout principal avec Header/Footer
│   ├── page.tsx            # Page d'accueil
│   ├── globals.css         # Styles globaux
│   ├── sitemap.ts          # Sitemap pour SEO
│   └── manifest.ts         # PWA manifest
├── components/
│   ├── layout/             # Header, Footer
│   ├── sections/           # Sections de la page d'accueil
│   └── ui/                 # Composants UI (Shadcn)
├── lib/
│   └── utils.ts            # Utilitaires
├── hooks/
│   └── use-toast.ts        # Hook pour les notifications
├── public/
│   ├── images/             # Images du portfolio
│   └── robots.txt          # Configuration robots
└── package.json
```

## 🎨 Personnalisation des couleurs

Les couleurs sont définies dans `app/globals.css` via des variables CSS. Modifiez les valeurs HSL pour changer le thème :

```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* Bleu principal */
  --secondary: 210 40% 96.1%;    /* Couleur secondaire */
  /* ... */
}
```

## 📧 Configuration du formulaire de contact

Le formulaire de contact nécessite une configuration pour envoyer les emails. Options :

1. **EmailJS** (gratuit jusqu'à 200 emails/mois)
2. **Resend** (gratuit jusqu'à 3000 emails/mois)
3. **API Route Next.js** avec votre service email

Modifiez `components/sections/contact.tsx` pour intégrer votre service.

## 🔍 SEO

Le site est optimisé pour le SEO avec :
- Meta tags complets
- Open Graph tags
- Sitemap XML
- Robots.txt
- Structure sémantique HTML

## 📱 Responsive Design

Le site est entièrement responsive et optimisé pour :
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

## 🐛 Dépannage

### Erreurs de build

```bash
# Nettoyer et réinstaller
rm -rf node_modules .next
npm install
npm run build
```

### Problèmes de styles

Vérifiez que Tailwind CSS est bien configuré dans `tailwind.config.ts`.

## 📄 Licence

Ce projet est privé et destiné à un usage personnel.

## 👤 Auteur

**Rayen** - Développeur Odoo Freelance
- Portfolio: [rayen.dev](https://rayen.dev)
- Email: contact@rayen.dev

---

Fait avec ❤️ en utilisant Next.js et TypeScript

