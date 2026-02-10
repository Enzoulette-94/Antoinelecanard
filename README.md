# Valentine SPA (Vite + React + HashRouter)

## Local
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deploy GitHub Pages (main + /root)
1. Dans GitHub: `Settings > Pages > Build and deployment > Source: Deploy from a branch`.
2. Choisir `Branch: main` et `Folder: / (root)`.
3. Générer le build puis commit/push:

```bash
npm run build
git add .
git commit -m "build: update dist for github pages"
git push
```

Important:
- Le dossier `dist/` doit être versionné (commité) pour ce mode `main + /root`.
- `index.html` charge `dist/assets/app.js` sur GitHub Pages et `/src/main.jsx` en local dev.
