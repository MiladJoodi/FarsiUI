import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/base/ui/accordion"

const items = [
  {
    value: "item-1",
    trigger: "چطور رمز عبور را بازنشانی کنم؟",
    content:
      "در صفحهٔ ورود روی «فراموشی رمز» بزنید، ایمیل خود را وارد کنید تا لینک بازنشانی برایتان ارسال شود. لینک تا ۲۴ ساعت معتبر است.",
  },
  {
    value: "item-2",
    trigger: "می‌توانم پلن اشتراک را عوض کنم؟",
    content:
      "بله، هر زمان از تنظیمات حساب می‌توانید پلن را ارتقا یا کاهش دهید. تغییرات از دورهٔ صورتحساب بعدی اعمال می‌شود.",
  },
  {
    value: "item-3",
    trigger: "چه روش‌های پرداختی قبول می‌کنید؟",
    content:
      "کارت‌های بانکی اصلی، PayPal و انتقال بانکی. همهٔ پرداخت‌ها از طریق شرکای امن پردازش می‌شوند.",
  },
]

export default function AccordionBasic() {
  return (
    <Accordion dir="rtl" className="w-full max-w-lg">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
