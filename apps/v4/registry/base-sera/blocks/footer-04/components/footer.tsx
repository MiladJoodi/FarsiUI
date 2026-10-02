"use client"

import * as React from "react"

import { Button } from "@/registry/base-sera/ui/button"
import { Input } from "@/registry/base-sera/ui/input"
import { Separator } from "@/registry/base-sera/ui/separator"

const COLUMNS = [
  {
    title: "محصول",
    links: ["بلاک‌ها", "کامپوننت‌ها", "قیمت‌گذاری"],
  },
  {
    title: "پشتیبانی",
    links: ["مستندات", "سوالات متداول", "تماس"],
  },
] as const

export function FooterNewsletter() {
  const [done, setDone] = React.useState(false)

  return (
    <div dir="rtl" lang="fa" className="flex min-h-svh flex-col bg-background">
      <main className="flex flex-1 items-center justify-center px-6 text-sm text-muted-foreground">
        محتوای صفحه
      </main>
      <footer className="border-t">
        <div className="mx-auto w-full max-w-5xl px-6 py-10 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="text-sm font-bold tracking-tight">FarsiUI</p>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                هر جمعه یک نکتهٔ کاربردی برای ساخت محصول فارسی
              </p>
              {done ? (
                <p className="mt-4 text-sm font-medium text-foreground">
                  عضو شدید · ایمیل تأیید را چک کنید
                </p>
              ) : (
                <form
                  className="mt-4 flex max-w-md flex-col gap-2 sm:flex-row"
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
              )}
            </div>
            <div className="grid grid-cols-2 gap-8">
              {COLUMNS.map((column) => (
                <div key={column.title}>
                  <p className="text-sm font-medium">{column.title}</p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {column.links.map((label) => (
                      <li key={label}>
                        <a href="#" className="hover:text-foreground">
                          {label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <Separator className="my-8" />
          <p className="text-sm text-muted-foreground">
            © ۱۴۰۴ FarsiUI · بدون اسپم، هر زمان لغو کنید
          </p>
        </div>
      </footer>
    </div>
  )
}
