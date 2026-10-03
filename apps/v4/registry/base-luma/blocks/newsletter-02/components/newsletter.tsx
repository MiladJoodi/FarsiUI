"use client"

import * as React from "react"
import { CheckIcon } from "lucide-react"

import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import { Input } from "@/registry/base-luma/ui/input"

const PERKS = [
  "بلوک‌ها و الگوهای تازه",
  "نکته‌های RTL و تایپ فارسی",
  "بدون تبلیغات مزاحم",
] as const

export function NewsletterCard() {
  const [done, setDone] = React.useState(false)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="flex min-h-svh items-center justify-center bg-background px-6 py-16"
    >
      <div className="w-full max-w-lg rounded-2xl border bg-card p-6 shadow-sm md:p-8">
        {done ? (
          <div className="space-y-3 text-center">
            <h2 className="text-2xl font-bold">خوش آمدید</h2>
            <p className="text-muted-foreground">
              لینک تأیید به ایمیلتان ارسال شد
            </p>
            <Button
              variant="outline"
              className="w-full"
              onClick={() => setDone(false)}
            >
              تغییر ایمیل
            </Button>
          </div>
        ) : (
          <>
            <Badge variant="secondary" className="mb-3">
              خبرنامه
            </Badge>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              در جریان بمانید
            </h2>
            <p className="mt-2 text-muted-foreground">
              خلاصهٔ هفتگی برای تیم‌هایی که محصول فارسی می‌سازند
            </p>
            <ul className="mt-6 space-y-2">
              {PERKS.map((perk) => (
                <li key={perk} className="flex items-center gap-2 text-sm">
                  <CheckIcon className="size-4 shrink-0 text-primary" />
                  {perk}
                </li>
              ))}
            </ul>
            <form
              className="mt-6 space-y-3"
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
              <Button type="submit" className="w-full">
                عضویت رایگان
              </Button>
            </form>
            <p className="mt-3 text-center text-xs text-muted-foreground">
              هر زمان می‌توانید لغو کنید
            </p>
          </>
        )}
      </div>
    </section>
  )
}
