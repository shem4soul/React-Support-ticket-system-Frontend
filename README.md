# Support Ticket System — Public Ticket Form

React + Vite + Tailwind. A public, no-login-required form for submitting a support
ticket.

**Live:** https://supportticketproject.netlify.app

## What this is

A single-page form (name, email, subject, description, priority) that submits to the
backend API and shows a ticket confirmation ("stub") with a ticket number on success.
No account or login involved — anyone with the link can use it.

Talks to the backend API here: https://backend-support-ticket-system.onrender.com

## Local setup

```bash
cp .env.example .env   # set VITE_API_URL — see below
npm install
npm run dev              # usually http://localhost:5173 or :5174
```

### Environment variables
VITE_API_URL=https://backend-support-ticket-system.onrender.com/api

For local backend testing instead, use `http://localhost:5000/api`.

> Vite bakes `VITE_API_URL` into the built files at **build time**, not runtime —
> changing it requires a fresh `npm run build` (or a new deploy) to take effect.

## Build

```bash
npm run build     # outputs to dist/
```

## Deploying (Netlify)

1. New site on Netlify, connect this repo
2. Build command: `npm run build` · Publish directory: `dist`
3. Environment variable: `VITE_API_URL=https://backend-support-ticket-system.onrender.com/api`
4. Deploy

After deploying, make sure this site's URL is added to `CORS_ORIGIN` on the backend
(Render), with no trailing slash — otherwise ticket submissions will fail with a CORS
error in the browser console.
