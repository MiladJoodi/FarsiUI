import fs from "node:fs"
import path from "node:path"

export type SkillKind = "skill" | "guide" | "external"

export type SkillSample = {
  prompt: string
  without: string
  with: string
  note?: string
}

export type SkillInstallPath = {
  tool: string
  path: string
}

export type Skill = {
  slug: string
  title: string
  kind: SkillKind
  kindLabel: string
  summary: string
  useCases: string[]
  tags: string[]
  activationDescription: string
  activationNote: string
  installCommand: string
  installPaths: SkillInstallPath[]
  agentsHint: string
  sample: SkillSample
  related?: { slug: string; title: string }[]
}

const SKILLS_DIR = path.join(process.cwd(), "content/skills")

export const skills: Skill[] = [
  {
    slug: "persian-conversational",
    title: "فارسی محاوره‌ای",
    kind: "skill",
    kindLabel: "مهارت",
    summary:
      "به مدل یاد میده فارسی خودمونی بنویسه، همان‌طور که توی چت و اینستاگرام می‌نویسیم: میشه، می‌خوام، رو، دیگه. با جدول تبدیل فعل‌ها، دو سطح نرم و خودمونی، و تله‌ی هکسره.",
    useCases: [
      "کپشن اینستاگرام و پست تلگرام",
      "پیام‌های آنبوردینگ و اعلان‌های اپ مصرفی",
      "جواب پشتیبانی توی چت",
      "هر متنی که گفتید «خودمونی باشه»",
    ],
    tags: ["نوشتن", "محاوره", "شبکه‌های اجتماعی"],
    activationDescription:
      "Write colloquial written Persian (محاوره‌نویسی): the Farsi people actually type in chat, Instagram captions, Telegram posts, consumer-app onboarding and friendly support replies. Use whenever the user asks for فارسی محاوره‌ای، خودمونی، عامیانه، لحن دوستانه، کپشن، استوری، پیام چت, or when the product voice is casual. Not for contracts, invoices, official letters or academic text (use persian-formal for those).",
    activationNote:
      "مدل با همین چند خط تصمیم می‌گیره مهارت را بخونه یا نه. اگر می‌خواید در موقعیت‌های دیگری هم فعال بشه، همین را عوض کنید.",
    installCommand: "npx vibefarsi add persian-conversational",
    installPaths: [
      {
        tool: "Claude Code",
        path: ".claude/skills/persian-conversational/SKILL.md برای همین پروژه، یا ~/.claude/skills/persian-conversational/SKILL.md برای همه‌ی پروژه‌ها",
      },
      {
        tool: "Cursor",
        path: ".cursor/skills/persian-conversational/SKILL.md",
      },
      {
        tool: "Codex",
        path: ".agents/skills/persian-conversational/SKILL.md",
      },
      {
        tool: "بقیه‌ی ابزارها",
        path: "همان فایل را در پروژه بگذارید و یک خط به AGENTS.md اضافه کنید:",
      },
    ],
    agentsHint:
      "For any Persian task, read .claude/skills/persian-conversational/SKILL.md first.",
    sample: {
      prompt: "یه پیام خوش‌آمد برای اولین ورود کاربر بنویس",
      without:
        "کاربر گرامی، به اپلیکیشن ما خوش آمدید. لطفاً جهت شروع، پروفایل خود را تکمیل نمایید.",
      with: "سلام! خوش اومدی. اول پروفایلت رو کامل کن، بعدش بریم سراغ سفارش اول.",
      note: "نمونه برای نشان دادن جهت تغییره؛ خروجی واقعی به مدل و پرامپت شما بستگی داره.",
    },
    related: [
      { slug: "agents-md-persian", title: "قوانین فارسی برای CLAUDE.md" },
      { slug: "ui-craft-rules", title: "قوانین کرافت رابط" },
    ],
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

export function getSkillMarkdown(slug: string) {
  const filePath = path.join(SKILLS_DIR, slug, "SKILL.md")
  if (!fs.existsSync(filePath)) {
    return null
  }
  return fs.readFileSync(filePath, "utf8")
}
