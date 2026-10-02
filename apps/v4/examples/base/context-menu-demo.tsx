import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/styles/base-nova/ui/context-menu"

export function ContextMenuDemo() {
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
        <ContextMenuContent className="w-48">
          <ContextMenuGroup>
            <ContextMenuItem>
              بازگشت
              <ContextMenuShortcut>⌘[</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem disabled>
              جلو
              <ContextMenuShortcut>⌘]</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuItem>
              بارگذاری مجدد
              <ContextMenuShortcut>⌘R</ContextMenuShortcut>
            </ContextMenuItem>
            <ContextMenuSub>
              <ContextMenuSubTrigger>ابزارهای بیشتر</ContextMenuSubTrigger>
              <ContextMenuSubContent className="w-44">
                <ContextMenuGroup>
                  <ContextMenuItem>ذخیرهٔ صفحه...</ContextMenuItem>
                  <ContextMenuItem>ساخت میانبر...</ContextMenuItem>
                  <ContextMenuItem>نام‌گذاری پنجره...</ContextMenuItem>
                </ContextMenuGroup>
                <ContextMenuSeparator />
                <ContextMenuGroup>
                  <ContextMenuItem>ابزارهای توسعه‌دهنده</ContextMenuItem>
                </ContextMenuGroup>
                <ContextMenuSeparator />
                <ContextMenuGroup>
                  <ContextMenuItem variant="destructive">حذف</ContextMenuItem>
                </ContextMenuGroup>
              </ContextMenuSubContent>
            </ContextMenuSub>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuCheckboxItem checked>
              نمایش نشانک‌ها
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem>نمایش آدرس کامل</ContextMenuCheckboxItem>
          </ContextMenuGroup>
          <ContextMenuSeparator />
          <ContextMenuGroup>
            <ContextMenuRadioGroup value="sara">
              <ContextMenuLabel>افراد</ContextMenuLabel>
              <ContextMenuRadioItem value="sara">سارا احمدی</ContextMenuRadioItem>
              <ContextMenuRadioItem value="reza">رضا محمدی</ContextMenuRadioItem>
            </ContextMenuRadioGroup>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}
