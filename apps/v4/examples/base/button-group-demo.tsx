"use client"

import * as React from "react"
import {
  ArchiveIcon,
  ArrowLeftIcon,
  CalendarPlusIcon,
  ClockIcon,
  ListFilterIcon,
  MailCheckIcon,
  MoreHorizontalIcon,
  TagIcon,
  Trash2Icon,
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
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/styles/base-nova/ui/dropdown-menu"

export default function ButtonGroupDemo() {
  const [label, setLabel] = React.useState("personal")
  const size = useVariantPreviewSize()
  const iconSize = useVariantPreviewIconSize()

  return (
    <ButtonGroup>
      <ButtonGroup className="hidden sm:flex">
        <Button variant="outline" size={iconSize} aria-label="بازگشت">
          <ArrowLeftIcon />
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size={size}>
          بایگانی
        </Button>
        <Button variant="outline" size={size}>
          گزارش
        </Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button variant="outline" size={size}>
          بعداً
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button
                variant="outline"
                size={iconSize}
                aria-label="گزینه‌های بیشتر"
              />
            }
          >
            <MoreHorizontalIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44" dir="rtl">
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <MailCheckIcon />
                علامت به‌عنوان خوانده‌شده
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ArchiveIcon />
                بایگانی
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <ClockIcon />
                بعداً
              </DropdownMenuItem>
              <DropdownMenuItem>
                <CalendarPlusIcon />
                افزودن به تقویم
              </DropdownMenuItem>
              <DropdownMenuItem>
                <ListFilterIcon />
                افزودن به فهرست
              </DropdownMenuItem>
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>
                  <TagIcon />
                  برچسب به‌عنوان...
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuRadioGroup
                    value={label}
                    onValueChange={setLabel}
                  >
                    <DropdownMenuRadioItem value="personal">
                      شخصی
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="work">
                      کاری
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="other">
                      سایر
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem variant="destructive">
                <Trash2Icon />
                حذف
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </ButtonGroup>
  )
}
