"use client"

import * as React from "react"
import { MenuIcon, SearchIcon } from "lucide-react"

import { Avatar, AvatarFallback } from "@/registry/base-lyra/ui/avatar"
import { Badge } from "@/registry/base-lyra/ui/badge"
import { Button } from "@/registry/base-lyra/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/base-lyra/ui/dropdown-menu"
import { Input } from "@/registry/base-lyra/ui/input"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/base-lyra/ui/sheet"

const LINKS = ["داشبورد", "بلوک‌ها", "پروژه‌ها", "تنظیمات"] as const

function demoNavClick(event: React.MouseEvent<HTMLAnchorElement>) {
  event.preventDefault()
}

export default function NavbarApp() {
  return (
    <div dir="rtl" lang="fa" className="flex min-h-svh flex-col bg-background">
      <div className="border-b bg-muted/50 px-4 py-2 text-center text-xs text-muted-foreground md:px-6">
        نسخهٔ جدید منتشر شد.{" "}
        <a
          href="#"
          onClick={demoNavClick}
          className="font-medium text-foreground underline-offset-4 hover:underline"
        >
          تغییرات را ببینید
        </a>
      </div>

      <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-14 w-full max-w-6xl items-center gap-3 px-4 md:px-6">
          <a
            href="#"
            onClick={demoNavClick}
            className="flex shrink-0 items-center gap-2"
          >
            <span className="text-sm font-bold tracking-tight">FarsiUI</span>
            <Badge variant="secondary" className="hidden sm:inline-flex">
              بتا
            </Badge>
          </a>

          <nav className="ms-4 hidden items-center gap-4 text-sm text-muted-foreground lg:flex">
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
            <div className="relative hidden w-44 md:block lg:w-56">
              <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="جستجو…"
                className="h-8 ps-8 text-sm"
                aria-label="جستجو"
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    type="button"
                    className="size-8 rounded-full p-0"
                    aria-label="حساب کاربری"
                  />
                }
              >
                <Avatar className="size-7">
                  <AvatarFallback className="text-xs">م‌ر</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-48"
                dir="rtl"
                lang="fa"
              >
                <DropdownMenuLabel className="font-normal">
                  <p className="text-sm font-medium">مریم رضایی</p>
                  <p className="text-xs text-muted-foreground" dir="ltr">
                    maryam@example.com
                  </p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={(event) => event.preventDefault()}>
                  پروفایل
                </DropdownMenuItem>
                <DropdownMenuItem onClick={(event) => event.preventDefault()}>
                  تنظیمات
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={(event) => event.preventDefault()}>
                  خروج
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Sheet>
              <SheetTrigger
                render={
                  <Button
                    size="icon-sm"
                    variant="outline"
                    type="button"
                    className="lg:hidden"
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
                <div className="mt-4 space-y-4">
                  <div className="relative md:hidden">
                    <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="جستجو…" className="h-9 ps-8" />
                  </div>
                  <nav className="flex flex-col gap-1">
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
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 py-16 text-center text-sm text-muted-foreground">
        بنر بالا، جستجو، منوی کاربر و ناوبری اپ
      </main>
    </div>
  )
}
