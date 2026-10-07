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
  /** Show a quiet verified cue on the detail page */
  verified?: boolean
}

export type Skill = {
  slug: string
  title: string
  summary: string
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

export const skills: Skill[] = [
  {
    slug: "persian-conversational",
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
    title: "سئو برای سایت فارسی",
    summary:
      "عنوان و توضیحات صفحه را برای گوگل و مخاطب فارسی درست می‌کند.",
    useCases: [
      "عنوان و توضیح صفحه",
      "صفحهٔ محصول یا مقاله",
      "پیش‌نمایش وقتی لینک را در شبکه اجتماعی می‌فرستید",
      "سایت دو زبانهٔ فارسی و انگلیسی",
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
      "عنوان تب مرورگر می‌شود «کفش ورزشی مردانه | فروشگاه شما» — نه عنوان انگلیسی Product.",
  },
  {
    slug: "agents-md-persian",
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
    title: "طراحی ظاهر صفحه",
    summary:
      "ظاهر صفحه را از قالب تکراری AI درمی‌آورد و رنگ و فونت را برای همان محصول انتخاب می‌کند.",
    useCases: [
      "طراحی صفحهٔ معرفی یا محصول جدید",
      "وقتی خروجی AI شبیه بقیه سایت‌ها شده",
      "قبل از کد زدن، جهت ظاهری را مشخص کنید",
      "چک کردن ظاهر قبل از تحویل",
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
      "به‌جای بنر بنفش تکراری، برای فروشگاه اسباب‌بازی رنگ و فونت مخصوص همان کار را می‌چیند.",
    source: {
      name: "Anthropic",
      url: "https://github.com/anthropics/skills/tree/main/skills/frontend-design",
      verified: true,
    },
  },
  {
    slug: "mcp-builder",
    title: "ساخت سرور MCP",
    summary:
      "کمک می‌کند برای AI ابزار وصل به سرویس‌های بیرونی بسازید — با اسم واضح و خطای قابل‌فهم.",
    useCases: [
      "وصل کردن AI به یک API یا سرویس خارجی",
      "ساخت ابزار خواندن و نوشتن برای Agent",
      "سرور MCP با TypeScript یا Python",
      "چک کردن اینکه AI واقعاً با ابزار کار می‌کند",
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
      "به‌جای یک ابزار مبهم مثل «doStuff»، چیزهایی مثل «list_orders» می‌سازید تا AI بداند دقیقاً چه کار کند.",
    source: {
      name: "Anthropic",
      url: "https://github.com/anthropics/skills/tree/main/skills/mcp-builder",
      verified: true,
    },
  },
  {
    slug: "find-skills",
    title: "پیدا کردن و نصب مهارت",
    summary:
      "اگر نمی‌دانید برای کاری مثل تست یا طراحی راهنمای آماده هست یا نه، می‌گردد و راه نصب را نشان می‌دهد.",
    useCases: [
      "وقتی می‌پرسید «برای این کار مهارت هست؟»",
      "پیدا کردن راهنما برای تست، طراحی یا دیپلوی",
      "نصب مهارت از GitHub",
      "قبل از نصب، ببینید مهارت قابل اعتماد هست یا نه",
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
      "اگر بپرسید «برای تست Playwright چیزی هست؟»، اول می‌گردد و بعد دستور نصب را می‌دهد.",
    source: {
      name: "Vercel Labs",
      url: "https://github.com/vercel-labs/skills/blob/main/skills/find-skills/SKILL.md",
      verified: true,
    },
  },
  {
    slug: "vercel-react-best-practices",
    title: "سریع‌تر کردن React و Next.js",
    summary:
      "راهنمای پرفورمنس تیم Vercel؛ کمک می‌کند صفحه سبک‌تر لود شود و بی‌خود دوباره رندر نکند.",
    useCases: [
      "نوشتن یا بررسی کامپوننت React و صفحه Next.js",
      "گرفتن داده از سرور یا کلاینت بدون کندی اضافه",
      "کم کردن حجم فایل‌هایی که مرورگر دانلود می‌کند",
      "وقتی صفحه کند است یا زیاد رفرش می‌شود",
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
      "به‌جای اینکه دو درخواست جدا را یکی‌یکی صبر کند، هر دو را با هم می‌فرستد تا صفحه زودتر جواب بدهد.",
    source: {
      name: "Vercel Labs",
      url: "https://github.com/vercel-labs/agent-skills/tree/main/skills/react-best-practices",
      verified: true,
    },
  },
  {
    slug: "improve-codebase-architecture",
    title: "مرتب کردن معماری پروژه",
    summary:
      "نگاه می‌کند کجای پروژه درهم است، پیشنهاد مرتب‌کاری می‌دهد، بعد با سؤال از شما مطمئن می‌شود.",
    useCases: [
      "پیدا کردن جاهایی که ساختار پروژه شلوغ شده",
      "ساده کردن بخش‌هایی که فهمیدنشان سخت است",
      "قابل‌تست‌تر کردن کد برای خودتان و برای AI",
      "بازبینی دوره‌ای ساختار پروژه",
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
      "به‌جای اینکه بگوید «این سرویس شلوغ است»، نشان می‌دهد کجا گیر می‌کند و می‌پرسد کدام بخش را اول درست کنید.",
    source: {
      name: "Matt Pocock",
      url: "https://github.com/mattpocock/skills/tree/main/skills/engineering/improve-codebase-architecture",
      verified: true,
    },
  },
  {
    slug: "grill-me",
    title: "سؤال‌پیچ کردن طرح",
    summary:
      "قبل از شروع کار، طرح یا ایده‌تان را با سؤال‌های سخت زیر ذره‌بین می‌برد تا چیز مبهم نماند.",
    useCases: [
      "سخت گرفتن روی یک پلن یا طراحی",
      "وقتی هنوز دقیق نمی‌دانید چه می‌خواهید",
      "قبل از اینکه برای یک ایده کد بزنید",
      "وقتی می‌گویید «grill me» یا «سوراخم کن»",
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
      "به‌جای اینکه سریع بگوید «باشه پیاده‌اش می‌کنم»، اول می‌پرسد محدوده چیست و چه چیزی عمداً بیرون می‌ماند.",
    source: {
      name: "Matt Pocock",
      url: "https://github.com/mattpocock/skills/tree/main/skills/productivity/grill-me",
      verified: true,
    },
  },
  {
    slug: "persian-typography",
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
]

export function getSkills() {
  return [...skills].sort((a, b) =>
    a.title.localeCompare(b.title, "fa", { sensitivity: "base" })
  )
}

export function getSkill(slug: string) {
  return skills.find((skill) => skill.slug === slug)
}

export function getSkillSlugs() {
  return getSkills().map((skill) => skill.slug)
}

export function getSkillsNavCurrent(pathname: string): string | null {
  if (pathname === "/skills" || pathname === "/skills/install") return "معرفی"
  const match = pathname.match(/^\/skills\/([^/]+)/)
  if (!match) return null
  return getSkill(match[1])?.title ?? null
}
