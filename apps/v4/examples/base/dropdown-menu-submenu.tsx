"use client"

import { Button } from "@/styles/base-nova/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/styles/base-nova/ui/dropdown-menu"

export default function DropdownMenuSubmenu() {
  return (
    <div dir="rtl">
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" />}>
          باز کردن
        </DropdownMenuTrigger>
        <DropdownMenuContent dir="rtl">
          <DropdownMenuGroup>
            <DropdownMenuItem>تیم</DropdownMenuItem>
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>دعوت کاربران</DropdownMenuSubTrigger>
              <DropdownMenuPortal>
                <DropdownMenuSubContent dir="rtl">
                  <DropdownMenuItem>ایمیل</DropdownMenuItem>
                  <DropdownMenuItem>پیام</DropdownMenuItem>
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>گزینه‌های بیشتر</DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent dir="rtl">
                        <DropdownMenuItem>Calendly</DropdownMenuItem>
                        <DropdownMenuItem>اسلک</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>وب‌هوک</DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>پیشرفته...</DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuPortal>
            </DropdownMenuSub>
            <DropdownMenuItem>
              تیم جدید
              <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
