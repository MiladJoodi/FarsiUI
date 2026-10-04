"use client"

import * as React from "react"
import { ChevronDownIcon, MenuIcon } from "lucide-react"

import { Button } from "@/registry/base-mira/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/base-mira/ui/collapsible"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/base-mira/ui/sheet"

const GROUPS = [
  {
    title: "محصول",
    items: ["بلوک‌ها", "کامپوننت‌ها", "تم‌ها"],
  },
  {
    title: "منابع",
    items: ["مستندات", "نمونه کار", "تغییرات"],
  },
  {
    title: "شرکت",
    items: ["درباره", "تماس", "فرصت شغلی"],
  },
] as const

export default function MobileNavGrouped() {
  const [frame, setFrame] = React.useState<HTMLDivElement | null>(null)

  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh items-center justify-center bg-muted/40 p-6"
    >
      <div
        ref={setFrame}
        className="relative flex h-[34rem] w-full max-w-sm flex-col overflow-hidden rounded-3xl border bg-background shadow-sm"
      >
        <header className="flex h-14 items-center justify-between border-b px-4">
          <span className="text-sm font-bold">FarsiUI</span>
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
              className="w-[min(100%,18rem)]"
              dir="rtl"
              lang="fa"
            >
              <SheetHeader>
                <SheetTitle>ناوبری</SheetTitle>
              </SheetHeader>
              <div className="mt-2 space-y-1">
                {GROUPS.map((group) => (
                  <Collapsible
                    key={group.title}
                    defaultOpen={group.title === "محصول"}
                  >
                    <CollapsibleTrigger className="flex h-9 w-full items-center justify-between rounded-md px-3 text-sm font-medium hover:bg-muted [&[data-state=open]>svg]:rotate-180">
                      {group.title}
                      <ChevronDownIcon className="size-3.5 text-muted-foreground transition-transform" />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="mb-1 flex flex-col gap-0.5 ps-3 pe-1">
                        {group.items.map((item) => (
                          <a
                            key={item}
                            href="#"
                            className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </header>
        <main className="flex flex-1 items-center justify-center px-6 text-center text-sm text-muted-foreground">
          گروه‌های جمع‌شونده در منوی موبایل
        </main>
      </div>
    </div>
  )
}
