import { HeartIcon } from "lucide-react"

const ITEMS = [
  {
    name: "هدفون بی‌سیم آرام",
    price: "۴٬۲۹۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "کیف چرم دستی",
    price: "۳٬۱۵۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "ساعت هوشمند نور",
    price: "۸٬۹۰۰٬۰۰۰",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
  },
] as const

export default function WishlistSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">علاقه‌مندی‌ها</h2>
        <p className="mt-2 text-muted-foreground">لیست سادهٔ ذخیره‌شده‌ها</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {ITEMS.map((item) => (
          <article
            key={item.name}
            className="group flex flex-col gap-3 rounded-xl border bg-card p-3"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg border bg-muted">
              <img
                src={item.image}
                alt={item.name}
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute end-2 top-2 flex size-8 items-center justify-center rounded-full bg-background/90">
                <HeartIcon className="size-4 fill-primary text-primary" />
              </span>
            </div>
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="mt-1 text-sm tracking-normal text-muted-foreground">
                {item.price} تومان
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
