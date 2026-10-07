---
name: nextjs-multi-design-system
description: >
  Build and debug multiple isolated design systems in a Next.js app: style-*
  body classes, cookie/localStorage sync, FOUC prevention, light/dark
  coexistence, SSR/hydration, iframe component previews, parent↔iframe theme
  sync, and design tokens. Use when switching themes flashes wrong styles,
  iframe previews ignore the picker, or docs and preview disagree.
---

# Next.js Multi Design System

Practical workflow for apps that ship **more than one Design System / visual
style** in a single Next.js surface (docs, marketing, component showcase).

This is **not** a basic light/dark theme toggle guide. It covers isolation of
multiple style systems (`style-*`), persistence across SSR, and preview iframes
that must match the parent picker.

### Scope

| | |
| --- | --- |
| **In scope** | Multi DS switching, tokens, FOUC, cookie/SSR, iframe preview sync, docs↔preview parity |
| **Out of scope** | Single-theme apps, generic CSS architecture, unrelated component APIs |

---

## When to use

* One Next.js app hosts several named Design Systems (e.g. Nova, Vega, Glass).
* Users switch DS without full reload and must not see the wrong tokens flash.
* Component / block previews render in an **iframe** and must follow the parent.
* Light/dark mode must coexist with a DS that has its own default appearance.

---

## Architecture (what usually works)

### 1) One active style class on a root element

Map each Design System id → a single CSS scope class on `body` (or a dedicated
root):

```text
default  → style-nova
comfort  → style-vega
glass    → style-glass
…
```

Tokens and variant utilities hang off that class (Tailwind `@custom-variant` /
`.style-*:…` selectors). Only **one** `style-*` class should be active.

### 2) Persist for SSR

* Cookie (readable on the server) + `localStorage` (client restore).
* Root layout reads cookie (or a proxy-forwarded header) and applies the matching
  `style-*` class in the **first HTML**.
* A **blocking inline script as the first child of `body`** re-syncs
  localStorage → cookie → `body.classList` before paint (FOUC guard).

Do not wait for React hydration to apply the style class.

### 3) Light / dark is orthogonal

* Theme mode (`light` / `dark` / `system`) lives on `html` (or `next-themes`).
* Design System lives on `body` as `style-*`.
* Some DS may default to dark when selected — stash the previous mode so the
  user can restore light without fighting the DS.

### 4) Preview = separate document

Iframe previews are a **new document**. They do not inherit React context.

Reliable patterns:

* Put the active style in the iframe URL: `/view/{styleName}/{item}?embed=1`
* Remount iframe when style changes (`key={styleName}`)
* Optionally pass style via query/cookie that the view route reads on SSR
* Do **not** assume `postMessage` alone is enough for first paint

---

## Agent workflow

### Inspect

* Find DS ids, cookie name, storage key, style class map.
* Check root layout: SSR class on `body` / `html`.
* Find bootstrap script (must run before first paint).
* Find preview surfaces: iframe `src`, `key`, embed routes.
* Note Turbopack/Webpack quirks if CSS for a DS is lazily imported.

### Diagnose

| Symptom | Likely cause |
| --- | --- |
| Flash of wrong DS on load | Cookie missing; bootstrap script after paint; SSR class wrong |
| Picker updates parent but not iframe | Iframe URL/key not tied to active style |
| Hydration mismatch warning | Server cookie ≠ client localStorage on first render |
| Tokens look mixed | Two `style-*` classes, or scoped CSS not loaded for that DS |
| Dark DS + light mode fight | Mode not stashed/restored when selecting dark-default DS |
| Docs page ≠ preview | Preview route uses different style source than docs shell |

### Plan

Emit a short brief before edits:

```markdown
## Pre-change brief
**Root cause:** …
**Evidence:** …
**Proposed fix:** …
**Files affected:** …
```

### Implement (minimal)

1. Single source of truth for id → `style-*` map.
2. Cookie + localStorage write on change; SSR read in layout.
3. Blocking bootstrap on `body` that strips other `style-*` then adds active.
4. Iframe `src` + `key` include active style name.
5. Ensure CSS for every DS is available where the preview document renders
   (eager ship for picker CSS beats lazy chunks that arrive after FOUC).

### Verify

* Hard reload: first paint already has correct `style-*`.
* Switch DS: parent and iframe match without full app reload.
* Toggle light/dark after selecting a dark-default DS.
* View page source / disable JS briefly: SSR class still correct from cookie.
* Compare a docs example and the same item in preview side-by-side.

---

## Component preview (included here)

Do **not** invent a separate skill for iframe preview when the hard part is
multi-DS sync. Preview checklist:

* Isolation: preview document loads its own CSS + `style-*`.
* Responsive: viewport width controlled by parent chrome, not by shrinking the
  whole app shell incorrectly.
* Embed mode: hide site chrome (`?embed=1`) so docs chrome ≠ preview chrome.
* Parity: same registry item, same style name, same tokens as the docs claim.

---

## Common failures

* Applying DS only in a client provider → FOUC.
* Putting `style-*` on a nested wrapper while tokens expect `body`.
* Lazy-importing DS CSS that is not present on the iframe route.
* Syncing via React context into an iframe (impossible across documents).
* Forcing `dark` on every boot for a DS that should respect user mode after
  first selection.
* Turbopack HMR leaving stale CSS modules after renaming a style id.

---

## Best practices

* Keep the id ↔ class map in one module shared by layout, picker, and bootstrap.
* Prefer cookie for SSR; localStorage as client preference mirror.
* Remount iframes on style change; do not mutate iframe DOM from parent.
* Treat preview routes as first-class pages with the same token CSS.
* Document which DS are dark-default and how mode restore works.

---

## Report

```markdown
## Multi-DS report
**Symptom:** …
**Root cause:** …
**Fix:** …
**SSR / FOUC:** pass | fail
**Iframe sync:** pass | fail
**Light/dark coexistence:** pass | fail
```
