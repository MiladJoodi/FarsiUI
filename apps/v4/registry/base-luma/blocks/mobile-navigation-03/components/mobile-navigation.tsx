"use client"

import * as React from "react"
import {
  BookOpenIcon,
  HomeIcon,
  MenuIcon,
  MessagesSquareIcon,
  PuzzleIcon,
  WalletIcon,
} from "lucide-react"

import { Button } from "@/registry/base-luma/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/base-luma/ui/drawer"

const ITEMS = [
  { label: "خانه", icon: HomeIcon },
  { label: "بلوک‌ها", icon: PuzzleIcon },
  { label: "مستندات", icon: BookOpenIcon },
  { label: "قیمت", icon: WalletIcon },
  { label: "پشتیبانی", icon: MessagesSquareIcon },
] as const

export default function MobileNavIcons() {
  const [frame, setFrame] = React.useState<HTMLDivElement | null>(null)

  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh items-center justify-center bg-muted p-6 md:p-10"
    >
      {/* Portal target: no overflow clip so the bottom drawer stays fully visible */}
      <div ref={setFrame} className="relative h-[34rem] w-full max-w-sm">
        <Drawer>
          <div className="flex h-full flex-col overflow-hidden rounded-3xl border bg-background shadow-sm">
            <header className="flex h-14 items-center justify-between border-b px-4">
              <span className="text-sm font-bold">FarsiUI</span>
              <DrawerTrigger
                render={
                  <Button size="icon-sm" variant="outline" aria-label="منو" />
                }
              >
                <MenuIcon className="size-4" />
              </DrawerTrigger>
            </header>
            <main className="flex flex-1 items-center justify-center px-6 text-center text-sm text-muted-foreground">
              میانبرهای آیکونی در دراور
            </main>
          </div>
          <DrawerContent
            container={frame}
            dir="rtl"
            lang="fa"
            className="rounded-b-3xl"
          >
            <DrawerHeader>
              <DrawerTitle>دسترسی سریع</DrawerTitle>
            </DrawerHeader>
            <div className="grid grid-cols-3 gap-3 overflow-y-auto px-4 pb-6">
              {ITEMS.map((item) => (
                <a
                  key={item.label}
                  href="#"
                  className="flex flex-col items-center gap-2 rounded-xl border bg-card px-2 py-4 text-center text-xs font-medium hover:bg-muted"
                >
                  <item.icon className="size-5 text-muted-foreground" />
                  {item.label}
                </a>
              ))}
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  )
}
