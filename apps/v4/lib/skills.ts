import fs from "node:fs"
import path from "node:path"

export {
  getSkill,
  getSkillCategory,
  getSkillTitleEn,
  getSkillSlugs,
  getSkills,
  getSkillsByCategory,
  getSkillsGroupedByCategory,
  getSkillsNavCategoryId,
  getSkillsNavCurrent,
  searchSkills,
  skillMatchesQuery,
  skills,
  SKILL_CATEGORIES,
  type Skill,
  type SkillCategoryGroup,
  type SkillCategoryId,
  type SkillInstallTarget,
  type SkillSource,
} from "@/lib/skills-data"

const SKILLS_DIR = path.join(process.cwd(), "content/skills")

export function getSkillMarkdown(slug: string) {
  const filePath = path.join(SKILLS_DIR, slug, "SKILL.md")
  if (!fs.existsSync(filePath)) {
    return null
  }
  return fs.readFileSync(filePath, "utf8")
}
