import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/base/ui/accordion"

export default function AccordionDisabled() {
  return (
    <Accordion dir="rtl" className="w-full max-w-lg">
      <AccordionItem value="item-1">
        <AccordionTrigger>آیا به تاریخچهٔ حساب دسترسی دارم؟</AccordionTrigger>
        <AccordionContent>
          بله، تاریخچهٔ کامل تراکنش‌ها، تغییر پلن و تیکت‌های پشتیبانی در بخش
          تاریخچهٔ حساب دیده می‌شود.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>اطلاعات ویژگی‌های ویژه</AccordionTrigger>
        <AccordionContent>
          این بخش مربوط به ویژگی‌های ویژه است. برای دسترسی، پلن خود را ارتقا دهید.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>چطور ایمیل را عوض کنم؟</AccordionTrigger>
        <AccordionContent>
          از تنظیمات حساب می‌توانید ایمیل را تغییر دهید. برای تأیید، ایمیلی به
          آدرس جدید ارسال می‌شود.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
