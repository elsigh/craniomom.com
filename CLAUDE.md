# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CranioMom is a professional services website for a craniosacral therapy practice specializing in infant care, built from a Tailwind UI Studio template using Next.js 15.4.2 (canary) with React 19.

## Commands

### Development
- `npm run dev` - Start development server with Turbopack at http://localhost:3000
- `npm run build` - Create production build
- `npm run start` - Start production server
- `npm run lint` - Run Next.js ESLint checks

## Architecture

### Tech Stack
- **Framework**: Next.js 15.4.2-canary.18 with App Router
- **UI**: React 19.1.1 + Tailwind CSS 3.4.15
- **Animations**: Framer Motion 10.18.0
- **Content**: MDX for rich content
- **Email**: Resend API for contact form
- **Scheduling**: Cal.com embed integration
- **Analytics**: Vercel Analytics & Speed Insights
- **Fonts**: Custom Mona Sans variable font

### Directory Structure
```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact form with email validation
│   │   └── thanks/        # Post-submission page
│   ├── actions.js         # Server actions (contact form handler)
│   ├── layout.jsx         # Root layout with metadata
│   └── page.jsx           # Homepage
├── components/            # Reusable React components
│   ├── ContactForm.jsx    # Form with server action
│   ├── FadeIn.jsx        # Animation wrapper
│   └── RootLayout.jsx    # Main layout wrapper
├── images/               # Static assets
├── lib/                  # Utility functions
└── styles/              # CSS files (Tailwind + custom)
```

### Key Patterns

1. **Server Actions**: Contact form uses Next.js server actions in `src/app/actions.js`:
   - Email validation via Emailable API
   - Sends emails through Resend API
   - Redirects on success to `/contact/thanks`

2. **Component Structure**: 
   - Components use JSX (not TypeScript)
   - Animation components wrap content with Framer Motion
   - Tailwind utilities for styling with custom theme extensions

3. **Styling Approach**:
   - Tailwind CSS with custom configuration
   - Extended border radius: `4xl` (2.5rem)
   - Custom font scale from `xs` to `7xl`
   - Dark theme with `bg-neutral-950` base

4. **Routing**: Standard Next.js App Router file-based routing

5. **Environment Variables Required**:
   - `RESEND_API_KEY` - For email sending
   - `EMAILABLE` - For email validation

## Important Notes

- No TypeScript configuration - project uses JavaScript/JSX
- Path alias configured: `@/*` maps to `./src/*`
- ESLint extends `next/core-web-vitals`
- Experimental component caching enabled in Next.js config
- Multiple package managers supported (npm, pnpm, bun)