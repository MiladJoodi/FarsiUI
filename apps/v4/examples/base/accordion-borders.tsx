import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/styles/base-nova/ui/accordion"

const items = [
  {
    value: "billing",
    trigger: "صورتحساب چطور کار می‌کند؟",
    content:
      "پلن‌های ماهانه و سالانه داریم. هزینه در ابتدای هر دوره گرفته می‌شود و هر زمان می‌توانید لغو کنید.",
  },
  {
    value: "security",
    trigger: "اطلاعات من امن است؟",
    content:
      "بله. از رمزنگاری end-to-end، انطباق SOC 2 و ممیزی‌های امنیتی منظم استفاده می‌کنیم.",
  },
  {
    value: "integration",
    trigger: "چه یکپارچه‌سازی‌هایی دارید؟",
    content:
      "با بیش از ۵۰۰ ابزار محبوب مثل Slack و Zapier یکپارچه می‌شویم. با REST API و webhook هم می‌توانید اتصال سفارشی بسازید.",
  },
]

export default function AccordionBorders() {
  return (
    <Accordion
      dir="rtl"
      className="w-full max-w-lg rounded-lg border"
      defaultValue={["billing"]}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="border-b px-4 last:border-b-0"
        >
          <AccordionTrigger>{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
