# Blazin Grill 🍔🔥

A responsive marketing site for a burger restaurant — hero video, full menu,
branch locations, and brand story. Built with **React 19**, **Vite**, and
**Tailwind CSS v4**.

## 🛠️ Tech Stack

| Layer | Choice |
|---|---|
| UI | React 19 |
| Build | Vite 6 |
| Styling | Tailwind CSS v4 (`@tailwindcss/vite`) |
| Routing | React Router 7 |
| Deploy | Docker + nginx on a Hostinger VPS via Coolify |

Static front end only — no backend or database.

## 🚀 Getting started

```bash
cd frontend
npm install
npm run dev      # dev server
npm run build    # production build -> dist/
npm run preview  # serve the built output
npm run lint
```

## 📂 Project structure

```
BlazinGrill/
├── DEPLOY.md              # Coolify / Hostinger deployment guide
└── frontend/
    ├── Dockerfile         # two-stage: Node builds, nginx serves
    ├── nginx.conf         # SPA fallback + cache headers
    ├── public/
    └── src/
        ├── assets/        # fonts, images, hero video
        ├── components/    # presentational pieces
        ├── hooks/         # useMediaQuery
        ├── pages/         # Home, Menu, Locations, Us, NotFound
        ├── sections/      # page-level composites
        └── data.js        # menu, locations, branches
```

## 🧭 Routes

| Path | Page |
|---|---|
| `/` · `/blazin` | Home |
| `/menu` | Full menu by category |
| `/locations` | Branch list with tap-to-call |
| `/us` | Brand story |
| _anything else_ | 404 |

Routing is client-side, so the server **must** fall back to `index.html` —
that's what `frontend/nginx.conf` does. Without it, refreshing on `/menu`
returns a 404.

## 🚢 Deployment

See **[DEPLOY.md](DEPLOY.md)**. The short version: Coolify app, Dockerfile
build pack, **Base Directory `/frontend`**, port 80.

## 📌 Known trade-offs

- `dist/` is ~15 MB, dominated by a 6 MB hero video and ~13 MB of font files.
  Only the `Antonio` and `Stinger` families are actually applied — the
  `Stinger Fit` / `Slim` / `Trial` faces are declared but unused, and are the
  easiest win if page weight matters.
- ESLint reports `react/prop-types` errors across the component tree. The
  project uses plain JSX without prop validation; the rule is unsatisfied
  rather than the code being wrong.

## 📄 License

MIT.

## 🙌 Credits

Created by **Ammar Obad** — [ammarobad.info](https://ammarobad.info)
