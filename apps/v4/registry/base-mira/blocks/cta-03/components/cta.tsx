"use client"

import * as React from "react"

import { Button } from "@/registry/base-mira/ui/button"
import { Input } from "@/registry/base-mira/ui/input"

export default function CtaEmail() {
  const [done, setDone] = React.useState(false)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="flex min-h-svh items-center justify-center bg-background px-6 py-16"
    >
      <div className="w-full max-w-2xl rounded-2xl border bg-card px-6 py-10 text-center shadow-sm md:px-10">
        {done ? (
          <>
            <h2 className="text-2xl font-bold tracking-tight">ثبت شد</h2>
            <p className="mt-2 text-muted-foreground">
              لینک شروع را به ایمیلتان می‌فرستیم
            </p>
            <Button
              variant="outline"
              className="mt-6"
              onClick={() => setDone(false)}
            >
              ایمیل دیگر
            </Button>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              دسترسی زودهنگام بگیرید
            </h2>
            <p className="mt-3 text-muted-foreground">
              ایمیلتان را بگذارید تا دعوت‌نامه و مستندات برایتان ارسال شود
            </p>
            <form
              className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
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
              اسپم نمی‌فرستیم · هر زمان لغو کنید
            </p>
          </>
        )}
      </div>
    </section>
  )
}
