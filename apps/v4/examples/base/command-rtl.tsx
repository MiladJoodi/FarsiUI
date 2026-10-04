"use client"

import {
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
} from "lucide-react"

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/styles/base-nova/ui/command"

export default function CommandRtl() {
  return (
    <Command className="max-w-sm rounded-lg border" dir="rtl">
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
          <CommandItem disabled>
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
    </Command>
  )
}
