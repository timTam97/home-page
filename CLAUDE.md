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
   - Pure Next.js/React implementation with all content directly in the component
   - Static generation (no data fetching required)
   - Styled with Tailwind CSS utility classes
   - Supports automatic dark mode detection via `prefers-color-scheme`
   - Includes sections: Profile, Links, Side Projects, Work Experience, Skills, Hackathons, Education

2. **Markdown rendering** (`pages/[...name].tsx`)
   - Catch-all route for dynamic markdown content (e.g., `/blog/post-name`)
   - Fetches remote markdown files from `MD_SOURCE_URL` environment variable
   - Server-side rendered on each request
   - Uses `next-mdx-remote` for MDX processing with frontmatter support
   - Returns 404 if markdown file not found at remote source

### Styling

- Tailwind CSS for utility-first styling
- DaisyUI for component library (used for badges in markdown pages)
- `@tailwindcss/typography` for prose styling on markdown content
- Dark mode support via CSS custom properties and `prefers-color-scheme`

### Environment Variables

Required in `.env` file:
- `MD_SOURCE_URL` - Base URL for fetching remote markdown files (format: `domain.com/path`)

The markdown fetching constructs URLs as: `https://${MD_SOURCE_URL}/${pathname}.md`

### Key Dependencies

- `next-mdx-remote` - MDX processing for remote markdown
- `@vercel/speed-insights` - Performance monitoring
- `tailwindcss` + `@tailwindcss/typography` + `daisyui` - Styling and UI components

## Code Structure

- `pages/` - Next.js pages (Pages Router, not App Router)
  - `index.tsx` - Static home page with embedded content (Tailwind styled)
  - `[...name].tsx` - Dynamic markdown pages (SSR)
  - `_app.tsx` - Global app wrapper, includes global styles
  - `layout.tsx` - Font configuration (Inter)
- `styles/globals.css` - Global styles and Tailwind imports
- `next.config.js` - Next.js configuration with environment variable injection
- `tailwind.config.ts` - Tailwind and plugin configuration

## Important Notes

- This uses the Pages Router, not the App Router
- The home page is statically generated (no external data fetching) while markdown pages use SSR
- Dark mode is automatic based on system preferences (no toggle)
- Markdown files must exist at the remote URL specified by `MD_SOURCE_URL`
- Home page content is directly embedded in `pages/index.tsx` for easy editing
