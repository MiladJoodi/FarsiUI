"use client"

import * as React from "react"

import { Button } from "@/styles/base-nova/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/styles/base-nova/ui/command"

export default function CommandBasic() {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="flex flex-col gap-4" dir="rtl">
      <Button onClick={() => setOpen(true)} variant="outline" className="w-fit">
        باز کردن منو
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <Command>
          <CommandInput placeholder="دستور بنویسید یا جستجو کنید..." />
          <CommandList>
            <CommandEmpty>نتیجه‌ای پیدا نشد.</CommandEmpty>
            <CommandGroup heading="پیشنهادها">
              <CommandItem>تقویم</CommandItem>
              <CommandItem>جستجوی ایموجی</CommandItem>
              <CommandItem>ماشین‌حساب</CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}
