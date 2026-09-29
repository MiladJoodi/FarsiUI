"use client"

import { BotIcon, ChevronDownIcon } from "lucide-react"

import {
  useVariantPreviewIconSize,
  useVariantPreviewSize,
} from "@/components/component-variant-preview-size"
import { Button } from "@/styles/base-nova/ui/button"
import { ButtonGroup } from "@/styles/base-nova/ui/button-group"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/styles/base-nova/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/styles/base-nova/ui/popover"
import { Textarea } from "@/styles/base-nova/ui/textarea"

export default function ButtonGroupPopover() {
  const size = useVariantPreviewSize()
  const iconSize = useVariantPreviewIconSize()

  return (
    <ButtonGroup>
      <Button variant="outline" size={size}>
        <BotIcon /> دستیار
      </Button>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              size={iconSize}
              aria-label="باز کردن پاپ‌اور"
            />
          }
        >
          <ChevronDownIcon />
        </PopoverTrigger>
        <PopoverContent align="end" className="rounded-xl text-sm" dir="rtl">
          <PopoverHeader>
            <PopoverTitle>شروع کار جدید با دستیار</PopoverTitle>
            <PopoverDescription>
              کار خود را به زبان ساده توصیف کنید.
            </PopoverDescription>
          </PopoverHeader>
          <Field>
            <FieldLabel htmlFor="task" className="sr-only">
              شرح کار
            </FieldLabel>
            <Textarea
              id="task"
              placeholder="می‌خواهم..."
              className="resize-none"
            />
            <FieldDescription>
              دستیار یک درخواست بررسی (pull request) باز می‌کند.
            </FieldDescription>
          </Field>
        </PopoverContent>
      </Popover>
    </ButtonGroup>
  )
}
