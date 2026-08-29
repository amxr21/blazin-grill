# Deploying Blazin Grill to Hostinger (Coolify)

Static Vite + React SPA. No backend, no database — so none of the shared-MySQL
setup applies here.

## What's in the repo for this

| File | Purpose |
|---|---|
| `frontend/Dockerfile` | Two-stage build: Node builds, nginx serves. Only `dist/` ships. |
| `frontend/nginx.conf` | SPA fallback + cache headers. |
| `frontend/.dockerignore` | Keeps `node_modules`/`dist` out of the build context. |

## Coolify settings

Create the resource as **Application → Public/Private Repository**, then:

| Setting | Value |
|---|---|
| Build Pack | **Dockerfile** |
| Base Directory | **`/frontend`** |
| Dockerfile Location | `/frontend/Dockerfile` |
| Port | **80** |
| Branch | `main` |

**Base Directory is the one people miss.** The app lives in `frontend/`, not the
repo root. Leave it at `/` and the build fails with no `package.json` found.

There are **no environment variables** to set — nothing is read at build or
runtime. (If that changes, remember Vite inlines `VITE_*` at *build* time, so
they must be Build Variables and require a rebuild, not a restart.)

## Domain + SSL

1. Wildcard DNS `*` A-record → server IP covers this and every future subdomain.
2. Set the FQDN in Coolify (e.g. `https://blazin.yourdomain.com`).
3. Use `https://` in the field — that's what triggers Let's Encrypt via Traefik.
4. **No trailing slash.** A trailing slash in a Coolify domain field is a known
   cause of routing/cert oddities.

## Deploy

Push to `main` → Coolify builds and deploys. First build is the slow one
(cold npm cache); later builds reuse the `npm ci` layer unless deps change.

## Verify after deploy

Do not stop at the homepage loading — the SPA routes are the thing most likely
to break, and only on direct navigation:

- [ ] `/` loads
- [ ] **Open `/menu` directly in a new tab** (not by clicking a link) — must load,
      not 404. Same for `/locations` and `/us`. This is what `nginx.conf`'s
      `try_files` exists for; a 404 here means the config didn't apply.
- [ ] Favicon appears in the tab.
- [ ] Fonts render (no fallback serif).
- [ ] Padlock / valid cert.

## Notes on size

`dist/` is ~15 MB, dominated by a **6 MB hero `.mp4`** and ~13 MB of source
fonts, of which only two families (`Antonio`, `Stinger`) are ever applied —
the `Stinger Fit`/`Slim`/`Trial` faces are declared in `fonts.css` but unused.
This deploys fine as-is; it's a page-weight issue, not a blocker. See
"Optional cleanup" below.

## Resource cap

On a 4 GB box, cap the container so one app can't starve the others.
In Coolify → Advanced → set a memory limit (256 MB is generous for nginx).

## Optional cleanup (not required to deploy)

- Drop the unused `@font-face` blocks + their files → cuts ~10 MB.
- Compress/host the 6 MB `.mp4`, or load it lazily.
- Subset the fonts to the weights actually used.
