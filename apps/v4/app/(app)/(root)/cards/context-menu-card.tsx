"use client"

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/registry/bases/base/ui/context-menu"
import { Card, CardContent } from "@/registry/bases/base/ui/card"

export function ContextMenuCard() {
  return (
    <Card className="w-full" dir="rtl">
      <CardContent>
        <ContextMenu>
          <ContextMenuTrigger className="flex aspect-video w-full items-center justify-center rounded-xl border border-dashed text-sm text-muted-foreground">
            <span className="hidden pointer-fine:inline-block">
              اینجا راست‌کلیک کنید
            </span>
            <span className="hidden pointer-coarse:inline-block">
              اینجا لمس طولانی کنید
            </span>
          </ContextMenuTrigger>
          <ContextMenuContent className="w-48 text-start" dir="rtl">
            <ContextMenuGroup>
              <ContextMenuItem>
                بازگشت
                <ContextMenuShortcut>⌘[</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                جلو
                <ContextMenuShortcut>⌘]</ContextMenuShortcut>
              </ContextMenuItem>
              <ContextMenuItem>
                بارگذاری مجدد
                <ContextMenuShortcut>⌘R</ContextMenuShortcut>
              </ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem>ذخیرهٔ صفحه...</ContextMenuItem>
              <ContextMenuItem>ساخت میانبر...</ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuSeparator />
            <ContextMenuGroup>
              <ContextMenuItem variant="destructive">حذف</ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      </CardContent>
    </Card>
  )
}
