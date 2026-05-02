# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# Sweet Cherry - Development Guide

This document provides guidelines and context for the ongoing development of the Sweet Cherry Github Page.

## Project Context

Sweet Cherry is a promotional page for a bakery/pastry shop. The page should display catalogs or galleries of different dessert categories:
- Cookies
- Gelatin
- Standard Cakes
- Custom Cakes
- Petit Fours
- Tarts

In addition, it must contain clear links to Sweet Cherry's social media.

## Build & Run

This is a static site with **no build toolchain** — no `package.json`, no bundler, no tests. Deployment is GitHub Pages serving the default branch.

- Local preview: open `index.html` directly, or run a static server from the project root (e.g. `python -m http.server 8000` and visit `http://localhost:8000`).
- The page entry point (`index.html`, CSS, JS) does not exist yet — only assets and references. New work creates these at the project root.

## Design and Frontend Standards

To ensure a high-quality, professional, and aesthetically pleasing web design (avoiding a generic template look), we rely heavily on the instructions detailed in our frontend design skill:

**Skill Reference:** `.claude\skills\frontend-design\SKILL.md`

A `canvas-design` skill is also pinned at `.claude\skills\canvas-design\SKILL.md` for poster/print artwork. Both skills are version-locked via `skills-lock.json`.

### Brand Color Palette

Use the following colors as the visual foundation for the Sweet Cherry page:

- `#A82323` / `rgb(168, 35, 35)` - primary cherry red
- `#FEFFD3` / `rgb(254, 255, 211)` - soft cream background
- `#BCD9A2` / `rgb(188, 217, 162)` - light sage accent
- `#6D9E51` / `rgb(109, 158, 81)` - deeper green accent

Apply this palette consistently across backgrounds, buttons, highlights, gradients, and hover states so the page feels cohesive and clearly branded.

### Key guidelines based on the skill:
1.  **Aesthetics:** Prioritize an appetizing and elegant aesthetic that matches a high-quality bakery. Warm, pastel, or vibrant colors depending on branding (e.g., cherry, vanilla, chocolate tones).
2.  **Images:** Given the nature of the project, the proper display of dessert images (located in the `Postres/` subfolders) is critical.
3.  **Subtle Animations:** Consider micro-interactions when hovering over desserts or social media buttons.
4.  **Responsive Design:** The mobile experience must be flawless, as many users will arrive via social media on their phones.

## Asset Notes

Folders under `Postres/` use **Spanish names** (the source of truth) while the UI labels are in English. Mapping:

| Folder | UI label | Image count |
| --- | --- | --- |
| `Galletas/` | Cookies | 3 |
| `Gelatina/` | Gelatin | 2 |
| `Pasteles de linea/` | Standard Cakes | 10 |
| `Personalizados/` | Custom Cakes | 7 |
| `Petit fours/` | Petit Fours | 8 |
| `Tartas/` | Tarts | 2 |

Note that `Gelatina/` contains `Mazapán_.jpg` (a marzipan flavor of gelatin) and `Petit fours/` contains the tartaleta items — the folder is the source of truth, even when the name doesn't match the obvious category. Re-list the folders before assuming counts; new images are added directly to disk.

**Image filename quirks** (must URL-encode when referencing in HTML/CSS):
- Folder name `Pasteles de linea/` and `Petit fours/` contain spaces → `%20`.
- Many filenames have a trailing underscore before the extension (e.g. `Mazapán_.jpg`, `Coco_.jpg`).
- Some filenames have a **trailing space** before the extension (e.g. `Pionono de maracuyá .jpg`, `tarta de queso .jpg`) — the space must be encoded too: `Pionono%20de%20maracuy%C3%A1%20.jpg`.
- Casing is inconsistent: `Tarta de manzana_.jpg` (capitalized) and `tarta de queso .jpg` (lowercase) coexist in the same folder. Match the disk filename exactly.
- Accented characters (`á`, `é`, `í`, `ó`, `ú`, `ñ`) and parentheses appear in names — encode them.
- All photos are **1.7–7.9 MB JPGs**. Optimize (resize + re-encode to WebP/AVIF, generate thumbnails) before shipping; serving the originals will tank mobile load time on GitHub Pages.

**`logo/image.png`** is the brand logo (627 KB — also worth optimizing).

**`example.html`** is a 966 KB WordPress export of an unrelated Belgian frituur ("Frituur Rumbeke Platse"). It is a **reference for layout patterns and feel only** — do not copy markup, scripts, fonts, or branding from it; it carries that site's SEO/tracking and would mislead production work.

## SVG Icon Set

`svg/` contains 5 monochrome bakery icons (`viewBox 0 0 64 64`, single fill `#231f20`):

- `globo.svg` — balloon
- `manga.svg` — piping bag
- `rebanada.svg` — slice
- `rodillo.svg` — rolling pin
- `trigo.svg` — wheat

To recolor without editing the SVGs, replace the hard-coded fill with `currentColor` (or strip the inline `<style>`) and drive color from CSS — they then pick up the brand palette via `color`/`fill` on the parent.

## Current Directory Structure

*   `Postres/`: Categorized subfolders of dessert photography (Spanish names — see mapping above).
*   `logo/`: Brand assets.
*   `svg/`: Decorative bakery iconography.
*   `example.html`: External reference site (not a template).
*   `.claude/skills/`: Pinned design skills (`frontend-design`, `canvas-design`) used to guide UI work.
*   `skills-lock.json`: Locks the skills to specific upstream hashes from `anthropics/skills`.
