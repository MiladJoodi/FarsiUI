import { Button } from "@/registry/base-nova/ui/button"

const PRODUCT = {
  name: "هدفون بی‌سیم آرام",
  price: "۴٬۲۹۰٬۰۰۰",
  description:
    "صدای شفاف، نویزگیری سبک و باتری تا ۳۰ ساعت؛ مناسب کار روزمره و سفر.",
  image:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&auto=format&fit=crop&q=80",
} as const

export default function ProductDetailsSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="grid gap-8 md:grid-cols-2 md:items-center">
        <div className="aspect-square overflow-hidden rounded-2xl border bg-muted">
          <img
            src={PRODUCT.image}
            alt={PRODUCT.name}
            className="size-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight">{PRODUCT.name}</h1>
          <p className="text-lg tracking-normal">
            <span className="font-semibold">{PRODUCT.price}</span>{" "}
            <span className="text-muted-foreground">تومان</span>
          </p>
          <p className="leading-relaxed text-muted-foreground">
            {PRODUCT.description}
          </p>
          <Button type="button" size="lg" className="w-full sm:w-auto">
            افزودن به سبد
          </Button>
        </div>
      </div>
    </section>
  )
}
