"use client"

import { FilterIcon } from "lucide-react"

import { Button } from "@/registry/bases/base/ui/button"
import { Checkbox } from "@/registry/bases/base/ui/checkbox"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/registry/bases/base/ui/drawer"
import { Label } from "@/registry/bases/base/ui/label"
import { Separator } from "@/registry/bases/base/ui/separator"

const OPTIONS = [
  { id: "af1-stock", label: "موجود در انبار" },
  { id: "af1-today", label: "ارسال امروز" },
  { id: "af1-sale", label: "تخفیف‌دار" },
] as const

export function AdvancedFiltersSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-sm flex-col items-center justify-center gap-4 px-6 py-16"
    >
      <p className="text-center text-sm text-muted-foreground">
        فیلترهای پیشرفته در کشو
      </p>
      <Drawer>
        <DrawerTrigger
          render={<Button variant="outline" className="gap-2" />}
        >
          <FilterIcon className="size-4" />
          فیلترهای پیشرفته
        </DrawerTrigger>
        <DrawerContent dir="rtl" lang="fa">
          <DrawerHeader className="text-start">
            <DrawerTitle>فیلترهای پیشرفته</DrawerTitle>
            <DrawerDescription>گزینه‌های سریع نمایش</DrawerDescription>
          </DrawerHeader>
          <div className="grid gap-3 px-4 pb-2">
            {OPTIONS.map((opt, i) => (
              <div key={opt.id}>
                {i > 0 && <Separator className="mb-3" />}
                <div className="flex items-center gap-2">
                  <Checkbox id={opt.id} defaultChecked={i === 0} />
                  <Label htmlFor={opt.id}>{opt.label}</Label>
                </div>
              </div>
            ))}
          </div>
          <DrawerFooter>
            <Button className="w-full">اعمال فیلتر</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </section>
  )
}
