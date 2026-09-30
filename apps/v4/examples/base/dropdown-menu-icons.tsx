"use client"

import {
  CreditCardIcon,
  LogOutIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react"

import { Button } from "@/styles/base-nova/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/styles/base-nova/ui/dropdown-menu"

export function DropdownMenuIcons() {
  return (
    <div dir="rtl">
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" />}>
          باز کردن
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <UserIcon />
            پروفایل
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CreditCardIcon />
            صورتحساب
          </DropdownMenuItem>
          <DropdownMenuItem>
            <SettingsIcon />
            تنظیمات
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <LogOutIcon />
            خروج
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
