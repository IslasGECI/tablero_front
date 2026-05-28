# DOCS.md — tablero_front

## /

Root portal page listing all available front-ends.

- **Parameters**: None
- **Returns**: HTML page with a list of links to each front-end.

---

## /reproducibilidad/

Reproducibility dashboard page.

- **Parameters**: None
- **Returns**: HTML page with a table displaying reproducibility status.
- **Notes**:
  - Page auto-refreshes every 600 seconds.
  - Requires JavaScript (jQuery) to populate the table.
  - Table columns: Repositorio, Objetivo, Reproducible.

---

## /js/json2table.js

JavaScript module that populates the reproducibility table.

- **Parameters**: None
- **Returns**: JavaScript file.
- **Notes**:
  - Fetches data from `http://islasgeci.org:500/api/v1/dashboard` (external API).
  - Executes on `window.load` event.
  - Expects a JSON array of objects with fields: `repo`, `objetivo`, `develop`.
  - The `develop` field is used as an image source URL for the Reproducible column.
