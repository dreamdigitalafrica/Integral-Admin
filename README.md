# Integral Admin

Standalone React dashboard for Integral Holdings. Extracted from website release
`1fe6c05`; the corporate website remains in `dreamdigitalafrica/Integralholdings`.

## Run locally

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 8782
```

Open http://127.0.0.1:8782/admin. Without backend configuration, the clearly labelled
demo stores sample records in this browser only.

## Connected deployment

Import this repository into Vercel as a Vite project. Set these build variables:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

Use the existing Integral Supabase project. Never set a service-role key in Vite.
Add the deployed `/admin/settings` URL to Supabase Auth's redirect allowlist for
password recovery. Staff need an active `cms_staff` record in addition to Auth.
Do not rerun the initial schema against the connected project; see ADMIN-SETUP.md.

`npm run build` produces `dist/`. The root URL redirects to `/admin`.
Website links point to the existing corporate website; uploads use shared Supabase
Storage. This repository does not replace or redeploy the corporate website.

## Verification

With the local demo server running:

```sh
ADMIN_TEST_URL=http://127.0.0.1:8782 node scripts/test-admin.mjs
```

See ADMIN-SETUP.md for implemented features and remaining integration limitations.

The initial dependency audit reports five advisories (one moderate, four high).
Versions match the existing dashboard release; review `npm audit` and test upgrades
before treating this extraction as a security-hardened production release.
