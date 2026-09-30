"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

import { Button } from "@/styles/base-nova/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/styles/base-nova/ui/collapsible"

export function CollapsibleRtl() {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex w-[350px] flex-col gap-2"
      dir="rtl"
    >
      <div className="flex items-center justify-between gap-4 px-4">
        <h4 className="text-sm font-semibold">سفارش ۴۱۸۹</h4>
        <CollapsibleTrigger
          render={<Button variant="ghost" size="icon" className="size-8" />}
        >
          <ChevronsUpDown />
          <span className="sr-only">نمایش جزئیات</span>
        </CollapsibleTrigger>
      </div>
      <div className="flex items-center justify-between rounded-md border px-4 py-2 text-sm">
        <span className="text-muted-foreground">وضعیت</span>
        <span className="font-medium">ارسال‌شده</span>
      </div>
      <CollapsibleContent className="flex flex-col gap-2">
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">آدرس ارسال</p>
          <p className="text-muted-foreground">تهران، خیابان ولیعصر، پلاک ۱۰۰</p>
        </div>
        <div className="rounded-md border px-4 py-2 text-sm">
          <p className="font-medium">اقلام</p>
          <p className="text-muted-foreground">۲× هدفون استودیویی</p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  )
}
