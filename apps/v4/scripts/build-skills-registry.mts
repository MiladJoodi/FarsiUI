/**
 * Emits installable registry JSON for every catalog skill into
 * public/r/skills/<slug>.json. Middleware rewrites
 * /r/styles/<style>/<slug>.json → /r/skills/<slug>.json so
 * `npx farsiui add <skill>` works for every configured style.
 */
import { promises as fs } from "fs"
import path from "path"
import { fileURLToPath } from "url"

import { getSkills, type Skill } from "../lib/skills-data"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, "..")
const SKILLS_DIR = path.join(ROOT, "content/skills")
const OUTPUT_DIR = path.join(ROOT, "public/r/skills")
const STYLES_ROOT = path.join(ROOT, "public/r/styles")
const SCHEMA = "https://farsiui.ir/schema/registry-item.json"
const SKILL_ROOTS = [".claude/skills", ".cursor/skills", ".agents/skills"] as const

type RegistryFile = {
  path: string
  type: "registry:file"
  target: string
  content: string
}

type RegistryItem = {
  $schema: string
  name: string
  type: "registry:item"
  title: string
  description: string
  files: RegistryFile[]
  meta?: {
    links?: { docs?: string }
    tags?: string[]
  }
}

async function pathExists(filePath: string) {
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

async function walkFiles(dir: string): Promise<string[]> {
  const out: string[] = []
  const entries = await fs.readdir(dir, { withFileTypes: true })
  for (const entry of entries) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      out.push(...(await walkFiles(full)))
    } else if (entry.isFile()) {
      out.push(full)
    }
  }
  return out
}

function isRulesStyleSkill(skill: Skill) {
  return skill.installTargets.some((target) =>
    target.paths.some(
      (p) =>
        p.startsWith("docs/") ||
        p.includes(".cursor/rules/") ||
        p === "AGENTS.md"
    )
  )
}

function uniqueTargets(skill: Skill) {
  const paths = new Set<string>()
  for (const target of skill.installTargets) {
    if (target.id === "other") continue
    for (const p of target.paths) {
      if (p === "AGENTS.md") continue
      paths.add(p)
    }
  }
  return [...paths]
}

async function buildSkillItem(skill: Skill): Promise<RegistryItem | null> {
  const skillDir = path.join(SKILLS_DIR, skill.slug)
  const skillMdPath = path.join(skillDir, "SKILL.md")
  if (!(await pathExists(skillMdPath))) {
    console.warn(`   ⚠️  missing SKILL.md for ${skill.slug}`)
    return null
  }

  const skillMd = await fs.readFile(skillMdPath, "utf8")
  const files: RegistryFile[] = []

  if (isRulesStyleSkill(skill)) {
    for (const target of uniqueTargets(skill)) {
      files.push({
        path: `skills/${skill.slug}/${path.basename(target)}`,
        type: "registry:file",
        target,
        content: skillMd,
      })
    }
  } else {
    const diskFiles = await walkFiles(skillDir)
    for (const absolute of diskFiles) {
      const relative = path
        .relative(skillDir, absolute)
        .split(path.sep)
        .join("/")
      if (relative.startsWith(".") || relative.includes("/.")) continue
      const content = await fs.readFile(absolute, "utf8")
      for (const root of SKILL_ROOTS) {
        files.push({
          path: `skills/${skill.slug}/${relative}`,
          type: "registry:file",
          target: `${root}/${skill.slug}/${relative}`,
          content,
        })
      }
    }
  }

  if (files.length === 0) {
    console.warn(`   ⚠️  no files for ${skill.slug}`)
    return null
  }

  return {
    $schema: SCHEMA,
    name: skill.slug,
    type: "registry:item",
    title: skill.titleEn ?? skill.title,
    description: skill.activationDescription,
    files,
    meta: {
      links: {
        docs: `https://farsiui.ir/skills/${skill.slug}`,
      },
      tags: skill.tags,
    },
  }
}

/** Remove previously duplicated skill JSON from every style folder. */
async function cleanStyleSkillCopies(slugs: string[]) {
  if (!(await pathExists(STYLES_ROOT))) return
  const styles = await fs.readdir(STYLES_ROOT, { withFileTypes: true })
  for (const style of styles) {
    if (!style.isDirectory()) continue
    for (const slug of slugs) {
      const filePath = path.join(STYLES_ROOT, style.name, `${slug}.json`)
      if (await pathExists(filePath)) {
        await fs.unlink(filePath)
      }
    }
  }
}

export async function buildSkillsRegistry() {
  const skills = getSkills()
  const slugs = skills.map((skill) => skill.slug)

  console.log(`\n🧠 Building skills registry (${skills.length} skills)...`)
  await fs.mkdir(OUTPUT_DIR, { recursive: true })
  await cleanStyleSkillCopies(slugs)

  let written = 0
  for (const skill of skills) {
    const item = await buildSkillItem(skill)
    if (!item) continue
    const outPath = path.join(OUTPUT_DIR, `${item.name}.json`)
    await fs.writeFile(outPath, `${JSON.stringify(item, null, 2)}\n`, "utf8")
    written += 1
    console.log(`   ✅ ${skill.slug}`)
  }

  // Tiny slug list for middleware (avoid importing the full skills catalog on Edge).
  const slugsPath = path.join(ROOT, "lib/skill-registry-slugs.ts")
  const slugsSource = `/** Auto-generated by scripts/build-skills-registry.mts — do not edit. */
export const SKILL_REGISTRY_SLUGS = new Set<string>(${JSON.stringify(slugs, null, 2)})
`
  await fs.writeFile(slugsPath, slugsSource, "utf8")

  console.log(`   Done: ${written} skills → public/r/skills/`)
  return { written }
}

const isMain =
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)

if (isMain) {
  buildSkillsRegistry().catch((error) => {
    console.error(error)
    process.exit(1)
  })
}
