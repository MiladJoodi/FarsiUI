import { BadgeCheckIcon, ChevronLeftIcon } from "lucide-react"

import { Button } from "@/styles/base-nova/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/styles/base-nova/ui/item"

export function ItemDemo() {
  return (
    <div dir="rtl" className="flex w-full max-w-md flex-col gap-6">
      <Item variant="outline">
        <ItemContent>
          <ItemTitle>آیتم پایه</ItemTitle>
          <ItemDescription>یک آیتم ساده با عنوان و توضیح.</ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button variant="outline" size="sm">
            اقدام
          </Button>
        </ItemActions>
      </Item>
      <Item variant="outline" size="sm" render={<a href="#" />}>
        <ItemMedia>
          <BadgeCheckIcon className="size-5" />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>پروفایل شما تأیید شد.</ItemTitle>
        </ItemContent>
        <ItemActions>
          <ChevronLeftIcon className="size-4" />
        </ItemActions>
      </Item>
    </div>
  )
}
