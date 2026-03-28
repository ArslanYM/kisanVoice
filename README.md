# KisanVoice

Voice-first agricultural intelligence for Kashmir’s farmers: tap the mic, ask in **Kashmiri**, **Hindi**, or **English**, and get live mandi context, NH44 logistics-aware tips, and a daily Intel briefing—without typing through complex portals.

## Demo video

https://github.com/user-attachments/assets/dd3e3bdc-c4d7-4c4b-9cfc-0d8d3fdc8244



---

## Stack

| Layer | Tech |
|-------|------|
| App | [Next.js 16](https://nextjs.org) (App Router), React 19, Tailwind CSS 4 |
| Backend | [Convex](https://convex.dev) (queries, mutations, real-time) |
| Auth | [Clerk](https://clerk.com) |
| Voice / search / reasoning | Configured in Convex actions (see repo env & Convex dashboard) |

## Prerequisites

- Node.js 20+ (see `.nvmrc` if present)
- A Convex project (`npx convex dev`)
- Clerk application keys for Next.js

## Local development

```bash
npm install
npx convex dev
```

In another terminal:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Useful scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Next.js dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Run production server locally |
| `npm run lint` | ESLint |

## Environment

Copy `.env.example` to `.env.local` if the repo provides one, then set Convex URL, Clerk keys, and any action secrets required by your deployment. Never commit real secrets.

## Theming

The app supports **light** and **dark** mode (toggle in the UI). Preference is stored in `localStorage` under `kisanvoice-theme`.

## Deploy

Deploy the Next.js app to [Vercel](https://vercel.com) (or your host of choice) and point Convex + Clerk to the production URLs.

## License

Private / all rights reserved unless otherwise specified by the repository owner.
