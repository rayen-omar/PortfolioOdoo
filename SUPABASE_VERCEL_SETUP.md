# 🚀 Guide déploiement Vercel + Supabase

## Pourquoi Supabase ?

Sur Vercel, le système de fichiers est **en lecture seule**.  
`data/testimonials.json` ne peut PAS être modifié en production.  
**Supabase** = base de données PostgreSQL gratuite qui fonctionne parfaitement avec Vercel.

---

## ✅ Étape 1 — Créer le projet Supabase (2 minutes)

1. Allez sur **[https://supabase.com](https://supabase.com)**
2. Cliquez **"Start your project"** → Connectez avec GitHub
3. Cliquez **"New project"**
4. Remplissez :
   - **Name** : `portfolio-rayeen`
   - **Database Password** : (choisissez un mot de passe fort, notez-le)
   - **Region** : `West EU (Ireland)` (le plus proche)
5. Cliquez **"Create new project"** → Attendez ~1 minute

---

## ✅ Étape 2 — Créer la table `testimonials`

1. Dans votre projet Supabase, allez dans **"SQL Editor"** (icône base de données à gauche)
2. Cliquez **"New query"**
3. Copiez-collez ce code SQL et cliquez **"Run"** :

```sql
-- Créer la table des témoignages
CREATE TABLE testimonials (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  project TEXT NOT NULL,
  feedback TEXT NOT NULL,
  email TEXT DEFAULT '',
  approved BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Autoriser la lecture publique des témoignages approuvés
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Lecture publique des témoignages approuvés"
  ON testimonials FOR SELECT
  USING (approved = true);

CREATE POLICY "Insertion publique"
  ON testimonials FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Mise à jour admin"
  ON testimonials FOR UPDATE
  USING (true);

CREATE POLICY "Suppression admin"
  ON testimonials FOR DELETE
  USING (true);
```

---

## ✅ Étape 3 — Récupérer les clés API Supabase

1. Dans votre projet Supabase, allez dans **Settings** (icône engrenage) → **API**
2. Vous verrez :
   - **Project URL** → c'est votre `NEXT_PUBLIC_SUPABASE_URL`
   - **anon public** → c'est votre `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## ✅ Étape 4 — Mettre à jour `.env.local`

Ouvrez `.env.local` et remplacez :

```env
NEXT_PUBLIC_SUPABASE_URL=https://VOTRE_PROJECT_ID.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=VOTRE_ANON_KEY_ICI
```

Par vos vraies valeurs, exemple :

```env
NEXT_PUBLIC_SUPABASE_URL=https://abcdefghijk.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## ✅ Étape 5 — Déployer sur Vercel

1. Allez sur **[https://vercel.com](https://vercel.com)** → connectez avec GitHub
2. Importez votre repo GitHub
3. Dans **"Environment Variables"**, ajoutez TOUTES les variables de `.env.local` :
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `ADMIN_PASSWORD`
4. Cliquez **"Deploy"** ✅

---

## 🔐 Comment approuver un témoignage reçu

### Option 1 — Via Supabase Dashboard (le plus simple)
1. Allez dans votre projet Supabase → **Table Editor** → `testimonials`
2. Trouvez le témoignage avec `approved = false`
3. Cliquez sur la cellule `approved` → changez en `true`
4. Le témoignage **apparaît immédiatement** sur le portfolio !

### Option 2 — Via API (PowerShell)
```powershell
Invoke-RestMethod -Uri "https://votre-site.vercel.app/api/testimonials/ID_ICI" `
  -Method PATCH `
  -Headers @{"x-admin-key"="admin_rayeen_secret_2024"; "Content-Type"="application/json"} `
  -Body '{"approved": true}'
```

---

## 📧 Code d'accès à partager avec vos clients

Le code actuel est : **`rayeen2024client`**

Envoyez cet email à vos clients après chaque projet :

> *Bonjour [Nom], je serais ravi d'avoir votre avis sur notre collaboration !*
> *Vous pouvez laisser un témoignage sur mon portfolio : https://votre-site.vercel.app/#testimonials*
> *Utilisez ce code d'accès : **rayeen2024client***

Pour changer le code : modifiez la ligne 27 de `components/sections/testimonials.tsx`

---

## 🆓 Limites du plan gratuit Supabase

| Ressource | Limite gratuite |
|-----------|----------------|
| Stockage | 500 MB |
| Lignes | Illimité |
| Requêtes/mois | 5 millions |
| Projets actifs | 2 |

> Largement suffisant pour un portfolio ! 🎉
