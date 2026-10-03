import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/base-rhea/ui/accordion"
import { Badge } from "@/registry/base-rhea/ui/badge"
import { Button } from "@/registry/base-rhea/ui/button"

const ITEMS = [
  {
    q: "چقدر طول می‌کشد تا اولین صفحه را بسازم؟",
    a: "با یک بلوک معرفی و فرم ورود، بسیاری از تیم‌ها در همان روز اول نسخهٔ آزمایشی دارند.",
  },
  {
    q: "آیا می‌توانم برند خودم را اعمال کنم؟",
    a: "رنگ‌ها، شعاع گوشه و فونت از طریق تم قابل تغییر است؛ بدون دست‌کاری تک‌تک بلوک‌ها.",
  },
  {
    q: "فرم‌ها با اعتبارسنجی فارسی کار می‌کنند؟",
    a: "پیام خطا و متن راهنما فارسی‌اند؛ فیلدهایی مثل ایمیل به‌صورت چپ‌به‌راست نمایش داده می‌شوند تا خوانا بمانند.",
  },
  {
    q: "جدول و داشبورد راست‌چین دارید؟",
    a: "بله. بلوک‌های آمار و جدول با تراز راست و اعداد فارسی آماده‌اند.",
  },
  {
    q: "برای استارتاپ مناسب است؟",
    a: "بله — تمرکز روی سرعت راه‌اندازی محصول فارسی است، بدون بازنویسی راست‌چین از صفر.",
  },
] as const

export function FaqSplit() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <section className="w-full max-w-5xl rounded-xl border bg-background px-6 py-12 shadow-sm md:px-10 md:py-16">
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
    </div>
  )
}
