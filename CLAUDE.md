# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal home page built with Next.js featuring a static home page and dynamic remote Markdown file rendering. The site is hosted at timsam.au and deployed on Vercel.

## Development Commands

```bash
# Development server (runs on http://localhost:3000)
npm run dev

# Production build
npm run build

# Start production server (requires build first)
npm start

# Bundle analysis (for optimization)
npm run analyze                  # Full analysis
npm run analyze:server           # Server bundle only
npm run analyze:browser          # Client bundle only

# Deploy to Vercel
npm run deploy
```

## Architecture

### Two-Route System

The application uses Next.js Pages Router with two distinct content rendering paths:

1. **Static home page** (`pages/index.tsx`)
   - Pure Next.js/React page, prerendered at build time (no data fetching)
   - All copy lives in `content/home.ts` as typed data; `pages/index.tsx` only renders it
   - Header image is Henri Rousseau's *The Repast of the Lion* (public domain, The Met), credited in the footer
   - Sections: intro card, Side projects, Experience, Skills, Hackathons, Education, with a floating section nav (`components/SectionNav.tsx`)

2. **Markdown rendering** (`pages/[...name].tsx`)
   - Catch-all route for dynamic markdown content (e.g., `/blog/post-name`)
   - Fetches remote markdown files from `MD_SOURCE_URL` environment variable
   - Server-side rendered on each request
   - Uses `next-mdx-remote` for MDX processing with frontmatter support
   - Returns 404 if markdown file not found at remote source

### Styling

- Tailwind CSS 4, configured in CSS (`styles/globals.css`); there is no `tailwind.config.*`
- Palette: CSS variables on `:root` (light) and `prefers-color-scheme: dark`, exposed as utilities through `@theme inline` (`bg-page`, `bg-surface`, `text-ink`, `text-ink-soft`, `text-muted`, `text-accent`, `border-line`, `text-sun-ink`, ...). They switch with the colour scheme, so no `dark:` variants are needed. Keep new text colours at WCAG AA contrast on both `page` and `surface`
- Fonts: Fraunces (`font-display`, headings) and Inter (`font-sans`, body) via `next/font/google` in `pages/_app.tsx`, self-hosted at build time
- Shared component classes (`button`, `tile`, `chip`, `icon-button`, `link-quiet`) are in `@layer components` in `globals.css`
- daisyUI 5 for badges on markdown pages; its light/dark themes are re-tinted to the palette
- `@tailwindcss/typography` for markdown pages; prose colours map to the palette in `globals.css`
- Dark mode is automatic via `prefers-color-scheme` (no toggle)

### Environment Variables

Required in `.env` file:
- `MD_SOURCE_URL` - Base URL for fetching remote markdown files (format: `domain.com/path`)

The markdown fetching constructs URLs as: `https://${MD_SOURCE_URL}/${pathname}.md`

### Key Dependencies

- `next-mdx-remote` - MDX processing for remote markdown
- `@vercel/speed-insights` - Performance monitoring
- `tailwindcss` 4 + `@tailwindcss/typography` + `daisyui` 5 - Styling and UI components

## Code Structure

- `pages/` - Next.js pages (Pages Router, not App Router)
  - `index.tsx` - Static home page (renders `content/home.ts`)
  - `[...name].tsx` - Dynamic markdown pages (SSR)
  - `files/[...name].tsx` - PDF viewer for `${MD_SOURCE_URL}/files/*.pdf` (SSR)
  - `404.tsx` - Not-found page
  - `_app.tsx` - Global app wrapper: global styles, fonts, Speed Insights
  - `_document.tsx` - `<html lang>`, favicon, theme-color
- `content/home.ts` - Home page copy (edit this to change the site's content)
- `components/` - `SectionNav`, `SiteFooter`, `ExternalLink`, `Icons`
- `assets/` - Images imported by pages (profile photo, header painting); `next/image` optimises them
- `public/` - `favicon.ico`, `og.jpg` (1200x630 social preview), `robots.txt`
- `styles/globals.css` - Tailwind 4 config, palette, component classes
- `next.config.js` - Next.js configuration

## Important Notes

- This uses the Pages Router, not the App Router
- The home page is statically generated (no external data fetching) while markdown pages use SSR
- Dark mode is automatic based on system preferences (no toggle)
- Markdown files must exist at the remote URL specified by `MD_SOURCE_URL`
- Home page content lives in `content/home.ts`; the Education entry must keep "Partially complete"
- `public/og.jpg` is a static image; regenerate it if the name or role changes
