"use client"

import { MenuIcon } from "lucide-react"

import { Button } from "@/registry/base-lyra/ui/button"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/base-lyra/ui/drawer"

const LINKS = ["خانه", "محصولات", "قیمت‌ها", "پشتیبانی"] as const

export function MobileNavSimple() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh items-center justify-center bg-muted/40 p-6"
    >
      <div className="flex h-[34rem] w-full max-w-sm flex-col overflow-hidden rounded-3xl border bg-background shadow-sm">
        <header className="flex h-14 items-center justify-between border-b px-4">
          <span className="text-sm font-bold">FarsiUI</span>
          <Drawer>
            <DrawerTrigger
              render={
                <Button size="icon-sm" variant="outline" aria-label="منو" />
              }
            >
              <MenuIcon className="size-4" />
            </DrawerTrigger>
            <DrawerContent dir="rtl" lang="fa">
              <DrawerHeader>
                <DrawerTitle>منو</DrawerTitle>
              </DrawerHeader>
              <nav className="grid gap-1 px-4 pb-8">
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
        </header>
        <main className="flex flex-1 items-center justify-center px-6 text-center text-sm text-muted-foreground">
          منوی کشویی ساده از پایین
        </main>
      </div>
    </div>
  )
}
