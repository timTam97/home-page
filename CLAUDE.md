# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal home page built with Next.js that renders content from Notion and remote Markdown files. The site is hosted at timsam.au and deployed on Vercel. AWS infrastructure (CDK) provides a table of contents API backed by DynamoDB.

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

# Infrastructure (from infrastructure/ directory)
cd infrastructure && npm run deploy    # Deploy CDK stack
cd infrastructure && npm run synth     # Synthesize CloudFormation
npx ts-node infrastructure/scripts/populate-toc.ts  # Populate TOC from existing S3 files
```

## Architecture

### Four-Route System

The application uses Next.js Pages Router with four content rendering paths:

1. **Notion-based home page** (`pages/index.tsx`)
   - Fetches content from Notion API using the `PAGE_ID` environment variable
   - Uses ISR (Incremental Static Regeneration) with 10-second revalidate
   - Renders with `react-notion-x` library for Notion block rendering

2. **Markdown rendering** (`pages/[...name].tsx`)
   - Catch-all route for dynamic markdown content (e.g., `/blog/post-name`)
   - Fetches remote markdown files from `MD_SOURCE_URL` environment variable
   - Server-side rendered on each request
   - Uses `next-mdx-remote` for MDX processing with frontmatter support

3. **PDF display** (`pages/files/[...name].tsx`)
   - Catch-all route for PDF files (e.g., `/files/resume`, `/files/docs/guide`)
   - Fetches PDFs from `PDF_SOURCE_URL` environment variable
   - Server-side rendered, displays full-screen PDF using native browser viewer
   - URL construction: `https://${PDF_SOURCE_URL}/${pathname}.pdf`

4. **Table of contents** (`pages/contents.tsx`)
   - Lists all markdown articles from DynamoDB via `TOC_API_URL`
   - Server-side rendered, fetches from AWS API Gateway

### AWS Infrastructure (`infrastructure/`)

The `infrastructure/` directory contains a separate AWS CDK project (excluded from Next.js build):

- **DynamoDB table** (`markdown-toc`) - Stores article metadata (path, title, date, author, description)
- **S3 event-driven Lambda** - Automatically updates TOC when markdown files are added/removed from S3
- **API Gateway** - HTTP API at `/toc` endpoint serving the table of contents
- **S3 bucket** (`markdown-bucket-aykugdfki`) - Stores markdown files

The CDK stack has its own `package.json` and `tsconfig.json`. Run `npm install` in `infrastructure/` separately.

### Styling

- Tailwind CSS with DaisyUI component library
- `@tailwindcss/typography` for prose styling on markdown content
- Dark mode via CSS custom properties and `prefers-color-scheme`

### Environment Variables

Required in `.env` file:
- `PAGE_ID` - Notion page ID for the home page
- `MD_SOURCE_URL` - Base URL for fetching remote markdown files (format: `domain.com/path`)
- `PDF_SOURCE_URL` - Base URL for fetching PDF files (format: `domain.com/path`)
- `TOC_API_URL` - API Gateway endpoint for table of contents

The markdown fetching constructs URLs as: `https://${MD_SOURCE_URL}/${pathname}.md`
The PDF fetching constructs URLs as: `https://${PDF_SOURCE_URL}/${pathname}.pdf`

## Important Notes

- This uses the **Pages Router**, not the App Router
- The `infrastructure/` directory is excluded from TypeScript compilation (`tsconfig.json`) and webpack watching (`next.config.js`)
- Infrastructure has separate dependencies - run `npm install` in both root and `infrastructure/`
- Dark mode is automatic based on system preferences (no toggle)
