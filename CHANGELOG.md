# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/),
and this project adheres to [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- New checa-datos front-end at `/checa-datos/` to verify trap positions against MapSource records.
- Favicon and logo from `islas.org.mx` on all pages.

### Changed

- Replaced Bootstrap 4.3.1 with Pico CSS v2+ across all pages.
- Upgraded jQuery from pinned 3.4.1 to the latest 3.x via jsDelivr.
- Removed SRI hashes and `crossorigin` attributes from all CDN resources.
- Shortened page titles: `Tableros • GECI`, `Reproducibilidad • GECI`, `Datos trampeo • GECI`.
- Standardized `<h1>` layout with logo (flexbox, logo after heading text, bottom-aligned).

### Fixed

- API endpoint URL in checa-datos from `localhost:1000` to `islasgeci.org:300`.

## [v0.2.0] - 2026-05-28

### Added

- Root portal page at `/` listing all available front-ends.
- Reproducibility dashboard now accessible at `/reproducibilidad/`.
- Prettier HTML formatting checks cover subdirectory HTML files (`**/*.html`).

## [v0.1.0]

### Added

- Initial release of the reproducibility dashboard.

[Unreleased]: https://github.com/IslasGECI/tablero_front/compare/v0.2.0...HEAD
[v0.2.0]: https://github.com/IslasGECI/tablero_front/compare/v0.1.0...v0.2.0
[v0.1.0]: https://github.com/IslasGECI/tablero_front/releases/tag/v0.1.0
