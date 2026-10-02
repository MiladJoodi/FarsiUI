import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuTrigger,
} from "@/styles/base-nova/ui/context-menu"

export function ContextMenuGroups() {
  return (
    <div dir="rtl">
      <ContextMenu>
        <ContextMenuTrigger className="flex min-h-48 w-full max-w-lg items-center justify-center rounded-xl border border-dashed p-8 text-sm">
          <span className="hidden pointer-fine:inline-block">
            اینجا راست‌کلیک کنید
          </span>
          <span className="hidden pointer-coarse:inline-block">
            اینجا لمس طولانی کنید
          </span>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuGroup>
            <ContextMenuLabel>فایل</ContextMenuLabel>
            <ContextMenuItem>
              فایل جدید
              <ContextMenuShortcut>⌘N</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              باز کردن فایل
              <ContextMenuShortcut>⌘O</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              ذخیره
              <ContextMenuShortcut>⌘S</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuLabel>ویرایش</ContextMenuLabel>
            <ContextMenuItem>
              واگرد
              <ContextMenuShortcut>⌘Z</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              ازنو
              <ContextMenuShortcut>⇧⌘Z</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuItem>
              برش
              <ContextMenuShortcut>⌘X</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              کپی
              <ContextMenuShortcut>⌘C</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              جای‌گذاری
              <ContextMenuShortcut>⌘V</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuItem variant="destructive">
              حذف
              <ContextMenuShortcut>⌫</ContextMenuShortcut>
            </ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}
