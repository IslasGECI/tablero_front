# Plan: Move reproducibility dashboard to `/reproducibilidad/`

## Goal

Serve the reproducibility dashboard at `islasgeci.org/reproducibilidad/` (or `islasgeci.org:5000/reproducibilidad/`) instead of at the root `/`. The root `/` will become a landing page listing all static front-ends in this repo.

## Scope

This plan touches **only** this repo (`tablero_front`). No changes to `islasgeci.org`, `islasgeci.org_setup`, or any API repos.

## Steps

### 1. Move the dashboard into a subdirectory

Move `public_html/index.html` to `public_html/reproducibilidad/index.html`.

No other files move — `js/` and `tests/` stay at the root for sharing across future front-ends.

### 2. Update the script path in the moved HTML

In `public_html/reproducibilidad/index.html`, change:
```html
<script type="text/javascript" src="js/json2table.js"></script>
```
to:
```html
<script type="text/javascript" src="/js/json2table.js"></script>
```

This is needed because the HTML now lives one level deeper; the absolute path `/js/json2table.js` always resolves to the shared `public_html/js/` directory regardless of subdirectory depth.

### 3. Create a new root `index.html`

Create `public_html/index.html` with a hardcoded, minimal list of links to each front-end. For now, just one link:

```html
<ul>
  <li><a href="/reproducibilidad/">Reproducibilidad</a></li>
</ul>
```

Styling/design to be addressed after migration.

### 4. Update the prettier HTML glob

In `public_html/package.json`, update the four prettier HTML commands:

```
*.html  →  **/*.html
```

This ensures prettier checks/format catches HTML files in subdirectories too.

## Files with **no changes**

| File | Reason |
|------|--------|
| `public_html/js/json2table.js` | API URL is absolute; DOM selectors are by `id`; no file-path references |
| `public_html/tests/tests_json2table.test.js` | Stays at root; Jest discovers it recursively |
| `Dockerfile` | `http-server` serves subdirectories automatically |
| `Makefile` (root) | References only Yarn workspace commands |
| `build/Makefile` | References only Docker commands |
| `.github/workflows/actions.yml` | CI uses `make` targets unchanged |
| `.gitignore` | No new patterns needed |
