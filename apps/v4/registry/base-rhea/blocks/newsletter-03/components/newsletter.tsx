"use client"

import * as React from "react"
import { MailIcon } from "lucide-react"

import { Badge } from "@/registry/base-rhea/ui/badge"
import { Button } from "@/registry/base-rhea/ui/button"
import { Input } from "@/registry/base-rhea/ui/input"

const ISSUES = [
  { week: "هفتهٔ ۳۹", title: "بلوک آمار و نمودار شمسی" },
  { week: "هفتهٔ ۳۸", title: "فرم پشتیبانی چندمرحله‌ای" },
  { week: "هفتهٔ ۳۷", title: "نکته‌های تایپ فارسی در فرم" },
] as const

export function NewsletterSplit() {
  const [done, setDone] = React.useState(false)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="grid min-h-svh bg-background lg:grid-cols-2"
    >
      <div className="flex flex-col justify-center px-6 py-16 md:px-12 lg:px-16">
        {done ? (
          <div className="max-w-md space-y-3">
            <h2 className="text-3xl font-bold tracking-tight">ثبت شد</h2>
            <p className="text-muted-foreground">
              اولین نامه را هفتهٔ آینده دریافت می‌کنید
            </p>
            <Button variant="outline" onClick={() => setDone(false)}>
              ایمیل دیگر
            </Button>
          </div>
        ) : (
          <div className="max-w-md">
            <p className="text-sm font-medium text-muted-foreground">FarsiUI</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              خبرنامهٔ سازندگان فارسی
            </h2>
            <p className="mt-4 text-muted-foreground md:text-lg">
              الگو، نکته و بلوک تازه — جمعه هر هفته در اینباکس شما
            </p>
            <form
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault()
                setDone(true)
              }}
            >
              <Input
                type="email"
                required
                placeholder="name@example.com"
                dir="ltr"
                className="text-start"
              />
              <Button type="submit" className="shrink-0">
                عضویت
              </Button>
            </form>
            <p className="mt-3 text-xs text-muted-foreground">
              هر زمان می‌توانید لغو کنید · بدون اسپم
            </p>
          </div>
        )}
      </div>

      <div className="flex items-center bg-muted/40 px-6 py-12 md:px-12 lg:px-16">
        <div className="w-full max-w-md space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-full bg-background shadow-sm">
              <MailIcon className="size-5 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium">نمونه‌های اخیر</p>
              <p className="text-xs text-muted-foreground">جمعه هر هفته</p>
            </div>
          </div>
          <div className="space-y-3">
            {ISSUES.map((issue) => (
              <div
                key={issue.week}
                className="rounded-2xl border bg-card p-4 shadow-sm"
              >
                <Badge variant="secondary" className="mb-2">
                  {issue.week}
                </Badge>
                <p className="text-sm font-medium">{issue.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
