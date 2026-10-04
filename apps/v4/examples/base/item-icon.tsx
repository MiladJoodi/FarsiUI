import { ShieldAlertIcon } from "lucide-react"

import { Button } from "@/registry/bases/base/ui/button"
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"

export default function ItemIcon() {
  return (
    <div dir="rtl" className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia variant="icon">
          <ShieldAlertIcon />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>هشدار امنیتی</ItemTitle>
          <ItemDescription>
            ورود جدید از دستگاه ناشناس شناسایی شد.
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="outline">
            بررسی
          </Button>
        </ItemActions>
      </Item>
    </div>
  )
}
