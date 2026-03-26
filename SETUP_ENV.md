# 🔧 Configuration du fichier .env.local

## Créer le fichier .env.local

1. **Créez un fichier nommé `.env.local`** à la racine du projet (même niveau que `package.json`)

2. **Ajoutez ce contenu** (remplacez les valeurs par les vôtres) :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_r2mcxde
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id_ici
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key_ici
```

## Comment obtenir les valeurs

### Service ID (déjà connu)
- ✅ `service_r2mcxde` (vous l'avez déjà)

### Template ID
1. Allez dans EmailJS Dashboard → **Email Templates**
2. Créez un nouveau template (voir `emailjs-template.txt` pour le contenu)
3. Copiez le **Template ID** (commence par `template_`)

### Public Key
1. Allez dans EmailJS Dashboard → **Account** → **General**
2. Trouvez la section **"API Keys"**
3. Copiez la **Public Key**

## Exemple complet

Une fois que vous avez toutes les valeurs, votre `.env.local` devrait ressembler à ça :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_r2mcxde
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_abc123xyz
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcdefghijklmnop123456
```

## ⚠️ Important

- Ne partagez jamais votre fichier `.env.local`
- Il est déjà dans `.gitignore` donc il ne sera pas commité
- Redémarrez le serveur après avoir créé/modifié `.env.local`








