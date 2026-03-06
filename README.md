# Site Ensemble Production

Ce site est hébergé automatiquement via **GitHub Pages**.

Adresse du site :  
https://ensembleproduction.com

Le principe est simple :

1. On modifie les fichiers du site
2. On envoie les modifications sur GitHub
3. GitHub met automatiquement le site à jour

Le déploiement prend environ **30 à 60 secondes**.

---

# Installation (à faire une seule fois)

## 1. Installer Git

Télécharger Git :

https://git-scm.com/downloads

Installer avec les options par défaut.

---

## 2. Télécharger le site sur votre ordinateur

Ouvrir **Git Bash** ou **Terminal**, puis taper :

```bash
git clone https://github.com/OwOthmane/ensembleprod.git
```

Puis entrer dans le dossier :

```bash
cd ensembleprod
```

---

# Modifier le site

Les fichiers principaux sont :

- `index.html` → page d'accueil
- `css/` → styles du site
- `images/` → images
- `js/` → scripts JavaScript

Vous pouvez modifier ces fichiers avec :

- VS Code
- Notepad++
- ou même le bloc-notes

---

# Mettre à jour le site

Une fois vos modifications faites, ouvrir un terminal dans le dossier du site et exécuter :

```bash
git add .
git commit -m "mise à jour du site"
git push
```

Après cela :

1. GitHub reçoit les modifications
2. GitHub reconstruit le site
3. Le site est automatiquement mis à jour

Cela prend environ **1 minute**.

---

# Vérifier que le site est à jour

Attendre environ **1 minute**, puis ouvrir :

https://ensembleproduction.com

Si vous ne voyez pas les changements :

- appuyer sur **Ctrl + F5**
- ou ouvrir le site en navigation privée

---

# Donner l'accès à quelqu'un

Pour permettre à quelqu'un de modifier le site :

1. Aller sur le repository GitHub
2. Cliquer sur **Settings**
3. Cliquer sur **Collaborators**
4. Cliquer sur **Add people**
5. Donner l'accès **Write**

La personne pourra ensuite modifier le site.

---

# Structure du projet

Le site est un **site statique** (HTML / CSS / JavaScript).

Structure principale :

```
index.html
css/
images/
js/
```

Il n'y a **pas de serveur** et **pas de base de données**.

---

# Domaine

Le site utilise le domaine :

```
ensembleproduction.com
```

Le domaine est configuré via **Cloudflare** et pointe vers **GitHub Pages**.

Normalement, il n'y a rien à modifier dans cette configuration.

---

# Problèmes courants

## Le site ne se met pas à jour

Attendre 1 minute puis faire :

```
Ctrl + F5
```

---

## Erreur lors du push

Taper :

```bash
git pull origin main
git push
```

---

# Contact

En cas de problème, contacter l'administrateur du dépôt GitHub.