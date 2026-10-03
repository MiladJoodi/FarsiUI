import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/styles/base-nova/ui/accordion"

const items = [
  {
    value: "notifications",
    trigger: "تنظیمات اعلان",
    content:
      "نحوهٔ دریافت اعلان‌ها را مدیریت کنید. می‌توانید ایمیل یا اعلان موبایل را فعال کنید.",
  },
  {
    value: "privacy",
    trigger: "حریم خصوصی و امنیت",
    content:
      "تنظیمات حریم خصوصی و امنیت را کنترل کنید. احراز هویت دو مرحله‌ای، دستگاه‌های متصل و جلسات فعال را مدیریت کنید.",
  },
  {
    value: "billing",
    trigger: "صورتحساب و اشتراک",
    content:
      "پلن فعلی، تاریخچهٔ پرداخت و فاکتورهای بعدی را ببینید. روش پرداخت را به‌روز کنید یا اشتراک را لغو کنید.",
  },
]

export default function AccordionMultiple() {
  return (
    <Accordion dir="rtl" multiple className="w-full max-w-lg">
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}>
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
