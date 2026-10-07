---
name: persian-seo
description: >
  Technical and on-page SEO for Persian (Farsi) websites: document language,
  RTL direction, fa-IR metadata, hreflang, Persian titles and descriptions,
  stable slug and URL strategy, ZWNJ and Persian/Arabic character
  normalization, Open Graph, JSON-LD, canonical URLs, sitemaps, robots,
  internal linking, Persian keyword variants, Persian content structure,
  fonts, accessibility, and Core Web Vitals. Use when writing metadata,
  structured data, Persian blog content, product pages, landing pages, or
  URL structures for an Iranian or Persian-language site, or when the user
  mentions سئو، سئوی فارسی، متادیتا، عنوان صفحه، توضیحات، اسلاگ، URL،
  JSON-LD، hreflang، گوگل. Examples target Next.js, but the rules are
  framework-independent.
---

# Persian SEO (سئوی فارسی)

Persian SEO is not simply translating an English page into Persian.

A Persian website needs correct language metadata, RTL direction, Persian
typography, stable URLs, natural Persian copy, appropriate structured data,
and consistent handling of Persian and Arabic characters.

Common mistakes include:

* `lang="en"` on Persian pages.
* `og:locale` left at `en_US`.
* English-only titles and descriptions.
* Putting ZWNJ characters inside URLs.
* Translating English SEO copy word-for-word.
* Changing URLs whenever a title changes.
* Using English keyword patterns for Persian search intent.
* Incorrect Persian/Arabic character normalization.
* Treating Persian content as an RTL-only styling problem.

Fix the technical foundation first, then optimize the content.

---

## 1. Document language and direction

A Persian page should normally declare its language and direction at the
document level:

```html
<html lang="fa" dir="rtl">
```

`fa-IR` can also be used when the content is specifically targeted at Iran:

```html
<html lang="fa-IR" dir="rtl">
```

### Language rules

* Use `lang="fa"` or `lang="fa-IR"` for Persian content.
* Use `dir="rtl"` for the Persian document.
* Do not use `lang="en"` simply because the framework or template defaults
  to English.
* Mixed-language sections should declare their own language.

Example:

```html
<h1 lang="fa">راهنمای ساخت اپلیکیشن</h1>

<span lang="en">Next.js</span>
```

Do not change the entire document language because a page contains English
technical terms.

---

## 2. Hreflang

Use `hreflang` when real localized versions of the same page exist.

For example:

```html
<link
  rel="alternate"
  hreflang="fa-IR"
  href="https://example.com/fa/products"
/>

<link
  rel="alternate"
  hreflang="en"
  href="https://example.com/en/products"
/>

<link
  rel="alternate"
  hreflang="x-default"
  href="https://example.com/en/products"
/>
```

Rules:

* Do not add `hreflang` links for pages that do not actually exist.
* Every alternate should point to a real canonical page.
* Localized versions should reference each other.
* Keep the URL structure consistent.
* `hreflang` describes language/region targeting; it is not a ranking
  keyword signal.

For a Persian-only website, there is usually no reason to invent an English
alternate solely to add `hreflang`.

---

## 3. Page titles

The `<title>` should be written naturally in Persian.

Put the main subject near the beginning and the brand near the end when the
brand is useful.

Example:

```text
کامپوننت‌های راست‌چین برای React | FarsiUI
```

Avoid:

```text
FarsiUI | بهترین کامپوننت‌های رایگان و حرفه‌ای و مدرن و کاربردی برای React
```

### Rules

* One meaningful title per page.
* Describe the actual page.
* Put the primary topic near the beginning when natural.
* Avoid keyword stuffing.
* Do not repeat the same title across many pages.
* Keep titles concise enough to avoid unnecessary truncation.
* Use Persian digits in visible Persian copy when appropriate.
* Keep established technical names such as `React`, `Next.js`, `Tailwind`
  and product names in their normal Latin form when that is how users search
  for them.

Do not optimize title length using an exact character count. Search engines
render titles based on available pixel width.

---

## 4. Meta descriptions

Write a short, useful Persian description that explains what the page offers.

Example:

```html
<meta
  name="description"
  content="کامپوننت‌های RTL و فارسی برای ساخت رابط‌های کاربری مدرن با React و Next.js."
/>
```

Rules:

* Usually one or two natural sentences.
* Describe the actual page.
* Put the important information early.
* Do not create keyword lists.
* Do not repeat the title mechanically.
* Do not stuff every possible spelling variant into the description.
* Avoid generic phrases such as «بهترین سایت» unless they communicate
  something real.

The description is primarily a search-result snippet candidate, not a
guaranteed ranking factor.

---

## 5. Open Graph and social metadata

> **Deep dive:** For implementing or debugging `og:image`, Twitter/X cards,
> Telegram/WhatsApp/LinkedIn previews, dynamic OG images, crawler cache, and
> Next.js metadata failures, use the dedicated skill
> `open-graph-social-preview` instead of expanding this section.

Persian pages should use Persian social metadata.

```ts
export const metadata = {
  title: "کامپوننت‌های راست‌چین برای React | FarsiUI",

  description:
    "کامپوننت‌های RTL و فارسی برای ساخت رابط‌های کاربری مدرن با React و Next.js.",

  openGraph: {
    locale: "fa_IR",
    type: "website",
    title: "کامپوننت‌های راست‌چین برای React | FarsiUI",
    description:
      "کامپوننت‌های RTL و فارسی برای ساخت رابط‌های کاربری مدرن با React و Next.js.",
  },

  twitter: {
    card: "summary_large_image",
  },
};
```

Use:

```text
og:locale = fa_IR
```

for Persian content targeted to Iran.

If the page is specifically Persian but not geographically limited to Iran,
choose the locale strategy according to the site's actual audience.

### Social images

For Persian Open Graph images:

* use a Persian-capable font;
* render Persian text correctly;
* test RTL alignment;
* avoid relying on a browser/system fallback font;
* keep important text away from image edges.

---

## 6. Canonical URLs

Every indexable page should have a clear canonical URL when canonicalization
is necessary.

The canonical URL should represent the actual preferred version of the page.

Example:

```html
<link
  rel="canonical"
  href="https://example.com/fa/components/button"
/>
```

Rules:

* Prefer absolute canonical URLs.
* Use one consistent URL format.
* Keep protocol and hostname consistent.
* Avoid unnecessary query parameters.
* Make trailing-slash behavior consistent.
* Make sure canonical URLs point to pages that actually exist.
* Do not canonicalize every localized page to a different language merely
  because it is easier.

A Persian and English version of the same content can each have its own
canonical URL.

---

# 7. Persian URLs and slugs

There are two valid approaches.

### Persian slugs

```text
/blog/راهنمای-تقویم-شمسی
```

Advantages:

* readable for Persian users;
* closely matches Persian page titles;
* can reflect Persian search intent.

Disadvantages:

* URLs become percent-encoded when copied in some contexts;
* can be visually long.

### Latin transliterated slugs

```text
/blog/rahnama-tagvim-shamsi
```

Advantages:

* short;
* familiar in technical systems;
* avoids encoded Persian characters.

Disadvantages:

* less readable for Persian users;
* transliteration can become inconsistent.

Both are valid.

**Choose one strategy and keep it stable.**

Do not switch between Persian and transliterated slugs arbitrarily.

---

## 8. Slug rules

Regardless of the strategy:

* Never put ZWNJ (`U+200C`) in a URL.
* Use hyphens instead of underscores.
* Use Latin digits in URLs.
* Normalize Arabic `ي` to Persian `ی`.
* Normalize Arabic `ك` to Persian `ک`.
* Remove unnecessary punctuation.
* Avoid repeated separators.
* Avoid changing published slugs unnecessarily.
* Keep URLs lowercase when using Latin slugs.
* Do not double-encode percent-encoded URLs.
* Do not create multiple URLs for the same content because of different
  character variants.

Example:

```text
می‌شود
```

should not produce a URL containing the ZWNJ.

Possible Persian slug:

```text
می-شود
```

or transliterated:

```text
mishavad
```

---

## 9. Stable URLs

A title change should not automatically change a published URL.

Bad:

```text
/blog/بهترین-روش-ساخت-اپلیکیشن
```

then later:

```text
/blog/راهنمای-ساخت-اپلیکیشن-با-react
```

without redirecting the old URL.

If a published URL must change:

1. Create the new canonical URL.
2. Redirect the old URL with a permanent redirect.
3. Update internal links.
4. Update sitemap references.
5. Update canonical metadata.
6. Check for redirect chains.

Avoid unnecessary URL migrations.

---

# 10. Persian character normalization

Persian and Arabic keyboards can produce visually similar but technically
different characters.

Common examples:

```text
ی vs ي
ک vs ك
```

Normalize these characters consistently before generating slugs, comparing
user-generated identifiers, or deduplicating content.

Do not blindly normalize the entire document if the exact Unicode characters
are meaningful to another system.

For SEO-related processing, normalization should happen at the appropriate
boundary:

* slug generation;
* search indexing;
* comparison;
* deduplication.

---

# 11. ZWNJ and Persian typography

ZWNJ (`U+200C`) is useful in Persian writing.

Examples:

```text
می‌شود
کتاب‌ها
رفته‌ام
```

Use ZWNJ naturally in visible Persian text when linguistically appropriate.

Do not put ZWNJ in:

* URLs;
* slugs;
* filenames intended to be URL identifiers;
* IDs.

A useful distinction:

```text
Visible text:
می‌شود

URL:
می-شود
```

Do not remove ZWNJ from visible Persian content simply because it is
inconvenient for URLs.

---

# 12. JSON-LD

Use structured data that accurately describes the page.

For Persian content, include:

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "inLanguage": "fa-IR"
}
```

`inLanguage` should reflect the actual language of the represented content.

### Dates

JSON-LD dates should use machine-readable ISO 8601/Gregorian values:

```json
{
  "datePublished": "2026-09-20"
}
```

The visible Persian UI can show:

```text
۲۹ شهریور ۱۴۰۵
```

Do not put the Persian display date into an ISO date property.

### Breadcrumbs

Breadcrumb names should match the visible page:

```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "خانه"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "محصولات"
    }
  ]
}
```

### Organization

For a Persian organization:

```json
{
  "@type": "Organization",
  "name": "نام فارسی برند",
  "alternateName": "English Brand"
}
```

Only provide `alternateName` when the Latin name is actually used by the
organization.

---

# 13. Products and prices

When representing Iranian products in structured data, distinguish between
rial and toman.

If the numeric price is expressed as Iranian rial:

```json
{
  "price": "15000000",
  "priceCurrency": "IRR"
}
```

Do not put:

```json
{
  "price": "15 میلیون تومان"
}
```

inside a numeric price property.

If the UI shows toman, make the unit explicit in visible content and convert
carefully when generating structured data.

Never invent currency conversions.

---

# 14. Structured data accuracy

Do not add JSON-LD merely to increase the amount of metadata.

Structured data must represent content that actually exists on the page.

Do not:

* invent ratings;
* invent reviews;
* invent prices;
* invent authors;
* mark hidden content as visible structured data;
* create fake FAQ questions;
* add unsupported schema types.

Use the schema type that best matches the actual page.

---

# 15. Sitemaps

Sitemaps should contain canonical, indexable URLs.

For Persian URLs, use the same URL representation that the site actually
serves.

Rules:

* Do not include redirected URLs.
* Do not include `noindex` pages.
* Do not include duplicate URLs.
* Do not include arbitrary query-string variants.
* Keep sitemap URLs consistent with canonical URLs.
* Update the sitemap when important indexable pages are added or removed.

Do not create a separate sitemap solely because URLs contain Persian
characters unless the site's architecture actually requires it.

---

# 16. Robots.txt

Do not accidentally block resources required to render the page correctly.

Review whether the following are accessible to crawlers when needed:

* CSS;
* JavaScript;
* fonts;
* important images.

For example, unnecessarily blocking a font directory can affect rendered
page quality.

Do not use `robots.txt` as a replacement for `noindex`.

A URL that should not appear in search should be handled with the appropriate
indexing strategy rather than simply assuming that robots blocking solves
everything.

---

# 17. Persian keyword research

Persian users may search the same concept in several forms.

Examples:

```text
می‌شود
می شود

کامپوننت
کامپوننت‌ها

ری‌اکت
React
```

Treat these as search variants, not as separate keywords that all need to be
stuffed into the page.

### Rules

* Choose one natural spelling for the page.
* Use correct Persian writing.
* Let natural context cover common variants.
* Do not create awkward keyword lists.
* Do not repeat the same keyword in every heading.
* Match content to search intent rather than only matching words.

Common Persian intent modifiers include:

```text
قیمت
خرید
آموزش
رایگان
دانلود
بهترین
چیست
چطور
```

Use them only when they describe the actual intent of the page.

---

# 18. Persian and English technical terms

Persian users frequently search for technical products using their original
English names.

Examples:

```text
React
Next.js
Tailwind CSS
TypeScript
PostgreSQL
```

Do not translate established technical names into unnatural Persian simply
for SEO.

A natural sentence can contain both:

```text
ساخت رابط کاربری با React و Tailwind CSS
```

Use the form readers actually recognize.

---

# 19. Persian numbers

Visible Persian content can use Persian digits:

```text
۱۰ کامپوننت
۲۹ شهریور ۱۴۰۵
۱۵۰٬۰۰۰ تومان
```

URLs should normally use ASCII digits:

```text
/page/10
```

Do not turn identifiers or URLs into localized numeric strings simply because
the visible UI is Persian.

---

# 20. Content structure

Good Persian SEO content should answer the search intent quickly.

Do not begin an article with several paragraphs of generic introduction such
as:

```text
در دنیای امروز و با پیشرفت روزافزون فناوری...
```

Instead, answer the actual question early.

For example:

```text
تقویم شمسی در JavaScript به‌صورت پیش‌فرض پشتیبانی نمی‌شود، بنابراین برای
نمایش تاریخ جلالی باید از یک کتابخانه یا راهکار مناسب استفاده کنید.
```

### Headings

Use meaningful Persian headings:

```text
<h1>راهنمای استفاده از تقویم شمسی در React</h1>

<h2>چرا تقویم شمسی به کتابخانه نیاز دارد؟</h2>

<h2>چطور تقویم شمسی را در React پیاده کنیم؟</h2>
```

Rules:

* One clear primary `h1`.
* Use `h2` and `h3` for actual content structure.
* Do not create headings solely to insert keywords.
* Keep headings understandable without reading the surrounding paragraph.

---

# 21. Internal links

Internal links should describe their destination.

Prefer:

```text
راهنمای استفاده از تقویم شمسی
```

over:

```text
اینجا کلیک کنید
```

Use natural Persian anchor text.

Do not force exact-match keywords into every internal link.

Make important pages reachable through normal navigation and contextual
links.

---

# 22. Persian blog content

For Persian blog posts:

* Write for the actual reader.
* Use natural Persian grammar.
* Preserve appropriate ZWNJ.
* Keep technical terms recognizable.
* Answer the main query early.
* Use descriptive headings.
* Link to related pages naturally.
* Avoid machine-translated sentence structures.
* Keep examples culturally and technically relevant to Persian users.
* Use real authors and dates when the site provides them.
* Do not invent credentials, expertise, reviews, or experience.

For dates, distinguish between:

* machine-readable date;
* visible Persian calendar date.

---

# 23. Article metadata

A Persian article can expose:

```json
{
  "@type": "Article",
  "inLanguage": "fa-IR",
  "headline": "راهنمای استفاده از تقویم شمسی در React",
  "datePublished": "2026-09-20",
  "dateModified": "2026-09-25"
}
```

Use a real author:

```json
{
  "author": {
    "@type": "Person",
    "name": "نام واقعی نویسنده"
  }
}
```

Do not invent an author simply to populate structured data.

---

# 24. Images and alt text

Persian pages should have meaningful Persian `alt` text when the image conveys
information.

Example:

```html
<img
  src="/images/jalali-calendar.webp"
  alt="نمایش تقویم شمسی در رابط کاربری"
/>
```

Do not stuff keywords into `alt`.

For decorative images:

```html
alt=""
```

may be appropriate.

Keep filenames stable and URL-safe.

Example:

```text
jalali-calendar.webp
```

instead of unnecessarily complex Persian filenames.

Use modern image formats such as WebP or AVIF where appropriate.

Always provide dimensions or aspect-ratio information when possible to reduce
layout shift.

---

# 25. Fonts and Persian rendering

Persian typography affects both UX and perceived content quality.

For Persian pages:

* use a font with proper Arabic-script/Persian glyph coverage;
* include the Latin glyphs needed by technical terms;
* subset fonts when practical;
* preload only critical fonts;
* use `font-display: swap`;
* avoid loading unnecessary font weights;
* test the fallback font.

Do not assume that a Latin-first font will render Persian correctly.

A fallback mismatch can create noticeable layout shifts because Persian fonts can
have significantly different metrics.

Where appropriate, use CSS font metric controls such as `size-adjust`,
`ascent-override`, and `descent-override` to reduce layout shifts.

---

# 26. Core Web Vitals

Persian pages have the same Core Web Vitals requirements as other pages.

Pay particular attention to:

* font loading;
* image dimensions;
* hero images;
* layout shifts caused by Persian font fallback;
* large client-side bundles;
* unnecessary JavaScript;
* mobile network performance.

Do not add heavy SEO libraries solely for metadata that can be generated
directly.

Test on realistic mobile hardware and network conditions.

---

# 27. Accessibility and SEO

Correct language metadata also helps accessibility.

For Persian pages:

```html
<html lang="fa" dir="rtl">
```

helps assistive technologies understand the language.

For mixed-language content, use local `lang` attributes:

```html
<p lang="fa">
  ساخت رابط کاربری با
  <span lang="en">React</span>
  ساده‌تر می‌شود.
</p>
```

Do not use visual CSS direction as a replacement for semantic language
metadata.

---

# 28. Next.js example

The following example uses Next.js metadata APIs, but the principles apply
to other frameworks:

```ts
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "کامپوننت‌های راست‌چین برای React | FarsiUI",

  description:
    "کامپوننت‌های RTL و فارسی برای ساخت رابط‌های کاربری مدرن با React و Next.js.",

  alternates: {
    canonical: "https://example.com/fa/components",
    languages: {
      "fa-IR": "https://example.com/fa/components",
      en: "https://example.com/en/components",
    },
  },

  openGraph: {
    locale: "fa_IR",
    type: "website",
    title: "کامپوننت‌های راست‌چین برای React | FarsiUI",
    description:
      "کامپوننت‌های RTL و فارسی برای ساخت رابط‌های کاربری مدرن با React و Next.js.",
    url: "https://example.com/fa/components",
  },

  twitter: {
    card: "summary_large_image",
  },
};
```

Do not copy this configuration blindly.

Replace:

* domain;
* titles;
* descriptions;
* localized URLs;
* alternate languages;
* brand name;

with the actual project values.

---

# 29. What this skill should prevent

When working on a Persian website, avoid automatically generating:

```text
lang="en"
og:locale="en_US"
English page titles
US-style URLs
ZWNJ inside URLs
5-digit ZIP validation
US phone formats
machine-translated Persian
English-only Open Graph text
fake JSON-LD reviews
unstable slugs
keyword-stuffed Persian copy
```

Instead, verify the actual language, audience, URL strategy, content intent,
and data represented by the page.

---

# 30. Final checklist

Before shipping a Persian page, verify:

### Language

* [ ] `lang="fa"` or appropriate `fa-IR` is set.
* [ ] `dir="rtl"` is set where appropriate.
* [ ] Mixed-language content has correct local `lang` attributes.

### Metadata

* [ ] Title is Persian and describes the actual page.
* [ ] Main subject appears naturally near the beginning.
* [ ] Brand appears where useful.
* [ ] Description is natural Persian.
* [ ] No keyword stuffing.
* [ ] `og:locale` is appropriate.
* [ ] Open Graph title and description are localized.

### URLs

* [ ] One slug strategy is used consistently.
* [ ] No ZWNJ appears in URLs.
* [ ] Persian `ی` and `ک` are normalized where required.
* [ ] Latin digits are used in URLs.
* [ ] Hyphens are used consistently.
* [ ] Published URLs remain stable.
* [ ] Old URLs redirect correctly when changed.

### Hreflang

* [ ] Only real localized alternatives are declared.
* [ ] Alternate URLs are valid and canonical.
* [ ] Localized pages reference the appropriate alternatives.

### Structured data

* [ ] JSON-LD describes real page content.
* [ ] `inLanguage` matches the content.
* [ ] Dates use machine-readable ISO format.
* [ ] Prices use the correct currency representation.
* [ ] Breadcrumbs match visible navigation.
* [ ] Authors, ratings, and reviews are not invented.

### Content

* [ ] Search intent is answered early.
* [ ] Persian writing is natural.
* [ ] ZWNJ is used correctly in visible text.
* [ ] ZWNJ is not used in URLs.
* [ ] Technical terms use recognizable forms.
* [ ] Internal links have descriptive anchor text.
* [ ] Headings describe real content.

### Performance

* [ ] Persian fonts have proper glyph coverage.
* [ ] Critical fonts are loaded efficiently.
* [ ] Font fallback does not cause major layout shift.
* [ ] Images have dimensions.
* [ ] Mobile performance has been tested.

### Indexing

* [ ] Sitemap contains canonical indexable URLs.
* [ ] Robots rules do not accidentally block important resources.
* [ ] Noindex and robots policies are intentional.
* [ ] Canonical URLs match the actual preferred page URLs.
