import { InboxIcon } from "lucide-react"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/styles/base-nova/ui/item"

export default function ItemSizeDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>اندازهٔ پیش‌فرض</ItemTitle>
          <ItemDescription>
            اندازهٔ استاندارد برای بیشتر کاربردها.
          </ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" size="sm">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>اندازهٔ کوچک</ItemTitle>
          <ItemDescription>اندازهٔ فشرده برای چیدمان‌های متراکم.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline" size="xs">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>اندازهٔ خیلی کوچک</ItemTitle>
          <ItemDescription>فشرده‌ترین اندازهٔ موجود.</ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}
