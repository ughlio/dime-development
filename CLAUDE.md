# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

# Dime Development

Basketball coaching & mentoring website for **Coach Daniel Maxwell**, brand name **Dime Development**.

**Company info (UK):**
- Location: London, United Kingdom
- Companies House registration no.: **15690433**
- UK Companies Act 2006 s.82 requires company number + registered office + place of registration on the website — these live in the footer.
- Pricing is in **GBP (£)**, not USD. Copy uses UK English.

## Stack

- **Next.js 16** (App Router, `src/` dir)
- **React 19**
- **Tailwind v4** — theme tokens live in `src/app/globals.css` under `@theme inline`, NOT in `tailwind.config.ts`. Don't create that file.
- **TypeScript 5** — strict mode, path alias `@/*` → `./src/*`
- **Resend** for transactional email (`src/lib/email.ts`)

## Commands

```
npm run dev      # dev server at http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

No test runner is configured.

## Architecture

### Pages & Routes

Six public pages under `src/app/`:

| Route | File |
|---|---|
| `/` | `page.tsx` — Hero, stats, services preview |
| `/services` | `services/page.tsx` |
| `/about` | `about/page.tsx` |
| `/booking` | `booking/page.tsx` — posts to `/api/booking` |
| `/contact` | `contact/page.tsx` — posts to `/api/contact` |
| `/media` | `media/page.tsx` — photo gallery |
| `/shop` | `shop/page.tsx` — catalog only (Phase 1) |

Root layout (`src/app/layout.tsx`) mounts `Navbar`, `Footer`, and `ScrollReveal` globally. Fonts loaded here: Bebas Neue → `--font-display`, Inter → `--font-body`.

### API Routes

Both routes in `src/app/api/` validate inputs, escape HTML via `escapeHtml()`, then call `sendEmail()`:

- `POST /api/booking` — fields: `sessionType`, `name`, `email`, `phone`, `preferredDate`, `notes`
- `POST /api/contact` — fields: `name`, `email`, `subject`, `message`

Both return `{ ok: true }` or `{ ok: false, error: string }`.

### Email (`src/lib/email.ts`)

`sendEmail()` requires env vars:
- `RESEND_API_KEY`
- `COACH_EMAIL` (recipient, set to `Dimedevelopment@hotmail.com`)
- `RESEND_FROM` (optional sender; defaults to `onboarding@resend.dev`)

### Media (`src/data/media.ts`)

Centralised array of 9 media items, each typed with `src`, `alt`, `source` (`"instagram" | "upload"`), and `objectPosition`. Instagram images live in `public/media/instagram/`, uploads in `public/media/uploads/`. The `MediaGrid` component consumes this array.

### Shared Components (`src/components/`)

- `Navbar.tsx` — client component, fixed, scroll-aware, mobile menu
- `Footer.tsx` — legal info (company number, registered office)
- `MediaGrid.tsx` — gallery grid using the media data array
- `ScrollReveal.tsx` — wraps children with intersection-observer animations

## Brand & Styling

**Colors (Tailwind theme tokens):**

| Token | Value | Use |
|---|---|---|
| `ink` | `#080808` | Page background |
| `ink-2` | `#111111` | Card background |
| `ink-3` | `#1a1a1a` | Elevated surface |
| `line` | `#222222` | Borders/grid |
| `bone` | `#f0f0f0` | Primary text |
| `mute` | `#666666` | Secondary text |
| `brand` | `#39ff14` | Electric green accent |
| `brand-2` | `#2bd80a` | Hover state |

**Rules:**
- Sharp edges everywhere — **never use `rounded-*`**
- Headlines: `font-display uppercase tracking-tight`
- CTAs use `.btn-brand` (green bg, black text, hover lifts)

**Custom utility classes defined in `globals.css`:**

- `.btn-brand`, `.btn-ghost` — CTA and outlined buttons
- `.eyebrow` — Section label with leading line
- `.lead` — Muted body text
- `.field` — Form input styling
- `.nav-pill` — Service quick-nav pill
- `.footer-link` — Footer link
- `.noise` — Grain texture overlay
- `.scan-line` — Decorative green horizontal line
- `.clip-bottom`, `.clip-top` — Diagonal clip-path dividers
- `.anim-fade-up`, `.anim-fade-in`, `.anim-line`, `.anim-flicker` — Scroll animations
- `.delay-1` … `.delay-5` — Animation delay steps
- `.ghost-drift` — Floating keyframe animation

## Roadmap

- **Phase 1 (current):** All pages with placeholder content. Booking + Contact send email via Resend. Shop is catalog-only.
- **Phase 2:** Real booking calendar + Stripe payments.
- **Phase 3:** Shop checkout.
