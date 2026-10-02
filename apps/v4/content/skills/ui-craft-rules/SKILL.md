---
name: ui-craft-rules
description: >
  Craft and quality rules for AI-built interfaces. Use when designing,
  implementing, reviewing, or refining UI to prevent arbitrary styling,
  inconsistent spacing, poor typography, layout shift, excessive motion,
  weak responsive behavior, and generic AI-generated visual patterns.
---

# UI Craft Rules for AI-Built Interfaces

Why AI-built interfaces often look generic, unfinished, or visually inconsistent, and the specific habits that prevent it.

These are practical design and implementation rules, not absolute laws.

Persian and RTL behavior should be handled by the project's Persian and RTL rules. This guide focuses on visual craft, layout discipline, typography, color, icons, motion, responsive behavior, loading states, and overall UI quality.

---

## 1. Rulebook

### Working with the Agent

| Do                                                                                                     | Don't                                                                                                   |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| Name the technique: "cross-fade the icon", "stagger the cards by 40ms", "use a subtle scale on hover". | Say "make it prettier" or "make it modern".                                                             |
| Define the design system first: tokens, type scale, spacing, components.                               | Build every screen independently with arbitrary values.                                                 |
| Constrain what the agent may add.                                                                      | Let the agent invent colors, font sizes, radii, or padding when existing tokens already cover the need. |
| Build screen by screen and section by section.                                                         | Dump the entire product into one large prompt.                                                          |
| Review every AI-generated change before shipping.                                                      | Trust a one-shot implementation.                                                                        |
| Build development tooling early when useful.                                                           | Repeatedly ask the agent to add and remove temporary debug UI.                                          |

### Name the Technique

When requesting visual changes, describe the actual interaction or design technique.

Good:

```text
Cross-fade the icon when the button changes state.
```

```text
Stagger the cards by 40ms, with the first card appearing first.
```

```text
Reserve the image area with aspect-ratio so loading does not shift the layout.
```

Avoid:

```text
Make it prettier.
Make it modern.
Make it more premium.
Make it pop.
Make it look better.
```

These instructions are too ambiguous and usually encourage arbitrary styling.

### Design System First

Define or identify:

* Color tokens
* Typography scale
* Spacing scale
* Radius
* Shadows
* Component primitives
* Icon system
* Motion rules
* Responsive breakpoints

Then build screens from those rules.

A consistent design system eliminates many visual decisions before the agent starts generating UI.

---

## Layout and Loading

### Reserve Space Before Content Arrives

Anything that loads asynchronously should have predictable dimensions.

Images should use:

```css
aspect-ratio
```

or explicit:

```html
width
height
```

Lists, cards, tables, and asynchronous content should reserve an appropriate amount of space when their final dimensions are predictable.

Avoid layout jumps caused by:

* Images loading late
* Fonts changing dimensions
* Async data appearing
* Skeletons having different dimensions from the final UI
* Dynamic controls appearing after hydration

Layout stability is part of the design, not merely a performance concern.

### Loading States

Prefer skeletons that match the final content layout.

Bad:

```text
        Loading...
          spinner
```

Better:

```text
[avatar] [title................]
         [description..........]
         [button...............]
```

The loading state should teach the user what is about to appear.

Use the project's existing `Skeleton` component when available.

Do not introduce a new loading component when an existing primitive already covers the use case.

### Mobile First

Assume a large portion of users will access the product from a phone.

Before considering a screen complete, test narrow widths around:

```text
360px
375px
390px
```

Check for:

* Text collisions
* Overflow
* Broken buttons
* Long labels
* Dialog width
* Dropdown positioning
* Horizontal scrolling
* Card stacking
* Navigation wrapping
* Image cropping

A desktop layout that looks good but breaks at 360px is not finished.

### Avoid Artificial Empty Space

Large empty areas should have a reason.

Do not add:

```text
padding-top: 180px
margin-bottom: 160px
```

merely to make a page feel "premium".

Use whitespace to establish hierarchy and rhythm.

Reduce unnecessary gaps when they make the interface feel unfinished or disconnected.

---

## Typography

### One Type Scale

Keep the whole product within a small, deliberate type scale.

A practical interface should usually need no more than roughly six font sizes.

For example:

```text
12
14
16
20
24
32
```

The exact values depend on the design system.

Do not improvise:

```text
text-[13px]
text-[15px]
text-[17px]
text-[19px]
```

for individual elements without a real design reason.

### Line Height

Line height should be determined by typography role rather than by individual component.

For Persian interfaces, the actual font matters significantly because Persian and Arabic glyphs can require more vertical space than Latin text.

As a starting point:

* Body/UI text: around `1.7–1.9`
* Long-form reading: around `1.8–2`
* Headings: around `1.2–1.4`
* Buttons and labels: around `1.4–1.6`

These are starting points, not mandatory constants.

Test the actual font before adjusting.

### Headings vs Body

Do not use the same line-height everywhere.

Headings generally need tighter line-height.

Body text and supporting text generally need more breathing room.

### Contrast

Muted text should be used intentionally.

Prefer:

```text
text-muted-foreground
```

for:

* Metadata
* Helper text
* Secondary information
* Supporting labels

Do not use muted text for primary body content when contrast becomes weak.

Primary content should use the normal foreground token.

### Persian Typography

For Persian UI:

* Keep `letter-spacing` at `0` unless there is a specific reason.
* Do not use `uppercase`.
* Avoid arbitrary `tracking-*`.
* Use the project's configured Persian font.
* Keep typography consistent across components.

---

## Color

### Limit the Palette

A page does not need many colors to look rich.

Use a limited semantic palette:

* Background
* Foreground
* Muted
* Border
* Card
* Primary
* Destructive
* Accent

Avoid introducing a new color whenever a semantic token already exists.

### One Accent Per Section

A section can have a visual accent, but that accent should have a clear purpose.

Use an existing theme token:

```text
brand
primary
accent
```

instead of creating a fresh color:

```text
#7C3AED
#23A6D5
oklch(...)
```

inside an individual component.

### Semantic Tokens

Prefer:

```text
bg-background
text-foreground
text-muted-foreground
border-border
bg-card
bg-primary
text-primary-foreground
```

over hardcoded colors.

This keeps the interface consistent across themes and makes later redesigns easier.

---

## Icons

### One Icon System

Use one primary icon set across the product.

If the project already uses an icon library, reuse it.

Do not:

* Hand-draw an SVG for a single icon.
* Add a second icon package for one missing icon.
* Mix unrelated icon styles.

### Icon Weight

Icon stroke should visually match nearby typography.

As a practical starting point:

```text
Regular text       → strokeWidth 1.5
Medium/Semibold    → strokeWidth 2
Bold display       → up to 2.5
```

Do not treat these as absolute values.

### Icon Size

Icon size should be proportional to adjacent text.

For example:

```text
14–16px text → approximately 16px icon
16px text    → approximately 16–18px icon
20px heading → approximately 20–24px icon
```

Avoid using a 24px icon next to tiny 12px text without a deliberate reason.

### Directional Icons

Directional icons must communicate the correct navigation direction.

In RTL interfaces, verify:

* Next
* Previous
* Back
* Forward
* Expand
* Collapse
* Navigation arrows

Do not blindly mirror every icon.

Icons with non-directional meaning should remain unchanged.

---

## Touch and Pixel Discipline

### Touch Targets

Every tappable control should have a minimum target around:

```text
44 × 44px
```

48px is also acceptable when appropriate.

Pay special attention to:

* Close buttons
* Chevron buttons
* Icon buttons
* Pagination
* Menu triggers
* Mobile navigation
* Small toolbar controls

A visible icon can be smaller than 44px while its actual clickable area remains at least 44px.

### Spacing

Prefer a consistent spacing scale.

A 4px grid is a useful default:

```text
4
8
12
16
20
24
32
40
44
48
```

Do not introduce arbitrary values such as:

```text
p-[13px]
gap-[17px]
mt-[23px]
```

unless there is a documented reason.

### Radius

Use the project's radius token:

```text
--radius
```

or the corresponding design-system utilities.

Do not randomly mix:

```text
6px
10px
12px
16px
20px
```

in the same interface.

---

## Motion and Micro-interactions

### Name Motion Patterns

Use explicit interaction patterns.

Examples:

* Cross-fade
* Stagger
* Scale
* Slide
* Shared-element transition
* Rubber-band overscroll
* Skeleton shimmer
* State transition

Do not ask the agent to "add cool animations".

### Timing

A practical range for UI transitions is:

```text
150–300ms
```

Use shorter transitions for small state changes and longer ones for larger movements.

### Stagger

When staggering a list:

```text
30–60ms
```

between items is usually enough.

Keep the total animation duration controlled.

Important content should appear before secondary content.

### Reduced Motion

Always respect:

```css
prefers-reduced-motion
```

Users who request reduced motion should not receive the same animation experience as users who have not.

### Animate Compositable Properties

Prefer:

```text
transform
opacity
```

Avoid animating layout properties such as:

```text
top
left
width
height
```

unless there is a specific reason and the performance impact is understood.

### Tooltip Groups

When a toolbar contains several tooltip-enabled buttons:

* The first tooltip can have a short delay.
* Once one tooltip is open, adjacent tooltips can appear immediately.
* Avoid forcing the user to wait through the initial delay for every button.

Use the project's existing Tooltip/Popover primitives and shared state when needed.

---

## Content

### Real Content

Avoid making the interface look like a template.

Use:

* Realistic product names
* Realistic numbers
* Meaningful labels
* Representative images
* Realistic Persian copy
* Useful empty states

Do not use lorem ipsum in visible UI.

Avoid obviously AI-generated placeholder content such as:

```text
Amazing Product
Lorem ipsum dolor sit amet...
Unlock your potential today!
```

when the actual product context is known.

### Content Density

Do not fill empty space simply to make a page look complete.

Do not add:

* Extra cards
* Fake statistics
* Decorative sections
* Unnecessary badges
* Random gradients
* Artificial testimonials

unless they serve a real product purpose.

---

## Existing Components

If a component already exists, use it.

Do not create:

```text
NewButton
BetterButton
ModernButton
PremiumButton
```

just because the agent wants a different appearance.

Prefer composition and variants when the design system supports them.

Before creating a new component:

1. Search existing components.
2. Search existing variants.
3. Check the design tokens.
4. Check similar screens.
5. Reuse the existing primitive where possible.

---

## Development Panel

For complex interfaces, a development-only panel can be useful for:

* Component IDs
* State
* Feature flags
* Current viewport
* Loading states
* Variant selection
* Debug information

It must never render in production.

For example:

```tsx
{process.env.NODE_ENV !== "production" && <DevPanel />}
```

Keep development tooling separate from production UI.

---

## Handling "Make It Prettier"

When the request is vague:

> Make it prettier.

Do not immediately start adding arbitrary styling.

First identify the actual visual problem.

Examples:

* Inconsistent spacing → normalize spacing scale.
* Weak hierarchy → adjust type scale and grouping.
* Too much visual noise → reduce colors and decorative elements.
* Poor loading experience → add layout-matched skeletons.
* Generic cards → improve hierarchy and content structure.
* Weak interaction feedback → add a named micro-interaction.
* Layout instability → reserve dimensions before loading.
* Mobile problems → redesign the responsive structure.

Then apply the smallest change that solves the identified problem.

---

## 2. Agent Block

Use this compact block inside the project's agent instructions.

### UI Craft Rules for This Project

Design system first, screens second. Treat these rules as constraints.

* Do not add arbitrary Tailwind values when existing tokens cover the need. Avoid values such as `p-[13px]`, `text-[15px]`, arbitrary hex colors, and one-off radii.
* Use existing design tokens and components before creating new ones.
* Keep spacing and sizes on a consistent scale, preferably a 4px grid.
* Every tappable control should have a target of at least 44px.
* Keep the interface within a deliberate type scale. Avoid one-off font sizes.
* Use line-height by typography role rather than per-element improvisation.
* Keep the color palette limited and semantic. Use theme tokens instead of hardcoded colors.
* Use one consistent icon system. Do not hand-draw SVG icons unnecessarily.
* Match icon size and stroke weight to nearby typography.
* Reserve space for asynchronous content. Images need `aspect-ratio` or explicit dimensions.
* Loading states should match the final layout. Prefer the existing `Skeleton` component over isolated spinners.
* Use named motion patterns rather than vague "make it animated" instructions.
* Prefer `transform` and `opacity` for animation.
* Keep UI transitions around 150–300ms unless the interaction requires otherwise.
* Respect `prefers-reduced-motion`.
* Important content should appear before secondary content in staggered animations.
* Test responsive layouts around 360–390px before considering the screen complete.
* Do not add decorative elements without a clear purpose.
* Do not use lorem ipsum or obviously fake placeholder content in visible UI.
* Reuse existing components and variants before creating new abstractions.
* Keep development-only debugging UI outside production builds.
* When asked to "make it prettier", identify the actual design problem and name the technique you will apply before changing the UI.
* For Persian interfaces, also follow the project's Persian, RTL, typography, number, date, and validation rules.

---

## 3. Done Checklist

Run this checklist before considering a screen finished.

### Design System

1. No unnecessary arbitrary values were introduced.
2. Existing spacing, color, typography, radius, and component tokens are reused.
3. The page stays within the project's intended type scale.
4. The radius system remains consistent.

### Layout

5. Images reserve their dimensions with `aspect-ratio` or explicit `width`/`height`.
6. Async blocks reserve appropriate space.
7. Reloading with throttled network does not cause visible layout jumps.
8. No unnecessary empty space was introduced.
9. The layout works at 360–390px.
10. Nothing collides or overflows on mobile.

### Typography

11. Font sizes are deliberate and limited.
12. Line heights follow typography roles.
13. Primary text has sufficient contrast.
14. Muted text is reserved for secondary information.
15. Persian text does not use unnecessary letter spacing or uppercase transformations.

### Color

16. Colors come from semantic design tokens.
17. Each section has a controlled visual accent.
18. No unnecessary hardcoded colors were introduced.

### Icons

19. A single icon system is used.
20. Icon size matches surrounding typography.
21. Icon stroke weight matches the visual weight of nearby text.
22. Directional icons work correctly in RTL when applicable.

### Interaction

23. Every tappable control has an appropriate target size.
24. Motion uses an intentional pattern.
25. Transitions are within a reasonable duration.
26. `prefers-reduced-motion` is respected.
27. Staggered content appears according to importance.

### Content

28. No lorem ipsum is visible.
29. No obviously fake placeholder content remains.
30. Copy matches the actual product context.
31. Empty, loading, success, and error states are intentional.

### Production

32. Development-only panels and debug UI do not render in production.
33. The final diff does not contain accidental one-off styling.
34. Existing components were reused where appropriate.
35. The screen has been reviewed visually rather than trusted as a one-shot AI output.

### Persian / RTL

For Persian interfaces, also verify the project's Persian rules:

* Logical spacing and positioning utilities
* Correct RTL behavior
* Persian digits where required
* Jalali dates where required
* LTR handling for phone, OTP, IBAN, card numbers, URLs, and code
* Natural Persian copy
* Persian typography
* Correct nested RTL behavior in portals, popovers, dropdowns, dialogs, charts, and absolute-positioned elements

---

## Where to Put It

| Tool         | File                                 | Note                                                                                                                          |
| ------------ | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------- |
| Claude Code  | `CLAUDE.md`                          | Put the rules directly here, or keep them in `docs/ui-craft-rules.md` and reference that file with `@docs/ui-craft-rules.md`. |
| Codex        | `AGENTS.md`                          | Put the rules at the repository root or in a more specific nested `AGENTS.md`.                                                |
| Cursor       | `.cursor/rules/ui-craft-rules.mdc`   | Add `alwaysApply: true` in the frontmatter when these rules should apply to every task.                                       |
| Other agents | Their project-level instruction file | Use the location documented by the specific agent.                                                                            |

### Cursor Frontmatter

```md
---
alwaysApply: true
---
```

### Claude Code Reference

If the full file lives at:

```text
docs/ui-craft-rules.md
```

add this to the repository-root `CLAUDE.md`:

```md
@docs/ui-craft-rules.md
```

### Codex Reference

For Codex, the simplest setup is to put the rules directly in:

```text
AGENTS.md
```

If the project uses a separate rules file, reference or include it according to the project's Codex instruction structure.

---

## Relationship to Other Project Rules

This guide focuses on UI craft.

It does not replace specialized rules for:

* Persian language
* RTL
* Persian typography
* Jalali dates
* Iranian validation
* Persian SEO
* Accessibility

When a specialized rule exists, follow it together with these craft rules.

The goal is not to make every interface look the same.

The goal is to prevent the agent from making arbitrary design decisions and to make every visual decision intentional, consistent, measurable, and appropriate to the product.
