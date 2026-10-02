"use client"

import { MenuIcon } from "lucide-react"

import { Button } from "@/registry/base-maia/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/base-maia/ui/sheet"

const LINKS = [
  { href: "#", label: "خانه" },
  { href: "#", label: "بلاک‌ها" },
  { href: "#", label: "قیمت‌گذاری" },
  { href: "#", label: "مستندات" },
  { href: "#", label: "تماس" },
] as const

export function MobileNavSheet() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh items-center justify-center bg-muted/40 p-6"
    >
      <div className="flex h-[34rem] w-full max-w-sm flex-col overflow-hidden rounded-3xl border bg-background shadow-sm">
        <header className="flex h-14 items-center gap-3 border-b px-4">
          <Sheet>
            <SheetTrigger
              render={
                <Button size="icon-sm" variant="outline" aria-label="منو" />
              }
            >
              <MenuIcon className="size-4" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[min(100%,18rem)]"
              dir="rtl"
              lang="fa"
            >
              <SheetHeader>
                <SheetTitle>FarsiUI</SheetTitle>
              </SheetHeader>
              <nav className="mt-4 flex flex-col gap-1">
                {LINKS.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="mt-6 flex flex-col gap-2">
                <Button variant="outline">ورود</Button>
                <Button>شروع رایگان</Button>
              </div>
            </SheetContent>
          </Sheet>
          <span className="text-sm font-bold">FarsiUI</span>
        </header>
        <main className="flex flex-1 items-center justify-center px-6 text-center text-sm text-muted-foreground">
          منوی کناری شیت با دکمه‌های اکشن
        </main>
      </div>
    </div>
  )
}
