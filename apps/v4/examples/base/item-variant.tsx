import { InboxIcon } from "lucide-react"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/styles/base-nova/ui/item"

export function ItemVariant() {
  return (
    <div dir="rtl" className="flex w-full max-w-md flex-col gap-6">
      <Item>
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>واریانت پیش‌فرض</ItemTitle>
          <ItemDescription>پس‌زمینه شفاف بدون حاشیه.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="outline">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>واریانت حاشیه</ItemTitle>
          <ItemDescription>استایل حاشیه‌دار با مرز مشخص.</ItemDescription>
        </ItemContent>
      </Item>
      <Item variant="muted">
        <ItemMedia variant="icon">
          <InboxIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>واریانت کم‌رنگ</ItemTitle>
          <ItemDescription>
            پس‌زمینهٔ کم‌رنگ برای محتوای ثانویه.
          </ItemDescription>
        </ItemContent>
      </Item>
    </div>
  )
}
