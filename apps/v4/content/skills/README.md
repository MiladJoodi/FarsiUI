# FarsiUI Skills Library

Catalog of agent skills shipped with FarsiUI. Pick by **problem / workflow**, not by stack alone.

Install example:

```bash
npx farsiui@latest add <skill-slug>
```

Site catalog: `/skills`

---

## Categories

### Writing — نوشتن

| Name | Slug | What it solves | When to use | Tags |
| --- | --- | --- | --- | --- |
| نوشتن فارسی محاوره‌ای | `persian-conversational` | لحن خودمانی و طبیعی فارسی | کپشن، چت، پشتیبانی دوستانه | محاوره، شبکه‌های اجتماعی |
| نوشتن فارسی رسمی | `persian-formal` | لحن اداری و رسمی | قرارداد، نامه، متن حقوقی/اداری | رسمی |
| متن UI فارسی | `persian-ui-copy` | کپی رابط کاربری فارسی | دکمه، خطا، empty state، onboarding | UI copy |

### Web — وب

| Name | Slug | What it solves | When to use | Tags |
| --- | --- | --- | --- | --- |
| سئوی فارسی | `persian-seo` | سئوی فنی و محتوایی فارسی | metadata، URL، JSON-LD؛ OG عمیق → skill جدا | seo، metadata |
| Open Graph و پیش‌نمایش لینک / Open Graph & Social Preview | `open-graph-social-preview` | پیش‌نمایش درست لینک در تلگرام، X و بقیه | لینک بدون عکس، کش خراب، ImageResponse | open graph، twitter، telegram |
| چند Design System در Next.js / Multi Design System | `nextjs-multi-design-system` | چند ظاهر در یک پروژه، لود درست و پیش‌نمایش هم‌خوان | چند ظاهر در یک اپ، ناهماهنگی پیش‌نمایش | nextjs، design-system، iframe، ssr |
| نمودار فارسی و راست‌چین / RTL Charts | `rtl-data-visualization` | نمودار فارسی و راست‌چین | محور، Tooltip، Legend، اعداد فارسی | rtl، recharts، charts |
| طراحی واکنش‌گرا / Responsive Design | `responsive-design` | چیدمان درست از موبایل تا دسکتاپ | Mobile-first، Grid، فاصله‌ها | responsive، layout |
| دسترس‌پذیری و استاندارد WCAG / Accessibility Compliance | `accessibility-compliance` | کیبورد، Focus، کنتراست، Screen Reader | WCAG، ARIA، a11y | accessibility، wcag |
| طراحی تعامل / Interaction Design | `interaction-design` | Loading، Feedback، Transition | حالت‌های کامپوننت و انیمیشن | interaction، motion |
| الگوهای Design System / Design System Patterns | `design-system-patterns` | توکن، تم، معماری کامپوننت | ساخت Design System | design-system، tokens |
| راهنمای رابط کاربری وب / Web Interface Guidelines | `web-interface-guidelines` | قواعد کوتاه UI سریع و در دسترس | بازبینی فرم، فوکوس، پرفورمنس | vercel، guidelines |

### Persian Product — محصول فارسی

| Name | Slug | What it solves | When to use | Tags |
| --- | --- | --- | --- | --- |
| رابط کاربری RTL فارسی | `persian-rtl-ui` | لایه و کامپوننت راست‌چین | تبدیل LTR→RTL، فرم، overlay | rtl، tailwind |
| تقویم و تاریخ شمسی | `jalali-calendar` | تاریخ جلالی در محصول | date picker، نمایش شمسی | jalali |
| اعتبارسنجی ایران | `iran-validation` | الگوهای اعتبارسنجی ایرانی | کد ملی، موبایل، کارت | validation |
| تایپوگرافی فارسی | `persian-typography` | فونت و فاصلهٔ فارسی | انتخاب فونت، اعداد، نیم‌فاصله | typography |

### UI Library — کتابخانه UI

| Name | Slug | What it solves | When to use | Tags |
| --- | --- | --- | --- | --- |
| Registry و نصب کامپوننت / Registry & CLI | `component-registry-cli` | تعریف Registry و نصب با CLI | نصب خراب، مسیر اشتباه، وابستگی جاافتاده | registry، cli |

### AI — هوش مصنوعی

| Name | Slug | What it solves | When to use | Tags |
| --- | --- | --- | --- | --- |
| قوانین فارسی برای پروژه | `agents-md-persian` | قوانین سطح پروژه برای Agent | شروع پروژه فارسی یکدست | agents، rules |
| قوانین ساخت UI | `ui-craft-rules` | کیفیت ساخت رابط | بازبینی UI تولیدشده با AI | ui craft |
| طراحی فرانت متمایز | `frontend-design` | جلوگیری از UI تکراری AI | لندینگ و سطح بصری | frontend-design |
| ساخت MCP عمومی | `mcp-builder` | سرور MCP عمومی (API/ابزار) | MCP غیر مختص UI library | mcp |
| MCP برای کتابخانه UI / UI Library MCP | `ui-library-mcp` | پیدا کردن و نصب کامپوننت از داخل AI | جستجو و نصب از Cursor یا Claude | mcp، ui-library |
| پیدا کردن Skills | `find-skills` | کشف skill مناسب | وقتی نمی‌دانی کدام skill | discovery |
| بهترین‌روش‌های React وریسل | `vercel-react-best-practices` | الگوی React/Next باکیفیت | perf و ساختار کامپوننت | react، vercel |
| بهبود معماری کدبیس | `improve-codebase-architecture` | بازطراحی معماری | بدهی فنی، مرز ماژول‌ها | architecture |
| Grill Me | `grill-me` | چالش فرضیات قبل از پیاده‌سازی | شفاف‌سازی نیاز | planning |

### Integrations — یکپارچه‌سازی

| Name | Slug | What it solves | When to use | Tags |
| --- | --- | --- | --- | --- |
| آپلود به پار‌س‌پک S3 | `parspack-s3-upload` | آپلود فایل به S3 پار‌س‌پک | تصویر و آبجکت استوریج | s3، parspack |
| پرداخت آنلاین با زرین‌پال | `zarinpal-payment` | درگاه زرین‌پال | پرداخت، verify، sandbox | payment، zarinpal |

---

## Merge decisions (library design)

* **component-preview** → folded into `nextjs-multi-design-system` (iframe + style sync).
* **component-registry** + **component-cli** → single `component-registry-cli`.
* **ui-library-mcp** stays separate from **mcp-builder** (product-specific vs general).
* **open-graph-social-preview** stays separate from **persian-seo** (SEO points to OG skill for deep debugging).

---

## Folder layout

Content stays flat for install paths and loaders:

```text
content/skills/
  <skill-slug>/SKILL.md
  README.md
```

Categories live in catalog metadata (`category` in `skills-data`) and the site sidebar — not in nested folders.
