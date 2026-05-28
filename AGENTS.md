# AGENTS.md — tablero_front

## Project layout

- Yarn workspace monorepo with a single workspace `public_html/`.
- Each static front-end lives in its own subdirectory under `public_html/`.
- Shared assets (`js/`, `tests/`) live at `public_html/` root.
- `http-server` serves `public_html/` at root `/`; subdirectories are served automatically (e.g. `/reproducibilidad/`).

## Commands (run from repo root)

| Command | What it does |
|---------|-------------|
| `make setup` | `yarn` — install all dependencies |
| `make check` | Format check (HTML + JS) via Prettier |
| `make format` | Auto-format HTML + JS via Prettier |
| `make tests` | Run Jest test suite |
| `make mutants` | Run Stryker mutation testing |
| `make clean` | Remove `node_modules` |

Order: `setup` → `check` → `tests`. Dependencies are automatic via Makefile.

## CI workflow (`.github/workflows/actions.yml`)

Runs on every push, scheduled daily, and on PRs to `develop`:
1. Build Docker image
2. Start container (`build/Makefile up`)
3. Check formatting (`build/Makefile check`)
4. Check service status (`build/Makefile check_status`)
5. Run tests (`build/Makefile tests`)
6. Run mutation tests (`build/Makefile mutants`)
7. Push image to Docker Hub (on push only)

## Docker

- Image: `islasgeci/tablero_front`
- Container serves port 80, published to host port 5000 in production.
- `http-server ./public_html --port 80`
- `build/Makefile` wraps Docker commands for CI.

## Testing

- Jest (no config file, uses defaults — discovers `**/?(*.)+(spec|test).[jt]s?(x)`).
- Currently one dummy test.
- Stryker for mutation testing (`@stryker-mutator/jest-runner`).

## Front-end architecture

- `public_html/index.html` — root portal page listing all front-ends.
- Each front-end directory has its own `index.html`.
- HTML files use absolute paths (e.g. `/js/json2table.js`) to reference shared assets.
- CSS framework: Pico CSS v2+ (full version, CDN `@latest`), loaded via `<link>` in `<head>`.
- All pages use `data-theme="light"` on `<html>` and wrapper `<main class="container">`.
- External CDN resources never carry `integrity` (SRI) or `crossorigin` attributes.
- The reproducibility dashboard fetches data from `http://islasgeci.org:500/api/v1/dashboard` (external API).
- The dashboard auto-refreshes every 600 seconds via `<meta http-equiv="refresh">`.
- jQuery is loaded from `cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js` (latest 3.x).
- The checa-datos page posts to `http://islasgeci.org:300/check_traps_ids` (janitor API).

## Infrastructure repos

- `islasgeci.org` — deployment orchestrator (Docker scripts on VPS).
- `islasgeci.org_setup` — Terraform + Ansible provisioning.
