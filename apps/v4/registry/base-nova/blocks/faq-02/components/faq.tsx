import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/base-nova/ui/accordion"
import { Badge } from "@/registry/base-nova/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-nova/ui/card"

const ITEMS = [
  {
    q: "بلاک‌ها با shadcn سازگارند؟",
    a: "ساختار و API شبیه shadcn/ui است؛ تفاوت اصلی در راست‌چین، متن فارسی و تم FarsiUI است.",
  },
  {
    q: "تم روشن و تیره چطور کار می‌کند؟",
    a: "متغیرهای CSS در globals تعریف شده‌اند. با کلاس dark روی html یا سوییچ تم، همهٔ بلاک‌ها هماهنگ می‌مانند.",
  },
  {
    q: "آیا برای موبایل بهینه شده‌اند؟",
    a: "بله. فاصله‌ها، منوهای کشویی و فرم‌ها برای عرض کم و لمس انگشت در RTL تست شده‌اند.",
  },
  {
    q: "چطور به‌روزرسانی بگیرم؟",
    a: "با CLI رجیstry یا کپی دستی فایل‌های جدید؛ قبل از merge در پروژهٔ خود diff بگیرید.",
  },
  {
    q: "پشتیبانی فنی دارید؟",
    a: "مستندات و انجمن رایگان است. برای SLA و کانال اختصاصی، پلن سازمانی را ببینید.",
  },
] as const

export function FaqCard() {
  return (
    <section
      dir="rtl"
      lang="fa"
      className="mx-auto flex min-h-svh max-w-2xl flex-col justify-center px-6 py-16 md:px-10"
    >
      <Card dir="rtl" lang="fa">
        <CardHeader className="text-start">
          <Badge variant="secondary" className="mb-2 w-fit">
            راهنما
          </Badge>
          <CardTitle className="text-2xl">پرسش‌های متداول</CardTitle>
          <CardDescription>پاسخ کوتاه قبل از تماس با پشتیبانی</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion
            type="single"
            collapsible
            dir="rtl"
            lang="fa"
            className="w-full"
          >
            {ITEMS.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger className="text-start">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-start text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </section>
  )
}
