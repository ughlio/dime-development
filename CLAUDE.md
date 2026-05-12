@AGENTS.md

# Dime Development

Basketball coaching & mentoring website for **Coach Daniel Maxwell**, brand name **Dime Development**.

**Company info (UK):**
- Location: London, United Kingdom
- Companies House registration no.: **15690433**
- UK Companies Act 2006 s.82 requires company number + registered office + place of registration to appear on the website — these live in the footer.
- Pricing is in **GBP (£)**, not USD. Copy uses UK English where it shows on the site.

## Stack

- **Next.js 16** (App Router, src/ dir)
- **React 19**
- **Tailwind v4** — theme tokens live in `src/app/globals.css` under `@theme inline`, NOT in a `tailwind.config.ts`. Don't create that file.
- **TypeScript 5**
- **Resend** (planned) for email forms

## Commands

```
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run lint     # eslint
```

## Brand

- **Colors:** black `#0a0a0a` background, electric green `#39FF14` accent, white text
- **Vibe:** Bold & athletic. Sharp edges (zero `rounded-*` classes). Heavy uppercase display headlines. High-energy.
- **Fonts:** Bebas Neue (display) + Inter (body)

## Site Structure

6 pages: `/` (Home), `/services`, `/about`, `/booking`, `/shop`, `/contact`.

Phase 1 (current): All pages live with placeholder content. Booking + Contact send email via Resend. Shop is catalog-only.
Phase 2: Real booking calendar + Stripe payments.
Phase 3: Real shop checkout.

## Conventions

- Sharp edges everywhere — never use `rounded-*` Tailwind classes
- Headlines: UPPERCASE, tight tracking, Bebas Neue
- CTAs: green background, black text, hover scales up slightly
- Pages live in `src/app/<route>/page.tsx`
- Shared components in `src/components/`
- API routes in `src/app/api/<name>/route.ts`
