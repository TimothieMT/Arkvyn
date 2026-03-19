# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Arkvyn** is a personal portfolio/business website for Tim Tolk, a Full-Stack Software Developer based in Lübeck, Germany. It consists of a React SPA frontend and a minimal Node.js/Express backend for email contact form handling.

- Production domain: arkvyn.de
- Hosting: Hetzner VPS (178.104.24.155)

## Commands

### Frontend (root directory)
```bash
npm run dev       # Start Vite dev server (port 5173)
npm run build     # TypeScript check + Vite production build → dist/
npm run lint      # ESLint
npm run preview   # Preview production build locally
```

### Backend (`backend/` directory)
```bash
npm start         # Start Express mail service (port 3001)
npm run dev       # Start with nodemon (auto-reload)
```

### Production
```bash
./deploy.sh               # Full deploy: pull, build, restart PM2, reload nginx
pm2 restart arkvyn-backend
pm2 logs arkvyn-backend
```

## Architecture

**Frontend** — React 19 + TypeScript SPA, built with Vite. All pages are single-page with client-side routing via React Router v7. SEO is handled via `react-helmet-async`.

**Backend** — Stateless Express server (`backend/MailService.js`) on port 3001. Only two endpoints: `GET /api/health` and `POST /api/contact`. Sends emails via Gmail SMTP using Nodemailer.

**Request routing:**
- In dev: Vite proxies `/api/*` → `http://localhost:3001`
- In prod: Nginx serves `dist/` for all non-API traffic; proxies `/api/*` → `http://127.0.0.1:3001`; all unmatched routes serve `index.html` for SPA routing

**Environment variables** (backend only, in `backend/.env`):
```
GMAIL_USER=
GMAIL_APP_PASSWORD=
DEBUG_EMAIL=false
```

## Key Files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Router setup, scroll-to-section logic (72px navbar offset) |
| `src/components/Kontakt.tsx` | Contact form with client-side validation + fetch to `/api/contact` |
| `backend/MailService.js` | Entire backend — CORS, validation, email send |
| `vite.config.ts` | Dev proxy config |
| `ecosystem.config.cjs` | PM2 config for backend process |
| `nginx.conf` | Nginx config (SPA fallback + API proxy + asset caching) |

## Frontend Structure

Pages are assembled in `src/App.tsx` using named section components (`Home`, `Angebot`, `Preise`, `UeberMich`, `Kontakt`) rendered as sections on the root route, plus standalone routes for `/impressum` and `/datenschutz`.

Scroll-to-section anchors are handled in `App.tsx` — smooth scroll with a 72px offset to account for the fixed navbar height.

## Form Validation

Both client (`Kontakt.tsx`) and server (`MailService.js`) validate: non-empty name, valid email regex, non-empty subject, message ≥ 20 characters. The backend returns 400 with a message if validation fails.
