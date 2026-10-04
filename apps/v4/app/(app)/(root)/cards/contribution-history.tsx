import { Button } from "@/registry/bases/base/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"
import { Item, ItemContent, ItemDescription } from "@/registry/bases/base/ui/item"

/** Static CSS bar chart — same look as the Recharts demo, without recharts. */
const BARS = [
  { month: "دی", height: "55%", color: "var(--chart-1)" },
  { month: "بهمن", height: "75%", color: "var(--chart-2)" },
  { month: "اسفند", height: "62%", color: "var(--chart-3)" },
  { month: "فروردین", height: "90%", color: "var(--chart-4)" },
  { month: "اردیبهشت", height: "48%", color: "var(--chart-5)" },
  { month: "خرداد", height: "72%", color: "var(--chart-1)" },
] as const

export function ContributionHistory() {
  return (
    <Card aria-hidden>
      <CardHeader>
        <CardTitle>تاریخچهٔ واریزها</CardTitle>
        <CardDescription>فعالیت ۶ ماه گذشته</CardDescription>
      </CardHeader>
      <CardContent>
        <div
          className="flex h-[200px] w-full items-end gap-3"
          aria-label="فعالیت واریز ۶ ماه گذشته"
        >
          {BARS.map((bar) => (
            <div
              key={bar.month}
              className="flex h-full flex-1 flex-col justify-end gap-2"
            >
              <div
                className="w-full max-w-12 self-center rounded-t-md"
                style={{
                  height: bar.height,
                  backgroundColor: bar.color,
                }}
              />
              <span className="text-center text-xs text-muted-foreground">
                {bar.month}
              </span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardContent>
        <div className="grid w-full grid-cols-1 gap-3 xl:grid-cols-2">
          <Item variant="muted" className="flex-col items-stretch">
            <ItemContent className="gap-1 text-right">
              <ItemDescription className="text-xs font-medium tracking-wider text-muted-foreground">
                پیش‌رو
              </ItemDescription>
              <span className="cn-font-heading text-base font-semibold">
                خرداد ۱۴۰۳
              </span>
              <span className="text-sm text-muted-foreground">زمان‌بندی‌شده</span>
            </ItemContent>
          </Item>
          <Item
            variant="muted"
            className="hidden flex-col items-stretch xl:flex"
          >
            <ItemContent className="gap-1 text-right">
              <ItemDescription className="text-xs font-medium tracking-wider text-muted-foreground">
                طرح پس‌انداز
              </ItemDescription>
              <span className="cn-font-heading text-base font-semibold">
                شتاب‌دار
              </span>
              <span className="text-sm text-muted-foreground">دوره‌ای</span>
            </ItemContent>
          </Item>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" tabIndex={-1}>
          مشاهدهٔ گزارش کامل
        </Button>
      </CardFooter>
    </Card>
  )
}
