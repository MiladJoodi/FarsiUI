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
      "به مدل یاد می‌دهد فارسی خودمانی بنویسد؛ همان لحن چت، کپشن و پشتیبانی دوستانه. با جدول فعل‌ها، دو سطح نرم و خودمانی، و تلهٔ هکسره.",
    useCases: [
      "کپشن اینستاگرام و پست تلگرام",
      "پیام‌های آنبوردینگ و اعلان‌های اپ مصرفی",
      "جواب پشتیبانی در چت",
      "هر متنی که گفتید «خودمانی باشد»",
    ],
    tags: ["نوشتن", "محاوره", "شبکه‌های اجتماعی"],
    activationDescription:
      "Write colloquial written Persian (محاوره‌نویسی): the Farsi people actually type in chat, Instagram captions, Telegram posts, consumer-app onboarding and friendly support replies. Use whenever the user asks for فارسی محاوره‌ای، خودمونی، عامیانه، لحن دوستانه، کپشن، استوری، پیام چت, or when the product voice is casual. Not for contracts, invoices, official letters or academic text (use persian-formal for those).",
    activationNote:
      "مدل با همین چند خط تصمیم می‌گیرد مهارت را بخواند یا نه. اگر می‌خواهید در موقعیت‌های دیگری هم فعال شود، همین متن را عوض کنید.",
    installCommand: "npx vibefarsi add persian-conversational",
    installTargets: [
      {
        id: "claude-code",
        name: "Claude Code",
        paths: [
          ".claude/skills/persian-conversational/SKILL.md",
          "~/.claude/skills/persian-conversational/SKILL.md",
        ],
        note: "مسیر اول برای همین پروژه، مسیر دوم برای همهٔ پروژه‌ها.",
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
        note: "فایل را در پروژه بگذارید و در AGENTS.md به آن اشاره کنید.",
      },
    ],
    agentsHint:
      "For any Persian task, read .claude/skills/persian-conversational/SKILL.md first.",
    sample: {
      prompt: "یه پیام خوش‌آمد برای اولین ورود کاربر بنویس",
      without:
        "کاربر گرامی، به اپلیکیشن ما خوش آمدید. لطفاً جهت شروع، پروفایل خود را تکمیل نمایید.",
      with: "سلام! خوش اومدی. اول پروفایلت رو کامل کن، بعدش بریم سراغ سفارش اول.",
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
  if (pathname === "/skills") return "معرفی"
  if (pathname === "/skills/install") return "نحوه نصب"
  const match = pathname.match(/^\/skills\/([^/]+)/)
  if (!match) return null
  return getSkill(match[1])?.title ?? null
}
