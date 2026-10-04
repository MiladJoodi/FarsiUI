import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/bases/base/ui/accordion"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/bases/base/ui/card"

const items = [
  {
    value: "plans",
    trigger: "چه پلن‌هایی دارید؟",
    content:
      "سه پلن: شروع ($۹ در ماه)، حرفه‌ای ($۲۹) و سازمانی ($۹۹). هر پلن محدودیت فضا، دسترسی API و پشتیبانی بیشتری دارد.",
  },
  {
    value: "billing",
    trigger: "صورتحساب چطور کار می‌کند؟",
    content:
      "در ابتدای هر دوره به‌صورت خودکار شارژ می‌شود. کارت بانکی، PayPal و برای سازمانی‌ها انتقال ACH پذیرفته می‌شود.",
  },
  {
    value: "cancel",
    trigger: "چطور اشتراک را لغو کنم؟",
    content:
      "هر زمان از تنظیمات حساب می‌توانید لغو کنید. جریمه ندارد و دسترسی تا پایان دورهٔ فعلی ادامه دارد.",
  },
]

export default function AccordionCard() {
  return (
    <Card dir="rtl" className="w-full max-w-sm text-start">
      <CardHeader>
        <CardTitle>اشتراک و صورتحساب</CardTitle>
        <CardDescription>
          پرسش‌های رایج دربارهٔ حساب، پلن، پرداخت و لغو اشتراک.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion dir="rtl">
          {items.map((item) => (
            <AccordionItem key={item.value} value={item.value}>
              <AccordionTrigger>{item.trigger}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
