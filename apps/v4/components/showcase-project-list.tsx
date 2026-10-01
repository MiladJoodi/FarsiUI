import { type ShowcaseProject } from "@/lib/showcase"
import { ShowcaseProjectCard } from "@/components/showcase-project-card"

export function ShowcaseProjectList({
  projects,
  emptyMessage = "هنوز نمونه‌ای در این دسته ثبت نشده است.",
}: {
  projects: ShowcaseProject[]
  emptyMessage?: string
}) {
  if (projects.length === 0) {
    return (
      <div
        dir="rtl"
        lang="fa"
        className="flex min-h-[36vh] flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border/80 bg-muted/20 text-center text-muted-foreground"
      >
        <p className="text-sm font-medium text-foreground">{emptyMessage}</p>
        <p className="text-xs">به‌زودی پروژه‌های بیشتری اینجا قرار می‌گیرد.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
      {projects.map((project) => (
        <ShowcaseProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
