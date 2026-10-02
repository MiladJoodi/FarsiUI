---
name: persian-typography
description: >
  Persian typography guidance for coding agents and developers. Use when
  choosing or loading Persian fonts, styling Persian interfaces, handling
  Persian digits, mixed Persian and Latin text, ZWNJ, line height, tables,
  prices, and typography-related RTL issues.
---

# Persian Typography Guide

A practical reference for developers and coding agents working on Persian interfaces.

Use this guide when choosing fonts, loading them in Next.js, defining typography scales, formatting Persian digits, handling mixed Persian and Latin content, preserving ZWNJ, and reviewing typography quality in Persian UI.

The goal is not simply to display Persian characters. The goal is readable, consistent, stable Persian typography across browsers, devices, components, and mixed-script content.

---

## 1. Choosing a Font

Use a Persian-capable font as the primary UI font.

| Font                 | License       | Where it fits                  | Notes                                                                  |
| -------------------- | ------------- | ------------------------------ | ---------------------------------------------------------------------- |
| Vazirmatn            | SIL OFL, free | UI, docs, body text            | Broad Persian/Arabic and Latin support; strong general-purpose choice. |
| Shabnam              | SIL OFL, free | Body and UI                    | Persian-focused family suitable for product interfaces.                |
| Sahel                | SIL OFL, free | Body and UI                    | Persian-focused family suitable for general interfaces.                |
| Samim                | SIL OFL, free | Body and UI                    | Persian-focused family with a readable appearance.                     |
| IRANSans / IRANSansX | Commercial    | Corporate and banking products | Requires an appropriate license.                                       |
| Yekan Bakh           | Commercial    | Product UI                     | Popular product-oriented Persian typeface; requires a license.         |
| Dana                 | Commercial    | Editorial and product UI       | Broad weight range; requires a license.                                |
| Lalezar              | SIL OFL, free | Display                        | Better suited to headlines and display use than body text.             |

### Rules

* Use one primary text family for the product.
* Optionally use one dedicated display family.
* Do not mix several unrelated Persian families in the same interface.
* Verify the actual license before shipping a commercial font.
* Do not assume that a font is free merely because its files are publicly available.
* Prefer fonts that provide both Persian/Arabic and Latin glyphs when the interface contains mixed-script content.
* If the primary font does not provide a sufficiently compatible Latin set, define an intentional fallback rather than allowing the browser to choose unrelated fonts unpredictably.

### Avoid weak fallback stacks

Do not rely on:

```css
font-family: system-ui;
```

as the only Persian font strategy.

Likewise, do not assume that fonts such as Inter, Roboto, or Geist alone provide the intended Persian typography.

A fallback stack should preserve:

* Persian glyph coverage
* Latin glyph coverage
* Similar metrics
* Similar x-height and vertical proportions
* Reasonable rendering during font loading

---

## 2. Loading Fonts

### Next.js with `next/font/google`

For a Google-hosted font supported by `next/font`, use the framework's font loader rather than manually adding `<link>` tags.

Example:

```ts
// app/fonts.ts
import { Vazirmatn } from "next/font/google";

export const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});
```

Then attach the variable to the document:

```tsx
// app/layout.tsx
import { vazirmatn } from "./fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body>{children}</body>
    </html>
  );
}
```

For Tailwind v4:

```css
/* app/globals.css */

@theme inline {
  --font-sans: var(--font-vazirmatn), "Vazirmatn", ui-sans-serif, system-ui, sans-serif;
}
```

### Self-hosted fonts

For licensed or locally hosted fonts, use `next/font/local`.

Example:

```ts
import localFont from "next/font/local";

export const iranSans = localFont({
  src: [
    {
      path: "../fonts/IRANSansX-Regular.woff2",
      weight: "400",
    },
    {
      path: "../fonts/IRANSansX-Medium.woff2",
      weight: "500",
    },
    {
      path: "../fonts/IRANSansX-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-iransans",
  display: "swap",
});
```

Use the actual font paths and weights available in the project.

### Font loading rules

* Prefer `woff2`.
* Load only the weights the interface actually uses.
* `400`, `500`, and `700` are enough for many interfaces.
* Add `600` when the design system genuinely needs it.
* Avoid loading every available font weight without a reason.
* Use `display: "swap"` for normal UI fonts unless the product has a specific reason to choose another strategy.
* Let `next/font` handle font loading and optimization where possible.
* Do not manually duplicate the font loading strategy with unnecessary `<link>` or preload tags.
* If a local font has large files, consider appropriate subsetting.
* Keep Persian/Arabic and Latin glyph coverage in mind when subsetting.
* Test the page during font loading, not only after the font has fully loaded.

### Font fallback and layout shift

Different Persian fonts can have noticeably different metrics.

If the fallback font changes the layout significantly during loading, investigate:

* `size-adjust`
* `ascent-override`
* `descent-override`
* `line-gap-override`

Use these only when needed and test the result against the actual font.

Do not introduce complicated font metric overrides without measuring the effect.

---

## 3. Font Weights

Use real font weights provided by the font.

Typical UI weights:

```text
400 → Regular
500 → Medium
600 → Semibold
700 → Bold
```

Do not fake a missing weight with CSS.

Avoid:

```css
font-synthesis: auto;
```

when it causes the browser to synthesize a weight or style that the font does not provide.

Prefer the actual shipped font weight.

For Persian interfaces, avoid relying heavily on italic text. Use:

* Weight
* Color
* Background
* Border
* Typography hierarchy

for emphasis when an italic face is not available.

---

## 4. Sizes and Line Height

A Persian interface generally needs more vertical breathing room than an equivalent Latin interface.

Use a deliberate typography scale instead of choosing sizes independently for each component.

| Element                 |      Typical size | Typical line height |
| ----------------------- | ----------------: | ------------------: |
| Body / UI               |           15–17px |             1.7–1.9 |
| Long-form reading       |           17–18px |             1.9–2.0 |
| Small labels / captions |           12–13px |                ~1.6 |
| Headings                | Project-dependent |            1.2–1.35 |
| Buttons / inputs        |           14–16px |            ~1.4–1.6 |

These are starting points, not immutable values.

Always test the actual font.

### Body text

A common default is:

```css
font-size: 16px;
line-height: 1.8;
```

Avoid reducing Persian body text to very small sizes merely to fit more content.

### Long-form text

For articles, documentation, and long paragraphs, more line height usually improves readability:

```css
font-size: 17px;
line-height: 1.9;
```

Adjust based on:

* Font
* Column width
* Screen size
* Content density

### Headings

Headings should generally have tighter line height than body text.

For example:

```css
line-height: 1.2;
```

or:

```css
line-height: 1.3;
```

Avoid extremely tight values that cause Persian marks to collide vertically.

Do not use a heading line height below approximately `1.15` without a specific visual reason and careful testing.

### Buttons and inputs

Use enough vertical space for Persian glyphs.

Do not blindly use the same line-height intended for Latin text.

The visible text should be vertically centered without clipping dots, accents, or glyph extensions.

---

## 5. Letter Spacing

For Persian text:

```css
letter-spacing: 0;
```

should be the default.

Avoid:

```text
tracking-tight
tracking-wide
tracking-wider
```

on Persian text unless there is a specific, tested reason.

Letter spacing can alter the visual connection and rhythm of Persian words and can make otherwise correct typography look unnatural.

### Important

This:

```tsx
className="tracking-tight"
```

may look reasonable on an English heading but be inappropriate for a Persian heading.

Prefer changing:

* Font weight
* Font size
* Line height
* Container width

to create hierarchy.

---

## 6. Word Spacing and Justification

Avoid aggressive word spacing in normal UI.

Do not use full justification for most interface copy.

Prefer:

```text
text-start
```

rather than:

```text
text-justify
```

For long-form editorial content, justification can be evaluated separately, but it should be tested with real Persian text and the actual font.

Do not introduce large gaps between Persian words merely to fill a line.

---

## 7. Persian Digits

Persian digits are:

```text
۰۱۲۳۴۵۶۷۸۹
```

Unicode range:

```text
U+06F0–U+06F9
```

Arabic-Indic digits are visually different:

```text
٠١٢٣٤٥٦٧٨٩
```

Unicode range:

```text
U+0660–U+0669
```

For Persian UI, use the numeral system defined by the product's localization rules consistently.

Do not mix Persian and Arabic-Indic digits randomly.

### Display vs data

Keep machine-readable values in their canonical representation.

For example:

```ts
const price = 12450000;
```

Then format the value for display:

```text
۱۲٬۴۵۰٬۰۰۰ تومان
```

Do not store:

```text
"۱۲٬۴۵۰٬۰۰۰ تومان"
```

as the canonical numeric value.

---

## 8. Number Formatting

For Persian UI, use:

```text
Persian digits
Persian separators
```

Examples:

```text
۱۲٬۴۵۰٬۰۰۰
۳٫۱۴
۲۰٪
```

Unicode separators:

```text
٬ → U+066C
٫ → U+066B
٪ → U+066A
```

### Currency

Example:

```text
۱۲٬۴۵۰٫۵ تومان
```

Keep the currency unit after the amount when that is the project's established convention.

Do not mix تومان and ریال without making the distinction explicit.

### Percentages

Prefer:

```text
۲۰٪
```

rather than:

```text
٪۲۰
20%
```

when the product's Persian formatting rules require Persian numerals and punctuation.

---

## 9. Tabular Numbers

Tables, prices, dashboards, and financial values often benefit from tabular numerals.

Use:

```css
font-variant-numeric: tabular-nums;
```

or Tailwind's:

```text
tabular-nums
```

This gives numbers consistent widths and helps columns line up.

Use it especially for:

* Prices
* Quantities
* Dates
* Statistics
* Account balances
* Dashboard metrics
* Table columns

Do not force `tabular-nums` onto every piece of text when proportional numerals are more appropriate.

---

## 10. Phone, Card and IBAN Numbers

These values have a special mixed-direction requirement.

Display:

```text
Persian digits
```

when that is the product's visible-number convention.

Keep the underlying value canonical:

```text
Latin digits
```

The control itself should generally use:

```html
dir="ltr"
```

for predictable cursor movement and digit ordering.

Example:

```tsx
<input
  dir="ltr"
  inputMode="numeric"
  value={cardNumber}
/>
```

The visual presentation can still use Persian digits if the product explicitly requires it.

Do not confuse display formatting with the underlying value.

---

## 11. Mixed Persian and Latin Text

Persian interfaces commonly contain:

* Product names
* Framework names
* URLs
* File names
* SKUs
* Version numbers
* Package names
* Technical terms

Do not force the entire paragraph to LTR because of one English token.

For example:

```text
با Next.js ساختیم.
```

should remain an RTL sentence.

### Isolate technical values

For potentially ambiguous content, use:

```html
<bdi dir="ltr">SKU-2048</bdi>
```

or:

```html
<span dir="ltr">SKU-2048</span>
```

Use isolation when punctuation, numbers, or adjacent RTL text could otherwise become visually ambiguous.

Useful examples:

```tsx
<bdi dir="ltr">Next.js</bdi>
<bdi dir="ltr">SKU-2048</bdi>
<bdi dir="ltr">example.com</bdi>
<bdi dir="ltr">v4.2.0</bdi>
```

Do not add `dir="ltr"` to the entire Persian paragraph.

### Brand names

Keep official brand casing:

```text
Next.js
GitHub
React
FarsiUI
TypeScript
```

Do not transliterate a brand unless the brand itself uses an official Persian form.

---

## 12. Bidi and Direction

The document should normally use:

```html
<html lang="fa" dir="rtl">
```

Do not use local `dir` attributes as a substitute for correct global direction.

Use `dir="ltr"` only where the content itself benefits from LTR rendering.

Examples:

* Email
* URL
* Phone
* OTP
* IBAN
* Card number
* Code
* File path
* Version
* Technical identifier

For mixed content, prefer isolation over changing the direction of a larger container.

---

## 13. ZWNJ and Half-Space

ZWNJ is the zero-width non-joiner:

```text
U+200C
```

It is commonly called نیم‌فاصله in Persian.

Examples:

```text
می‌شود
می‌خواهم
ثبت‌نام
کتاب‌ها
داده‌ها
بزرگ‌تر
به‌روزرسانی
پیش‌نمایش
```

In HTML, you can use the actual character:

```html
می‌شود
```

or:

```html
می&zwnj;شود
```

Prefer readable source code when possible.

### Do not overuse ZWNJ

ZWNJ should follow Persian orthography.

Do not insert it mechanically between every pair of words or characters.

### Search and normalization

ZWNJ is a real Unicode character.

If search or matching should treat:

```text
ثبت‌نام
```

and:

```text
ثبت نام
```

as equivalent, normalize them deliberately during matching.

For example:

```ts
const normalized = value.replace(/\u200C/g, "");
```

Do not remove ZWNJ from the displayed text unless the product intentionally wants normalized output.

---

## 14. Wrapping and Truncation

Persian words should remain readable when wrapping.

Prefer:

```text
whitespace-nowrap
break-words
```

where appropriate.

Avoid:

```text
break-all
```

for normal Persian text because it can split words at arbitrary character boundaries.

### Truncation

Do not truncate Persian text with:

```ts
text.slice(0, 20)
```

for display purposes.

This can:

* Cut words in the middle.
* Break punctuation.
* Remove meaningful context.
* Produce poor visual results.

Prefer CSS truncation:

```text
truncate
line-clamp-2
```

or a proper text-overflow strategy.

---

## 15. Punctuation

Persian punctuation should be visually attached to the preceding word.

Correct:

```text
سلام، حالت چطوره؟
```

Avoid:

```text
سلام ، حالت چطوره ؟
```

Use:

* `،`
* `؛`
* `؟`
* `« »`

according to Persian writing conventions.

For mixed technical text, preserve technical punctuation when the syntax requires it.

Do not globally replace punctuation inside:

* URLs
* Code
* JSON
* API values
* File paths
* Technical identifiers

---

## 16. Alignment Inside Components

Use logical alignment utilities.

Prefer:

```text
text-start
```

instead of:

```text
text-right
```

This keeps components reusable in both RTL and LTR contexts.

### Icons next to text

Prefer:

```tsx
<div className="flex items-center gap-2">
  <Icon />
  <span>ذخیره</span>
</div>
```

Avoid directional margins such as:

```text
mr-2
ml-2
```

when `gap` or logical spacing is appropriate.

### Mixed cells

If a table cell can contain both scripts:

```tsx
<td dir="auto">
  ...
</td>
```

For numeric values, use:

```text
tabular-nums
```

where appropriate.

---

## 17. Inputs

Default Persian text inputs to RTL.

Use LTR for values whose structure is inherently Latin-shaped.

### RTL examples

* Name
* Address
* Description
* Search
* Persian text

### LTR examples

* Email
* URL
* OTP
* IBAN
* Card number
* Phone number
* API key

Example:

```tsx
<input dir="rtl" />
```

and:

```tsx
<input dir="ltr" inputMode="numeric" />
```

Do not set every input to the same direction simply because the page is RTL.

Direction should follow the content.

---

## 18. Font Rendering Problems

When Persian letters look disconnected or malformed, check the font before changing the text.

Possible causes:

* Incorrect font
* Missing Persian glyphs
* Browser fallback
* Mixed fonts within one word
* Incorrect `letter-spacing`
* Incorrect ZWNJ
* Incorrect Unicode characters
* Synthetic font weight
* Incorrect font loading

### Debug process

Inspect the affected element's computed:

```text
font-family
font-weight
font-size
line-height
letter-spacing
```

Then verify that the intended Persian font is actually rendering.

Do not assume that defining a font in CSS means the browser is using it.

---

## 19. Quick Checks

### 200% zoom

Zoom the page to 200%.

Check whether:

* Dots remain attached correctly.
* Glyphs remain readable.
* Line boxes do not clip Persian marks.
* Fallback fonts appear unexpectedly.

If the appearance changes unexpectedly, inspect the actual computed font.

### Text selection

Select a Persian word.

If selection behaves unexpectedly, investigate:

* ZWNJ
* Unicode normalization
* Hidden characters
* Letter spacing
* Mixed-direction content

### Number columns

Compare a price or number column.

If values do not line up:

```text
tabular-nums
```

may help.

### Tracking

If a Persian heading uses:

```text
tracking-tight
```

remove it unless there is a tested reason to keep it.

### Mobile

Check on a real or emulated phone.

A practical baseline:

```text
Body: 16px
Inputs: 16px
Body line-height: ≥ 1.7
```

Also test long Persian labels and mixed-script content.

---

## 20. Typography Review Checklist

Before considering Persian typography complete:

* [ ] A Persian-capable primary font is configured.
* [ ] The font license is appropriate for the project.
* [ ] Only necessary font weights are loaded.
* [ ] Latin glyph support has been verified.
* [ ] `lang="fa"` is configured correctly.
* [ ] The document uses the appropriate direction.
* [ ] Body text has a readable line height.
* [ ] Headings use tighter line height than body text.
* [ ] Persian text uses `letter-spacing: 0`.
* [ ] No unnecessary `tracking-*` utilities are used.
* [ ] No uppercase transformation is applied to Persian UI.
* [ ] Real font weights are used instead of synthetic weights.
* [ ] Visible numbers follow the project's Persian-number policy.
* [ ] Number formatting uses appropriate Persian separators.
* [ ] Numeric tables use `tabular-nums` where useful.
* [ ] Phone, card, OTP, and IBAN fields handle direction correctly.
* [ ] Mixed Persian/Latin content is isolated when necessary.
* [ ] ZWNJ is preserved where Persian orthography requires it.
* [ ] `break-all` is not used for normal Persian text.
* [ ] Persian strings are not truncated with `slice()`.
* [ ] Punctuation spacing follows Persian conventions.
* [ ] Inputs use direction appropriate to their content.
* [ ] Fallback font rendering has been checked.
* [ ] The interface has been tested on mobile.
* [ ] Long Persian strings have been tested.
* [ ] Mixed Persian and Latin strings have been tested.
* [ ] Prices and numeric columns have been visually checked.

---

## 21. Scope

This guide focuses on typography.

Use it together with the project's other specialized rules when available:

* Persian UI copy
* Persian conversational writing
* Persian formal writing
* Persian RTL UI
* Jalali calendar
* Iranian validation
* Persian SEO
* UI craft

Do not use this guide as a reason to rewrite unrelated application architecture.

When modifying an existing project, preserve its typography system when it already satisfies these requirements. Make the smallest necessary change to improve Persian rendering and consistency.

---

## 22. Project Integration

This file is a reference document unless the project's coding-agent configuration explicitly loads it.

### Claude Code

Store the file at:

```text
docs/persian-typography.md
```

Then reference it from the repository-root:

```text
CLAUDE.md
```

with:

```md
@docs/persian-typography.md
```

### Cursor

For automatic application on every relevant Cursor task, create:

```text
.cursor/rules/persian-typography.mdc
```

with:

```md
---
alwaysApply: true
---
```

Then place the typography rules below the frontmatter.

If you want the guide to remain a standalone reference, keep the full document at:

```text
docs/persian-typography.md
```

and copy or adapt its rules into the Cursor rule file.

### Codex

Store project-level instructions at:

```text
AGENTS.md
```

If the full typography guide remains in:

```text
docs/persian-typography.md
```

include the relevant rules in `AGENTS.md` or reference the file according to the project's instruction structure.

### Other coding agents

Use the project's supported instruction file or rules directory.

The important requirement is that the agent can actually read the rules when working on Persian typography. A standalone Markdown file does not automatically become active merely because it exists in the repository.
