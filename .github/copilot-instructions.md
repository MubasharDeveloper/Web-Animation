## Purpose

Short, actionable guidance for AI coding agents working in this repository (React + Vite animations).

## Quick start (commands)

- **Dev server:** `npm run dev`  — starts Vite with HMR (`@vitejs/plugin-react`).
- **Build:** `npm run build` — produces production build via Vite.
- **Preview build:** `npm run preview` — serves the production build locally.
- **Lint:** `npm run lint` — runs ESLint using `eslint.config.js`.

## Big picture

- Small single-page React app built with Vite. Entry: `src/main.jsx` → renders `App`.
- `App` composes three major UI sections: `src/components/ScrollResponsiveSection.jsx`,
  `src/components/HoverSection.jsx`, and `src/components/PortfolioSection.jsx`.
- Styling is CSS-first: global project CSS located at `src/assets/css/customStyle.css`.
- Animations and interaction are implemented imperatively in components (direct DOM refs and
  inline `style` updates) rather than via React state for per-frame scroll updates.

## Key files to read first

- `src/main.jsx` — app bootstrap.
- `src/App.jsx` — top-level composition of sections.
- `src/components/ScrollResponsiveSection.jsx` — complex scroll-driven logic using `useEffect`,
  `useRef`, and direct DOM style mutations. Preserve timing and thresholds when refactoring.
- `src/components/HoverSection.jsx` — hover-driven layout with large images and text sliders.
- `src/components/PortfolioSection.jsx` — simple content component; imports `./PortfolioSection.css` (see Known issues).
- `src/assets/css/customStyle.css` — primary stylesheet; contains layout, responsive rules, and class conventions.
- `eslint.config.js` and `package.json` — linting and scripts configuration.

## Project-specific patterns & conventions

- Prefer functional React components and hooks (already used throughout).
- Animations: scroll-driven behaviors rely on `ref` + manual style changes (e.g. `element.style.transform`,
  `element.style.opacity`). When making changes, avoid switching these to React state-driven per-pixel updates
  (performance reason). If you do refactor to requestAnimationFrame or a library, keep the same visual thresholds
  defined in `ScrollResponsiveSection.jsx` (imageScalingThreshold, sectionTransitionThreshold).
- CSS organization: global styles live in `src/assets/css/customStyle.css`. Component-specific CSS may be in
  component folders (look for imports like `./PortfolioSection.css`).
- The repo uses ESM (`"type":"module"` in `package.json`) and React 19.

## Linting / formatting

- ESLint is configured in `eslint.config.js`. Key rules:
  - `no-unused-vars` is relaxed for variables matching `^[A-Z_]`.
  - `react-refresh/only-export-components` is enabled as a warning.
- Run `npm run lint` to check errors. Fixes should respect existing rules; do not change the top-level ESLint config unless necessary.

## Integration points & external dependencies

- Uses `@vitejs/plugin-react` for HMR and Fast Refresh.
- No backend or API in this repo — all images are referenced via external URLs inside components.

## Known issues & actionable TODOs for agents

- `src/components/PortfolioSection.jsx` imports `./PortfolioSection.css` but that file is not present. Before editing styles,
  search `src/assets/css` or add `PortfolioSection.css` in the component folder when implementing component-local styles.
- `App.jsx` contains a commented-out `progressBarRef` line — `ScrollResponsiveSection` manages a `.progress-bar` element via
  its own refs. Be careful when toggling that code to avoid duplicating elements.
- `ScrollResponsiveSection.jsx` `useEffect` depends on `maxImageWidth`, `maxImageHeight`, `sectionHeight`. If modifying the effect,
  ensure event listeners are not re-bound on every small change (prefer stable refs or single mount/unmount where possible).

## Debugging tips

- Use `npm run dev` and open the browser console to inspect live `style` mutations and scroll thresholds.
- For performance debugging of scroll animations, profile paint/layout in the browser and consider moving heavy calculations
  into `requestAnimationFrame` or throttling resize/scroll handlers.

## When creating PRs

- Keep changes small and focused. Show before/after screenshots for visual tweaks.
- If modifying `ScrollResponsiveSection.jsx` behavior, include a short note describing threshold changes and reasoning.

## If you need to add tests or CI

- No tests or CI are configured. If adding tests, prefer lightweight component tests (Vitest/Jest) and keep build scripts
  in `package.json` updated.

---

If anything above is unclear or you'd like me to include more examples (e.g., annotated snippets for `ScrollResponsiveSection.jsx`),
tell me which part to expand.
