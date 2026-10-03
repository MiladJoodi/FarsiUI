import { Separator } from "@/registry/base-mira/ui/separator"

const ITEMS = [
  { name: "هدفون بی‌سیم آرام", qty: "۱", price: "۴٬۲۹۰٬۰۰۰" },
  { name: "کیف چرم دستی", qty: "۱", price: "۳٬۱۵۰٬۰۰۰" },
] as const

export function OrderSummarySimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-md flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="rounded-xl border bg-card p-6">
        <h2 className="text-xl font-bold tracking-tight">خلاصه سفارش</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          سفارش ساده بدون جزئیات ارسال
        </p>

        <ul className="mt-6 space-y-3 text-sm">
          {ITEMS.map((item) => (
            <li
              key={item.name}
              className="flex justify-between gap-3 tracking-normal"
            >
              <span className="text-muted-foreground">
                {item.name} × {item.qty}
              </span>
              <span>{item.price}</span>
            </li>
          ))}
        </ul>

        <Separator className="my-4" />

        <div className="flex justify-between gap-3 font-semibold tracking-normal">
          <span>جمع کل</span>
          <span>۷٬۴۴۰٬۰۰۰ تومان</span>
        </div>
      </div>
    </section>
  )
}
