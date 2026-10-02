import fs from "node:fs"
import path from "node:path"

export {
  getSkill,
  getSkillSlugs,
  getSkills,
  getSkillsNavCurrent,
  skills,
  type Skill,
  type SkillInstallTarget,
  type SkillSample,
} from "@/lib/skills-data"

const SKILLS_DIR = path.join(process.cwd(), "content/skills")

export function getSkillMarkdown(slug: string) {
  const filePath = path.join(SKILLS_DIR, slug, "SKILL.md")
  if (!fs.existsSync(filePath)) {
    return null
  }
  return fs.readFileSync(filePath, "utf8")
}
