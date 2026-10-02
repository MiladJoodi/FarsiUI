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
      "به مدل یاد می‌دهد فارسی محاوره‌ای طبیعی بنویسد؛ با دو سطح Light و Full، بازنویسی نه ترجمه مکانیکی، و قواعد تو/شما، UI و هکسره.",
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
