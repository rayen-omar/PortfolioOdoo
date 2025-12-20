# 🚀 Guide de démarrage du serveur

## Étape 1 : Arrêter tous les processus Node.js existants

```powershell
# Tuer tous les processus Node.js
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force
```

## Étape 2 : Vérifier que le port 3000 est libre

```powershell
# Vérifier le port 3000
netstat -ano | findstr :3000
```

Si un processus utilise le port 3000, notez le PID et tuez-le :
```powershell
Stop-Process -Id [PID] -Force
```

## Étape 3 : Démarrer le serveur

```powershell
cd C:\Users\benom\Desktop\Projects\PortfolioOdoo
npm run dev
```

## Étape 4 : Attendre le message de confirmation

Vous devriez voir :
```
▲ Next.js 14.2.0
- Local:        http://localhost:3000
- Ready in Xs
```

## Étape 5 : Ouvrir dans le navigateur

1. Ouvrez votre navigateur
2. Allez sur : `http://localhost:3000`
3. La page devrait se charger

## ⚠️ Si la page ne se charge toujours pas

1. **Vérifiez la console du navigateur** (F12 → Console)
   - Cherchez les erreurs en rouge
   - Ignorez les erreurs "Hive" ou "Honey" (extensions)

2. **Vérifiez le terminal**
   - Y a-t-il des erreurs de compilation ?
   - Le serveur est-il bien démarré ?

3. **Videz le cache du navigateur**
   - Ctrl + Shift + Delete
   - Ou ouvrez en navigation privée (Ctrl + Shift + N)

4. **Vérifiez le fichier .env.local**
   - Il doit être à la racine du projet
   - Il doit contenir les 3 variables EmailJS

## ✅ Vérifications finales

- [ ] Le serveur est démarré (message "Ready")
- [ ] Pas d'erreurs dans le terminal
- [ ] Le navigateur affiche la page
- [ ] Le formulaire de contact est visible
- [ ] Pas d'erreurs dans la console du navigateur (sauf Hive/Honey)



