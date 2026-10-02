import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/base/ui/accordion"

const ITEMS = [
  {
    q: "چطور شروع کنم؟",
    a: "از فهرست بلاک‌ها یک بخش را انتخاب کنید، کد را کپی کنید و در پروژه بگذارید. همهٔ بلاک‌ها از قبل راست‌چین و با متن فارسی آماده‌اند.",
  },
  {
    q: "آیا راست‌چین و فونت فارسی پشتیبانی می‌شود؟",
    a: "بله. جهت نوشتار راست‌به‌چپ است، متن‌ها فارسی‌اند و با فونت‌های فارسی و اعداد بومی هماهنگ می‌شوند.",
  },
  {
    q: "هزینهٔ استفاده چقدر است؟",
    a: "کامپوننت‌ها و بلاک‌های پایه رایگان و متن‌باز هستند. برای پشتیبانی سازمانی و تم اختصاصی با تیم فروش تماس بگیرید.",
  },
  {
    q: "می‌توانم فقط یک بلاک را جدا بردارم؟",
    a: "بله. هر بلاک مستقل است و وابستگی‌هایش مشخص شده؛ نیازی به کل قالب نیست.",
  },
] as const

export function FaqSimple() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <h2 className="mb-8 text-start text-3xl font-bold tracking-tight">
        پرسش‌های متداول
      </h2>
      <Accordion type="single" collapsible dir="rtl" lang="fa" className="w-full">
        {ITEMS.map((item, i) => (
          <AccordionItem key={item.q} value={`item-${i}`}>
            <AccordionTrigger className="text-start">{item.q}</AccordionTrigger>
            <AccordionContent className="text-start text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
