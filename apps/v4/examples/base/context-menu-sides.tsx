import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/styles/base-nova/ui/context-menu"

export function ContextMenuSides() {
  return (
    <div dir="rtl" className="grid w-full max-w-sm grid-cols-2 gap-4">
      <ContextMenu>
        <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
          <span className="hidden pointer-fine:inline-block">
            راست‌کلیک (بالا)
          </span>
          <span className="hidden pointer-coarse:inline-block">
            لمس طولانی (بالا)
          </span>
        </ContextMenuTrigger>
        <ContextMenuContent side="top">
          <ContextMenuGroup>
            <ContextMenuItem>بازگشت</ContextMenuItem>
            <ContextMenuItem>جلو</ContextMenuItem>
            <ContextMenuItem>بارگذاری مجدد</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
      <ContextMenu>
        <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
          <span className="hidden pointer-fine:inline-block">
            راست‌کلیک (راست)
          </span>
          <span className="hidden pointer-coarse:inline-block">
            لمس طولانی (راست)
          </span>
        </ContextMenuTrigger>
        <ContextMenuContent side="right">
          <ContextMenuGroup>
            <ContextMenuItem>بازگشت</ContextMenuItem>
            <ContextMenuItem>جلو</ContextMenuItem>
            <ContextMenuItem>بارگذاری مجدد</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
      <ContextMenu>
        <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
          <span className="hidden pointer-fine:inline-block">
            راست‌کلیک (پایین)
          </span>
          <span className="hidden pointer-coarse:inline-block">
            لمس طولانی (پایین)
          </span>
        </ContextMenuTrigger>
        <ContextMenuContent side="bottom">
          <ContextMenuGroup>
            <ContextMenuItem>بازگشت</ContextMenuItem>
            <ContextMenuItem>جلو</ContextMenuItem>
            <ContextMenuItem>بارگذاری مجدد</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
      <ContextMenu>
        <ContextMenuTrigger className="flex aspect-video w-full max-w-xs items-center justify-center rounded-xl border border-dashed text-sm">
          <span className="hidden pointer-fine:inline-block">
            راست‌کلیک (چپ)
          </span>
          <span className="hidden pointer-coarse:inline-block">
            لمس طولانی (چپ)
          </span>
        </ContextMenuTrigger>
        <ContextMenuContent side="left">
          <ContextMenuGroup>
            <ContextMenuItem>بازگشت</ContextMenuItem>
            <ContextMenuItem>جلو</ContextMenuItem>
            <ContextMenuItem>بارگذاری مجدد</ContextMenuItem>
          </ContextMenuGroup>
        </ContextMenuContent>
      </ContextMenu>
    </div>
  )
}
