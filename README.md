<img src="https://www.islas.org.mx/img/logo.svg" align="right" width="256" />

# Tableros GECI

A hub for GECI dashboards.

## What it does

This project serves a portal page that lists all available GECI dashboards.
Dashboards cover topics such as report reproducibility, data analysis, data
curation, and visualization.

Currently available dashboards:

- [Reproducibilidad](/reproducibilidad/) — shows reproducibility status of
  GECI reports verified by `geci-testmake`.
- [Checa datos](/checa-datos/) — upload trap position and MapSource files
  to verify they match.

## How to use it

1. Open the portal page in your browser.
2. Click a dashboard link to view it.
3. Each dashboard may offer its own functionality, auto-refresh schedule,
   and interactivity.

## Before you start

You need Docker installed on your machine.

## Run the project

```sh
docker run --rm --publish 5000:80 islasgeci/tablero_front:latest
```

Then open http://localhost:5000 in your browser.

## Coming soon

- Additional dashboards listed on the portal page.
