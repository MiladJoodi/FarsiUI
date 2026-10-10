export type SkillInstallTarget = {
  id: "claude-code" | "cursor" | "codex" | "other"
  name: string
  paths: string[]
  note?: string
}

export type SkillSource = {
  /** Short display name, e.g. Vercel Labs */
  name: string
  /** Upstream repo or docs URL when adapted from elsewhere */
  url?: string
}

/** Catalog groups — by problem/workflow, not by tech stack alone. */
export const SKILL_CATEGORIES = [
  {
    id: "writing",
    title: "نوشتن",
    titleEn: "Writing",
    description: "لحن و متن فارسی برای محصول و محتوا",
  },
  {
    id: "web",
    title: "وب",
    titleEn: "Web",
    description:
      "پیش‌نمایش لینک، واکنش‌گرایی، دسترس‌پذیری، تعامل و نمودار فارسی",
  },
  {
    id: "seo",
    title: "سئو",
    titleEn: "SEO",
    description: "سئوی فنی و محتوایی، متادیتا و ممیزی کیفیت برای جستجو",
  },
  {
    id: "persian-product",
    title: "محصول فارسی",
    titleEn: "Persian Product",
    description: "RTL، تاریخ شمسی، اعتبارسنجی و تایپوگرافی",
  },
  {
    id: "ui-library",
    title: "کتابخانه UI",
    titleEn: "UI Library",
    description: "فهرست، نصب و انتشار کامپوننت",
  },
  {
    id: "ai",
    title: "هوش مصنوعی",
    titleEn: "AI",
    description: "مهارت‌های Agent، MCP و کیفیت کد با AI",
  },
  {
    id: "integrations",
    title: "یکپارچه‌سازی",
    titleEn: "Integrations",
    description: "پرداخت، آپلود و سرویس‌های ایرانی",
  },
] as const

export type SkillCategoryId = (typeof SKILL_CATEGORIES)[number]["id"]

export type Skill = {
  /** Machine id — same as folder name / frontmatter `name` */
  slug: string
  title: string
  /** Short English label for the sidebar/list title pair (falls back to slug). */
  titleEn?: string
  summary: string
  /** Catalog category for sidebar grouping */
  category: SkillCategoryId
  useCases: string[]
  tags: string[]
  activationDescription: string
  activationNote: string
  installCommand: string
  installTargets: SkillInstallTarget[]
  agentsHint: string
  /** Short plain example for the detail page; omit when too technical. */
  example?: string
  source?: SkillSource
}

/** English half of the catalog title pair (title | titleEn). */
export function getSkillTitleEn(skill: Skill) {
  return skill.titleEn ?? skill.slug
}

export function getSkillCategory(id: SkillCategoryId) {
  return SKILL_CATEGORIES.find((category) => category.id === id)
}

export const skills: Skill[] = [
  {
    slug: "persian-conversational",
    category: "writing",
    title: "نوشتن فارسی محاوره‌ای",
    summary:
      "کپشن، چت و پیام‌های خودمانی را طوری می‌نویسد که انگار خودتان نوشته‌اید — نه ترجمه‌ای خشک.",
    useCases: [
      "کپشن اینستاگرام و شبکه‌های اجتماعی",
      "پیام خوش‌آمد وقتی کسی اپ را باز می‌کند",
      "جواب پشتیبانی و چت با کاربر",
      "اعلان کوتاه داخل اپ",
    ],
    tags: ["نوشتن", "محاوره", "شبکه‌های اجتماعی"],
    activationDescription:
      "Write natural colloquial Persian (محاوره‌نویسی) as Persian speakers actually write in chats, social media, consumer products, onboarding, notifications, and friendly support. Use when the user asks for فارسی محاوره‌ای، خودمونی، عامیانه، لحن دوستانه، کپشن، استوری، پیام چت, or casual Persian product copy. Do not use for legal, academic, administrative, contractual, or explicitly formal writing; use persian-formal or persian-writing when appropriate.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add persian-conversational",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/persian-conversational/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/persian-conversational/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/persian-conversational/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/persian-conversational/SKILL.md"],
      },
    ],
    agentsHint:
      "For any Persian task, read .claude/skills/persian-conversational/SKILL.md first.",
    example:
      "به‌جای «کاربر گرامی، خوش آمدید» می‌نویسد: «خوش اومدید! برای شروع پروفایل‌تون رو کامل کنید.»",
  },
  {
    slug: "persian-formal",
    category: "writing",
    title: "نوشتن فارسی رسمی",
    summary:
      "نامه و ایمیل رسمی می‌نویسد، ولی خشک و اداری نمی‌شود — خبری از «می‌باشد» نیست.",
    useCases: [
      "نامه به سازمان یا دانشگاه",
      "ایمیل رسمی به مشتری یا همکار",
      "پروپوزال و قرارداد",
      "صفحهٔ دربارهٔ ما و متن سایت شرکت",
    ],
    tags: ["نوشتن", "رسمی", "اداری"],
    activationDescription:
      "Write formal Persian that still sounds human: proposals, contracts, invoices, official letters (نامه اداری), formal email, company website copy, terms and policies. Use whenever the user asks for فارسی رسمی، اداری، نامه، پروپوزال، قرارداد، فاکتور، متن حقوقی, or when the text goes to a client, organization, university or government office. Bans the bureaucratic tells (می‌باشد، لازم به ذکر است) that make Persian sound machine-written.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add persian-formal",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/persian-formal/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/persian-formal/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/persian-formal/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/persian-formal/SKILL.md"],
      },
    ],
    agentsHint:
      "For formal Persian tasks, read .claude/skills/persian-formal/SKILL.md first.",
    example:
      "به‌جای «شرکت ما همواره در تلاش می‌باشد» می‌نویسد: «از ۱۳۹۸ سایت فروشگاهی می‌سازیم.»",
  },
  {
    slug: "persian-ui-copy",
    category: "writing",
    title: "نوشتن متن رابط کاربری",
    summary:
      "متن دکمه، فرم و پیام خطا را کوتاه و خودمانی می‌نویسد؛ انگار محصول ایرانی است، نه ترجمهٔ انگلیسی.",
    useCases: [
      "متن دکمه و منو",
      "برچسب و راهنمای داخل فرم",
      "پیام خطا و موفقیت",
      "وقتی صفحه خالی است چه بنویسیم",
    ],
    tags: ["نوشتن", "UI", "محصول"],
    activationDescription:
      "Write natural Persian (Farsi) UI microcopy for buttons, labels, placeholders, validation and error messages, empty states, loading, success messages, confirmations and notifications. Use when creating, rewriting or translating user-facing text for Persian and Iranian products. Prefer natural product language over literal translation. Includes an English-to-Persian UI glossary for consistent terminology.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add persian-ui-copy",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/persian-ui-copy/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/persian-ui-copy/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/persian-ui-copy/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/persian-ui-copy/SKILL.md"],
      },
    ],
    agentsHint:
      "For Persian UI copy, read .claude/skills/persian-ui-copy/SKILL.md first.",
    example:
      "بعد از خرید، به‌جای یک پاراگراف طولانی فقط می‌نویسد: «سفارش ثبت شد.»",
  },
  {
    slug: "persian-rtl-ui",
    category: "persian-product",
    title: "رابط کاربری راست‌چین",
    summary:
      "صفحه را از راست می‌چیند و عدد و تاریخ را فارسی می‌کند — نه اینکه یک طرح انگلیسی را برعکس کنید.",
    useCases: [
      "ساخت صفحه یا داشبورد فارسی",
      "تبدیل یک رابط انگلیسی به راست‌چین",
      "فرم با موبایل، کد ملی یا شبا",
      "قیمت به تومان و تاریخ شمسی",
    ],
    tags: ["RTL", "UI", "React"],
    activationDescription:
      "Build natural Persian RTL interfaces with React and Tailwind. Use for Persian UI, RTL layouts, component styling, forms, dashboards and converting LTR interfaces to RTL. Covers logical CSS, Persian typography, Persian numbers, Jalali dates, Iranian form patterns, accessible RTL behavior and token-based styling.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add persian-rtl-ui",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/persian-rtl-ui/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/persian-rtl-ui/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/persian-rtl-ui/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/persian-rtl-ui/SKILL.md"],
      },
    ],
    agentsHint:
      "For Persian RTL UI, read .claude/skills/persian-rtl-ui/SKILL.md first.",
    example:
      "دکمه و قیمت از راست چیده می‌شوند و می‌نویسد «۱۲٬۰۰۰ تومان» و «خرید» — نه دلار و Buy now.",
  },
  {
    slug: "jalali-calendar",
    category: "persian-product",
    title: "تقویم و تاریخ شمسی",
    summary:
      "تاریخ را شمسی نشان می‌دهد؛ با ماه‌های فارسی و هفته‌ای که از شنبه شروع می‌شود.",
    useCases: [
      "انتخاب تاریخ تولد",
      "تاریخ روی فاکتور و سفارش",
      "مهلت و سررسید کار",
      "گزارش با بازهٔ زمانی",
    ],
    tags: ["تاریخ", "شمسی", "Jalali"],
    activationDescription:
      "Handle dates and times for Iranian users: the Jalali / Solar Hijri calendar (تقویم شمسی، هجری خورشیدی), Saturday-first weeks, Tehran time (Asia/Tehran, UTC+03:30, no DST), Persian month and weekday names, formatting, storage, conversion, date ranges, reports, age calculations and holidays. Use whenever a date, time, calendar, date picker, deadline, booking, report period, age or holiday appears in a Persian (Farsi) product, or the user says تاریخ شمسی، تقویم فارسی، jalali، شنبه، نوروز.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add jalali-calendar",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/jalali-calendar/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/jalali-calendar/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/jalali-calendar/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/jalali-calendar/SKILL.md"],
      },
    ],
    agentsHint:
      "For Jalali / Persian dates, read .claude/skills/jalali-calendar/SKILL.md first.",
    example:
      "روی فاکتور به‌جای ۲۰۲۶-۰۹-۲۰ می‌نویسد: ۲۹ شهریور ۱۴۰۵.",
  },
  {
    slug: "iran-validation",
    category: "persian-product",
    title: "اعتبارسنجی فرم‌های ایرانی",
    summary:
      "کد ملی، موبایل، شبا و کارت را درست چک می‌کند — نه فقط اینکه «چند رقم باشد».",
    useCases: [
      "فرم ثبت‌نام",
      "پرداخت و اطلاعات بانکی",
      "آدرس و کد پستی",
      "پروفایل کاربر",
    ],
    tags: ["اعتبارسنجی", "فرم", "ایران"],
    activationDescription:
      "Validate and format Iranian identifiers correctly: national ID (کد ملی) checksum, legal entity ID (شناسه ملی), mobile numbers (۰۹…), landlines with area codes, IBAN / Sheba (شبا) mod-97, bank card numbers with Luhn and BIN lookup, postal code (کد پستی), vehicle plates (پلاک), and Persian/Arabic digit normalization. Use for signup, KYC, checkout, address, payment, profile, contact, or identity forms in Iranian products, or whenever the user mentions اعتبارسنجی، کد ملی، شناسه ملی، شبا، شماره کارت، شماره موبایل، تلفن ثابت، کد پستی، پلاک. Replaces US-style patterns such as SSN, ZIP codes, and US phone numbers with Iranian-specific formats and validation rules.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add iran-validation",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/iran-validation/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/iran-validation/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/iran-validation/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/iran-validation/SKILL.md"],
      },
    ],
    agentsHint:
      "For Iranian form validation, read .claude/skills/iran-validation/SKILL.md first.",
    example:
      "اگر کسی ۰۹۱۲ بنویسد قبول می‌کند؛ اگر ۰۲۱ به‌جای موبایل بگذارد، خطا می‌دهد.",
  },
  {
    slug: "persian-seo",
    category: "seo",
    title: "سئوی فارسی",
    summary:
      "عنوان، توضیحات و محتوای سایت را برای جست‌وجوهای فارسی و مخاطبان فارسی‌زبان بهینه می‌کند.",
    useCases: [
      "نوشتن عنوان و توضیحات مناسب برای صفحات",
      "بهینه‌سازی صفحات محصول و مقاله",
      "تنظیم پیش‌نمایش لینک در شبکه‌های اجتماعی",
      "رعایت نکات سئو در سایت‌های فارسی و دوزبانه",
    ],
    tags: ["سئو", "متادیتا", "محتوا"],
    activationDescription:
      "Technical and on-page SEO for Persian (Farsi) websites: document language, RTL direction, fa-IR metadata, hreflang, Persian titles and descriptions, stable slug and URL strategy, ZWNJ and Persian/Arabic character normalization, Open Graph, JSON-LD, canonical URLs, sitemaps, robots, internal linking, Persian keyword variants, Persian content structure, fonts, accessibility, and Core Web Vitals. Use when writing metadata, structured data, Persian blog content, product pages, landing pages, or URL structures for an Iranian or Persian-language site, or when the user mentions سئو، سئوی فارسی، متادیتا، عنوان صفحه، توضیحات، اسلاگ، URL، JSON-LD، hreflang، گوگل. Examples target Next.js, but the rules are framework-independent.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add persian-seo",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/persian-seo/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/persian-seo/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/persian-seo/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/persian-seo/SKILL.md"],
      },
    ],
    agentsHint:
      "For Persian SEO and metadata, read .claude/skills/persian-seo/SKILL.md first.",
    example:
      "عنوان صفحه را متناسب با محتوای فارسی می‌نویسد؛ مثلاً «کفش ورزشی مردانه | فروشگاه شما» به‌جای یک عنوان پیش‌فرض انگلیسی.",
  },
  {
    slug: "seo",
    category: "seo",
    title: "سئوی فنی سایت",
    titleEn: "SEO",
    summary:
      "مشکلات فنی مؤثر بر دیده‌شدن سایت در موتورهای جست‌وجو را پیدا می‌کند و برای رفع آن‌ها پیشنهاد می‌دهد.",
    useCases: [
      "بررسی عنوان و توضیحات صفحات",
      "بررسی داده‌های ساختاریافته",
      "بررسی فایل‌های robots.txt و sitemap.xml",
      "بررسی آدرس اصلی صفحه (canonical)",
      "بررسی مشکلات فنی سئو با ابزارهای مناسب",
    ],
    tags: ["سئو", "Lighthouse", "structured data", "متادیتا"],
    activationDescription:
      "Optimize for search engine visibility and ranking. Use when asked to improve SEO, optimize for search, fix meta tags, add structured data, sitemap optimization, or search engine optimization. Covers technical SEO, on-page optimization, crawlability, and JSON-LD based on Lighthouse SEO audits and Google Search guidelines.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add seo",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/seo/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/seo/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/seo/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/seo/SKILL.md"],
      },
    ],
    agentsHint: "For technical SEO, read .claude/skills/seo/SKILL.md first.",
    example:
      "پیش از انتشار سایت، تنظیمات سئو و دسترسی موتورهای جست‌وجو را بررسی می‌کند و مشکلاتی را که ممکن است مانع ایندکس‌شدن صفحات شوند، مشخص می‌کند.",
    source: {
      name: "seo",
      url: "https://github.com/addyosmani/web-quality-skills/tree/main/skills/seo",
    },
  },
  {
    slug: "web-quality-audit",
    category: "seo",
    title: "بررسی کیفیت و عملکرد سایت",
    titleEn: "Web Quality Audit",
    summary:
      "کیفیت سایت را از نظر سرعت، دسترس‌پذیری، سئو و استانداردهای وب بررسی می‌کند و مشکلات را بر اساس شواهد پیدا می‌کند.",
    useCases: [
      "بررسی کامل سایت یا یک صفحه",
      "اجرای Lighthouse و بررسی نتایج",
      "پیدا کردن مشکلات مؤثر بر تجربه کاربر",
      "بررسی سایت پیش از انتشار یا پس از تغییرات",
    ],
    tags: ["ممیزی", "Lighthouse", "کیفیت وب", "سئو", "پرفورمنس"],
    activationDescription:
      "Run an evidence-led web quality audit covering performance, accessibility, SEO, best practices, and agentic browsing. Use when asked to audit a site, review web quality, run a Lighthouse audit, check page quality, or optimize a website. Combines live browser evidence with source inspection; does not treat an aggregate score as proof of quality.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add web-quality-audit",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/web-quality-audit/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/web-quality-audit/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/web-quality-audit/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/web-quality-audit/SKILL.md"],
      },
    ],
    agentsHint:
      "For an evidence-led web quality audit, read .claude/skills/web-quality-audit/SKILL.md first.",
    example:
      "صفحه را بررسی می‌کند، مشکلات واقعی را از حدس‌ها جدا می‌کند، اصلاحات لازم را انجام می‌دهد و دوباره نتیجه را می‌سنجد.",
    source: {
      name: "web-quality-audit",
      url: "https://github.com/addyosmani/web-quality-skills/tree/main/skills/web-quality-audit",
    },
  },
  {
    slug: "open-graph-social-preview",
    category: "web",
    title: "Open Graph و پیش‌نمایش لینک",
    titleEn: "Open Graph & Social Preview",
    summary:
      "وقتی لینک سایت را در تلگرام، X یا شبکه‌های دیگر می‌فرستید، عنوان، توضیح و تصویر درست نمایش داده شود و اگر پیش‌نمایش خراب یا قدیمی است، علت را پیدا و برطرف می‌کند.",
    useCases: [
      "وقتی لینک بدون تصویر یا با اطلاعات اشتباه نمایش داده می‌شود",
      "تنظیم og:image و twitter:card در Next.js",
      "استفاده از تصویر ثابت یا opengraph-image داینامیک",
      "پیدا کردن خطاهای ۵۰۰، Content-Type اشتباه یا کش قدیمی X",
      "بررسی جداشدن حروف فارسی در تصویر ساخته‌شده با ImageResponse",
    ],
    tags: [
      "Open Graph",
      "twitter",
      "telegram",
      "whatsapp",
      "og:image",
      "metadata",
      "شبکه اجتماعی",
      "متادیتا",
    ],
    activationDescription:
      "Implement and debug Open Graph / Twitter (X) / Telegram / WhatsApp / LinkedIn / Discord / Facebook link previews. Use when adding social share metadata, or when og:image is missing, broken (500), cropped, cached wrong on X, or Persian text breaks in dynamic OG images on a Next.js (or any) site. Decide from evidence; do not blindly run checklists.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add open-graph-social-preview",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/open-graph-social-preview/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/open-graph-social-preview/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/open-graph-social-preview/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/open-graph-social-preview/SKILL.md"],
      },
    ],
    agentsHint:
      "For Open Graph and social link previews, read .claude/skills/open-graph-social-preview/SKILL.md first.",
    example:
      "اگر ImageResponse تصویر خراب می‌سازد، به‌جای آن یک og.png با اندازه ۱۲۰۰×۶۳۰ می‌گذارد و برای تست دوباره لینک را با ?v=2 باز می‌کند تا کش قدیمی X کنار برود.",
    source: {
      name: "FarsiUI",
      url: "https://farsiui.ir/skills/open-graph-social-preview",
    },
  },
  {
    slug: "agents-md-persian",
    category: "ai",
    title: "قوانین فارسی برای پروژه",
    summary:
      "یک فایل قوانین برای کل پروژه؛ از اول به AI می‌گوید راست‌چین، فارسی، تومان و تاریخ شمسی.",
    useCases: [
      "شروع پروژهٔ فارسی جدید",
      "یک قانون مشترک برای Cursor، Claude و بقیه",
      "وقتی می‌خواهید خروجی AI در طول پروژه یکدست بماند",
    ],
    tags: ["راهنما", "Agent", "قوانین"],
    activationDescription:
      "Project-level Persian and RTL rules for coding agents. Use when a project targets Persian-speaking users in Iran and needs consistent Persian copy, RTL layout, Persian typography, Persian digits, Jalali dates, Iranian validation patterns, accessibility, and localized UI behavior without installing separate skills.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add agents-md-persian",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: ["docs/agents-md-persian.md"],
        note: "سپس در CLAUDE.md بنویسید: @docs/agents-md-persian.md",
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/rules/agents-md-persian.mdc"],
        note: "در ابتدای فایل alwaysApply: true بگذارید",
      },
      {
        id: "codex",
        name: "Codex",
        paths: ["AGENTS.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: ["AGENTS.md"],
      },
    ],
    agentsHint:
      "For Persian projects, apply the rules from docs/agents-md-persian.md.",
    example:
      "از اول پروژه می‌گوید دکمه را «خرید» بنویس، تاریخ را شمسی کن، صفحه را راست‌چین بچین.",
  },
  {
    slug: "ui-craft-rules",
    category: "ai",
    title: "قوانین کیفیت رابط کاربری",
    summary:
      "نمی‌گذارد AI صفحه را شلخته و تکراری دربیاورد؛ فاصله و دکمه را حساب‌شده نگه می‌دارد.",
    useCases: [
      "پروژه‌ای که بیشترش را با AI می‌سازید",
      "چک کردن ظاهر قبل از تحویل",
      "وقتی AI از خودش رنگ و سایه می‌ریزد",
    ],
    tags: ["راهنما", "UI", "طراحی"],
    activationDescription:
      "Craft and quality rules for AI-built interfaces. Use when designing, implementing, reviewing, or refining UI to prevent arbitrary styling, inconsistent spacing, poor typography, layout shift, excessive motion, weak responsive behavior, and generic AI-generated visual patterns.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add ui-craft-rules",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: ["docs/ui-craft-rules.md"],
        note: "سپس در CLAUDE.md بنویسید: @docs/ui-craft-rules.md",
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/rules/ui-craft-rules.mdc"],
        note: "در ابتدای فایل alwaysApply: true بگذارید",
      },
      {
        id: "codex",
        name: "Codex",
        paths: ["AGENTS.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: ["AGENTS.md"],
      },
    ],
    agentsHint:
      "For UI craft quality, apply the rules from docs/ui-craft-rules.md.",
    example:
      "اگر بگویید «قشنگش کن»، معمولاً گرادیان و سایه می‌ریزد؛ این مهارت می‌گوید فاصله و رنگ را مشخص نگه دار.",
  },
  {
    slug: "frontend-design",
    category: "ai",
    title: "طراحی ظاهر صفحه",
    summary:
      "کمک می‌کند ظاهر صفحه از الگوهای تکراری و کلیشه‌ای طراحی‌های AI فاصله بگیرد و برای هر محصول، ترکیب مناسبی از رنگ، فونت، فاصله‌ها و چیدمان انتخاب شود.",
    useCases: [
      "طراحی ظاهر یک صفحه یا محصول جدید",
      "وقتی UI ساخته‌شده توسط AI زیادی شبیه نمونه‌های تکراری شده",
      "مشخص‌کردن سبک و جهت بصری قبل از شروع کدنویسی",
      "بررسی و بهترکردن ظاهر صفحه قبل از تحویل",
    ],
    tags: ["طراحی", "UI", "فرانت‌اند"],
    activationDescription:
      "Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typography, layout, motion, and making choices that don't read as templated AI defaults. Use when designing landing pages, product UI, visual identity for a brief, or when generated interfaces look generic.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add frontend-design",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/frontend-design/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/frontend-design/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/frontend-design/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/frontend-design/SKILL.md"],
      },
    ],
    agentsHint:
      "For distinctive frontend design, read .claude/skills/frontend-design/SKILL.md first.",
    example:
      "به‌جای اینکه برای یک فروشگاه اسباب‌بازی دوباره از همان ترکیب بنفش و سفید و کارت‌های تکراری استفاده کند، ظاهر صفحه را متناسب با فضای کودکانه و محصول طراحی می‌کند؛ از انتخاب رنگ و فونت گرفته تا چیدمان و جزئیات بصری.",
    source: {
      name: "Anthropic",
      url: "https://github.com/anthropics/skills/tree/main/skills/frontend-design",
    },
  },
  {
    slug: "mcp-builder",
    category: "ai",
    title: "ساخت سرور MCP",
    summary:
      "برای وصل کردن AI به APIها و سرویس‌های مختلف و ساخت ابزارهایی که AI بتواند از آن‌ها استفاده کند.",
    useCases: [
      "وصل کردن AI به یک API یا سرویس خارجی",
      "ساخت ابزار برای خواندن، ایجاد یا تغییر اطلاعات",
      "ساخت سرور MCP با TypeScript یا Python",
      "تعریف درست ورودی و خروجی ابزارها",
      "تست کردن ابزارها و مطمئن شدن از درست کار کردن آن‌ها",
    ],
    tags: ["MCP", "ابزار", "Agent"],
    activationDescription:
      "Guide for creating high-quality MCP (Model Context Protocol) servers that enable LLMs to interact with external services through well-designed tools. Use when building MCP servers to integrate external APIs or services, whether in Python (FastMCP) or Node/TypeScript (MCP SDK), including tool design, auth, pagination, errors, and evaluations.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add mcp-builder",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/mcp-builder/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/mcp-builder/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/mcp-builder/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/mcp-builder/SKILL.md"],
      },
    ],
    agentsHint:
      "For MCP server development, read .claude/skills/mcp-builder/SKILL.md first.",
    example:
      "به‌جای یک ابزار کلی مثل doStuff، ابزارهای مشخصی مثل list_orders یا create_order می‌سازید تا AI دقیقاً بداند هرکدام چه کاری انجام می‌دهند.",
    source: {
      name: "Anthropic",
      url: "https://github.com/anthropics/skills/tree/main/skills/mcp-builder",
    },
  },
  {
    slug: "find-skills",
    category: "ai",
    title: "پیدا کردن و نصب مهارت",
    summary:
      "وقتی برای یک کار دنبال مهارت آماده هستید، بین مهارت‌های موجود می‌گردد، گزینه‌های مناسب را پیدا می‌کند و روش نصب آن‌ها را نشان می‌دهد.",
    useCases: [
      "پیدا کردن مهارت مناسب برای یک کار مشخص",
      "پیدا کردن مهارت برای تست، طراحی، دیپلوی و کارهای مشابه",
      "نصب مهارت از GitHub",
      "بررسی مهارت قبل از نصب",
    ],
    tags: ["مهارت", "جستجو", "CLI"],
    activationDescription:
      "Helps users discover and install agent skills when they ask questions like \"how do I do X\", \"find a skill for X\", \"is there a skill that can...\", or express interest in extending capabilities. This skill should be used when the user is looking for functionality that might exist as an installable skill.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add find-skills",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/find-skills/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/find-skills/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/find-skills/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/find-skills/SKILL.md"],
      },
    ],
    agentsHint:
      "When the user asks to find or install a skill, read .claude/skills/find-skills/SKILL.md first.",
    example:
      "اگر بپرسید «برای تست با Playwright مهارتی هست؟»، مهارت‌های مرتبط را پیدا می‌کند و دستور نصب گزینه مناسب را به شما می‌دهد.",
    source: {
      name: "Vercel Labs",
      url: "https://github.com/vercel-labs/skills/blob/main/skills/find-skills/SKILL.md",
    },
  },
  {
    slug: "vercel-react-best-practices",
    category: "ai",
    title: "سریع‌تر کردن React و Next.js",
    summary:
      "مجموعه‌ای از نکات و روش‌های تیم Vercel برای بهتر کردن سرعت و عملکرد برنامه‌های React و Next.js؛ از بارگذاری صفحه گرفته تا گرفتن داده و رندر شدن کامپوننت‌ها.",
    useCases: [
      "نوشتن یا بررسی کامپوننت‌های React و صفحات Next.js",
      "بهتر کردن روش گرفتن داده از سرور و کلاینت",
      "کم کردن حجم فایل‌هایی که مرورگر دانلود می‌کند",
      "پیدا کردن دلیل کندی صفحه یا رندرهای اضافی",
      "بررسی مشکلات مربوط به سرعت و عملکرد",
    ],
    tags: ["React", "Next.js", "پرفورمنس"],
    activationDescription:
      "React and Next.js performance optimization guidelines from Vercel Engineering. This skill should be used when writing, reviewing, or refactoring React/Next.js code to ensure optimal performance patterns. Triggers on tasks involving React components, Next.js pages, data fetching, bundle optimization, or performance improvements.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add vercel-react-best-practices",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/vercel-react-best-practices/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/vercel-react-best-practices/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/vercel-react-best-practices/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/vercel-react-best-practices/SKILL.md"],
      },
    ],
    agentsHint:
      "For React/Next.js performance work, read .claude/skills/vercel-react-best-practices/SKILL.md first.",
    example:
      "اگر دو درخواست به سرور به هم وابسته نباشند، به‌جای اینکه یکی تمام شود و بعد دیگری شروع شود، هر دو را هم‌زمان می‌فرستد تا نتیجه سریع‌تر آماده شود.",
    source: {
      name: "Vercel Labs",
      url: "https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices",
    },
  },
  {
    slug: "improve-codebase-architecture",
    category: "ai",
    title: "مرتب کردن معماری پروژه",
    summary:
      "ساختار پروژه را بررسی می‌کند، بخش‌هایی که بیش از حد پیچیده یا به‌هم‌ریخته شده‌اند پیدا می‌کند و برای بهتر کردنشان پیشنهاد می‌دهد. قبل از تغییرات مهم هم با شما هماهنگ می‌شود.",
    useCases: [
      "پیدا کردن بخش‌های شلوغ و پیچیده پروژه",
      "ساده‌تر کردن ساختار و کدهای سخت‌فهم",
      "آماده‌تر کردن کد برای تست و توسعه",
      "بهتر کردن ساختار پروژه برای کار با AI",
      "بازبینی دوره‌ای معماری پروژه",
    ],
    tags: ["معماری", "ریفکتور", "کدبیس"],
    activationDescription:
      "Scan a codebase for deepening opportunities, present them as a visual HTML report, then grill through whichever one you pick.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add improve-codebase-architecture",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/improve-codebase-architecture/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/improve-codebase-architecture/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/improve-codebase-architecture/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/improve-codebase-architecture/SKILL.md"],
      },
    ],
    agentsHint:
      "For architecture reviews, read .claude/skills/improve-codebase-architecture/SKILL.md first.",
    example:
      "اگر یک سرویس بیش از حد شلوغ شده باشد، فقط نمی‌گوید «این بخش مشکل دارد»؛ مشخص می‌کند مشکل از کجاست، چه تغییراتی پیشنهاد می‌دهد و از شما می‌پرسد از کدام بخش شروع شود.",
    source: {
      name: "Matt Pocock",
      url: "https://github.com/mattpocock/skills/tree/main/skills/engineering/improve-codebase-architecture",
    },
  },
  {
    slug: "grill-me",
    category: "ai",
    title: "زیر سؤال بردن ایده",
    summary:
      "قبل از شروع کار، ایده یا برنامه شما را با سؤال‌های دقیق بررسی می‌کند تا ابهام‌ها، فرض‌های اشتباه و بخش‌های جاافتاده مشخص شوند.",
    useCases: [
      "بررسی دقیق یک ایده یا برنامه",
      "وقتی هنوز دقیق نمی‌دانید چه می‌خواهید",
      "قبل از شروع کدنویسی یک ایده",
      "پیدا کردن مشکل‌های یک طرح قبل از اجرا",
    ],
    tags: ["برنامه‌ریزی", "تصمیم", "مصاحبه"],
    activationDescription:
      "A relentless interview to sharpen a plan or design. Use when the user wants to stress-test their thinking, says \"grill me\", or asks to poke holes in a plan, decision, or idea.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add grill-me",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/grill-me/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/grill-me/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/grill-me/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/grill-me/SKILL.md"],
      },
    ],
    agentsHint:
      "When the user wants a plan grilled, read .claude/skills/grill-me/SKILL.md first.",
    example:
      "به‌جای اینکه سریع بگوید «باشه، پیاده‌اش می‌کنم»، درباره محدوده کار، نیازمندی‌ها و چیزهایی که قرار نیست ساخته شوند سؤال می‌پرسد تا قبل از شروع، تکلیفشان مشخص شود.",
    source: {
      name: "Matt Pocock",
      url: "https://github.com/mattpocock/skills/tree/main/skills/productivity/grill-me",
    },
  },
  {
    slug: "persian-typography",
    category: "persian-product",
    title: "فونت و خوانایی فارسی",
    summary:
      "فونت و فاصلهٔ خط فارسی را درست می‌گذارد تا متن راحت خوانده شود — حتی کنار انگلیسی.",
    useCases: [
      "انتخاب فونت برای سایت فارسی",
      "تیتر و متن بدنه",
      "جدول قیمت و عدد",
      "متن مخلوط فارسی و انگلیسی",
    ],
    tags: ["راهنما", "تایپوگرافی", "فونت"],
    activationDescription:
      "Persian typography guidance for coding agents and developers. Use when choosing or loading Persian fonts, styling Persian interfaces, handling Persian digits, mixed Persian and Latin text, ZWNJ, line height, tables, prices, and typography-related RTL issues.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add persian-typography",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: ["docs/persian-typography.md"],
        note: "سپس در CLAUDE.md بنویسید: @docs/persian-typography.md",
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/rules/persian-typography.mdc"],
        note: "در ابتدای فایل alwaysApply: true بگذارید",
      },
      {
        id: "codex",
        name: "Codex",
        paths: ["AGENTS.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: ["AGENTS.md"],
      },
    ],
    agentsHint:
      "For Persian typography, apply the rules from docs/persian-typography.md.",
    example:
      "تیتر فارسی را طوری می‌چیند که خط‌ها به هم نچسبند و راحت خوانده شوند.",
  },
  {
    slug: "parspack-s3-upload",
    category: "integrations",
    title: "آپلود تصویر به پارس‌پک",
    summary:
      "عکس را از سرور به فضای ابری پارس‌پک می‌فرستد؛ برای پروفایل، محصول و گالری در Next.js.",
    useCases: [
      "عکس پروفایل کاربر",
      "تصویر محصول فروشگاه",
      "گالری یا آپلود فایل در پنل",
    ],
    tags: ["راهنما", "آپلود", "S3"],
    activationDescription:
      "Upload images to ParsPack S3-compatible object storage from a Next.js App Router application. Use when implementing server-side image uploads, S3 client configuration, public or presigned object URLs, upload validation, authenticated API routes, or ParsPack-specific path-style addressing.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add parspack-s3-upload",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: ["docs/parspack-s3-upload.md"],
        note: "سپس در CLAUDE.md بنویسید: @docs/parspack-s3-upload.md",
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/rules/parspack-s3-upload.mdc"],
        note: "در ابتدای فایل alwaysApply: true بگذارید",
      },
      {
        id: "codex",
        name: "Codex",
        paths: ["AGENTS.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: ["AGENTS.md"],
      },
    ],
    agentsHint:
      "For ParsPack image uploads, apply the rules from docs/parspack-s3-upload.md.",
  },
  {
    slug: "zarinpal-payment",
    category: "integrations",
    title: "پرداخت آنلاین با زرین‌پال",
    summary:
      "پرداخت با زرین‌پال را قدم‌به‌قدم وصل می‌کند: از درخواست پرداخت تا برگشت از درگاه و تأیید نهایی.",
    useCases: [
      "خرید محصول یا اشتراک",
      "شارژ اعتبار داخل اپ",
      "تست پرداخت قبل از رفتن روی حالت واقعی",
    ],
    tags: ["راهنما", "پرداخت", "زرین‌پال"],
    activationDescription:
      "Integrate the Zarinpal payment gateway into Next.js or Node.js applications. Use when implementing payment requests, authority handling, callbacks, verification, billing records, Toman-to-Rial conversion, sandbox testing, idempotency, or secure payment flows for Iranian products.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add zarinpal-payment",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: ["docs/zarinpal-payment.md"],
        note: "سپس در CLAUDE.md بنویسید: @docs/zarinpal-payment.md",
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/rules/zarinpal-payment.mdc"],
        note: "در ابتدای فایل alwaysApply: true بگذارید",
      },
      {
        id: "codex",
        name: "Codex",
        paths: ["AGENTS.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: ["AGENTS.md"],
      },
    ],
    agentsHint:
      "For Zarinpal payments, apply the rules from docs/zarinpal-payment.md.",
  },
  {
    slug: "nextjs-multi-design-system",
    category: "web",
    title: "چند Design System در Next.js",
    titleEn: "Multi Design System",
    summary:
      "وقتی یک پروژه چند ظاهر یا Design System دارد، کمک می‌کند ظاهر انتخاب‌شده از همان اول درست لود شود و کامپوننت‌ها و پیش‌نمایش‌ها هم همان ظاهر را نشان دهند.",
    useCases: [
      "داشتن چند ظاهر در یک سایت یا مستندات",
      "جلوگیری از نمایش لحظه‌ای ظاهر اشتباه هنگام باز شدن صفحه",
      "هماهنگ کردن پیش‌نمایش کامپوننت با ظاهر انتخاب‌شده",
      "هماهنگ ماندن حالت روشن و تاریک با هر Design System",
    ],
    tags: [
      "nextjs",
      "design-system",
      "themes",
      "ssr",
      "iframe",
      "hydration",
      "preview",
      "fouc",
    ],
    activationDescription:
      "Build and debug multiple isolated design systems in a Next.js app: style-* body classes, cookie/localStorage sync, FOUC prevention, light/dark coexistence, SSR/hydration, iframe component previews, parent↔iframe theme sync, and design tokens. Use when switching themes flashes wrong styles, iframe previews ignore the picker, or docs and preview disagree.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add nextjs-multi-design-system",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/nextjs-multi-design-system/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/nextjs-multi-design-system/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/nextjs-multi-design-system/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/nextjs-multi-design-system/SKILL.md"],
      },
    ],
    agentsHint:
      "For multi design-system Next.js apps and iframe previews, read .claude/skills/nextjs-multi-design-system/SKILL.md first.",
    example:
      "کوکی design-system را قبل از رندر صفحه می‌خواند و style-vega را روی body قرار می‌دهد تا iframe پیش‌نمایش هم همان ظاهر را نشان دهد.",
    source: {
      name: "FarsiUI",
      url: "https://farsiui.ir/skills/nextjs-multi-design-system",
    },
  },
  {
    slug: "rtl-data-visualization",
    category: "web",
    title: "نمودار فارسی و راست‌چین",
    titleEn: "RTL Charts",
    summary:
      "نمودارها را برای رابط فارسی و راست‌چین تنظیم می‌کند تا اعداد، برچسب‌ها، Tooltip و Legend درست نمایش داده شوند و چیدمان نمودار به‌هم نریزد.",
    useCases: [
      "ساخت داشبوردهای فارسی",
      "نمایش درست اعداد و نوشته‌های فارسی روی محورها",
      "راست‌چین کردن Tooltip و Legend",
      "رفع مشکل محور، فاصله‌ها یا تراز اشتباه در RTL",
    ],
    tags: [
      "rtl",
      "recharts",
      "charts",
      "persian",
      "locale",
      "tooltip",
      "visualization",
    ],
    activationDescription:
      "Build and debug RTL / Persian data visualizations with Recharts (or similar): Persian digits, fa-IR locale, axis and tooltip alignment, labels, formatting, responsive charts, and common RTL chart bugs. Use when charts look LTR, numbers are Latin-only, tooltips misalign, or axes flip incorrectly under dir=rtl.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add rtl-data-visualization",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/rtl-data-visualization/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/rtl-data-visualization/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/rtl-data-visualization/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/rtl-data-visualization/SKILL.md"],
      },
    ],
    agentsHint:
      "For RTL / Persian charts, read .claude/skills/rtl-data-visualization/SKILL.md first.",
    example:
      'محور X را با tickFormatter به فرمت fa-IR تبدیل می‌کند و Tooltip را داخل ChartContainer با dir="rtl" درست تراز می‌کند.',
    source: {
      name: "FarsiUI",
      url: "https://farsiui.ir/skills/rtl-data-visualization",
    },
  },
  {
    slug: "component-registry-cli",
    category: "ui-library",
    title: "Registry و نصب کامپوننت",
    titleEn: "Registry & CLI",
    summary:
      "کامپوننت‌ها را در یک Registry تعریف می‌کند و با دستور CLI داخل پروژه نصب می‌کند؛ همراه با مسیر فایل، وابستگی‌ها و Aliasهای درست.",
    useCases: [
      "ساخت و انتشار Registry کامپوننت",
      "نصب کامپوننت با CLI",
      "رفع مشکل مسیر اشتباه فایل‌ها یا وابستگی‌های جاافتاده",
      "مدیریت نسخه و به‌روزرسانی کامپوننت‌ها",
    ],
    tags: [
      "registry",
      "cli",
      "components",
      "install",
      "dependencies",
      "versioning",
      "cursor",
      "claude",
    ],
    activationDescription:
      "Design, build, and consume a UI component registry with its install CLI: registry structure, item metadata, files, dependencies, local vs published registries, path resolution, versioning, and installs into .cursor / .claude / project paths. Use when adding components via CLI fails, registry JSON is wrong, or install paths/deps resolve incorrectly.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add component-registry-cli",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/component-registry-cli/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/component-registry-cli/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/component-registry-cli/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/component-registry-cli/SKILL.md"],
      },
    ],
    agentsHint:
      "For component registry and CLI install workflows, read .claude/skills/component-registry-cli/SKILL.md first.",
    example:
      "آیتم registry:ui را با files و dependencies درست تعریف می‌کند و دستور add را بر اساس Aliasهای پروژه تولید می‌کند.",
    source: {
      name: "FarsiUI",
      url: "https://farsiui.ir/skills/component-registry-cli",
    },
  },
  {
    slug: "ui-library-mcp",
    category: "ai",
    title: "MCP برای کتابخانه UI",
    titleEn: "UI Library MCP",
    summary:
      "به AI کمک می‌کند کامپوننت‌های یک کتابخانه UI را پیدا کند، نمونه آن‌ها را ببیند و دستور نصبشان را بگیرد؛ مخصوص کار با UI Library است، نه استفاده عمومی از MCP.",
    useCases: [
      "جستجو و نصب کامپوننت از داخل Cursor یا Claude",
      "رفع خطاهای ابزار یا نتیجه‌های خالی",
      "هماهنگ کردن نام و ظاهر ابزارها با برند کتابخانه",
      "نمایش نمونه و دستور نصب کامپوننت داخل AI",
    ],
    tags: [
      "mcp",
      "ui-library",
      "design-system",
      "cursor",
      "claude",
      "tools",
      "schema",
      "registry",
    ],
    activationDescription:
      "Build and debug an MCP server tailored to a UI library / design system registry: tools, resources, prompts, empty schemas, component discovery, metadata, naming, branding, and Cursor/Claude/OpenCode compatibility. Use when agents cannot list or install components via MCP, schemas fail validation, or the MCP is too generic for a component registry. Not a general MCP tutorial — use mcp-builder for that.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add ui-library-mcp",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/ui-library-mcp/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/ui-library-mcp/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/ui-library-mcp/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/ui-library-mcp/SKILL.md"],
      },
    ],
    agentsHint:
      "For UI library / design-system MCP servers, read .claude/skills/ui-library-mcp/SKILL.md first.",
    example:
      "ابزار search_items_in_registries را با Schema ساده و بدون $schema می‌سازد و برای list از یک Object خالی استفاده می‌کند تا Cursor بتواند ابزار را درست اجرا کند.",
    source: {
      name: "FarsiUI",
      url: "https://farsiui.ir/skills/ui-library-mcp",
    },
  },
  {
    slug: "responsive-design",
    category: "web",
    title: "طراحی واکنش‌گرا",
    titleEn: "Responsive Design",
    summary:
      "کمک می‌کند رابط کاربری از موبایل تا دسکتاپ درست رفتار کند و چیدمان، اندازه‌ها و فاصله‌ها در هر اندازه صفحه طبیعی باقی بمانند.",
    useCases: [
      "طراحی Mobile-first",
      "جلوگیری از به‌هم‌ریختن چیدمان در اندازه‌های مختلف",
      "ساخت Grid و Layoutهای واکنش‌گرا",
      "کنترل بهتر Typography و فاصله‌ها",
      "سازگار کردن کامپوننت‌ها با موبایل و دسکتاپ",
    ],
    tags: ["responsive", "mobile-first", "css", "layout", "grid"],
    activationDescription:
      "Implement modern responsive layouts using container queries, fluid typography, CSS Grid, and mobile-first breakpoint strategies. Use when building adaptive interfaces, implementing fluid layouts, or creating component-level responsive behavior.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add responsive-design",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/responsive-design/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/responsive-design/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/responsive-design/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/responsive-design/SKILL.md"],
      },
    ],
    agentsHint:
      "For responsive layouts, read .claude/skills/responsive-design/SKILL.md first.",
    example:
      "به‌جای ساختن یک Layout دسکتاپ و کوچک کردن آن برای موبایل، ابتدا ساختار مناسب موبایل را در نظر می‌گیرد و سپس برای اندازه‌های بزرگ‌تر توسعه می‌دهد.",
    source: {
      name: "wshobson/agents",
      url: "https://github.com/wshobson/agents/tree/main/plugins/ui-design/skills/responsive-design",
    },
  },
  {
    slug: "accessibility-compliance",
    category: "web",
    title: "دسترس‌پذیری و استاندارد WCAG",
    titleEn: "Accessibility Compliance",
    summary:
      "کمک می‌کند کامپوننت‌ها برای کاربران مختلف قابل استفاده باشند و مواردی مثل کیبورد، Focus، کنتراست و Screen Reader از ابتدا درست پیاده شوند.",
    useCases: [
      "رعایت اصول WCAG",
      "پشتیبانی از Keyboard Navigation",
      "مدیریت درست Focus",
      "استفاده صحیح از ARIA",
      "بررسی کنتراست و وضعیت‌های مختلف کامپوننت",
    ],
    tags: ["accessibility", "wcag", "a11y", "aria", "keyboard"],
    activationDescription:
      "Implement WCAG 2.2 compliant interfaces with mobile accessibility, inclusive design patterns, and assistive technology support. Use when auditing accessibility, implementing ARIA patterns, building for screen readers, or ensuring inclusive user experiences.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add accessibility-compliance",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/accessibility-compliance/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/accessibility-compliance/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/accessibility-compliance/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/accessibility-compliance/SKILL.md"],
      },
    ],
    agentsHint:
      "For accessibility and WCAG, read .claude/skills/accessibility-compliance/SKILL.md first.",
    example:
      "یک Dialog فقط با کلیک ماوس کار نمی‌کند؛ Focus را مدیریت می‌کند، با Escape بسته می‌شود و برای Screen Reader هم ساختار قابل فهمی دارد.",
    source: {
      name: "wshobson/agents",
      url: "https://github.com/wshobson/agents/tree/main/plugins/ui-design/skills/accessibility-compliance",
    },
  },
  {
    slug: "interaction-design",
    category: "web",
    title: "طراحی تعامل",
    titleEn: "Interaction Design",
    summary:
      "کمک می‌کند رفتار رابط کاربری فقط به ظاهر محدود نباشد و وضعیت‌هایی مثل Loading، Error، Success، Hover و Transition هم درست طراحی شوند.",
    useCases: [
      "طراحی حالت‌های مختلف کامپوننت",
      "Loading و Feedback مناسب",
      "Transition و Animationهای کنترل‌شده",
      "طراحی Hover و Focus",
      "مدیریت Empty، Error و Success State",
    ],
    tags: ["interaction", "animation", "loading", "feedback", "motion"],
    activationDescription:
      "Design and implement microinteractions, motion design, transitions, and user feedback patterns. Use when adding polish to UI interactions, implementing loading states, or creating deliberate user feedback.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add interaction-design",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/interaction-design/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/interaction-design/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/interaction-design/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/interaction-design/SKILL.md"],
      },
    ],
    agentsHint:
      "For interaction and motion design, read .claude/skills/interaction-design/SKILL.md first.",
    example:
      "وقتی کاربر روی دکمه ارسال کلیک می‌کند، دکمه وارد حالت Loading می‌شود، از ارسال دوباره جلوگیری می‌کند و بعد نتیجه عملیات را به شکل واضح نمایش می‌دهد.",
    source: {
      name: "wshobson/agents",
      url: "https://github.com/wshobson/agents/tree/main/plugins/ui-design/skills/interaction-design",
    },
  },
  {
    slug: "design-system-patterns",
    category: "web",
    title: "الگوهای Design System",
    titleEn: "Design System Patterns",
    summary:
      "کمک می‌کند توکن‌ها، تم روشن و تاریک و معماری کامپوننت‌ها یکدست و قابل نگهداری بمانند.",
    useCases: [
      "ساخت Design Token برای رنگ، فاصله و تایپوگرافی",
      "پیاده‌سازی تم روشن و تاریک",
      "معماری کتابخانه کامپوننت با API یکدست",
      "سلسله‌مراتب توکن‌های Primitive، Semantic و Component",
    ],
    tags: [
      "design-system",
      "tokens",
      "theming",
      "components",
      "css-variables",
    ],
    activationDescription:
      "Build scalable design systems with design tokens, theming infrastructure, and component architecture patterns. Use when creating design tokens, implementing theme switching, building component libraries, or establishing design system foundations.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add design-system-patterns",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/design-system-patterns/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/design-system-patterns/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/design-system-patterns/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/design-system-patterns/SKILL.md"],
      },
    ],
    agentsHint:
      "For design system tokens and theming patterns, read .claude/skills/design-system-patterns/SKILL.md first.",
    example:
      "به‌جای هاردکد کردن رنگ در کامپوننت، توکن semantic مثل text-primary می‌سازد و تم تاریک را با همان توکن‌ها وصل می‌کند.",
    source: {
      name: "wshobson/agents",
      url: "https://github.com/wshobson/agents/tree/main/plugins/ui-design/skills/design-system-patterns",
    },
  },
  {
    slug: "web-interface-guidelines",
    category: "web",
    title: "راهنمای رابط کاربری وب",
    titleEn: "Web Interface Guidelines",
    summary:
      "قواعد کوتاه و عملی برای ساخت رابط سریع، در دسترس و خوش‌دست روی وب؛ از فوکوس و فرم تا انیمیشن و پرفورمنس.",
    useCases: [
      "بازبینی کیفیت رابط کاربری قبل از تحویل",
      "فرم، فوکوس و تعامل کیبورد",
      "انیمیشن با احترام به prefers-reduced-motion",
      "کاهش CLS و بهبود پرفورمنس UI",
    ],
    tags: [
      "guidelines",
      "accessibility",
      "forms",
      "performance",
      "vercel",
    ],
    activationDescription:
      "Concise rules for building accessible, fast, delightful web UIs. Use when reviewing or implementing interfaces, forms, focus, animation, layout, performance, or dark mode — guided by MUST / SHOULD / NEVER decisions.",
    activationNote:
      "این چند خط به AI می‌گوید کی این مهارت را باز کند. اگر جاهای دیگری هم لازم دارید، همین متن را عوض کنید.",
    installCommand: "npx farsiui@latest add web-interface-guidelines",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [".claude/skills/web-interface-guidelines/SKILL.md"],
      },
      {
        id: "cursor",
        name: "Cursor",
        paths: [".cursor/skills/web-interface-guidelines/SKILL.md"],
      },
      {
        id: "codex",
        name: "Codex",
        paths: [".agents/skills/web-interface-guidelines/SKILL.md"],
      },
      {
        id: "other",
        name: "سایر ابزارها",
        paths: [".claude/skills/web-interface-guidelines/SKILL.md"],
      },
    ],
    agentsHint:
      "For web UI quality guidelines, read .claude/skills/web-interface-guidelines/SKILL.md first.",
    example:
      "دکمهٔ ارسال تا شروع درخواست فعال می‌ماند، بعد اسپینر می‌گیرد و لیبلش حفظ می‌شود؛ خطای فرم کنار فیلد نشان داده می‌شود و فوکوس روی اولین خطا می‌رود.",
    source: {
      name: "Vercel Labs",
      url: "https://github.com/vercel-labs/web-interface-guidelines",
    },
  },
]

const CATEGORY_ORDER = new Map(
  SKILL_CATEGORIES.map((category, index) => [category.id, index])
)

export function getSkills() {
  return [...skills].sort((a, b) => {
    const byCategory =
      (CATEGORY_ORDER.get(a.category) ?? 99) -
      (CATEGORY_ORDER.get(b.category) ?? 99)
    if (byCategory !== 0) return byCategory
    return a.title.localeCompare(b.title, "fa", { sensitivity: "base" })
  })
}

export function getSkill(slug: string) {
  return skills.find((skill) => skill.slug === slug)
}

export function getSkillSlugs() {
  return getSkills().map((skill) => skill.slug)
}

export function getSkillsByCategory(categoryId: SkillCategoryId) {
  return getSkills().filter((skill) => skill.category === categoryId)
}

export type SkillCategoryGroup = {
  category: (typeof SKILL_CATEGORIES)[number]
  skills: Skill[]
}

/** Catalog groups in sidebar/README order; empty categories omitted. */
export function getSkillsGroupedByCategory(): SkillCategoryGroup[] {
  const list = getSkills()
  return SKILL_CATEGORIES.flatMap((category) => {
    const groupSkills = list.filter((skill) => skill.category === category.id)
    if (!groupSkills.length) return []
    return [{ category, skills: groupSkills }]
  })
}

export function skillMatchesQuery(skill: Skill, query: string): boolean {
  if (!query) return true
  const category = getSkillCategory(skill.category)
  return (
    matchesLoose(skill.title, query) ||
    matchesLoose(getSkillTitleEn(skill), query) ||
    matchesLoose(skill.slug, query) ||
    matchesLoose(skill.summary, query) ||
    matchesLoose(skill.activationDescription, query) ||
    matchesLoose(category?.title ?? "", query) ||
    matchesLoose(category?.titleEn ?? "", query) ||
    matchesLoose(category?.id ?? "", query) ||
    skill.tags.some((tag) => matchesLoose(tag, query)) ||
    skill.useCases.some((useCase) => matchesLoose(useCase, query))
  )
}

function matchesLoose(value: string, query: string) {
  const hay = value.trim().toLowerCase()
  const needle = query.trim().toLowerCase()
  if (!needle) return true
  return hay.includes(needle)
}

export function searchSkills(query: string) {
  const q = query.trim()
  if (!q) return getSkills()
  return getSkills().filter((skill) => skillMatchesQuery(skill, q))
}

export function getSkillsNavCurrent(pathname: string): string | null {
  if (pathname === "/skills" || pathname === "/skills/install") return "معرفی"
  const match = pathname.match(/^\/skills\/([^/]+)/)
  if (!match) return null
  return getSkill(match[1])?.title ?? null
}

export function getSkillsNavCategoryId(
  pathname: string
): SkillCategoryId | null {
  const match = pathname.match(/^\/skills\/([^/]+)/)
  if (!match) return null
  return getSkill(match[1])?.category ?? null
}
