"use client"

import * as React from "react"
import {
  BellIcon,
  CalculatorIcon,
  CalendarIcon,
  ClipboardPasteIcon,
  CodeIcon,
  CopyIcon,
  CreditCardIcon,
  FileTextIcon,
  FolderIcon,
  FolderPlusIcon,
  HelpCircleIcon,
  HomeIcon,
  ImageIcon,
  InboxIcon,
  LayoutGridIcon,
  ListIcon,
  PlusIcon,
  ScissorsIcon,
  SettingsIcon,
  TrashIcon,
  UserIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "lucide-react"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/registry/bases/base/ui/command"

export default function CommandManyItems() {
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
            <CommandGroup heading="ناوبری">
              <CommandItem>
                <HomeIcon />
                <span>خانه</span>
                <CommandShortcut>⌘H</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <InboxIcon />
                <span>صندوق ورودی</span>
                <CommandShortcut>⌘I</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <FileTextIcon />
                <span>اسناد</span>
                <CommandShortcut>⌘D</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <FolderIcon />
                <span>پوشه‌ها</span>
                <CommandShortcut>⌘F</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="اقدام‌ها">
              <CommandItem>
                <PlusIcon />
                <span>فایل جدید</span>
                <CommandShortcut>⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <FolderPlusIcon />
                <span>پوشه جدید</span>
                <CommandShortcut>⇧⌘N</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <CopyIcon />
                <span>کپی</span>
                <CommandShortcut>⌘C</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <ScissorsIcon />
                <span>برش</span>
                <CommandShortcut>⌘X</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <ClipboardPasteIcon />
                <span>جای‌گذاری</span>
                <CommandShortcut>⌘V</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <TrashIcon />
                <span>حذف</span>
                <CommandShortcut>⌫</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="نمایش">
              <CommandItem>
                <LayoutGridIcon />
                <span>نمای شبکه‌ای</span>
              </CommandItem>
              <CommandItem>
                <ListIcon />
                <span>نمای فهرستی</span>
              </CommandItem>
              <CommandItem>
                <ZoomInIcon />
                <span>بزرگ‌نمایی</span>
                <CommandShortcut>⌘+</CommandShortcut>
              </CommandItem>
              <CommandItem>
                <ZoomOutIcon />
                <span>کوچک‌نمایی</span>
                <CommandShortcut>⌘-</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="حساب">
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
              <CommandItem>
                <BellIcon />
                <span>اعلان‌ها</span>
              </CommandItem>
              <CommandItem>
                <HelpCircleIcon />
                <span>راهنما و پشتیبانی</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="ابزارها">
              <CommandItem>
                <CalculatorIcon />
                <span>ماشین‌حساب</span>
              </CommandItem>
              <CommandItem>
                <CalendarIcon />
                <span>تقویم</span>
              </CommandItem>
              <CommandItem>
                <ImageIcon />
                <span>ویرایشگر تصویر</span>
              </CommandItem>
              <CommandItem>
                <CodeIcon />
                <span>ویرایشگر کد</span>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </CommandDialog>
    </div>
  )
}
