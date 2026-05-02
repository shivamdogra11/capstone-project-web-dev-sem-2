# CityPulse — Smart-City Events Dashboard

A production-grade React PWA for discovering, filtering, mapping and saving city events.

## Tech Stack

- **React 18** + **Vite 5** — blazing-fast dev & build
- **React Query v5** — data fetching with stale-while-revalidate caching
- **React Router v6** — code-split lazy routes
- **Leaflet + React-Leaflet** — interactive map view
- **vite-plugin-pwa** — PWA manifest + Workbox service worker
- **CSS Modules** — scoped, zero-runtime styling
- **Context API** — favourites + filters global state

## Features

- Live event data (Ticketmaster API) with graceful mock fallback
- Search, category chips, date-range filters + sort
- Interactive map with colour-coded category markers
- Favourites persisted to localStorage via Context
- Draggable Kanban board (GitHub Projects simulation)
- Full PWA: offline support, installable, manifest
- Code-splitting on every route for fast initial load
- Lighthouse-ready: semantic HTML, ARIA labels, lazy images

## Quick Start

```bash
npm install
npm run dev
```

## Optional: Real API Data

To use the Ticketmaster Discovery API:

1. Get a free key at https://developer.ticketmaster.com
2. Open `src/hooks/useEvents.js`
3. Replace `'YOUR_TM_KEY'` with your actual API key

Without a key, the app uses rich mock data (20 events per city).

## Deploy to Netlify

**Option A — Drag & Drop:**
1. `npm run build`
2. Drag the `dist/` folder to netlify.com/drop

**Option B — Git Integration:**
1. Push to GitHub
2. Connect repo on Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

The `netlify.toml` handles SPA redirects, caching headers, and security headers automatically.

## Lighthouse Targets

| Metric | Target |
|--------|--------|
| Performance | ≥ 90 |
| Accessibility | ≥ 90 |
| Best Practices | ≥ 90 |
| SEO | ≥ 90 |
| PWA | ✓ |

Achieved via: code-splitting, lazy images, semantic HTML, ARIA attributes, cache headers, service worker, manifest.

## Project Structure

```
src/
├── components/     # Shared UI (Layout, EventCard, SearchFilters, ...)
├── context/        # FavouritesContext, FiltersContext
├── hooks/          # useEvents (React Query)
├── pages/          # Dashboard, MapView, Favourites, EventDetail, Kanban
└── utils/          # helpers (format, filter, sort)
```
