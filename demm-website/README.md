# DEMM Website

Marketing site for DEMM OS — the AI marketing operating system from **DEMM LLC**.

Live at **www.demmmarketing.com** (deployed via Vercel from this repo).

## Stack
- Next.js 14 App Router
- React 18
- TypeScript
- Tailwind CSS
- Playfair Display + Inter (Google Fonts via `next/font`)
- lucide-react icons
- Vercel Edge geolocation for dynamic city personalization

## Pages
- `/` — Home (server component, reads Vercel geo headers → passes to `HomeClient.tsx`)
- `/privacy` — A2P 10DLC / TCPA-compliant Privacy Policy
- `/terms` — Terms of Service with SMS messaging clauses

## Local Development
```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deployment
Pushes to `main` auto-deploy via Vercel.

**Vercel Project Settings (important):** Root Directory must be set to `demm-website/` since
the Next.js app lives in a nested folder of this repo.

## Brand Reference
See the global **DEMM Brand & Asset Library** doc for type system, colors, voice, and asset specs.
