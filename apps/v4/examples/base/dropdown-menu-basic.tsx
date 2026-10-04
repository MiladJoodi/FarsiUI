"use client"

import { Button } from "@/styles/base-nova/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/styles/base-nova/ui/dropdown-menu"

export default function DropdownMenuBasic() {
  return (
    <div dir="rtl">
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" />}>
          باز کردن
        </DropdownMenuTrigger>
        <DropdownMenuContent dir="rtl">
          <DropdownMenuGroup>
            <DropdownMenuLabel>حساب من</DropdownMenuLabel>
            <DropdownMenuItem>پروفایل</DropdownMenuItem>
            <DropdownMenuItem>صورتحساب</DropdownMenuItem>
            <DropdownMenuItem>تنظیمات</DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>گیت‌هاب</DropdownMenuItem>
          <DropdownMenuItem>پشتیبانی</DropdownMenuItem>
          <DropdownMenuItem disabled>API</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
