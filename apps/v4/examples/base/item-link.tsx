import { ChevronLeftIcon, ExternalLinkIcon } from "lucide-react"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/styles/base-nova/ui/item"

export default function ItemLink() {
  return (
    <div dir="rtl" className="flex w-full max-w-md flex-col gap-4">
      <Item render={<a href="#" />}>
        <ItemContent>
          <ItemTitle>مشاهدهٔ مستندات</ItemTitle>
          <ItemDescription>
            نحوهٔ شروع کار با کامپوننت‌ها را یاد بگیرید.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <ChevronLeftIcon className="size-4" />
        </ItemActions>
      </Item>
      <Item
        variant="outline"
        render={<a href="#" target="_blank" rel="noopener noreferrer" />}
      >
        <ItemContent>
          <ItemTitle>منبع خارجی</ItemTitle>
          <ItemDescription>
            در زبانهٔ جدید با ویژگی‌های امنیتی باز می‌شود.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <ExternalLinkIcon className="size-4" />
        </ItemActions>
      </Item>
    </div>
  )
}
