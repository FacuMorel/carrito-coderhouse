## Quick orientation — carrito-reactproject

This repository is a small React + Vite app (starter template) used as a shopping-cart UI demo. The goal of this Copilot instructions file is to give AI coding agents immediate, actionable context to be productive here.

Key facts
- Build system: Vite (see `vite.config.js`). Run locally with `npm run dev`, build with `npm run build`, preview with `npm run preview`.
- React version: React 19 (JSX files use `.jsx`). The repo enables the React Compiler via `babel-plugin-react-compiler` in `vite.config.js`.
- Linting: ESLint configured in `eslint.config.js`. Important rule: `no-unused-vars` uses `varsIgnorePattern: '^[A-Z_]'` so unused identifiers that start with a capital letter or underscore are ignored (this affects autofixes and suggestions).

Project layout (files you will reference)
- `package.json` — scripts: `dev`, `build`, `preview`, `lint`.
- `vite.config.js` — React plugin + babel react-compiler plugin enabled.
- `eslint.config.js` — linting rules and ignores.
- `src/` — application code:
  - `main.jsx` — app bootstrap (uses `createRoot` and `StrictMode`).
  - `App.jsx` — top-level composition (imports `NavBar`, `ItemListContainer`).
  - `components/` — each component is a simple functional component and has a colocated CSS file (e.g., `NavBar.jsx` + `NavBar.css`, `CartWidget.jsx` + `CartWidget.css`).
  - `assets/` — static assets imported directly from components (e.g., `cart.svg` imported in `CartWidget.jsx`).

Patterns & conventions to follow (observable in the codebase)
- Components: default-exported, function components (no class components). Example: `NavBar.jsx` uses `export default NavBar`.
- Styles: each component has a separate `.css` file colocated in `src/components`. Import the CSS at the top of the JSX file (e.g., `import './NavBar.css'`).
- Assets: put images/icons under `src/assets` and import them (e.g., `import cartIcon from '../assets/cart.svg'`). Vite handles asset imports.
- Routing/state: currently there is no router or global state library. Keep changes lightweight — add react-router or Redux only if you update the project-level structure and tests.

Helpful, concrete examples (copy-ready patterns)
- New component skeleton (follow existing pattern):
  - file: `src/components/MyComponent.jsx`
  - default export, import local CSS at top, use a single root element, keep props minimal. See `ItemListContainer.jsx` for a minimal example.
- Importing an asset: `import logo from '../assets/logo.png';` then use `<img src={logo} alt="..." />`.

Developer workflows (must-know commands)
- Start dev server with HMR: `npm run dev` (recommended for local work).
- Build production bundle: `npm run build`.
- Preview production build locally: `npm run preview`.
- Run linter: `npm run lint`.

Linting caveat
- The ESLint configuration ignores `dist` and allows unused variables that start with an uppercase letter or underscore. When fixing lint issues, prefer minimal semantic changes (rename a helper or remove an unused binding) rather than disabling rules.

When editing UI
- Follow current file conventions: create `Component.jsx` + `Component.css` and import CSS. Keep default export and small, focused props. Update `App.jsx` to mount new components.

Integration and extension notes
- If you add a build-time tool or runtime dependency, update `package.json` and ensure `vite.config.js` plugins stay compatible with React Compiler (the project currently adds `babel-plugin-react-compiler` in the React plugin options).
- No backend integration is present; if adding APIs, place client code under `src/api` and keep components presentation-only unless a container is intentional.

Files to inspect when debugging
- `vite.config.js` — dev server and plugin options.
- `eslint.config.js` — lint rule behavior and ignores.
- `src/main.jsx` — mounting point; errors here usually mean import or entry issues.

If something is unclear or you need more specific guidance (tests, routes, or adding state management), tell me which area you want to modify and I will expand this file with examples and tests.

— End of instructions
