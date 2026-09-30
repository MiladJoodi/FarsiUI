"use client"

import * as React from "react"
import { CreditCardIcon, SettingsIcon, UserIcon } from "lucide-react"

import { Button } from "@/styles/base-nova/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/styles/base-nova/ui/command"

export function CommandWithShortcuts() {
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
            <CommandGroup heading="تنظیمات">
              <CommandItem>
                <UserIcon />
                <span>پروفایل</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CreditCardIcon />
                <span>صورتحساب</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <SettingsIcon />
                <span>تنظیمات</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}
