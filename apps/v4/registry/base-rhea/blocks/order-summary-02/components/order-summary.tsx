import { Badge } from "@/registry/base-rhea/ui/badge"
import { Button } from "@/registry/base-rhea/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/base-rhea/ui/card"
import { Separator } from "@/registry/base-rhea/ui/separator"

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
      <Card className="bg-card">
        <CardHeader className="flex flex-row items-center justify-between gap-3 space-y-0">
          <CardTitle className="text-base">خلاصه سفارش</CardTitle>
          <Badge variant="outline" className="border">
            در انتظار پرداخت
          </Badge>
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
                <p className="text-xs tracking-normal text-muted-foreground">
                  تعداد {item.qty}
                </p>
              </div>
              <p className="text-sm tracking-normal">{item.price}</p>
            </div>
          ))}

          <Separator />

          <div className="space-y-2 text-sm tracking-normal">
            <div className="flex justify-between gap-3">
              <span className="text-muted-foreground">جمع جزء</span>
              <span>۷٬۴۴۰٬۰۰۰</span>
            </div>
            <div className="flex justify-between gap-3">
              <span className="text-muted-foreground">ارسال</span>
              <span>رایگان</span>
            </div>
            <div className="flex justify-between gap-3 font-semibold">
              <span>قابل پرداخت</span>
              <span>۷٬۴۴۰٬۰۰۰ تومان</span>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="button" className="w-full">
            ادامه به پرداخت
          </Button>
        </CardFooter>
      </Card>
    </section>
  )
}
