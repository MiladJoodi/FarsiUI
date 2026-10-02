export type SkillSample = {
  prompt: string
  without: string
  with: string
}

export type SkillInstallTarget = {
  id: "claude-code" | "cursor" | "codex" | "other"
  name: string
  paths: string[]
  note?: string
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
  sample: SkillSample
}

export const skills: Skill[] = [
  {
    slug: "persian-conversational",
    title: "فارسی محاوره‌ای",
    summary:
      "به مدل یاد می‌دهد فارسی محاوره‌ای را طبیعی و خودمانی بنویسد؛ از انتخاب لحن و کاربرد درست «تو» و «شما» گرفته تا بازنویسی روان و نوشتن درست عبارت‌هایی مثل «خونه‌ی من».",
    useCases: [
      "کپشن و پست شبکه‌های اجتماعی",
      "متن آنبوردینگ و پیام‌های داخل اپ",
      "پیام‌ها و پاسخ‌های پشتیبانی",
      "اعلان‌ها و پیام‌های کوتاه و دوستانه",
      "وقتی می‌خواهید متن لحن خودمانی و صمیمی داشته باشد",
    ],
    tags: ["نوشتن", "محاوره", "شبکه‌های اجتماعی"],
    activationDescription:
      "Write natural colloquial Persian (محاوره‌نویسی) as Persian speakers actually write in chats, social media, consumer products, onboarding, notifications, and friendly support. Use when the user asks for فارسی محاوره‌ای، خودمونی، عامیانه، لحن دوستانه، کپشن، استوری، پیام چت, or casual Persian product copy. Do not use for legal, academic, administrative, contractual, or explicitly formal writing; use persian-formal or persian-writing when appropriate.",
    activationNote:
      "مدل با همین چند خط تصمیم می‌گیرد مهارت را بخواند یا نه. اگر می‌خواهید در موقعیت‌های دیگری هم فعال شود، همین متن را عوض کنید.",
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
    sample: {
      prompt: "یه پیام خوش‌آمد برای اولین ورود کاربر بنویس",
      without:
        "کاربر گرامی، به اپلیکیشن ما خوش آمدید. لطفاً جهت شروع، پروفایل خود را تکمیل نمایید.",
      with: "خوش اومدید! برای شروع، پروفایل‌تون رو کامل کنید.",
    },
  },
  {
    slug: "persian-formal",
    title: "فارسی رسمی و اداری",
    summary:
      "فارسی رسمی و اداری، بدون لحن خشک و بوروکراتیک. جمله‌های کوتاه، ادعای دقیق و «است» به‌جای «می‌باشد»؛ برای نامه، ایمیل، پروپوزال، قرارداد و متن شرکتی.",
    useCases: [
      "نامه به سازمان، اداره یا دانشگاه",
      "پروپوزال و قرارداد",
      "ایمیل رسمی و مکاتبات کاری",
      "فاکتور و اسناد تجاری",
      "متن سایت شرکتی و صفحه «درباره ما»",
      "قوانین، شرایط استفاده و سیاست‌های رسمی",
    ],
    tags: ["نوشتن", "رسمی", "اداری"],
    activationDescription:
      "Write formal Persian that still sounds human: proposals, contracts, invoices, official letters (نامه اداری), formal email, company website copy, terms and policies. Use whenever the user asks for فارسی رسمی، اداری، نامه، پروپوزال، قرارداد، فاکتور، متن حقوقی, or when the text goes to a client, organization, university or government office. Bans the bureaucratic tells (می‌باشد، لازم به ذکر است) that make Persian sound machine-written.",
    activationNote:
      "مدل با همین چند خط تصمیم می‌گیرد مهارت را بخواند یا نه. اگر می‌خواهید در موقعیت‌های دیگری هم فعال شود، همین متن را عوض کنید.",
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
    sample: {
      prompt: "متن معرفی شرکت برای صفحه درباره ما",
      without:
        "شرکت ما در راستای ارائه خدمات نوین، با بهره‌گیری از تیمی مجرب، همواره در تلاش می‌باشد تا تجربه‌ای بی‌نظیر رقم بزند.",
      with: "از ۱۳۹۸ برای فروشگاه‌های آنلاین سایت می‌سازیم. تا امروز ۴۰ فروشگاه تحویل داده‌ایم و هر پروژه یک مدیر مشخص دارد که پاسخگوی شماست.",
    },
  },
  {
    slug: "persian-ui-copy",
    title: "متن رابط کاربری",
    summary:
      "به مدل کمک می‌کند متن‌های رابط کاربری را طبیعی، کوتاه و روشن بنویسد؛ از انتخاب واژه برای دکمه‌ها و فرم‌ها تا پیام‌های خطا، اعلان‌ها و حالت‌های مختلف رابط. هدف این است که متن فارسی رابط، مثل یک محصول فارسی واقعی به نظر برسد، نه ترجمه‌ای از انگلیسی.",
    useCases: [
      "متن دکمه‌ها و لینک‌ها",
      "لیبل و Placeholder فرم‌ها",
      "پیام‌های خطا و اعتبارسنجی",
      "حالت‌های خالی و لودینگ",
      "پیام‌های موفقیت و اعلان‌ها",
      "دیالوگ‌ها و پیام‌های تأیید",
      "فارسی‌سازی متن رابط‌های انگلیسی",
      "انتخاب واژه‌های مناسب برای هر بخش از رابط",
    ],
    tags: ["نوشتن", "UI", "محصول"],
    activationDescription:
      "Write natural Persian (Farsi) UI microcopy for buttons, labels, placeholders, validation and error messages, empty states, loading, success messages, confirmations and notifications. Use when creating, rewriting or translating user-facing text for Persian and Iranian products. Prefer natural product language over literal translation. Includes an English-to-Persian UI glossary for consistent terminology.",
    activationNote:
      "مدل با همین چند خط تصمیم می‌گیرد مهارت را بخواند یا نه. اگر می‌خواهید در موقعیت‌های دیگری هم فعال شود، همین متن را عوض کنید.",
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
    sample: {
      prompt:
        "برای وقتی که کاربر سفارش خود را با موفقیت ثبت کرده، یک پیام کوتاه بنویس.",
      without:
        "سفارش شما با موفقیت ثبت گردید و از شما بابت خریدتان سپاسگزاریم.",
      with: "سفارش ثبت شد.",
    },
  },
  {
    slug: "persian-rtl-ui",
    title: "رابط راست‌چین",
    summary:
      "به مدل کمک می‌کند رابط‌های فارسی و راست‌چین را درست و طبیعی پیاده‌سازی کند؛ از چیدمان و فاصله‌گذاری منطقی گرفته تا تایپوگرافی فارسی، اعداد، تاریخ شمسی، فرم‌های ایرانی و سازگاری کامپوننت‌های تو‌در‌تو و Portalها با RTL.",
    useCases: [
      "ساخت رابط‌های فارسی و RTL با React و Tailwind",
      "تبدیل رابط‌های LTR به RTL بدون به‌هم‌زدن چیدمان",
      "استفاده از کلاس‌های منطقی مثل ms، me، start و end",
      "تنظیم درست فونت و تایپوگرافی فارسی",
      "پیاده‌سازی فرم‌های فارسی مثل شماره موبایل، کد ملی و شبا",
      "نمایش درست اعداد، تومان و تاریخ شمسی",
      "بررسی RTL در Dropdown، Dialog، Tooltip، Popover و Portalها",
      "جلوگیری از خطاهای رایج مثل ml-*، text-left و آیکون‌های جهت‌دار اشتباه",
    ],
    tags: ["RTL", "UI", "React"],
    activationDescription:
      "Build natural Persian RTL interfaces with React and Tailwind. Use for Persian UI, RTL layouts, component styling, forms, dashboards and converting LTR interfaces to RTL. Covers logical CSS, Persian typography, Persian numbers, Jalali dates, Iranian form patterns, accessible RTL behavior and token-based styling.",
    activationNote:
      "مدل با همین چند خط تصمیم می‌گیرد مهارت را بخواند یا نه. اگر می‌خواهید در موقعیت‌های دیگری هم فعال شود، همین متن را عوض کنید.",
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
    sample: {
      prompt: "یک کارت محصول فارسی با قیمت و دکمه خرید بساز.",
      without: `<div className="flex ml-4 text-left">
  <span>$12,000</span>
  <Button>
    <ArrowRight />
    Buy now
  </Button>
</div>`,
      with: `<div className="flex ms-4 text-start">
  <span>۱۲٬۰۰۰ تومان</span>
  <Button>
    خرید
    <ArrowLeft />
  </Button>
</div>`,
    },
  },
  {
    slug: "jalali-calendar",
    title: "تقویم شمسی",
    summary:
      "تاریخ‌ها را برای محصولات فارسی بر اساس تقویم جلالی نمایش می‌دهد؛ با فرمت طبیعی فارسی، روزهای هفته و منطقه زمانی درست.",
    useCases: [
      "انتخاب تاریخ تولد و تاریخ ثبت اطلاعات",
      "فیلتر و گزارش‌گیری بر اساس تاریخ",
      "تعیین مهلت، سررسید و زمان‌بندی",
      "نمایش تاریخ در پروفایل، فاکتور و سفارش",
      "تبدیل تاریخ بین میلادی و شمسی",
    ],
    tags: ["تاریخ", "شمسی", "Jalali"],
    activationDescription:
      "Handle dates and times for Iranian users: the Jalali / Solar Hijri calendar (تقویم شمسی، هجری خورشیدی), Saturday-first weeks, Tehran time (Asia/Tehran, UTC+03:30, no DST), Persian month and weekday names, formatting, storage, conversion, date ranges, reports, age calculations and holidays. Use whenever a date, time, calendar, date picker, deadline, booking, report period, age or holiday appears in a Persian (Farsi) product, or the user says تاریخ شمسی، تقویم فارسی، jalali، شنبه، نوروز.",
    activationNote:
      "مدل با همین چند خط تصمیم می‌گیرد مهارت را بخواند یا نه. اگر می‌خواهید در موقعیت‌های دیگری هم فعال شود، همین متن را عوض کنید.",
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
    sample: {
      prompt: "تاریخ آخرین پرداخت کاربر را در صفحه فاکتور نمایش بده.",
      without: "2026-09-20",
      with: "۲۹ شهریور ۱۴۰۵",
    },
  },
  {
    slug: "iran-validation",
    title: "اعتبارسنجی ایرانی",
    summary:
      "به مدل کمک می‌کند ورودی‌های مخصوص کاربران ایرانی را درست اعتبارسنجی کند؛ از کد ملی و شماره شبا تا کارت بانکی، موبایل، کد پستی و پلاک خودرو. اعداد فارسی و عربی هم قبل از اعتبارسنجی به‌درستی مدیریت می‌شوند.",
    useCases: [
      "فرم‌های ثبت‌نام، ورود و احراز هویت",
      "پرداخت و فرم‌های اطلاعات بانکی",
      "اطلاعات هویتی و شخصی کاربران",
      "فرم‌های ارسال و آدرس",
      "شماره تماس و کدهای عددی",
      "هر جایی که ورودی عددی فارسی از کاربر دریافت می‌شود",
    ],
    tags: ["اعتبارسنجی", "فرم", "ایران"],
    activationDescription:
      "Validate and format Iranian identifiers correctly: national ID (کد ملی) checksum, legal entity ID (شناسه ملی), mobile numbers (۰۹…), landlines with area codes, IBAN / Sheba (شبا) mod-97, bank card numbers with Luhn and BIN lookup, postal code (کد پستی), vehicle plates (پلاک), and Persian/Arabic digit normalization. Use for signup, KYC, checkout, address, payment, profile, contact, or identity forms in Iranian products, or whenever the user mentions اعتبارسنجی، کد ملی، شناسه ملی، شبا، شماره کارت، شماره موبایل، تلفن ثابت، کد پستی، پلاک. Replaces US-style patterns such as SSN, ZIP codes, and US phone numbers with Iranian-specific formats and validation rules.",
    activationNote:
      "مدل با همین چند خط تصمیم می‌گیرد مهارت را بخواند یا نه. اگر می‌خواهید در موقعیت‌های دیگری هم فعال شود، همین متن را عوض کنید.",
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
    sample: {
      prompt:
        "یک فرم ثبت‌نام برای کاربران ایرانی بساز و کد ملی، شماره موبایل و کد پستی را اعتبارسنجی کن.",
      without: "فقط طول ورودی و الگوی عددی بررسی می‌شود.",
      with: "فرمت و قواعد مخصوص هر ورودی ایرانی بررسی می‌شود و اعداد فارسی، عربی و انگلیسی قبل از اعتبارسنجی نرمال می‌شوند.",
    },
  },
  {
    slug: "persian-seo",
    title: "سئوی فارسی",
    summary:
      "به مدل کمک می‌کند سئوی سایت‌های فارسی را درست پیاده‌سازی کند؛ از lang و hreflang گرفته تا عنوان و توضیحات فارسی، اسلاگ‌های باثبات، نیم‌فاصله در متن، Open Graph و JSON-LD با inLanguage. مثال‌ها با Next.js نوشته شده‌اند، اما اصول این مهارت برای هر سایت فارسی قابل استفاده‌اند.",
    useCases: [
      "متادیتا، عنوان و توضیحات صفحه‌ها",
      "ساختار URL و اسلاگ‌های فارسی",
      "hreflang و نسخه‌های فارسی/انگلیسی",
      "Open Graph و شبکه‌های اجتماعی",
      "JSON-LD و داده‌های ساختاریافته",
      "تولید و بهینه‌سازی محتوای فارسی برای جست‌وجو",
      "صفحات محصول، مقاله، دسته‌بندی و لندینگ",
    ],
    tags: ["سئو", "متادیتا", "محتوا"],
    activationDescription:
      "Technical and on-page SEO for Persian (Farsi) websites: document language, RTL direction, fa-IR metadata, hreflang, Persian titles and descriptions, stable slug and URL strategy, ZWNJ and Persian/Arabic character normalization, Open Graph, JSON-LD, canonical URLs, sitemaps, robots, internal linking, Persian keyword variants, Persian content structure, fonts, accessibility, and Core Web Vitals. Use when writing metadata, structured data, Persian blog content, product pages, landing pages, or URL structures for an Iranian or Persian-language site, or when the user mentions سئو، سئوی فارسی، متادیتا، عنوان صفحه، توضیحات، اسلاگ، URL، JSON-LD، hreflang، گوگل. Examples target Next.js, but the rules are framework-independent.",
    activationNote:
      "مدل با همین چند خط تصمیم می‌گیرد مهارت را بخواند یا نه. اگر می‌خواهید در موقعیت‌های دیگری هم فعال شود، همین متن را عوض کنید.",
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
    sample: {
      prompt: "متادیتای صفحهٔ محصول را برای یک سایت فارسی بنویس.",
      without: `<html lang="en">
...
og:locale: "en_US"
title: "Product | Site"`,
      with: `<html lang="fa" dir="rtl">
...
og:locale: "fa_IR"
title: "نام محصول | سایت"
description: "توضیح کوتاه و طبیعی دربارهٔ محصول به فارسی"`,
    },
  },
  {
    slug: "agents-md-persian",
    title: "قوانین فارسی برای CLAUDE.md",
    summary:
      "یک بلوک آماده برای قرار دادن داخل فایل‌های دستورالعمل ابزارهای AI که به مدل می‌گوید در پروژه‌های فارسی، RTL، تایپوگرافی فارسی، اعداد فارسی و تقویم شمسی را از ابتدا در نظر بگیرد. این راهنما خلاصه‌ای کاربردی از مهم‌ترین قواعد مهارت‌های فارسی را در یک فایل جمع می‌کند.",
    useCases: [
      "شروع یک پروژهٔ جدید فارسی",
      "وقتی نمی‌خواهید چند مهارت جداگانه نصب کنید",
      "پروژه‌هایی که با چند ابزار و Agent مختلف توسعه داده می‌شوند",
      "اضافه کردن قواعد ثابت فارسی به دستورالعمل پروژه",
    ],
    tags: ["راهنما", "Agent", "قوانین"],
    activationDescription:
      "Project-level Persian and RTL rules for coding agents. Use when a project targets Persian-speaking users in Iran and needs consistent Persian copy, RTL layout, Persian typography, Persian digits, Jalali dates, Iranian validation patterns, accessibility, and localized UI behavior without installing separate skills.",
    activationNote:
      "مدل با همین چند خط تصمیم می‌گیرد مهارت را بخواند یا نه. اگر می‌خواهید در موقعیت‌های دیگری هم فعال شود، همین متن را عوض کنید.",
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
    sample: {
      prompt: "یک دکمهٔ خرید بساز.",
      without: `<button className="ml-2">Buy now</button>`,
      with: `<button className="ms-2">خرید</button>`,
    },
  },
  {
    slug: "ui-craft-rules",
    title: "قوانین Craft رابط",
    summary:
      "چرا خروجی وایب‌کدینگ شبیه بقیه می‌شود و چطور جلویش را بگیرید: به‌جای «قشنگش کن»، تکنیک مشخص بگویید، به مدل اجازهٔ انتخاب‌های دلخواه ندهید، فاصلهٔ خط و اندازهٔ فونت را محدود کنید، جای تصاویر را قبل از لود رزرو کنید و اندازهٔ هدف دکمه‌ها را حداقل ۴۴ پیکسل نگه دارید. همراه با یک بلوک آماده برای فایل‌های قوانین Agent و چک‌لیست پایان کار.",
    useCases: [
      "شروع هر پروژه‌ای که با مدل ساخته می‌شود",
      "وقتی خروجی مدل شبیه سایت‌های تکراری و قالبی شده",
      "بازبینی رابط قبل از تحویل",
      "وقتی مدل بدون دلیل padding، رنگ، سایه یا اندازه‌های جدید اضافه می‌کند",
      "وقتی می‌خواهید رابط از نظر spacing، typography، motion و responsive منظم‌تر باشد",
    ],
    tags: ["راهنما", "UI", "طراحی"],
    activationDescription:
      "Craft and quality rules for AI-built interfaces. Use when designing, implementing, reviewing, or refining UI to prevent arbitrary styling, inconsistent spacing, poor typography, layout shift, excessive motion, weak responsive behavior, and generic AI-generated visual patterns.",
    activationNote:
      "مدل با همین چند خط تصمیم می‌گیرد مهارت را بخواند یا نه. اگر می‌خواهید در موقعیت‌های دیگری هم فعال شود، همین متن را عوض کنید.",
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
    sample: {
      prompt: "این کارت‌ها را قشنگ‌تر کن.",
      without:
        "کارت‌ها با گرادیان جدید، سایهٔ بزرگ، چند اندازهٔ فونت جدید و فاصله‌هایی مثل p-[13px].",
      with: "کارت‌ها با فاصله‌های مشخص روی شبکهٔ ۴ پیکسلی، یک رنگ تأکید از توکن‌های طراحی، aspect-ratio برای تصاویر و انیمیشن‌های محدود و هدفمند ساخته می‌شوند.",
    },
  },
  {
    slug: "persian-typography",
    title: "راهنمای تایپوگرافی فارسی",
    summary:
      "کدام فونت‌ها رایگان‌اند و کدام به لایسنس نیاز دارند، چه اندازه و فاصلهٔ خطی برای فارسی مناسب است، چطور اعداد را در جدول‌ها درست نمایش دهیم، با متن ترکیبی فارسی و انگلیسی چه کنیم و نیم‌فاصله را در HTML چطور مدیریت کنیم. این راهنما هم برای Agentهاست، هم برای توسعه‌دهنده‌ها.",
    useCases: [
      "انتخاب و لود فونت در Next.js",
      "متن‌های ترکیبی فارسی و لاتین",
      "جدول‌های عددی و قیمت",
      "وقتی حروف درست به هم نمی‌چسبند",
      "وقتی اعداد فارسی به لاتین تبدیل می‌شوند",
      "تنظیم اندازه و فاصلهٔ خط برای رابط فارسی",
      "بررسی تایپوگرافی قبل از انتشار محصول",
    ],
    tags: ["راهنما", "تایپوگرافی", "فونت"],
    activationDescription:
      "Persian typography guidance for coding agents and developers. Use when choosing or loading Persian fonts, styling Persian interfaces, handling Persian digits, mixed Persian and Latin text, ZWNJ, line height, tables, prices, and typography-related RTL issues.",
    activationNote:
      "مدل با همین چند خط تصمیم می‌گیرد مهارت را بخواند یا نه. اگر می‌خواهید در موقعیت‌های دیگری هم فعال شود، همین متن را عوض کنید.",
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
    sample: {
      prompt: "تیتر صفحهٔ اصلی را بزرگ و فشرده کن.",
      without: `className="text-5xl tracking-tight uppercase"`,
      with: `className="text-5xl leading-[1.2]"`,
    },
  },
  {
    slug: "parspack-s3-upload",
    title: "آپلود تصویر به پارس‌پک",
    summary:
      "آپلود سرورساید تصویر به فضای ابری پارس‌پک با AWS SDK، path-style URL، اعتبارسنجی MIME و مسیر API در Next.js App Router. آماده برای تحویل به مدل یا توسعه‌دهنده.",
    useCases: [
      "آپلود تصویر پروفایل، محصول یا گالری",
      "اتصال به S3 سازگار با پارس‌پک",
      "وقتی URL عمومی اشتباه ساخته می‌شود",
      "تنظیم next/image برای هاست پارس‌پک",
    ],
    tags: ["راهنما", "آپلود", "S3"],
    activationDescription:
      "Upload images to ParsPack S3-compatible object storage from a Next.js App Router application. Use when implementing server-side image uploads, S3 client configuration, public or presigned object URLs, upload validation, authenticated API routes, or ParsPack-specific path-style addressing.",
    activationNote:
      "مدل با همین چند خط تصمیم می‌گیرد مهارت را بخواند یا نه. اگر می‌خواهید در موقعیت‌های دیگری هم فعال شود، همین متن را عوض کنید.",
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
    sample: {
      prompt: "آپلود تصویر را به پارس‌پک وصل کن",
      without:
        "آپلود مستقیم از مرورگر به bucket با virtual-host URL",
      with: "آپلود از طریق API احرازهویت‌شدهٔ Next.js با forcePathStyle و URL به شکل endpoint/bucket/key",
    },
  },
  {
    slug: "zarinpal-payment",
    title: "درگاه پرداخت زرین‌پال",
    summary:
      "پیاده‌سازی کامل زرین‌پال از request تا verify: تبدیل تومان به ریال، سند پرداخت pending، کال‌بک idempotent و چک‌لیست امنیتی. برای Next.js و هر بک‌اند Node.",
    useCases: [
      "خرید اشتراک، اعتبار یا محصول",
      "اتصال درگاه بانکی ایرانی",
      "کال‌بک و تأیید پرداخت",
      "تست در سندباکس زرین‌پال",
    ],
    tags: ["راهنما", "پرداخت", "زرین‌پال"],
    activationDescription:
      "Integrate the Zarinpal payment gateway into Next.js or Node.js applications. Use when implementing payment requests, authority handling, callbacks, verification, billing records, Toman-to-Rial conversion, sandbox testing, idempotency, or secure payment flows for Iranian products.",
    activationNote:
      "مدل با همین چند خط تصمیم می‌گیرد مهارت را بخواند یا نه. اگر می‌خواهید در موقعیت‌های دیگری هم فعال شود، همین متن را عوض کنید.",
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
    sample: {
      prompt: "پرداخت زرین‌پال را پیاده کن",
      without:
        "مبلغ را از کلاینت بگیر و بعد از Status=OK محصول را فعال کن",
      with: "مبلغ سرورساید، authority در DB، verify با code ۱۰۰/۱۰۱، بعد grant",
    },
  },
]

export function getSkills() {
  return skills
}

export function getSkill(slug: string) {
  return skills.find((skill) => skill.slug === slug)
}

export function getSkillSlugs() {
  return skills.map((skill) => skill.slug)
}

export function getSkillsNavCurrent(pathname: string): string | null {
  if (pathname === "/skills" || pathname === "/skills/install") return "معرفی"
  const match = pathname.match(/^\/skills\/([^/]+)/)
  if (!match) return null
  return getSkill(match[1])?.title ?? null
}
