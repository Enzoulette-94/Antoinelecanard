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

## Deploy GitHub Pages (recommandé: GitHub Actions)
1. Dans GitHub: `Settings > Pages > Source = GitHub Actions`.
2. Push sur `main`.
3. Le workflow `.github/workflows/deploy.yml` build et publie `dist/` automatiquement.

## Alternative deploy (gh-pages branch)
```bash
npm run deploy
```
