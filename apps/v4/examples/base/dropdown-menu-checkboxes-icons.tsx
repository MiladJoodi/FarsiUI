"use client"

import * as React from "react"
import { BellIcon, MailIcon, MessageSquareIcon } from "lucide-react"

import { Button } from "@/styles/base-nova/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/styles/base-nova/ui/dropdown-menu"

export function DropdownMenuCheckboxesIcons() {
  const [notifications, setNotifications] = React.useState({
    email: true,
    sms: false,
    push: true,
  })

  return (
    <div dir="rtl">
      <DropdownMenu>
        <DropdownMenuTrigger render={<Button variant="outline" />}>
          اعلان‌ها
        </DropdownMenuTrigger>
        <DropdownMenuContent dir="rtl" className="w-48">
          <DropdownMenuGroup>
            <DropdownMenuLabel>ترجیحات اعلان</DropdownMenuLabel>
            <DropdownMenuCheckboxItem
              checked={notifications.email}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, email: checked === true })
              }
            >
              <MailIcon />
              اعلان ایمیلی
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={notifications.sms}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, sms: checked === true })
              }
            >
              <MessageSquareIcon />
              اعلان پیامکی
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
              checked={notifications.push}
              onCheckedChange={(checked) =>
                setNotifications({ ...notifications, push: checked === true })
              }
            >
              <BellIcon />
              اعلان پوش
            </DropdownMenuCheckboxItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
