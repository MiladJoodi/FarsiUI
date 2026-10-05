import { Badge } from "@/registry/base-nova/ui/badge"
import { Button } from "@/registry/base-nova/ui/button"

const ORDERS = [
  {
    id: "#۱۴۰۵۰۷۲۱۰۱",
    date: "۲۱ مهر ۱۴۰۵",
    status: "تحویل‌شده",
    total: "۷٬۴۴۰٬۰۰۰",
    items: "هدفون بی‌سیم · کیف چرم",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: "#۱۴۰۵۰۷۱۸۰۴",
    date: "۱۸ مهر ۱۴۰۵",
    status: "در حال ارسال",
    total: "۸٬۹۰۰٬۰۰۰",
    items: "ساعت هوشمند نور",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&auto=format&fit=crop&q=80",
  },
  {
    id: "#۱۴۰۵۰۷۱۲۰۹",
    date: "۱۲ مهر ۱۴۰۵",
    status: "پرداخت‌شده",
    total: "۵٬۴۰۰٬۰۰۰",
    items: "کفش دویدن سبک",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&auto=format&fit=crop&q=80",
  },
] as const

export default function OrderHistoryCards() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">سفارش‌های اخیر</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          کارت با تصویر و جزئیات کوتاه
        </p>
      </div>

      <div className="space-y-3">
        {ORDERS.map((order) => (
          <article
            key={order.id}
            className="flex gap-4 rounded-xl border bg-card p-4"
          >
            <div className="size-16 shrink-0 overflow-hidden rounded-lg border bg-muted sm:size-20">
              <img
                src={order.image}
                alt=""
                className="size-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm font-medium tracking-normal">
                  {order.id}
                </span>
                <Badge variant="outline" className="border">
                  {order.status}
                </Badge>
              </div>
              <p className="truncate text-sm text-muted-foreground">
                {order.items}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-2">
                <p className="text-xs tracking-normal text-muted-foreground">
                  {order.date}
                </p>
                <p className="text-sm font-medium tracking-normal">
                  {order.total} تومان
                </p>
              </div>
              <Button type="button" size="sm" variant="outline">
                مشاهده جزئیات
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
