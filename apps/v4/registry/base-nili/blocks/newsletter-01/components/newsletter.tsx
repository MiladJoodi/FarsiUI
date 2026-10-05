"use client"

import * as React from "react"

import { Button } from "@/registry/base-nili/ui/button"
import { Input } from "@/registry/base-nili/ui/input"

export default function NewsletterSimple() {
  const [done, setDone] = React.useState(false)

  return (
    <section
      dir="rtl"
      lang="fa"
      className="flex min-h-svh flex-col items-center justify-center bg-background px-6 py-16 text-center"
    >
      {done ? (
        <div className="space-y-3">
          <h2 className="text-2xl font-bold tracking-tight">عضو شدید</h2>
          <p className="text-muted-foreground">ایمیل تأیید را چک کنید</p>
          <Button variant="outline" onClick={() => setDone(false)}>
            ایمیل دیگر
          </Button>
        </div>
      ) : (
        <>
          <h2 className="max-w-lg text-3xl font-bold tracking-tight">
            هر هفته یک نکتهٔ کاربردی
          </h2>
          <p className="mt-3 max-w-md text-muted-foreground">
            خبرنامهٔ FarsiUI · بدون اسپم
          </p>
          <form
            className="mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
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
        </>
      )}
    </section>
  )
}
