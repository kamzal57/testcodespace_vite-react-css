# Planificateur Quotidien – Application « tout-en-un »

Cette version prend le contrepied du template React d’origine et propose une application complète réalisée en pur HTML, CSS et JavaScript, contenue dans un seul fichier : `index.html`.

## Aperçu rapide

- Ajout de tâches avec heure cible facultative
- Suivi en direct du nombre total et des tâches terminées
- Filtres (toutes, actives, terminées)
- Thème clair/sombre avec mémorisation
- Persistance automatique des tâches dans `localStorage`

## Structure du projet

```
test-vite-react/
├── index.html        # Application complète (UI, styles et scripts)
├── public/
└── package.json
```

Les anciens fichiers React/TypeScript restent dans `src/` pour référence, mais ils ne sont plus utilisés par défaut. Libre à vous de les supprimer si vous souhaitez alléger davantage le projet.

## Démarrer en local

```bash
npm install
npm run dev
```

Vite servira le fichier `index.html` tel quel. Ouvrez l’URL affichée dans la console (généralement `http://localhost:5173`).

## Build de production

```bash
npm run build
```

Le dossier `dist/` contiendra une copie optimisée de `index.html`.

## Personnalisation

- Modifiez le contenu de la section « stats » ou des tâches par défaut en ouvrant `index.html`.
- Les styles reposent majoritairement sur des variables CSS (`--bg`, `--primary`, etc.) pour faciliter la déclinaison.
- Le JavaScript est regroupé dans une IIFE (Immediately Invoked Function Expression) pour éviter de polluer l’espace global.

Bon prototypage ✨
