import { Badge } from "@/registry/base-rhea/ui/badge"
import { Button } from "@/registry/base-rhea/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/registry/base-rhea/ui/card"

const PRODUCTS = [
  {
    name: "هدفون بی‌سیم آرام",
    price: "۴٬۲۹۰٬۰۰۰",
    oldPrice: "۴٬۹۹۰٬۰۰۰",
    badge: "تخفیف",
    rating: "۴٫۸",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "کیف چرم دستی",
    price: "۳٬۱۵۰٬۰۰۰",
    oldPrice: null,
    badge: "جدید",
    rating: "۴٫۶",
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "ساعت هوشمند نور",
    price: "۸٬۹۰۰٬۰۰۰",
    oldPrice: null,
    badge: null,
    rating: "۴٫۹",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
  },
  {
    name: "لامپ رومیزی مینیمال",
    price: "۱٬۸۵۰٬۰۰۰",
    oldPrice: "۲٬۲۰۰٬۰۰۰",
    badge: "پرفروش",
    rating: "۴٫۵",
    image:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
  },
] as const

export function ProductGridCards() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">فروش ویژه</h2>
          <p className="mt-2 text-muted-foreground">
            کارت محصول با نشان، امتیاز و افزودن به سبد
          </p>
        </div>
        <Button variant="outline" size="sm">
          مشاهده همه
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTS.map((product) => (
          <Card key={product.name} className="overflow-hidden py-0">
            <div className="relative aspect-square overflow-hidden bg-muted">
              <img
                src={product.image}
                alt={product.name}
                className="size-full object-cover"
              />
              {product.badge ? (
                <Badge className="absolute start-3 top-3">
                  {product.badge}
                </Badge>
              ) : null}
            </div>
            <CardHeader className="gap-1 px-4 pt-4 pb-0 text-start">
              <h3 className="line-clamp-1 text-sm font-medium">
                {product.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                امتیاز{" "}
                <bdi dir="ltr" className="tabular-nums">
                  {product.rating}
                </bdi>
              </p>
            </CardHeader>
            <CardContent className="px-4 pt-2">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="font-semibold">
                  <bdi dir="ltr" className="tabular-nums">
                    {product.price}
                  </bdi>
                </span>
                <span className="text-xs text-muted-foreground">تومان</span>
                {product.oldPrice ? (
                  <span className="text-xs text-muted-foreground line-through">
                    <bdi dir="ltr" className="tabular-nums">
                      {product.oldPrice}
                    </bdi>
                  </span>
                ) : null}
              </div>
            </CardContent>
            <CardFooter className="px-4 pt-0 pb-4">
              <Button className="w-full" size="sm">
                افزودن به سبد
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
