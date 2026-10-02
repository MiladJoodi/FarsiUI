import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuTrigger,
} from "@/styles/base-nova/ui/context-menu"

export function ContextMenuCheckboxes() {
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
            <ContextMenuCheckboxItem defaultChecked>
              نمایش نوار نشانک‌ها
            </ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem>نمایش آدرس کامل</ContextMenuCheckboxItem>
            <ContextMenuCheckboxItem defaultChecked>
              نمایش ابزارهای توسعه‌دهنده
            </ContextMenuCheckboxItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}
