import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/registry/bases/base/ui/context-menu"

export default function ContextMenuBasic() {
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
            <ContextMenuItem>بازگشت</ContextMenuItem>
            <ContextMenuItem disabled>جلو</ContextMenuItem>
            <ContextMenuItem>بارگذاری مجدد</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}
