"use client"

import {
  AlertTriangleIcon,
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  ShareIcon,
  TrashIcon,
  UserRoundXIcon,
  VolumeOffIcon,
} from "lucide-react"

import { Button } from "@/registry/bases/base/ui/button"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/registry/bases/base/ui/dropdown-menu"

export default function ButtonGroupDropdown() {
  return (
    <ButtonGroup>
      <Button variant="outline">دنبال کردن</Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="outline" size="icon" className="pl-2!" />
          }
        >
          <ChevronDownIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="min-w-56" dir="rtl">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <VolumeOffIcon />
              بی‌صدا کردن گفتگو
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CheckIcon />
              علامت خوانده‌شده
            </DropdownMenuItem>
            <DropdownMenuItem>
              <AlertTriangleIcon />
              گزارش گفتگو
            </DropdownMenuItem>
            <DropdownMenuItem>
              <UserRoundXIcon />
              مسدود کردن کاربر
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ShareIcon />
              اشتراک‌گذاری گفتگو
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CopyIcon />
              کپی گفتگو
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem variant="destructive">
              <TrashIcon />
              حذف گفتگو
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </ButtonGroup>
  )
}
