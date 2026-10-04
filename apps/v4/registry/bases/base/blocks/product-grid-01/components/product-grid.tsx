const PRODUCTS = [
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

export default function ProductGridSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-bold tracking-tight">محصولات منتخب</h2>
        <p className="mt-2 text-muted-foreground">شبکهٔ ساده با تصویر و قیمت</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <article key={product.name} className="group flex flex-col gap-3">
            <div className="aspect-square overflow-hidden rounded-xl border bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="mt-1 text-sm tracking-normal text-muted-foreground">
                {product.price} تومان
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
