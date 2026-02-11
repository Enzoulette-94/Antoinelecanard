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

## Deploy GitHub Pages depuis la branch main
1. Build Pages dans `docs/`:
```bash
npm run build:pages
```
2. Commit et push:
```bash
git add .
git commit -m "build pages docs"
git push origin main
```
3. Dans GitHub: `Settings > Pages`
- `Source`: `Deploy from a branch`
- `Branch`: `main`
- `Folder`: `/docs`

URL attendue:
- `https://enzoulette-94.github.io/Antoinelecanard/`

## Option alternative (branch gh-pages)
```bash
npm run deploy
```
