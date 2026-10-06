# AGENTS.md

## Project overview

Personal portfolio site for Ashu (front-end developer). Built with Next.js 14 App Router, React 18, TypeScript, and Tailwind CSS. Heavy use of animation libraries (GSAP, Framer Motion, Lenis smooth scroll).

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — run ESLint (`next lint`)

## Architecture & conventions

- **Path alias**: `@/*` maps to project root (e.g. `import { cn } from "@/lib/utils"`).
- **App routes** live in `app/`: `app/page.tsx` (home), `app/about/`, `app/projects/`. All pages are client components (`"use client"`).
- **Reusable components** live in `components/` grouped by feature:
  - `components/ui/` — shadcn-style primitives (`button.tsx`, `particles.tsx`, `border-beam.tsx`, `image-swiper.tsx`, `animated-tooltip.tsx`, etc.)
  - `components/navbar/`, `components/cursor/`, `components/theme/`, `components/background/`
- **Data** is centralized:
  - `data.ts` — skills, social links, projects, experience
  - `config/site-config.ts` — site metadata, author info, links, intro text
  - `constants.ts` — shared constants (e.g. `SKILLS_BASE_PATH` for tech icon assets)
- **Styling**: Tailwind with shadcn-style CSS variables (`hsl(var(--...))`) defined in `app/globals.css`. Dark mode via `next-themes` using the `class` strategy, defaulting to dark.
- **Animation pattern**: GSAP via `@gsap/react` `useGSAP` hook + `SplitType` for text reveals; smooth scrolling comes from the single Lenis instance mounted app-wide in `components/smooth-scroll/`, which drives `ScrollTrigger.update` from the GSAP ticker — never instantiate `Lenis` inside a page. Register plugins with `gsap.registerPlugin(...)`.

## Conventions

- Use `cn()` from `@/lib/utils` for merging Tailwind classes.
- Build UI primitives with the existing stack (Radix, `class-variance-authority`, `clsx`, `tailwind-merge`) — don't introduce new styling utilities.
- Icons: lucide-react, @tabler/icons-react, and @ant-design/icons are all used. Match the library already used in the file you're editing.
- Keep content (text, links, project data) in `data.ts` / `config/site-config.ts`, not hardcoded in components.
- Run `npm run lint` after making changes.