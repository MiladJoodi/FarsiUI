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

import {
  useVariantPreviewIconSize,
  useVariantPreviewSize,
} from "@/components/component-variant-preview-size"
import { Button } from "@/styles/base-nova/ui/button"
import { ButtonGroup } from "@/styles/base-nova/ui/button-group"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/styles/base-nova/ui/dropdown-menu"

export default function ButtonGroupDropdown() {
  const size = useVariantPreviewSize()
  const iconSize = useVariantPreviewIconSize()

  return (
    <ButtonGroup>
      <Button variant="outline" size={size}>
        دنبال کردن
      </Button>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button variant="outline" size={iconSize} className="pl-2!" />
          }
        >
          <ChevronDownIcon />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44" dir="rtl">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <VolumeOffIcon />
              بی‌صدا کردن گفتگو
            </DropdownMenuItem>
            <DropdownMenuItem>
              <CheckIcon />
              علامت به‌عنوان خوانده‌شده
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
