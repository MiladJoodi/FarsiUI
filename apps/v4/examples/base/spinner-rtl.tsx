import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/registry/bases/base/ui/item"
import { Spinner } from "@/registry/bases/base/ui/spinner"

export default function SpinnerRtl() {
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
          <span className="text-sm">۱۰۰٬۰۰۰ تومان</span>
        </ItemContent>
      </Item>
    </div>
  )
}
