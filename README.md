# Portfolio — Élisa Wagner

Site portfolio interactif pour **Élisa Wagner**, spécialiste en **communication
interne**. Univers pastel, formes arrondies et animations douces.

> ✨ Maquette v1 : le contenu est en **placeholder** (valeurs marquées
> `[À compléter]`). Il suffit de les remplacer par les vraies informations.

## Stack
- **React** + **Vite**
- **Framer Motion** (animations)
- CSS pur (design system à base de variables)

## Lancer le projet
```bash
npm install      # installe les dépendances
npm run dev      # serveur de développement (http://localhost:5173/elisawagner/)
npm run build    # build de production dans dist/
npm run preview  # prévisualise le build
```

## Personnaliser le contenu
**Tout le texte** est centralisé dans un seul fichier :

```
src/data/content.js
```

On y trouve : profil (nom, accroche, email, LinkedIn), chiffres-clés,
présentation, expertises, expériences, formation (MBA), réalisations.
Remplacez simplement les valeurs `[À compléter]` par les vraies informations.

### Couleurs & polices
Le design system (palette pastel, rayons, ombres, polices) est défini dans :
```
src/styles/global.css   (variables :root)
```

## Déploiement (GitHub Pages)
- Le `base` est défini sur `/elisawagner/` dans `vite.config.js`
  (à adapter si le nom du dépôt change).
- Le workflow `.github/workflows/deploy.yml` build et publie automatiquement
  sur GitHub Pages à chaque push.
- Dans les **Settings → Pages** du dépôt GitHub, sélectionner la source
  **« GitHub Actions »**.

## Structure
```
src/
├── data/content.js        → tout le contenu éditable
├── styles/                → design system + animations
├── hooks/                 → reduced-motion, détection tactile
└── components/
    ├── BackgroundBlobs    → gros ronds pastel animés en fond
    ├── CustomCursor       → curseur doux
    ├── Navbar, Hero, Marquee, About, Skills,
    │   Experience, Education, Projects, Contact, Footer
    └── ui/                → Reveal, MagneticButton, Counter
```

## Accessibilité
Le site respecte la préférence système **`prefers-reduced-motion`** (les
grosses animations et le curseur personnalisé sont alors désactivés) et
adapte les interactions souris sur les écrans tactiles.
