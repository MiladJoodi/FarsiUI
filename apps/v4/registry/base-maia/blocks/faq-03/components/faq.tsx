import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/base-maia/ui/accordion"
import { Badge } from "@/registry/base-maia/ui/badge"
import { Button } from "@/registry/base-maia/ui/button"

const ITEMS = [
  {
    q: "چقدر طول می‌کشد تا اولین صفحه را بسازم؟",
    a: "با یک بلاک Hero و فرم ورود، بسیاری از تیم‌ها در همان روز اول نسخهٔ استیج دارند.",
  },
  {
    q: "آیا می‌توانم برند خودم را اعمال کنم؟",
    a: "رنگ‌ها، شعاع گوشه و فونت از طریق تم tailwind قابل تغییر است بدون دست‌کاری JSX هر بلاک.",
  },
  {
    q: "فرم‌ها با اعتبارسنجی فارسی کار می‌کنند؟",
    a: 'پیام خطا و placeholderها فارسی‌اند؛ فیلدهایی مثل ایمیل dir="ltr" دارند.',
  },
  {
    q: "جدول و داشبورد RTL دارید؟",
    a: "بلاک‌های dashboard و data-table با تراز راست و اعداد فارسی (bdi) آماده‌اند.",
  },
  {
    q: "برای استارتاپ مناسب است؟",
    a: "بله — تمرکز روی سرعت راه‌اندازی محصول فارسی بدون بازنویسی RTL از صفر.",
  },
] as const

export function FaqSplit() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-5xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-14">
        <div className="flex flex-col justify-center gap-4 lg:sticky lg:top-16 lg:self-start">
          <Badge variant="outline" className="w-fit">
            قبل از خرید
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight">سوالی دارید؟</h2>
          <p className="leading-relaxed text-muted-foreground">
            پاسخ‌های رایج دربارهٔ راه‌اندازی، تم و پشتیبانی. اگر چیزی پیدا
            نکردید، تیم ما معمولاً در کمتر از یک روز کاری جواب می‌دهد.
          </p>
          <Button variant="outline" className="mt-2 w-fit">
            تماس با فروش
          </Button>
        </div>
        <Accordion
          type="single"
          collapsible
          dir="rtl"
          lang="fa"
          className="w-full rounded-xl border bg-card px-1"
        >
          {ITEMS.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`}>
              <AccordionTrigger className="px-4 text-start">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="px-4 text-start text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
