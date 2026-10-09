# dayring.f-90.co.uk

Marketing site for [Dayring](https://github.com/utopastac/counter-ios), hosted as a subdomain of f-90.

## Stack

- Vite + React 19 + TypeScript
- CSS Modules with native nesting + PostCSS mixins
- GitHub Pages (`docs/` output, custom domain `dayring.f-90.co.uk`)

## Setup

```sh
npm install
npm run dev
```

## Build / deploy

```sh
npm run build
```

Push `docs/` (or enable GitHub Pages from the `docs` folder on `main`). DNS: CNAME `dayring` → `utopastac.github.io` (or this repo’s Pages hostname), and keep `public/CNAME` as `dayring.f-90.co.uk`.

App Store listing URLs:

- Support: `https://dayring.f-90.co.uk/support`
- Privacy Policy: `https://dayring.f-90.co.uk/privacy`

## Conventions

- One folder per component: `index.tsx` + `index.module.css`
- Only the root element uses a CSS module class; nest everything else
- Colors / type / spacing via CSS variables in `src/index.css` and `src/styles/`

## Interactive app demo

`src/numo/` is a self-contained React recreation of the iOS UI (exact spacing / radius / type / palette tokens from `counter-ios`). It is not mounted on the marketing page yet — the Hero uses a static screenshot. Import `<NumoApp />` from `@/numo` when you want to wire it up.
