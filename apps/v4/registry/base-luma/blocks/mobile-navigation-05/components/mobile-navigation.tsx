"use client"

import * as React from "react"
import {
  HomeIcon,
  LogOutIcon,
  MenuIcon,
  PuzzleIcon,
  SearchIcon,
  SettingsIcon,
  WalletIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/base-luma/ui/avatar"
import { Badge } from "@/registry/base-luma/ui/badge"
import { Button } from "@/registry/base-luma/ui/button"
import { Input } from "@/registry/base-luma/ui/input"
import { Separator } from "@/registry/base-luma/ui/separator"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/base-luma/ui/sheet"

const LINKS = [
  { label: "خانه", icon: HomeIcon },
  { label: "بلوک‌ها", icon: PuzzleIcon },
  { label: "قیمت‌گذاری", icon: WalletIcon },
  { label: "تنظیمات", icon: SettingsIcon },
] as const

export function MobileNavShowcase() {
  const [frame, setFrame] = React.useState<HTMLDivElement | null>(null)

  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh items-center justify-center bg-muted/40 p-6"
    >
      <div
        ref={setFrame}
        className="relative flex h-[36rem] w-full max-w-sm flex-col overflow-hidden rounded-3xl border bg-background shadow-sm"
      >
        <header className="flex h-14 items-center justify-between border-b px-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold">FarsiUI</span>
            <Badge variant="secondary">بتا</Badge>
          </div>
          <Sheet>
            <SheetTrigger
              render={
                <Button size="icon-sm" variant="outline" aria-label="منو" />
              }
            >
              <MenuIcon className="size-4" />
            </SheetTrigger>
            <SheetContent
              container={frame}
              side="right"
              className="flex w-[min(100%,19rem)] flex-col"
              dir="rtl"
              lang="fa"
            >
              <SheetHeader className="text-start">
                <SheetTitle className="sr-only">منوی موبایل</SheetTitle>
                <div className="flex items-center gap-3">
                  <Avatar className="size-10">
                    <AvatarImage src="/avatars/01.png" alt="مریم رضایی" />
                    <AvatarFallback>م‌ر</AvatarFallback>
                  </Avatar>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">مریم رضایی</p>
                    <p
                      className="truncate text-xs text-muted-foreground"
                      dir="ltr"
                    >
                      maryam@example.com
                    </p>
                  </div>
                </div>
              </SheetHeader>

              <div className="relative mt-4">
                <SearchIcon className="pointer-events-none absolute start-2.5 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="جستجو…" className="h-9 ps-8" />
              </div>

              <nav className="mt-4 flex flex-1 flex-col gap-1">
                {LINKS.map((link) => (
                  <a
                    key={link.label}
                    href="#"
                    className="flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium hover:bg-muted"
                  >
                    <link.icon className="size-4 text-muted-foreground" />
                    {link.label}
                  </a>
                ))}
              </nav>

              <Separator className="my-3" />

              <div className="space-y-2 pb-2">
                <Button className="w-full">ارتقا به پرو</Button>
                <Button variant="ghost" className="w-full justify-start gap-2">
                  <LogOutIcon className="size-4" />
                  خروج
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </header>
        <main className="flex flex-1 items-center justify-center px-6 text-center text-sm text-muted-foreground">
          پروفایل، جستجو، لینک‌ها و اکشن‌ها
        </main>
      </div>
    </div>
  )
}
