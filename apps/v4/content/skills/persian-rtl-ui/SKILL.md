---
name: persian-rtl-ui
description: >
  Build natural Persian RTL interfaces with React and Tailwind. Use for
  Persian UI, RTL layouts, component styling, forms, dashboards and
  converting LTR interfaces to RTL. Covers logical CSS, Persian typography,
  Persian numbers, Jalali dates, Iranian form patterns, accessible RTL
  behavior and token-based styling.
---

# Persian RTL UI

Build Persian interfaces as RTL interfaces from the beginning. Adding
`dir="rtl"` to an existing LTR interface is not enough.

Apply these rules to layout, typography, forms, overlays, icons, numbers,
dates, accessibility and Iranian product patterns.

## 1. Direction

* Set the document direction with `<html lang="fa" dir="rtl">`. Do not add
  `dir="rtl"` to individual components unless a specific nested section
  requires a different direction.
* Prefer logical CSS utilities: `ms-*`, `me-*`, `ps-*`, `pe-*`, `start-*`,
  `end-*`, `text-start`, `text-end`, `border-s`, `border-e`, `rounded-s-*`,
  `rounded-e-*`, `inset-s-*`, `inset-e-*`.
* Avoid physical-direction utilities when the layout should adapt to RTL:
  `ml-*`, `mr-*`, `pl-*`, `pr-*`, `left-*`, `right-*`, `text-left`,
  `text-right`, `border-l`, `border-r`.
* Use `gap-*` instead of `space-x-*`.
* Do not add `flex-row-reverse` just to compensate for RTL.
* Directional icons should match RTL. For example, "next" points left and
  "back" points right.
* Keep inherently LTR values such as phone numbers, email, OTP, IBAN, card
  numbers, URLs and code in `dir="ltr"` where appropriate.

## 2. RTL components

RTL must work beyond the main document flow.

Check direction, alignment and positioning in:

* Dialog
* Popover
* Tooltip
* Dropdown Menu
* Context Menu
* Select and Combobox
* Drawer and Sheet
* Toast
* Nested menus
* Portals
* Floating elements
* Absolutely positioned elements
* Charts and chart tooltips

Do not assume that a component is RTL-safe just because its parent has
`dir="rtl"`.

## 3. Typography

* Use the Persian font configured by the project.
* Do not replace it with a Latin-first font such as Inter, Roboto or Geist
  unless explicitly required.
* Do not add artificial letter spacing to Persian text.
* Avoid `tracking-*` on Persian text unless there is a deliberate design
  reason.
* Use appropriate Persian line-height and the font's available weights.
* Keep Latin text in its natural form inside mixed Persian content.
* Use `<bdi>` or `dir="ltr"` when a Latin value needs explicit isolation.
* Do not uppercase Persian text.

Example:

```text
کد سفارش SKU-2048
```

should remain a Persian sentence with the SKU isolated only when necessary,
not become an entirely LTR block.

## 4. Numbers, money and dates

Use Persian digits for visible Persian content when appropriate:

```text
۳ کالا
۲ ساعت پیش
۱٬۲۵۰٬۰۰۰ تومان
۲۰٪ تخفیف
```

Use:

* `٬` for thousands
* `٫` for decimals
* `٪` for percentages

Money should place the unit after the number:

```text
۱۲٬۴۵۰٬۰۰۰ تومان
```

Keep machine-readable values such as API payloads, JSON, database values and
form values in their required format. Convert them at the presentation layer.

For Persian-first products, use the Jalali calendar when the product requires
it. Do not rely on `toLocaleDateString` alone when an actual Jalali conversion
is required.

## 5. Forms

* Keep labels visible and separate from placeholders.
* Use `htmlFor` and correctly associated inputs.
* Phone inputs should support common Iranian formats such as
  `۰۹۱۲۳۴۵۶۷۸۹` and `+989123456789` when required.
* Use `dir="ltr"` for phone, OTP, email, IBAN, card and URL inputs where it
  improves input behavior.
* OTP inputs should support paste and `autoComplete="one-time-code"` where
  applicable.
* Normalize Persian and Arabic-Indic digits before validation when the field
  accepts numeric input.
* Show validation errors close to the relevant field and use
  `aria-invalid` where appropriate.
* Keep the primary action clear and visually distinct.
* Avoid unnecessary visual clutter in forms.

## 6. Colors and shape

Use the project's existing semantic design tokens.

Prefer tokens such as:

```text
background
foreground
card
primary
secondary
muted
accent
border
input
ring
destructive
```

Do not introduce arbitrary colors or hard-coded values inside components when
an existing token can be used.

Use the project's radius system consistently.

## 7. Motion

* Keep interface animations short and purposeful.
* Respect `prefers-reduced-motion`.
* Directional animations should follow RTL.
* Prefer animating `transform` and `opacity` instead of layout properties
  such as `top`, `left` and `width`.

## 8. Accessibility

* Preserve a visible focus state.
* Do not use `outline-none` without an equivalent focus treatment.
* Give icon-only buttons meaningful Persian `aria-label` values.
* Preserve keyboard navigation and focus management in dialogs and menus.
* Use `lang="fa"` for Persian document content.
* Make sure muted text remains readable in both light and dark themes.

## 9. Iranian product patterns

When the product requires Iranian-specific UI patterns, use existing project
components and utilities instead of reimplementing them unnecessarily.

Common patterns include:

* شماره موبایل
* کد ملی
* شماره شبا
* شماره کارت
* کد پستی
* پلاک خودرو
* استان، شهر، خیابان، پلاک، واحد
* تومان و ریال
* تقویم شمسی
* وضعیت پرداخت
* روش‌های ارسال

Examples of natural field structures:

```text
استان
شهر
آدرس
پلاک
واحد
کد پستی
```

Do not invent validation rules for Iranian identifiers without checking the
project's existing implementation or requirements.

## 10. Copy inside components

User-facing text should be natural Persian:

* labels
* placeholders
* empty states
* errors
* loading states
* confirmations
* notifications
* accessible labels

Keep code identifiers, props, variables, component names and file names in
English.

Use the `persian-ui-copy` skill when available for detailed Persian UI
wording and terminology.

## 11. RTL review

Before returning the implementation, inspect the complete interface.

Pay particular attention to:

* nested components
* Portal-based components
* Dropdowns
* Tooltips
* Popovers
* Charts
* Dialogs
* absolute-positioned elements
* floating controls
* directional icons
* mixed Persian and Latin content

A component that looks correct in the main DOM can still be incorrect when
rendered through a Portal or nested inside another component.

## 12. Final checklist

1. Document direction is RTL.
2. Layout uses logical CSS utilities.
3. No unnecessary physical-direction utilities.
4. No unnecessary `flex-row-reverse`.
5. Persian text has no artificial letter spacing.
6. LTR values are handled with the correct direction.
7. Visible Persian numbers and money use the product's formatting rules.
8. Jalali dates are used where required.
9. Colors and radius come from existing design tokens.
10. Directional icons match RTL.
11. Portals, overlays and nested components have been checked.
12. Focus states and accessible labels are preserved.
13. User-facing text is natural Persian.
14. Iranian-specific patterns use existing project utilities where available.
