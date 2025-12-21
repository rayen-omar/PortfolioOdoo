# Configuration EmailJS

Ce guide vous explique comment configurer EmailJS pour envoyer des emails depuis le formulaire de contact.

## 📋 Étapes de configuration

### 1. Créer un compte EmailJS

1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit (100 emails/mois gratuits)
3. Connectez-vous à votre compte

### 2. Configurer un service email

1. Dans le dashboard, allez dans **Email Services**
2. Cliquez sur **Add New Service**
3. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte email
5. **Notez le Service ID** (ex: `service_xxxxxxx`)

### 3. Créer un template d'email

1. Allez dans **Email Templates**
2. Cliquez sur **Create New Template**
3. Utilisez ce template de base :

```
Sujet: Nouveau message de contact - Portfolio

Bonjour {{to_name}},

Vous avez reçu un nouveau message de contact :

Nom: {{from_name}}
Email: {{from_email}}
Téléphone: {{phone}}
Entreprise: {{company}}
Type de projet: {{project_type}}
Budget: {{budget}}

Message:
{{message}}

---
Ce message a été envoyé depuis le formulaire de contact de votre portfolio.
```

4. **Notez le Template ID** (ex: `template_xxxxxxx`)

### 4. Obtenir votre Public Key

1. Allez dans **Account** > **General**
2. Trouvez votre **Public Key**
3. **Notez la Public Key** (ex: `xxxxxxxxxxxxx`)

### 5. Configurer les variables d'environnement

1. Créez un fichier `.env.local` à la racine du projet
2. Ajoutez les variables suivantes :

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=votre_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=votre_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=votre_public_key
```

3. Remplacez les valeurs par celles que vous avez notées
4. **Important** : Ne commitez jamais le fichier `.env.local` (il est déjà dans `.gitignore`)

### 6. Redémarrer le serveur

Après avoir configuré les variables d'environnement, redémarrez le serveur de développement :

```bash
npm run dev
```

## ✅ Test

1. Remplissez le formulaire de contact sur votre site
2. Soumettez le formulaire
3. Vérifiez votre boîte email - vous devriez recevoir le message

## 🔒 Sécurité

- La Public Key d'EmailJS est publique et peut être utilisée côté client
- EmailJS limite automatiquement le nombre d'emails pour éviter les abus
- Pour plus de sécurité, vous pouvez configurer des restrictions dans le dashboard EmailJS

## 📚 Documentation

- [Documentation EmailJS](https://www.emailjs.com/docs/)
- [Guide d'intégration React](https://www.emailjs.com/docs/examples/reactjs/)

## 🆘 Dépannage

Si vous rencontrez des erreurs :

1. Vérifiez que toutes les variables d'environnement sont correctement configurées
2. Vérifiez que les IDs (Service ID, Template ID) sont corrects
3. Vérifiez que votre template utilise les bonnes variables ({{from_name}}, {{from_email}}, etc.)
4. Consultez la console du navigateur pour voir les erreurs détaillées







