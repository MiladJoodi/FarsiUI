"use client"

import { MenuIcon, SearchIcon } from "lucide-react"

import { Button } from "@/registry/base-maia/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/base-maia/ui/sheet"

const LINKS = [
  { href: "#", label: "محصول" },
  { href: "#", label: "ویژگی‌ها" },
  { href: "#", label: "قیمت" },
  { href: "#", label: "بلاگ" },
] as const

export function NavbarCentered() {
  return (
    <div dir="rtl" lang="fa" className="flex min-h-svh flex-col bg-background">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="relative mx-auto flex h-14 w-full max-w-5xl items-center px-4 md:px-6">
          <a
            href="#"
            className="relative z-10 text-sm font-bold tracking-tight"
          >
            FarsiUI
          </a>

          <nav className="absolute inset-x-0 hidden items-center justify-center gap-6 text-sm text-muted-foreground md:flex">
            {LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="relative z-10 ms-auto flex items-center gap-1.5">
            <Button
              size="icon-sm"
              variant="ghost"
              className="hidden sm:inline-flex"
              aria-label="جستجو"
            >
              <SearchIcon className="size-4" />
            </Button>
            <Button size="sm" className="hidden md:inline-flex">
              شروع کنید
            </Button>
            <Sheet>
              <SheetTrigger
                render={
                  <Button
                    size="icon-sm"
                    variant="outline"
                    className="md:hidden"
                    aria-label="باز کردن منو"
                  />
                }
              >
                <MenuIcon className="size-4" />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[min(100%,20rem)]"
                dir="rtl"
                lang="fa"
              >
                <SheetHeader>
                  <SheetTitle>ناوبری</SheetTitle>
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
                <Button className="mt-6 w-full">شروع کنید</Button>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center px-6 py-16 text-center text-sm text-muted-foreground">
        لینک‌ها در مرکز، لوگو و اکشن در دو طرف
      </main>
    </div>
  )
}
