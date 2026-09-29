"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/styles/base-nova/ui/avatar"
import { Button } from "@/styles/base-nova/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/styles/base-nova/ui/dropdown-menu"

export default function AvatarDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<Button variant="ghost" size="icon" className="rounded-full" />}
      >
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="کاربر" />
          <AvatarFallback>ش‌ک</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent dir="rtl" className="w-36" align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem>پروفایل</DropdownMenuItem>
          <DropdownMenuItem>صورتحساب</DropdownMenuItem>
          <DropdownMenuItem>تنظیمات</DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem variant="destructive">خروج</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
