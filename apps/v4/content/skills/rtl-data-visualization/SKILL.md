---
name: rtl-data-visualization
description: >
  Build and debug RTL / Persian data visualizations with Recharts (or similar):
  Persian digits, fa-IR locale, axis and tooltip alignment, labels, formatting,
  responsive charts, and common RTL chart bugs. Use when charts look LTR,
  numbers are Latin-only, tooltips misalign, or axes flip incorrectly under
  dir=rtl.
---

# RTL Data Visualization

Practical guide for Persian / RTL charts. Recharts and SVG chart libraries are
often LTR-first; wrapping the page in `dir="rtl"` is not enough.

### Scope

| | |
| --- | --- |
| **In scope** | Recharts (and similar), RTL layout, Persian digits/locale, axes, tooltips, labels, responsive behavior |
| **Out of scope** | General dashboard UX, backend analytics, non-chart visualization |

Related: `persian-rtl-ui` for layout/UI; this skill is **charts-only**.

---

## When to use

* Building charts for `lang="fa"` / `dir="rtl"` products.
* Axis ticks, tooltips, or legends show Latin digits or LTR alignment.
* Chart mirrors incorrectly, or “start” of the axis is on the wrong side.
* Design-system chart tokens look wrong only inside chart SVG.

---

## Agent workflow

### Inspect

* Chart library (Recharts, Chart.js, Visx, custom SVG).
* Whether the chart sits under `dir="rtl"` or a forced `dir="ltr"` wrapper.
* Formatters: `toLocaleString`, `Intl.NumberFormat`, custom digit maps.
* Tooltip / legend components and their portals.
* Container component (e.g. `ChartContainer`) and CSS variables for series colors.

### Diagnose

| Symptom | Likely cause |
| --- | --- |
| Digits are `0-9` in UI that elsewhere uses `۰-۹` | Missing `fa-IR` formatter or PersianDigits scope |
| Tooltip text aligns left | Tooltip content ignores RTL; portal outside `dir` |
| X axis feels “backwards” | Category order vs mirrored SVG; unnecessary `scaleBand` reverse |
| Labels collide on the right | Padding/margin still assume LTR overflow |
| Legend order opposite of series | Legend layout uses physical left/right |
| Chart ignores Design System colors | Chart config hardcodes hex instead of CSS vars |

### Plan → Implement → Verify

1. Decide: mirror the geometry for RTL, or keep plot LTR and only localize labels.
2. Apply locale formatters to ticks, tooltips, and value labels.
3. Fix tooltip/legend direction explicitly (`dir="rtl"`, logical CSS).
4. Check mobile: resize, long Persian labels, truncated ticks.
5. Verify light/dark + DS tokens if charts use `--chart-*` variables.

---

## Patterns that work

### Persian numbers and locale

```ts
const faNumber = new Intl.NumberFormat("fa-IR")

tickFormatter={(v) => faNumber.format(Number(v))}
```

For dates, prefer a Jalali-aware formatter when the product uses شمسی dates;
do not pretend `fa-IR` Gregorian labels are Jalali.

### Prefer logical layout around the chart

* Use `ms` / `me` / `ps` / `pe` for chrome around the chart.
* Keep inherently LTR fragments (formulas, codes) in `dir="ltr"`.

### Tooltips

* Put `dir="rtl"` on tooltip content.
* Format values with the same `Intl` instance as axes.
* Ensure portal roots inherit direction (or set it on the tooltip node).

### RTL geometry decision

Two valid product choices — pick one and document it:

1. **Localized chrome, LTR plot** — axes grow left→right as in Western charts;
   only labels/tooltips are Persian. Simpler with Recharts.
2. **Mirrored plot** — categories start from the right. Requires careful
   reversal of domain/order and testing of brushes/zooms.

Most product UIs should choose (1) unless stakeholders explicitly want mirrored
plots.

### Responsive

* Avoid fixed widths that clip Persian labels.
* Test long series names in legend.
* Stack legend below chart on small screens instead of side columns that
  collapse oddly in RTL.

---

## Common failures

* `flex-row-reverse` “fixes” that break when `dir` changes.
* Hardcoded `#` colors that ignore theme / Design System chart tokens.
* Formatting in one place (axis) but not tooltip → inconsistent digits.
* Assuming Recharts `layout="vertical"` automatically does RTL correctly.
* Nesting charts inside `PersianDigits` transforms but SVG `<text>` bypasses it —
  prefer explicit formatters on ticks.

---

## Best practices

* One shared `formatChartNumber` / `formatChartDate` helper.
* Chart config objects reference CSS variables (`var(--chart-1)`), not raw hex.
* Snapshot or screenshot test one bar, one line, one pie in RTL.
* Keep diagnosis evidence: screenshot + DOM `dir` + formatter output.

---

## Report

```markdown
## RTL chart report
**Library:** …
**Geometry choice:** localized chrome | mirrored plot
**Digits/locale:** pass | fail
**Tooltip/legend:** pass | fail
**Tokens/theme:** pass | fail
**Fix:** …
```
