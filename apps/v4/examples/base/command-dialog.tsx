"use client"

import * as React from "react"
import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/bases/base/ui/command"

export default function CommandDialogDemo() {
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  return (
    <div dir="rtl">
      <p className="text-sm text-muted-foreground">
        کلید{" "}
        <kbd
          dir="ltr"
          className="pointer-events-none inline-flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 select-none"
        >
          <span className="text-xs">⌘</span>J
        </kbd>{" "}
        را بزنید
      </p>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="دستور بنویسید یا جستجو کنید..." />
        <CommandList>
          <CommandEmpty>نتیجه‌ای پیدا نشد.</CommandEmpty>
          <CommandGroup heading="پیشنهادها">
            <CommandItem>
              <Calendar />
              <span>تقویم</span>
            </CommandItem>
            <CommandItem>
              <Smile />
              <span>جستجوی ایموجی</span>
            </CommandItem>
            <CommandItem>
              <Calculator />
              <span>ماشین‌حساب</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="تنظیمات">
            <CommandItem>
              <User />
              <span>پروفایل</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>صورتحساب</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>تنظیمات</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </div>
  )
}
