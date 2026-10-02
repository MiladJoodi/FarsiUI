"use client"

import * as React from "react"
import { cn } from "cn"
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react"

import { Button, buttonVariants } from "@/registry/base-nova/ui/button"
import { Input } from "@/registry/base-nova/ui/input"
import { Separator } from "@/registry/base-nova/ui/separator"

const COLUMNS = [
  {
    title: "محصول",
    links: ["بلاک‌ها", "کامپوننت‌ها", "تم‌ها", "قیمت‌گذاری"],
  },
  {
    title: "منابع",
    links: ["مستندات", "نمونه کار", "تغییرات", "وضعیت"],
  },
  {
    title: "شرکت",
    links: ["درباره", "تماس", "قوانین", "حریم خصوصی"],
  },
] as const

const SOCIAL = [
  { label: "گیت‌هاب", icon: GithubIcon, href: "#" },
  { label: "لینکدین", icon: LinkedinIcon, href: "#" },
  { label: "اینستاگرام", icon: InstagramIcon, href: "#" },
] as const

export function FooterShowcase() {
  const [done, setDone] = React.useState(false)

  return (
    <div dir="rtl" lang="fa" className="flex min-h-svh flex-col bg-background">
      <main className="flex flex-1 items-center justify-center px-6 text-sm text-muted-foreground">
        محتوای صفحه
      </main>
      <footer className="border-t bg-muted/20">
        <div className="mx-auto w-full max-w-6xl px-6 py-12 md:px-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1.5fr]">
            <div className="space-y-5">
              <div>
                <p className="text-base font-bold tracking-tight">FarsiUI</p>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  ابزار و بلاک برای تیم‌هایی که محصول فارسی می‌سازند
                </p>
              </div>
              <div className="flex items-center gap-2">
                {SOCIAL.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "outline", size: "icon-sm" })
                    )}
                  >
                    <item.icon className="size-4" />
                  </a>
                ))}
              </div>
              {done ? (
                <p className="text-sm font-medium">عضو خبرنامه شدید</p>
              ) : (
                <form
                  className="flex max-w-sm flex-col gap-2 sm:flex-row"
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

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
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

          <div className="flex flex-col gap-3 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
            <p>© ۱۴۰۴ FarsiUI · ساخته‌شده برای وب فارسی</p>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <a href="#" className="hover:text-foreground">
                حریم خصوصی
              </a>
              <a href="#" className="hover:text-foreground">
                شرایط استفاده
              </a>
              <a href="#" className="hover:text-foreground">
                کوکی‌ها
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
