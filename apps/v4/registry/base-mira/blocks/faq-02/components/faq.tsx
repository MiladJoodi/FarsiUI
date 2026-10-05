import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/base-mira/ui/accordion"
import { Badge } from "@/registry/base-mira/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/base-mira/ui/card"

const ITEMS = [
  {
    q: "بلوک‌ها با پروژه‌های رایج سازگارند؟",
    a: "بله. ساختار آشناست؛ تفاوت اصلی در راست‌چین بودن، متن فارسی و تم آماده برای محصول ایرانی است.",
  },
  {
    q: "تم روشن و تیره چطور کار می‌کند؟",
    a: "رنگ‌ها از طریق متغیرهای تم تعریف شده‌اند. با سوییچ تم، همهٔ بلوک‌ها هماهنگ می‌مانند.",
  },
  {
    q: "آیا برای موبایل بهینه شده‌اند؟",
    a: "بله. فاصله‌ها، منوهای کشویی و فرم‌ها برای عرض کم و لمس انگشت در راست‌چین بررسی شده‌اند.",
  },
  {
    q: "چطور به‌روزرسانی بگیرم؟",
    a: "فایل‌های جدید را از رجیستری بگیرید یا دستی جایگزین کنید؛ قبل از ادغام در پروژه، تفاوت‌ها را بررسی کنید.",
  },
  {
    q: "پشتیبانی فنی دارید؟",
    a: "مستندات و انجمن رایگان است. برای پاسخ تضمینی و کانال اختصاصی، پلن سازمانی را ببینید.",
  },
] as const

export default function FaqCard() {
  return (
    <div
      dir="rtl"
      lang="fa"
      className="flex min-h-svh w-full items-center justify-center bg-muted p-6 md:p-10"
    >
      <div className="w-full max-w-2xl">
        <Card dir="rtl" lang="fa">
          <CardHeader className="text-start">
            <Badge variant="secondary" className="mb-2 w-fit">
              راهنما
            </Badge>
            <CardTitle className="text-2xl">پرسش‌های متداول</CardTitle>
            <CardDescription>
              پاسخ کوتاه قبل از تماس با پشتیبانی
            </CardDescription>
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
      </div>
    </div>
  )
}
