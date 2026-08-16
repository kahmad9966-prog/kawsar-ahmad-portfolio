# Kawsar Ahmad — Portfolio

A single-viewport, scene-based portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS, Framer Motion, and Firebase Authentication.

## Quick start

```bash
npm install
cp .env.example .env.local   # then fill in your keys — see below
npm run dev
```

Open http://localhost:3000. The site runs and looks complete **even with an empty `.env.local`** — auth and email notifications degrade gracefully with clear in-app messaging instead of crashing (see "What's stubbed" below).

## Project structure

```
app/                  routes, layout, global styles, API routes
  api/register/        server-side email notification on signup
  api/contact/          server-side email delivery for contact form
components/
  scenes/               one component per scene (Hero, About, Skills, …)
firebase/config.ts     Firebase client SDK init
hooks/                  useAuth, useSceneController
lib/content.ts          all editable copy, skills, projects, testimonials, etc.
lib/scenes.ts           scene order + which scenes require login
```

## Editing content

Everything text-based — your name, roles, skills, project cards, testimonials,
achievements, contact links — lives in **`lib/content.ts`**. Swap placeholder
project images (currently Unsplash URLs) for your own screenshots there; the
carousel, layout, and animations don't need to change.

## Environment variables

See `.env.example` for the full list. Two groups:

**Firebase (client-safe, `NEXT_PUBLIC_*`)** — from Firebase Console →
Project Settings → General → Your apps. Enable **Email/Password** sign-in
under Authentication → Sign-in method.

**Server-only secrets** (`RESEND_API_KEY`, `OWNER_EMAIL`, `NOTIFY_FROM_EMAIL`)
— used only inside `app/api/register` and `app/api/contact`, which run
server-side, so these never reach the browser. The example wires up
[Resend](https://resend.com); swap the `fetch` call for your own provider
(SendGrid, Postmark, nodemailer + SMTP, etc.) if you prefer.

## What's stubbed and needs your input

This spec asked for a genuinely enormous feature set (Firebase auth gating,
server-side email delivery, full 3D coverflow, physics-driven bubble field,
custom cursor, etc.) — all of that is implemented and functional, but two
things specifically need your own credentials to go live:

1. **Firebase project** — without real keys in `.env.local`, the login/signup
   modal shows an inline notice instead of authenticating. Once configured,
   it just works.
2. **Outbound email** — without `RESEND_API_KEY`, new-signup and contact-form
   submissions are logged to the server console instead of emailed. This
   keeps local development working end-to-end without requiring you to set
   up an email provider first.

Everything else (scene transitions, glass design system, coverflow, carousel,
counters, bubble field, custom cursor, responsive/touch behavior, SEO
metadata) is fully implemented and doesn't require additional setup.

## Deploying to Vercel

1. Push this repo to GitHub.
2. Import it in Vercel.
3. Add the same environment variables from `.env.local` in Vercel's Project
   Settings → Environment Variables.
4. Deploy — no build configuration needed.

## Notes on scope decisions

- **Three.js** was intentionally not used. Per the spec's own guidance
  ("use Three.js only where it genuinely improves the experience"), the
  skills coverflow and project carousel are built with CSS 3D transforms +
  Framer Motion, which is lighter and just as cinematic for this content.
- **Reduced motion** is respected globally via `prefers-reduced-motion`.
- **Mobile**: wheel/drag interactions are replaced with swipe gestures; the
  custom cursor auto-disables on touch devices; bubbles are sized up ~12%
  for visibility per the spec.
