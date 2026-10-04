"use client"

import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
} from "lucide-react"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/bases/base/ui/avatar"
import { Button } from "@/registry/bases/base/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"

export default function DropdownMenuAvatar() {
  return (
    <div dir="rtl">
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="ghost" size="icon" className="rounded-full" />
          }
        >
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="کاربر" />
            <AvatarFallback>ار</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent dir="rtl" align="start">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <BadgeCheckIcon />
              حساب کاربری
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CreditCardIcon />
              صورتحساب
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BellIcon />
              اعلان‌ها
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <LogOutIcon />
            خروج
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
