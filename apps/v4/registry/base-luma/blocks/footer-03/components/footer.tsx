"use client"

import * as React from "react"

import { Separator } from "@/registry/base-luma/ui/separator"

const COLUMNS = [
  {
    title: "محصول",
    links: ["بلوک‌ها", "کامپوننت‌ها", "تم‌ها", "قیمت‌گذاری"],
  },
  {
    title: "منابع",
    links: ["مستندات", "نمونه کار", "تغییرات", "وضعیت سرویس"],
  },
  {
    title: "شرکت",
    links: ["درباره ما", "تماس", "فرصت شغلی", "قوانین"],
  },
] as const

function demoNavClick(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
}

export default function FooterColumns() {
  return (
    <div dir="rtl" lang="fa" className="flex min-h-svh flex-col bg-background">
      <main className="flex flex-1 items-center justify-center px-6 text-sm text-muted-foreground">
        محتوای صفحه
      </main>
      <footer className="border-t bg-muted/20">
        <div className="mx-auto w-full max-w-5xl px-6 py-10 md:px-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="sm:col-span-2 lg:col-span-1">
              <p className="text-sm font-bold tracking-tight">FarsiUI</p>
              <p className="mt-2 max-w-xs text-sm text-muted-foreground">
                رابط فارسی، آمادهٔ استفاده برای تیم‌های محصول
              </p>
            </div>
            {COLUMNS.map((column) => (
              <div key={column.title}>
                <p className="text-sm font-medium">{column.title}</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {column.links.map((label) => (
                    <li key={label}>
                      <a
                        href="#"
                        onClick={demoNavClick}
                        className="hover:text-foreground"
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Separator className="my-8" />
          <p className="text-sm text-muted-foreground">
            © ۱۴۰۵ FarsiUI · همهٔ حقوق محفوظ است
          </p>
        </div>
      </footer>
    </div>
  )
}
