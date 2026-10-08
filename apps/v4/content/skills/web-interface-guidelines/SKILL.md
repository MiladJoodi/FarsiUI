---
name: web-interface-guidelines
description: >
  Concise rules for building accessible, fast, delightful web UIs. Use when
  reviewing or implementing interfaces, forms, focus, animation, layout,
  performance, or dark mode — guided by MUST / SHOULD / NEVER decisions.
---

# Web Interface Guidelines

Concise rules for building accessible, fast, delightful UIs. Use MUST / SHOULD /
NEVER to guide decisions.

## Interactions

### Keyboard

- MUST: Full keyboard support per [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns/)
- MUST: Visible, unobscured focus rings (`:focus-visible`; group with `:focus-within`)
- MUST: Manage focus (trap, move, return) per APG patterns
- NEVER: `outline: none` without visible focus replacement

### Targets & Input

- MUST: Hit target ≥24px (mobile ≥44px); if visual is smaller, expand hit area
- MUST: Mobile input font-size ≥16px to prevent iOS zoom
- NEVER: Disable browser zoom (`user-scalable=no`, `maximum-scale=1`)
- MUST: `touch-action: manipulation` to prevent double-tap zoom

### Forms

- MUST: Hydration-safe inputs (no lost focus/value)
- NEVER: Block paste in inputs/textareas
- MUST: Loading buttons show spinner and keep original label
- MUST: Keep submit enabled until request starts; then disable with spinner
- MUST: Accept free text, validate after — don't block typing
- MUST: Errors inline next to fields; on submit, focus first error
- MUST: `autocomplete` + meaningful `name`; correct `type` and `inputmode`
- MUST: Warn on unsaved changes before navigation

### State & Navigation

- MUST: URL reflects state (filters/tabs/pagination/expanded panels)
- MUST: Back/Forward restores scroll position
- MUST: Links use real anchors / Next `Link` for navigation
- NEVER: Use buttons for navigation that should be links

### Feedback

- SHOULD: Optimistic UI; reconcile on response; on failure rollback or Undo
- MUST: Confirm destructive actions or provide Undo
- MUST: Use polite `aria-live` for toasts/inline validation

## Animation

- MUST: Honor `prefers-reduced-motion`
- SHOULD: Prefer CSS over JS animation libraries when possible
- MUST: Animate compositor-friendly props (`transform`, `opacity`) only
- NEVER: Animate layout props (`top`, `left`, `width`, `height`)
- NEVER: `transition: all` — list properties explicitly
- MUST: Animations interruptible and input-driven

## Layout

- MUST: Deliberate alignment to grid/baseline/edges
- MUST: Verify mobile, laptop, ultra-wide
- MUST: Respect safe areas (`env(safe-area-inset-*)`)
- MUST: Avoid unwanted scrollbars; fix overflows
- SHOULD: Flex/grid over JS measurement for layout

## Content & Accessibility

- MUST: Skeletons mirror final content to avoid layout shift
- MUST: No dead ends; always offer next step/recovery
- MUST: Design empty/sparse/dense/error states
- MUST: Redundant status cues (not color-only)
- MUST: Icon-only buttons have descriptive `aria-label`
- MUST: Prefer native semantics before ARIA
- MUST: Locale-aware dates/times/numbers (`Intl.*`)

## Content Handling

- MUST: Text containers handle long content (`truncate`, `line-clamp`, `break-words`)
- MUST: Flex children need `min-w-0` to allow truncation
- MUST: Handle empty states — no broken UI for empty strings/arrays

## Performance

- MUST: Track and minimize unnecessary re-renders
- MUST: Virtualize large lists (>50 items)
- MUST: Preload above-fold images; lazy-load the rest
- MUST: Prevent CLS (explicit image dimensions)

## Dark Mode & Theming

- MUST: `color-scheme: dark` on dark themes
- MUST: Native controls get explicit `background-color` and `color` when needed

## Hydration

- MUST: Controlled inputs with `value` need `onChange` (or use `defaultValue`)
- SHOULD: Guard date/time rendering against hydration mismatch

## Design

- SHOULD: Nested radii: child ≤ parent; concentric
- MUST: Meet contrast — prefer APCA over WCAG 2 when possible
- MUST: Increase contrast on `:hover` / `:active` / `:focus`

## Source

Adapted from [Vercel Labs — web-interface-guidelines](https://github.com/vercel-labs/web-interface-guidelines) (`AGENTS.md`).
