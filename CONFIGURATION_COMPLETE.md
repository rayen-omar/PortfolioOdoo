# 🚀 Configuration EmailJS - Guide Complet

## ✅ Étape 1 : Service Gmail (DÉJÀ FAIT)
- Service ID: `service_r2mcxde`
- Nom: GmailPortfolio
- ✅ Service créé et connecté

## 📝 Étape 2 : Créer le Template d'Email

1. **Allez dans EmailJS Dashboard** → **Email Templates**
2. Cliquez sur **"Create New Template"**
3. **Nom du template** : `Portfolio Contact Form`
4. **Sujet de l'email** : 
   ```
   Nouveau message de contact - Portfolio
   ```
5. **Contenu de l'email** : Copiez-collez le contenu du fichier `emailjs-template.txt`
6. **Email de destination** : Votre adresse email (ex: benomorr326@gmail.com)
7. **Cliquez sur "Save"**
8. **Notez le Template ID** (ex: `template_xxxxxxx`)

## 🔑 Étape 3 : Obtenir la Public Key

1. Dans EmailJS Dashboard, allez dans **Account** → **General**
2. Trouvez la section **"API Keys"**
3. **Copiez votre Public Key** (ex: `xxxxxxxxxxxxx`)
   - ⚠️ C'est la clé publique, elle peut être utilisée côté client

## 📁 Étape 4 : Créer le fichier .env.local

1. **Créez un fichier `.env.local`** à la racine du projet (même niveau que `package.json`)
2. **Ajoutez ces lignes** (remplacez les valeurs par les vôtres) :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_r2mcxde
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id_ici
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key_ici
```

**Exemple complet** :
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_r2mcxde
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_abc123
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abcdefghijklmnop
```

## 🔄 Étape 5 : Redémarrer le serveur

Après avoir créé le fichier `.env.local`, redémarrez le serveur :

```bash
# Arrêtez le serveur (Ctrl+C)
# Puis relancez-le
npm run dev
```

## ✅ Étape 6 : Tester le formulaire

1. Ouvrez votre site : http://localhost:3000
2. Allez à la section **Contact**
3. Remplissez le formulaire avec vos propres informations
4. Cliquez sur **"Envoyer le message"**
5. Vérifiez votre boîte email - vous devriez recevoir le message !

## 🎯 Variables du Template

Assurez-vous que votre template EmailJS utilise ces variables exactes :

- `{{to_name}}` - Votre nom (BenAmor Rayeen)
- `{{from_name}}` - Nom du client
- `{{from_email}}` - Email du client
- `{{phone}}` - Téléphone du client
- `{{company}}` - Entreprise du client
- `{{project_type}}` - Type de projet
- `{{budget}}` - Budget estimé
- `{{message}}` - Message du client

## 🆘 Dépannage

### Le formulaire ne fonctionne pas ?
1. Vérifiez que `.env.local` existe et contient les bonnes valeurs
2. Vérifiez que le serveur a été redémarré après la création de `.env.local`
3. Ouvrez la console du navigateur (F12) pour voir les erreurs
4. Vérifiez que toutes les variables dans le template EmailJS sont correctes

### L'email n'arrive pas ?
1. Vérifiez votre dossier spam
2. Vérifiez que le service Gmail est bien connecté dans EmailJS
3. Testez avec le bouton "Send test email" dans EmailJS
4. Vérifiez les logs dans EmailJS Dashboard → Logs

## 📊 Vérification finale

Votre configuration est complète quand :
- ✅ Service Gmail créé (service_r2mcxde)
- ✅ Template d'email créé avec toutes les variables
- ✅ Public Key récupérée
- ✅ Fichier `.env.local` créé avec les 3 variables
- ✅ Serveur redémarré
- ✅ Test du formulaire réussi

Bon courage ! 🎉






