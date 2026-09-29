import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/styles/base-nova/ui/accordion"

export default function AccordionDemo() {
  return (
    <Accordion dir="rtl" defaultValue={["shipping"]} className="w-full max-w-lg">
      <AccordionItem value="shipping">
        <AccordionTrigger>گزینه‌های ارسال چیست؟</AccordionTrigger>
        <AccordionContent>
          ارسال عادی (۵ تا ۷ روز)، سریع (۲ تا ۳ روز) و overnight. برای سفارش‌های
          بین‌المللی ارسال رایگان داریم.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns">
        <AccordionTrigger>شرایط مرجوعی چگونه است؟</AccordionTrigger>
        <AccordionContent>
          تا ۳۰ روز پس از خرید می‌توانید مرجوع کنید. کالا باید استفاده‌نشده و در
          بسته‌بندی اصلی باشد. بازگشت وجه طی ۵ تا ۷ روز کاری انجام می‌شود.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger>چطور با پشتیبانی تماس بگیرم؟</AccordionTrigger>
        <AccordionContent>
          از طریق ایمیل، گفتگوی آنلاین یا تلفن. در روزهای کاری معمولاً تا ۲۴
          ساعت پاسخ می‌دهیم.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
