# Cliber AI Homepage

## Overview
A single-page homepage for cliberai.com built with Next.js 16, TypeScript, and Tailwind CSS v4. Cliber AI is a parent brand for domain-specific AI products.

## Architecture
- **Framework**: Next.js 16 (App Router, Turbopack)
- **Styling**: Tailwind CSS v4 (CSS-based config via `@theme` in globals.css)
- **PostCSS**: Uses `@tailwindcss/postcss` plugin (v4 requirement)
- **Fonts**: Google Fonts — Inter (body), Georgia (headings), IBM Plex Sans Arabic
- **Port**: 5000 (required by Replit for webview)

## i18n / Language Support
- Languages: English (en), Arabic (ar), French (fr), German (de)
- `src/app/translations.ts` — All UI strings in 4 languages + language metadata (dir, flags) + theme type
- `src/app/LanguageProvider.tsx` — React context for language & theme state, persists to localStorage
- `src/app/SettingsModal.tsx` — Settings dropdown with theme picker and language picker (gear icon in header)
- Arabic uses RTL layout via `dir="rtl"` on the root container

## Theme Support
- Themes: System (default), Dark
- Uses Tailwind CSS v4 `@custom-variant dark` with `.dark` class on `<html>`
- Theme persisted to localStorage under key `"cliber-theme"`
- System theme follows the default light appearance; Dark theme uses neutral-950/900 backgrounds

## Key Files
- `src/app/page.tsx` — Main homepage (client component) with hero, featured product, contact, footer
- `public/saudi-judge-preview.png` — Screenshot preview of the Saudi Judge interface
- `src/app/layout.tsx` — Root layout with metadata, wraps children in LanguageProvider
- `src/app/globals.css` — Tailwind imports, custom theme colors, animations
- `postcss.config.mjs` — PostCSS config with @tailwindcss/postcss
- `next.config.ts` — Next.js config with allowedDevOrigins
- `public/favicon.svg` — "C" logo favicon

## Color Palette
- Cream background: `#FAF8F5`
- Cream border: `#F0EDE9`
- Brand green: `#00A66B` (CTA, accents)
- Brand green dark: `#005430` (hover states)
- Brand orange: `#D97757` (logo, secondary accent)

## CTA
The primary call-to-action button links to: https://www.saudi-judge.cliberai.com
