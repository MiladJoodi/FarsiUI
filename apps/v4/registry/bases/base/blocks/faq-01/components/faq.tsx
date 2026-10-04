import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/base/ui/accordion"

const ITEMS = [
  {
    q: "چطور شروع کنم؟",
    a: "از فهرست بلوک‌ها یک بخش را انتخاب کنید، کد را کپی کنید و در پروژه بگذارید. همهٔ بلوک‌ها از قبل راست‌چین و با متن فارسی آماده‌اند.",
  },
  {
    q: "آیا راست‌چین و فونت فارسی پشتیبانی می‌شود؟",
    a: "بله. جهت نوشتار راست‌به‌چپ است، متن‌ها فارسی‌اند و با فونت‌های فارسی و اعداد بومی هماهنگ می‌شوند.",
  },
  {
    q: "هزینهٔ استفاده چقدر است؟",
    a: "کامپوننت‌ها و بلوک‌های پایه رایگان و متن‌باز هستند. برای پشتیبانی سازمانی و تم اختصاصی با تیم فروش تماس بگیرید.",
  },
  {
    q: "می‌توانم فقط یک بلوک را جدا بردارم؟",
    a: "بله. هر بلوک مستقل است و وابستگی‌هایش مشخص شده؛ نیازی به کل قالب نیست.",
  },
] as const

export default function FaqSimple() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <section className="w-full max-w-2xl rounded-xl border bg-background px-6 py-12 shadow-sm md:px-10 md:py-16">
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
    </div>
  )
}
