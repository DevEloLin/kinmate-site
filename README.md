# KinMate — Marketing Site

The official marketing site for **KinMate**, a local-first health-record vault for every family,
everywhere. Keep lab reports, prescriptions, medications, metrics and pet records in one private
vault; understand them with bilingual AI; share with family only when you choose.

Built with **Next.js (App Router) + Tailwind CSS + next-intl + framer-motion**.
Bilingual: **English (default) and 中文**, with a one-tap language switcher.

## Live site

Published via GitHub Pages: https://develolin.github.io/kinmate-site/

## Develop

```bash
npm install
npm run dev        # http://localhost:3000  (redirects to /en)
```

- `npm run build` — production build
- `npm run typecheck` — TypeScript check
- `npm run lint` — ESLint

## Pages

Every page is available under both locales (`/en/...` and `/zh/...`); the root `/` redirects to `/en`.

| Path | Purpose |
|---|---|
| `/` | Home (landing) |
| `/features` | Feature overview |
| `/pricing` | Plan comparison (Free / Personal Plus / Family 3 / 5 / Family 8 founder offer) |
| `/byoc` | Bring-your-own-cloud backup |
| `/referral` | Referral rewards |
| `/download` | App Store / Google Play / GitHub APK |
| `/about` · `/contact` | About / contact |
| `/privacy` · `/terms` · `/delete-account` · `/ai-disclaimer` | Legal pages |

## Internationalization

- Messages live in `i18n/messages/{en,zh}.json`. **English is the default**; every route is locale-prefixed.
- Pricing copy mirrors the app paywall: `Family 3` and `Family 8` are marked as hot, and `Family 8` is shown as a lifetime founder offer at `$199.99` with `$399.99` as the original price.
- Both JSON files must keep keys in sync — next-intl flags missing keys at build time.
- The language switcher (`components/locale-switcher.tsx`) toggles English ↔ 中文.

## Project structure

```
app/[locale]/      Pages + locale layout (Navbar / Footer / i18n provider)
components/        Shared UI, framer-motion primitives, CSS app-screen mockups
i18n/              next-intl routing + message catalogs (en, zh)
public/            Static assets
```

## Deployment (GitHub Pages)

A GitHub Actions workflow (`.github/workflows/deploy-pages.yml`) runs on every push to `main`,
builds a static export, and commits it to `docs/`. GitHub Pages serves from `main` → `/docs`.

- `STATIC_EXPORT=1` enables Next.js static export (`output: 'export'`).
- `NEXT_PUBLIC_BASE_PATH` defaults to `/<repo>` for project pages. For a custom domain or root
  path, set the repository variable `SITE_BASE_PATH` to override (use a single space for the root).
- `data/release.json` is CI-managed and carries the latest app version plus GitHub Release APK URL for `/download`.

## Contact

All enquiries — support, privacy, press — go to **devs.applabs@gmail.com**.

No secrets are stored in this repo — only `.env.example` with public store URLs.
