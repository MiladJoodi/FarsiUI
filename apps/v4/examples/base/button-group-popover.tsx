"use client"

import { BotIcon, ChevronDownIcon } from "lucide-react"

import { Button } from "@/registry/bases/base/ui/button"
import { ButtonGroup } from "@/registry/bases/base/ui/button-group"
import {
  Field,
  FieldDescription,
  FieldLabel,
} from "@/registry/bases/base/ui/field"
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/registry/bases/base/ui/popover"
import { Textarea } from "@/registry/bases/base/ui/textarea"

export default function ButtonGroupPopover() {
  return (
    <ButtonGroup>
      <Button variant="outline">
        <BotIcon /> دستیار
      </Button>
      <Popover>
        <PopoverTrigger
          render={
            <Button
              variant="outline"
              size="icon"
              aria-label="باز کردن پاپ‌اور"
            />
          }
        >
          <ChevronDownIcon />
        </PopoverTrigger>
        <PopoverContent align="start" className="rounded-xl text-sm" dir="rtl">
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
              dir="rtl"
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
