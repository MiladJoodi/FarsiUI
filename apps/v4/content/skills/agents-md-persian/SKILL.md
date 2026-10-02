---
name: agents-md-persian
description: >
  Project-level Persian and RTL rules for coding agents. Use when a project
  targets Persian-speaking users in Iran and needs consistent Persian copy,
  RTL layout, Persian typography, Persian digits, Jalali dates, Iranian
  validation patterns, accessibility, and localized UI behavior without
  installing separate skills.
---

# Persian Project Rules

Use these rules as the default project-level guidance for Persian products. Apply them to every file and UI surface you touch unless the project explicitly defines a different requirement.

This skill is designed to work as a compact project-wide rule set. It combines the most important practices for Persian language, RTL layout, typography, dates, numbers, forms, validation, accessibility, and UI copy.

---

## Language and Register

### User-facing language

All user-facing text should be Persian when the product is intended for Persian-speaking users.

This includes:

* Labels
* Buttons
* Placeholders
* Helper text
* Validation messages
* Error messages
* Empty states
* Loading states
* Toasts
* Dialog text
* Tooltips
* Menus
* Navigation
* `aria-label`
* `aria-description`
* Page titles
* Metadata
* Confirmation messages
* Success messages
* Authentication flows
* Emails and notifications

Keep technical identifiers in English:

* Variable names
* Function names
* Component names
* Props
* Types
* File names
* URLs
* API fields
* Database fields
* Environment variables
* Git branches
* Commit messages

Do not translate technical identifiers merely to make the code look Persian.

### Register

Choose one copy register for the product and keep it consistent.

**Formal but human:**

* می‌شود
* می‌توانید
* کنید
* است
* وارد شوید

**Light conversational:**

* میشه
* می‌تونید
* کنید
* وارد بشید

Do not mix formal and conversational language randomly within the same screen or flow.

Avoid bureaucratic or machine-generated Persian such as:

* می‌باشد
* لازم به ذکر است
* در راستای
* بدین منظور
* می‌گردد
* به عمل آورید
* مراتب
* کاربر گرامی

Prefer short, direct sentences.

### English defaults

Do not leave English placeholder copy in a Persian interface.

Avoid:

* `Submit`
* `Cancel`
* `Loading`
* `Something went wrong`
* `Oops`
* `Continue`
* `Next`
* `Previous`
* `Search`

Translate them according to the product's chosen register.

Do not translate brand names, product names, technical terms, or proper nouns when their official spelling should remain unchanged.

---

## Persian Orthography

Use standard Persian writing conventions.

### Characters

Use Persian characters:

* `ی` instead of Arabic `ي`
* `ک` instead of Arabic `ك`

Normalize user input when necessary before validation or storage.

### ZWNJ

Use the zero-width non-joiner where it is grammatically appropriate.

Examples:

```text
می‌شود
می‌خواهم
ثبت‌نام
داده‌ها
کاربرها
سفارش‌ها
پیش‌نمایش
به‌روزرسانی
```

Do not insert ZWNJ mechanically into every compound. Follow natural Persian orthography.

### Punctuation

Use Persian punctuation in visible Persian text:

```text
،  ؛  ؟  :
```

Use Persian quotation marks:

```text
«متن»
```

Avoid unnecessary English punctuation inside Persian sentences.

Do not use em dashes (`—`) in Persian UI copy. Prefer a comma, colon, parentheses, or a new sentence.

### Text normalization

When accepting Persian user input, consider normalization for:

* Persian/Arabic ی
* Persian/Arabic ک
* Persian/Arabic digits
* ZWNJ
* whitespace
* repeated spaces
* common Unicode variants

Do not silently change user content when the exact original text must be preserved.

---

## Direction and RTL

The application should use RTL as the default direction for Persian interfaces.

At the document level:

```html
<html lang="fa" dir="rtl">
```

Set the global direction once whenever possible.

Do not repeatedly add `dir="rtl"` to nested components unless the component actually requires a local direction override.

### LTR exceptions

Some content should remain LTR even inside an RTL interface:

* Email addresses
* URLs
* Domain names
* Phone numbers
* OTP codes
* IBAN
* Bank card numbers
* Tracking numbers
* API keys
* UUIDs
* Code
* File paths
* Package names
* Technical identifiers

Use explicit LTR containers when needed:

```tsx
<span dir="ltr">{email}</span>
```

Do not force LTR on surrounding Persian text unnecessarily.

---

## Logical Layout Properties

Use logical CSS properties and logical Tailwind utilities.

Prefer:

```text
ms-
me-
ps-
pe-
start
end
text-start
text-end
border-s
border-e
rounded-s-
rounded-e-
```

Avoid directional utilities when a logical equivalent exists:

```text
ml-
mr-
pl-
pr-
left-
right-
text-left
text-right
border-l
border-r
```

For spacing between siblings, prefer:

```text
gap-*
```

instead of:

```text
space-x-*
space-x-reverse
```

### Do not use `flex-row-reverse` as an RTL fix

Do not use:

```css
flex-row-reverse
```

simply to make an RTL layout look correct.

The document direction and logical layout properties should determine the correct visual order.

Use explicit ordering only when the product intentionally requires a different visual order.

### Positioning

Use logical positioning where the framework supports it.

Prefer:

```text
start-0
end-0
inset-inline-start
inset-inline-end
```

instead of:

```text
left-0
right-0
```

Pay special attention to:

* Absolute positioning
* Fixed elements
* Sticky elements
* Badges
* Floating buttons
* Dropdown indicators
* Navigation arrows
* Decorative elements

---

## RTL Components

RTL must work not only at the page level but inside every nested component.

Check:

* Dropdown menus
* Context menus
* Selects
* Comboboxes
* Popovers
* Tooltips
* Dialogs
* Drawers
* Sheets
* Command menus
* Date pickers
* Calendars
* Charts
* Tables
* Pagination
* Tabs
* Sidebars
* Nested menus
* Portals
* Floating UI
* Toasts

Do not assume that a component inherits RTL correctly simply because its parent is RTL.

### Portals and overlays

Components rendered through portals require special attention.

Check:

* `Dialog`
* `Popover`
* `DropdownMenu`
* `Tooltip`
* `Select`
* `Command`
* `Drawer`
* `Sheet`

Verify that:

1. Text direction is correct.
2. Alignment is correct.
3. Trigger and content positions are correct.
4. Collision handling works correctly.
5. Nested menus open toward the correct side.
6. Icons are positioned correctly.
7. Keyboard navigation remains logical.

### Nested RTL UI

Test nested structures explicitly.

For example:

```text
Dropdown
└── Submenu
    └── Submenu
        └── Action
```

Do not validate only the first-level menu.

---

## Navigation and Icons

Directional icons must communicate the correct direction for an RTL interface.

For example:

* Next → left-pointing arrow
* Previous → right-pointing arrow

Use icons according to meaning, not according to their original LTR implementation.

Be careful with icons such as:

* `ArrowLeft`
* `ArrowRight`
* `ChevronLeft`
* `ChevronRight`
* `Undo`
* `Redo`
* `ExternalLink`
* Navigation arrows

Not every icon should be mirrored. Icons with semantic meaning should only be transformed when their meaning is directional.

### Drawers and side panels

In RTL interfaces, side panels should generally open from the logical start edge.

Verify:

* Trigger direction
* Animation direction
* Close button position
* Overlay behavior
* Swipe direction
* Focus handling

---

## Typography

Use a Persian-compatible font configured through the project's typography system.

Prefer the project's configured font variable, for example:

```css
--font-sans
```

Do not introduce a new font inside an individual component unless there is a specific reason.

Suitable Persian fonts may include:

* Vazirmatn
* IRANSans
* Other project-approved Persian fonts

Do not assume that:

```text
Inter
Roboto
Geist
system-ui
```

alone provide an appropriate Persian typography experience.

### Font consistency

Avoid mixing incompatible Persian fonts within one interface.

Pay attention to:

* Persian glyph shapes
* Arabic glyphs
* Latin text
* Numbers
* Icons
* Headings
* Body text

If Arabic text appears alongside Persian text, verify that the chosen font handles both scripts consistently.

### Letter spacing

Persian text usually should not use aggressive letter spacing.

Avoid:

```text
tracking-wide
tracking-wider
tracking-tight
```

unless there is a deliberate typography reason.

Do not use uppercase transformations for Persian.

### Line height

A practical starting point:

* Body text: approximately `1.7–1.9`
* Headings: approximately `1.2–1.5`

Adjust based on the actual font and component.

Never apply these numbers mechanically if they make the interface worse.

---

## Numbers

Use Persian digits for visible user-facing numbers when the product's localization rules require Persian numerals.

Example:

```text
۱۲۳۴۵۶۷۸۹۰
```

Use Latin digits internally for:

* JavaScript values
* API payloads
* Database values
* IDs
* URLs
* Query parameters
* File names
* Technical identifiers

### Number conversion

Normalize input before processing.

Support conversion between:

```text
۰۱۲۳۴۵۶۷۸۹
0123456789
٠١٢٣٤٥٦٧٨٩
```

when the application accepts Persian and Arabic input.

Do not store formatted Persian numbers as the canonical numeric value.

---

## Number Formatting

For Persian UI, use appropriate Persian separators.

Examples:

```text
۱۲٬۴۵۰٬۰۰۰
۳٫۱۴
۲۵٪
```

Do not use:

```text
12,450,000
3.14
25%
```

in a surface that explicitly requires Persian numerals.

Keep raw values unchanged internally.

---

## Money

Use the correct Iranian currency unit consistently.

Example:

```text
۱۲٬۴۵۰٬۰۰۰ تومان
```

Rules:

* Unit comes after the amount.
* Use Persian digits in visible UI.
* Do not mix تومان and ریال within the same flow without clearly explaining the conversion.
* Do not use `$` for Iranian prices.
* Do not write `Toman` in Persian UI.

Do not invent currency conversions.

If the backend returns ریال but the UI displays تومان, make the conversion explicit in code and keep one canonical internal representation.

---

## Dates and Time

For Persian products intended for Iran, the UI should normally use the Jalali calendar when the product context expects Iranian dates.

Example:

```text
۱۴۰۵/۰۷/۱۰
```

### Storage

Store dates in a stable machine-readable format such as:

```text
ISO 8601
UTC
```

Do not store Persian-formatted display strings as the canonical date value.

### Time zone

For Iran-focused applications, use:

```text
Asia/Tehran
```

Do not hardcode a UTC offset as a permanent substitute for a real time zone.

Iran's civil-time rules can change independently of application code.

### Week

For an Iranian/Jalali calendar UI:

* Week starts on Saturday.
* Friday is the weekend.

Do not assume the Gregorian week configuration is correct for a Persian calendar component.

### Relative time

Use natural Persian:

```text
۲ ساعت پیش
۵ دقیقه پیش
دیروز
امروز
فردا
```

Avoid machine-translated phrases such as:

```text
قبل از ۲ ساعت
```

---

## Forms

Forms should be designed for Persian reading direction and Iranian input patterns.

### Labels

Place labels clearly above or beside fields according to the component design.

Do not use placeholders as the only field label.

A placeholder should provide an example or hint.

Example:

```text
شماره موبایل
مثلاً ۰۹۱۲۱۲۳۴۵۶۷
```

### Input direction

Most Persian text inputs should be RTL.

Use LTR for fields such as:

* Email
* Phone
* OTP
* IBAN
* Card number
* URL
* Verification codes
* Technical identifiers

The visual direction should match the data's structure, not simply the page direction.

---

## Iranian Validation

Normalize Persian and Arabic-Indic digits before validation.

When applicable, support common Iranian formats such as:

* Mobile number
* National ID
* IBAN / شبا
* Bank card
* Postal code
* Vehicle plate

Do not validate Iranian fields with unrelated foreign formats.

Examples:

### Mobile

Typical local format:

```text
09XXXXXXXXX
```

International format:

```text
+989XXXXXXXXX
```

If the application accepts multiple formats, normalize them to one canonical representation before storage.

### National ID

Iranian national ID uses:

* 10 digits
* A check digit
* Modulo-11 validation

Do not treat it as a generic 9-digit identifier.

### IBAN

Iranian IBAN:

```text
IR + 24 digits
```

Total length:

```text
26 characters
```

Validate the IBAN checksum using modulo 97.

### Bank card

Iranian bank cards generally use:

```text
16 digits
```

Use the appropriate checksum validation such as Luhn where applicable, while keeping bank-specific rules separate from generic checksum validation.

### Postal code

Iranian postal codes generally contain:

```text
10 digits
```

Do not use a US ZIP-code pattern.

---

## Validation Messages

Validation errors should be:

* Specific
* Short
* Human
* Located near the relevant field
* Actionable

Prefer:

```text
شماره موبایل باید ۱۱ رقم باشد و با ۰۹ شروع شود.
```

over:

```text
Invalid input.
```

Avoid exposing implementation details.

Do not write:

```text
Regex validation failed.
```

to the user.

---

## Accessibility

Persian localization must not reduce accessibility.

Maintain:

* Correct semantic HTML
* Keyboard navigation
* Focus states
* Screen-reader labels
* Accessible names
* Error associations
* Form descriptions
* Color contrast
* Touch target sizes

### ARIA

Translate user-facing ARIA labels naturally:

```tsx
aria-label="بستن"
```

Do not leave:

```tsx
aria-label="Close"
```

in a Persian-only interface.

Do not translate technical accessibility attributes that are not user-facing values.

### Direction and screen readers

Verify that RTL content is announced correctly.

Be especially careful with mixed Persian/LTR content such as:

* Phone numbers
* Dates
* Currency
* URLs
* Email addresses
* Verification codes

---

## Components and Design System

Use the project's existing component system.

If the project uses FarsiUI:

```tsx
import { Button } from "@/components/ui/button"
```

or the project's configured FarsiUI component source.

Do not introduce another UI library merely because a component is missing.

Before creating a new component:

1. Search existing components.
2. Check whether an existing component can be composed.
3. Check project conventions.
4. Reuse existing tokens and primitives.
5. Only create a new component when there is a real missing abstraction.

### Component source

If the project uses a configurable component source, define it clearly at the top of this file or in project documentation.

For example:

```text
Component source: FarsiUI
```

Do not silently mix:

* FarsiUI
* shadcn/ui
* another LTR component library

unless the project explicitly requires it.

---

## Colors and Design Tokens

Use the project's design tokens.

Prefer:

```text
bg-background
text-foreground
text-muted-foreground
border-border
bg-primary
text-primary-foreground
```

Do not hardcode colors inside individual components when an existing token represents the same semantic purpose.

Avoid unnecessary:

```css
#000000
#ffffff
oklch(...)
rgb(...)
```

inside component-level UI.

### Radius

Use the project's radius tokens.

For example:

```css
--radius
```

Do not create arbitrary radius values for every component.

### Consistency

The goal is not to make every component identical.

The goal is to make components feel like they belong to the same product.

---

## Persian UI Copy

Write UI copy for the actual action.

Prefer:

```text
ذخیره
ذخیره تغییرات
حذف
ویرایش
ادامه
بازگشت
جست‌وجو
تلاش دوباره
```

Avoid unnecessary verbosity:

```text
برای انجام عملیات ذخیره‌سازی، لطفاً روی دکمه زیر کلیک کنید.
```

Prefer:

```text
تغییرات ذخیره نشد. دوباره تلاش کنید.
```

### Buttons

Use verbs whenever possible.

Good:

```text
ثبت سفارش
ذخیره تغییرات
افزودن محصول
مشاهده جزئیات
```

Avoid vague:

```text
انجام
تأیید
کلیک کنید
```

unless the context makes the action obvious.

---

## Empty States

An empty state should answer:

1. What is empty?
2. Why is it empty, if useful?
3. What can the user do next?

Example:

```text
هنوز سفارشی ثبت نکرده‌اید.

بعد از ثبت سفارش، وضعیت آن را اینجا می‌بینید.

[ثبت سفارش]
```

Do not write generic:

```text
No data found.
```

---

## Loading and Error States

Use natural Persian.

Loading:

```text
در حال بارگذاری...
```

Action-specific loading can be clearer:

```text
در حال ذخیره...
در حال ارسال...
در حال دریافت اطلاعات...
```

Error:

```text
دریافت اطلاعات انجام نشد.
```

If retry is available:

```text
دریافت اطلاعات انجام نشد.

[تلاش دوباره]
```

Do not expose raw server errors unless the user needs them.

---

## Search and Filtering

Search placeholders should be concise:

```text
جست‌وجو...
```

If the search context is specific:

```text
جست‌وجوی محصول...
جست‌وجوی کاربر...
```

Use Persian terminology consistently for:

* فیلتر
* مرتب‌سازی
* جست‌وجو
* نتایج
* پاک کردن فیلترها

---

## Tables

RTL tables require deliberate column ordering.

Check:

* Header alignment
* Numeric alignment
* Action columns
* Sticky columns
* Horizontal scrolling
* Sorting indicators
* Pagination
* Empty states

Numbers may be visually aligned differently from Persian text.

For example:

* Names → RTL
* Prices → numeric alignment
* IDs → LTR
* Phone numbers → LTR

Do not force every cell to have the same text direction.

---

## Charts

Charts are a common RTL failure point.

Verify:

* Axis labels
* Tooltip alignment
* Legend order
* Tooltip position
* Numeric formatting
* Dates
* Grid labels
* Hover states
* Portals
* Responsive behavior

Do not assume a chart library automatically supports Persian RTL.

Check both the chart itself and all floating elements around it.

---

## Date Pickers and Calendars

Persian calendars should be evaluated as a complete interaction, not just translated text.

Check:

* Jalali dates
* Persian digits
* Saturday week start
* Friday weekend
* Month names
* Navigation arrows
* Selected date
* Range selection
* Keyboard navigation
* Min/max dates
* Today button
* Popover direction
* Portal positioning

Do not replace the calendar library's data model with Persian display strings.

---

## SEO and Metadata

For Persian pages:

```html
<html lang="fa" dir="rtl">
```

Use Persian metadata where appropriate.

Check:

* `<title>`
* Meta description
* Canonical URL
* Open Graph metadata
* `lang`
* `dir`
* JSON-LD
* Sitemap
* Breadcrumbs
* `hreflang` for multilingual sites

Use stable URLs and avoid creating separate URLs merely because text is displayed in Persian digits.

---

## URLs and Slugs

Do not automatically assume Persian URLs are always better or worse.

Follow the project's URL strategy.

If Persian slugs are used:

* Normalize Arabic/Persian characters.
* Remove unnecessary punctuation.
* Normalize whitespace.
* Handle ZWNJ consistently.
* Keep slugs stable once published.

Do not silently change an existing public URL without considering redirects.

---

## Mixed Persian and English Content

Persian interfaces frequently contain English technical terms.

Examples:

```text
React
Next.js
GitHub
API
npm
FarsiUI
```

Keep official product and technology names unchanged.

Use direction isolation when mixed text becomes visually ambiguous.

For example:

```tsx
<span dir="ltr">Next.js</span>
```

Do not transliterate technical names merely to make them look Persian.

---

## Mobile and Responsive UI

RTL correctness must survive responsive layouts.

Test:

* Mobile
* Tablet
* Desktop
* Narrow containers
* Long Persian text
* Long labels
* Long buttons
* Wrapped headings
* Horizontal scrolling
* Drawer interactions

Do not assume a layout that works in desktop RTL will work on mobile.

Pay special attention to:

* Dropdown width
* Dialog positioning
* Sidebar behavior
* Navigation
* Button groups
* Form fields
* Tables
* Charts

---

## Motion and Animation

Animations should respect RTL direction.

For example:

* Drawer entering from the start edge
* Toast entering from the correct side
* Carousel movement
* Menu expansion
* Navigation transitions

Do not simply reverse every animation.

Determine whether the animation represents:

* Physical movement
* Navigation direction
* Content order
* Decorative motion

Then apply the appropriate direction.

---

## File and Code Rules

Do not translate code identifiers.

Keep:

```tsx
function handleSubmit() {}
```

not:

```tsx
function handleارسال() {}
```

Keep:

```tsx
const userName = ...
```

not:

```tsx
const نامکاربر = ...
```

The same applies to:

* Types
* Props
* Hooks
* CSS variables
* Routes
* API fields
* Database columns
* Environment variables

User-facing strings are the exception.

---

## Git and Developer-Facing Text

Developer-facing content may remain English unless the project explicitly requires Persian.

Keep:

* Commit messages
* Branch names
* Pull request titles
* Code comments
* API documentation

in the project's established language.

Do not force Persian into developer-facing code merely because the product UI is Persian.

---

## Review Before Finishing

Before completing a Persian UI change, inspect the actual diff.

Search for directional utilities that commonly break RTL:

```text
ml-
mr-
pl-
pr-
left-
right-
text-left
text-right
border-l
border-r
space-x
space-x-reverse
```

Also search for:

```text
flex-row-reverse
dir="ltr"
```

and verify that every occurrence is intentional.

### Text review

Check:

* Persian ی and ک
* ZWNJ
* Persian punctuation
* Persian quotation marks
* Register consistency
* No unnecessary English copy
* Natural wording
* Correct Persian digits where required

### RTL review

Check:

* Document direction
* Nested components
* Portals
* Popovers
* Tooltips
* Dropdowns
* Dialogs
* Drawers
* Charts
* Absolute positioning
* Sticky elements
* Responsive layouts

### Number review

Check:

* Visible numbers
* Prices
* Percentages
* Phone numbers
* IDs
* Dates
* Pagination

### Date review

Check:

* Jalali display
* Persian month names
* Persian digits
* Saturday week start
* Friday weekend
* Correct time zone
* Machine-readable storage

---

## Practical QA Checklist

Before considering the work complete:

* [ ] All user-facing text is Persian.
* [ ] The chosen copy register is consistent.
* [ ] Persian `ی` and `ک` are used.
* [ ] ZWNJ is used where natural.
* [ ] Persian punctuation is used.
* [ ] No em dash is used in Persian UI copy.
* [ ] `<html lang="fa" dir="rtl">` is configured correctly.
* [ ] LTR-only fields are explicitly handled.
* [ ] Logical spacing and positioning utilities are used.
* [ ] No unnecessary `flex-row-reverse` is used.
* [ ] Persian typography uses the project's configured font.
* [ ] Persian text does not use unnecessary letter spacing.
* [ ] Visible numbers use the project's Persian-number policy.
* [ ] Currency formatting is consistent.
* [ ] Dates use the appropriate Persian/Jalali representation.
* [ ] Iran-specific validation rules are used where applicable.
* [ ] Error messages are specific and natural.
* [ ] Accessibility labels are localized.
* [ ] Portals and floating UI are RTL-correct.
* [ ] Nested dropdowns are RTL-correct.
* [ ] Charts and tooltips are RTL-correct.
* [ ] Responsive layouts are tested in RTL.
* [ ] Existing design tokens are reused.
* [ ] No unrelated UI library was introduced.
* [ ] SEO metadata is localized where appropriate.
* [ ] The final diff contains no accidental LTR utilities.
* [ ] New Persian copy sounds like something an Iranian product would actually ship.

---

## Scope

These rules are project-level defaults.

When a dedicated skill exists for a specific task, use the more specialized guidance for that task.

Examples:

* Persian UI implementation → `persian-rtl-ui`
* Persian UI copy → `persian-ui-copy`
* Conversational Persian → `persian-conversational`
* Formal Persian → `persian-formal`
* Jalali calendar work → `jalali-calendar`
* Iranian validation → `iran-validation`
* Persian SEO → `persian-seo`

Specialized guidance can extend these rules but should not silently contradict the project's explicit requirements.

---

## Tool Setup

### Claude Code

Use the repository root:

```text
CLAUDE.md
```

Or keep the rules in:

```text
docs/agents-md-persian.md
```

and reference them from `CLAUDE.md`:

```md
@docs/agents-md-persian.md
```

### Cursor

Use:

```text
.cursor/rules/agents-md-persian.mdc
```

with frontmatter:

```md
---
alwaysApply: true
---
```

Then place the project rules below the frontmatter.

### Codex

Use:

```text
AGENTS.md
```

at the repository root.

If the project uses nested `AGENTS.md` files, place more specific rules closer to the directories they govern.

### Other coding agents

If the agent supports project-level instruction files, use the format and location documented by that tool.

Prefer one canonical rules file when possible rather than maintaining several independently edited copies.

---

## Important Principle

Do not treat Persian support as a translation task.

A Persian product should behave correctly as a Persian product:

* Persian language
* Persian typography
* RTL layout
* Iranian dates
* Persian numbers
* Iranian validation
* Natural Persian copy
* Accessible interactions
* Correct nested RTL behavior
* Appropriate Iranian product conventions

When making a change, preserve the project's existing architecture and design system. Localize the experience without unnecessarily rewriting unrelated code.
