"use client"

import * as React from "react"
import { MenuIcon } from "lucide-react"

import { Button } from "@/registry/base-rose/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/base-rose/ui/drawer"

const LINKS = ["خانه", "محصولات", "قیمت‌ها", "پشتیبانی"] as const

export default function MobileNavSimple() {
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
              منوی کشویی ساده از پایین
            </main>
          </div>
          <DrawerContent
            container={frame}
            dir="rtl"
            lang="fa"
            className="rounded-b-3xl"
          >
            <DrawerHeader>
              <DrawerTitle>منو</DrawerTitle>
            </DrawerHeader>
            <nav className="grid gap-1 overflow-y-auto px-4 pb-6">
              {LINKS.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-muted"
                >
                  {item}
                </a>
              ))}
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  )
}
