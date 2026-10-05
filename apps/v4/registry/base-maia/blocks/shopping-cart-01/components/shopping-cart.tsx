import { Button } from "@/registry/base-maia/ui/button"
import { Separator } from "@/registry/base-maia/ui/separator"

const ITEMS = [
  {
    name: "هدفون بی‌سیم آرام",
    price: "۴٬۲۹۰٬۰۰۰",
    qty: "۱",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=80",
  },
  {
    name: "کیف چرم دستی",
    price: "۳٬۱۵۰٬۰۰۰",
    qty: "۱",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&auto=format&fit=crop&q=80",
  },
] as const

export default function ShoppingCartSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight">سبد خرید</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          لیست ساده بدون ویرایش تعداد
        </p>
      </div>

      <div className="divide-y overflow-hidden rounded-xl border bg-card">
        {ITEMS.map((item) => (
          <div key={item.name} className="flex gap-4 p-4">
            <div className="size-20 shrink-0 overflow-hidden rounded-lg border bg-muted">
              <img
                src={item.image}
                alt={item.name}
                className="size-full object-cover"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-medium">{item.name}</p>
              <p className="mt-1 text-sm tracking-normal text-muted-foreground">
                تعداد {item.qty}
              </p>
              <p className="mt-2 text-sm tracking-normal">
                <span className="font-semibold">{item.price}</span> تومان
              </p>
            </div>
          </div>
        ))}
      </div>

      <Separator className="my-6" />

      <div className="flex items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">جمع کل</p>
        <p className="text-lg font-semibold tracking-normal">۷٬۴۴۰٬۰۰۰ تومان</p>
      </div>
      <Button type="button" className="mt-4 w-full" size="lg">
        ادامهٔ خرید
      </Button>
    </section>
  )
}
