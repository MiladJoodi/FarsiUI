import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/styles/base-nova/ui/item"
import { Spinner } from "@/styles/base-nova/ui/spinner"

export function SpinnerDemo() {
  return (
    <div
      dir="rtl"
      className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]"
    >
      <Item variant="muted">
        <ItemMedia>
          <Spinner />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="line-clamp-1">در حال پردازش پرداخت...</ItemTitle>
        </ItemContent>
        <ItemContent className="flex-none justify-end">
          <span className="text-sm tabular-nums">۱۰۰٬۰۰۰ تومان</span>
        </ItemContent>
      </Item>
    </div>
  )
}
