import { CheckIcon } from "lucide-react"

import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"

const STEPS = [
  {
    title: "بررسی نیاز",
    desc: "با تیم محصول جلسه می‌گذاریم و هدف فارسی را مشخص می‌کنیم.",
    status: "done" as const,
  },
  {
    title: "انتخاب بلاک‌ها",
    desc: "از ورود تا داشبورد، الگوی مناسب را کنار هم می‌چینیم.",
    status: "done" as const,
  },
  {
    title: "پیاده‌سازی RTL",
    desc: "تم، فونت و جهت صفحه را روی استیج اعمال می‌کنیم.",
    status: "current" as const,
  },
  {
    title: "تحویل و آموزش",
    desc: "مستندات کوتاه و جلسهٔ تحویل برای تیم شما.",
    status: "upcoming" as const,
  },
] as const

export function StepsTimeline() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Badge variant="secondary" className="mb-3">
            همکاری
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">زمان‌بندی پروژه</h2>
          <p className="mt-2 text-muted-foreground">
            وضعیت هر مرحله در یک نگاه
          </p>
        </div>
        <Button variant="outline">دانلود برنامه</Button>
      </div>

      <ol className="relative space-y-0 border-s border-border ps-6">
        {STEPS.map((step) => (
          <li key={step.title} className="relative pb-10 last:pb-0">
            <span
              className={
                step.status === "done"
                  ? "absolute start-0 top-1 flex size-6 -translate-x-1/2 items-center justify-center rounded-full border border-primary bg-primary text-primary-foreground rtl:translate-x-1/2"
                  : step.status === "current"
                    ? "absolute start-0 top-1 flex size-6 -translate-x-1/2 items-center justify-center rounded-full border-2 border-primary bg-background rtl:translate-x-1/2"
                    : "absolute start-0 top-1 flex size-6 -translate-x-1/2 items-center justify-center rounded-full border bg-muted rtl:translate-x-1/2"
              }
            >
              {step.status === "done" ? (
                <CheckIcon className="size-3.5" />
              ) : step.status === "current" ? (
                <span className="size-2 rounded-full bg-primary" />
              ) : null}
            </span>
            <div className="space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-semibold tracking-tight">{step.title}</h3>
                {step.status === "done" && (
                  <Badge variant="secondary">انجام شد</Badge>
                )}
                {step.status === "current" && <Badge>در حال انجام</Badge>}
                {step.status === "upcoming" && (
                  <Badge variant="outline">آینده</Badge>
                )}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.desc}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
