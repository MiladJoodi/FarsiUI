---
name: open-graph-social-preview
description: >
  Implement and debug Open Graph / Twitter (X) / Telegram / WhatsApp / LinkedIn /
  Discord / Facebook link previews. Use when adding social share metadata, or when
  og:image is missing, broken (500), cropped, cached wrong on X, or Persian text
  breaks in dynamic OG images on a Next.js (or any) site. Decide from evidence;
  do not blindly run checklists.
---

# Open Graph & Social Link Previews

Practical guide for coding agents shipping share cards that work on Facebook, X,
LinkedIn, WhatsApp, Telegram, and Discord.

Goal: reliable title + description + image that crawlers fetch without JS,
without auth, and without platform-cache traps.

### Scope & version

| | |
| --- | --- |
| **Skill version** | `1.0.0` |
| **In scope** | **Implementation** of OG/Twitter metadata and share images; **debugging** broken or stale social previews |
| **Out of scope** | General SEO, rankings, sitemaps, content strategy, unrelated marketing |

**How to use this skill:** Checklists and tables are **aids**, not a script. The agent must **gather evidence**, form a hypothesis, and choose a fix. Skipping diagnosis to “run every step” is incorrect. Skipping evidence to rip out working dynamic OG is also incorrect.

---

## 0. Agent Workflow (mandatory)

Never jump to “replace with static PNG.” Follow this order:

### 1) Inspect
- Find how OG is implemented: `metadata` / `generateMetadata`, `metadataBase`,
  `opengraph-image.*`, `twitter-image.*`, `/og` routes, `siteConfig.ogImage`,
  public assets.
- Note hosting (Vercel / Cloudflare / Docker / other / local-only).
- Note whether current cards are static, dynamic (`ImageResponse`), or mixed.

### 2) Diagnose
- Confirm live HTML tags (`og:*`, `twitter:*`).
- Fetch the live image URL (status, redirects, Content-Type, size, timing).
- Identify environment (local OK vs prod fail).
- Check cache layer (browser / CDN / crawler / X).
- Check origin consistency (no `localhost`, HTTP, wrong preview domain).

### 3) Plan (before any edits)
- Emit the **Pre-change brief** below (required).
- Choose Static vs Dynamic with the decision tree using that evidence.
- List files to change and what not to touch.

### 4) Fix
- Minimal change that addresses the stated root cause.
- Do not rip out working dynamic OG without a reason tied to evidence.

### 5) Verify
- Live production URL when possible (not only local).
- Page source + direct image request + dimensions + checker/platform smoke.

### 6) Report
- Use the Agent Report format at the end of this skill.

### Pre-change brief (required before edits)

Output this block **before** modifying files. If evidence is insufficient, gather more first—do not invent a cause.

```markdown
## Pre-change brief

**Root cause:** … (one clear hypothesis)
**Evidence:** … (commands, URLs, status codes, HTML snippets, local vs prod)
**Proposed fix:** … (minimal approach; static vs dynamic choice + why)
**Files affected:** …
```

### Cross-platform code search

`rg` (ripgrep) is optional. Prefer this order:

```bash
# 1) ripgrep if installed
rg -n "openGraph|twitter:|ogImage|opengraph-image|twitter-image|ImageResponse|metadataBase" app lib src 2>/dev/null

# 2) git grep (works in most repos)
git grep -n -E "openGraph|twitter:|ogImage|opengraph-image|twitter-image|ImageResponse|metadataBase" -- app lib src 2>/dev/null

# 3) POSIX grep fallback
grep -R -n -E "openGraph|ogImage|opengraph-image|ImageResponse|metadataBase" app lib src 2>/dev/null
```

Windows PowerShell (if bash tools unavailable):

```powershell
Get-ChildItem -Recurse -Include *.ts,*.tsx,*.js,*.jsx app,lib,src -ErrorAction SilentlyContinue |
  Select-String -Pattern "openGraph|ogImage|opengraph-image|ImageResponse|metadataBase"
```

---

## 1. When to use

- Adding/changing `og:*` / `twitter:*`
- Missing / broken / wrong share image
- Checker: `Image is invalid` / `Internal Server Error`
- Telegram OK, X empty (or reverse)
- Persian/Arabic issues in generated OG
- Choosing static PNG vs `opengraph-image.tsx` / `ImageResponse`

Out of scope: general SEO, sitemaps, rankings, content strategy.

---

## 2. Non‑negotiables

1. Crawlers do **not** run your client React bundle. Tags must be in initial HTML.
2. Image URL must be **absolute HTTPS**, publicly fetchable, return a real image.
3. Prefer fixing the **existing** approach if it is close to working.
4. Prefer **static** images when dynamic generation is broken, fragile, slow, or unnecessary.
5. Do **not** replace working dynamic infrastructure without a documented reason.
6. Code looking correct ≠ fixed. Verify live.

---

## 3. Decision tree: Static vs Dynamic

```
Is there an existing opengraph-image.* / ImageResponse / /og route?
├─ YES → Does it work in production (200, image/*, correct render)?
│        ├─ YES → Keep it unless product needs a simpler static card.
│        │        (Optional: harden fonts/assets/timeouts; don't rip out.)
│        └─ NO  → Prefer static PNG (or fix dynamic only if dynamic is required).
└─ NO  → Prefer static PNG in /public + metadata images.
```

### Prefer **static** when
- Dynamic route 404/500/timeouts
- Missing fonts/assets in deploy
- Crawlers fail while local works
- No need for per-page generated art
- Persian/Arabic shaping in Satori is wrong and redesigning fonts is costly
- You need maximum crawler reliability

### Prefer **dynamic** when
- It already works in production
- Per-route titles/descriptions must be baked into the image
- Brand requires programmatic cards
- Fonts + assets are proven in the target runtime
- Latency is acceptable for crawlers

### Never
- Delete a working `opengraph-image.tsx` “just because static is safer”
- Leave a **crashing** file-based OG route alongside good metadata (file route still gets hit)

---

## 4. Image specs

| Property | Recommendation |
| --- | --- |
| Aspect | **1.91:1** |
| Size | **1200×630** |
| Format | PNG or JPG |
| Weight | < 5 MB (aim < 1 MB) |
| Safe area | Keep logo/title away from edges |

Wrong aspect (e.g. 1920×1581) often still displays but may crop/letterbox.

Dedicated share file is best: `public/og.png` or `public/.../og-1200x630.png`.

---

## 5. Required tags

```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://example.com/" />
<meta property="og:title" content="Title" />
<meta property="og:description" content="Description" />
<meta property="og:image" content="https://example.com/og.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:locale" content="fa_IR" />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Title" />
<meta name="twitter:description" content="Description" />
<meta name="twitter:image" content="https://example.com/og.png" />
```

Rules:
- `twitter:card` = `summary_large_image` for large cards
- Absolute HTTPS image URLs in production
- X falls back to `og:*` when Twitter image tags are incomplete; still set both

---

## 6. Next.js App Router (15/16) guidance

Applies to App Router Metadata API in Next.js 15 and 16.

### Building blocks
| Piece | Role |
| --- | --- |
| `metadataBase` | Resolves relative image/canonical URLs to absolute |
| `openGraph.images` | Declares OG images in Metadata API |
| `twitter.images` | Declares Twitter images |
| `generateMetadata` | Per-route/dynamic metadata (often `async`) |
| `app/opengraph-image.tsx` (or `.png/.jpg`) | File-based OG image convention |
| `app/twitter-image.tsx` (or static) | File-based Twitter image |
| Nested `layout.tsx` / `page.tsx` metadata | Route overrides |

### Precedence / conflicts (practical)
1. **File-based** `opengraph-image.*` / `twitter-image.*` in the matching segment are served as that segment’s OG/Twitter image endpoints and are linked from metadata automatically.
2. Explicit `openGraph.images` / `twitter.images` in Metadata API also emit tags.
3. If **both** exist, crawlers may see multiple images or hit the file route URL. A **broken** `opengraph-image.tsx` (500) will fail even if Metadata points at a good static file—crawlers often request the convention URL.
4. Nested routes override/merge with parents via Next metadata rules; a child `generateMetadata` can replace images for that path.
5. Wrong `metadataBase` (localhost / preview host) produces wrong absolute `og:image` / `og:url` in production HTML.

### `metadataBase`: prefer a fixed production origin

**Default (recommended):** set `metadataBase` from a stable production URL such as `NEXT_PUBLIC_APP_URL` / `siteConfig.url`.

```ts
metadataBase: new URL(
  process.env.NEXT_PUBLIC_APP_URL ?? "https://example.com"
)
```

Why not always derive host from `headers()`?

- Behind **Proxy/CDN**, `x-forwarded-host` / `host` can be wrong, duplicated, or internal.
- Preview / middleware hosts can leak into absolute `og:image` and `og:url`.
- Social crawlers then cache the **wrong origin**.

**Use request-derived host only when you truly need it**, for example:

- Multi-tenant sites where each host must emit its own absolute URLs
- Local/preview tooling where you deliberately want the current request host

Even then: validate allowlists, prefer `x-forwarded-host` carefully, and never ship `localhost` in production HTML.

### Example A — Root metadata with fixed production origin (Next 15/16)

```tsx
// app/layout.tsx
import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://example.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Example", template: "%s · Example" },
  description: "…",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: siteUrl,
    siteName: "Example",
    title: "Example",
    description: "…",
    images: [
      {
        url: "/og.png", // public/og.png → absolute via metadataBase
        width: 1200,
        height: 630,
        alt: "Example",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Example",
    description: "…",
    images: ["/og.png"],
  },
}
```

Put the file at `public/og.png`. If a crashing `app/opengraph-image.tsx` exists, remove or fix it so it cannot 500.

### Example A2 — Request-derived host (only when required)

```tsx
import type { Metadata } from "next"
import { headers } from "next/headers"

const FALLBACK = process.env.NEXT_PUBLIC_APP_URL ?? "https://example.com"
const ALLOWED = new Set(["example.com", "www.example.com"])

export async function generateMetadata(): Promise<Metadata> {
  const h = await headers()
  const raw =
    h.get("x-forwarded-host")?.split(",")[0]?.trim() ||
    h.get("host")?.trim() ||
    ""
  const host = ALLOWED.has(raw) ? raw : new URL(FALLBACK).host
  const proto =
    h.get("x-forwarded-proto")?.split(",")[0]?.trim() || "https"
  const metadataBase = new URL(`${proto}://${host}`)

  return {
    metadataBase,
    openGraph: {
      url: metadataBase.origin,
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      images: ["/og.png"],
    },
  }
}
```

### Example B — Route `generateMetadata` override (params as Promise — Next 15+)

```tsx
// app/docs/[slug]/page.tsx
import type { Metadata } from "next"

type Props = { params: Promise<{ slug: string }> }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const title = `Docs · ${slug}`
  const description = "…"

  return {
    title,
    description,
    alternates: { canonical: `/docs/${slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      images: [{ url: "/og.png", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
  }
}
```

### Example C — Keep a working dynamic file convention

```tsx
// app/opengraph-image.tsx
import { ImageResponse } from "next/og"

export const runtime = "nodejs"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"
export const alt = "Example"

export default async function Image() {
  // Prefer bundled fonts/assets that exist in production.
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#09090b",
          color: "white",
          fontSize: 64,
        }}
      >
        Example
      </div>
    ),
    { ...size }
  )
}
```

Only keep this if `/opengraph-image` returns `200` + `image/png` in **production** and text renders correctly.

### Example D — Conflict to avoid

```text
app/opengraph-image.tsx  → 500 (missing font)
layout metadata images   → /og.png (fine)

Result: crawlers still often fail on the convention URL / broken generation.
```

Fix the file route **or** remove it and rely on Metadata + `public/og.png` — do not leave both fighting.

### Inspect before changing

Use the cross-platform search commands in §0.

---

## 7. Live image URL diagnostics

Target the exact URL from HTML (`og:image` / `twitter:image`).

### curl (adjust URL)
```bash
curl -sI -L --max-redirs 10 "https://example.com/og.png"
curl -sI -L "https://example.com/opengraph-image"
curl -sL -o /tmp/og-out --write-out "http=%{http_code} type=%{content_type} size=%{size_download} time=%{time_total} final=%{url_effective}\n" "https://example.com/og.png"
file /tmp/og-out
```

Windows (PowerShell):

```powershell
Invoke-WebRequest -Uri "https://example.com/og.png" -Method Head -MaximumRedirection 10 |
  Select-Object StatusCode, Headers
```

### Verify
| Check | Expect |
| --- | --- |
| HTTP status | Final **200** (after redirects) |
| Redirect chain | No login/HTML interstitial |
| Final URL | Production HTTPS origin |
| Content-Type | `image/png`, `image/jpeg`, or `image/webp` |
| Body | Real image bytes (`file` says PNG/JPEG…) — not HTML |
| Size | > ~1KB; < 5MB |
| Time | Prefer fast (< ~2–3s); slow responses get dropped by crawlers |
| Auth | No cookie/login required |
| Middleware/WAF | Bot UA not blocked |
| robots | Image/HTML not disallowed for crawlers that respect robots |

### Red flags
- `200` + `text/html` → login page / error page / SPA shell
- `302/301` → `/login` or marketing HTML
- `500` on `/opengraph-image` → runtime exception / missing asset / font
- Empty or tiny body → malformed generation

---

## 8. Environment-aware debugging

Identify host early (Vercel dashboard, `Dockerfile`, Cloudflare, `next start` only…).

| Environment | Common prod-only failures |
| --- | --- |
| Vercel | Missing files outside traced output; edge vs node runtime; cold start; env URL mismatch |
| Cloudflare | CDN cache of old image/HTML; WAF bot challenges; redirect rules |
| Docker | Different `WORKDIR` / `process.cwd()`; fonts not copied into image |
| Preview deploys | `og:url`/`og:image` pointing at preview host leaked to prod metadata |
| Local only | Works via local FS; fails when fonts/assets not in deploy |

Dynamic OG checklist in prod:
- Font paths use deploy-safe locations (prefer `import`/`fetch` of bundled assets over brittle `process.cwd()` guesses)
- Runtime compatible (`nodejs` vs `edge` — `fs` needs node)
- All referenced PNGs/TTFs exist in the deployment
- No reliance on localhost absolute URLs

---

## 9. Cache debugging

Layers:
1. **Browser** cache
2. **CDN** cache (Cloudflare/Vercel)
3. **Platform crawler** cache (Facebook/LinkedIn scrapers)
4. **X cache** (aggressive; keyed by exact URL)

Facts:
- Fixing metadata/code does **not** refresh an already-cached preview for the **same** URL.
- X often keeps a failed “no image” card for that exact string.
- Telegram / many checkers scrape fresher than X.

Busting:
| Method | Use |
| --- | --- |
| Query string `?v=2` | Fast test for X/Telegram |
| New path | Stronger bust |
| New image **filename** | Bust CDN/image URL caches when bytes changed at same logical asset |
| Platform debugger “rescrape” | Facebook/LinkedIn official tools |

X: standalone Card Validator preview is retired; **composer draft preview** is ground truth.

---

## 10. Trusted checkers & platform tools

Use official tools first; third-party only as a quick second opinion.

| Tool | URL | Notes |
| --- | --- | --- |
| **Facebook Sharing Debugger** | https://developers.facebook.com/tools/debug/ | Official rescrape for Facebook/IG-family previews |
| **LinkedIn Post Inspector** | https://www.linkedin.com/post-inspector/ | Official LinkedIn rescrape |
| **X / Twitter** | Tweet **composer** draft with the URL | No reliable public validator; cache is URL-keyed |
| Telegram | Paste into a Saved Messages / chat | Good fresh-scrape smoke test |
| Optional: Open Graph preview | https://www.opengraph.xyz/ | Unofficial; useful after the image URL itself is healthy |

Do not treat unofficial checkers as more authoritative than: (1) raw HTML tags, (2) direct image `curl`, (3) official platform debuggers / composer.

---

## 11. URL / canonical consistency

On the live production HTML, confirm same production origin for:
- page URL
- canonical
- `og:url`
- `og:image`
- `twitter:image`

Reject:
- `http://`
- `localhost` / `127.0.0.1`
- accidental preview deployment host
- wrong domain / staging

Fix `metadataBase` (prefer fixed `NEXT_PUBLIC_APP_URL`), `siteConfig.url`, and any hardcoded origins.

---

## 12. Crawler safety

Crawlers must fetch **initial HTML**, **OG image**, and **redirects** without:
- JavaScript execution
- authentication / cookies
- client-only meta injection
- interactive challenges aimed at humans
- unbounded server work

Keep image/metadata endpoints fast and deterministic. Avoid long ImageResponse work on cold starts when crawlers are the audience.

---

## 13. Persian / Arabic OG text

Satori / `next/og` frequently fails at **glyph joining** (letters look disconnected).

Do **not** auto-switch to static PNG solely because the site is Persian.

Inspect:
- Font files actually loaded in the OG route
- Format (TTF/OTF supported by the renderer)
- Font present in **production** bundle
- RTL / direction handling
- Shaping result on the **production** PNG (open the image URL)
- Punctuation and digits (Persian vs Latin)

If production PNG shows correct joined Persian → dynamic can stay.  
If disconnected / missing glyphs and fixing fonts is hard → static designed PNG is the reliable fix.

---

## 14. Failure → cause → fix

| Symptom | Cause | Fix |
| --- | --- | --- |
| No image tags | Missing metadata | Add `openGraph`/`twitter` images |
| Tags present, image 404 | Wrong path | Fix public path / filename |
| Image 500 | Dynamic crash / missing font/asset | Fix route or switch to static |
| 200 but HTML body | Middleware/login/error HTML | Exclude OG routes; allow public GET |
| 200 wrong Content-Type | Misconfigured route | Return `image/*` |
| Redirect to login | Auth middleware | Bypass for OG image + HTML GET for bots if needed |
| Local OK, prod fail | cwd/fonts/assets/runtime | Bundle assets; node runtime; static fallback |
| localhost in tags | Bad metadataBase/url | Fixed production origin |
| Wrong host behind CDN | Request-derived metadataBase | Prefer `NEXT_PUBLIC_APP_URL` |
| Telegram OK, X empty | X cache | New URL `?v=N`; don't expect old posts to update |
| Cropped card | Bad aspect ratio | Export 1200×630 |
| Disconnected Persian | Satori shaping/fonts | Fix fonts or static PNG |
| Duplicate/conflicting images | Metadata + file convention | Align or remove broken file route |
| Nested route wrong card | Child metadata override | Fix route `generateMetadata` |
| Empty/malformed image | Generator bug | Regenerate; verify with `file` |
| Stale image bytes | CDN cache | New filename or cache purge |
| Edge runtime + `fs` | Incompatible | `export const runtime = "nodejs"` or avoid `fs` |

---

## 15. Debug playbook (short)

1. View-source / fetch HTML: tags present? absolute HTTPS?
2. Fetch image URL: status, type, bytes, time
3. Identify static vs dynamic vs conflict
4. Check origin consistency
5. Check host-specific issues
6. Plan fix (decision tree)
7. Apply minimal fix
8. Verify live
9. If X still stale → bust URL and retest composer
10. Report

---

## 16. Verification checklist (after every fix)

Do not claim fixed until checked:

- [ ] Production HTML contains correct `og:*` / `twitter:*`
- [ ] `og:image` / `twitter:image` final URL = 200 + `image/*`
- [ ] Body is a valid image; dimensions sane (prefer ~1200×630)
- [ ] No localhost/preview/HTTP in tags
- [ ] Facebook Debugger and/or LinkedIn Inspector when those platforms matter
- [ ] Telegram or X composer smoke OK
- [ ] X composer OK on a **fresh** URL if prior URL was poisoned
- [ ] Noted whether old URLs still need cache expiry

---

## 17. Agent Report format

```markdown
## OG / Social preview report

**Root cause:** …
**Files changed:** …
**What changed:** …
**Why it works:** …
**Verification:**
- HTML tags: …
- Image URL status/type/size/time: …
- Dimensions: …
- Checker/platform: …
**Remaining limitations:** …
**Cache busting required?** yes/no — recommended URL if yes: …
```

---

## 18. What not to do

- Run this skill as a blind checklist without evidence
- Edit files before emitting the Pre-change brief
- Replace working dynamic OG without cause
- Leave a crashing `opengraph-image.tsx` in place
- Assume code review equals production success
- Assume X updates old posts after a fix
- Publish localhost/preview origins in OG tags
- Prefer request-derived `metadataBase` by default behind Proxy/CDN
- Treat unofficial OG sites as more authoritative than curl + official debuggers
- Treat this skill as general SEO
