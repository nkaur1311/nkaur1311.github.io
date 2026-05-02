# Changelog

All notable changes to GitVita will be noted here.
Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [Unreleased]

_Nothing yet — check back after the next release._

---

## [1.0.0] — 2025-05-02

### Added
- **YAML-driven config** — entire portfolio is controlled by a single `portfolio.config.yaml` file; no code editing required
- **Sections** — About, Skills (grouped by category), Experience, Projects (featured + full list), Education, Certifications, and Testimonials
- **Themes** — dark, light, and system-preference modes with 8 color presets (indigo, violet, sky, emerald, rose, amber, zinc, slate)
- **Open-to-work banner** — opt-in green banner that appears when `openToWork: true`
- **Resume export** — one-click download as PDF, JSON Resume spec, and Markdown from the live site
- **Auto base-path detection** — GitHub Actions auto-detects whether the repo is a root domain (`username.github.io`) or subdirectory (`username.github.io/portfolio`) and sets `BASE_PATH` accordingly; no manual config needed
- **Config validator** — `pnpm check-config` (and CI step) catches missing required fields and unknown keys before deploy
- **JSON-LD schema** — `Person` structured data injected at build time for better search indexing
- **Open Graph + Twitter card** — meta tags populated from `portfolio.config.yaml` at build time
- **GitHub Actions workflow** — zero-config CI/CD; push to `main` → live in ~2 minutes
