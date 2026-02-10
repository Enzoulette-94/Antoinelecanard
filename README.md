# Valentine SPA (Vite + React + HashRouter)

## Arborescence

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
├── src/
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Yes.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy GitHub Pages

### Option 1 (implémentée): GitHub Actions
1. Push sur `main`.
2. Active Pages dans repo settings: Source = `GitHub Actions`.
3. Le workflow `.github/workflows/deploy.yml` publie automatiquement `dist`.

### Option 2 (commande unique avec gh-pages)
```bash
npm run deploy
```

## Remplacement image

- Place ton image ici: `public/valentine.jpg`
- La page `/oui` utilise déjà ce chemin.
