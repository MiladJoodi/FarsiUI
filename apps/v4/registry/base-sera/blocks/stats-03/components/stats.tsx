"use client"

import { StatNumber } from "@/registry/base-sera/blocks/stats-01/components/stat-number"
import { Badge } from "@/registry/base-sera/ui/badge"
import { Progress } from "@/registry/base-sera/ui/progress"

const GOALS = [
  {
    title: "فروش ماه مهر",
    current: "۶۴۰ میلیون",
    target: "۸۰۰ میلیون تومان",
    percent: 80,
  },
  {
    title: "کاربر جدید",
    current: "۱٬۸۴۰ نفر",
    target: "۲٬۰۰۰ نفر",
    percent: 92,
  },
  {
    title: "پاسخ پشتیبانی",
    current: "میانگین ۲ ساعت",
    target: "زیر ۳ ساعت",
    percent: 100,
    done: true,
  },
  {
    title: "نصب بلوک‌ها",
    current: "۳٬۲۰۰",
    target: "۵٬۰۰۰ نصب",
    percent: 64,
  },
] as const

const FA = "۰۱۲۳۴۵۶۷۸۹"

function toFa(n: number) {
  return String(n).replace(/\d/g, (d) => FA[Number(d)]!)
}

export function StatsGoals() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            اهداف این ماه
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            مهر ۱۴۰۵ · پیشرفت تیم محصول
          </p>
        </div>
        <Badge variant="secondary">۴ هدف</Badge>
      </div>

      <div className="space-y-6 rounded-2xl border bg-card p-6 shadow-sm">
        {GOALS.map((goal) => (
          <div key={goal.title} className="space-y-2">
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="font-medium">{goal.title}</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  <StatNumber
                    value={goal.current}
                    className="text-foreground"
                  />
                  {" · هدف "}
                  <StatNumber value={goal.target} />
                </p>
              </div>
              <span
                className={
                  "done" in goal && goal.done
                    ? "shrink-0 text-sm font-medium text-emerald-600 dark:text-emerald-400"
                    : "shrink-0 text-sm font-medium text-muted-foreground"
                }
              >
                {"done" in goal && goal.done ? (
                  "انجام شد"
                ) : (
                  <StatNumber value={`${toFa(goal.percent)}٪`} />
                )}
              </span>
            </div>
            <Progress value={goal.percent} />
          </div>
        ))}
      </div>
    </section>
  )
}
