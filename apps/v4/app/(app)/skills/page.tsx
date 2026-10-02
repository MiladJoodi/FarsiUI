import { getSkills } from "@/lib/skills"
import { SkillsHero } from "@/components/skills-hero"
import { SkillsList } from "@/components/skills-list"

export default function SkillsPage() {
  const skills = getSkills()

  return (
    <>
      <SkillsHero />
      <div className="mx-auto mt-10 flex w-full max-w-3xl flex-col gap-6 px-2 md:mt-12 md:gap-8 md:px-4">
        <SkillsList skills={skills} />
      </div>
    </>
  )
}
