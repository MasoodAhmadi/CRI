# Afghanistan Cricket Association Tampere

React 18 single-page app built with [Vite](https://vite.dev), React Router, React-Bootstrap and styled-components.
(Converted from Next.js.)

## Getting started

    npm install
    cp .env.example .env     # then fill in the values
    npm run dev              # http://localhost:3000
    npm run build            # production build -> dist/
    npm run preview          # serve the production build locally

## Environment variables

Vite only exposes variables prefixed with `VITE_` to the browser (read via `import.meta.env.VITE_*`):

| Variable | Used for |
| --- | --- |
| `VITE_BACKEND_URL` (+ `_2`, `_3` fallbacks) | Base URL of the Express/Mongo backend |
| `VITE_DEFAULT_USERPASSWORD`, `VITE_ROLE` | Defaults sent by the membership form |

Restart the dev server after changing `.env`.

## Routes (src/App.jsx)

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about`, `/events`, `/matches`, `/membership` | Public pages |
| `/dashboard`, `/dashboard/users`, `/dashboard/events`, `/dashboard/matches` | Admin dashboard |
| `/notFound`, `*` | 404 |

## Deployment

It is a static site: deploy the `dist/` folder. `vercel.json` rewrites every path to `index.html` so deep links
work on Vercel; on other hosts add an equivalent SPA fallback rule.
