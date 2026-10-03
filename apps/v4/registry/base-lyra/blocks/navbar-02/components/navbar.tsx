"use client"

import * as React from "react"
import { MenuIcon } from "lucide-react"

import { Button } from "@/registry/base-lyra/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/base-lyra/ui/sheet"

const LINKS = ["محصولات", "قیمت‌ها", "بلوک‌ها", "مستندات"] as const

function demoNavClick(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
}

export function NavbarCta() {
  return (
    <div dir="rtl" lang="fa" className="flex min-h-svh flex-col bg-background">
      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-5xl items-center gap-3 px-4 md:px-6">
          <a
            href="#"
            onClick={demoNavClick}
            className="shrink-0 text-sm font-bold tracking-tight"
          >
            FarsiUI
          </a>
          <nav className="ms-6 hidden items-center gap-5 text-sm text-muted-foreground md:flex">
            {LINKS.map((label) => (
              <a
                key={label}
                href="#"
                onClick={demoNavClick}
                className="transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="ms-auto flex items-center gap-2">
            <Button
              size="sm"
              variant="ghost"
              type="button"
              className="hidden sm:inline-flex"
            >
              ورود
            </Button>
            <Button size="sm" type="button" className="hidden sm:inline-flex">
              شروع رایگان
            </Button>
            <Sheet>
              <SheetTrigger
                render={
                  <Button
                    size="icon-sm"
                    variant="outline"
                    type="button"
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
                  <SheetTitle>منو</SheetTitle>
                </SheetHeader>
                <nav className="mt-4 flex flex-col gap-1 px-1">
                  {LINKS.map((label) => (
                    <a
                      key={label}
                      href="#"
                      onClick={demoNavClick}
                      className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted"
                    >
                      {label}
                    </a>
                  ))}
                </nav>
                <div className="mt-6 flex flex-col gap-2 px-1">
                  <Button variant="outline" type="button" className="w-full">
                    ورود
                  </Button>
                  <Button type="button" className="w-full">
                    شروع رایگان
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center px-6 py-16 text-center text-sm text-muted-foreground">
        نوار با دکمهٔ اصلی و منوی موبایل
      </main>
    </div>
  )
}
