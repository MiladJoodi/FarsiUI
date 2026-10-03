import { CheckIcon } from "lucide-react"

import { cn } from "@/registry/base-lyra/lib/utils"
import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"

const STEPS = [
  {
    title: "بررسی نیاز",
    desc: "با تیم محصول جلسه می‌گذاریم و هدف فارسی را مشخص می‌کنیم.",
    status: "done" as const,
  },
  {
    title: "انتخاب بلوک‌ها",
    desc: "از ورود تا داشبورد، الگوی مناسب را کنار هم می‌چینیم.",
    status: "done" as const,
  },
  {
    title: "پیاده‌سازی راست‌چین",
    desc: "تم، فونت و جهت صفحه را روی پیش‌نمایش اعمال می‌کنیم.",
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
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <section className="w-full max-w-3xl rounded-xl border bg-background px-6 py-12 shadow-sm md:px-10 md:py-16">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge variant="secondary" className="mb-3">
              همکاری
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight">
              زمان‌بندی پروژه
            </h2>
            <p className="mt-2 text-muted-foreground">
              وضعیت هر مرحله در یک نگاه
            </p>
          </div>
          <Button variant="outline">دانلود برنامه</Button>
        </div>

        <ol className="space-y-0">
          {STEPS.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <div className="flex w-6 shrink-0 flex-col items-center">
                <span
                  className={cn(
                    "flex size-6 items-center justify-center rounded-full border",
                    step.status === "done" &&
                      "border-primary bg-primary text-primary-foreground",
                    step.status === "current" &&
                      "border-2 border-primary bg-background",
                    step.status === "upcoming" && "border-border bg-muted"
                  )}
                >
                  {step.status === "done" ? (
                    <CheckIcon className="size-3.5" />
                  ) : step.status === "current" ? (
                    <span className="size-2 rounded-full bg-primary" />
                  ) : null}
                </span>
                {index < STEPS.length - 1 ? (
                  <span className="mt-1 w-px flex-1 bg-border" aria-hidden />
                ) : null}
              </div>
              <div
                className={cn(
                  "min-w-0 flex-1 space-y-1",
                  index < STEPS.length - 1 && "pb-10"
                )}
              >
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
    </div>
  )
}
