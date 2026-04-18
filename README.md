# Café Ikigai — Website

A single-page marketing site for **Café Ikigai** in Hyderabad: hero, story, menu highlights, gallery, visit details, and footer. The UI is calm and minimal—serif display type, soft café palette, light/dark theme, and subtle motion (Framer Motion).

## Tech stack

- **React 18** + **TypeScript**
- **Vite** (`@vitejs/plugin-react-swc`)
- **Tailwind CSS** 3.4 with custom theme tokens in `src/index.css`
- **Framer Motion** for scroll-linked hero parallax and section entrances
- **React Router** for routing (currently `/` → home)
- **shadcn-style UI** primitives under `src/components/ui` (Radix-based)
- **Lucide** icons

## Prerequisites

- **Node.js** 18 or newer recommended
- **npm** (or use `pnpm` / `yarn` if you prefer—adjust commands accordingly)

## Getting started

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Scripts

| Command | Description |
|--------|-------------|
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Typecheck (`tsc`) then production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint on the project |
| `npm run types:supabase` | Generate Supabase TypeScript types (requires `SUPABASE_PROJECT_ID`; optional for this landing page) |

## Production build & base path

Build output goes to **`dist/`**.

For hosting under a subpath (e.g. `https://example.com/cafe/`), set **`VITE_BASE_PATH`** when building so assets resolve correctly (see `vite.config.ts`):

```bash
set VITE_BASE_PATH=/cafe/
npm run build
```

On Unix-style shells:

```bash
VITE_BASE_PATH=/cafe/ npm run build
```

`import.meta.env.BASE_URL` is wired to the router `basename` in `src/main.tsx`.

## Project structure

```
src/
  components/
    cafe/          # Landing sections (Hero, About, Menu, Gallery, Visit, Navbar, Footer, …)
    ui/            # Reusable UI primitives (buttons, dialogs, etc.)
  hooks/
  lib/             # e.g. `cn()` utility
  index.css        # Tailwind + CSS variables (light/dark café theme)
  App.tsx          # Routes
  main.tsx         # Entry + BrowserRouter
public/            # Static assets served at site root (if used)
```

Section IDs used for in-page navigation: **`hero`**, **`about`**, **`menu`**, **`gallery`**, **`visit`**.

## Content & assets

- **Copy and menu data** live in the café section components (e.g. `MenuSection.tsx`, `VisitSection.tsx`).
- **Hero / about imagery** is referenced from components (paths like `/src/images/…` in code). Replace with your own files and update paths, or move images under **`public/`** and reference them from the root (e.g. `/images/hero.jpg`) for predictable deployment URLs.

## Optional tooling

- **Storybook**: story files live under `src/stories/`; run Storybook only if your repo is configured with the matching Storybook dependencies and scripts (not defined in `package.json` by default here).

---

Private project. Adjust branding, legal lines, and analytics as needed before launch.
