---
name: frontend-design
description: >
  Guidance for distinctive, intentional visual design when building new UI or
  reshaping an existing one. Helps with aesthetic direction, typography, layout,
  motion, and copy so the result does not look like a templated AI default.
  Use for landing pages, product UI, redesigns, and visual reviews.
---

# Frontend Design

Approach UI as a design lead who gives every product a distinct visual identity.
The brief has already rejected cliché or templated proposals. Make deliberate,
opinionated choices about palette, typography, and layout that belong to this
product — not to a generic AI starter kit.

For Persian and RTL products, also apply the project's Persian and RTL skills
(`persian-rtl-ui`, `persian-typography`, `persian-ui-copy`) for language, direction,
digits, and microcopy. This skill focuses on visual craft and avoiding generic
AI aesthetics.

---

## 1. Ground the design in the subject

If the brief does not state what the product is, identify it before designing:

1. One concrete subject (what is being sold or done)
2. Who it is for
3. The primary job of the first viewport

Industry, materials, and vernacular drive distinctive choices. A children's toy
store and a finance dashboard should not share the same palette, type, or hero
pattern. Build with real content throughout — not lorem and fake metrics alone.

---

## 2. Design principles

### Hero

The first viewport is the design. Open with the most characteristic thing in the
subject's world: a headline, a product image, a live demo, or one clear
interactive moment. Be deliberate. A big number, a small label, supporting
stats, and a gradient accent is a common default — use it only when it truly
fits the brief.

### Typography

Typography carries personality. Prefer one family, or two that are clearly
distinct. Choose faces for this brief, not the same defaults used on every
other project. Set a clear type scale with intentional weights and spacing.

- Keep line lengths under ~80 characters when possible.
- Serif body text needs slightly more line-height than sans.
- Avoid common AI typography tells:
  - Highlighting a single word in a headline with italic, bold, or a different color
  - ALL-CAPS labels as decoration
  - Eyebrow labels above every heading that add no information

For Persian UI, prefer comfortable line-height on display type; do not copy
tight English tracking or uppercase tricks onto Persian text.

### Structure

Borders, dividers, numbers, and labels should encode information, not decorate.
Numbered markers (`01 / 02 / 03`) only belong when the content is truly a
sequence (steps, timeline). Otherwise skip them.

### Motion

Use non-user-triggered motion sparingly. One orchestrated moment (page load or
a single reveal) beats fade-and-slide on every section and hover on every card.
Motion that answers a user action (open, expand, confirm) is welcome when it
shows what changed. Respect `prefers-reduced-motion`.

### Copy in the design

Words are design content. Write for the end user in plain language. Name things
by what people understand, not by system internals. Prefer active voice and
consistent action names through a flow (`Publish` → toast `Published`). Errors
explain what went wrong and how to fix it; empty states invite a next step.

For Persian product UI, keep microcopy short and natural — use the Persian UI
copy skill when writing buttons, errors, and empty states.

---

## 3. Avoid the AI-default look

These patterns show up constantly in generated UI. They are valid for some
briefs, but they are defaults, not choices. Do not spend free axes of the brief
on them unless the client asked for that look:

1. Warm cream background with high-contrast serif display and terracotta accent
2. Near-black background with one acid-green or vermilion accent
3. Broadsheet layout: hairline rules, zero radius, dense newspaper columns
4. SaaS card kit: identical rounded cards, same soft grey shadow, decorative gradients
5. Template chrome: tracked ALL-CAPS eyebrows, middle-dot meta rows (`A · B · C`),
   `WORD — fragment` labels, tinted near-black instead of true black, monospace
   for every small label, arrows appended to every link

If the brief specifies a direction, follow the brief. If an axis is free, do not
fill it with one of the defaults above.

---

## 4. Process: plan, review, build, critique

Work in two passes.

### Pass A — Design plan

Write a short plan before code:

- **Color:** 4–6 named hex values for the core palette
- **Type:** faces and roles (display / body / mono if needed)
- **Layout:** one-sentence concept plus a simple ASCII wireframe; note alignment
- **Principles:** what makes this page unique for this subject

Review the plan against the brief. If any part looks like what you would produce
for any similar page, revise it and say what changed and why.

### Pass B — Build

Only after the plan is specific to this brief, implement. Watch CSS specificity
so utility and component classes do not cancel each other (especially spacing
between sections). Prefer tokens and existing design-system values when the
project has them.

### Critique while building

Spend boldness in one place. One memorable element; everything else quiet.
Before finishing, remove one decorative accessory that does not serve the brief.

Quality floor (always):

- [ ] Readable on mobile
- [ ] Visible keyboard focus
- [ ] Reduced motion respected
- [ ] Sufficient contrast
- [ ] Harmonious palette tied to the subject
- [ ] Real or realistic content in the hero
- [ ] No default AI chrome from the list above unless requested

If you can screenshot, review the first viewport as a still image — composition
problems show up faster that way.

---

## 5. Working with prompts

| Do | Don't |
| --- | --- |
| Name the technique: "cross-fade the icon", "one hero image edge-to-edge" | Say only "make it modern" or "make it pretty" |
| Lock palette and type before decorating | Invent a new accent on every section |
| Build section by section against the plan | Dump an entire site in one shot with no review |
| Cut decoration that does not carry meaning | Add badges, glow, and glass on every card |

---

## 6. Quick anti-patterns

- Hero full of stats, chips, and promo stickers
- Cards used when a simple stack of text would do
- Purple-on-white or purple-to-indigo gradients as the whole identity
- Inter / Roboto / system UI as the only expressive type choice with no reason
- Identical three-column feature grids with icon + title + blurb on every landing page
- Hover lift + shadow on every interactive surface

---

## 7. When to stop

Ship when the first viewport reads as one composition for this product, the
type and color feel intentional, and nothing looks like it was pasted from a
generic AI template. If you are unsure, remove one more decorative layer and
re-check the brief.
