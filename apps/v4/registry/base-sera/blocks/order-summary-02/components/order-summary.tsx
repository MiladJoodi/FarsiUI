import { Badge } from "@/registry/base-sera/ui/badge"
import { Button } from "@/registry/base-sera/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-sera/ui/card"
import { Separator } from "@/registry/base-sera/ui/separator"

const ITEMS = [
  {
    name: "هدفون بی‌سیم آرام",
    qty: "۱",
    price: "۴٬۲۹۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&auto=format&fit=crop&q=80",
  },
  {
    name: "کیف چرم دستی",
    qty: "۱",
    price: "۳٬۱۵۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=300&auto=format&fit=crop&q=80",
  },
] as const

export function OrderSummaryCards() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card>
        <CardHeader className="flex flex-row items-center justify-between gap-3 space-y-0">
          <CardTitle className="text-base">خلاصه سفارش</CardTitle>
          <Badge variant="secondary">در انتظار پرداخت</Badge>
        </CardHeader>
        <CardContent className="space-y-4">
          {ITEMS.map((item) => (
            <div key={item.name} className="flex gap-3">
              <div className="size-14 shrink-0 overflow-hidden rounded-lg border bg-muted">
                <img
                  src={item.image}
                  alt={item.name}
                  className="size-full object-cover"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{item.name}</p>
                <p className="text-xs text-muted-foreground">
                  تعداد <bdi dir="ltr">{item.qty}</bdi>
                </p>
              </div>
              <p className="text-sm">
                <bdi dir="ltr" className="tabular-nums">
                  {item.price}
                </bdi>
              </p>
            </div>
          ))}

          <Separator />

          <div className="space-y-2 text-sm">
            <div className="flex justify-between gap-3">
              <span className="text-muted-foreground">جمع جزء</span>
              <bdi dir="ltr" className="tabular-nums">
                ۷٬۴۴۰٬۰۰۰
              </bdi>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-muted-foreground">ارسال</span>
              <span>رایگان</span>
            </div>
            <div className="flex justify-between gap-3 font-semibold">
              <span>قابل پرداخت</span>
              <span>
                <bdi dir="ltr" className="tabular-nums">
                  ۷٬۴۴۰٬۰۰۰
                </bdi>{" "}
                تومان
              </span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">ادامه به پرداخت</Button>
        </CardFooter>
      </Card>
    </section>
  )
}
