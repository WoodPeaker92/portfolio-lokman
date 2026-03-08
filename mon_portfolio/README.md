# Portfolio – Lokman HIMRI | BTS SIO SISR

Portfolio web professionnel pour l'épreuve E5 du BTS SIO option SISR.

## 📁 Structure des fichiers

```
mon_portfolio/
├── index.html                  ← PAGE PRINCIPALE (ouvrir dans le navigateur)
├── assets/
│   ├── css/
│   │   ├── style.css           ← Styles principaux (dark theme, layout, composants)
│   │   ├── animations.css      ← Animations CSS (typed cursor, stagger, etc.)
│   │   └── print.css           ← Styles d'impression
│   └── js/
│       └── main.js             ← JavaScript (navigation, accordéons, animations)
└── README.md                   ← Ce fichier
```

## 🚀 Comment l'utiliser

### Ouvrir localement
Double-cliquer sur `index.html` — le portfolio s'ouvre dans votre navigateur.
Aucune installation requise, aucun serveur nécessaire.

### Mettre en ligne (optionnel)
- **GitHub Pages** : créer un dépôt public, uploader les fichiers, activer Pages.
- **Netlify** : glisser-déposer le dossier sur netlify.com/drop.
- **Hébergement mutualisé** : uploader via FTP dans le répertoire public.

## ✏️ Personnalisation

### Modifier les textes
Ouvrir `index.html` dans un éditeur (VS Code, Notepad++, etc.) et modifier
directement le contenu HTML. Les sections sont clairement commentées.

### Modifier les couleurs
Dans `assets/css/style.css`, section `:root`, modifier les variables CSS :
```css
--cyan:   #38bdf8;   /* Couleur principale */
--blue:   #3b82f6;   /* Couleur secondaire */
--bg:     #080c14;   /* Fond principal */
```

### Ajouter une photo
Remplacer le bloc `.avatar` dans le hero card par une balise `<img>` :
```html
<img src="assets/img/photo.jpg" alt="Lokman HIMRI" style="width:56px;height:56px;border-radius:12px;object-fit:cover;">
```

## 🎯 Sections du portfolio

1. **Hero** – Identité, badge BTS SIO SISR, carte de profil
2. **Profil** – Présentation personnelle, certifications, info-cards
3. **Stages** – EDICO NUMERUS + Mairie de Grigny (accordéons)
4. **Projet GSB** – Architecture complète, diagramme infrastructure
5. **Veille** – Capteurs football, accordéons par sous-thème
6. **Compétences** – 6 catégories en grille
7. **Oral E5** – Script intro, 5 questions jury + axes clés

## 🖨️ Imprimer / exporter en PDF

- Ouvrir `index.html` dans Chrome
- `Ctrl + P` → Enregistrer en PDF
- Les styles `print.css` optimisent automatiquement le rendu

---
*Portfolio généré pour l'épreuve E5 – BTS SIO SISR · Lycée Louis Armand, Paris*
