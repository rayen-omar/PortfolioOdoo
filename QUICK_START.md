# Guide de démarrage rapide

## 🚀 Installation et lancement

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir http://localhost:3000 dans votre navigateur
```

## ✏️ Personnalisation rapide

### 1. Modifier vos informations personnelles

**Nom et titre** : `components/sections/hero.tsx`
```tsx
// Ligne ~15-20
<h1>Transformez votre entreprise...</h1>
```

**Contact** : `components/sections/contact.tsx`
```tsx
// Ligne ~80-100
contact@rayen.dev
+216 XX XXX XXX
```

**Réseaux sociaux** : `components/layout/footer.tsx`
```tsx
// Ligne ~10-30
const socialLinks = [...]
```

### 2. Ajouter vos projets

**Modifier les projets** : `components/sections/projects.tsx`
```tsx
// Ligne ~10-60
const projects = [
  {
    title: "Votre Projet",
    description: "...",
    // ...
  }
]
```

### 3. Personnaliser les couleurs

**Couleurs principales** : `app/globals.css`
```css
:root {
  --primary: 221.2 83.2% 53.3%;  /* Changez cette valeur */
}
```

### 4. Configurer le formulaire de contact

**Option 1 : EmailJS (Gratuit)**
1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Créez un service email
3. Créez un template
4. Ajoutez les clés dans `.env.local`

**Option 2 : API Route Next.js**
Créez `app/api/contact/route.ts` et modifiez `components/sections/contact.tsx`

### 5. Ajouter vos images

Placez vos images dans `public/images/` :
- `travelpro.jpg` (pour le projet TravelPro)
- `nexprint.jpg` (pour le projet Nexprint)
- `icon-192.png` et `icon-512.png` (pour PWA)

## 📝 Checklist avant déploiement

- [ ] Modifier toutes les informations personnelles
- [ ] Ajouter vos vraies images de projets
- [ ] Configurer le formulaire de contact
- [ ] Mettre à jour les liens sociaux
- [ ] Vérifier les métadonnées SEO dans `app/layout.tsx`
- [ ] Tester le formulaire de contact
- [ ] Tester sur mobile et desktop
- [ ] Vérifier les performances (Lighthouse)

## 🎯 Prochaines étapes

1. **Analytics** : Ajoutez Google Analytics ou Plausible
2. **Blog** : Créez une section blog avec Sanity CMS
3. **Témoignages** : Ajoutez une section témoignages clients
4. **CV** : Ajoutez un fichier PDF de votre CV dans `public/cv.pdf`
5. **Dark mode** : Activez le dark mode si souhaité

## 🐛 Problèmes courants

**Erreur : Module not found**
```bash
rm -rf node_modules .next
npm install
```

**Styles ne s'appliquent pas**
Vérifiez que Tailwind est bien configuré dans `tailwind.config.ts`

**Formulaire ne fonctionne pas**
Vérifiez les variables d'environnement dans `.env.local`

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn/ui Components](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)

---

Bon développement ! 🚀







