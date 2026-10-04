"use client"

import { ChevronDownIcon, MoreHorizontal } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/registry/bases/base/ui/input-group"

export default function InputGroupDropdown() {
  return (
    <div className="grid w-full max-w-sm gap-4" dir="rtl" lang="fa">
      <InputGroup>
        <InputGroupInput placeholder="نام فایل را وارد کنید" />
        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <InputGroupButton
                  variant="ghost"
                  aria-label="بیشتر"
                  size="icon-xs"
                />
              }
            >
              <MoreHorizontal />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              dir="rtl"
              lang="fa"
              align="end"
              sideOffset={8}
              alignOffset={-4}
            >
              <DropdownMenuGroup>
                <DropdownMenuItem>تنظیمات</DropdownMenuItem>
                <DropdownMenuItem>کپی مسیر</DropdownMenuItem>
                <DropdownMenuItem>باز کردن مکان</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupInput placeholder="عبارت جستجو را وارد کنید" />
        <InputGroupAddon align="inline-end">
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <InputGroupButton variant="ghost" className="pe-1.5! text-xs" />
              }
            >
              جستجو در... <ChevronDownIcon className="size-3" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              dir="rtl"
              lang="fa"
              align="end"
              sideOffset={8}
              alignOffset={-4}
            >
              <DropdownMenuGroup>
                <DropdownMenuItem>مستندات</DropdownMenuItem>
                <DropdownMenuItem>نوشته‌های وبلاگ</DropdownMenuItem>
                <DropdownMenuItem>تغییرات</DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}
